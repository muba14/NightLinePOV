// Headless screenshot helper: node tools/shot.mjs out.png [seconds] [lane] [speed] [extraJs]
import puppeteer from 'puppeteer-core';
import path from 'path';

const out = process.argv[2] || 'shot.png';
const secs = parseFloat(process.argv[3] || '6');
const lane = process.argv[4] || '3.3';
const speed = process.argv[5] || '101';
const extra = process.argv[6] || '';
const file = 'file://' + path.resolve('index.html') + '?demo=1';

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome', headless: 'new', protocolTimeout: 900000,
  args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--window-size=1600,900'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 900 });
const errs = [];
page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errs.push(m.type() + ': ' + m.text()); });
page.on('pageerror', e => errs.push('pageerror: ' + e.message));
await page.evaluateOnNewDocument((lane, speed) => { window.__demoLane = parseFloat(lane); window.__demoSpeed = parseFloat(speed); window.__fixedDt = 0.1; try{localStorage.setItem('nl_quality', window.__q||'high');}catch(e){} }, lane, speed);
await page.goto(file, { timeout: 300000 });
await page.waitForFunction(() => window.__game, { timeout: 60000 });
if (extra) await page.evaluate(extra);
// simulated time: frames at fixed dt
const frames = Math.round(secs * 10);
const t0=Date.now();
await page.evaluate(async (n) => { for (let i = 0; i < n; i++) await new Promise(r => requestAnimationFrame(r)); }, frames);
console.log('ms/frame', (Date.now()-t0)/frames);
await page.evaluate(() => { window.__fixedDt = 0.001; });
await page.evaluate(async () => { for (let i = 0; i < 2; i++) await new Promise(r => requestAnimationFrame(r)); });
await page.screenshot({ path: out });
const info = await page.evaluate(() => ({ s: __game.car.s, d: __game.car.d, kmh: __game.car.speedKmh, gear: __game.car.gearLabel() }));
console.log(JSON.stringify(info));
console.log(errs.slice(0, 15).join('\n'));
await browser.close();
