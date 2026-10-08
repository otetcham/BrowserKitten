import { readFileSync, writeFileSync } from 'fs';

const path = 'src/sidepanel.js';
let s = readFileSync(path, 'utf8');
const before = s;
// Simple quoted-string ternaries only
s = s.replace(/currentLang === 'en' \? ('(?:\\'|[^'])*') : ('(?:\\'|[^'])*')/g, 'uiText(currentLang, $1, $2)');
s = s.replace(/currentLang === 'en' \? ("(?:\\"|[^"])*") : ("(?:\\"|[^"])*")/g, 'uiText(currentLang, $1, $2)');
if (s !== before) {
  writeFileSync(path, s);
  console.log('Patched sidepanel.js');
} else {
  console.log('No changes');
}
