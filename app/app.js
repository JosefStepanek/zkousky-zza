(() => {
'use strict';

/* ════════════════════════ Data ════════════════════════ */
const REV = window.QREV || { set: {}, add: {} };
function prep(raw) {
  const q = Object.assign({}, raw, (REV.set || {})[raw.id] || {});
  const extra = (REV.add || {})[q.id];
  if (extra && q.o) q.o = q.o.concat(extra);
  q.t = q.t || 'mc';
  if (q.t === 'tf') { q.o = ['Pravda', 'Mýtus']; q.a = [q.v ? 0 : 1]; q.m = false; q.keep = true; }
  q.q = q.q.replace(/\s*\(více odpovědí[^)]*\)/, '');
  return q;
}
const QB = (window.QB || []).map(prep);
const RC = window.RC || [];
const FIG = window.FIG || {};
const COVERAGE = window.COVERAGE || [];
const LET = 'ABCDEFGHIJKL';

const EXAM_N = 40;
const PASS_N = Math.ceil(EXAM_N * 0.82);          // 33
const DAILY_N = 20, SHORT_N = 10, MYTH_N = 15, PIC_N = 10, MIX_N = 10, RECALL_N = 12;

const isChoice = q => q.t === 'mc' || q.t === 'tf';
const hasPic = q => !!(q.fig || q.ofig);

const CATS = [
  { k: 'zakon',      n: 'Zákony a vyhláška',            p: 's. 3–4' },
  { k: 'povinnosti', n: 'Zdravotník a dokumentace',     p: 's. 5–6' },
  { k: 'lekarna',    n: 'Lékárnička a léky',            p: 's. 6, 10' },
  { k: 'hygiena',    n: 'Hygiena a epidemiologie',      p: 's. 7–9' },
  { k: 'zaklady',    n: 'Základy první pomoci',         p: 's. 11–13' },
  { k: 'rany',       n: 'Rány, krvácení, obvazy',       p: 's. 13–18' },
  { k: 'kosti',      n: 'Úrazy, břicho, hlava, páteř',  p: 's. 18–22, 27–28, 32–33' },
  { k: 'stavy',      n: 'Náhlé stavy a šok',            p: 's. 22–27' },
  { k: 'prostredi',  n: 'Teplo, chlad, otravy',         p: 's. 28–31' },
  { k: 'voda',       n: 'Tonutí a záchrana',            p: 's. 31–32' },
  { k: 'kpr',        n: 'Resuscitace',                  p: 's. 34–36' },
  { k: 'nemoci',     n: 'Táborové nemoci',              p: 's. 20 + ČČK Praha 1' }
];
const CAT = Object.fromEntries(CATS.map(c => [c.k, c]));

const PAGES = {
  3: 'Zákon § 8–10', 4: '§ 11, vyhláška', 5: 'Deník, povinnosti', 6: 'Lékárnička, etika',
  7: 'Hygiena, dozor', 8: 'Výživa, režim', 9: 'Infekce, dezinfekce', 10: 'Farmakologie',
  11: 'První pomoc, IZS', 12: 'Postup, vyšetření', 13: 'Triage, rány', 14: 'Ošetření ran',
  15: 'Krvácení', 16: 'Krvácení z otvorů', 17: 'Obvazy', 18: 'Šlachy, klouby',
  19: 'Zlomeniny', 20: 'Ztráty, břicho', 21: 'Příhody břišní', 22: 'Ileus, infarkt',
  23: 'Dušení, astma, CMP', 24: 'Křeče', 25: 'Cukrovka, alergie', 26: 'Bezvědomí, šok',
  27: '5T, hrudník', 28: 'Aorta, teplo, chlad', 29: 'Proud, popáleniny', 30: 'Otravy',
  31: 'Houby, tonutí', 32: 'Záchrana, hlava', 33: 'Páteř, transport', 34: 'KPR dospělý',
  35: 'KPR děti', 36: 'Chyby, polohy'
};
const TOPICS_BY_PAGE = {};
for (const t of COVERAGE) (TOPICS_BY_PAGE[t.p] = TOPICS_BY_PAGE[t.p] || []).push(t.h);

/* ════════════════════════ Pomocníci ════════════════════════ */
const $app = document.getElementById('app');
const live = document.createElement('div');
live.setAttribute('aria-live', 'polite');
live.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)';
document.body.appendChild(live);
const announce = t => { live.textContent = ''; setTimeout(() => { live.textContent = t; }, 30); };
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const sameSet = (a, b) => a.length === b.length && a.every(x => b.includes(x));
const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
const plural = (n, one, few, many) => n === 1 ? one : (n >= 2 && n <= 4 ? few : many);
const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* ignorovat */ } };

function relTime(ts) {
  const m = Math.round((Date.now() - ts) / 60000);
  if (m < 1) return 'právě teď';
  if (m < 60) return `před ${m} min`;
  const h = Math.round(m / 60);
  if (h < 24) return `před ${h} h`;
  const d = Math.round(h / 24);
  return d === 1 ? 'včera' : `před ${d} dny`;
}

function pagesOf(src) {
  const out = [];
  for (const seg of String(src || '').split('·')) {
    const m = seg.match(/skripta s\.\s*(.*)$/i);
    if (!m) continue;
    for (const r of m[1].matchAll(/(\d+)(?:\s*[–-]\s*(\d+))?/g)) {
      const a = +r[1], b = r[2] ? +r[2] : a;
      for (let p = a; p <= b; p++) out.push(p);
    }
  }
  return out;
}

let toastTimer;
function toast(msg) {
  let el = document.querySelector('.toast');
  if (!el) { el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
  el.textContent = msg; el.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.hidden = true; }, 2600);
}

function figInner(key) {
  const f = FIG[key];
  if (!f) return '';
  return f.photo ? `<img src="${esc(f.photo)}" alt="${esc(f.alt)}" loading="lazy" decoding="async">` : f.svg;
}
function figBlock(key, cap) {
  const f = FIG[key];
  if (!f) return '';
  const c = cap || f.credit;
  return `<figure class="figure">${figInner(key)}${c ? `<figcaption class="credit">${esc(c)}</figcaption>` : ''}</figure>`;
}

/* ════════════════════════ Stav a ukládání ════════════════════════
   S.q / S.r — záznam na otázku / kartičku: b = Leitnerova přihrádka (0 nové, 1 chyba,
   2 rozpracované, 3–5 naučené), n = pokusů, k = správně, t = poslední pokus.
   Ukládá se jen do localStorage tohoto prohlížeče — žádný server ani databáze. */
