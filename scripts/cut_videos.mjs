import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ffmpeg = path.resolve('node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe');

const tasks = [
  {
    name: 'reel-showcase-1',
    src: path.resolve('public/assets/portfolio/reels/reel-showcase-1.mp4'),
    tmp: path.resolve('public/assets/portfolio/reels/reel-showcase-1.trimmed.mp4'),
    thumb: path.resolve('public/assets/portfolio/thumbnails/thumb-reel-showcase-1.jpg')
  },
  {
    name: 'reel-showcase-2',
    src: path.resolve('public/assets/portfolio/reels/reel-showcase-2.mp4'),
    tmp: path.resolve('public/assets/portfolio/reels/reel-showcase-2.trimmed.mp4'),
    thumb: path.resolve('public/assets/portfolio/thumbnails/thumb-reel-showcase-2.jpg')
  }
];

for (const task of tasks) {
  const backup = task.src.replace('.mp4', '.backup.mp4');
  if (!fs.existsSync(backup)) {
    fs.copyFileSync(task.src, backup);
    console.log(`Created backup at ${backup}`);
  }

  console.log(`\nTrimming 4 seconds from ${task.name}...`);
  // Cut starting 4 seconds, encode with H.264 high quality, faststart for instant web play
  execSync(`"${ffmpeg}" -y -ss 4.0 -i "${backup}" -c:v libx264 -preset slow -crf 20 -c:a aac -b:a 128k -movflags +faststart "${task.tmp}"`, { stdio: 'inherit' });
  
  // Replace original with trimmed
  fs.copyFileSync(task.tmp, task.src);
  fs.unlinkSync(task.tmp);
  console.log(`Successfully trimmed and replaced ${task.name}`);

  // Generate an eye-catching thumbnail at 1.5s into the new trimmed video
  execSync(`"${ffmpeg}" -y -ss 1.5 -i "${task.src}" -vframes 1 -q:v 2 "${task.thumb}"`, { stdio: 'inherit' });
  console.log(`Generated thumbnail for ${task.name}`);
}

console.log('\nAll trims completed!');
