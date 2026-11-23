import puppeteer from 'puppeteer-core';
import path from 'path';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', protocolTimeout: 900000,
  args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--window-size=800,450'] });
const page = await browser.newPage();
await page.setViewport({ width: 800, height: 450 });
const errs=[]; page.on('pageerror', e => errs.push(e.message)); page.on('console', m => { if (m.type()==='error'||m.type()==='warning') errs.push(m.text()); });
await page.evaluateOnNewDocument(() => { window.__fixedDt = 0.25; window.__demoSpeed = 250; localStorage.setItem('nl_quality','low'); });
await page.goto('file://' + path.resolve('index.html') + '?demo=1');
await page.waitForFunction(() => window.__game, { timeout: 60000 });
await page.evaluate(async () => { for (let i = 0; i < 160; i++) await new Promise(r => requestAnimationFrame(r)); });
console.log(await page.evaluate(() => { const r = __game.renderer.info; return JSON.stringify({ calls: r.render.calls, tris: r.render.triangles, geos: r.memory.geometries, tex: r.memory.textures, s: __game.car.s, kmh: __game.car.speedKmh, d: __game.car.d, chunks: __game.world.chunks.size }); }));
console.log(errs.join('\n'));
await browser.close();
