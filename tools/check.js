/* Kontrola banky otázek: node tools/check.js
   Ověří klíče odpovědí, typy otázek, obrázky, podíl chybných možností,
   pokrytí stran i témat Daniných skript. */
const path = require('path');
global.window = {};
const dir = path.join(__dirname, '..', 'app');
for (const f of ['figs', 'bank1', 'bank2', 'bank3', 'bank4', 'bank5', 'revize', 'recall', 'coverage']) require(path.join(dir, f + '.js'));

const REV = window.QREV, FIG = window.FIG, RC = window.RC, COVERAGE = window.COVERAGE;
const QB = window.QB.map(raw => {
  const q = Object.assign({}, raw, REV.set[raw.id] || {});
  if (REV.add[q.id]) q.o = q.o.concat(REV.add[q.id]);
  q.t = q.t || 'mc';
  if (q.t === 'tf') { q.o = ['Pravda', 'Mýtus']; q.a = [q.v ? 0 : 1]; q.m = false; }
  return q;
});

const cats = ['zakon', 'povinnosti', 'hygiena', 'lekarna', 'nemoci', 'zaklady', 'rany', 'kosti', 'stavy', 'prostredi', 'voda', 'kpr'];
const errs = [], warns = [], ids = new Set(), byType = {}, byCat = {}, pages = {};

for (const id of [...Object.keys(REV.set), ...Object.keys(REV.add)]) if (!window.QB.some(q => q.id === id)) errs.push('revize míří na neexistující otázku ' + id);

for (const q of QB) {
  if (ids.has(q.id)) errs.push('duplicitní id ' + q.id);
  ids.add(q.id);
  if (!cats.includes(q.c)) errs.push('neznámý okruh ' + q.id);
  if (!q.why || !q.src) errs.push('chybí vysvětlení nebo zdroj ' + q.id);
  byType[q.t] = (byType[q.t] || 0) + 1;
  byCat[q.c] = (byCat[q.c] || 0) + 1;
  for (const k of [q.fig, q.img, ...(q.ofig || [])]) if (k && !FIG[k]) errs.push('chybí obrázek ' + k + ' u ' + q.id);

  if (q.t === 'mc' || q.t === 'tf') {
    if (typeof q.v !== 'undefined' && typeof q.v !== 'boolean') errs.push('tf bez v ' + q.id);
    if (!Array.isArray(q.a) || !q.a.length) errs.push('bez odpovědi ' + q.id);
    for (const i of q.a) if (i < 0 || i >= q.o.length) errs.push('odpověď mimo rozsah ' + q.id);
    if (!q.m && q.a.length !== 1) errs.push('jednoduchá otázka s více odpověďmi ' + q.id);
    if (q.m && q.a.length < 2) errs.push('multi s méně než 2 správnými ' + q.id);
    if (new Set(q.o).size !== q.o.length) errs.push('duplicitní možnost ' + q.id);
    if (q.ofig && q.ofig.length !== q.o.length) errs.push('ofig nesedí s o ' + q.id);
    if (q.m && q.o.length - q.a.length < 3) warns.push(`málo chybných možností ${q.id} (${q.a.length} správně / ${q.o.length - q.a.length} chybně)`);
  } else if (q.t === 'order') {
    if (!Array.isArray(q.items) || q.items.length < 3) errs.push('seřazení s méně než 3 kroky ' + q.id);
    if (new Set(q.items).size !== q.items.length) errs.push('duplicitní krok ' + q.id);
  } else if (q.t === 'match') {
    if (!Array.isArray(q.pairs) || q.pairs.length < 3) errs.push('přiřazení s méně než 3 dvojicemi ' + q.id);
    if (new Set(q.pairs.map(p => p[0])).size !== q.pairs.length) errs.push('duplicitní levá strana ' + q.id);
    for (const x of q.extra || []) if (q.pairs.some(p => p[1] === x)) errs.push('extra je zároveň správně ' + q.id);
  } else errs.push('neznámý typ ' + q.t + ' u ' + q.id);

  for (const seg of String(q.src).split('·')) {
    const m = seg.match(/skripta s\.\s*(.*)$/i);
    if (!m) continue;
    for (const r of m[1].matchAll(/(\d+)(?:\s*[–-]\s*(\d+))?/g)) {
      const a = +r[1], b = r[2] ? +r[2] : a;
      for (let p = a; p <= b; p++) pages[p] = (pages[p] || 0) + 1;
    }
  }
}
for (const r of RC) { if (ids.has(r.id)) errs.push('duplicitní id kartičky ' + r.id); ids.add(r.id); }

// Pokrytí témat: text všech otázek (jen správné odpovědi a vysvětlení) a kartiček
const corpus = [
  ...QB.map(q => [q.q, q.why, q.note, q.alt && q.alt.x, ...(q.a || []).map(i => q.o[i]), ...(q.items || []), ...(q.pairs || []).flat()].filter(Boolean).join(' ')),
  ...RC.map(r => [r.q, ...r.a].join(' '))
].join('\n');
const uncovered = COVERAGE.filter(t => !new RegExp(t.k, 'i').test(corpus));

const missingPages = [];
for (let p = 3; p <= 36; p++) if (!pages[p]) missingPages.push(p);

console.log(`Otázek ${QB.length} · typy ${JSON.stringify(byType)} · kartiček ${RC.length} · obrázků ${Object.keys(FIG).length}`);
console.log(`Okruhy ${JSON.stringify(byCat)}`);
console.log(`Témat ze skript ${COVERAGE.length} · nepokryto ${uncovered.length}${uncovered.length ? ':\n  ' + uncovered.map(t => `s. ${t.p} ${t.h}`).join('\n  ') : ''}`);
console.log(`Strany bez otázek: ${missingPages.join(', ') || 'žádné'}`);
console.log(`Varování: ${warns.length ? '\n  ' + warns.join('\n  ') : 'žádná'}`);
console.log(`Chyby: ${errs.length ? '\n  ' + errs.join('\n  ') : 'žádné'}`);
process.exit(errs.length || uncovered.length || missingPages.length ? 1 : 0);
