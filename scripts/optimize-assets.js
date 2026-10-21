import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

const ffmpegPath = ffmpegInstaller.path;
const assetsDir = path.resolve('public/assets');

console.log('🚀 Starting Asset Optimization Engine...');
console.log('FFmpeg binary:', ffmpegPath);
console.log('Target assets directory:', assetsDir);

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

const allFiles = getAllFiles(assetsDir);
let totalBytesSaved = 0;
let filesOptimized = 0;

for (const filePath of allFiles) {
  const ext = path.extname(filePath).toLowerCase();
  
  // Skip non-raster or non-image files
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    continue;
  }

  const stat = fs.statSync(filePath);
  const originalSize = stat.size;

  // Only optimize files larger than 250 KB
  if (originalSize < 250 * 1024) {
    continue;
  }

  const tempOut = filePath + '.tmp' + ext;

  try {
    // Optimization filter: scale down to max width 2560 if larger, maintain aspect ratio
    // q:v 3 gives ~88% visual quality (lossless perception, but dramatically smaller size)
    execFileSync(ffmpegPath, [
      '-i', filePath,
      '-vf', "scale='min(2560,iw)':-1",
      '-q:v', '3',
      tempOut,
      '-y'
    ], { stdio: 'ignore' });

    if (fs.existsSync(tempOut)) {
      const newSize = fs.statSync(tempOut).size;
      // If smaller and valid, replace original
      if (newSize > 0 && newSize < originalSize) {
        fs.unlinkSync(filePath);
        fs.renameSync(tempOut, filePath);
        const saved = originalSize - newSize;
        totalBytesSaved += saved;
        filesOptimized++;
        const pct = ((saved / originalSize) * 100).toFixed(1);
        console.log(`✓ ${path.relative(assetsDir, filePath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024).toFixed(0)}KB (-${pct}%)`);
      } else {
        fs.unlinkSync(tempOut);
      }
    }
  } catch (err) {
    if (fs.existsSync(tempOut)) {
      try { fs.unlinkSync(tempOut); } catch (_) {}
    }
    console.error(`Failed to optimize ${filePath}:`, err.message);
  }
}

console.log('────────────────────────────────────────');
console.log(`🎉 Optimization Complete!`);
console.log(`Files optimized: ${filesOptimized}`);
console.log(`Total bandwidth saved: ${(totalBytesSaved / 1024 / 1024).toFixed(2)} MB`);
