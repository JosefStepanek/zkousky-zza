/* Obrázky pro otázky.
   SVG piktogramy jsou kreslené ručně (vlastní dílo) a barví se přes CSS třídy fx-*,
   takže fungují ve světlém i tmavém režimu. Fotky jsou z Wikimedia Commons s volnou licencí. */
(() => {
const f1 = v => Math.round(v * 10) / 10;
const L = (pts, cls = 'fx-b') => `<polyline class="${cls}" points="${pts}"/>`;
const C = (x, y, r, cls = 'fx-h') => `<circle class="${cls}" cx="${x}" cy="${y}" r="${r}"/>`;
const R = (x, y, w, h, rx, cls = 'fx-o', extra = '') => `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}"${extra}/>`;
const T = (x, y, t, cls = 'fx-cap') => `<text class="${cls}" x="${x}" y="${y}">${t}</text>`;
const G = (x1, x2, y) => `<line class="fx-g" x1="${x1}" y1="${y}" x2="${x2}" y2="${y}"/>`;
const M = (x, y, t) => C(x, y, 11, 'fx-m') + T(x, y, t, 'fx-mt');
const S = (vb, alt, body) => `<svg viewBox="${vb}" role="img" aria-label="${alt}">${body}</svg>`;
const dir = (deg, len) => { const a = deg * Math.PI / 180; return [Math.cos(a) * len, Math.sin(a) * len]; };

function nose(cx, cy, r, deg) {
  const [dx, dy] = dir(deg, 1), px = -dy, py = dx;
  const p = [
    [cx + (r + 8) * dx, cy + (r + 8) * dy],
    [cx + (r - 3) * dx + 5 * px, cy + (r - 3) * dy + 5 * py],
    [cx + (r - 3) * dx - 5 * px, cy + (r - 3) * dy - 5 * py]
  ];
  return `<polygon class="fx-h" points="${p.map(q => q.map(f1).join(',')).join(' ')}"/>`;
}
function water(x0, x1, y, h) {
  const pts = [];
  for (let x = x0, i = 0; x <= x1; x += 10, i++) pts.push(`${x},${y + (i % 2 ? -3 : 0)}`);
  return R(x0, y, x1 - x0, h, 0, 'fx-w') + `<polyline class="fx-wl" points="${pts.join(' ')}"/>`;
}

const FIG = {};
const add = (key, alt, svgBody, vb) => { FIG[key] = { alt, svg: S(vb, alt, svgBody) }; };

/* ── Polohy ── */
add('polohaZada', 'Postava ležící na zádech',
  G(8, 232, 134) + C(34, 114, 12) + L('50,120 132,122') + L('60,127 118,129', 'fx-b fx-t') + L('132,122 180,123 222,125'),
  '0 0 240 150');
add('polohaProtisok', 'Postava na zádech s dolními končetinami zvednutými na podložce',
  G(8, 232, 134) + C(170, 118, 15, 'fx-o') + C(34, 114, 12) + L('50,120 128,122') + L('60,127 116,129', 'fx-b fx-t') + L('128,122 170,100 220,86'),
  '0 0 240 150');
add('polohaPolosed', 'Postava v polosedě opřená zády o podložku',
  G(8, 232, 134) + '<polygon class="fx-o" points="26,134 56,134 88,34 72,34"/>' + C(80, 46, 12) + L('82,62 100,120') + L('100,122 156,114 214,126') + L('86,72 98,100 126,108', 'fx-b fx-t'),
  '0 0 240 150');
add('polohaZotavovaci', 'Pohled shora: postava na boku, spodní noha natažená, horní pokrčená v koleni',
  R(8, 18, 224, 120, 12) + C(196, 56, 12) + L('182,64 112,74') + L('112,74 72,76 30,80') + L('112,74 104,112 60,118') + L('178,66 172,100 196,112', 'fx-b fx-t') + L('186,62 212,80 222,66', 'fx-b fx-t'),
  '0 0 240 150');

/* ── Záklon hlavy: průchodnost dýchacích cest ── */
function zaklon(ok) {
  const c = ok ? [138, 92] : [126, 82], r = 17;
  const [mx, my] = dir(ok ? -2 : -160, r - 5);
  const mouth = `${f1(c[0] + mx)},${f1(c[1] + my)}`;
  const air = ok ? `${mouth} 124,99 100,106` : `${mouth} 124,90 112,100 100,106`;
  return G(8, 172, 124) + L('14,106 104,106') + L('26,113 90,114', 'fx-b fx-t') + L(ok ? '104,106 124,98' : '104,106 116,94') +
    C(c[0], c[1], r) + nose(c[0], c[1], r, ok ? -40 : -130) + L(air, 'fx-air');
}
add('zaklonOk', 'Postava na zádech s hlavou zakloněnou, dýchací cesta vede rovně', zaklon(true), '0 0 180 132');
add('zaklonBad', 'Postava na zádech s hlavou předkloněnou k hrudníku, dýchací cesta je zalomená', zaklon(false), '0 0 180 132');

/* ── Místa stlačení hrudníku ── */
add('kprDospely', 'Hrudník dospělého s vyznačenými body A až D: A horní část hrudní kosti, B střed mezi bradavkami, C nadbřišek pod hrudní kostí, D levá strana hrudníku',
  L('100,6 100,30') + L('46,54 24,128', 'fx-b fx-t') + L('154,54 176,128', 'fx-b fx-t') + R(40, 26, 120, 196, 40) +
  C(72, 94, 4.5, 'fx-n') + C(128, 94, 4.5, 'fx-n') + L('100,40 100,150', 'fx-d') + C(100, 192, 3, 'fx-n') +
  M(100, 58, 'A') + M(100, 94, 'B') + M(100, 168, 'C') + M(138, 124, 'D'),
  '0 0 200 230');
add('kprKojenec', 'Hrudník novorozence s body A až D: A na spojnici bradavek, B těsně pod ní, C na bříšku, D horní část hrudníku',
  C(100, 26, 20, 'fx-o') + L('58,64 34,110', 'fx-b fx-t') + L('142,64 166,110', 'fx-b fx-t') + R(52, 44, 96, 138, 42) +
  C(78, 86, 4, 'fx-n') + C(122, 86, 4, 'fx-n') + L('100,56 100,128', 'fx-d') + C(100, 160, 3, 'fx-n') +
  M(100, 86, 'A') + M(100, 108, 'B') + M(100, 142, 'C') + M(100, 60, 'D'),
  '0 0 200 200');

/* ── Pravidlo devíti ── */
function devitka(mode) {
  const cx = 110, bx = 258, num = mode === 'cisla';
  const k = part => (num ? ['trup', 'gen', 'zada'].includes(part) : part === mode) ? 'fx-hi' : 'fx-o';
  const n = (x, y, t, small) => `<text class="fx-num"${small ? ' style="font-size:11px"' : ''} x="${x}" y="${y}">${t}</text>`;
  let b = `<circle class="${k('hlava')}" cx="${cx}" cy="34" r="21"/>` + R(cx - 6, 53, 12, 10, 0) +
    R(cx - 54, 66, 19, 104, 9.5, k('paze')) + R(cx + 35, 66, 19, 104, 9.5) + R(cx - 31, 62, 62, 102, 8, k('trup')) +
    R(cx - 29, 168, 27, 118, 11) + R(cx + 2, 168, 27, 118, 11, k('noha')) +
    `<circle class="${k('gen')}" cx="${cx}" cy="168" r="8"/>` + R(bx - 36, 62, 72, 102, 8, k('zada'));
  if (num) {
    b += `<line class="fx-d" x1="${cx - 31}" y1="113" x2="${cx + 31}" y2="113"/><line class="fx-d" x1="${cx - 29}" y1="228" x2="${cx + 29}" y2="228"/><line class="fx-d" x1="${bx - 36}" y1="113" x2="${bx + 36}" y2="113"/>` +
      n(cx, 34, 9) + n(cx, 88, 9) + n(cx, 138, 9) + n(cx - 44.5, 118, 9) + n(cx + 44.5, 118, 9) +
      n(cx - 15.5, 199, 9) + n(cx + 15.5, 199, 9) + n(cx - 15.5, 258, 9) + n(cx + 15.5, 258, 9) + n(cx, 168, 1, true) +
      n(bx, 88, 9) + n(bx, 138, 9);
  }
  return b + T(cx, 304, 'přední strana') + T(bx, 186, 'záda');
}
add('devitka', 'Pravidlo devíti u dospělého: hlava a krk 9 %, každá horní končetina 9 %, přední strana trupu 18 %, záda 18 %, každá dolní končetina 18 %, genitál 1 %', devitka('cisla'), '0 0 330 310');
add('devitkaNoha', 'Schéma těla, zvýrazněná je celá jedna dolní končetina', devitka('noha'), '0 0 330 310');
add('devitkaPaze', 'Schéma těla, zvýrazněná je celá jedna horní končetina', devitka('paze'), '0 0 330 310');
add('dlan', 'Dlaň i s prsty',
  R(46, 20, 17, 70, 8.5, 'fx-hi') + R(66, 8, 17, 82, 8.5, 'fx-hi') + R(86, 12, 17, 78, 8.5, 'fx-hi') + R(106, 30, 16, 62, 8, 'fx-hi') +
  '<rect class="fx-hi" x="16" y="108" width="17" height="56" rx="8.5" transform="rotate(-38 24 136)"/>' + R(44, 80, 80, 96, 26, 'fx-hi'),
  '0 0 160 190');

/* ── Tonutí ── */
add('tonAktivni', 'Postava ve vodě svisle, hlava zakloněná nad hladinou, paže do stran plácají o hladinu',
  C(100, 56, 11) + nose(100, 56, 11, -80) + L('100,68 100,118') + L('100,74 62,64', 'fx-b fx-t') + L('100,74 138,64', 'fx-b fx-t') +
  L('100,118 92,146', 'fx-b fx-t') + L('100,118 108,146', 'fx-b fx-t') +
  L('52,56 46,48', 'fx-g') + L('56,50 54,40', 'fx-g') + L('148,56 154,48', 'fx-g') + L('144,50 146,40', 'fx-g') + water(0, 200, 70, 80),
  '0 0 200 150');
add('tonPasivni', 'Postava vodorovně obličejem dolů těsně pod hladinou, bez pohybu, paže visí dolů',
  C(54, 78, 11) + L('66,78 140,80') + L('76,82 80,114', 'fx-b fx-t') + L('90,82 96,116', 'fx-b fx-t') +
  L('140,80 182,88', 'fx-b fx-t') + L('140,82 178,100', 'fx-b fx-t') + water(0, 200, 70, 80),
  '0 0 200 150');
add('tonPlavec', 'Plavec vodorovně s hlavou nad vodou, jedna paže vpředu nad hladinou',
  C(50, 62, 11) + nose(50, 62, 11, 180) + L('62,70 134,74') + L('64,66 26,56', 'fx-b fx-t') + L('84,74 106,98', 'fx-b fx-t') +
  L('134,74 178,70', 'fx-b fx-t') + L('134,76 176,86', 'fx-b fx-t') + water(0, 200, 70, 80),
  '0 0 200 150');
add('hazeci', 'Zachránce na břehu hází záchranný kruh na laně tonoucímu ve vodě',
  R(0, 74, 72, 76, 0) + L('30,74 36,48', 'fx-b fx-t') + L('46,74 40,48', 'fx-b fx-t') + L('38,48 40,22') + C(42, 11, 9) +
  L('40,28 66,16', 'fx-b fx-t') + L('38,30 26,46', 'fx-b fx-t') + '<path class="fx-d" d="M66 16 Q 132 -8 176 70"/>' +
  C(212, 82, 9) + L('212,92 213,128') + L('206,92 190,78', 'fx-b fx-t') + L('218,92 228,74', 'fx-b fx-t') +
  '<circle cx="182" cy="80" r="11" fill="none" stroke="#E4572E" stroke-width="6"/>' + water(72, 240, 80, 70),
  '0 0 240 150');

/* ── Dušení ── */
add('dusLopatky', 'Postižený stojí v předklonu, zachránce vedle něj udeří dlaní mezi lopatky',
  G(8, 192, 168) + L('112,166 116,118') + L('128,166 124,118') + L('120,118 164,94') + C(178, 100, 10) + L('158,98 164,132', 'fx-b fx-t') +
  L('54,166 58,118') + L('70,166 66,118') + L('62,118 66,62') + C(68, 48, 10) + L('66,72 100,70 144,92', 'fx-b fx-t') + L('64,76 88,102', 'fx-b fx-t') +
  L('146,76 150,66', 'fx-g') + L('156,80 164,72', 'fx-g'),
  '0 0 200 172');
add('dusHeimlich', 'Zachránce stojí za postiženým, obejme ho kolem pasu a pěstí stlačuje nadbřišek',
  G(8, 192, 168) + L('84,166 88,118') + L('98,166 94,118') + L('92,118 94,60') + C(90, 46, 10) +
  L('118,166 120,118') + L('132,166 128,118') + L('124,118 126,62') + C(130, 48, 10) + nose(130, 48, 10, 10) + L('126,72 142,98', 'fx-b fx-t') +
  L('94,74 122,94 136,96', 'fx-b fx-t') + L('92,80 124,100', 'fx-b fx-t') + C(138, 96, 6, 'fx-fist'),
  '0 0 200 172');
add('dusKojenec', 'Zachránce drží kojence obličejem dolů na předloktí s hlavou níž a druhou rukou udeří mezi lopatky',
  G(8, 192, 168) + L('54,166 58,112') + L('70,166 66,112') + L('62,112 66,56') + C(68, 42, 10) +
  L('66,68 84,96 152,110', 'fx-b fx-t') + L('100,88 140,98') + C(150, 104, 8) + L('100,88 86,80', 'fx-b fx-t') + L('64,70 96,62 118,84', 'fx-b fx-t'),
  '0 0 200 172');

/* ── Krvácení z nosu ── */
add('nosPredklon', 'Sedící postava v předklonu hlavy, rukou stiskne nos, krev kape dopředu',
  L('50,148 72,92') + C(88, 76, 13) + nose(88, 76, 13, 40) + L('68,100 96,98 104,90', 'fx-b fx-t') + C(104, 110, 3.5, 'fx-blood') + C(103, 124, 2.5, 'fx-blood'),
  '0 0 140 150');
add('nosZaklon', 'Sedící postava se zakloněnou hlavou',
  L('62,148 64,90') + C(58, 68, 13) + nose(58, 68, 13, -70) + L('66,100 90,104', 'fx-b fx-t'),
  '0 0 140 150');

/* ── Typ krvácení ── */
function spurts() {
  let d = '';
  [54, 40, 26].forEach((h, s) => {
    for (let i = 1; i <= 7; i++) {
      const t = i / 8, x = 100 + t * (44 - s * 6), y = 74 - 4 * h * t * (1 - t);
      d += `<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(3.4 - i * 0.2)}" fill="#E8323F"/>`;
    }
  });
  return d;
}
const arm = R(10, 72, 180, 32, 16) + '<ellipse cx="100" cy="78" rx="11" ry="4" fill="#5A0A14"/>';
add('krvTepenne', 'Rána na předloktí, ze které v obloucích vystřikuje světle červená krev', arm + spurts(), '0 0 200 130');
add('krvZilni', 'Rána na předloktí, ze které souvisle vytéká tmavě červená krev',
  arm + '<path d="M95 78 C 93 92 92 100 93 110 L 107 110 C 108 100 107 92 105 78 Z" fill="#7A1020"/><circle cx="100" cy="119" r="4.5" fill="#7A1020"/>',
  '0 0 200 130');

/* ── Symbol AED (mezinárodní značka ILCOR) ── */
add('aed', 'Zelená čtvercová značka s bílým srdcem, bleskem a malým křížkem',
  '<rect width="120" height="120" rx="12" fill="#008A45"/>' +
  '<path d="M60 98 C 18 72 14 40 36 30 C 48 25 58 32 60 42 C 62 32 72 25 84 30 C 106 40 102 72 60 98 Z" fill="#fff"/>' +
  '<polygon points="66,38 48,66 60,66 52,90 76,58 63,58 72,38" fill="#008A45"/>' +
  '<rect x="97" y="10" width="6" height="18" fill="#fff"/><rect x="91" y="16" width="18" height="6" fill="#fff"/>',
  '0 0 120 120');

/* ── Obvazy a dlahy ── */
add('satek', 'Postava s předloktím v trojcípém šátku zavěšeném kolem krku',
  C(90, 26, 15) + L('90,42 90,146') + L('58,54 122,54') + L('58,54 50,100 52,144', 'fx-b fx-t') + L('90,146 78,194') + L('90,146 102,194') +
  L('122,54 128,98', 'fx-b fx-t') + L('128,98 70,102', 'fx-b fx-t') +
  '<polygon class="fx-hi" points="140,114 58,114 118,50" fill-opacity=".85"/>' + L('118,50 104,40 76,42 64,60', 'fx-strap'),
  '0 0 180 200');
function dlaha(x, w) {
  return L('10,56 92,56') + L('92,56 176,56') + L('176,56 204,56') + L('128,44 136,52 128,60 136,68', 'fx-cut') +
    C(92, 56, 5, 'fx-m') + C(176, 56, 5, 'fx-m') + R(x, 40, w, 32, 6, 'fx-splint') + T(92, 96, 'loket') + T(176, 96, 'zápěstí');
}
add('dlahaOk', 'Předloktí se zlomeninou, dlaha sahá přes loket i zápěstí', dlaha(72, 124), '0 0 220 110');
add('dlahaKratka', 'Předloktí se zlomeninou, dlaha kryje jen místo zlomeniny', dlaha(116, 34), '0 0 220 110');
add('dlahaLoket', 'Předloktí se zlomeninou, dlaha sahá od lokte, zápěstí zůstává volné', dlaha(72, 70), '0 0 220 110');

/* ── Brýlový hematom ── */
add('bryle', 'Obličej s fialovými modřinami kolem obou očí',
  '<ellipse class="fx-o" cx="80" cy="92" rx="56" ry="72"/>' +
  '<ellipse cx="56" cy="80" rx="21" ry="15" fill="rgba(106,52,150,.45)"/><ellipse cx="104" cy="80" rx="21" ry="15" fill="rgba(106,52,150,.45)"/>' +
  L('46,80 66,80', 'fx-b fx-t') + L('94,80 114,80', 'fx-b fx-t') + L('80,86 74,112 84,114', 'fx-g') + '<path class="fx-g" d="M62 134 Q80 144 98 134"/>',
  '0 0 160 180');

/* ── Fotky (Wikimedia Commons) ── */
const photo = (key, file, alt, credit) => { FIG[key] = { photo: 'img/' + file, alt, credit }; };
photo('fotoNestovice', 'plane-nestovice.jpg', 'Záda dítěte s roztroušenými červenými pupínky a puchýřky', 'Foto: Wikimedia Commons (Varicella.jpg) — volné dílo');
photo('fotoZardenky', 'zardenky.jpg', 'Záda dítěte s drobnou růžovou skvrnitou vyrážkou', 'Foto: CDC, Wikimedia Commons — volné dílo');
photo('fotoBorelioza', 'borelioza.jpg', 'Kulatá zarudlá skvrna na paži, uprostřed tmavší, s bledším prstencem', 'Foto: James Gathany / CDC, Wikimedia Commons — volné dílo');
photo('fotoOpar', 'opar.jpg', 'Puchýřek na spodním rtu, na který ukazuje šipka', 'Foto: CDC, Wikimedia Commons — volné dílo');
photo('fotoKoprivka', 'koprivka.jpg', 'Kůže s nepravidelnými vystouplými zarudlými skvrnami', 'Foto: Psixtras, Wikimedia Commons — CC0');

/* ══════ Doplněk podle obrázků v příručce ČČK a ve skriptech ČČK Praha 1 (vlastní kresby) ══════ */

/* ── Elektrody AED ── */
const torso = () => L('100,6 100,30') + L('46,54 24,128', 'fx-b fx-t') + L('154,54 176,128', 'fx-b fx-t') + R(40, 26, 120, 196, 40) +
  C(72, 94, 4.5, 'fx-n') + C(128, 94, 4.5, 'fx-n') + C(100, 192, 3, 'fx-n');
const pad = (x, y, rot) => `<rect class="fx-hi" x="${x - 16}" y="${y - 11}" width="32" height="22" rx="4" transform="rotate(${rot} ${x} ${y})"/>` + C(x, y, 3, 'fx-n');
add('aedOk', 'Hrudník: jedna elektroda pod pravou klíční kostí, druhá na levém boku pod podpažím', torso() + pad(70, 52, -10) + pad(146, 134, -65), '0 0 200 230');
add('aedStred', 'Hrudník: obě elektrody nad sebou na hrudní kosti', torso() + pad(100, 60, 0) + pad(100, 130, 0), '0 0 200 230');
add('aedBricho', 'Hrudník: jedna elektroda na břiše, druhá na levém rameni', torso() + pad(100, 176, 0) + pad(132, 52, 10), '0 0 200 230');

/* ── Pozice při masáži ── */
function masaz(ok) {
  const victim = G(8, 232, 134) + C(200, 114, 11) + L('186,120 76,122') + L('76,122 24,124');
  return victim + (ok
    ? L('56,132 88,132 98,100') + L('98,100 116,56') + C(112, 42, 10) + L('116,60 118,112', 'fx-b fx-t') + L('111,60 113,112', 'fx-b fx-t') + R(107, 109, 17, 7, 3, 'fx-h')
    : L('36,132 68,132 78,100') + L('78,100 86,56') + C(82, 42, 10) + L('86,62 110,84 116,112', 'fx-b fx-t') + R(108, 109, 17, 7, 3, 'fx-h'));
}
add('masazOk', 'Zachránce klečí, ramena má kolmo nad hrudníkem a lokty propnuté', masaz(true), '0 24 240 118');
add('masazBad', 'Zachránce klečí stranou, lokty má pokrčené a ramena mimo osu hrudníku', masaz(false), '0 24 240 118');

/* ── Technika stlačení podle věku ── */
const chest = R(30, 30, 100, 132, 34) + C(56, 80, 4, 'fx-n') + C(104, 80, 4, 'fx-n') + L('80,44 80,130', 'fx-d');
add('techDveRuce', 'Dvě dlaně položené na sobě uprostřed hrudníku',
  chest + L('80,78 62,4') + L('80,86 98,4') + '<ellipse class="fx-palm" cx="80" cy="88" rx="18" ry="13"/><ellipse class="fx-palm" cx="80" cy="80" rx="18" ry="13"/>', '0 0 160 170');
add('techJednaRuka', 'Jedna dlaň uprostřed hrudníku',
  chest + L('80,80 80,4') + '<ellipse class="fx-palm" cx="80" cy="84" rx="18" ry="13"/>', '0 0 160 170');
add('techDvaPrsty', 'Dva prsty uprostřed hrudníku na spojnici bradavek',
  chest + R(62, 4, 36, 44, 14, 'fx-palm') + R(69, 42, 8, 40, 4, 'fx-palm') + R(83, 42, 8, 40, 4, 'fx-palm'), '0 0 160 170');

/* ── Umělý vdech u novorozence ── */
function face(seal) {
  const s = {
    obe: '<ellipse class="fx-seal" cx="80" cy="91" rx="27" ry="23"/>',
    usta: '<ellipse class="fx-seal" cx="80" cy="101" rx="19" ry="9"/>',
    nos: '<ellipse class="fx-seal" cx="80" cy="81" rx="12" ry="9"/>'
  }[seal];
  return C(80, 76, 54, 'fx-o') + L('58,62 68,62', 'fx-b fx-thin') + L('92,62 102,62', 'fx-b fx-thin') +
    '<path class="fx-g" d="M74 82 Q80 87 86 82"/><path class="fx-g" d="M70 100 Q80 106 90 100"/>' + s;
}
add('vdechObe', 'Obličej dítěte, přerušovaný ovál překrývá ústa i nos', face('obe'), '0 0 160 140');
add('vdechUsta', 'Obličej dítěte, přerušovaný ovál překrývá jen ústa', face('usta'), '0 0 160 140');
add('vdechNos', 'Obličej dítěte, přerušovaný ovál překrývá jen nos', face('nos'), '0 0 160 140');

/* ── Úlevová poloha „klubíčko“ ── */
add('polohaKlubicko', 'Postava ležící na boku, schoulená do klubíčka s koleny přitaženými k hrudníku',
  G(20, 176, 132) + C(46, 104, 13) + L('60,98 86,82 114,86 130,106') + L('130,106 92,112') + L('92,112 118,124') + L('66,106 86,112', 'fx-b fx-t'),
  '20 58 160 82');

/* ── Cizí těleso v ráně ── */
const arm2 = R(10, 84, 200, 34, 17);
add('cteloOk', 'Předmět zůstává v ráně, po stranách je obložený roličkami obvazu a zafixovaný obinadlem',
  arm2 + R(70, 78, 80, 46, 6, 'fx-band') + '<polygon class="fx-h" points="104,86 101,22 113,22 116,86"/>' + R(76, 52, 22, 34, 6, 'fx-roll') + R(122, 52, 22, 34, 6, 'fx-roll'),
  '0 0 220 140');
add('cteloVen', 'Předmět je vytažený a leží vedle paže, rána je přikrytá gázou',
  arm2 + R(86, 80, 48, 30, 3, 'fx-roll') + '<polygon class="fx-h" points="150,128 206,122 207,130 151,136"/>' + C(98, 125, 3, 'fx-blood') + C(112, 131, 2.5, 'fx-blood'),
  '0 0 220 140');
add('cteloPres', 'Obinadlo je pevně přetažené přes předmět a zatlačuje ho do rány',
  arm2 + '<polygon class="fx-h" points="104,86 102,58 114,58 116,86"/>' + R(66, 50, 88, 72, 8, 'fx-band', ' style="fill-opacity:.55"'),
  '0 0 220 140');

/* ── Tlakový obvaz (průřez končetinou) ── */
add('tlakovy', 'Průřez končetinou: na ráně gáza, na ní tlaková vrstva ze smotaného obinadla, vše pevně ovinuté obvazem',
  C(100, 118, 54, 'fx-o') + C(100, 126, 15, 'fx-bone') + '<path d="M86 66 Q100 58 114 66" fill="none" stroke="#D1293D" stroke-width="4" stroke-linecap="round"/>' +
  R(78, 54, 44, 8, 3, 'fx-gauze') + R(80, 28, 40, 26, 11, 'fx-roll') + '<ellipse class="fx-wrap" cx="100" cy="104" rx="64" ry="80"/>',
  '0 0 200 200');

/* ── Dlaha na bérec ── */
function dlahaNoha(x, w) {
  return L('10,70 100,70') + L('100,70 184,70') + L('184,70 192,36') + L('136,58 144,66 136,74 144,82', 'fx-cut') +
    C(100, 70, 5, 'fx-m') + C(184, 70, 5, 'fx-m') + R(x, 54, w, 32, 6, 'fx-splint') + T(100, 110, 'koleno') + T(184, 110, 'kotník');
}
add('nohaOk', 'Bérec se zlomeninou, dlaha sahá přes koleno i kotník', dlahaNoha(60, 150), '0 0 230 120');
add('nohaKratka', 'Bérec se zlomeninou, dlaha kryje jen místo zlomeniny', dlahaNoha(120, 40), '0 0 230 120');
add('nohaBezKotniku', 'Bérec se zlomeninou, dlaha přes koleno, kotník zůstává volný', dlahaNoha(60, 100), '0 0 230 120');

/* ── Obvazová technika ── */
const limbV = R(70, 6, 60, 188, 6);
add('obvazKruhovy', 'Končetina s otáčkami obinadla vedenými vodorovně přes sebe',
  limbV + [0, 1, 2, 3, 4, 5].map(i => R(62, 50 + i * 16, 76, 22, 3, 'fx-band')).join(''), '0 0 200 200');
add('obvazKlasovy', 'Končetina s otáčkami obinadla, které se kříží do tvaru klasu',
  limbV + [0, 1, 2, 3, 4, 5].map(i => { const y = 156 - i * 18; return `<polygon class="fx-band" points="62,${y} 100,${y - 16} 100,${y - 4} 62,${y + 12}"/><polygon class="fx-band" points="100,${y - 16} 138,${y} 138,${y + 12} 100,${y - 4}"/>`; }).join(''),
  '0 0 200 200');
add('maltez', 'Náplast vystřižená do tvaru kříže s rameny rozšiřujícími se ke krajům, uprostřed polštářek',
  '<path class="fx-band" d="M70 20 L110 20 L96 70 L150 56 L150 104 L96 90 L110 140 L70 140 L84 90 L30 104 L30 56 L84 70 Z"/>' + R(82, 68, 16, 24, 3, 'fx-gauze'),
  '0 0 180 160');
add('leukosteh', 'Drobná rána na kůži, jejíž okraje k sobě přitahují tři úzké proužky náplasti',
  R(10, 30, 200, 90, 20) + L('50,76 170,74', 'fx-woundline') + R(64, 40, 14, 70, 3, 'fx-band') + R(103, 40, 14, 70, 3, 'fx-band') + R(142, 40, 14, 70, 3, 'fx-band'),
  '0 0 220 150');

/* ── Transport ── */
add('doprovod', 'Zachránce podpírá zraněného kolem pasu, zraněný má paži přes jeho ramena a jednu nohu nezatěžuje',
  G(8, 192, 172) + L('78,170 82,118') + L('94,170 90,118') + L('86,118 88,60') + C(88, 46, 10) +
  L('128,170 124,118') + L('146,150 136,118') + L('130,118 126,62') + C(124, 48, 10) +
  L('126,68 104,62 84,66', 'fx-b fx-t') + L('88,96 128,96', 'fx-b fx-t'),
  '0 0 200 180');
add('odnesZaSebou', 'Jeden zachránce drží zraněného zezadu pod pažemi, druhý nese jeho dolní končetiny',
  G(8, 232, 172) + L('40,170 44,120') + L('56,170 52,120') + L('48,120 52,64') + C(50, 50, 10) +
  C(78, 86, 9) + L('86,96 140,112') + L('140,110 196,106', 'fx-b fx-t') + L('140,114 196,116', 'fx-b fx-t') +
  L('52,74 88,100', 'fx-b fx-t') + L('52,82 92,106', 'fx-b fx-t') +
  L('186,170 190,122') + L('202,170 198,122') + L('194,122 196,66') + C(198, 52, 10) + L('196,76 196,110', 'fx-b fx-t'),
  '0 0 240 180');
add('tazeni', 'Zachránce plave na zádech a táhne tonoucího, který leží na zádech s obličejem nad hladinou',
  C(150, 54, 10) + nose(150, 54, 10, -90) + L('138,62 60,66') + L('60,66 16,64', 'fx-b fx-t') + L('60,68 18,74', 'fx-b fx-t') +
  C(178, 58, 9) + nose(178, 58, 9, -90) + L('190,64 232,70') + L('176,68 156,60', 'fx-b fx-t') + water(0, 240, 60, 70),
  '0 0 240 130');

photo('fotoPlisen', 'plisen-nohou.jpg', 'Rozmočená, popraskaná a olupující se kůže mezi prsty na noze', 'Foto: Falloonb, Wikimedia Commons — volné dílo');
photo('fotoEkzem', 'ekzem.jpg', 'Předloktí dítěte se zarudlou, suchou a rozškrábanou vyrážkou', 'Foto: Eisfelder, Wikimedia Commons — CC BY-SA 3.0');
photo('fotoNehty', 'plisen-nehtu.jpg', 'Zažloutlý, ztluštělý a rozpadající se nehet palce na noze', 'Foto: James Heilman, MD, Wikimedia Commons — CC BY-SA 3.0');
photo('fotoRautek', 'rautek.png', 'Zachránce stojí za postiženým, provléká paže pod jeho rameny a drží ho za předloktí', 'Ilustrace: Baedr-9439, Wikimedia Commons — CC0');

window.FIG = FIG;
})();