const LS_KEY = 'zza-trenazer-v1';
const blank = () => ({ v: 1, q: {}, r: {}, exams: [] });
function readLocal() {
  try {
    const s = JSON.parse(localStorage.getItem(LS_KEY));
    if (s && s.v === 1) return Object.assign(blank(), s);
  } catch (e) { /* soukromé okno, zablokované úložiště */ }
  return blank();
}
let S = readLocal();
const save = () => lsSet(LS_KEY, JSON.stringify(S));

/* ════════════════════════ Opakování s rozestupy ════════════════════════ */
const H = 3600e3;
const INTERVAL = [0, 0, 8 * H, 24 * H, 48 * H, 96 * H];
const boxOf = (store, id) => (S[store][id] && S[store][id].b) || 0;
const isDue = (store, id, now = Date.now()) => { const r = S[store][id]; return !!(r && r.b && now - r.t >= INTERVAL[r.b]); };

function gradeItem(store, id, result) {           // 'ok' | 'half' | 'bad'
  const r = Object.assign({ b: 0, n: 0, k: 0, t: 0 }, S[store][id]);
  r.n++;
  if (result === 'ok') { r.k++; r.b = Math.min(5, Math.max(2, r.b + 1)); }
  else if (result === 'half') r.b = 2;
  else r.b = 1;
  r.t = Date.now();
  S[store][id] = r;
}

function catStats(k) {
  const qs = QB.filter(q => q.c === k);
  const boxes = qs.map(q => boxOf('q', q.id)).sort((a, b) => b - a);
  return { total: qs.length, known: boxes.filter(b => b >= 3).length, boxes };
}

function roundRobin(list) {
  const by = {};
  for (const x of shuffle(list)) (by[x.c] = by[x.c] || []).push(x);
  const lanes = CATS.map(c => by[c.k] || []);
  const out = [];
  for (let added = true; added;) {
    added = false;
    for (const l of lanes) if (l.length) { out.push(l.shift()); added = true; }
  }
  return out;
}

// Zkouška: jen otázky s výběrem, poměr okruhů jako ve skriptech
function pickExam() {
  const pool = QB.filter(isChoice);
  const alloc = CATS.map(c => {
    const qs = shuffle(pool.filter(q => q.c === c.k));
    const exact = qs.length * EXAM_N / pool.length;
    return { qs, n: Math.floor(exact), rem: exact % 1 };
  });
  let left = EXAM_N - alloc.reduce((s, a) => s + a.n, 0);
  [...alloc].sort((a, b) => b.rem - a.rem).forEach(a => { if (left > 0) { a.n++; left--; } });
  return shuffle(alloc.flatMap(a => a.qs.slice(0, a.n)));
}

function pickSpaced(store, pool, n) {
  const now = Date.now();
  const rec = id => S[store][id];
  const due = pool.filter(x => isDue(store, x.id, now)).sort((a, b) => rec(a.id).b - rec(b.id).b || rec(a.id).t - rec(b.id).t);
  let out = due.slice(0, n);
  if (out.length < n) out = out.concat(roundRobin(pool.filter(x => !boxOf(store, x.id))).slice(0, n - out.length));
  if (out.length < n) {
    const taken = new Set(out.map(x => x.id));
    const rest = pool.filter(x => !taken.has(x.id)).sort((a, b) => rec(a.id).b - rec(b.id).b || rec(a.id).t - rec(b.id).t);
    out = out.concat(rest.slice(0, n - out.length));
  }
  return shuffle(out);
}

function pickWeakFirst(qs) {
  const rank = q => { const b = boxOf('q', q.id); return b === 1 ? 0 : b === 0 ? 1 : b; };
  return shuffle(qs).sort((a, b) => rank(a) - rank(b));
}

/* ════════════════════════ Položka kvízu ════════════════════════ */
function makeItem(q) {
  const it = { q, done: false, ok: null };
  if (q.t === 'order') {
    it.pool = shuffle(q.items.map((_, i) => i));
    if (it.pool.every((v, i) => v === i)) it.pool.reverse();
    it.seq = [];
  } else if (q.t === 'match') {
    it.rights = shuffle([...new Set(q.pairs.map(p => p[1]).concat(q.extra || []))]);
    it.picks = q.pairs.map(() => '');
  } else {
    let idx = q.o.map((_, i) => i);
    if (q.m) {
      // Ukázat jen část správných, ať správné tvoří zhruba polovinu možností.
      const right = shuffle(q.a), wrong = shuffle(idx.filter(i => !q.a.includes(i)));
      const C = right.length, D = wrong.length;
      const lo = Math.max(1, Math.min(C, D - 1)), hi = Math.max(lo, Math.min(C, D + 1));
      const nC = lo + Math.floor(Math.random() * (hi - lo + 1));
      const nD = Math.max(Math.min(D, 3), Math.min(D, 8 - nC));
      idx = right.slice(0, nC).concat(wrong.slice(0, nD));
    }
    it.perm = q.keep ? idx : shuffle(idx);
    it.key = q.a.filter(i => it.perm.includes(i));
    it.sel = [];
  }
  return it;
}
const answered = it => it.q.t === 'order' ? it.seq.length > 0 : it.q.t === 'match' ? it.picks.some(Boolean) : it.sel.length > 0;
const complete = it => it.q.t === 'order' ? it.seq.length === it.q.items.length : it.q.t === 'match' ? it.picks.every(Boolean) : it.sel.length > 0;
const isCorrect = it => it.q.t === 'order'
  ? it.seq.length === it.q.items.length && it.seq.every((v, i) => v === i)
  : it.q.t === 'match' ? it.q.pairs.every((p, i) => it.picks[i] === p[1]) : sameSet(it.sel, it.key);

/* ════════════════════════ Instalace na plochu ════════════════════════ */
let installPrompt = null;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installPrompt = e; if (V.screen === 'home') render(); });
window.addEventListener('appinstalled', () => { installPrompt = null; if (V.screen === 'home') render(); });
const standalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

