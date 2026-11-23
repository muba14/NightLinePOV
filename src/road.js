// Endless divided highway defined analytically by distance s.
// Forward direction is -Z. Right-hand traffic: player carriageway is d > 0.
import { fbm, ridged, smoothstep } from './noise.js';

export const ROAD = {
  half: 10.5,          // paved half width
  lanes: [3.3, 6.9],   // our lane centres (left/fast, right)
  onLanes: [-3.3, -6.9],
  minD: 1.0,           // median barrier limit for the car body
  maxD: 9.85,          // outer wall limit
};

export function roadX(s) {
  return 90 * Math.sin(s * 0.0021) + 35 * Math.sin(s * 0.0057 + 1.3) + 6 * Math.sin(s * 0.011 + 0.4);
}
export function roadDX(s) {
  return 90 * 0.0021 * Math.cos(s * 0.0021) + 35 * 0.0057 * Math.cos(s * 0.0057 + 1.3) + 6 * 0.011 * Math.cos(s * 0.011 + 0.4);
}
export function roadY(s) {
  return 14 * Math.sin(s * 0.0016) + 5 * Math.sin(s * 0.0043 + 2.0);
}
export function roadDY(s) {
  return 14 * 0.0016 * Math.cos(s * 0.0016) + 5 * 0.0043 * Math.cos(s * 0.0043 + 2.0);
}

const _f = { x: 0, y: 0, z: 0, tx: 0, tz: 0, rx: 0, rz: 0, n: 1 };
export function frame(s, out = _f) {
  const dx = roadDX(s);
  const n = Math.sqrt(1 + dx * dx);
  out.x = roadX(s); out.y = roadY(s); out.z = -s;
  out.tx = dx / n; out.tz = -1 / n;
  out.rx = 1 / n; out.rz = dx / n;
  out.n = n;
  return out;
}

// Road heading as yaw (rotation.y) so that the object's -Z points along +s
export function roadYaw(s) {
  const dx = roadDX(s);
  return Math.atan2(-dx, 1);
}

const _p = { s: 0, d: 0 };
const _pf = {};
export function project(x, z, sGuess, out = _p) {
  let s = sGuess === undefined ? -z : sGuess;
  for (let i = 0; i < 4; i++) {
    frame(s, _pf);
    const along = (x - _pf.x) * _pf.tx + (z - _pf.z) * _pf.tz;
    s += along / _pf.n;
  }
  frame(s, _pf);
  out.s = s;
  out.d = (x - _pf.x) * _pf.rx + (z - _pf.z) * _pf.rz;
  return out;
}

export function worldAt(s, d, out) {
  const f = frame(s);
  out.x = f.x + f.rx * d;
  out.z = f.z + f.rz * d;
  out.y = f.y;
  return out;
}

// Terrain height relative to world, sampled in road space (s, d)
export function terrainH(s, d) {
  const base = roadY(s);
  if (d > 11.6) {
    const t = d - 11.6;
    const k = 0.4 + 0.75 * (fbm(s * 0.003, 7.1, 3) * 0.5 + 0.5);
    let h = 1.35 + Math.pow(t, 1.16) * k;
    h += fbm(s * 0.025, t * 0.025, 5) * Math.min(t, 50) * 0.45;
    h += fbm(s * 0.11, t * 0.11, 3) * Math.min(t, 30) * 0.12;
    h += ridged(s * 0.006, t * 0.006, 4) * Math.min(t * 0.7, 140);
    return base + h;
  }
  if (d < -11.2) {
    const t = -d - 11.2;
    let h = -Math.min(t * 0.5, 11) * (0.7 + 0.3 * fbm(s * 0.01, 3.3, 3));
    h += Math.max(0, t - 60) * 0.5 * (0.7 + 0.5 * fbm(s * 0.004, 1.7, 3));
    h += fbm(s * 0.015, t * 0.015, 5) * Math.min(t, 90) * 0.35;
    h += ridged(s * 0.005, t * 0.005, 4) * Math.max(0, t - 40) * 0.9 * smoothstep(40, 140, t);
    return base + h;
  }
  return base - 0.25;
}
