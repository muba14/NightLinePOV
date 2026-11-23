// Synthesised V8 engine, wind/road noise, tyre squeal, horn, clicks (WebAudio)
export class CarAudio {
  constructor() { this.ctx = null; this.muted = false; }

  start() {
    if (this.ctx) { this.ctx.resume(); return; }
    const ctx = this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.master = ctx.createGain(); this.master.gain.value = 0.8;
    const cabin = ctx.createBiquadFilter(); cabin.type = 'lowpass'; cabin.frequency.value = 4200;
    const comp = ctx.createDynamicsCompressor();
    this.master.connect(cabin); cabin.connect(comp); comp.connect(ctx.destination);

    // noise buffer
    const buf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    this.noiseBuf = buf;

    // --- engine ---
    this.engGain = ctx.createGain(); this.engGain.gain.value = 0.0;
    this.engFilter = ctx.createBiquadFilter(); this.engFilter.type = 'lowpass'; this.engFilter.Q.value = 2.5;
    const shaper = ctx.createWaveShaper();
    const curve = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) { const x = i / 512 - 1; curve[i] = Math.tanh(x * 2.6); }
    shaper.curve = curve;
    this.oscs = [];
    const mk = (type, gain) => {
      const o = ctx.createOscillator(); o.type = type;
      const g = ctx.createGain(); g.gain.value = gain;
      o.connect(g); g.connect(shaper); o.start();
      this.oscs.push(o); return o;
    };
    this.o1 = mk('sawtooth', 0.5);   // firing frequency
    this.o2 = mk('square', 0.35);    // half order (V8 burble)
    this.o3 = mk('sawtooth', 0.18);  // 2nd harmonic
    this.o4 = mk('triangle', 0.4);   // sub
    // amplitude roughness
    this.am = ctx.createGain(); this.am.gain.value = 1;
    this.lfo = ctx.createOscillator(); this.lfo.type = 'sine';
    this.lfoGain = ctx.createGain(); this.lfoGain.gain.value = 0.25;
    this.lfo.connect(this.lfoGain); this.lfoGain.connect(this.am.gain); this.lfo.start();
    shaper.connect(this.engFilter); this.engFilter.connect(this.am); this.am.connect(this.engGain); this.engGain.connect(this.master);

    // --- intake/induction noise ---
    const nz = (type, f, q, gain) => {
      const s = ctx.createBufferSource(); s.buffer = buf; s.loop = true;
      const bf = ctx.createBiquadFilter(); bf.type = type; bf.frequency.value = f; bf.Q.value = q;
      const g = ctx.createGain(); g.gain.value = gain;
      s.connect(bf); bf.connect(g); g.connect(this.master); s.start();
      return { f: bf, g };
    };
    this.intake = nz('bandpass', 900, 1.2, 0);
    this.wind = nz('bandpass', 500, 0.6, 0);
    this.road = nz('lowpass', 180, 0.8, 0);
    this.squeal = nz('bandpass', 2300, 12, 0);

    // --- horn ---
    this.hornGain = ctx.createGain(); this.hornGain.gain.value = 0;
    for (const f of [415, 520]) { const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f; const g = ctx.createGain(); g.gain.value = 0.08; o.connect(g); g.connect(this.hornGain); o.start(); }
    const hf = ctx.createBiquadFilter(); hf.type = 'lowpass'; hf.frequency.value = 2500;
    this.hornGain.connect(hf); hf.connect(this.master);
  }

  setMuted(m) { this.muted = m; if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.8, this.ctx.currentTime, 0.05); }

  update(car, onAccel) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, k = 0.04;
    const rpm = car.rpm;
    const fire = rpm / 60 * 4; // V8: 4 firing events per revolution
    this.o1.frequency.setTargetAtTime(fire, t, k);
    this.o2.frequency.setTargetAtTime(fire * 0.5, t, k);
    this.o3.frequency.setTargetAtTime(fire * 2.01, t, k);
    this.o4.frequency.setTargetAtTime(fire * 0.25, t, k);
    this.lfo.frequency.setTargetAtTime(fire * 0.125 + 3, t, k);
    const thr = car.shiftT > 0 ? 0.1 : car.throttle;
    this.engFilter.frequency.setTargetAtTime(280 + thr * 1800 + rpm * 0.22, t, k);
    this.engGain.gain.setTargetAtTime(0.10 + thr * 0.22 + rpm / 7500 * 0.08, t, k);
    this.lfoGain.gain.setTargetAtTime(thr < 0.1 && rpm > 1500 ? 0.55 : 0.2, t, 0.1); // overrun crackle feel
    this.intake.f.frequency.setTargetAtTime(500 + rpm * 0.35, t, k);
    this.intake.g.gain.setTargetAtTime(thr * 0.05 * rpm / 7000, t, k);
    const v = Math.abs(car.vLong);
    this.wind.g.gain.setTargetAtTime(Math.min(0.35, (v / 80) ** 2 * 0.35), t, 0.1);
    this.wind.f.frequency.setTargetAtTime(300 + v * 12, t, 0.1);
    this.road.g.gain.setTargetAtTime(Math.min(0.5, v / 60 * 0.5), t, 0.1);
    this.squeal.g.gain.setTargetAtTime(car.slip > 0.15 && v > 5 ? car.slip * 0.12 : 0, t, 0.05);
  }

  horn(on) { if (this.ctx) this.hornGain.gain.setTargetAtTime(on ? 1 : 0, this.ctx.currentTime, 0.02); }

  _burst(dur, freq, gain, type = 'bandpass') {
    if (!this.ctx) return;
    const ctx = this.ctx, s = ctx.createBufferSource(); s.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = 1;
    const g = ctx.createGain(); g.gain.value = gain;
    g.gain.setTargetAtTime(0, ctx.currentTime + 0.005, dur / 3);
    s.connect(f); f.connect(g); g.connect(this.master);
    s.start(); s.stop(ctx.currentTime + dur + 0.1);
  }
  click(on) { this._burst(0.03, on ? 2600 : 1800, 0.25); }
  crash(strength) { this._burst(0.6, 400, 0.6 + strength * 0.8, 'lowpass'); this._burst(0.25, 2500, 0.3 * strength); }
  shift() { this._burst(0.06, 300, 0.15, 'lowpass'); }
}
