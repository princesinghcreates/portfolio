import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ffmpeg = path.resolve('node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe');
const srcDir = 'D:/work/Prince Singh Creates/Portfolio/Social Media';

for (let i = 1; i <= 6; i++) {
  const p = path.join(srcDir, `${i}.png`);
  try {
    execSync(`"${ffmpeg}" -i "${p}"`, { stdio: 'pipe' });
  } catch (err) {
    const text = err.stderr ? err.stderr.toString() : '';
    const match = text.match(/Video: (.*)/);
    console.log(`${i}.png:`, match ? match[1] : 'not found');
  }
}
