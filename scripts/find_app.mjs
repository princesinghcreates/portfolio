import fs from 'fs';

async function findApp() {
  const res = await fetch('https://harronsdigital.com/assets/index-C9QLv3uE.js');
  const js = await res.text();
  console.log('Total length:', js.length);

  // Search for 'id:`hero`' or 'id:`practice`'
  const heroIdx = js.indexOf('id:`hero`');
  console.log('id:`hero` index:', heroIdx);

  if (heroIdx !== -1) {
    const start = Math.max(0, heroIdx - 20000);
    const end = Math.min(js.length, heroIdx + 120000);
    fs.writeFileSync('scripts/harron_real_app.txt', js.slice(start, end), 'utf8');
    console.log(`Saved slice from ${start} to ${end} (${(end - start) / 1024} KB)`);
  }
}

findApp().catch(console.error);
