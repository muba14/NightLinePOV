// Procedural canvas textures (no external image assets needed)
import * as THREE from 'three';
import { mulberry32 } from './noise.js';

export function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

export function toTex(c, { repeat = [1, 1], srgb = true, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  return t;
}

// Tileable multi-octave noise drawn with canvas patterns (fast)
export function noiseCanvas(w, h, octaves, seed = 1, base = 128) {
  const rnd = mulberry32(seed);
  const c = makeCanvas(w, h), g = c.getContext('2d');
  g.fillStyle = `rgb(${base},${base},${base})`;
  g.fillRect(0, 0, w, h);
  for (const [n, a] of octaves) {
    const m = Math.max(1, Math.round(n * h / w));
    const s = makeCanvas(n, m), sg = s.getContext('2d');
    const id = sg.createImageData(n, m);
    for (let i = 0; i < n * m; i++) {
      const v = rnd() * 255;
      id.data[i * 4] = id.data[i * 4 + 1] = id.data[i * 4 + 2] = v;
      id.data[i * 4 + 3] = 255;
    }
    sg.putImageData(id, 0, 0);
    g.save();
    g.globalAlpha = a;
    g.imageSmoothingEnabled = true;
    g.setTransform(w / n, 0, 0, h / m, 0, 0);
    g.fillStyle = g.createPattern(s, 'repeat');
    g.fillRect(0, 0, n, m);
    g.restore();
  }
  return c;
}

export function buildTextures(renderer) {
  const aniso = Math.min(16, renderer.capabilities.getMaxAnisotropy());
  const T = {};

  // ---------- Asphalt with lane markings (21 m wide x 24 m long) ----------
  {
    const W = 512, H = 1024;
    const c = noiseCanvas(W, H, [[8, 0.35], [32, 0.25], [128, 0.2], [512, 0.35]], 11, 70);
    const g = c.getContext('2d');
    g.globalCompositeOperation = 'multiply';
    g.fillStyle = '#6a6c70';
    g.fillRect(0, 0, W, H);
    g.globalCompositeOperation = 'source-over';
    const rnd = mulberry32(5);
    // aggregate speckles
    for (let i = 0; i < 9000; i++) {
      const v = 70 + rnd() * 90;
      g.fillStyle = `rgba(${v},${v},${v + 4},${0.08 + rnd() * 0.18})`;
      g.fillRect(rnd() * W, rnd() * H, 1.2, 1.2);
    }
    const px = (d) => (d + 10.5) / 21 * W;
    // tyre polish strips (darker) in lane centres
    for (const lc of [3.3, 6.9, -3.3, -6.9]) {
      for (const off of [-0.8, 0.8]) {
        const x = px(lc + off);
        const gr = g.createLinearGradient(x - 10, 0, x + 10, 0);
        gr.addColorStop(0, 'rgba(20,20,22,0)');
        gr.addColorStop(0.5, 'rgba(20,20,22,0.28)');
        gr.addColorStop(1, 'rgba(20,20,22,0)');
        g.fillStyle = gr; g.fillRect(x - 10, 0, 20, H);
      }
    }
    // tar seams
    g.strokeStyle = 'rgba(15,15,15,0.5)'; g.lineWidth = 1.5;
    for (let i = 0; i < 6; i++) {
      g.beginPath();
      let x = rnd() * W, y = rnd() * H;
      g.moveTo(x, y);
      for (let k = 0; k < 8; k++) { x += (rnd() - 0.5) * 40; y += rnd() * 30; g.lineTo(x, y); }
      g.stroke();
    }
    const line = (d, w, dashed) => {
      const x = px(d) - (w / 21 * W) / 2, ww = w / 21 * W;
      const segs = dashed ? [[0, 256], [512, 768]] : [[0, H]];
      for (const [a, b] of segs) {
        g.fillStyle = 'rgba(232,232,222,0.92)';
        g.fillRect(x, a, ww, b - a);
        // wear
        for (let i = 0; i < (b - a) * 0.6; i++) {
          g.fillStyle = `rgba(60,60,62,${rnd() * 0.5})`;
          g.fillRect(x + rnd() * ww, a + rnd() * (b - a), 1.5, 1.5);
        }
      }
    };
    line(1.45, 0.15, false); line(-1.45, 0.15, false);
    line(8.75, 0.2, false); line(-8.75, 0.2, false);
    line(5.1, 0.15, true); line(-5.1, 0.15, true);
    T.asphalt = toTex(c, { aniso });
    const b = noiseCanvas(256, 512, [[64, 0.5], [256, 0.6]], 12);
    T.asphaltBump = toTex(b, { srgb: false, aniso });
  }

  // ---------- Generic detail noises ----------
  T.rock = toTex(noiseCanvas(512, 512, [[4, 0.4], [16, 0.35], [64, 0.3], [256, 0.3], [512, 0.2]], 21, 190), { aniso });
  T.rockBump = toTex(noiseCanvas(256, 256, [[16, 0.5], [64, 0.5], [256, 0.4]], 22), { srgb: false, aniso });
  T.concrete = toTex(noiseCanvas(256, 256, [[8, 0.2], [64, 0.2], [256, 0.25]], 23, 175), { aniso });

  // ---------- Stone retaining wall ----------
  {
    const W = 512, H = 256;
    const c = noiseCanvas(W, H, [[16, 0.3], [128, 0.3]], 31, 120);
    const g = c.getContext('2d');
    const rnd = mulberry32(9);
    for (let row = 0; row < 4; row++) {
      let x = -rnd() * 60;
      while (x < W) {
        const w = 60 + rnd() * 70;
        const v = 110 + rnd() * 60;
        g.fillStyle = `rgba(${v},${v - 4},${v - 10},0.75)`;
        g.beginPath();
        g.roundRect(x + 3, row * 64 + 3, w - 6, 58, 8);
        g.fill();
        x += w;
      }
    }
    T.stone = toTex(c, { aniso });
  }

  // ---------- Leather grain ----------
  T.leatherBump = toTex(noiseCanvas(256, 256, [[32, 0.4], [128, 0.6], [256, 0.6]], 41), { srgb: false, repeat: [6, 6], aniso });

  // ---------- Carbon fibre twill ----------
  {
    const c = makeCanvas(128, 128), g = c.getContext('2d');
    const s = 16;
    for (let y = 0; y < 128; y += s) for (let x = 0; x < 128; x += s) {
      const k = ((x / s) + (y / s)) % 2 === 0;
      const gr = k ? g.createLinearGradient(x, y, x + s, y) : g.createLinearGradient(x, y, x, y + s);
      gr.addColorStop(0, '#16181b'); gr.addColorStop(0.5, '#555a63'); gr.addColorStop(1, '#16181b');
      g.fillStyle = gr; g.fillRect(x, y, s, s);
    }
    T.carbon = toTex(c, { repeat: [10, 3], aniso });
  }

  // ---------- Brushed aluminium ----------
  {
    const c = makeCanvas(512, 64), g = c.getContext('2d');
    g.fillStyle = '#9a9ea4'; g.fillRect(0, 0, 512, 64);
    const rnd = mulberry32(51);
    for (let i = 0; i < 900; i++) {
      const v = 120 + rnd() * 110;
      g.fillStyle = `rgba(${v},${v},${v + 3},0.35)`;
      g.fillRect(0, rnd() * 64, 512, 0.6 + rnd());
    }
    T.brushed = toTex(c, { aniso });
  }

  // ---------- Glow sprite ----------
  {
    const c = makeCanvas(128, 128), g = c.getContext('2d');
    const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(255,255,255,1)');
    gr.addColorStop(0.15, 'rgba(255,255,255,0.55)');
    gr.addColorStop(0.45, 'rgba(255,255,255,0.12)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
    T.glow = toTex(c, { srgb: true });
    T.glow.wrapS = T.glow.wrapT = THREE.ClampToEdgeWrapping;
  }

  // ---------- Light pool decal (street lamp on road) ----------
  {
    const c = makeCanvas(128, 128), g = c.getContext('2d');
    const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(255,190,120,0.55)');
    gr.addColorStop(0.5, 'rgba(255,170,100,0.18)');
    gr.addColorStop(1, 'rgba(255,160,90,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
    T.pool = toTex(c);
    T.pool.wrapS = T.pool.wrapT = THREE.ClampToEdgeWrapping;
  }

  // ---------- Steering wheel hub emblem (original) ----------
  {
    // Green ring + black/green quartered disc (user's own design)
    const c = makeCanvas(512, 512), g = c.getContext('2d');
    g.fillStyle = '#050505'; g.fillRect(0, 0, 512, 512);
    const cx = 256, cy = 256;
    g.fillStyle = '#22b14c'; g.beginPath(); g.arc(cx, cy, 250, 0, Math.PI * 2); g.fill();
    g.strokeStyle = '#050505'; g.lineWidth = 7; g.stroke();
    const r = 150;
    g.save(); g.translate(cx, cy); g.rotate(-0.02);
    g.fillStyle = '#050505'; g.beginPath(); g.arc(0, 0, r + 8, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#22b14c'; g.beginPath(); g.arc(0, 0, r, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#050505';
    g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, r, Math.PI, Math.PI * 1.5); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, r, 0, Math.PI * 0.5); g.closePath(); g.fill();
    g.restore();
    T.emblem = toTex(c);
    T.emblem.wrapS = T.emblem.wrapT = THREE.ClampToEdgeWrapping;
  }

  // ---------- Steering wheel button panel ----------
  {
    const c = makeCanvas(256, 128), g = c.getContext('2d');
    g.fillStyle = '#101114'; g.fillRect(0, 0, 256, 128);
    g.strokeStyle = 'rgba(240,240,240,0.9)'; g.fillStyle = 'rgba(240,240,240,0.9)'; g.lineWidth = 4;
    // d-pad cross
    g.beginPath(); g.arc(80, 64, 26, 0, Math.PI * 2); g.stroke();
    g.fillRect(76, 26, 8, 76); g.fillRect(42, 60, 76, 8);
    // small buttons
    g.beginPath(); g.arc(170, 40, 10, 0, Math.PI * 2); g.stroke();
    g.beginPath(); g.arc(170, 88, 10, 0, Math.PI * 2); g.stroke();
    g.fillRect(205, 30, 6, 68);
    T.buttons = toTex(c);
    T.buttons.wrapS = T.buttons.wrapT = THREE.ClampToEdgeWrapping;
  }

  // ---------- Speaker grille ----------
  {
    const c = makeCanvas(128, 128), g = c.getContext('2d');
    g.fillStyle = '#1a1b1e'; g.fillRect(0, 0, 128, 128);
    g.fillStyle = '#050506';
    for (let y = 4; y < 128; y += 8) for (let x = 4 + (y / 8 % 2) * 4; x < 128; x += 8) {
      g.beginPath(); g.arc(x, y, 2.2, 0, Math.PI * 2); g.fill();
    }
    T.grille = toTex(c, { repeat: [3, 3] });
  }

  // ---------- Dark open-pore wood ----------
  {
    const W = 1024, H = 128;
    const c = makeCanvas(W, H), g = c.getContext('2d');
    g.fillStyle = '#2a1a12'; g.fillRect(0, 0, W, H);
    const rnd = mulberry32(61);
    for (let i = 0; i < 140; i++) {
      const y0 = rnd() * H, amp = 2 + rnd() * 6, f = 0.004 + rnd() * 0.01, ph = rnd() * 6;
      const v = rnd();
      g.strokeStyle = v < 0.5 ? `rgba(15,8,5,${0.25 + rnd() * 0.4})` : `rgba(90,58,38,${0.15 + rnd() * 0.25})`;
      g.lineWidth = 0.6 + rnd() * 2.2;
      g.beginPath();
      for (let x = 0; x <= W; x += 8) { const y = y0 + Math.sin(x * f + ph) * amp + Math.sin(x * f * 3.1) * amp * 0.3; x ? g.lineTo(x, y) : g.moveTo(x, y); }
      g.stroke();
    }
    for (let i = 0; i < 3000; i++) { g.fillStyle = `rgba(8,4,2,${rnd() * 0.5})`; g.fillRect(rnd() * W, rnd() * H, 2 + rnd() * 5, 0.8); }
    T.wood = toTex(c, { aniso });
  }

  // ---------- Wheel spoke button panels (left/right) ----------
  const btnPanel = (right) => {
    const c = makeCanvas(256, 160), g = c.getContext('2d');
    g.fillStyle = '#0e0f12'; g.fillRect(0, 0, 256, 160);
    g.strokeStyle = 'rgba(235,238,242,0.92)'; g.fillStyle = 'rgba(235,238,242,0.92)'; g.lineWidth = 4;
    const grid = (x, y) => { g.strokeStyle = 'rgba(255,255,255,0.07)'; g.lineWidth = 2; g.strokeRect(x - 30, y - 24, 60, 48); g.strokeStyle = 'rgba(235,238,242,0.92)'; g.lineWidth = 4; };
    const icons = right ? [
      (x, y) => { g.beginPath(); g.moveTo(x - 10, y); g.lineTo(x + 10, y); g.moveTo(x, y - 10); g.lineTo(x, y + 10); g.stroke(); },
      (x, y) => { g.beginPath(); g.moveTo(x - 10, y); g.lineTo(x + 10, y); g.stroke(); },
      (x, y) => { g.beginPath(); g.moveTo(x - 9, y - 9); g.lineTo(x + 3, y); g.lineTo(x - 9, y + 9); g.stroke(); g.fillRect(x + 6, y - 9, 4, 18); },
      (x, y) => { g.beginPath(); g.arc(x, y, 9, 0, Math.PI * 2); g.stroke(); g.beginPath(); g.moveTo(x - 4, y); g.lineTo(x + 4, y); g.stroke(); },
      (x, y) => { g.beginPath(); g.moveTo(x - 8, y + 6); g.lineTo(x, y - 7); g.lineTo(x + 8, y + 6); g.stroke(); },
      (x, y) => { g.beginPath(); g.moveTo(x - 8, y - 6); g.lineTo(x, y + 7); g.lineTo(x + 8, y - 6); g.stroke(); },
    ] : [
      (x, y) => { g.beginPath(); g.arc(x, y, 10, 0.4, Math.PI * 2 - 0.4); g.stroke(); g.beginPath(); g.moveTo(x - 4, y - 7); g.lineTo(x + 4, y); g.lineTo(x - 4, y + 7); g.stroke(); },
      (x, y) => { g.beginPath(); g.arc(x - 3, y, 7, 0, Math.PI * 2); g.stroke(); g.beginPath(); g.moveTo(x + 6, y - 8); g.lineTo(x + 12, y - 8); g.stroke(); },
      (x, y) => { g.beginPath(); g.moveTo(x - 10, y + 8); g.lineTo(x, y - 8); g.lineTo(x + 10, y + 8); g.stroke(); g.beginPath(); g.arc(x, y + 3, 2, 0, Math.PI * 2); g.fill(); },
      (x, y) => { g.beginPath(); g.arc(x, y, 9, Math.PI * 0.2, Math.PI * 1.8); g.stroke(); },
      (x, y) => { g.beginPath(); g.moveTo(x - 9, y - 4); g.lineTo(x - 3, y - 4); g.lineTo(x + 4, y - 10); g.lineTo(x + 4, y + 10); g.lineTo(x - 3, y + 4); g.lineTo(x - 9, y + 4); g.closePath(); g.stroke(); },
      (x, y) => { g.beginPath(); g.moveTo(x - 9, y + 5); g.lineTo(x + 9, y + 5); g.moveTo(x - 9, y - 3); g.lineTo(x + 9, y - 3); g.stroke(); },
    ];
    icons.forEach((f, i) => { const x = 48 + (i % 3) * 80, y = 40 + Math.floor(i / 3) * 80; grid(x, y); f(x, y); });
    const t = toTex(c); t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; return t;
  };
  T.btnLeft = btnPanel(false);
  T.btnRight = btnPanel(true);

  // ---------- Red mode buttons (own labels) ----------
  const redBtn = (label) => {
    const c = makeCanvas(128, 64), g = c.getContext('2d');
    const gr = g.createLinearGradient(0, 0, 0, 64); gr.addColorStop(0, '#e0242c'); gr.addColorStop(1, '#8e0c12');
    g.fillStyle = gr; g.fillRect(0, 0, 128, 64);
    g.fillStyle = '#ffffff'; g.font = 'bold 34px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(label, 64, 34);
    const t = toTex(c); t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; return t;
  };
  T.redS1 = redBtn('S1');
  T.redS2 = redBtn('S2');

  // ---------- Centre stack button strip ----------
  {
    const c = makeCanvas(1024, 128), g = c.getContext('2d');
    g.fillStyle = '#08090b'; g.fillRect(0, 0, 1024, 128);
    const labels = ['RADIO', 'MEDIA', 'NAV', 'TEL', '', '1', '2', '3', '4', '5', '6'];
    labels.forEach((l, i) => {
      const x = 12 + i * 92;
      g.fillStyle = '#121418'; g.beginPath(); g.roundRect(x, 18, 84, 92, 10); g.fill();
      g.strokeStyle = 'rgba(255,255,255,0.12)'; g.lineWidth = 2; g.stroke();
      g.fillStyle = '#e8ecf2'; g.font = '600 24px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle';
      if (l) g.fillText(l, x + 42, 64);
      else { // hazard
        g.fillStyle = '#c4161c'; g.beginPath(); g.moveTo(x + 42, 36); g.lineTo(x + 70, 88); g.lineTo(x + 14, 88); g.closePath(); g.fill();
        g.fillStyle = '#121418'; g.beginPath(); g.moveTo(x + 42, 52); g.lineTo(x + 58, 80); g.lineTo(x + 26, 80); g.closePath(); g.fill();
      }
    });
    T.stackButtons = toTex(c); T.stackButtons.wrapS = T.stackButtons.wrapT = THREE.ClampToEdgeWrapping;
  }

  return T;
}