function installBlock() {
  if (standalone() || lsGet('zza-install-hidden')) return '';
  const how = installPrompt
    ? '<button class="btn btn-primary" data-act="install">Nainstalovat aplikaci</button>'
    : isIOS
      ? '<p>V Safari klepni dole na <b>Sdílet</b> (čtverec se šipkou nahoru) a zvol <b>Přidat na plochu</b>.</p>'
      : '<p>V menu prohlížeče (⋮) zvol <b>Přidat na plochu</b> nebo <b>Instalovat aplikaci</b>.</p>';
  return `<aside class="install" aria-label="Přidat na plochu">
    <div>
      <strong>Přidej si Zkoušky ZZA na plochu</strong>
      ${how}
      <p class="muted">Pak se otevírá jako aplikace a funguje i bez signálu.${isIOS ? ' Na iPhonu má aplikace na ploše vlastní úložiště postupu, oddělené od Safari — přidej ji proto hned na začátku.' : ''}</p>
    </div>
    <button class="btn btn-ghost" data-act="hideInstall" aria-label="Skrýt nabídku instalace">✕</button>
  </aside>`;
}

/* ════════════════════════ Obrazovky ════════════════════════ */
let V = { screen: 'home' };
const cur = () => V.items[V.i];
const toTop = () => window.scrollTo({ top: 0, behavior: 'auto' });

function render() {
  $app.innerHTML =
    V.screen === 'quiz' ? viewQuiz() :
    V.screen === 'result' ? viewResult() :
    V.screen === 'summary' ? viewSummary() :
    V.screen === 'recall' ? viewRecall() :
    V.screen === 'recallDone' ? viewRecallDone() :
    V.screen === 'disputes' ? viewDisputes() :
    viewHome();
}

const CROSS = `<svg class="cross" viewBox="0 0 26 26" aria-hidden="true"><rect width="26" height="26" rx="5" style="fill:var(--ok)"/><path d="M10.5 5h5v5.5H21v5h-5.5V21h-5v-5.5H5v-5h5.5z" style="fill:var(--surface)"/></svg>`;

/* ── Domov ── */
function viewHome() {
  const total = QB.length;
  const known = QB.filter(q => boxOf('q', q.id) >= 3).length;
  const readyPct = pct(known, total);
  const now = Date.now();
  const dueQ = QB.filter(q => isDue('q', q.id, now)).length;
  const newQ = QB.filter(q => !boxOf('q', q.id)).length;
  const wrongQ = QB.filter(q => boxOf('q', q.id) === 1).length;
  const dueR = RC.filter(r => isDue('r', r.id, now) || !boxOf('r', r.id)).length;
  const nMyth = QB.filter(q => q.t === 'tf').length;
  const nPic = QB.filter(hasPic).length;
  const nMix = QB.filter(q => q.t === 'order' || q.t === 'match').length;
  const nDisp = QB.filter(q => q.alt).length;
  const last = S.exams[S.exams.length - 1];

  const lastLine = last
    ? `Poslední pokus ${relTime(last.ts)}: <strong>${last.ok}/${last.n}</strong> (${pct(last.ok, last.n)} %) — ${last.ok >= PASS_N ? 'nad hranicí' : `chybělo ${PASS_N - last.ok} ${plural(PASS_N - last.ok, 'otázka', 'otázky', 'otázek')}`}. Pokusů celkem: ${S.exams.length}.`
    : 'Zatím žádný pokus. Udělej první zkoušku hned na začátku — ukáže, kde začít, a samotné zkoušení už učí.';

  const pageCount = {};
  for (const q of QB) for (const p of new Set(pagesOf(q.src))) pageCount[p] = (pageCount[p] || 0) + 1;
  const pageNums = Object.keys(PAGES).map(Number);

  return `
<header class="top">
  <div class="brand">${CROSS}<div><div class="brand-name">Zkoušky ZZA</div><div class="brand-sub">Zdravotník zotavovacích akcí</div></div></div>
</header>

<div class="home">
  <section class="exam-card" aria-labelledby="exam-h">
    <div>
      <div class="eyebrow">Zkouška nanečisto</div>
      <h1 id="exam-h">40 otázek napříč celými skripty</h1>
    </div>
    <div class="exam-facts">
      <div class="fact"><b>${EXAM_N}</b><span>otázek</span></div>
      <div class="fact pass"><b>${PASS_N}</b><span>správně k úspěchu (82 %)</span></div>
      <div class="fact"><b>${EXAM_N - PASS_N}</b><span>chyb povoleno</span></div>
    </div>
    <p class="last-exam">${lastLine}</p>
    <button class="btn btn-primary btn-block" data-act="exam">Spustit zkoušku</button>
  </section>

  <section class="readiness" aria-labelledby="ready-h">
    <div class="readiness-head">
      <h2 id="ready-h">Připravenost</h2>
      <span class="num">${known} / ${total} · ${readyPct} %</span>
    </div>
    <div class="meter" data-pass="${readyPct >= 82 ? 1 : 0}" role="img" aria-label="Naučeno ${readyPct} procent otázek, hranice úspěchu 82 procent"><i style="width:${readyPct}%"></i><span class="tick"></span></div>
    <div class="meter-labels"><span>0 %</span><span class="t82">82 %</span><span>100 %</span></div>
    <p class="muted small">Otázka je naučená, když ji zodpovíš správně dvakrát po sobě.</p>
  </section>

  <section class="modes" aria-label="Režimy procvičování">
    <div class="mode mode-wide">
      <span class="mode-title">Dnešní opakování <span class="badge${dueQ ? ' hot' : ''}">${dueQ ? `${dueQ} k opakování` : `${newQ} nových`}</span></span>
      <span class="mode-desc">Otázky napříč okruhy. Co spleteš, vrátí se brzy; co umíš, odsune se na později. Krátké se vejde do čekání na autobus.</span>
      <div class="mode-btns">
        <button class="btn btn-primary" data-act="daily">Celé · ${DAILY_N} otázek</button>
        <button class="btn" data-act="short">Krátké · ${SHORT_N} otázek</button>
      </div>
    </div>
    <button class="mode" data-act="recall">
      <span class="mode-title">Vybav si <span class="badge">${dueR} karet</span></span>
      <span class="mode-desc">Výčty, postupy a čísla bez nabídky možností.</span>
    </button>
    <button class="mode" data-act="myths">
      <span class="mode-title">Pravda, nebo mýtus? <span class="badge">${nMyth}</span></span>
      <span class="mode-desc">Rychlé chytáky — záklon při krvácení z nosu, olej na klíště a spol.</span>
    </button>
    <button class="mode" data-act="pictures">
      <span class="mode-title">Obrázky a fotky <span class="badge">${nPic}</span></span>
      <span class="mode-desc">Polohy, místa stlačení, tonoucí, vyrážky.</span>
    </button>
    <button class="mode" data-act="orderMatch">
      <span class="mode-title">Seřaď a přiřaď <span class="badge">${nMix}</span></span>
      <span class="mode-desc">Postupy krok za krokem a dvojice čísel a pojmů.</span>
    </button>
    <button class="mode" data-act="mistakes">
      <span class="mode-title">Opravit chyby <span class="badge${wrongQ ? ' hot' : ''}">${wrongQ}</span></span>
      <span class="mode-desc">${wrongQ ? 'Jen otázky, které byly naposledy špatně.' : 'Zatím žádné chyby k opravě.'}</span>
    </button>
    <button class="mode" data-act="disputes">
      <span class="mode-title">Sporná místa <span class="badge">${nDisp}</span></span>
      <span class="mode-desc">Kde se skripta liší od ČČK nebo vyhlášky. U zkoušky platí skripta.</span>
    </button>
  </section>

  ${installBlock()}

  <section aria-labelledby="topics-h">
    <div class="section-head"><h2 id="topics-h">Okruhy</h2><span class="eyebrow">naučeno / otázek</span></div>
    <ul class="topics">
      ${CATS.map(c => {
        const st = catStats(c.k);
        return `<li><button class="topic" data-act="topic" data-k="${c.k}">
          <span><span class="topic-name">${esc(c.n)}</span><span class="topic-pages">${esc(c.p)}</span></span>
          <span class="topic-stat">${st.known}/${st.total}</span>
          <span class="boxes" aria-hidden="true">${st.boxes.map(b => `<i data-b="${b}"></i>`).join('')}</span>
        </button></li>`;
      }).join('')}
    </ul>
    <div class="legend" aria-hidden="true">
      <span style="--c:var(--sunk)">nové</span>
      <span style="--c:var(--pen);--o:.55">naposledy chyba</span>
      <span style="--c:var(--warn-rule)">rozpracované</span>
      <span style="--c:var(--ok)">naučené</span>
    </div>
  </section>

  <section aria-labelledby="cover-h">
    <div class="section-head"><h2 id="cover-h">Skripta po stranách</h2><span class="eyebrow">${COVERAGE.length} témat · s. 3–36</span></div>
    <div class="cover">
      ${pageNums.map(p => {
        const topics = TOPICS_BY_PAGE[p] || [];
        return `<button class="pg" data-act="page" data-p="${p}" title="${esc(topics.join(' · '))}">
          <b>s. ${p}</b><span>${esc(PAGES[p])}</span><em>${pageCount[p] || 0} ot. · ${topics.length} ${plural(topics.length, 'téma', 'témata', 'témat')}</em>
        </button>`;
      }).join('')}
    </div>
    <p class="cover-note">Klepnutím na stranu procvičíš jen její otázky. Každé z ${COVERAGE.length} témat skript Zdravotníci s.r.o. má v bance aspoň jednu otázku. Okruh Táborové nemoci a některé doplňky vycházejí ze skript ČČK Praha 1 a z příručky ČČK — u každé otázky je zdroj.</p>
  </section>

  <footer class="foot">
    <span>${total} otázek · ${RC.length} kartiček · zdroje: skripta Zdravotníci s.r.o., ČČK Praha 1, Příručka zdravotníka ČČK · postup se ukládá v tomto zařízení</span>
    <button data-act="reset">${V.confirmReset ? 'Opravdu smazat veškerý postup?' : 'Smazat postup'}</button>
  </footer>
</div>`;
}

