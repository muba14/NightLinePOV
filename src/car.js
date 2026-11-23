// Arcade-realistic car physics constrained to the player carriageway
import { frame, project, roadYaw, roadDY, ROAD } from './road.js';
import { clamp } from './noise.js';

const MASS = 1900, WHEELBASE = 2.98, WHEEL_R = 0.35, FINAL = 3.15;
const GEARS = [5.0, 3.2, 2.14, 1.72, 1.31, 1.0, 0.82, 0.64];
const MAX_V = 305 / 3.6;

function torque(rpm) {
  if (rpm < 1800) return 430 + (rpm - 800) / 1000 * 320;
  if (rpm < 5800) return 750;
  return Math.max(0, 750 - (rpm - 5800) * 0.16);
}

export class Car {
  constructor() {
    this.reset(120, ROAD.lanes[1]);
    this.events = [];
  }

  reset(s, d) {
    const f = frame(s);
    this.x = f.x + f.rx * d; this.z = f.z + f.rz * d;
    this.y = f.y;
    this.yaw = roadYaw(s);
    this.vx = 0; this.vz = 0;
    this.vLong = 0; this.vLat = 0;
    this.s = s; this.d = d;
    this.steer = 0; this.steerInput = 0;
    this.gear = 1; this.mode = 'D'; // D, R, N
    this.rpm = 800; this.throttle = 0; this.brake = 0;
    this.shiftT = 0; this.accLong = 0; this.accLat = 0;
    this.slip = 0; this.tcs = false;
    this.pitch = 0;
    this.stillT = 0;
    this.impact = 0;
  }

