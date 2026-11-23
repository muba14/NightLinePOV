// Draws the twin-dial instrument cluster, centre display and climate panel
import { SCREEN } from './cockpit.js';
import { frame } from './road.js';

const FONT = '"Segoe UI", "Helvetica Neue", Arial, sans-serif';

function rr(g, x, y, w, h, r) { g.beginPath(); g.roundRect(x, y, w, h, r); }

function arrow(g, x, y, dir, on) {
  g.save();
  g.translate(x, y); g.scale(dir, 1);
  g.fillStyle = on ? '#2fe36b' : 'rgba(255,255,255,0.07)';
  if (on) { g.shadowColor = '#2fe36b'; g.shadowBlur = 12; }
  g.beginPath();
  g.moveTo(-14, 0); g.lineTo(0, -11); g.lineTo(0, -5); g.lineTo(12, -5); g.lineTo(12, 5); g.lineTo(0, 5); g.lineTo(0, 11);
  g.closePath(); g.fill();
  g.restore();
}

// Round analogue-style dial (drawn digitally, like a modern virtual cockpit)
function dial(g, cx, cy, R, value, max, majorStep, labelStep, labelDiv, redFrom, unit, sub) {
  const a0 = Math.PI * 0.75, a1 = Math.PI * 2.25;
  const ang = (v) => a0 + (a1 - a0) * Math.min(1, Math.max(0, v / max));
  // bezel ring
  const ring = g.createRadialGradient(cx, cy, R * 0.86, cx, cy, R * 1.02);
  ring.addColorStop(0, 'rgba(40,60,90,0)'); ring.addColorStop(0.8, 'rgba(70,110,170,0.35)'); ring.addColorStop(1, 'rgba(70,110,170,0)');
  g.fillStyle = ring; g.beginPath(); g.arc(cx, cy, R * 1.02, 0, Math.PI * 2); g.fill();
  g.strokeStyle = 'rgba(190,205,225,0.55)'; g.lineWidth = 2.5;
  g.beginPath(); g.arc(cx, cy, R, a0, a1); g.stroke();
  // red zone
  if (redFrom < max) {
    g.strokeStyle = '#d9252b'; g.lineWidth = 9;
    g.beginPath(); g.arc(cx, cy, R - 6, ang(redFrom), a1); g.stroke();
  }
  // ticks + labels
  g.textAlign = 'center'; g.textBaseline = 'middle';
  for (let v = 0; v <= max + 0.001; v += majorStep) {
    const a = ang(v), major = Math.abs((v / labelStep) - Math.round(v / labelStep)) < 1e-6;
    g.strokeStyle = v >= redFrom ? '#ff4a4a' : '#e6ebf2';
    g.lineWidth = major ? 3.2 : 1.6;
    const r0 = R - (major ? 22 : 13);
    g.beginPath(); g.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0); g.lineTo(cx + Math.cos(a) * (R - 3), cy + Math.sin(a) * (R - 3)); g.stroke();
    if (major) {
      g.fillStyle = v >= redFrom ? '#ff5a5a' : '#eef2f7';
      g.font = `600 ${Math.round(R * 0.14)}px ${FONT}`;
      g.fillText(String(Math.round(v / labelDiv)), cx + Math.cos(a) * (R - 44), cy + Math.sin(a) * (R - 44));
    }
  }
  // needle
  const a = ang(value);
  g.save();
  g.shadowColor = '#ff3b2f'; g.shadowBlur = 10;
  g.strokeStyle = '#ff4a2f'; g.lineWidth = 5; g.lineCap = 'round';
  g.beginPath(); g.moveTo(cx + Math.cos(a) * R * 0.18, cy + Math.sin(a) * R * 0.18); g.lineTo(cx + Math.cos(a) * (R - 8), cy + Math.sin(a) * (R - 8)); g.stroke();
  g.restore();
  g.fillStyle = '#0b0d11'; g.beginPath(); g.arc(cx, cy, R * 0.2, 0, Math.PI * 2); g.fill();
  g.strokeStyle = 'rgba(200,210,225,0.5)'; g.lineWidth = 2; g.stroke();
  g.fillStyle = '#9fb0c6'; g.font = `600 ${Math.round(R * 0.1)}px ${FONT}`;
  g.fillText(unit, cx, cy + R * 0.42);
  if (sub) { g.font = `500 ${Math.round(R * 0.085)}px ${FONT}`; g.fillText(sub, cx, cy + R * 0.56); }
}

