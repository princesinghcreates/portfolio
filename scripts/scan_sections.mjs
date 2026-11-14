import fs from 'fs';

async function scanAllSections() {
  const res = await fetch('https://harronsdigital.com/assets/index-C9QLv3uE.js');
  const js = await res.text();

  // Find all sections by matching <section or id=`...`
  const sectionIds = [...new Set(js.match(/id:`([^`]+)`/g) || [])];
  console.log('Section IDs:', sectionIds);

  // Let's search for React components in the application:
  // usually function ComponentName(...) or const ComponentName = ...
  const components = [...new Set(js.match(/function\s+([A-Z][A-Za-z0-9]+)\s*\(/g) || [])];
  console.log('Component functions:', components);

  // Let's dump from 400000 to 700000 to see the rest of the site:
  fs.writeFileSync('scripts/harron_rest.txt', js.slice(400000, 750000), 'utf8');
  console.log('Saved 350KB slice to scripts/harron_rest.txt');
}

scanAllSections().catch(console.error);
