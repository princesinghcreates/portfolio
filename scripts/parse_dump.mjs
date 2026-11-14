import fs from 'fs';

const text = fs.readFileSync('scripts/harron_app_dump.txt', 'utf8');

// Find all classNames used in the site!
const classNames = [...new Set(text.match(/className:`([^`]+)`/g) || [])].map(c => c.replace(/className:`|`/g, ''));
console.log('ClassNames used in Harron:');
console.log(classNames);

// Find all text contents:
const texts = [...new Set(text.match(/children:`([^`]{3,120})`/g) || [])].map(t => t.replace(/children:`|`/g, ''));
console.log('\n--- Text Contents in Harron ---');
console.log(texts);
