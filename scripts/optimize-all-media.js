import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

const ffmpegPath = ffmpegInstaller.path;
const assetsDir = path.resolve('public/assets');

console.log('⚡ Starting High-Speed Media Compression & Fast-Start Engine...');
console.log('FFmpeg:', ffmpegPath);

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
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
let totalSavedBytes = 0;
let filesCount = 0;

// 1. Optimize Video Files (.mp4)
for (const filePath of allFiles) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext !== '.mp4') continue;

  const stat = fs.statSync(filePath);
  const size = stat.size;

  // Only compress videos > 5 MB
  if (size < 5 * 1024 * 1024) continue;

  const relPath = path.relative(assetsDir, filePath);
  console.log(`\n🎬 Optimizing Video: ${relPath} (${(size / (1024 * 1024)).toFixed(1)} MB)...`);

  const tempOut = filePath + '.opt.mp4';

  try {
    // Web optimization with faststart MOOV atom & CRF 25
    execFileSync(ffmpegPath, [
      '-i', filePath,
      '-c:v', 'libx264',
      '-crf', '25',
      '-preset', 'faster',
      '-vf', "scale='min(1280,iw)':-2",
      '-c:a', 'aac',
      '-b:a', '96k',
      '-movflags', '+faststart',
      tempOut,
      '-y'
    ], { stdio: 'ignore' });

    if (fs.existsSync(tempOut)) {
      const newSize = fs.statSync(tempOut).size;
      if (newSize < size) {
        fs.unlinkSync(filePath);
        fs.renameSync(tempOut, filePath);
        const saved = size - newSize;
        totalSavedBytes += saved;
        filesCount++;
        console.log(`   ✓ ${(size / (1024 * 1024)).toFixed(1)} MB -> ${(newSize / (1024 * 1024)).toFixed(1)} MB (Saved ${(saved / (1024 * 1024)).toFixed(1)} MB / ${Math.round((saved / size) * 100)}%)`);
      } else {
        fs.unlinkSync(tempOut);
        console.log('   ℹ Already optimal size');
      }
    }
  } catch (err) {
    console.error(`   ✗ Error optimizing ${relPath}:`, err.message);
    if (fs.existsSync(tempOut)) fs.unlinkSync(tempOut);
  }
}

// 2. Optimize Large Images (.png / .jpg > 2MB)
for (const filePath of allFiles) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

  const stat = fs.statSync(filePath);
  const size = stat.size;

  // Only compress images > 2 MB
  if (size < 2 * 1024 * 1024) continue;

  const relPath = path.relative(assetsDir, filePath);
  console.log(`\n🖼️ Optimizing Image: ${relPath} (${(size / (1024 * 1024)).toFixed(1)} MB)...`);

  const tempOut = filePath + '.opt' + ext;

  try {
    execFileSync(ffmpegPath, [
      '-i', filePath,
      '-vf', "scale='min(2048,iw)':-1",
      '-q:v', '3',
      tempOut,
      '-y'
    ], { stdio: 'ignore' });

    if (fs.existsSync(tempOut)) {
      const newSize = fs.statSync(tempOut).size;
      if (newSize < size) {
        fs.unlinkSync(filePath);
        fs.renameSync(tempOut, filePath);
        const saved = size - newSize;
        totalSavedBytes += saved;
        filesCount++;
        console.log(`   ✓ ${(size / (1024 * 1024)).toFixed(1)} MB -> ${(newSize / (1024 * 1024)).toFixed(1)} MB (Saved ${(saved / (1024 * 1024)).toFixed(1)} MB / ${Math.round((saved / size) * 100)}%)`);
      } else {
        fs.unlinkSync(tempOut);
        console.log('   ℹ Already optimal size');
      }
    }
  } catch (err) {
    console.error(`   ✗ Error optimizing ${relPath}:`, err.message);
    if (fs.existsSync(tempOut)) fs.unlinkSync(tempOut);
  }
}

console.log(`\n==============================================`);
console.log(`🎉 Optimization Complete!`);
console.log(`Total Media Assets Compressed: ${filesCount}`);
console.log(`Total Bandwidth Saved: ${(totalSavedBytes / (1024 * 1024)).toFixed(1)} MB`);
console.log(`==============================================\n`);