/* ── Kvíz ── */
function bodyChoice(it, showRes) {
  const q = it.q;
  const cells = it.perm.map((orig, idx) => {
    const sel = it.sel.includes(orig);
    const correct = it.key.includes(orig);
    let cls = '', mark = '';
    if (showRes) {
      if (sel && correct) { cls = 'is-right'; mark = 'správně'; }
      else if (sel) { cls = 'is-wrong'; mark = 'chyba'; }
      else if (correct) { cls = 'is-missed'; mark = q.m ? 'chybělo' : 'správná'; }
    }
    if (q.ofig) {
      return `<button class="ofig ${cls}" data-act="opt" data-o="${orig}" aria-pressed="${sel}"${showRes ? ' disabled' : ''}>
        ${figInner(q.ofig[orig])}
        <span class="ofig-cap"><b class="box ${q.m ? 'check' : 'radio'}">${LET[idx]}</b>${showRes ? `<span>${esc(q.o[orig])}</span>` : ''}</span>
        ${mark ? `<span class="mark">${mark}</span>` : ''}
      </button>`;
    }
    return `<button class="opt ${cls}" data-act="opt" data-o="${orig}" aria-pressed="${sel}"${showRes ? ' disabled' : ''}>
      <span class="box ${q.m ? 'check' : 'radio'}">${LET[idx]}</span>
      <span class="txt">${esc(q.o[orig])}</span>
      ${mark ? `<span class="mark">${mark}</span>` : ''}
    </button>`;
  }).join('');
  if (q.ofig) return `<div class="ofigs" role="group" aria-label="Obrázky na výběr">${cells}</div>`;
  return `<div class="opts${q.t === 'tf' ? ' tf' : ''}" role="group" aria-label="Možnosti odpovědi">${cells}</div>`;
}

function bodyOrder(it, showRes) {
  const q = it.q;
  const placed = it.seq.map((orig, pos) => {
    const good = showRes && orig === pos, bad = showRes && orig !== pos;
    return `<li><button class="ord-item${good ? ' is-right' : ''}${bad ? ' is-wrong' : ''}" data-act="unplace" data-pos="${pos}"${showRes ? ' disabled' : ''}>
      <span class="ord-n">${pos + 1}</span><span class="txt">${esc(q.items[orig])}</span>
      ${bad ? `<span class="mark">patří na ${orig + 1}.</span>` : good ? '<span class="mark">správně</span>' : '<span class="ord-x" aria-label="vrátit">↩</span>'}
    </button></li>`;
  }).join('');
  const rest = it.pool.filter(i => !it.seq.includes(i));
  return `<div class="ord">
    <div class="eyebrow">Tvoje pořadí</div>
    ${placed ? `<ol class="ord-list">${placed}</ol>` : '<p class="ord-empty">Klepej na kroky níže v pořadí, v jakém jdou po sobě. Klepnutím na už zařazený krok ho vrátíš.</p>'}
    ${!showRes && rest.length ? `<div class="eyebrow">Zbývá zařadit · ${rest.length}</div><div class="ord-pool">${rest.map(orig => `<button class="ord-pool-item" data-act="place" data-o="${orig}"><span class="txt">${esc(q.items[orig])}</span></button>`).join('')}</div>` : ''}
    ${showRes && !it.ok ? `<div class="eyebrow">Správné pořadí</div><ol class="ord-correct">${q.items.map(x => `<li>${esc(x)}</li>`).join('')}</ol>` : ''}
  </div>`;
}

