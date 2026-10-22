import fs from 'fs';
import path from 'path';

let missingCount = 0;

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = content.matchAll(/['"](\/assets\/[^'"]+)['"]/g);
  for (const match of matches) {
    const assetRel = match[1];
    // skip query or hash
    const cleanAsset = assetRel.split('?')[0].split('#')[0];
    const fullPath = path.resolve('public', cleanAsset.slice(1));
    if (!fs.existsSync(fullPath)) {
      console.log(`[MISSING] in ${path.relative('.', filePath)} -> ${cleanAsset}`);
      missingCount++;
    }
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.jsx') || p.endsWith('.js')) {
      checkFile(p);
    }
  }
}

walk('src');
console.log(`\nScan complete. Total missing assets: ${missingCount}`);
