import fs from 'fs';

const text = fs.readFileSync('scripts/harron_rest.txt', 'utf8');

// Find all matches for children:
const matches = [];
const regex = /children:(?:"([^"]+)"|`([^`]+)`|\(([^)]+)\)|\[([^\]]+)\])/g;
let m;
while ((m = regex.exec(text)) !== null && matches.length < 150) {
  const val = m[1] || m[2] || m[3] || m[4];
  if (val && !val.includes('function') && val.length > 3 && val.length < 80) {
    matches.push(val.trim());
  }
}

console.log('Matches found:', matches.length);
console.log([...new Set(matches)].slice(0, 80));