export class Screens {
  constructor(cockpit) {
    this.cl = cockpit.cluster; this.ce = cockpit.center; this.cm = cockpit.climate;
    this.acc = 1; this.slowAcc = 1; this.trackT = 37;
    this.drawClimate(21.5, 22.0);
  }

  drawClimate(tl, tr) {
    const g = this.cm.canvas.getContext('2d'), W = 512, H = 160;
    const bg = g.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#0c0d10'); bg.addColorStop(1, '#050507');
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    g.textAlign = 'center'; g.textBaseline = 'middle';
    // temperature read-outs (next to the physical knobs)
    g.fillStyle = '#ff5a3c'; g.shadowColor = '#ff5a3c'; g.shadowBlur = 8;
    g.font = `600 34px ${FONT}`;
    g.fillText(tl.toFixed(1), 130, 62); g.fillText(tr.toFixed(1), 382, 62);
    g.shadowBlur = 0;
    // centre buttons
    const btns = ['AUTO', 'A/C', 'MAX', '❄', '≋'];
    btns.forEach((b, i) => {
      const x = 176 + (i % 3) * 56, y = i < 3 ? 40 : 100;
      const xx = i < 3 ? x : 204 + (i - 3) * 56;
      g.fillStyle = '#16181d'; rr(g, xx - 24, y - 20, 48, 40, 7); g.fill();
      g.strokeStyle = 'rgba(255,255,255,0.12)'; g.lineWidth = 1.5; g.stroke();
      g.fillStyle = i === 0 || i === 1 ? '#ff8a3c' : '#e7ebf1';
      g.font = `700 ${b.length > 2 ? 14 : 20}px ${FONT}`;
      g.fillText(b, xx, y);
    });
    // fan level dots
    for (let i = 0; i < 5; i++) { g.fillStyle = i < 3 ? '#e7ebf1' : 'rgba(255,255,255,0.15)'; g.beginPath(); g.arc(100 + i * 16, 118, 4, 0, Math.PI * 2); g.fill(); }
    for (let i = 0; i < 5; i++) { g.fillStyle = i < 3 ? '#e7ebf1' : 'rgba(255,255,255,0.15)'; g.beginPath(); g.arc(348 + i * 16, 118, 4, 0, Math.PI * 2); g.fill(); }
    this.cm.tex.needsUpdate = true;
  }

  update(dt, st) {
    this.acc += dt; this.slowAcc += dt; this.trackT += dt;
    if (this.acc < 1 / 30) return;
    this.acc = 0;
    this.drawCluster(st);
    if (this.slowAcc > 1 / 12) { this.slowAcc = 0; this.drawCenter(st); }
  }