  update(dt, inp) {
    // ---- steering (speed sensitive, smoothed) ----
    const target = inp.axis !== undefined ? inp.axis : (inp.left ? 1 : 0) - (inp.right ? 1 : 0);
    const rate = target === 0 ? 3.2 : (Math.sign(target) !== Math.sign(this.steerInput) ? 4.5 : 2.2);
    this.steerInput += clamp(target - this.steerInput, -rate * dt, rate * dt);
    const v = Math.abs(this.vLong);
    const maxSteer = 0.58 / (1 + v / 16);
    this.steer = this.steerInput * maxSteer;

    // ---- pedals / gearbox mode ----
    let gas = inp.up ? 1 : 0, brk = inp.down ? 1 : 0;
    if (this.mode === 'D' || this.mode === 'N') {
      if (brk && this.vLong < 0.4 && !gas) {
        this.stillT += dt;
        if (this.stillT > 0.25) { this.mode = 'R'; this.gear = 1; this.stillT = 0; this.events.push('gear'); }
      } else this.stillT = 0;
    } else if (this.mode === 'R') {
      if (gas && this.vLong > -0.4 && !brk) {
        this.stillT += dt;
        if (this.stillT > 0.2) { this.mode = 'D'; this.gear = 1; this.stillT = 0; this.events.push('gear'); }
      } else this.stillT = 0;
    }
    let throttle = 0, brake = 0;
    if (this.mode === 'D') { throttle = gas; brake = brk; }
    else if (this.mode === 'R') { throttle = brk; brake = gas; }
    this.throttle += (throttle - this.throttle) * Math.min(1, dt * 8);
    this.brake = brake;

    // ---- engine / gearbox ----
    const ratio = GEARS[this.gear - 1];
    const wheelRpm = Math.abs(this.vLong) / (2 * Math.PI * WHEEL_R) * 60;
    let rpm = wheelRpm * ratio * FINAL;
    if (this.mode === 'R') rpm = wheelRpm * 4.2 * FINAL;
    const launch = 900 + this.throttle * 3200;
    if (this.gear === 1 && rpm < launch) rpm = rpm + (launch - rpm) * 0.85;
    rpm = Math.max(780, rpm);
    if (this.shiftT > 0) { this.shiftT -= dt; }
    this.rpm += (rpm - this.rpm) * Math.min(1, dt * 14);
    this.rpm = Math.min(this.rpm, 7300);

    if (this.mode === 'D' && this.shiftT <= 0) {
      const up = 2400 + this.throttle * 4400;
      const down = 1250 + this.throttle * 2300;
      if (rpm > up && this.gear < 8) { this.gear++; this.shiftT = 0.16; this.events.push('shift'); }
      else if (this.gear > 1 && wheelRpm * GEARS[this.gear - 2] * FINAL < 6500 && rpm < down) { this.gear--; this.shiftT = 0.12; this.events.push('down'); }
    }

    // ---- longitudinal forces ----
    const g = 9.81;
    let drive = 0;
    if (this.shiftT <= 0) {
      const r = this.mode === 'R' ? 4.2 : ratio;
      drive = torque(Math.min(this.rpm, 7200)) * this.throttle * r * FINAL * 0.9 / WHEEL_R;
      if (this.rpm >= 7200) drive *= 0.2; // limiter
    }
    const tractionMax = 0.98 * MASS * g;
    this.tcs = drive > tractionMax;
    drive = Math.min(drive, tractionMax);
    if (this.mode === 'R') drive = -drive;
    const dirV = Math.sign(this.vLong) || 0;
    const brakeF = this.brake * 1.12 * MASS * g * dirV + (inp.handbrake ? 0.45 * MASS * g * dirV : 0);
    const drag = 0.44 * this.vLong * Math.abs(this.vLong);
    const roll = 13 * this.vLong;
    const engineBrake = (this.mode === 'D' && this.throttle < 0.05) ? 180 * dirV * Math.min(1, Math.abs(this.vLong) / 5) : 0;
    const slopeF = MASS * g * roadDY(this.s) * (Math.cos(this.yaw - roadYaw(this.s)) > 0 ? 1 : -1);
    let aLong = (drive - drag - roll - engineBrake - slopeF) / MASS;
    const brakeA = brakeF / MASS;
    let newV = this.vLong + aLong * dt;
    // brakes never reverse direction
    if (Math.abs(brakeA * dt) > Math.abs(newV) && this.brake + (inp.handbrake ? 1 : 0) > 0) newV = 0;
    else newV -= brakeA * dt;
    if (this.mode === 'D' && newV < 0 && !inp.handbrake) newV = Math.max(newV, -0.5);
    if (this.mode === 'R') newV = Math.max(newV, -9);
    newV = Math.min(newV, MAX_V);
    this.accLong = (newV - this.vLong) / dt;
    this.vLong = newV;

    // ---- yaw / lateral ----
    let yawRate = this.vLong * Math.tan(this.steer) / WHEELBASE;
    const latLimit = (inp.handbrake ? 0.75 : 1.08) * g;
    const latA = Math.abs(yawRate * this.vLong);
    if (latA > latLimit && v > 1) {
      const k = latLimit / latA;
      this.slip = Math.min(1, (1 - k) * 2);
      yawRate *= k + (inp.handbrake ? 0.35 : 0.08) * (1 - k);
    } else this.slip *= 0.9;
    if (inp.handbrake && v > 8) { yawRate *= 1.25; this.slip = Math.max(this.slip, 0.6); }
    this.yaw += yawRate * dt;
    this.accLat = yawRate * this.vLong;
    // lateral slide decays with grip
    const grip = inp.handbrake ? 1.6 : 9;
    this.vLat += (-this.accLat * (inp.handbrake ? 0.08 : 0.015)) * dt;
    this.vLat *= Math.exp(-grip * dt);

    // ---- integrate position ----
    const fx = -Math.sin(this.yaw), fz = -Math.cos(this.yaw);
    const rx = Math.cos(this.yaw), rz = -Math.sin(this.yaw);
    this.vx = fx * this.vLong + rx * this.vLat;
    this.vz = fz * this.vLong + rz * this.vLat;
    this.x += this.vx * dt; this.z += this.vz * dt;

    // ---- road constraints (median barrier & wall) ----
    const p = project(this.x, this.z, this.s);
    this.s = p.s; this.d = p.d;
    const f = frame(this.s);
    if (this.d < ROAD.minD || this.d > ROAD.maxD) {
      const side = this.d < ROAD.minD ? 1 : -1; // push direction along road right vector
      const lim = this.d < ROAD.minD ? ROAD.minD : ROAD.maxD;
      this.x = f.x + f.rx * lim; this.z = f.z + f.rz * lim; this.d = lim;
      const vr = this.vx * f.rx + this.vz * f.rz; // velocity into barrier (sign)
      const into = -vr * side;
      if (into > 0) {
        // remove normal velocity, bounce a bit, scrub speed
        const nx = f.rx * side, nz = f.rz * side;
        this.vx += nx * into * 1.25; this.vz += nz * into * 1.25;
        const lossK = Math.min(0.6, into * 0.04);
        // align heading toward road
        const ry = roadYaw(this.s) + (Math.cos(this.yaw - roadYaw(this.s)) < 0 ? Math.PI : 0);
        let dy = ((ry - this.yaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
        this.yaw += dy * Math.min(1, into * 0.06 + 0.15);
        this.vLong = (this.vx * -Math.sin(this.yaw) + this.vz * -Math.cos(this.yaw)) * (1 - lossK);
        this.vLat = 0;
        if (into > 0.8) { this.impact = Math.min(1, into / 12); this.events.push('hit'); }
      }
    }
    this.y = f.y;
    this.pitch = Math.atan(roadDY(this.s)) * Math.cos(this.yaw - roadYaw(this.s));
    this.speedKmh = Math.abs(this.vLong) * 3.6;
  }

  gearLabel() {
    if (this.mode === 'R') return 'R';
    if (this.mode === 'N') return 'N';
    return 'D' + this.gear;
  }
}
