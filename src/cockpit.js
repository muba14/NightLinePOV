// Procedurally modelled sport-sedan cockpit (original design).
// Car space: x right, y up, -z forward. Origin = ground under car centre.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { makeCanvas, toTex } from './textures.js';

export const EYE = new THREE.Vector3(-0.37, 1.27, 0.18);
export const SCREEN = { W: 1024, H: 384 };

function beam(a, b, w, t, mat) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const m = new THREE.Mesh(new RoundedBoxGeometry(w, len, t, 2, Math.min(w, t) * 0.35), mat);
  m.position.copy(a).add(b).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  return m;
}

function _curvedPanelUnused(cx, cz, r, phi0, phi1, y0, y1, segs = 48) {
  const pos = [], uv = [], nrm = [], idx = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs, p = phi0 + (phi1 - phi0) * t;
    const x = cx + r * Math.sin(p), z = cz - r * Math.cos(p);
    for (let j = 0; j <= 1; j++) {
      pos.push(x, j ? y1 : y0, z);
      uv.push(t, j);
      nrm.push(-Math.sin(p), 0, Math.cos(p));
    }
  }
  for (let i = 0; i < segs; i++) {
    const a = i * 2;
    idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}

function quad(p0, p1, p2, p3) { // p0 bl, p1 br, p2 tr, p3 tl
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([...p0, ...p1, ...p2, ...p3], 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 1], 2));
  g.setIndex([0, 1, 2, 0, 2, 3]);
  g.computeVertexNormals();
  return g;
}