  drawCluster(st) {
    const g = this.cl.canvas.getContext('2d'), W = SCREEN.W, H = SCREEN.H;
    const bg = g.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#05070b'); bg.addColorStop(1, '#010203');
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    const glow = g.createRadialGradient(W / 2, H * 0.55, 10, W / 2, H * 0.55, 420);
    glow.addColorStop(0, 'rgba(30,55,95,0.35)'); glow.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = glow; g.fillRect(0, 0, W, H);

    // left: speedometer (0-330), right: tachometer (0-8)
    dial(g, 215, 200, 165, st.speedKmh, 330, 10, 40, 1, 999, 'km/h');
    dial(g, 809, 200, 165, st.rpm / 1000, 8, 0.5, 1, 1, 6.5, '1/min x1000');

    // centre info column
    const cx = W / 2;
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillStyle = 'rgba(255,255,255,0.05)'; rr(g, cx - 108, 70, 216, 250, 14); g.fill();
    // mini lane view
    const top = 92, bot = 176;
    g.save();
    g.beginPath(); g.rect(cx - 100, top, 200, bot - top); g.clip();
    const lx = (d, y) => { const t = (y - top) / (bot - top); const half = 22 + 58 * t; return cx + (d - st.d) / 7.2 * half * 2 * 0.62; };
    const assist = st.speedKmh > 60;
    const lane = (d, c, dash) => { g.strokeStyle = c; g.lineWidth = 3; g.setLineDash(dash ? [9, 8] : []); g.lineDashOffset = -(st.s * 4) % 17; g.beginPath(); g.moveTo(lx(d, top), top); g.lineTo(lx(d, bot), bot); g.stroke(); };
    lane(1.45, assist ? '#2fe36b' : '#c9d3e0', false); lane(5.1, '#c9d3e0', true); lane(8.75, assist ? '#2fe36b' : '#c9d3e0', false);
    g.setLineDash([]);
    for (const c of st.traffic) {
      if (c.ds < 2 || c.ds > 140 || c.d < 0) continue;
      const y = bot - (bot - top) * Math.pow(c.ds / 140, 0.6), t = (y - top) / (bot - top), sz = 8 + 16 * t;
      g.fillStyle = c.ds < 30 ? '#ffb02e' : '#c4cedb';
      rr(g, lx(c.d, y) - sz / 2, y - sz * 0.6, sz, sz * 0.85, 3); g.fill();
    }
    g.restore();
    g.fillStyle = '#e6ecf5'; rr(g, cx - 11, 160, 22, 28, 6); g.fill();
    // digital speed + gear
    g.fillStyle = '#ffffff'; g.font = `700 44px ${FONT}`;
    g.fillText(String(Math.round(st.speedKmh)), cx, 222);
    g.fillStyle = '#8fa2bb'; g.font = `600 15px ${FONT}`; g.fillText('km/h', cx, 252);
    g.fillStyle = st.gear === 'R' ? '#ff6b5b' : '#ffffff'; g.font = `700 26px ${FONT}`;
    g.fillText(st.gear, cx, 288);
    g.fillStyle = '#ff5a4a'; g.font = `700 13px ${FONT}`; g.fillText('SPORT', cx, 310);
    // top line
    g.fillStyle = '#e8edf5'; g.font = `600 17px ${FONT}`;
    g.fillText(st.clock, cx - 62, 34); g.fillText(`${st.tempOut}°C`, cx + 62, 34);
    if (assist) { g.fillStyle = '#2fe36b'; g.font = `700 12px ${FONT}`; g.fillText('ŞERİT ASİSTANI', cx, 82); }
    arrow(g, cx - 150, 34, 1, (st.indicator === -1 || st.hazard) && st.blinkOn);
    arrow(g, cx + 150, 34, -1, (st.indicator === 1 || st.hazard) && st.blinkOn);
    if (st.highBeam) { g.fillStyle = '#3d8bff'; g.beginPath(); g.arc(cx - 190, 34, 9, Math.PI / 2, -Math.PI / 2); g.fill(); g.fillRect(cx - 207, 28, 13, 3); g.fillRect(cx - 207, 34, 13, 3); g.fillRect(cx - 207, 40, 13, 3); }
    if (st.tcs) { g.fillStyle = '#ffb02e'; g.font = `700 14px ${FONT}`; g.fillText('TCS', cx + 195, 34); }
    // fuel + odo in bottom of dials
    g.fillStyle = 'rgba(255,255,255,0.12)'; rr(g, 155, 330, 120, 6, 3); g.fill();
    g.fillStyle = st.fuel < 0.15 ? '#ff6b5b' : '#e8edf5'; rr(g, 155, 330, 120 * st.fuel, 6, 3); g.fill();
    g.fillStyle = '#8fa2bb'; g.font = `600 13px ${FONT}`; g.fillText(`${Math.round(st.rangeKm)} km`, 215, 352);
    g.fillText(`${Math.round(st.odo)} km`, 809, 340);
    g.fillText(`Yağ ${Math.round(st.oilTemp)}°C`, 809, 358);
    this.cl.tex.needsUpdate = true;
  }