function bodyMatch(it, showRes) {
  const q = it.q;
  return `<div class="match">${q.pairs.map((p, i) => {
    const pick = it.picks[i], good = showRes && pick === p[1];
    const id = `m-${q.id}-${i}`;
    return `<div class="match-row${showRes ? (good ? ' is-right' : ' is-wrong') : ''}">
      <label class="match-l" for="${id}">${esc(p[0])}</label>
      <select id="${id}" data-act="pick" data-i="${i}"${showRes ? ' disabled' : ''}>
        <option value="">— vyber —</option>
        ${it.rights.map(r => `<option${r === pick ? ' selected' : ''}>${esc(r)}</option>`).join('')}
      </select>
      ${showRes && !good ? `<span class="match-fix">správně: ${esc(p[1])}</span>` : ''}
    </div>`;
  }).join('')}</div>`;
}

function hintFor(q) {
  if (q.t === 'tf') return 'Platí výrok, nebo je to mýtus?';
  if (q.t === 'order') return 'Seřaď kroky ve správném pořadí.';
  if (q.t === 'match') return 'Ke každé položce vyber správnou dvojici.';
  if (q.m) return '<b>Může být správně i víc odpovědí</b> — označ všechny správné.';
  return q.ofig ? 'Vyber jeden obrázek.' : 'Jedna správná odpověď.';
}

function kbdHint(it) {
  const q = it.q;
  if (q.t === 'tf') return 'klávesy P pravda · M mýtus';
  if (q.t === 'order') return 'klávesy 1–9 zařadí krok z nabídky · Backspace vrátí poslední · Enter vyhodnotí';
  if (q.t === 'match') return 'Tab přechází mezi poli · Enter vyhodnotí';
  return `klávesy A–${LET[it.perm.length - 1]} vybírají · Enter ${V.mode === 'exam' ? 'pokračuje' : 'vyhodnotí'}`;
}

function viewQuiz() {
  const it = cur(), q = it.q, n = V.items.length;
  const exam = V.mode === 'exam';
  const showRes = !exam && it.done;
  const okN = V.items.filter(x => x.done && x.ok).length;
  const badN = V.items.filter(x => x.done && !x.ok).length;
  const answeredN = V.items.filter(answered).length;
  const isLast = V.i === n - 1;

  const body = q.t === 'order' ? bodyOrder(it, showRes) : q.t === 'match' ? bodyMatch(it, showRes) : bodyChoice(it, showRes);

  let explain = '';
  if (showRes) {
    let rightLine = '';
    if (!it.ok && isChoice(q) && !q.m) {
      const ri = it.key[0];
      rightLine = q.t === 'tf' ? `Správně: ${q.o[ri]}.`
        : q.ofig ? `Správně je obrázek ${LET[it.perm.indexOf(ri)]} — ${q.o[ri]}.`
        : `Správně je ${LET[it.perm.indexOf(ri)]}: ${q.o[ri]}`;
    }
    explain = `<section class="explain" id="explain">
      <div class="verdict" data-ok="${it.ok ? 1 : 0}">${it.ok ? 'Správně' : (answered(it) ? 'Špatně' : 'Nevadí — tady je odpověď')}</div>
      ${rightLine ? `<p><b>${esc(rightLine)}</b></p>` : ''}
      <p class="why">${esc(q.why)}</p>
      ${q.img ? figBlock(q.img, 'Pravidlo devíti ve skriptech, s. 30 — každé políčko 9 %, genitál 1 %, součet 100 %.') : ''}
      ${q.note ? `<p class="course-note"><span class="eyebrow">Ruční poznámka z kurzu</span>${esc(q.note)}</p>` : ''}
      ${q.alt ? `<div class="alt"><span class="eyebrow">${esc(q.alt.t)}</span><p>${esc(q.alt.x)}</p></div>` : ''}
      <p class="src">Zdroj: ${esc(q.src)}</p>
    </section>`;
  }

  let actions;
  if (exam) {
    const unanswered = n - answeredN;
    actions = `${V.i > 0 ? '<button class="btn" data-act="prev">Zpět</button>' : ''}
      ${isLast
        ? `<button class="btn btn-primary" data-act="submit">${V.confirmSubmit && unanswered ? `Odevzdat i s ${unanswered} nezodpovězenými` : 'Odevzdat zkoušku'}</button>`
        : `<button class="btn btn-primary" data-act="next">${answered(it) ? 'Další' : 'Přeskočit'}</button>`}`;
  } else if (!it.done) {
    actions = q.t === 'tf'
      ? '<button class="btn" data-act="dunno">Nevím</button>'
      : `<button class="btn" data-act="dunno">Nevím</button><button class="btn btn-primary" data-act="check"${complete(it) ? '' : ' disabled'}>Vyhodnotit</button>`;
  } else {
    actions = `<button class="btn btn-primary" data-act="next">${isLast ? 'Zobrazit shrnutí' : 'Další otázka'}</button>`;
  }

  return `
<div class="quiz">
  <div class="qbar">
    <button class="btn btn-ghost" data-act="quit">${V.confirmQuit ? 'Opravdu ukončit?' : '✕ Ukončit'}</button>
    <div class="qbar-mid">
      <div class="qbar-row"><span>${esc(V.title)}</span><span>${V.i + 1} / ${n}</span></div>
      <div class="progress"><i style="width:${pct(exam ? V.i + 1 : okN + badN, n)}%"></i></div>
      <div class="qbar-row">${exam
        ? `<span>zodpovězeno ${answeredN}</span><span>k úspěchu ${PASS_N} správně</span>`
        : `<span>správně ${okN} · chyby ${badN}</span><span>${okN + badN ? `${pct(okN, okN + badN)} %` : ''}</span>`}</div>
    </div>
  </div>

  <article class="qcard">
    <div class="qmeta">
      <span class="stamp">${esc(CAT[q.c].n)}</span>
      ${!exam && q.alt ? '<span class="stamp warn">sporné</span>' : ''}
    </div>
    <h2 class="qtext">${esc(q.q)}</h2>
    <p class="qhint">${hintFor(q)}</p>
    ${q.fig ? figBlock(q.fig) : ''}
    ${body}
    ${explain}
  </article>

  <div class="actionbar">${actions}</div>
  <p class="kbd-hint">${kbdHint(it)}</p>
</div>`;
}

