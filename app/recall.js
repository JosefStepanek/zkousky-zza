/* Kartičky „Vybav si“ — volné vybavení výčtů, postupů a čísel.
   q = zadání, a = položky odpovědi (v pořadí, pokud na něm záleží), ord = záleží na pořadí. */
window.RC = [
  { id: 'r01', c: 'zakon', q: 'Definice zotavovací akce — tři podmínky', a: ['30 a více dětí', 've věku do 15 let', 'na dobu delší než 5 dnů'], src: 'Skripta s. 3' },
  { id: 'r02', c: 'zakon', q: 'Ohlášení akce hygieně — kdy a jaké 4 údaje', a: ['1 měsíc před zahájením', 'termín a místo', 'počet dětí', 'zabezpečení pitnou vodou', 'zajištění stravování'], src: 'Skripta s. 3' },
  { id: 'r03', c: 'zakon', q: 'Lhůty v dokumentaci — posudek, bezinfekčnost, kontakt s infekcí, archivace', a: ['posudek o zdravotní způsobilosti platí 2 roky', 'prohlášení o bezinfekčnosti nesmí být starší než 1 den', 'bez kontaktu s infekcí 14 kalendářních dnů před odjezdem', 'archivace dokumentace 6 měsíců'], src: 'Skripta s. 3–5' },
  { id: 'r04', c: 'zakon', q: 'Přílohy vyhlášky 106/2001 Sb. č. 1–4', a: ['1 — potraviny a příprava pokrmů', '2 — náplň kurzu první pomoci', '3 — vzor posudku o zdravotní způsobilosti dítěte', '4 — minimální vybavení lékárničky'], ord: true, src: 'Skripta s. 4' },
  { id: 'r05', c: 'zakon', q: 'Hygienické počty z vyhlášky', a: ['2,5 m² na dítě ve stavbách', 'umyvadlo 1 na 5 dětí', 'sprcha 1 na 30 dětí', 'záchod 1 na 15 dětí', 'lůžko na ošetřovně a izolaci 1 na 30 dětí', 'patrová lůžka od 7 let'], src: 'Vyhláška 106/2001 Sb. § 3–4' },
  { id: 'r06', c: 'zakon', q: 'Režim dne — spánek, odpočinek, koupání, zimní akce', a: ['spánek nejméně 9 h do 10 let včetně', 'spánek nejméně 8 h u starších', '3. den odpočinek po soustavné zátěži v prvních 2 dnech', 'koupání nejdříve 1 h po hlavním jídle', 'zimní akce max. 6 h výcviku denně'], src: 'Vyhláška 106/2001 Sb. § 8' },
  { id: 'r07', c: 'zakon', q: 'Kurz ZZA podle přílohy č. 2 — rozsah', a: ['39 hodin celkem', '20 hodin teorie', '19 hodin praxe', '7 tematických okruhů'], src: 'Příloha č. 2' },

  { id: 'r10', c: 'povinnosti', q: 'Co musí obsahovat každý zápis ve zdravotnickém deníku', a: ['datum', 'čas', 'jméno ošetřovaného', 'popis obtíží', 'závěr zdravotníka', 'léčebný postup vč. odeslání k lékaři / ZZS', 'podpis zdravotníka'], src: 'Skripta s. 5' },
  { id: 'r11', c: 'povinnosti', q: 'Doklady a věci, které zdravotník přebírá při odjezdu', a: ['průkaz zdravotní pojišťovny', 'posudek praktického lékaře', 'prohlášení o bezinfekčnosti', 'chronické léky vč. dávkování'], src: 'Skripta s. 5' },
  { id: 'r12', c: 'povinnosti', q: 'Zásady zdravotnické etiky', a: ['chápavé a vstřícné chování', 'rozhodnost a důslednost', 'klid a rozvaha', 'povinnost mlčenlivosti', 'spolehlivost', 'bezpečnost'], src: 'Skripta s. 6' },

  { id: 'r20', c: 'hygiena', q: 'Čtyři stadia infekčního onemocnění', a: ['inkubační doba', 'prodromální stadium', 'klinická manifestace', 'rekonvalescence'], ord: true, src: 'Skripta s. 9' },
  { id: 'r21', c: 'hygiena', q: 'Hygienické požadavky na denní režim ve třech bodech', a: ['vyvážení délky činností a odpočinku', 'pravidelnost činností', 'zařazení činností do vhodné denní doby (biorytmus)'], src: 'Skripta s. 8' },

  { id: 'r30', c: 'lekarna', q: 'Lékárnička I. — léčivé přípravky podle aktuální přílohy č. 4 (10 položek)', a: ['proti teplotě a bolestem', 'proti nevolnosti při jízdě', 'při průjmu', 'proti kašli', 'kloktadlo', 'oční kapky / mast a oční voda', 'mast nebo gel při poštípání hmyzem', 'tablety při systémové alergii', 'dezinfekce kůže a povrchových ran', 'inertní mast nebo vazelína'], src: 'Příloha č. 4' },
  { id: 'r31', c: 'lekarna', q: 'Lékové formy — rozluštěte zkratky CPS, TBL, GTT, PLV, SIR, UNG, SUPP, INH', a: ['CPS kapsle', 'TBL tablety', 'GTT kapky', 'PLV prášek', 'SIR sirup', 'UNG mast', 'SUPP čípky', 'INH inhalačně'], src: 'Skripta s. 10' },
  { id: 'r32', c: 'lekarna', q: 'Nástup účinku podle způsobu podání', a: ['ústy (p.o.) — do půl hodiny', 'konečníkem (p.r.) — asi 15 minut', 'do svalu (i.m.) — do 10 minut, Epipen', 'do žíly (i.v.) — do 1 minuty'], src: 'Skripta s. 10 · ČČK Praha 1, s. 6' },

  { id: 'r40', c: 'nemoci', q: 'Teplotní tabulka — co dělat v jakém pásmu', a: ['37,0–37,9 °C: bez léků, klid, pitný režim', '38,0–38,9 °C: léky', 'nad 39,0 °C: léky a ochlazovat', 'nad 40,0 °C: okamžitě lékař'], ord: true, src: 'ČČK Praha 1, s. 5' },
  { id: 'r41', c: 'nemoci', q: 'Klíště — čtyři kroky', a: ['vyviklat, vytočit, vytrhnout', 'dezinfekce', 'záznam do deníku', 'sledování místa'], ord: true, src: 'ČČK Praha 1, s. 10 · skripta s. 14' },

  { id: 'r50', c: 'zaklady', q: 'Postup na místě události — 7 bodů', a: ['co se stalo a kde?', 'nejsem v nebezpečí?', 'co budu dělat?', 'koho mám k dispozici?', 'co mám k dispozici?', 'zajištění místa', 'přivolání si pomoci'], ord: true, src: 'Skripta s. 12' },
  { id: 'r51', c: 'zaklady', q: 'Prvotní vyšetření — 4 body', a: ['stav vědomí', 'dýchání', 'krevní oběh', 'masivní krvácení'], ord: true, src: 'Skripta s. 12' },
  { id: 'r52', c: 'zaklady', q: 'Pravidlo START — 4 kategorie a cíl', a: ['neodkladná pomoc', 'odložitelná pomoc', 'lehké stavy', 'netransportovatelné', 'cíl: zachránit co nejvíce osob v co nejkratší době'], src: 'Skripta s. 13' },
  { id: 'r53', c: 'zaklady', q: 'Čísla IZS', a: ['150 hasiči', '155 záchranná služba', '158 policie', '156 městská policie', '112 evropské tísňové číslo'], src: 'Skripta s. 11' },

  { id: 'r60', c: 'rany', q: 'Rány podle vzniku — 5 typů', a: ['řezné', 'bodné', 'sečné', 'střelné', 'tržně zhmožděné'], src: 'Skripta s. 13–14' },
  { id: 'r61', c: 'rany', q: 'Základní toaleta rány', a: ['oplach vodou', 'dezinfekce', 'sterilní krytí', 'sešití (sutura)'], ord: true, src: 'Skripta s. 14' },
  { id: 'r62', c: 'rany', q: 'Zásady u ran a krvácení', a: ['nikdy nevytahovat předmět z rány', 'co nejčistší (sterilní) krytí', 'tamponáda, tlakový obvaz', 'zaškrcení jako poslední možnost (ne u amputace)', 'do rány žádné masti, léky, zásypy', 'nic p.o.', 'protišoková poloha a opatření', 'chránit sebe — rukavice'], src: 'Skripta s. 16' },
  { id: 'r63', c: 'rany', q: 'Krvácení z nosu podle skript — 5 kroků', a: ['posadit a předklonit hlavu', 'zmáčknout nosní skořepy', 'chladit čelo, nos, krk', 'přední tamponáda', 'protišoková opatření'], src: 'Skripta s. 15' },
  { id: 'r64', c: 'rany', q: 'Obvazy podle funkce', a: ['krycí', 'tlakové', 'znehybňující', 'tahové (extenční)', 'korekční'], src: 'Skripta s. 17' },

  { id: 'r70', c: 'kosti', q: 'Krevní ztráty při zlomeninách', a: ['pánev 5 l', 'stehenní kost 3 l', 'pažní kost 1 l', 'bérec 1 l', 'předloktí 0,5 l', 'žebro 100 ml'], src: 'Skripta s. 20' },
  { id: 'r71', c: 'kosti', q: 'Zlomeniny — první pomoc', a: ['správná fixace je nejdůležitější', 'fixovat mezi dvěma klouby', 'repozice jen odborník', 'sledovat prokrvení', 'sundat prstýnky a náramky', 'sterilní krytí u otevřené', 'minimální manipulace', 'protišoková opatření'], src: 'Skripta s. 19' },
  { id: 'r72', c: 'kosti', q: 'Tři typy nitrolebního krvácení a čím se liší', a: ['epidurální — tepenné, dvoufázové bezvědomí', 'subdurální — žilní, nejčastější, pomalý rozvoj', 'subarachnoideální — meningeální dráždění, ztuhlá šíje'], src: 'Skripta s. 32–33' },
  { id: 'r73', c: 'kosti', q: 'Tři typy pneumotoraxu', a: ['uzavřený — jednorázový vstup vzduchu', 'otevřený — stálá komunikace s okolím', 'ventilový (tenzní) — vzduch dovnitř, ne ven'], src: 'Skripta s. 27' },

  { id: 'r80', c: 'stavy', q: 'Postup při bezvědomí — 7 kroků', a: ['oslovení', 'bolestivý podnět', 'záklon hlavy', 'předsunutí čelisti a kontrola dutiny ústní', 'zhodnocení životních funkcí', 'přivolání pomoci 155', 'dýchá × nedýchá'], ord: true, src: 'Skripta s. 26' },
  { id: 'r81', c: 'stavy', q: 'Fáze šoku a druhy šoku', a: ['kompenzovaný', 'dekompenzovaný — kombinace, která zabíjí', 'ireverzibilní', 'druhy: hypovolemický, kardiogenní, obstrukční'], src: 'Skripta s. 26' },
  { id: 'r82', c: 'stavy', q: 'Pravidlo 5T', a: ['teplo', 'ticho', 'tekutiny (tlumení žízně)', 'tlumení bolesti', 'transport'], src: 'Skripta s. 27' },
  { id: 'r83', c: 'stavy', q: 'Epilepsie — co nikdy nedělat', a: ['nebránit křečím zalehnutím', 'nerozevírat čelisti, nevsouvat předměty do úst', 'nevytahovat jazyk', 'neprobouzet', 'nepřipínat jazyk'], src: 'Skripta s. 24' },
  { id: 'r84', c: 'stavy', q: 'Hypoglykemie × hyperglykemie — příznaky', a: ['hypo: hlad, bledost, opocenost, bezvědomí', 'hyper: žízeň, teplá kůže, dech po acetonu', 'PP: cukr / sladký nápoj', 'v bezvědomí: Glukagon, vypnout pumpu'], src: 'Skripta s. 25' },
  { id: 'r85', c: 'stavy', q: 'Zánět hrtanu u dítěte — věk, příznaky, první pomoc', a: ['život ohrožující do 8 let', 'štěkavý kašel hlavně v noci', 'dítě se nenechá položit', 'chlad, cucat led či zmrzlinu', 'Rectodelt'], src: 'Skripta s. 23' },
  { id: 'r86', c: 'stavy', q: 'Vdechnutí cizího tělesa — postup', a: ['povzbudit ke kašli', '5 úderů mezi lopatky', 'Heimlichův manévr dle věku', 'KPR při bezvědomí'], ord: true, src: 'Skripta s. 23' },

  { id: 'r90', c: 'prostredi', q: 'Poleptání uvnitř těla — víme × nevíme kdy', a: ['víme kdy: vypít co nejvíce vody, vyvolat zvracení, aktivní uhlí', 'nevíme kdy: nic p.o., nevyvolávat zvracení', 'vždy: poradit se se ZZS / TIS', 'vždy: zajistit nádobu a etiketu'], src: 'Skripta s. 29' },
  { id: 'r91', c: 'prostredi', q: 'Popáleniny — stupně a první pomoc', a: ['I. zarudnutí, II. puchýře, III. nekróza', 'chladit tekoucí vodou I. a II. st.', 'sterilní krytí u III. st.', 'žádné masti, nestrhávat oděv, sundat šperky, nic p.o.', 'ČČK: 10–20 min, voda nad 15 °C'], src: 'Skripta s. 29 · ČČK příručka' },
  { id: 'r92', c: 'prostredi', q: 'Stadia otravy alkoholem', a: ['1. zčervenání, ztráta zábran, euforie', '2. poruchy rovnováhy a koordinace', '3. zmatenost, poruchy vědomí, zvracení s rizikem aspirace', '4. zástava dechu a oběhu'], ord: true, src: 'Skripta s. 30' },

  { id: 'r95', c: 'voda', q: 'Stupně záchrany tonoucího (od nejbezpečnějšího)', a: ['slovem ze břehu', 'házecí pomůcka', 'dosažením ze břehu', 'pomocí plavidla', 'dosažením z mělčiny', 'osobní zásah — oběť při vědomí', 'osobní zásah — bezvědomí s pomůckou', 'osobní zásah — bezvědomí bez pomůcek'], ord: true, src: 'ČČK Praha 1, s. 20' },
  { id: 'r96', c: 'voda', q: 'Rozpoznání tonoucího — 4 stavy', a: ['plavec', 'vyčerpaný plavec', 'aktivní tonoucí — paže do stran, nemůže volat', 'pasivní tonoucí — bez pohybu, nedýchá'], ord: true, src: 'ČČK Praha 1, s. 19' },

  { id: 'r100', c: 'kpr', q: 'KPR podle věku — poměr, hloubka, frekvence, zahájení', a: ['dospělý 30 : 2, hloubka 5–6 cm', 'dítě 15 : 2, 1/3 hrudníku, 5 vdechů', 'novorozenec 3 : 1, 1/3 hrudníku, 5 vdechů, nezaklánět', 'frekvence 100–120/min'], src: 'Skripta s. 34–35' },
  { id: 'r101', c: 'kpr', q: 'Kdy KPR nezahajujeme a jak dlouho resuscitujeme', a: ['nezahajujeme: zranění neslučitelné se životem', 'nezahajujeme: jasné známky smrti', 'nezahajujeme: hrozí naše zranění', 'resuscitujeme: do obnovení funkcí', 'resuscitujeme: do příjezdu ZZS', 'resuscitujeme: do vyčerpání'], src: 'Skripta s. 35' },
  { id: 'r102', c: 'kpr', q: 'Chyby při KPR — 7 bodů', a: ['nekvalitní dýchání, gasping', 'přerušení kompresí na déle než 10 s', 'nedostatečná / velká hloubka', 'nesprávná frekvence', 'nepřivolání pomoci', 'nezaklonit hlavu', 'nezahájení KPR'], src: 'Skripta s. 36' },
  { id: 'r103', c: 'kpr', q: 'ABCD a DEFGHI', a: ['A — Airway', 'B — Breathing', 'C — Circulation', 'D — Defibrilation', 'D — Drugs, E — ECG, F — Fibrillation treatment', 'G — Gauging, H — Human mentation, I — Intensive care'], ord: true, src: 'Skripta s. 34' }
];
