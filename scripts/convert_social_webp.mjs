import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ffmpeg = path.resolve('node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe');
const srcDir = 'D:/work/Prince Singh Creates/Portfolio/Social Media';
const outDir = path.resolve('public/assets/portfolio/social-media/showcase');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

for (let i = 1; i <= 6; i++) {
  const src = path.join(srcDir, `${i}.png`);
  const destWebp = path.join(outDir, `${i}.webp`);
  const destPng = path.join(outDir, `${i}.png`);
  
  // Also copy PNG just in case
  fs.copyFileSync(src, destPng);

  // Convert to high quality WebP
  execSync(`"${ffmpeg}" -y -i "${src}" -c:v libwebp -quality 88 "${destWebp}"`, { stdio: 'pipe' });
  
  const sOrig = fs.statSync(src).size;
  const sWebp = fs.statSync(destWebp).size;
  console.log(`Image ${i}: ${(sOrig / 1024 / 1024).toFixed(2)} MB (PNG) -> ${(sWebp / 1024).toFixed(0)} KB (WebP)`);
}