/* ── Výsledky a rozbor ── */
function answerSummary(x) {
  const q = x.q;
  if (q.t === 'order') {
    return `<div class="ans"><div class="c">Správně: ${q.items.map((s, i) => `${i + 1}. ${esc(s)}`).join(' → ')}</div>
      ${!x.ok ? `<div class="you">Tvoje: ${x.seq.length ? x.seq.map((o, i) => `${i + 1}. ${esc(q.items[o])}`).join(' → ') : 'bez odpovědi'}</div>` : ''}</div>`;
  }
  if (q.t === 'match') {
    return `<div class="ans">${q.pairs.map((p, i) => x.picks[i] === p[1]
      ? `<div class="c">✓ ${esc(p[0])} → ${esc(p[1])}</div>`
      : `<div class="c">${esc(p[0])} → ${esc(p[1])}</div><div class="you">✗ tvoje: ${esc(x.picks[i] || '—')}</div>`).join('')}</div>`;
  }
  return `<div class="ans">${x.perm.map(i => {
    const c = x.key.includes(i), s = x.sel.includes(i);
    return c ? `<div class="c">✓ ${esc(q.o[i])}</div>` : s ? `<div class="w">✗ ${esc(q.o[i])}</div>` : '';
  }).join('')}${!answered(x) ? '<div class="muted">— bez odpovědi</div>' : ''}</div>`;
}

function reviewList(items) {
  const ordered = [...items.filter(x => !x.ok), ...items.filter(x => x.ok)];
  return `<div class="review">${ordered.map(x => {
    const q = x.q;
    return `<details>
      <summary><span class="dot ${x.ok ? 'ok' : 'bad'}">${x.ok ? '✓' : '✗'}</span><span>${esc(q.q)}</span></summary>
      <div class="rbody">
        ${answerSummary(x)}
        <p class="why">${esc(q.why)}</p>
        ${q.note ? `<p class="course-note"><span class="eyebrow">Ruční poznámka z kurzu</span>${esc(q.note)}</p>` : ''}
        ${q.alt ? `<div class="alt"><span class="eyebrow">${esc(q.alt.t)}</span><p>${esc(q.alt.x)}</p></div>` : ''}
        <p class="src">${esc(CAT[q.c].n)} · ${esc(q.src)}</p>
      </div>
    </details>`;
  }).join('')}</div>`;
}

function byCatRows(items) {
  const agg = {};
  for (const x of items) { const a = agg[x.q.c] = agg[x.q.c] || [0, 0]; a[1]++; if (x.ok) a[0]++; }
  return `<div class="bycat">${CATS.filter(c => agg[c.k]).map(c => {
    const [ok, n] = agg[c.k];
    return `<div class="bycat-row"><span>${esc(c.n)}</span><span class="bar"><i data-full="${ok === n ? 1 : 0}" style="width:${pct(ok, n)}%"></i></span><span class="num">${ok}/${n}</span></div>`;
  }).join('')}</div>`;
}

const inlineActions = html => `<div class="actions-inline">${html}</div>`;

function viewResult() {
  const items = V.items, n = items.length;
  const ok = items.filter(x => x.ok).length, pass = ok >= PASS_N;
  const wrong = items.filter(x => !x.ok);
  return `
<div class="result">
  <div class="eyebrow">Zkouška nanečisto — výsledek</div>
  <div class="score">
    <span class="score-big">${ok}<small>/${n}</small></span>
    <span class="stampbig ${pass ? 'pass' : 'fail'}">${pass ? 'nad hranicí' : 'pod hranicí'}</span>
  </div>
  <p>${pct(ok, n)} % správně. Hranice je ${PASS_N} správně (82 %). ${pass
    ? (ok === n ? 'Bez jediné chyby.' : `Rezerva ${ok - PASS_N} ${plural(ok - PASS_N, 'otázka', 'otázky', 'otázek')}.`)
    : `Chybělo ${PASS_N - ok} ${plural(PASS_N - ok, 'správná odpověď', 'správné odpovědi', 'správných odpovědí')}.`}</p>
  ${inlineActions(`${wrong.length ? `<button class="btn btn-primary" data-act="practiceWrong">Procvičit ${wrong.length} ${plural(wrong.length, 'chybu', 'chyby', 'chyb')}</button>` : ''}<button class="btn" data-act="home">Domů</button>`)}
  <section><div class="section-head"><h2>Podle okruhů</h2></div>${byCatRows(items)}</section>
  <section><div class="section-head"><h2>Rozbor otázek</h2><span class="eyebrow">chyby nahoře</span></div>${reviewList(items)}</section>
</div>`;
}

function viewSummary() {
  const items = V.items.filter(x => x.done);
  if (!items.length) { V = { screen: 'home' }; return viewHome(); }
  const ok = items.filter(x => x.ok).length;
  const wrong = items.filter(x => !x.ok);
  return `
<div class="result">
  <div class="eyebrow">${esc(V.title)} — shrnutí</div>
  <div class="score"><span class="score-big">${ok}<small>/${items.length}</small></span></div>
  <p>${pct(ok, items.length)} % správně. ${wrong.length ? 'Chybné otázky se ti vrátí v Dnešním opakování a v Opravit chyby.' : 'Všechno správně — tyhle otázky se odsunou na později.'}</p>
  ${inlineActions(`${wrong.length ? `<button class="btn btn-primary" data-act="practiceWrong">Hned zopakovat ${wrong.length} ${plural(wrong.length, 'chybu', 'chyby', 'chyb')}</button>` : ''}<button class="btn" data-act="home">Domů</button>`)}
  <section><div class="section-head"><h2>Rozbor</h2><span class="eyebrow">chyby nahoře</span></div>${reviewList(items)}</section>
</div>`;
}

