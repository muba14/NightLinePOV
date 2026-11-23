// Simple highway traffic (same direction + oncoming)
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { frame, roadYaw, ROAD } from './road.js';
import { mulberry32 } from './noise.js';

const COLORS = [0xd9dcdf, 0x1b1c1f, 0x8a9096, 0x6b0f14, 0x1d3557, 0xf1f1f1, 0x3a3f44, 0x2d4a3a, 0xb7b0a2];

function bodyGeometry(len, h, w) {
  const s = new THREE.Shape();
  const L = len / 2;
  s.moveTo(-L, 0.3);
  s.lineTo(-L, 0.75);
  s.quadraticCurveTo(-L + 0.05, 0.85, -L + 0.5, 0.88);
  s.lineTo(L - 0.9, 0.95);
  s.quadraticCurveTo(L - 0.1, 0.92, L, 0.72);
  s.lineTo(L, 0.3);
  s.lineTo(-L, 0.3);
  const g = new THREE.ExtrudeGeometry(s, { depth: w - 0.16, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.08, bevelSegments: 3, curveSegments: 8 });
  g.translate(0, 0, -(w - 0.16) / 2);
  g.rotateY(Math.PI / 2); // length along z (front = -z after rotation? x->-z)
  return g;
}

export class Traffic {
  constructor(scene, T) {
    this.scene = scene;
    this.cars = [];
    this.rnd = mulberry32(77);
    const glowTail = new THREE.SpriteMaterial({ map: T.glow, color: 0xff2a1a, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    const glowHead = new THREE.SpriteMaterial({ map: T.glow, color: 0xfff2dd, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    const bodyG = bodyGeometry(4.7, 1.4, 1.86);
    const cabinG = new RoundedBoxGeometry(1.6, 0.5, 2.5, 3, 0.15);
    const wheelG = new THREE.CylinderGeometry(0.34, 0.34, 0.24, 20); wheelG.rotateZ(Math.PI / 2);
    const tailG = new THREE.BoxGeometry(1.5, 0.08, 0.04);
    const headG = new THREE.BoxGeometry(0.42, 0.08, 0.04);
    const glassM = new THREE.MeshPhysicalMaterial({ color: 0x0b0e12, roughness: 0.05, metalness: 0.2, clearcoat: 1, envMapIntensity: 1.2 });
    const wheelM = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 });
    const tailM = new THREE.MeshBasicMaterial({ color: new THREE.Color(3.0, 0.15, 0.08) });
    const headM = new THREE.MeshBasicMaterial({ color: new THREE.Color(3.0, 2.8, 2.5) });
    const shadowM = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.45, depthWrite: false });
    const shadowG = new THREE.PlaneGeometry(2.0, 4.9); shadowG.rotateX(-Math.PI / 2);

    const spawn = [
      // same direction
      ...Array.from({ length: 7 }, (_, i) => ({ dir: 1, lane: ROAD.lanes[i % 2], s: 200 + i * 130 })),
      // oncoming
      ...Array.from({ length: 7 }, (_, i) => ({ dir: -1, lane: ROAD.onLanes[i % 2], s: 300 + i * 160 })),
    ];
    for (const sp of spawn) {
      const g = new THREE.Group();
      const paint = new THREE.MeshPhysicalMaterial({ color: COLORS[Math.floor(this.rnd() * COLORS.length)], metalness: 0.5, roughness: 0.35, clearcoat: 1, clearcoatRoughness: 0.06, envMapIntensity: 1.3 });
      const body = new THREE.Mesh(bodyG, paint); body.castShadow = true; g.add(body);
      const cabin = new THREE.Mesh(cabinG, glassM); cabin.position.set(0, 1.12, 0.25); g.add(cabin);
      for (const [x, z] of [[-0.82, -1.45], [0.82, -1.45], [-0.82, 1.45], [0.82, 1.45]]) {
        const w = new THREE.Mesh(wheelG, wheelM); w.position.set(x, 0.34, z); g.add(w);
      }
      const tail = new THREE.Mesh(tailG, tailM); tail.position.set(0, 0.82, 2.42); g.add(tail);
      for (const x of [-0.62, 0.62]) {
        const h = new THREE.Mesh(headG, headM); h.position.set(x, 0.7, -2.42); g.add(h);
        const hs = new THREE.Sprite(glowHead); hs.position.set(x, 0.7, -2.6); hs.scale.set(1.6, 1.6, 1); g.add(hs);
        const ts = new THREE.Sprite(glowTail); ts.position.set(x, 0.82, 2.55); ts.scale.set(1.0, 1.0, 1); g.add(ts);
      }
      const sh = new THREE.Mesh(shadowG, shadowM); sh.position.y = 0.04; g.add(sh);
      scene.add(g);
      const car = { g, dir: sp.dir, d: sp.lane, s: sp.s, v: 0, target: 0 };
      this._newSpeed(car);
      car.v = car.target;
      this.cars.push(car);
    }
  }

