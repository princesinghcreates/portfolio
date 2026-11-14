import fs from 'fs';

const text = fs.readFileSync('scripts/harron_real_app.txt', 'utf8');

// Find all classNames used in the real app:
const classNames = [...new Set(text.match(/className:[`"']([^`"']+)`|className:\s*`([^`]+)`/g) || [])];
console.log('ClassNames:');
console.log(classNames.slice(0, 50));

// Find all text fragments:
const textSnippets = [...new Set(text.match(/>([^<>{}\n]{3,80})</g) || [])].map(t => t.replace(/[><]/g, '').trim());
console.log('\nText snippets:');
console.log(textSnippets);