/* ── Vybav si ── */
function viewRecall() {
  const it = cur(), c = it.c, n = V.items.length;
  const tag = c.ord ? 'ol' : 'ul';
  return `
<div class="quiz">
  <div class="qbar">
    <button class="btn btn-ghost" data-act="quit">✕ Ukončit</button>
    <div class="qbar-mid">
      <div class="qbar-row"><span>Vybav si</span><span>${V.i + 1} / ${n}</span></div>
      <div class="progress"><i style="width:${pct(V.i, n)}%"></i></div>
    </div>
  </div>
  <article class="recall">
    <div class="qmeta"><span class="stamp">${esc(CAT[c.c].n)}</span>${c.ord ? '<span class="stamp">záleží na pořadí</span>' : ''}</div>
    <h2 class="recall-q">${esc(c.q)}</h2>
    <p class="recall-count">${c.a.length} ${plural(c.a.length, 'položka', 'položky', 'položek')}</p>
    ${it.shown
      ? `<${tag} class="recall-list">${c.a.map(x => `<li>${esc(x)}</li>`).join('')}</${tag}><p class="src">Zdroj: ${esc(c.src)}</p>`
      : '<div class="scratch">Vyjmenuj to nahlas nebo napiš na papír — teprve pak odkryj. Ohodnoť se poctivě: napůl znamená, že ti něco chybělo nebo bylo jinak.</div>'}
  </article>
  <div class="actionbar">${it.shown
    ? '<div class="grade"><button class="btn g0" data-act="grade" data-g="bad">Nevím</button><button class="btn" data-act="grade" data-g="half">Napůl</button><button class="btn g2" data-act="grade" data-g="ok">Vím</button></div>'
    : '<button class="btn btn-primary" data-act="reveal">Ukázat odpověď</button>'}</div>
  <p class="kbd-hint">${it.shown ? 'klávesy 1 nevím · 2 napůl · 3 vím' : 'Enter nebo mezerník odkryje'}</p>
</div>`;
}

function viewRecallDone() {
  const g = V.items.map(x => x.g);
  const ok = g.filter(x => x === 'ok').length, half = g.filter(x => x === 'half').length, bad = g.filter(x => x === 'bad').length;
  return `
<div class="result">
  <div class="eyebrow">Vybav si — shrnutí</div>
  <div class="score"><span class="score-big">${ok}<small>/${V.items.length}</small></span></div>
  <p>Vím ${ok} · napůl ${half} · nevím ${bad}. Kartičky, které nešly, se vrátí nejdřív.</p>
  ${inlineActions('<button class="btn btn-primary" data-act="recall">Další kartičky</button><button class="btn" data-act="home">Domů</button>')}
</div>`;
}

/* ── Sporná místa ── */
function rightList(q) {
  if (q.t === 'order') return `<ol>${q.items.map(s => `<li>${esc(s)}</li>`).join('')}</ol>`;
  if (q.t === 'match') return `<ul>${q.pairs.map(p => `<li>${esc(p[0])} → ${esc(p[1])}</li>`).join('')}</ul>`;
  return `<ul>${q.a.map(i => `<li>${esc(q.o[i])}</li>`).join('')}</ul>`;
}

function viewDisputes() {
  const qs = QB.filter(q => q.alt);
  return `
<div class="quiz">
  <div class="qbar"><button class="btn btn-ghost" data-act="home">← Domů</button><div class="qbar-mid"><div class="qbar-row"><span>Sporná místa</span><span>${qs.length}</span></div></div></div>
  <div class="disputes">
    <div>
      <h1>Kde se zdroje rozcházejí</h1>
      <p class="intro">Zkouší se podle skript Zdravotníci s.r.o., proto v otázkách vždy platí jejich odpověď. Vedle ní je novější nebo přesnější postup z příručky ČČK (2017), ze skript ČČK Praha 1 nebo přímo z vyhlášky — pro praxi na táboře a pro případ, že by se u zkoušky ptali jinak.</p>
    </div>
    ${qs.map(q => `
      <article class="dispute">
        <div class="qmeta"><span class="stamp">${esc(CAT[q.c].n)}</span></div>
        <h3>${esc(q.q)}</h3>
        <div class="versus">
          <div class="skripta"><span class="eyebrow">Odpověď v aplikaci</span>${rightList(q)}</div>
          <div class="jinde"><span class="eyebrow">${esc(q.alt.t)}</span><p>${esc(q.alt.x)}</p></div>
        </div>
        <p class="src">${esc(q.src)}</p>
      </article>`).join('')}
    <button class="btn btn-primary btn-block" data-act="practiceDisputes">Procvičit všech ${qs.length} sporných otázek</button>
  </div>
</div>`;
}

/* ════════════════════════ Akce ════════════════════════ */
function startQuiz(mode, qs, title) {
  if (!qs.length) { toast('Tady teď nic k procvičení není.'); return; }
  V = { screen: 'quiz', mode, title, items: qs.map(makeItem), i: 0 };
  render(); toTop();
}

function startRecall() {
  V = { screen: 'recall', items: pickSpaced('r', RC, RECALL_N).map(c => ({ c, shown: false, g: null })), i: 0 };
  render(); toTop();
}

function toggle(orig) {
  const it = cur();
  if (V.mode !== 'exam' && it.done) return;
  if (it.q.m) {
    const k = it.sel.indexOf(orig);
    if (k >= 0) it.sel.splice(k, 1); else it.sel.push(orig);
  } else it.sel = [orig];
  V.confirmSubmit = false;
  if (it.q.t === 'tf' && V.mode !== 'exam') return check(false);
  render();
}

function check(dunno) {
  const it = cur();
  if (it.done) return;
  if (dunno) { if (it.sel) it.sel = []; if (it.seq) it.seq = []; if (it.picks) it.picks = it.picks.map(() => ''); }
  else if (!complete(it)) return;
  it.done = true;
  it.ok = !dunno && isCorrect(it);
  gradeItem('q', it.q.id, it.ok ? 'ok' : 'bad');
  save();
  render();
  announce(it.ok ? 'Správně' : 'Špatně');
  requestAnimationFrame(() => {
    const el = document.getElementById('explain');
    if (el) el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  });
}

function next() {
  if (V.i < V.items.length - 1) { V.i++; V.confirmQuit = false; render(); toTop(); return; }
  if (V.mode === 'exam') return submit();
  V.screen = 'summary'; render(); toTop();
}
function prev() { if (V.i > 0) { V.i--; render(); toTop(); } }

function submit() {
  const unanswered = V.items.filter(x => !answered(x)).length;
  if (unanswered && !V.confirmSubmit) { V.confirmSubmit = true; render(); return; }
  const byCat = {};
  for (const x of V.items) {
    x.done = true;
    x.ok = isCorrect(x);
    gradeItem('q', x.q.id, x.ok ? 'ok' : 'bad');
    const a = byCat[x.q.c] = byCat[x.q.c] || [0, 0]; a[1]++; if (x.ok) a[0]++;
  }
  const ok = V.items.filter(x => x.ok).length;
  S.exams.push({ ts: Date.now(), n: V.items.length, ok, byCat });
  S.exams = S.exams.slice(-30);
  save();
  V = { screen: 'result', items: V.items };
  render(); toTop();
  announce(`Výsledek ${ok} z ${EXAM_N}`);
}

