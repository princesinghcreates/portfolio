import fs from 'fs';

async function analyze() {
  const res = await fetch('https://harronsdigital.com/assets/index-C9QLv3uE.js');
  const js = await res.text();
  console.log('Extracting site source code from bundle...');
  // The site application code is around index 360000+
  const appSlice = js.slice(360000, 480000);
  fs.writeFileSync('scripts/harron_app_dump.txt', appSlice, 'utf8');
  console.log('Saved 120KB application dump to scripts/harron_app_dump.txt');
}

analyze().catch(console.error);
