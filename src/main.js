// NightLine POV — first-person sport sedan driving
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { buildTextures } from './textures.js';
import { World } from './world.js';
import { buildCockpit, EYE } from './cockpit.js';
import { Screens } from './screens.js';
import { Car } from './car.js';
import { Traffic } from './traffic.js';
import { CarAudio } from './audio.js';
import { roadYaw, frame, ROAD } from './road.js';
import { clamp } from './noise.js';

const params = new URLSearchParams(location.search);
const DEMO = params.has('demo');

// ---------------- renderer ----------------
const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', preserveDrawingBuffer: DEMO });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.03, 6000);
camera.layers.enable(1);

const T = buildTextures(renderer);
const world = new World(scene, renderer, T);

// ---------------- car rig ----------------
const carGroup = new THREE.Group();
carGroup.rotation.order = 'YXZ';
scene.add(carGroup);
const body = new THREE.Group();
carGroup.add(body);
const cockpit = buildCockpit(T);
cockpit.group.traverse(o => o.layers.set(1));
body.add(cockpit.group);
const head = new THREE.Group();
head.position.copy(EYE);
body.add(head);
head.add(camera);
camera.rotation.order = 'YXZ';

const screens = new Screens(cockpit);

// headlights: one shadow-casting spot with a projected beam pattern (low-beam cut-off)
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
function beamCookie(high) {
  const c = document.createElement('canvas'); c.width = 512; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, 512, 256);
  const blob = (x, y, rx, ry, a) => {
    g.save(); g.translate(x, y); g.scale(rx, ry);
    const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
    gr.addColorStop(0, `rgba(255,255,255,${a})`); gr.addColorStop(0.5, `rgba(255,255,255,${a * 0.45})`); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, 1, 0, Math.PI * 2); g.fill(); g.restore();
  };
  if (high) {
    blob(256, 128, 250, 120, 0.7); blob(256, 125, 110, 60, 1);
  } else {
    blob(256, 150, 260, 95, 0.8); blob(262, 140, 120, 40, 1);
    // hard cut-off: dark above the line, with a kick-up to the right
    g.fillStyle = '#000';
    g.beginPath(); g.moveTo(0, 0); g.lineTo(512, 0); g.lineTo(512, 112); g.lineTo(300, 128); g.lineTo(0, 128); g.closePath(); g.fill();
    const fade = g.createLinearGradient(0, 128, 0, 138);
    fade.addColorStop(0, 'rgba(0,0,0,1)'); fade.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = fade; g.fillRect(0, 128, 300, 10);
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const cookieLow = beamCookie(false), cookieHigh = beamCookie(true);
const headlight = new THREE.SpotLight(0xf3f6ff, 2600, 160, 0.62, 0.15, 1.3);
headlight.position.set(0, 0.72, -2.3);
headlight.target.position.set(0, 0.72, -40);
headlight.map = cookieLow;
headlight.castShadow = true;
headlight.shadow.mapSize.set(1024, 1024);
headlight.shadow.camera.near = 0.5; headlight.shadow.camera.far = 160;
headlight.shadow.bias = -0.0005;
carGroup.add(headlight, headlight.target);

// mirrors (render targets)
const mirrors = [];
function addMirror(mesh, pos, yaw, fov, w, h) {
  const rt = new THREE.WebGLRenderTarget(w, h, { samples: 2 });
  rt.texture.colorSpace = THREE.LinearSRGBColorSpace;
  const cam = new THREE.PerspectiveCamera(fov, w / h, 0.5, 2500);
  cam.position.copy(pos); cam.rotation.set(0, yaw, 0);
  cam.layers.set(0);
  carGroup.add(cam);
  mesh.material = new THREE.MeshBasicMaterial({ map: rt.texture, color: 0xbfc4c8 });
  rt.texture.repeat.x = -1; rt.texture.offset.x = 1;
  mesh.layers.set(1);
  mirrors.push({ rt, cam });
}
addMirror(cockpit.mirrors.rear, new THREE.Vector3(0, 1.35, 0.9), Math.PI, 24, 384, 100);
addMirror(cockpit.mirrors.left, new THREE.Vector3(-1.05, 1.03, -0.7), Math.PI - 0.22, 30, 220, 120);
addMirror(cockpit.mirrors.right, new THREE.Vector3(1.05, 1.03, -0.7), Math.PI + 0.22, 30, 220, 120);

const car = new Car();
const traffic = new Traffic(scene, T);
const audio = new CarAudio();

// ---------------- post processing ----------------
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uVig: { value: 0.55 }, uGrain: { value: 1 }, uShake: { value: 0 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uTime; uniform float uVig; uniform float uGrain; uniform float uShake; varying vec2 vUv;
    void main(){
      vec2 uv = vUv; vec2 c = uv - 0.5; float r = dot(c, c);
      vec2 off = c * r * (0.005 + uShake * 0.03);
      vec3 col;
      col.r = texture2D(tDiffuse, uv + off).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - off).b;
      col *= 1.0 - uVig * smoothstep(0.05, 0.55, r * 1.5);
      float n = fract(sin(dot(uv * vec2(1931.7, 1087.3) + fract(uTime) * 91.0, vec2(12.9898, 78.233))) * 43758.5453);
      col += (n - 0.5) * uGrain * 0.025 * (0.4 + col);
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`,
};
let composer, bloom, grade;
const QUALITY = {
  high: { pr: Math.min(window.devicePixelRatio, 1.5), samples: 4, bloom: true, mirrorEvery: 1 },
  medium: { pr: 1, samples: 2, bloom: true, mirrorEvery: 2 },
  low: { pr: 0.75, samples: 0, bloom: false, mirrorEvery: 4 },
};
let isDay = (() => { try { return (localStorage.getItem('nl_time') || 'day') === 'day'; } catch { return true; } })();
function applyTime() {
  world.setMode(isDay);
  renderer.toneMappingExposure = isDay ? 0.95 : 1.2;
  cockpit.leds.forEach(m => m.color.setRGB(isDay ? 0.22 : 0.9, isDay ? 0.22 : 0.85, isDay ? 0.24 : 0.8));
  document.querySelectorAll('[data-t]').forEach(b => b.classList.toggle('on', (b.dataset.t === 'day') === isDay));
  try { localStorage.setItem('nl_time', isDay ? 'day' : 'night'); } catch { }
}
let quality = (() => { try { return localStorage.getItem('nl_quality') || 'high'; } catch { return 'high'; } })();
function buildComposer() {
  const q = QUALITY[quality];
  renderer.setPixelRatio(q.pr);
  const w = window.innerWidth, h = window.innerHeight;
  const rt = new THREE.WebGLRenderTarget(w * q.pr, h * q.pr, { type: THREE.HalfFloatType, samples: q.samples });
  if (composer) composer.dispose();
  composer = new EffectComposer(renderer, rt);
  composer.setPixelRatio(q.pr);
  composer.setSize(w, h);
  composer.addPass(new RenderPass(scene, camera));
  bloom = new UnrealBloomPass(new THREE.Vector2(w, h), 0.42, 0.55, 0.88);
  bloom.enabled = q.bloom;
  composer.addPass(bloom);
  grade = new ShaderPass(GradeShader);
  composer.addPass(grade);
  composer.addPass(new OutputPass());
}
buildComposer();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
});

// ---------------- input ----------------
const keys = new Set();
const inp = { up: false, down: false, left: false, right: false, handbrake: false };
let indicator = 0, highBeam = false, lookTarget = 0, mouseLook = 0, mouseDown = false, lookPitch = 0;
let running = false, paused = false, showFps = false;
window.addEventListener('keydown', (e) => {
  if (e.repeat) { keys.add(e.code); return; }
  keys.add(e.code);
  if (!running) return;
  switch (e.code) {
    case 'Escape': setPaused(!paused); break;
    case 'KeyH': audio.horn(true); break;
    case 'KeyL': highBeam = !highBeam; audio.click(highBeam); break;
    case 'KeyZ': indicator = indicator === -1 ? 0 : -1; audio.click(true); break;
    case 'KeyX': indicator = indicator === 1 ? 0 : 1; audio.click(true); break;
    case 'KeyM': audio.setMuted(!audio.muted); break;
    case 'KeyR': { const f = car.s; car.reset(f, ROAD.lanes[1]); break; }
    case 'KeyG': cycleQuality(); break;
    case 'KeyT': isDay = !isDay; applyTime(); toast(isDay ? 'Gündüz' : 'Gece'); break;
    case 'F3': showFps = !showFps; document.getElementById('fps').style.display = showFps ? 'block' : 'none'; break;
  }
});
window.addEventListener('keyup', (e) => {
  keys.delete(e.code);
  if (e.code === 'KeyH') audio.horn(false);
});
window.addEventListener('blur', () => keys.clear());
renderer.domElement.addEventListener('mousedown', () => { mouseDown = true; });
window.addEventListener('mouseup', () => { mouseDown = false; });
window.addEventListener('mousemove', (e) => {
  if (!mouseDown || !running) return;
  mouseLook = clamp(mouseLook - e.movementX * 0.004, -1.6, 1.6);
  lookPitch = clamp(lookPitch - e.movementY * 0.003, -0.5, 0.35);
});
renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());

function readInput() {
  inp.up = keys.has('KeyW') || keys.has('ArrowUp');
  inp.down = keys.has('KeyS') || keys.has('ArrowDown');
  inp.left = keys.has('KeyA') || keys.has('ArrowLeft');
  inp.right = keys.has('KeyD') || keys.has('ArrowRight');
  inp.handbrake = keys.has('Space');
  lookTarget = keys.has('KeyQ') ? 1.15 : keys.has('KeyE') ? -1.15 : 0;
  delete inp.axis;
  if (DEMO) {
    autopilot();
    if (window.__look !== undefined) lookTarget = window.__look;
    if (window.__lookPitch !== undefined) lookPitch = window.__lookPitch;
    if (window.__fov && camera.fov !== window.__fov) { camera.fov = window.__fov; camera.updateProjectionMatrix(); }
  }
}

function autopilot() {
  const ahead = car.s + 18 + car.vLong * 0.6;
  const f = frame(ahead);
  const lane = window.__demoLane ?? ROAD.lanes[0];
  const tx = f.x + f.rx * lane, tz = f.z + f.rz * lane;
  const want = Math.atan2(-(tx - car.x), -(tz - car.z));
  let err = ((want - car.yaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
  inp.axis = clamp(err * 6, -1, 1);
  const vTarget = (window.__demoSpeed ?? 101) / 3.6;
  inp.up = car.vLong < vTarget;
  inp.down = car.vLong > vTarget + 3;
}

// ---------------- UI ----------------
const menu = document.getElementById('menu');
const hint = document.getElementById('hint');
const qBtns = [...document.querySelectorAll('[data-q]')];
function syncQualityButtons() { qBtns.forEach(b => b.classList.toggle('on', b.dataset.q === quality)); }
qBtns.forEach(b => b.addEventListener('click', () => { quality = b.dataset.q; try { localStorage.setItem('nl_quality', quality); } catch { } buildComposer(); syncQualityButtons(); }));
syncQualityButtons();
document.querySelectorAll('[data-t]').forEach(b => b.addEventListener('click', () => { isDay = b.dataset.t === 'day'; applyTime(); }));
applyTime();
function cycleQuality() {
  const order = ['high', 'medium', 'low'];
  quality = order[(order.indexOf(quality) + 1) % 3];
  try { localStorage.setItem('nl_quality', quality); } catch { }
  buildComposer(); syncQualityButtons();
  toast('Grafik: ' + { high: 'Yüksek', medium: 'Orta', low: 'Düşük' }[quality]);
}
let toastT = 0;
function toast(msg) { hint.textContent = msg; hint.style.opacity = 1; toastT = 2.5; }
function setPaused(p) {
  paused = p;
  menu.classList.toggle('hidden', !p);
  document.getElementById('startBtn').textContent = p ? 'DEVAM ET' : 'SÜRMEYE BAŞLA';
  if (audio.ctx) p ? audio.ctx.suspend() : audio.ctx.resume();
}
document.getElementById('startBtn').addEventListener('click', () => {
  audio.start();
  running = true;
  setPaused(false);
  toast('W gaz · S fren/geri · A/D direksiyon · Space el freni · Esc menü');
  toastT = 6;
});

// ---------------- state for screens ----------------
let trip = 0, fuel = 0.78, oilTemp = 62, blinkT = 0, blinkOn = false, shake = 0, fpsAcc = 0, fpsN = 0;
const bodyState = { pitch: 0, pitchV: 0, roll: 0, rollV: 0 };
const clockStr = (d) => `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;

world.ensureChunks(car.s, true);
let mirrorIdx = 0, frameNo = 0;

// ---------------- main loop ----------------
const clock = new THREE.Clock();
const STEP = 1 / 120;
let accum = 0;
function loop() {
  requestAnimationFrame(loop);
  let dt = Math.min(clock.getDelta(), 0.05);
  if (DEMO && window.__fixedDt) dt = window.__fixedDt;
  fpsAcc += dt; fpsN++;
  if (fpsAcc > 0.5) { document.getElementById('fps').textContent = `${Math.round(fpsN / fpsAcc)} FPS`; fpsAcc = 0; fpsN = 0; }
  if (paused) dt = 0;

  if (running || DEMO) {
    readInput();
    accum += dt;
    while (accum >= STEP) {
      car.update(STEP, inp);
      const hit = traffic.collide(car);
      if (hit > 1) { car.impact = Math.min(1, hit / 15); car.events.push('hit'); }
      traffic.update(STEP, car);
      accum -= STEP;
    }
    for (const ev of car.events.splice(0)) {
      if (ev === 'hit') { audio.crash(car.impact); shake = Math.max(shake, car.impact); }
      if (ev === 'shift') audio.shift();
    }
    audio.update(car);
    trip += Math.abs(car.vLong) * dt / 1000;
    fuel = Math.max(0.02, fuel - car.throttle * car.rpm * 2.2e-9 * 60 * dt - 1e-6 * dt);
    oilTemp = Math.min(98, oilTemp + dt * 0.08 * (1 + car.throttle));
    blinkT += dt;
    if (indicator !== 0 && blinkT > 0.38) { blinkT = 0; blinkOn = !blinkOn; audio.click(blinkOn); }
    if (indicator === 0) blinkOn = false;
  }
  if (toastT > 0) { toastT -= dt; if (toastT <= 0) hint.style.opacity = 0; }

  // car transform
  carGroup.position.set(car.x, car.y, car.z);
  carGroup.rotation.set(car.pitch, car.yaw, 0);

  // body motion (spring-damper on pitch/roll from accelerations)
  if (dt > 0) {
    const tp = clamp(car.accLong * 0.0032, -0.04, 0.03), tr = clamp(-car.accLat * 0.0028, -0.035, 0.035);
    bodyState.pitchV += ((tp - bodyState.pitch) * 90 - bodyState.pitchV * 11) * dt;
    bodyState.pitch += bodyState.pitchV * dt;
    bodyState.rollV += ((tr - bodyState.roll) * 70 - bodyState.rollV * 9) * dt;
    bodyState.roll += bodyState.rollV * dt;
  }
  body.rotation.set(bodyState.pitch, 0, bodyState.roll);

  // steering wheel (ratio ~ 14:1 visual)
  cockpit.wheelSpin.rotation.z = car.steer * 14 * 0.62;

  // head / camera
  const tt = clock.elapsedTime;
  const v = Math.abs(car.vLong);
  shake = Math.max(0, shake - dt * 1.8);
  const vib = Math.min(1, v / 60) * 0.0012;
  head.position.set(
    EYE.x + Math.sin(tt * 23.1) * vib + (Math.random() - 0.5) * shake * 0.04 - bodyState.roll * 0.4,
    EYE.y + Math.sin(tt * 31.7) * vib + (Math.random() - 0.5) * shake * 0.04,
    EYE.z - bodyState.pitch * 0.5,
  );
  if (!mouseDown && !(DEMO && window.__lookPitch !== undefined)) { mouseLook *= Math.exp(-dt * 3); lookPitch *= Math.exp(-dt * 3); }
  const lookYaw = clamp(lookTarget + mouseLook, -1.7, 1.7);
  camera.rotation.y += (lookYaw - camera.rotation.y) * Math.min(1, dt * 7);
  camera.rotation.x += (lookPitch - 0.03 - camera.rotation.x) * Math.min(1, dt * 7);
  camera.rotation.z = -bodyState.roll * 0.3;

  // headlights
  headlight.map = highBeam ? cookieHigh : cookieLow; headlight.intensity = (highBeam ? 5200 : 2600) * (isDay ? 0.25 : 1);

  // world streaming
  camera.getWorldPosition(_cp);
  world.update(dt, _cp, car.s);

  // screens
  const now = new Date();
  const eta = new Date(now.getTime() + 45 * 60000);
  screens.update(dt, {
    speedKmh: car.speedKmh, rpm: car.rpm, gear: car.gearLabel(), power: car.throttle * Math.min(1, car.rpm / 6000),
    rangeKm: fuel * 80 / 11 * 100, avgCons: 9.8 + Math.sin(trip) * 0.6, trip, odo: 12483 + trip, tempOut: 18, oilTemp,
    fuel, clock: clockStr(now), eta: clockStr(eta), indicator, blinkOn, hazard: false, highBeam, lightsOn: true,
    tcs: car.tcs && car.speedKmh > 2, s: car.s, d: car.d, x: car.x, z: car.z, yaw: car.yaw, traffic: traffic.radar(car),
  });

  // mirrors (round robin)
  frameNo++;
  if (frameNo % QUALITY[quality].mirrorEvery === 0) {
    const m = mirrors[mirrorIdx++ % mirrors.length];
    renderer.setRenderTarget(m.rt);
    renderer.render(scene, m.cam);
    renderer.setRenderTarget(null);
  }

  grade.uniforms.uTime.value = tt;
  grade.uniforms.uShake.value = shake;
  composer.render();
}
const _cp = new THREE.Vector3();

if (DEMO) {
  if (window.__day !== undefined) { isDay = window.__day; applyTime(); }
  menu.classList.add('hidden');
  running = true;
  window.__game = { car, traffic, world, camera, renderer, setDay: (d) => { isDay = d; applyTime(); }, setQuality: (q) => { quality = q; buildComposer(); } };
}
loop();
