// World: dusk sky, lighting, endless canyon highway chunks, backdrop mountains
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { frame, terrainH, roadY } from './road.js';
import { fbm, ridged, mulberry32, smoothstep, lerp } from './noise.js';

export const FOG_COLOR = new THREE.Color(0.47, 0.53, 0.62);
const CHUNK = 160;

const skyVert = /* glsl */`
varying vec3 vDir;
void main(){
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  gl_Position = p.xyww;
}`;
const skyFrag = /* glsl */`
varying vec3 vDir;
uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uBottom; uniform vec3 uGlow; uniform vec3 uGlowDir;
uniform float uTime;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float n2(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.0-2.0*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),u.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),u.x), u.y); }
float fbm(vec2 p){ float s=0.0,a=0.5; for(int i=0;i<6;i++){ s+=a*n2(p); p*=2.03; a*=0.5; } return s; }
void main(){
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col = mix(uHorizon, uTop, pow(smoothstep(0.0, 0.75, h), 0.6));
  col = mix(col, uBottom, smoothstep(0.0, -0.25, h));
  float g = max(dot(d, normalize(uGlowDir)), 0.0);
  col += uGlow * pow(g, 5.0) * smoothstep(-0.15, 0.25, h) * (1.0 - smoothstep(0.25, 0.7, h));
  // overcast cloud layer
  vec2 uv = d.xz / (h + 0.18) * 1.4 + vec2(uTime * 0.004, 0.0);
  float c = fbm(uv);
  float cl = smoothstep(0.42, 0.85, c) * smoothstep(0.0, 0.18, h);
  vec3 cloudCol = mix(uHorizon * 0.92, uTop * 1.25, smoothstep(0.0, 0.5, h));
  col = mix(col, cloudCol, cl * 0.75);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;

export class World {
  constructor(scene, renderer, T) {
    this.scene = scene; this.renderer = renderer; this.T = T;
    this.chunks = new Map();
    this.queue = [];

    // ---------- Sky ----------
    this.skyUniforms = {
      uTop: { value: new THREE.Color(0.11, 0.17, 0.30) },
      uHorizon: { value: new THREE.Color(0.52, 0.59, 0.69) },
      uBottom: { value: new THREE.Color(0.18, 0.2, 0.24) },
      uGlow: { value: new THREE.Color(0.35, 0.26, 0.2) },
      uGlowDir: { value: new THREE.Vector3(-0.6, 0.05, -0.8) },
      uTime: { value: 0 },
    };
    const skyMat = new THREE.ShaderMaterial({
      vertexShader: skyVert, fragmentShader: skyFrag, uniforms: this.skyUniforms,
      side: THREE.BackSide, depthWrite: false, fog: false,
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(5000, 48, 24), skyMat);
    this.sky.renderOrder = -10;
    this.sky.frustumCulled = false;
    scene.add(this.sky);

    // environment map from sky (reflections for paint / glossy interior)
    const envScene = new THREE.Scene();
    envScene.add(new THREE.Mesh(new THREE.SphereGeometry(100, 32, 16), skyMat));
    const gnd = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshBasicMaterial({ color: 0x22262a }));
    gnd.rotation.x = -Math.PI / 2; gnd.position.y = -2; envScene.add(gnd);
    this.envScene = envScene;
    this.pmrem = new THREE.PMREMGenerator(renderer);
    this.envMap = this.pmrem.fromScene(envScene, 0.02).texture;
    scene.environment = this.envMap;
    scene.environmentIntensity = 0.55;

    scene.fog = new THREE.Fog(FOG_COLOR, 70, 3300);
    scene.background = FOG_COLOR;

    // ---------- Lights ----------
    this.hemi = new THREE.HemisphereLight(0x9fb3d1, 0x3a3a31, 1.9);
    scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xc9d3ea, 0.55);
    this.sun.position.set(-300, 220, -400);
    scene.add(this.sun);
    scene.add(this.sun.target);

    // ---------- Materials ----------
    this.mats = {
      terrain: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, map: T.rock, bumpMap: T.rockBump, bumpScale: 1.6 }),
      road: new THREE.MeshStandardMaterial({ map: T.asphalt, roughness: 0.82, bumpMap: T.asphaltBump, bumpScale: 0.18, color: 0xe2e2e2 }),
      concrete: new THREE.MeshStandardMaterial({ map: T.concrete, roughness: 0.9, color: 0xb9b6ae }),
      stone: new THREE.MeshStandardMaterial({ map: T.stone, roughness: 0.95, bumpMap: T.rockBump, bumpScale: 1.0 }),
      steel: new THREE.MeshStandardMaterial({ color: 0xa8adb3, metalness: 0.85, roughness: 0.42, side: THREE.DoubleSide }),
      post: new THREE.MeshStandardMaterial({ color: 0x7d8288, metalness: 0.7, roughness: 0.5 }),
      tree: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }),
      boulder: new THREE.MeshStandardMaterial({ color: 0x77736c, roughness: 0.95, map: T.rock, flatShading: true }),
      pole: new THREE.MeshStandardMaterial({ color: 0x5c6168, metalness: 0.3, roughness: 0.65 }),
      lampHead: new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0xffb062, emissiveIntensity: 5.5 }),
      reflector: new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0xffa040, emissiveIntensity: 2.0 }),
      reflectorW: new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0xe8eeff, emissiveIntensity: 1.4 }),
      glow: new THREE.SpriteMaterial({ map: T.glow, color: 0xffb36b, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }),
      pool: new THREE.MeshBasicMaterial({ map: T.pool, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
    };

    this._buildSharedGeoms();
    this._buildBackdrop();
    this.day = false;
  }

  // Overcast daytime vs dusk/night look
  setMode(day) {
    this.day = day;
    const U = this.skyUniforms, M = this.mats, sc = this.scene;
    if (day) {
      U.uTop.value.setRGB(0.40, 0.45, 0.51); U.uHorizon.value.setRGB(0.70, 0.73, 0.76);
      U.uBottom.value.setRGB(0.36, 0.37, 0.38); U.uGlow.value.setRGB(0.05, 0.05, 0.05);
      FOG_COLOR.setRGB(0.64, 0.67, 0.70);
      sc.fog.near = 10; sc.fog.far = 1300;
      this.hemi.color.set(0xd2dae3); this.hemi.groundColor.set(0x5b5a50); this.hemi.intensity = 2.5;
      this.sun.color.set(0xeef0f3); this.sun.intensity = 0.9;
      M.lampHead.emissiveIntensity = 0.15; M.glow.opacity = 0; M.pool.opacity = 0;
      M.reflector.emissiveIntensity = 0.25; M.reflectorW.emissiveIntensity = 0.2;
      this.backdrop.material.color.setRGB(1.35, 1.35, 1.35);
      sc.environmentIntensity = 0.75;
    } else {
      U.uTop.value.setRGB(0.11, 0.17, 0.30); U.uHorizon.value.setRGB(0.52, 0.59, 0.69);
      U.uBottom.value.setRGB(0.18, 0.2, 0.24); U.uGlow.value.setRGB(0.35, 0.26, 0.2);
      FOG_COLOR.setRGB(0.47, 0.53, 0.62);
      sc.fog.near = 70; sc.fog.far = 3300;
      this.hemi.color.set(0x9fb3d1); this.hemi.groundColor.set(0x3a3a31); this.hemi.intensity = 1.9;
      this.sun.color.set(0xc9d3ea); this.sun.intensity = 0.55;
      M.lampHead.emissiveIntensity = 5.5; M.glow.opacity = 1; M.pool.opacity = 1;
      M.reflector.emissiveIntensity = 2.0; M.reflectorW.emissiveIntensity = 1.4;
      this.backdrop.material.color.setRGB(1, 1, 1);
      sc.environmentIntensity = 0.55;
    }
    sc.fog.color.copy(FOG_COLOR);
    sc.background = FOG_COLOR;
    const old = this.envMap;
    this.envMap = this.pmrem.fromScene(this.envScene, 0.02).texture;
    sc.environment = this.envMap;
    old.dispose();
  }

  _buildSharedGeoms() {
    // pine tree with vertex colours
    const parts = [];
    const add = (geo, col) => {
      const c = new THREE.Color(col);
      const n = geo.attributes.position.count;
      const arr = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
      geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
      parts.push(geo.toNonIndexed ? geo : geo);
    };
    const trunk = new THREE.CylinderGeometry(0.12, 0.2, 2.2, 6); trunk.translate(0, 1.1, 0);
    add(trunk, 0x3b2c20);
    const cols = [0x1d2b1d, 0x223322, 0x283a25];
    for (let i = 0; i < 3; i++) {
      const cone = new THREE.ConeGeometry(1.9 - i * 0.45, 2.8 - i * 0.3, 8);
      cone.translate(0, 2.4 + i * 1.5, 0);
      add(cone, cols[i]);
    }
    this.treeGeo = mergeGeometries(parts.map(g => g.index ? g.toNonIndexed() : g));
    this.treeGeo.computeVertexNormals();

    // round bush/olive-like tree
    const bush = new THREE.IcosahedronGeometry(1.4, 1);
    const pa = bush.attributes.position;
    const bc = new Float32Array(pa.count * 3);
    for (let i = 0; i < pa.count; i++) {
      const y = pa.getY(i);
      pa.setY(i, y * 0.8 + 1.2);
      const k = 0.7 + Math.random() * 0.3;
      bc[i * 3] = 0.16 * k; bc[i * 3 + 1] = 0.22 * k; bc[i * 3 + 2] = 0.12 * k;
    }
    bush.setAttribute('color', new THREE.BufferAttribute(bc, 3));
    bush.computeVertexNormals();
    this.bushGeo = bush;

    this.boulderGeo = new THREE.DodecahedronGeometry(1, 0);
    this.postGeo = new THREE.BoxGeometry(0.1, 0.85, 0.14); this.postGeo.translate(0, 0.42, 0);
    this.reflGeo = new THREE.BoxGeometry(0.06, 0.08, 0.04);

    // street lamp (pole + double arm)
    const pole = new THREE.CylinderGeometry(0.08, 0.13, 10, 8); pole.translate(0, 5, 0);
    const armR = new THREE.CylinderGeometry(0.05, 0.05, 2.6, 6); armR.rotateZ(Math.PI / 2 - 0.12); armR.translate(1.25, 9.9, 0);
    const armL = armR.clone(); armL.scale(-1, 1, 1);
    this.lampPoleGeo = mergeGeometries([pole, armR, armL]);
    const head = new THREE.BoxGeometry(0.7, 0.1, 0.3);
    const hR = head.clone(); hR.translate(2.55, 10.05, 0);
    const hL = head.clone(); hL.translate(-2.55, 10.05, 0);
    this.lampHeadGeo = mergeGeometries([hR, hL]);
  }

  _buildBackdrop() {
    // far mountain ring that follows the player (always on the horizon)
    const seg = 256, rows = 4;
    const pos = [], col = [], idx = [];
    for (let r = 0; r <= rows; r++) {
      for (let i = 0; i <= seg; i++) {
        const a = i / seg * Math.PI * 2;
        const t = r / rows;
        const rad = lerp(1500, 2900, t);
        const ridge = ridged(Math.cos(a) * 3 + 10, Math.sin(a) * 3 + 10, 5);
        const h = t === 0 ? -40 : (80 + ridge * 520 + fbm(a * 6, t * 3, 4) * 120) * Math.sin(t * Math.PI * 0.5 + 0.2);
        pos.push(Math.cos(a) * rad, h, Math.sin(a) * rad);
        const k = 0.75 + 0.25 * t;
        col.push(0.2 * k, 0.24 * k, 0.26 * k);
      }
    }
    for (let r = 0; r < rows; r++) for (let i = 0; i < seg; i++) {
      const a = r * (seg + 1) + i, b = a + seg + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    this.backdrop = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, side: THREE.DoubleSide }));
    this.backdrop.frustumCulled = false;
    this.scene.add(this.backdrop);
  }

  // ---------- chunk generation ----------
  _sweep(profile, s0, s1, step, uvScaleS = 1 / 4, uvScaleP = 1) {
    // profile: [[d, y], ...] relative to road surface
    const rows = Math.ceil((s1 - s0) / step) + 1;
    const n = profile.length;
    const pos = new Float32Array(rows * n * 3), uv = new Float32Array(rows * n * 2);
    let plen = [0];
    for (let i = 1; i < n; i++) plen.push(plen[i - 1] + Math.hypot(profile[i][0] - profile[i - 1][0], profile[i][1] - profile[i - 1][1]));
    const f = {};
    for (let r = 0; r < rows; r++) {
      const s = Math.min(s1, s0 + r * step);
      frame(s, f);
      for (let i = 0; i < n; i++) {
        const [d, y] = profile[i];
        const k = (r * n + i);
        pos[k * 3] = f.x + f.rx * d; pos[k * 3 + 1] = f.y + y; pos[k * 3 + 2] = f.z + f.rz * d;
        uv[k * 2] = plen[i] * uvScaleP; uv[k * 2 + 1] = s * uvScaleS;
      }
    }
    const idx = [];
    for (let r = 0; r < rows - 1; r++) for (let i = 0; i < n - 1; i++) {
      const a = r * n + i, b = a + n;
      idx.push(a, a + 1, b, a + 1, b + 1, b);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  }

  _terrain(s0, s1) {
    const ds = [-300, -245, -200, -165, -135, -110, -90, -74, -61, -50, -41, -34, -28, -23, -19, -16, -13.5, -11.9, -11.2, -10.6,
      10.6, 10.95, 11.6, 12.3, 13.3, 14.6, 16.2, 18.2, 20.6, 23.5, 27, 31, 36, 42, 49, 57, 67, 79, 94, 112, 134, 160, 190, 225, 260];
    const step = 4;
    const rows = Math.ceil((s1 - s0) / step) + 1, n = ds.length;
    const pos = new Float32Array(rows * n * 3), uv = new Float32Array(rows * n * 2), col = new Float32Array(rows * n * 3);
    const f = {};
    const grass = new THREE.Color(0x3b4a2c), grass2 = new THREE.Color(0x56573a), rock = new THREE.Color(0xa29c91),
      rockDark = new THREE.Color(0x726d65), gravel = new THREE.Color(0x6e6a62), tmp = new THREE.Color();
    for (let r = 0; r < rows; r++) {
      const s = Math.min(s1, s0 + r * step);
      frame(s, f);
      for (let i = 0; i < n; i++) {
        const d = ds[i];
        const h = terrainH(s, d);
        const k = r * n + i;
        pos[k * 3] = f.x + f.rx * d; pos[k * 3 + 1] = h; pos[k * 3 + 2] = f.z + f.rz * d;
        uv[k * 2] = d / 7; uv[k * 2 + 1] = s / 7;
        // slope based colouring
        const dd = Math.max(0.6, Math.abs(d) * 0.04);
        const slope = Math.abs(terrainH(s, d + dd) - terrainH(s, d - dd)) / (2 * dd);
        const nz = fbm(s * 0.03, d * 0.03, 3) * 0.5 + 0.5;
        const rockT = smoothstep(0.55, 1.15, slope + (nz - 0.5) * 0.5);
        tmp.copy(grass).lerp(grass2, nz);
        tmp.lerp(nz > 0.5 ? rock : rockDark, rockT);
        if (Math.abs(d) < 12.5) tmp.copy(gravel);
        col[k * 3] = tmp.r; col[k * 3 + 1] = tmp.g; col[k * 3 + 2] = tmp.b;
      }
    }
    const idx = [];
    for (let r = 0; r < rows - 1; r++) for (let i = 0; i < n - 1; i++) {
      const a = r * n + i, b = a + n;
      idx.push(a, a + 1, b, a + 1, b + 1, b);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  }

  _buildChunk(k) {
    const s0 = k * CHUNK, s1 = s0 + CHUNK;
    const grp = new THREE.Group();
    const M = this.mats;
    const rnd = mulberry32(k * 7919 + 13);

    const ter = new THREE.Mesh(this._terrain(s0, s1), M.terrain); ter.receiveShadow = true; grp.add(ter);

    // road surface (uv: u across 21 m, v every 24 m)
    const road = this._sweep([[-10.5, 0.02], [0, 0.02], [10.5, 0.02]], s0, s1, 2, 1 / 24, 1 / 21);
    const rm = new THREE.Mesh(road, M.road); rm.receiveShadow = true; grp.add(rm);

    // median jersey barrier
    const jersey = [[-0.3, 0], [-0.24, 0.08], [-0.11, 0.3], [-0.1, 0.82], [0.1, 0.82], [0.11, 0.3], [0.24, 0.08], [0.3, 0]];
    grp.add(new THREE.Mesh(this._sweep(jersey, s0, s1, 4, 1 / 3, 1), M.concrete));

    // right retaining wall
    const wall = [[10.9, -0.1], [10.95, 1.25], [11.05, 1.36], [11.65, 1.36]];
    grp.add(new THREE.Mesh(this._sweep(wall, s0, s1, 4, 1 / 4, 1 / 1.4), M.stone));

    // left steel guardrail (W-beam)
    const beam = [[-10.72, 0.52], [-10.82, 0.6], [-10.72, 0.68], [-10.82, 0.76], [-10.72, 0.84]];
    grp.add(new THREE.Mesh(this._sweep(beam, s0, s1, 4), M.steel));

    // instanced posts + reflectors
    const f = {};
    const nPosts = Math.floor(CHUNK / 4);
    const posts = new THREE.InstancedMesh(this.postGeo, M.post, nPosts);
    const refl = new THREE.InstancedMesh(this.reflGeo, M.reflector, nPosts / 2 * 2);
    const reflW = new THREE.InstancedMesh(this.reflGeo, M.reflectorW, Math.floor(CHUNK / 12));
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), sc = new THREE.Vector3(1, 1, 1);
    let ri = 0;
    for (let i = 0; i < nPosts; i++) {
      const s = s0 + i * 4;
      frame(s, f);
      e.set(0, Math.atan2(-f.tx, -f.tz), 0); q.setFromEuler(e);
      v.set(f.x - f.rx * 10.88, f.y, f.z - f.rz * 10.88);
      m4.compose(v, q, sc); posts.setMatrixAt(i, m4);
      if (i % 2 === 0) {
        v.set(f.x - f.rx * 10.7, f.y + 0.7, f.z - f.rz * 10.7); m4.compose(v, q, sc); refl.setMatrixAt(ri++, m4);
        v.set(f.x + f.rx * 10.93, f.y + 0.9, f.z + f.rz * 10.93); m4.compose(v, q, sc); refl.setMatrixAt(ri++, m4);
      }
    }
    refl.count = ri;
    for (let i = 0; i < reflW.count; i++) {
      const s = s0 + i * 12 + 6; frame(s, f);
      e.set(0, Math.atan2(-f.tx, -f.tz), 0); q.setFromEuler(e);
      v.set(f.x + f.rx * 0.13, f.y + 0.6, f.z + f.rz * 0.13); m4.compose(v, q, sc); reflW.setMatrixAt(i, m4);
    }
    grp.add(posts, refl, reflW);

    // street lamps on the median every 80 m
    const lampS = [];
    for (let s = Math.ceil(s0 / 80) * 80; s < s1; s += 80) lampS.push(s);
    if (lampS.length) {
      const poles = new THREE.InstancedMesh(this.lampPoleGeo, M.pole, lampS.length);
      const heads = new THREE.InstancedMesh(this.lampHeadGeo, M.lampHead, lampS.length);
      lampS.forEach((s, i) => {
        frame(s, f);
        e.set(0, Math.atan2(-f.tx, -f.tz), 0); q.setFromEuler(e);
        v.set(f.x, f.y + 0.8, f.z); m4.compose(v, q, sc);
        poles.setMatrixAt(i, m4); heads.setMatrixAt(i, m4);
        for (const side of [-1, 1]) {
          const sp = new THREE.Sprite(M.glow);
          sp.position.set(f.x + f.rx * 2.55 * side, f.y + 10.75, f.z + f.rz * 2.55 * side);
          sp.scale.set(3.2, 3.2, 1);
          grp.add(sp);
          const pool = new THREE.Mesh(new THREE.PlaneGeometry(16, 16), M.pool);
          pool.rotation.x = -Math.PI / 2;
          pool.position.set(f.x + f.rx * 3.6 * side, f.y + 0.05, f.z + f.rz * 3.6 * side);
          grp.add(pool);
        }
      });
      grp.add(poles, heads);
    }

    // vegetation + boulders
    const maxT = 260;
    const trees = new THREE.InstancedMesh(this.treeGeo, M.tree, maxT);
    const bushes = new THREE.InstancedMesh(this.bushGeo, M.tree, maxT);
    const boulders = new THREE.InstancedMesh(this.boulderGeo, M.boulder, 40);
    let nt = 0, nb = 0, nr = 0;
    for (let i = 0; i < 900 && (nt < maxT || nb < maxT); i++) {
      const s = s0 + rnd() * CHUNK;
      const left = rnd() < 0.55;
      const d = left ? -(13 + Math.pow(rnd(), 1.4) * 260) : 13.5 + Math.pow(rnd(), 1.6) * 200;
      const dd = 1.0;
      const h = terrainH(s, d);
      const slope = Math.abs(terrainH(s, d + dd) - terrainH(s, d - dd)) / (2 * dd);
      if (slope > 1.05 + rnd() * 0.3) continue;
      frame(s, f);
      v.set(f.x + f.rx * d, h - 0.2, f.z + f.rz * d);
      e.set(0, rnd() * 6.28, 0); q.setFromEuler(e);
      const scale = 0.7 + rnd() * 0.9;
      const pick = rnd();
      if (pick < 0.45 && nt < maxT) {
        sc.set(scale, scale * (0.9 + rnd() * 0.5), scale); m4.compose(v, q, sc); trees.setMatrixAt(nt++, m4);
      } else if (pick < 0.93 && nb < maxT) {
        sc.set(scale, scale * 0.8, scale); m4.compose(v, q, sc); bushes.setMatrixAt(nb++, m4);
      } else if (nr < 40) {
        e.set(rnd() * 3, rnd() * 3, rnd() * 3); q.setFromEuler(e);
        const bs = 0.5 + rnd() * 1.8; sc.set(bs, bs * 0.7, bs); m4.compose(v, q, sc); boulders.setMatrixAt(nr++, m4);
      }
    }
    sc.set(1, 1, 1);
    trees.count = nt; bushes.count = nb; boulders.count = nr;
    grp.add(trees, bushes, boulders);
    for (const c of [posts, refl, reflW, trees, bushes, boulders]) c.computeBoundingSphere();
    return grp;
  }

  ensureChunks(s, immediate = false) {
    const kMin = Math.floor((s - 220) / CHUNK), kMax = Math.floor((s + 1500) / CHUNK);
    for (const [k, g] of this.chunks) {
      if (k < kMin - 1 || k > kMax + 1) {
        this.scene.remove(g);
        g.traverse(o => { if (o.geometry && o.geometry !== this.treeGeo && o.geometry !== this.bushGeo && o.geometry !== this.boulderGeo && o.geometry !== this.postGeo && o.geometry !== this.reflGeo && o.geometry !== this.lampPoleGeo && o.geometry !== this.lampHeadGeo) o.geometry.dispose(); });
        this.chunks.delete(k);
      }
    }
    let built = 0;
    // build nearest missing first
    for (let k = kMin; k <= kMax; k++) {
      if (this.chunks.has(k)) continue;
      if (!immediate && built >= 1) break;
      const g = this._buildChunk(k);
      this.scene.add(g);
      this.chunks.set(k, g);
      built++;
    }
  }

  update(dt, camPos, s) {
    this.sky.position.copy(camPos);
    this.backdrop.position.set(camPos.x, roadY(s) - 30, camPos.z);
    this.skyUniforms.uTime.value += dt;
    this.sun.target.position.set(camPos.x, camPos.y, camPos.z);
    this.sun.position.set(camPos.x - 300, camPos.y + 220, camPos.z - 400);
    this.ensureChunks(s);
  }
}
