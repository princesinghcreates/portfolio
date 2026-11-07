import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ffmpeg = path.resolve('node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe');
const dir = path.resolve('public/assets/projects/posters');

const files = fs.readdirSync(dir);
for (const file of files) {
  if (file.endsWith('.webp')) continue;
  const src = path.join(dir, file);
  const baseName = file.substring(0, file.lastIndexOf('.'));
  const dest = path.join(dir, `${baseName}.webp`);

  console.log(`Optimizing ${file}...`);
  // Scale down max width to 1200px maintaining aspect ratio, convert to high-quality webp
  try {
    execSync(`"${ffmpeg}" -y -i "${src}" -vf "scale='min(1200,iw)':-2" -c:v libwebp -quality 85 "${dest}"`, { stdio: 'pipe' });
    const s1 = (fs.statSync(src).size / 1024 / 1024).toFixed(1);
    const s2 = (fs.statSync(dest).size / 1024).toFixed(0);
    console.log(`-> ${baseName}.webp: ${s1}MB -> ${s2}KB`);
    fs.unlinkSync(src); // remove heavy original
  } catch (e) {
    console.error(`Failed on ${file}:`, e.message);
  }
}
console.log('Posters optimized successfully.');
