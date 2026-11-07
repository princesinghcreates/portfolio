import path from 'path';
import { execSync } from 'child_process';

const ffmpeg = path.resolve('node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe');

// Extract at timestamp 2.0s of trimmed video
execSync(`"${ffmpeg}" -y -ss 00:00:02.00 -i "public/assets/portfolio/reels/reel-showcase-1.mp4" -vframes 1 -q:v 2 "public/assets/portfolio/thumbnails/thumb-reel-showcase-1.jpg"`, { stdio: 'inherit' });
execSync(`"${ffmpeg}" -y -ss 00:00:02.00 -i "public/assets/portfolio/reels/reel-showcase-2.mp4" -vframes 1 -q:v 2 "public/assets/portfolio/thumbnails/thumb-reel-showcase-2.jpg"`, { stdio: 'inherit' });
console.log('Thumbnails extracted successfully!');
