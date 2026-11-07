import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ffmpeg = path.resolve('node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe');

const videos = [
  'public/assets/portfolio/reels/reel-showcase-1.mp4',
  'public/assets/portfolio/reels/reel-showcase-2.mp4'
];

for (const relPath of videos) {
  const fullPath = path.resolve(relPath);
  const tempPath = path.resolve(relPath.replace('.mp4', '_trimmed.mp4'));
  const backupPath = path.resolve(relPath.replace('.mp4', '_original_backup.mp4'));

  console.log(`Processing ${relPath}...`);
  if (!fs.existsSync(backupPath)) {
    console.log(`Backing up original to ${backupPath}...`);
    fs.copyFileSync(fullPath, backupPath);
  }

  // Cut starting 4 seconds: -ss 4.0 -i input -c copy output
  // Using re-encode with high quality CRF 20 and aac audio to ensure frame-accurate cut at 4.0 seconds without keyframe black frames
  const cmd = `"${ffmpeg}" -y -ss 4.0 -i "${backupPath}" -c:v libx264 -preset fast -crf 20 -c:a aac -b:a 192k -movflags +faststart "${tempPath}"`;
  console.log('Running trim command...');
  execSync(cmd, { stdio: 'inherit' });

  // Replace original with trimmed version
  fs.copyFileSync(tempPath, fullPath);
  fs.unlinkSync(tempPath);
  console.log(`Successfully trimmed starting 4 seconds for ${relPath}!`);
}
console.log('All reels trimmed.');
