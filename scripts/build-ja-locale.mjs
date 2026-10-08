/**
 * Generates src/sidepanel/i18nJa.generated.js from scripts/ja-key-map.json
 * Run: node scripts/build-ja-locale.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { I18N } from '../src/sidepanel/i18n.js';

const root = dirname(fileURLToPath(import.meta.url));
const map = JSON.parse(readFileSync(join(root, 'ja-key-map.json'), 'utf8'));

/** @param {string} key @param {unknown} enVal */
function resolveJa(key, enVal) {
  if (Object.prototype.hasOwnProperty.call(map, key)) return map[key];
  if (Array.isArray(enVal)) {
    return enVal.map((line, i) => map[`${key}[${i}]`] ?? map[line] ?? line);
  }
  if (typeof enVal === 'string' && map[enVal]) return map[enVal];
  return enVal;
}

const ja = {};
for (const key of Object.keys(I18N.en)) {
  ja[key] = resolveJa(key, I18N.en[key]);
}

const out = join(root, '../src/sidepanel/i18nJa.generated.js');
writeFileSync(
  out,
  `/** Auto-generated — node scripts/build-ja-locale.mjs */\nexport const I18N_JA = ${JSON.stringify(ja, null, 2)};\n`
);
console.log('Wrote', out, Object.keys(ja).length, 'keys');
