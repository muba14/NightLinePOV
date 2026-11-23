import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 512, height: 512 });
await page.setContent(`<html><body style="margin:0;background:transparent"><canvas id=c width=512 height=512></canvas></body></html>`);
const data = await page.evaluate(() => {
  const g = document.getElementById('c').getContext('2d');
  g.beginPath(); g.roundRect(16, 16, 480, 480, 96);
  const bg = g.createLinearGradient(0, 16, 0, 496); bg.addColorStop(0, '#1b2b48'); bg.addColorStop(0.55, '#0b1220'); bg.addColorStop(1, '#05070b');
  g.fillStyle = bg; g.fill(); g.save(); g.clip();
  // road
  g.fillStyle = '#1a1d24'; g.beginPath(); g.moveTo(236, 250); g.lineTo(276, 250); g.lineTo(470, 512); g.lineTo(42, 512); g.closePath(); g.fill();
  g.strokeStyle = '#ffd27a'; g.lineWidth = 10; g.setLineDash([34, 26]);
  g.beginPath(); g.moveTo(256, 256); g.lineTo(256, 512); g.stroke(); g.setLineDash([]);
  // glow horizon
  const hz = g.createRadialGradient(256, 250, 0, 256, 250, 220); hz.addColorStop(0, 'rgba(255,170,90,0.55)'); hz.addColorStop(1, 'rgba(255,170,90,0)');
  g.fillStyle = hz; g.fillRect(0, 0, 512, 512);
  // steering wheel
  g.strokeStyle = '#e8edf5'; g.lineWidth = 30;
  g.beginPath(); g.arc(256, 300, 150, Math.PI * 1.08, Math.PI * 1.92); g.stroke();
  g.strokeStyle = '#3b9bff'; g.lineWidth = 30;
  g.beginPath(); g.arc(256, 300, 150, Math.PI * 1.46, Math.PI * 1.54); g.stroke();
  g.restore();
  g.lineWidth = 6; g.strokeStyle = 'rgba(255,255,255,0.08)'; g.beginPath(); g.roundRect(19, 19, 474, 474, 93); g.stroke();
  return document.getElementById('c').toDataURL('image/png');
});
const fs = await import('fs');
fs.writeFileSync('build/icon.png', Buffer.from(data.split(',')[1], 'base64'));
await browser.close();
