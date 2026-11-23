import puppeteer from 'puppeteer-core';
import path from 'path';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', protocolTimeout: 900000,
  args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--window-size=1600,900'] });
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 900 });
const errs = []; page.on('pageerror', e => errs.push(e.message));
await page.goto('file://' + path.resolve('index.html'), { timeout: 300000 });
await page.evaluate(async () => { for (let i = 0; i < 4; i++) await new Promise(r => requestAnimationFrame(r)); });
await page.screenshot({ path: process.argv[2] });
console.log('errors:', errs.join('\n') || 'none');
await browser.close();