function quit() {
  if (V.screen === 'quiz' && V.mode === 'exam' && V.items.some(answered) && !V.confirmQuit) { V.confirmQuit = true; render(); return; }
  if (V.screen === 'quiz' && V.mode === 'practice' && V.items.some(x => x.done)) { V.screen = 'summary'; render(); toTop(); return; }
  if (V.screen === 'recall' && V.items.some(x => x.g)) { V.items = V.items.filter(x => x.g); V.screen = 'recallDone'; render(); toTop(); return; }
  goHome();
}
function goHome() { V = { screen: 'home' }; render(); toTop(); }

const ACT = {
  exam: () => startQuiz('exam', pickExam(), 'Zkouška nanečisto'),
  daily: () => startQuiz('practice', pickSpaced('q', QB, DAILY_N), 'Dnešní opakování'),
  short: () => startQuiz('practice', pickSpaced('q', QB, SHORT_N), 'Krátké opakování'),
  myths: () => startQuiz('practice', pickSpaced('q', QB.filter(q => q.t === 'tf'), MYTH_N), 'Pravda, nebo mýtus?'),
  pictures: () => startQuiz('practice', pickSpaced('q', QB.filter(hasPic), PIC_N), 'Obrázky a fotky'),
  orderMatch: () => startQuiz('practice', pickSpaced('q', QB.filter(q => q.t === 'order' || q.t === 'match'), MIX_N), 'Seřaď a přiřaď'),
  mistakes: () => startQuiz('practice', shuffle(QB.filter(q => boxOf('q', q.id) === 1)), 'Opravit chyby'),
  recall: startRecall,
  disputes: () => { V = { screen: 'disputes' }; render(); toTop(); },
  practiceDisputes: () => startQuiz('practice', shuffle(QB.filter(q => q.alt)), 'Sporná místa'),
  topic: el => startQuiz('practice', pickWeakFirst(QB.filter(q => q.c === el.dataset.k)), CAT[el.dataset.k].n),
  page: el => { const p = +el.dataset.p; startQuiz('practice', pickWeakFirst(QB.filter(q => pagesOf(q.src).includes(p))), `Skripta s. ${p}`); },
  opt: el => toggle(+el.dataset.o),
  place: el => { cur().seq.push(+el.dataset.o); render(); },
  unplace: el => { cur().seq.splice(+el.dataset.pos, 1); render(); },
  check: () => check(false),
  dunno: () => check(true),
  next, prev, submit, quit,
  home: goHome,
  practiceWrong: () => startQuiz('practice', shuffle(V.items.filter(x => !x.ok).map(x => x.q)), 'Oprava chyb'),
  reveal: () => { cur().shown = true; render(); },
  grade: el => {
    const it = cur();
    it.g = el.dataset.g;
    gradeItem('r', it.c.id, it.g);
    save();
    if (V.i < V.items.length - 1) { V.i++; render(); toTop(); }
    else { V.screen = 'recallDone'; render(); toTop(); }
  },
  install: async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    try { await installPrompt.userChoice; } catch (e) { /* ignorovat */ }
    installPrompt = null;
    render();
  },
  hideInstall: () => { lsSet('zza-install-hidden', '1'); render(); },
  reset: () => {
    if (!V.confirmReset) {
      V.confirmReset = true; render();
      setTimeout(() => { if (V.screen === 'home' && V.confirmReset) { V.confirmReset = false; render(); } }, 4000);
      return;
    }
    S = blank(); save();
    V = { screen: 'home' }; render();
    toast('Postup smazán.');
  }
};

$app.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  if (!el || el.disabled || el.tagName === 'SELECT') return;
  const fn = ACT[el.dataset.act];
  if (fn) fn(el);
});

$app.addEventListener('change', e => {
  const el = e.target;
  if (el.tagName !== 'SELECT' || el.dataset.act !== 'pick' || V.screen !== 'quiz') return;
  const it = cur();
  if (it.done && V.mode !== 'exam') return;
  it.picks[+el.dataset.i] = el.value;
  V.confirmSubmit = false;
  const id = el.id;
  render();
  const again = document.getElementById(id);
  if (again) again.focus();
});

document.addEventListener('keydown', e => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const t = e.target;
  if (t && /^(INPUT|TEXTAREA)$/.test(t.tagName)) return;
  if (e.key === 'Enter' && t && t.tagName === 'BUTTON') return;          // nativní klik

  if (V.screen === 'quiz') {
    const it = cur(), q = it.q, key = e.key.toLowerCase();
    const primary = () => {
      if (V.mode === 'exam') next();
      else if (!it.done) { if (complete(it)) check(false); }
      else next();
    };
    if (t && t.tagName === 'SELECT') { if (e.key === 'Enter' && complete(it)) { e.preventDefault(); primary(); } return; }
    if (e.key === 'Enter') { e.preventDefault(); primary(); return; }
    if (V.mode === 'exam' && e.key === 'ArrowLeft') { prev(); return; }
    if (V.mode === 'exam' && e.key === 'ArrowRight' && V.i < V.items.length - 1) { next(); return; }
    if (it.done && V.mode !== 'exam') return;
    if (q.t === 'tf') {
      if (key === 'p') { e.preventDefault(); toggle(0); }
      else if (key === 'm') { e.preventDefault(); toggle(1); }
    } else if (q.t === 'order') {
      const rest = it.pool.filter(i => !it.seq.includes(i));
      if (/^[1-9]$/.test(e.key) && +e.key <= rest.length) { e.preventDefault(); it.seq.push(rest[+e.key - 1]); render(); }
      else if (e.key === 'Backspace' && it.seq.length) { e.preventDefault(); it.seq.pop(); render(); }
    } else if (q.t !== 'match') {
      let idx = LET.toLowerCase().indexOf(key);
      if (key.length !== 1 || idx < 0) idx = /^[1-9]$/.test(e.key) ? +e.key - 1 : -1;
      if (idx >= 0 && idx < it.perm.length) { e.preventDefault(); toggle(it.perm[idx]); }
    }
  } else if (V.screen === 'recall') {
    const it = cur();
    if (!it.shown && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); ACT.reveal(); }
    else if (it.shown && /^[123]$/.test(e.key)) { e.preventDefault(); ACT.grade({ dataset: { g: ['bad', 'half', 'ok'][+e.key - 1] } }); }
  }
});

render();

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
}
})();