export function buildCockpit(T, envMap) {
  const root = new THREE.Group();
  const M = {
    leather: new THREE.MeshStandardMaterial({ color: 0x2e2e32, roughness: 0.6, bumpMap: T.leatherBump, bumpScale: 0.35, envMapIntensity: 0.6 }),
    leatherWheel: new THREE.MeshStandardMaterial({ color: 0x2b2b2f, roughness: 0.55, bumpMap: T.leatherBump, bumpScale: 0.5, envMapIntensity: 0.8 }),
    soft: new THREE.MeshStandardMaterial({ color: 0x3b3c42, roughness: 0.8, bumpMap: T.leatherBump, bumpScale: 0.15, envMapIntensity: 0.6 }),
    piano: new THREE.MeshPhysicalMaterial({ color: 0x040405, roughness: 0.1, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 1.0 }),
    alu: new THREE.MeshStandardMaterial({ map: T.brushed, color: 0xd8dbe0, metalness: 1, roughness: 0.3, envMapIntensity: 1.2 }),
    chrome: new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.08, envMapIntensity: 1.4 }),
    carbon: new THREE.MeshPhysicalMaterial({ map: T.carbon, roughness: 0.35, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1 }),
    fabric: new THREE.MeshStandardMaterial({ color: 0x34353a, roughness: 1 }),
    stitch: new THREE.MeshStandardMaterial({ color: 0xa3141c, roughness: 0.6 }),
    redMark: new THREE.MeshStandardMaterial({ color: 0xb0151d, roughness: 0.5 }),
    rubber: new THREE.MeshStandardMaterial({ color: 0x0b0b0c, roughness: 0.9 }),
    paint: new THREE.MeshPhysicalMaterial({ color: 0x0f1d36, metalness: 0.65, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.04, envMapIntensity: 1.6 }),
    led: new THREE.MeshBasicMaterial({ color: new THREE.Color(0.9, 0.85, 0.8) }),
    grille: new THREE.MeshStandardMaterial({ map: T.grille, roughness: 0.7, metalness: 0.4 }),
    buttons: new THREE.MeshStandardMaterial({ map: T.buttons, emissiveMap: T.buttons, emissive: 0xffffff, emissiveIntensity: 0.45, roughness: 0.4 }),
    emblem: new THREE.MeshStandardMaterial({ map: T.emblem, metalness: 0.6, roughness: 0.3 }),
    carpet: new THREE.MeshStandardMaterial({ color: 0x1c1c1f, roughness: 1 }),
  };
  M.wood = M.carbon; // reference car uses carbon-weave trim
  const carbonSqTex = T.carbon.clone(); carbonSqTex.repeat.set(4, 4); carbonSqTex.needsUpdate = true;
  M.carbonSq = new THREE.MeshPhysicalMaterial({ map: carbonSqTex, roughness: 0.35, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1 });

  // ---------------- Dashboard ----------------
  {
    const s = new THREE.Shape();
    s.moveTo(0.40, 0.52);
    s.quadraticCurveTo(0.47, 0.66, 0.50, 0.76);
    s.lineTo(0.56, 0.90);
    s.quadraticCurveTo(0.58, 0.95, 0.62, 0.968);
    s.quadraticCurveTo(0.70, 0.99, 0.82, 0.995);
    s.quadraticCurveTo(1.05, 0.985, 1.20, 0.935);
    s.lineTo(1.34, 0.88);
    s.lineTo(1.34, 0.74);
    s.lineTo(0.40, 0.52);
    const g = new THREE.ExtrudeGeometry(s, { depth: 1.80, bevelEnabled: true, bevelThickness: 0.025, bevelSize: 0.02, bevelSegments: 3, curveSegments: 14 });
    g.rotateY(Math.PI / 2);
    g.translate(-0.90, 0, 0);
    root.add(new THREE.Mesh(g, M.soft));

    // stitched seam line across the dash top
    const seam = new THREE.Mesh(new THREE.BoxGeometry(1.78, 0.002, 0.003), M.stitch);
    seam.position.set(0, 0.972, -0.63);
    root.add(seam);

    // carbon trim band on the dash face
    const trim = new THREE.Mesh(new THREE.PlaneGeometry(1.74, 0.07), M.wood);
    trim.position.set(0, 0.825, -0.507);
    trim.rotation.x = -0.405;
    root.add(trim);
    const lip = new THREE.Mesh(new THREE.BoxGeometry(1.74, 0.005, 0.01), M.chrome);
    lip.position.set(0, 0.862, -0.52); lip.rotation.x = -0.405;
    root.add(lip);

    // ambient LED line
    const led = new THREE.Mesh(new THREE.BoxGeometry(1.70, 0.004, 0.004), M.led);
    led.position.set(0, 0.935, -0.552);
    root.add(led);

    // air vents (dark recess + slats)
    const vent = (x0, x1) => {
      const w = x1 - x0, cx = (x0 + x1) / 2;
      const grp = new THREE.Group();
      const back = new THREE.Mesh(new THREE.PlaneGeometry(w, 0.045), new THREE.MeshStandardMaterial({ color: 0x030303, roughness: 1 }));
      grp.add(back);
      for (let i = 0; i < 4; i++) {
        const sl = new THREE.Mesh(new THREE.BoxGeometry(w - 0.006, 0.0025, 0.012), M.piano);
        sl.position.set(0, -0.016 + i * 0.011, 0.004);
        sl.rotation.x = 0.25;
        grp.add(sl);
      }
      const frame = new THREE.Mesh(new THREE.BoxGeometry(w + 0.01, 0.003, 0.006), M.alu);
      frame.position.set(0, 0.025, 0.003); grp.add(frame);
      const frame2 = frame.clone(); frame2.position.y = -0.025; grp.add(frame2);
      grp.position.set(cx, 0.895, -0.531);
      grp.rotation.x = -0.405;
      root.add(grp);
    };
    vent(-0.86, -0.62);
    vent(-0.34, -0.02);
    vent(0.02, 0.34);
    vent(0.56, 0.86);
  }

  // ---------------- Instrument cluster in a hood (twin dials) ----------------
  const mkScreen = (w, h) => {
    const c = makeCanvas(w, h); const t = toTex(c, { aniso: 8 });
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; return { canvas: c, tex: t };
  };
  const cluster = mkScreen(SCREEN.W, SCREEN.H);
  const center = mkScreen(SCREEN.W, SCREEN.H);
  {
    const cg = new THREE.Group();
    cg.position.set(-0.37, 1.025, -0.625);
    const cl = new THREE.Mesh(new THREE.PlaneGeometry(0.44, 0.165), new THREE.MeshBasicMaterial({ map: cluster.tex, color: new THREE.Color(1.1, 1.1, 1.1) }));
    cg.add(cl);
    for (const sx of [-1, 1]) { // chrome + black bezel rings around each dial
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.071, 0.003, 10, 64), M.chrome);
      ring.position.set(sx * 0.1277, -0.0035, 0.0025); cg.add(ring);
      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.0765, 0.0037, 10, 64), M.piano);
      ring2.position.set(sx * 0.1277, -0.0035, 0.002); cg.add(ring2);
    }
    cg.lookAt(EYE);
    root.add(cg);
    const back = new THREE.Mesh(new RoundedBoxGeometry(0.47, 0.165, 0.08, 3, 0.02), M.soft);
    back.position.set(-0.37, 1.0, -0.705); root.add(back);
    // smooth hood over the dials
    const hood = new THREE.Mesh(new RoundedBoxGeometry(0.50, 0.026, 0.12, 5, 0.012), M.leather);
    hood.position.set(-0.37, 1.118, -0.6); hood.rotation.x = 0.12; root.add(hood);
    const hoodSt = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.0016, 0.0016), M.stitch);
    hoodSt.position.set(-0.37, 1.106, -0.545); root.add(hoodSt);

    // free-standing centre display
    const cs = new THREE.Group();
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.40, 0.15), new THREE.MeshBasicMaterial({ map: center.tex, color: new THREE.Color(1.1, 1.1, 1.1) }));
    scr.position.z = 0.009; cs.add(scr);
    const bez = new THREE.Mesh(new RoundedBoxGeometry(0.418, 0.168, 0.016, 3, 0.006), M.piano);
    cs.add(bez);
    const chromeEdge = new THREE.Mesh(new RoundedBoxGeometry(0.424, 0.174, 0.008, 3, 0.004), M.alu);
    chromeEdge.position.z = -0.006; cs.add(chromeEdge);
    cs.position.set(0.14, 1.09, -0.67);
    cs.lookAt(EYE.x * 0.55, EYE.y, EYE.z + 0.2);
    root.add(cs);
    const stand = new THREE.Mesh(new RoundedBoxGeometry(0.12, 0.08, 0.06, 2, 0.015), M.piano);
    stand.position.set(0.14, 1.0, -0.69); root.add(stand);
  }

  // ---------------- Centre stack & console ----------------
  const climate = mkScreen(512, 160);
  {
    const stack = new THREE.Mesh(new RoundedBoxGeometry(0.40, 0.36, 0.24, 3, 0.03), M.soft);
    stack.position.set(0.0, 0.68, -0.53);
    root.add(stack);
    const face = new THREE.Group();
    face.position.set(0, 0.75, -0.405);
    face.rotation.x = -0.22;
    root.add(face);
    const panel = new THREE.Mesh(new RoundedBoxGeometry(0.36, 0.2, 0.012, 3, 0.006), M.piano);
    panel.position.set(0, 0.02, 0); face.add(panel);
    const strip = new THREE.Mesh(new THREE.PlaneGeometry(0.33, 0.041), new THREE.MeshStandardMaterial({ map: T.stackButtons, emissiveMap: T.stackButtons, emissive: 0xffffff, emissiveIntensity: 0.35, roughness: 0.3 }));
    strip.position.set(0, 0.085, 0.0065); face.add(strip);
    const chromeL = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.003, 0.004), M.chrome);
    chromeL.position.set(0, 0.057, 0.008); face.add(chromeL);
    const clim = new THREE.Mesh(new THREE.PlaneGeometry(0.33, 0.1), new THREE.MeshBasicMaterial({ map: climate.tex, color: new THREE.Color(1.05, 1.05, 1.05) }));
    clim.position.set(0, -0.002, 0.0065); face.add(clim);
    for (const sx of [-1, 1]) {
      const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.019, 0.02, 0.022, 32), M.alu);
      knob.rotation.x = Math.PI / 2; knob.position.set(sx * 0.128, -0.005, 0.016); face.add(knob);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.0205, 0.0022, 8, 32), M.chrome);
      ring.position.set(sx * 0.128, -0.005, 0.027); face.add(ring);
    }
    // wood strip + storage below
    const w2 = new THREE.Mesh(new THREE.PlaneGeometry(0.36, 0.04), M.wood);
    w2.position.set(0, -0.09, 0.003); face.add(w2);
    const tray = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.07), new THREE.MeshStandardMaterial({ color: 0x050506, roughness: 1 }));
    tray.position.set(0, -0.15, 0.002); face.add(tray);

    const console_ = new THREE.Mesh(new RoundedBoxGeometry(0.28, 0.22, 0.95, 3, 0.04), M.soft);
    console_.position.set(0.0, 0.52, -0.02);
    root.add(console_);
    const cTrim = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.5), M.carbonSq);
    cTrim.rotation.x = -Math.PI / 2; cTrim.position.set(0, 0.632, -0.18);
    root.add(cTrim);
    // gear selector
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 0.02, 24), M.alu);
    base.position.set(0, 0.64, -0.16); root.add(base);
    const knob = new THREE.Mesh(new THREE.CapsuleGeometry(0.022, 0.05, 6, 16), M.leather);
    knob.position.set(0, 0.69, -0.16); knob.rotation.x = 0.25; root.add(knob);
    const knobTop = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.006, 20), M.alu);
    knobTop.position.set(0, 0.727, -0.15); knobTop.rotation.x = 0.25; root.add(knobTop);
    // rotary controller
    const rot = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.032, 0.025, 32), M.alu);
    rot.position.set(0, 0.645, 0.04); root.add(rot);
    // start/stop
    const ss = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.01, 20), new THREE.MeshStandardMaterial({ color: 0x220405, emissive: 0xff2a2a, emissiveIntensity: 0.6 }));
    ss.position.set(-0.11, 0.80, -0.43); ss.rotation.x = -0.9; root.add(ss);
    // armrest
    const arm = new THREE.Mesh(new RoundedBoxGeometry(0.24, 0.07, 0.36, 3, 0.03), M.leather);
    arm.position.set(0, 0.66, 0.42); root.add(arm);
  }

  // ---------------- Floor ----------------
  {
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 2.4), M.carpet);
    floor.rotation.x = -Math.PI / 2; floor.position.set(0, 0.28, -0.1);
    root.add(floor);
  }

  // ---------------- Steering wheel ----------------
  const wheelRoot = new THREE.Group();
  wheelRoot.position.set(-0.37, 0.895, -0.40);
  wheelRoot.rotation.x = -0.35;
  root.add(wheelRoot);
  const wheelSpin = new THREE.Group();
  wheelRoot.add(wheelSpin);
  {
    const R = 0.19;
    const pts = [];
    for (let i = 0; i < 120; i++) {
      const a = i / 120 * Math.PI * 2;
      let x = R * Math.cos(a), y = R * Math.sin(a);
      const flat = -0.80 * R;
      if (y < flat) y = flat + (y - flat) * 0.22;
      pts.push(new THREE.Vector3(x, y, 0));
    }
    const curve = new THREE.CatmullRomCurve3(pts, true);
    const rim = new THREE.Mesh(new THREE.TubeGeometry(curve, 260, 0.0345, 24, true), M.leatherWheel);
    wheelSpin.add(rim);
    // stitching rings (inner/outer)
    const st = new THREE.Mesh(new THREE.TorusGeometry(R - 0.03, 0.0012, 4, 140), M.stitch);
    st.position.z = 0.012; wheelSpin.add(st);
    // 12 o'clock centre marker (light stripe like a sport wheel)
    const mark = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.0014, 0.07), M.alu);
    mark.position.set(0, R + 0.0345, 0); mark.rotation.x = 0; wheelSpin.add(mark);

    const mkSpoke = (shape, depth, mat) => {
      const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 3, curveSegments: 10 });
      return new THREE.Mesh(g, mat);
    };
    const silver = new THREE.MeshStandardMaterial({ map: T.brushed, color: 0xa6aab1, metalness: 0.8, roughness: 0.4, envMapIntensity: 0.85 });

    // hub / airbag module: domed disc, round like the reference
    const hubGeo = new THREE.LatheGeometry([new THREE.Vector2(0.0, -0.01), new THREE.Vector2(0.080, -0.01), new THREE.Vector2(0.081, 0.010), new THREE.Vector2(0.076, 0.022), new THREE.Vector2(0.060, 0.031), new THREE.Vector2(0.03, 0.034), new THREE.Vector2(0.0, 0.034)], 64);
    hubGeo.rotateX(Math.PI / 2);
    const hub = new THREE.Mesh(hubGeo, M.leather);
    hub.position.set(0, 0.0, 0.0); wheelSpin.add(hub);
    const embRing = new THREE.Mesh(new THREE.TorusGeometry(0.0335, 0.0026, 10, 48), M.chrome);
    embRing.position.set(0, 0, 0.0345); wheelSpin.add(embRing);
    const emb = new THREE.Mesh(new THREE.CircleGeometry(0.0335, 56), M.emblem);
    emb.position.set(0, 0, 0.0348); wheelSpin.add(emb);
    // thin silver accent ring around the hub
    const hubRing = new THREE.Mesh(new THREE.TorusGeometry(0.074, 0.0016, 8, 64), M.chrome);
    hubRing.position.set(0, 0, 0.0245); wheelSpin.add(hubRing);

    // side spokes: wide silver arms with black button blocks
    for (const sx of [-1, 1]) {
      const sh = new THREE.Shape();
      sh.moveTo(0.05, 0.048); sh.lineTo(0.14, 0.060); sh.quadraticCurveTo(0.176, 0.062, 0.182, 0.030);
      sh.lineTo(0.182, -0.040); sh.quadraticCurveTo(0.176, -0.070, 0.14, -0.064); sh.lineTo(0.05, -0.040); sh.closePath();
      const sp = mkSpoke(sh, 0.016, silver);
      sp.scale.x = sx; sp.position.set(0, 0, -0.002);
      wheelSpin.add(sp);
      const blk = new THREE.Mesh(new RoundedBoxGeometry(0.085, 0.064, 0.012, 3, 0.008), M.piano);
      blk.position.set(sx * 0.112, -0.003, 0.0215); wheelSpin.add(blk);
      const btn = new THREE.Mesh(new THREE.PlaneGeometry(0.078, 0.049), new THREE.MeshStandardMaterial({ map: sx < 0 ? T.btnLeft : T.btnRight, emissiveMap: sx < 0 ? T.btnLeft : T.btnRight, emissive: 0xffffff, emissiveIntensity: 0.42, roughness: 0.35 }));
      btn.position.set(sx * 0.112, -0.003, 0.0283); wheelSpin.add(btn);
      // red mode buttons at the top of the spoke, next to the rim
      const red = new THREE.Mesh(new RoundedBoxGeometry(0.036, 0.020, 0.012, 2, 0.005), new THREE.MeshStandardMaterial({ color: 0xc81a22, roughness: 0.35 }));
      red.position.set(sx * 0.130, 0.052, 0.020); red.rotation.z = sx * -0.16; wheelSpin.add(red);
      const redFace = new THREE.Mesh(new THREE.PlaneGeometry(0.032, 0.017), new THREE.MeshStandardMaterial({ map: sx < 0 ? T.redS1 : T.redS2, emissiveMap: sx < 0 ? T.redS1 : T.redS2, emissive: 0xffffff, emissiveIntensity: 0.25, roughness: 0.3 }));
      redFace.position.set(sx * 0.130, 0.052, 0.0265); redFace.rotation.z = sx * -0.16; wheelSpin.add(redFace);
      // shift paddles behind the rim
      const paddle = new THREE.Mesh(new RoundedBoxGeometry(0.03, 0.085, 0.006, 2, 0.003), M.alu);
      paddle.position.set(sx * 0.152, 0.03, -0.055); paddle.rotation.z = sx * -0.35; wheelSpin.add(paddle);
    }
    // lower spoke: silver, with dark insert and a thin accent stripe
    const lsh = new THREE.Shape();
    lsh.moveTo(-0.034, -0.05); lsh.lineTo(0.034, -0.05); lsh.lineTo(0.056, -0.148); lsh.lineTo(-0.056, -0.148); lsh.closePath();
    const low = mkSpoke(lsh, 0.014, silver); low.position.z = -0.002; wheelSpin.add(low);
    const lowIn = new THREE.Mesh(new RoundedBoxGeometry(0.03, 0.058, 0.01, 3, 0.005), M.piano);
    lowIn.position.set(0, -0.098, 0.017); wheelSpin.add(lowIn);
    const stripe = new THREE.Mesh(new THREE.PlaneGeometry(0.006, 0.05), new THREE.MeshBasicMaterial({ color: 0x22b14c }));
    stripe.position.set(0, -0.098, 0.0225); wheelSpin.add(stripe);

    // column
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.065, 0.3, 20), M.soft);
    col.rotation.x = Math.PI / 2; col.position.set(0, -0.01, -0.17);
    wheelRoot.add(col);
    for (const sx of [-1, 1]) {
      const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.006, 0.14, 8), M.piano);
      stalk.rotation.z = Math.PI / 2 + sx * 0.25; stalk.position.set(sx * 0.1, 0.0, -0.1);
      wheelRoot.add(stalk);
    }
  }

  // ---------------- A-pillars, roof, windshield ----------------
  const wsBL = [-0.74, 0.88, -1.32], wsBR = [0.74, 0.88, -1.32], wsTR = [0.66, 1.60, -0.22], wsTL = [-0.66, 1.60, -0.22];
  {
    for (const sx of [-1, 1]) {
      root.add(beam(new THREE.Vector3(sx * 0.77, 0.86, -1.30), new THREE.Vector3(sx * 0.69, 1.61, -0.21), 0.075, 0.07, M.fabric));
    }
    const header = new THREE.Mesh(new RoundedBoxGeometry(1.4, 0.06, 0.14, 2, 0.02), M.fabric);
    header.position.set(0, 1.61, -0.19); root.add(header);
    const roof = new THREE.Mesh(new THREE.PlaneGeometry(1.45, 1.9), M.fabric);
    roof.rotation.x = Math.PI / 2; roof.position.set(0, 1.63, 0.72); root.add(roof);
    // sun visors (folded)
    for (const sx of [-1, 1]) {
      const v = new THREE.Mesh(new RoundedBoxGeometry(0.42, 0.025, 0.17, 2, 0.01), M.fabric);
      v.position.set(sx * 0.36, 1.595, -0.07); root.add(v);
    }
    // windshield glass with shade band
    const c = makeCanvas(4, 128), g = c.getContext('2d');
    const gr = g.createLinearGradient(0, 128, 0, 0);
    gr.addColorStop(0, 'rgb(14,14,14)');
    gr.addColorStop(0.84, 'rgb(14,14,14)');
    gr.addColorStop(0.92, 'rgb(80,80,80)');
    gr.addColorStop(1, 'rgb(130,130,130)');
    g.fillStyle = gr; g.fillRect(0, 0, 4, 128);
    const glassTex = toTex(c); glassTex.wrapS = glassTex.wrapT = THREE.ClampToEdgeWrapping;
    const glass = new THREE.Mesh(quad(wsBL, wsBR, wsTR, wsTL), new THREE.MeshPhysicalMaterial({
      color: 0x6f8296, alphaMap: glassTex, transparent: true, roughness: 0.05, metalness: 0, envMapIntensity: 0.25, depthWrite: false, side: THREE.DoubleSide,
    }));
    glass.renderOrder = 5;
    root.add(glass);
    // rear-view mirror
    const mirror = new THREE.Group();
    const housing = new THREE.Mesh(new RoundedBoxGeometry(0.27, 0.075, 0.035, 3, 0.015), M.piano);
    mirror.add(housing);
    const mGlass = new THREE.Mesh(new THREE.PlaneGeometry(0.255, 0.062), new THREE.MeshBasicMaterial({ color: 0x777777 }));
    mGlass.position.z = 0.0185; mirror.add(mGlass);
    mirror.position.set(0.0, 1.445, -0.28);
    mirror.lookAt(EYE.x + 0.15, EYE.y + 0.05, EYE.z);
    root.add(mirror);
    root.add(beam(new THREE.Vector3(0, 1.50, -0.28), new THREE.Vector3(0, 1.61, -0.21), 0.03, 0.02, M.piano));
    root.userData.rearMirror = mGlass;
  }

  // ---------------- Hood (bonnet) + wipers ----------------
  {
    const nx = 24, nz = 16;
    const pos = [], idx = [];
    for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) {
      const u = 1.32 + j / nz * 1.45;
      const x = (i / nx - 0.5) * 1.84 * (1 - (j / nz) * 0.04);
      const ax = Math.abs(x);
      let y = 0.872 - (u - 1.32) * 0.05 - Math.pow(ax / 0.92, 4) * 0.05;
      y += 0.014 * Math.exp(-Math.pow((ax - 0.32) / 0.08, 2)) * (1 - j / nz * 0.5);
      y += 0.03 * Math.exp(-Math.pow((ax - 0.86) / 0.07, 2)); // fender shoulders
      pos.push(x, y, -u);
    }
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
      const a = j * (nx + 1) + i, b = a + nx + 1;
      idx.push(a, b, a + 1, a + 1, b, b + 1);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setIndex(idx); g.computeVertexNormals();
    const hood = new THREE.Mesh(g, M.paint);
    root.add(hood);
    // cowl
    const cowl = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.02, 0.12), M.rubber);
    cowl.position.set(0, 0.875, -1.36); root.add(cowl);
    for (const [x, len, rz] of [[-0.55, 0.62, 0.05], [0.12, 0.58, 0.04]]) {
      const w = new THREE.Mesh(new THREE.BoxGeometry(len, 0.012, 0.018), M.rubber);
      w.position.set(x + len / 2, 0.895, -1.37); w.rotation.z = rz; root.add(w);
    }
  }

  // ---------------- Doors ----------------
  for (const sx of [-1, 1]) {
    const dx = sx * 0.80;
    const panel = new THREE.Mesh(new RoundedBoxGeometry(0.06, 0.62, 1.35, 3, 0.02), M.soft);
    panel.position.set(dx, 0.66, 0.05); root.add(panel);
    const sill = new THREE.Mesh(new RoundedBoxGeometry(0.1, 0.04, 1.35, 3, 0.015), M.leather);
    sill.position.set(dx - sx * 0.02, 0.985, 0.05); root.add(sill);
    const insert = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.12), M.wood);
    insert.position.set(dx - sx * 0.032, 0.80, 0.05); insert.rotation.y = -sx * Math.PI / 2; root.add(insert);
    const chr = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.004, 1.12), M.chrome);
    chr.position.set(dx - sx * 0.035, 0.735, 0.05); root.add(chr);
    const ledD = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.004, 1.05), M.led);
    ledD.position.set(dx - sx * 0.034, 0.875, 0.05); root.add(ledD);
    const armrest = new THREE.Mesh(new RoundedBoxGeometry(0.09, 0.05, 0.55, 3, 0.02), M.leather);
    armrest.position.set(dx - sx * 0.06, 0.70, 0.15); root.add(armrest);
    const handle = new THREE.Mesh(new RoundedBoxGeometry(0.02, 0.025, 0.1, 2, 0.008), M.chrome);
    handle.position.set(dx - sx * 0.04, 0.88, -0.3); root.add(handle);
    const spk = new THREE.Mesh(new THREE.CircleGeometry(0.075, 32), M.grille);
    spk.position.set(dx - sx * 0.032, 0.50, -0.38); spk.rotation.y = -sx * Math.PI / 2; root.add(spk);
    const spkRing = new THREE.Mesh(new THREE.TorusGeometry(0.077, 0.004, 8, 40), M.alu);
    spkRing.position.copy(spk.position); spkRing.rotation.y = -sx * Math.PI / 2; root.add(spkRing);
    // silver tweeter grille at the front of the door
    const tw = new THREE.Mesh(new THREE.CircleGeometry(0.05, 32), new THREE.MeshStandardMaterial({ map: T.grille, color: 0xc9ccd2, metalness: 0.8, roughness: 0.35 }));
    tw.position.set(dx - sx * 0.036, 0.935, -0.56); tw.rotation.y = -sx * Math.PI / 2; tw.rotation.x = 0.0; root.add(tw);
    const twr = new THREE.Mesh(new THREE.TorusGeometry(0.052, 0.004, 8, 40), M.alu);
    twr.position.copy(tw.position); twr.rotation.y = -sx * Math.PI / 2; root.add(twr);
    // mirror sail
    const sail = new THREE.Mesh(new RoundedBoxGeometry(0.06, 0.16, 0.3, 2, 0.02), M.soft);
    sail.position.set(sx * 0.79, 1.0, -0.75); root.add(sail);
    // side window glass
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(1.65, 0.6), new THREE.MeshPhysicalMaterial({ color: 0x7b8a9a, transparent: true, opacity: 0.12, roughness: 0.05, depthWrite: false, side: THREE.DoubleSide }));
    glass.position.set(sx * 0.84, 1.29, -0.15); glass.rotation.y = Math.PI / 2;
    glass.renderOrder = 5; root.add(glass);
    // B-pillar
    root.add(beam(new THREE.Vector3(sx * 0.80, 0.98, 0.72), new THREE.Vector3(sx * 0.70, 1.62, 0.75), 0.1, 0.12, M.fabric));
    // exterior side mirror
    const sm = new THREE.Group();
    const housing = new THREE.Mesh(new RoundedBoxGeometry(0.22, 0.13, 0.1, 3, 0.04), M.paint);
    sm.add(housing);
    const smGlass = new THREE.Mesh(new THREE.PlaneGeometry(0.19, 0.1), new THREE.MeshBasicMaterial({ color: 0x777777 }));
    smGlass.position.z = 0.051; sm.add(smGlass);
    sm.position.set(sx * 1.04, 1.03, -0.72);
    sm.lookAt(EYE.x, EYE.y, EYE.z + 0.4);
    root.add(sm);
    root.add(beam(new THREE.Vector3(sx * 0.82, 1.0, -0.74), new THREE.Vector3(sx * 0.96, 1.01, -0.73), 0.04, 0.06, M.paint));
    if (sx < 0) root.userData.leftMirror = smGlass; else root.userData.rightMirror = smGlass;
  }

  // ---------------- Passenger seat ----------------
  {
    const seat = new THREE.Group();
    const cushion = new THREE.Mesh(new RoundedBoxGeometry(0.52, 0.14, 0.55, 3, 0.05), M.leather);
    cushion.position.set(0, 0.45, 0.25); seat.add(cushion);
    const back = new THREE.Mesh(new RoundedBoxGeometry(0.52, 0.72, 0.14, 3, 0.05), M.leather);
    back.position.set(0, 0.85, 0.58); back.rotation.x = 0.22; seat.add(back);
    const center = new THREE.Mesh(new RoundedBoxGeometry(0.28, 0.5, 0.02, 2, 0.01), M.grille);
    center.position.set(0, 0.86, 0.505); center.rotation.x = 0.22; seat.add(center);
    const head = new THREE.Mesh(new RoundedBoxGeometry(0.28, 0.2, 0.12, 3, 0.04), M.leather);
    head.position.set(0, 1.33, 0.69); head.rotation.x = 0.22; seat.add(head);
    seat.position.x = 0.40;
    root.add(seat);
  }

  // soft cabin fill light (blue ambient)
  const amb = new THREE.PointLight(0xdfe8ff, 0.7, 1.8, 1.5);
  amb.position.set(-0.6, 0.9, -0.1);
  root.add(amb);

  return {
    group: root, wheelSpin, M,
    cluster, center, climate,
    leds: [M.led],
    mirrors: { rear: root.userData.rearMirror, left: root.userData.leftMirror, right: root.userData.rightMirror },
  };
}