  drawCenter(st) {
    const g = this.ce.canvas.getContext('2d'), W = SCREEN.W, H = SCREEN.H;
    const bg = g.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#0b1321'); bg.addColorStop(1, '#04070d');
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    // status bar
    g.textBaseline = 'middle';
    g.fillStyle = 'rgba(255,255,255,0.04)'; g.fillRect(0, 0, W, 36);
    g.fillStyle = '#e8edf5'; g.font = `600 18px ${FONT}`; g.textAlign = 'left';
    g.fillText('Navigasyon', 18, 18);
    g.textAlign = 'right'; g.fillText(`${st.clock}   ${st.tempOut}°C`, W - 18, 18);

    // map (left)
    const mx0 = 12, my0 = 46, mw = 640, mh = H - 58;
    g.save();
    rr(g, mx0, my0, mw, mh, 12); g.clip();
    g.fillStyle = '#0e1a2c'; g.fillRect(mx0, my0, mw, mh);
    g.fillStyle = 'rgba(70,110,80,0.10)';
    for (let i = 0; i < 7; i++) {
      const bx = mx0 + ((i * 113 + Math.floor(st.s * 0.05)) % mw), by = my0 + ((i * 61 + Math.floor(st.s * 0.2)) % mh);
      g.beginPath(); g.arc(bx, by, 45 + i * 7, 0, Math.PI * 2); g.fill();
    }
    const px = mx0 + mw / 2, py = my0 + mh - 50, sc = 0.22;
    const ch = Math.cos(st.yaw), sh = Math.sin(st.yaw);
    const toMap = (wx, wz) => { const dx = wx - st.x, dz = wz - st.z; return [px + (dx * ch - dz * sh) * sc, py + (dx * sh + dz * ch) * sc]; };
    const f = {};
    g.strokeStyle = 'rgba(150,170,200,0.25)'; g.lineWidth = 3;
    for (let k = Math.floor((st.s - 200) / 300); k < (st.s + 1400) / 300; k++) {
      frame(k * 300 + 120, f);
      const side = (k % 2 ? 1 : -1);
      const a = toMap(f.x, f.z), b = toMap(f.x + f.rx * side * 600 + f.tx * 200, f.z + f.rz * side * 600 + f.tz * 200);
      g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke();
    }
    g.lineJoin = 'round';
    for (const [w, c] of [[12, 'rgba(40,140,255,0.25)'], [6, '#3b9bff']]) {
      g.strokeStyle = c; g.lineWidth = w; g.beginPath();
      for (let s = st.s - 300, i = 0; s < st.s + 1500; s += 20, i++) { frame(s, f); const p = toMap(f.x, f.z); i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]); }
      g.stroke();
    }
    g.fillStyle = '#ffffff'; g.shadowColor = '#3b9bff'; g.shadowBlur = 14;
    g.beginPath(); g.moveTo(px, py - 15); g.lineTo(px + 11, py + 11); g.lineTo(px, py + 4); g.lineTo(px - 11, py + 11); g.closePath(); g.fill();
    g.shadowBlur = 0;
    g.fillStyle = 'rgba(8,14,24,0.88)'; rr(g, mx0 + 12, my0 + 12, 250, 66, 10); g.fill();
    g.fillStyle = '#3b9bff'; g.font = `700 28px ${FONT}`; g.textAlign = 'left'; g.fillText('↑', mx0 + 26, my0 + 45);
    const nextKm = (5000 - (st.s % 5000)) / 1000;
    g.fillStyle = '#e8edf5'; g.font = `700 23px ${FONT}`; g.fillText(`${nextKm.toFixed(1)} km`, mx0 + 58, my0 + 34);
    g.fillStyle = '#8fa2bb'; g.font = `500 15px ${FONT}`; g.fillText('O-77 Kanyon Otoyolu', mx0 + 58, my0 + 58);
    g.fillStyle = '#ffffff'; g.beginPath(); g.arc(mx0 + 40, my0 + mh - 36, 22, 0, Math.PI * 2); g.fill();
    g.strokeStyle = '#e0261c'; g.lineWidth = 5; g.stroke();
    g.fillStyle = '#111'; g.font = `700 17px ${FONT}`; g.textAlign = 'center'; g.fillText('120', mx0 + 40, my0 + mh - 35);
    g.fillStyle = 'rgba(8,14,24,0.88)'; rr(g, mx0 + mw - 150, my0 + mh - 58, 138, 46, 10); g.fill();
    g.fillStyle = '#e8edf5'; g.font = `600 17px ${FONT}`; g.fillText(st.eta, mx0 + mw - 81, my0 + mh - 42);
    g.fillStyle = '#8fa2bb'; g.font = `500 13px ${FONT}`; g.fillText('Varış', mx0 + mw - 81, my0 + mh - 22);
    g.restore();

    // media (right)
    const ax = mx0 + mw + 12, aw = W - ax - 12, ay = my0;
    g.fillStyle = 'rgba(255,255,255,0.05)'; rr(g, ax, ay, aw, mh, 12); g.fill();
    const art = 130;
    const ag = g.createLinearGradient(ax + 16, ay + 16, ax + 16 + art, ay + 16 + art);
    ag.addColorStop(0, '#f2c14e'); ag.addColorStop(0.5, '#e86a3a'); ag.addColorStop(1, '#4b2a6a');
    g.fillStyle = ag; rr(g, ax + 16, ay + 16, art, art, 10); g.fill();
    g.fillStyle = 'rgba(255,255,255,0.85)'; g.beginPath(); g.arc(ax + 16 + art * 0.62, ay + 16 + art * 0.4, 22, 0, Math.PI * 2); g.fill();
    g.fillStyle = 'rgba(20,10,30,0.8)'; g.beginPath(); g.moveTo(ax + 16, ay + 16 + art); g.lineTo(ax + 16 + art * 0.45, ay + 16 + art * 0.55); g.lineTo(ax + 16 + art, ay + 16 + art); g.fill();
    g.textAlign = 'left'; g.fillStyle = '#e8edf5'; g.font = `600 19px ${FONT}`;
    g.fillText('Gece Sürüşü', ax + 160, ay + 46);
    g.fillStyle = '#8fa2bb'; g.font = `500 15px ${FONT}`; g.fillText('NL FM 98.4', ax + 160, ay + 72);
    const dur = 246, pos = this.trackT % dur;
    g.fillStyle = 'rgba(255,255,255,0.12)'; rr(g, ax + 16, ay + 172, aw - 32, 5, 3); g.fill();
    g.fillStyle = '#ff7a3a'; rr(g, ax + 16, ay + 172, (aw - 32) * pos / dur, 5, 3); g.fill();
    g.fillStyle = '#e8edf5';
    const bx = ax + aw / 2, by = ay + 240;
    g.beginPath(); g.moveTo(bx - 50, by); g.lineTo(bx - 64, by - 10); g.lineTo(bx - 64, by + 10); g.fill();
    g.beginPath(); g.arc(bx, by, 22, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#0a1220'; g.fillRect(bx - 8, by - 10, 5, 20); g.fillRect(bx + 3, by - 10, 5, 20);
    g.fillStyle = '#e8edf5';
    g.beginPath(); g.moveTo(bx + 50, by); g.lineTo(bx + 64, by - 10); g.lineTo(bx + 64, by + 10); g.fill();
    this.ce.tex.needsUpdate = true;
  }
}