  _newSpeed(c) {
    const fast = Math.abs(c.d) < 5;
    c.target = (fast ? 105 + this.rnd() * 30 : 78 + this.rnd() * 22) / 3.6;
  }

  update(dt, player) {
    const ps = player.s;
    for (const c of this.cars) {
      // follow car ahead in same lane
      let limit = c.target;
      for (const o of this.cars) {
        if (o === c || o.dir !== c.dir || Math.abs(o.d - c.d) > 1) continue;
        const gap = (o.s - c.s) * c.dir;
        if (gap > 0 && gap < 40) limit = Math.min(limit, o.v * (gap < 15 ? 0.8 : 1));
      }
      if (c.dir === 1) { // also don't drive into the player from behind
        const gap = ps - c.s;
        if (gap > 0 && gap < 30 && Math.abs(player.d - c.d) < 2.2) limit = Math.min(limit, Math.max(0, player.vLong) * (gap < 12 ? 0.7 : 1));
      }
      c.v += Math.max(-6 * dt, Math.min(2 * dt, limit - c.v));
      c.s += c.v * c.dir * dt;

      // recycle
      if (c.dir === 1) {
        if (c.s < ps - 250) { c.s = ps + 600 + this.rnd() * 700; this._newSpeed(c); c.v = c.target; }
        else if (c.s > ps + 1500) { c.s = ps - 200; this._newSpeed(c); c.v = c.target; }
      } else {
        if (c.s < ps - 150) { c.s = ps + 900 + this.rnd() * 900; this._newSpeed(c); c.v = c.target; }
      }
      const f = frame(c.s);
      c.g.position.set(f.x + f.rx * c.d, f.y, f.z + f.rz * c.d);
      c.g.rotation.y = roadYaw(c.s) + (c.dir === -1 ? Math.PI : 0);
    }
  }

  // collision with player (same carriageway only). Returns impact speed (m/s) or 0
  collide(player) {
    let hit = 0;
    for (const c of this.cars) {
      if (c.dir !== 1) continue;
      const ds = c.s - player.s, dd = c.d - player.d;
      if (Math.abs(ds) < 4.7 && Math.abs(dd) < 1.9) {
        const rel = player.vLong - c.v;
        // separate: longitudinal if mostly aligned, otherwise lateral
        if (Math.abs(ds) / 4.7 > Math.abs(dd) / 1.9) {
          if (ds > 0 && rel > 0) { hit = Math.max(hit, rel); player.vLong = c.v * 0.92; c.v += rel * 0.3; }
          else if (ds < 0 && rel < 0) { hit = Math.max(hit, -rel); c.v = player.vLong * 0.9; }
          const f = frame(player.s);
          const push = (ds > 0 ? -1 : 1) * (4.7 - Math.abs(ds));
          player.x += f.tx * push; player.z += f.tz * push;
        } else {
          const push = (dd > 0 ? -1 : 1) * (1.9 - Math.abs(dd));
          const f = frame(player.s);
          player.x += f.rx * push; player.z += f.rz * push;
          player.vLat = 0;
          hit = Math.max(hit, 3);
        }
      }
    }
    return hit;
  }

  radar(player) {
    return this.cars.filter(c => c.dir === 1).map(c => ({ ds: c.s - player.s, d: c.d }));
  }
}
