/* Banka otázek 1/3 — Zákony, Zdravotník a dokumentace, Hygiena, Lékárnička
   Primární zdroj: skripta Zdravotníci s.r.o. (podle nich se zkouší).
   alt = novější / odlišný postup, note = ruční poznámka z kurzu. */
window.QB = window.QB || [];
window.QB.push(

/* ───────────────────────── 1. ZÁKONY A VYHLÁŠKA ───────────────────────── */
{
  id: 'zak01', c: 'zakon',
  q: 'Co je podle zákona č. 258/2000 Sb. zotavovací akce?',
  o: [
    'Organizovaný pobyt 30 a více dětí ve věku do 15 let na dobu delší než 5 dnů',
    'Organizovaný pobyt 15 a více dětí ve věku do 18 let na dobu delší než 3 dny',
    'Jakýkoliv pobyt dětí mimo domov s ubytováním a stravováním',
    'Organizovaný pobyt 30 a více dětí ve věku do 18 let na dobu delší než 7 dnů'
  ], a: [0],
  why: 'Definice má tři podmínky a musí platit všechny současně: 30 a více dětí, věk do 15 let, doba delší než 5 dnů. Účelem je posílit zdraví dětí, zvýšit tělesnou zdatnost, popřípadě získat specifické znalosti nebo dovednosti.',
  src: 'Skripta s. 3 · § 8 odst. 1 zák. 258/2000 Sb.'
},
{
  id: 'zak02', c: 'zakon',
  q: 'Tábor má 25 dětí a trvá 7 dnů. O jaký typ akce jde?',
  o: [
    'Jiná podobná akce pro děti podle § 12',
    'Zotavovací akce — doba je delší než 5 dnů',
    'Výchovně rekreační tábor',
    'Škola v přírodě'
  ], a: [0],
  why: 'Nesplňuje-li akce počet dětí NEBO dobu trvání, jde o „jinou podobnou akci“. Pořadatel pak musí zajistit jen hygienicky nezávadný stav zařízení, zásobování pitnou vodou a účast pouze zdravotně způsobilých osob.',
  src: '§ 12 zák. 258/2000 Sb. · ČČK Praha 1, s. 3',
  note: 'Pořadatel může akci dobrovolně vést jako zotavovací akci — pak pro ni platí stejná pravidla.'
},
{
  id: 'zak03', c: 'zakon',
  q: 'Akce se účastní mladiství ve věku 15–18 let. Jaký režim platí?',
  o: [
    'Jde o výchovně rekreační tábor a platí stejné podmínky jako pro zotavovací akci',
    'Nevztahují se na ni žádné hygienické předpisy',
    'Platí jen ustanovení o pitné vodě',
    'Musí být ohlášena 3 měsíce předem'
  ], a: [0],
  why: 'Podle § 11a se za zotavovací akci považuje i výchovně rekreační tábor pro děti, a to i tehdy, účastní-li se ho mladiství. Vztahují se na něj § 8 až 11.',
  src: '§ 11a zák. 258/2000 Sb.'
},
{
  id: 'zak04', c: 'zakon',
  q: 'S jakým předstihem se zotavovací akce ohlašuje orgánu ochrany veřejného zdraví?',
  o: ['Jeden měsíc před zahájením', 'Dva týdny před zahájením', 'Tři měsíce před zahájením', 'Nejpozději v den zahájení'],
  a: [0],
  why: 'Ohlašovací povinnost má pořádající osoba (u školy v přírodě vysílající škola) jeden měsíc před zahájením akce.',
  src: 'Skripta s. 3 · § 8 odst. 3 zák. 258/2000 Sb.'
},
{
  id: 'zak05', c: 'zakon', m: true,
  q: 'Co všechno se uvádí v ohlášení zotavovací akce hygienické stanici? (více odpovědí)',
  o: [
    'Termín a místo konání',
    'Počet zúčastněných dětí',
    'Způsob zabezpečení pitnou vodou',
    'Způsob zajištění stravování',
    'Jmenný seznam všech dětí',
    'Kopie posudků o zdravotní způsobilosti'
  ], a: [0, 1, 2, 3],
  why: 'Ohlašují se čtyři údaje: termín a místo, počet dětí, zabezpečení pitnou vodou a zajištění stravování. Jmenné seznamy ani posudky se hygieně předem neposílají — ty vede zdravotník na akci.',
  src: 'Skripta s. 3 · § 8 odst. 3 zák. 258/2000 Sb.'
},
{
  id: 'zak06', c: 'zakon',
  q: 'Tábor bere vodu z vlastní studny. Co se přikládá k ohlášení akce?',
  o: [
    'Protokol o kráceném rozboru jakosti pitné vody, ne starší než 3 měsíce',
    'Protokol o rozboru vody, ne starší než 1 rok',
    'Čestné prohlášení majitele pozemku',
    'Nic navíc, stačí uvést zdroj vody'
  ], a: [0],
  why: 'Není-li voda zajištěna registrovaným provozovatelem vodovodu, předkládá pořádající osoba protokol o kráceném rozboru jakosti pitné vody. Protokol nesmí být starší než 3 měsíce.',
  src: '§ 8 odst. 4 zák. 258/2000 Sb.'
},
{
  id: 'zak07', c: 'zakon',
  q: 'Jak dlouho platí posudek o zdravotní způsobilosti dítěte k účasti na zotavovací akci?',
  o: [
    'Dva roky od data vystavení, pokud nedošlo ke změně zdravotní způsobilosti',
    'Jeden rok od data vystavení',
    'Šest měsíců od data vystavení',
    'Platí jen pro jednu konkrétní akci'
  ], a: [0],
  why: 'Posudek platí dva roky od vystavení — ale jen pokud během té doby nedošlo ke změně zdravotní způsobilosti dítěte. Změna platnost ruší bez ohledu na datum.',
  src: 'Skripta s. 3 · § 9 odst. 3 zák. 258/2000 Sb.'
},
{
  id: 'zak08', c: 'zakon',
  q: 'Kdo posuzuje a vydává posudek o zdravotní způsobilosti dítěte?',
  o: [
    'Registrující poskytovatel v oboru praktické lékařství pro děti a dorost',
    'Kterýkoliv lékař, kterého si rodina vybere',
    'Zdravotník zotavovací akce',
    'Hygienická stanice'
  ], a: [0],
  why: 'Posudek vydává registrující dětský praktický lékař. Uvádí v něm také, zda se dítě podrobilo pravidelným očkováním, je proti nákaze imunní nebo má trvalou kontraindikaci.',
  src: '§ 9 odst. 3 zák. 258/2000 Sb.',
  note: 'Ke kontrole se hodí okopírovaný očkovací průkaz — hlavně kvůli tetanu.'
},
{
  id: 'zak09', c: 'zakon',
  q: 'Prohlášení zákonného zástupce o bezinfekčnosti — jak staré smí být?',
  o: [
    'Nesmí být starší než jeden den',
    'Nesmí být starší než tři dny',
    'Nesmí být starší než čtrnáct dní',
    'Nesmí být starší než jeden měsíc'
  ], a: [0],
  why: 'Bezinfekčnost potvrzuje zákonný zástupce písemným prohlášením, které nesmí být starší než jeden den. Proto se vybírá až při odjezdu, ne dopředu.',
  src: '§ 9 odst. 3 zák. 258/2000 Sb.',
  note: 'Formuláře mít 2×: posudek lékaře a čestné prohlášení.'
},
{
  id: 'zak10', c: 'zakon',
  q: 'Za jak dlouhou dobu před odjezdem nesmělo dítě přijít do styku s infekčním onemocněním?',
  o: [
    'Ve 14 kalendářních dnech před odjezdem',
    'V 7 dnech před odjezdem',
    'V 21 dnech před odjezdem',
    'V měsíci před odjezdem'
  ], a: [0],
  why: 'Dítě nesmělo ve 14 kalendářních dnech před odjezdem přijít do styku s osobou nemocnou infekčním onemocněním nebo podezřelou z nákazy, ani mu nesmí být nařízeno karanténní opatření.',
  src: 'Skripta s. 3 · § 9 odst. 1 písm. c) zák. 258/2000 Sb.'
},
{
  id: 'zak11', c: 'zakon',
  q: 'Jak dlouho se po skončení akce uchovává zdravotnický deník a další dokumentace?',
  o: ['6 měsíců od skončení akce', '1 rok od skončení akce', '3 měsíce od skončení akce', '5 let od skončení akce'],
  a: [0],
  why: 'Zákonná lhůta je 6 měsíců od skončení zotavovací akce nebo školy v přírodě. Týká se deníku, seznamu účastníků, prohlášení o bezinfekčnosti a výpisů z posudků.',
  src: 'Skripta s. 5 · § 11 odst. 1 písm. e) zák. 258/2000 Sb.',
  note: 'Lektor doporučuje raději až rok — 6 měsíců je zákonné minimum, ne strop.'
},
{
  id: 'zak12', c: 'zakon', m: true,
  q: 'Kdo může na zotavovací akci vykonávat funkci zdravotníka? (více odpovědí)',
  o: [
    'Lékař, zubní lékař, všeobecná sestra, porodní asistentka, zdravotnický záchranář nebo zdravotnický asistent',
    'Kdo absolvoval kurz první pomoci se zaměřením na zdravotnickou činnost při ZA nebo škole v přírodě',
    'Student lékařství po úspěšném ukončení třetího ročníku',
    'Kdokoliv starší 18 let se zájmem o první pomoc',
    'Student střední zdravotnické školy v prvním ročníku'
  ], a: [0, 1, 2],
  why: 'Zákon vyjmenovává tři skupiny způsobilých osob. Absolvování kurzu ZZA je tedy plnohodnotná cesta vedle zdravotnického vzdělání — náplň kurzu určuje příloha č. 2 vyhlášky 106/2001 Sb.',
  src: 'Skripta s. 4 · § 11 odst. 1 písm. a) zák. 258/2000 Sb.'
},
{
  id: 'zak13', c: 'zakon',
  q: 'Jak dlouho denně musí být zdravotník po dobu akce dosažitelný?',
  o: [
    '24 hodin denně po celou dobu konání akce',
    'Pouze v ordinačních hodinách vyhrazených v režimu dne',
    'Od budíčku do večerky',
    'Minimálně 12 hodin denně'
  ], a: [0],
  why: 'Zákon žádá dosažitelnost 24 hodin denně po celou dobu akce. Ordinační hodiny jsou vyhrazený čas, kdy je zdravotník jistě na ošetřovně — nejsou omezením jeho dosažitelnosti.',
  src: '§ 11 odst. 1 písm. b) zák. 258/2000 Sb. · skripta s. 5'
},
{
  id: 'zak14', c: 'zakon',
  q: 'Vzdaluje-li se zdravotník z prostoru akce, co musí udělat?',
  o: [
    'Informovat vedoucího tábora, kde se bude nacházet',
    'Nic, stačí mít u sebe telefon',
    'Požádat o souhlas hygienickou stanici',
    'Zapsat to do zdravotnického deníku'
  ], a: [0],
  why: 'Vždy musí být jasné, kde zdravotník je a jak je dosažitelný. Informuje vedoucího akce.',
  src: 'Skripta s. 5'
},
{
  id: 'zak15', c: 'zakon',
  q: 'Co upravuje vyhláška č. 106/2001 Sb.?',
  o: [
    'Hygienické požadavky na zotavovací akce pro děti',
    'Poskytování zdravotnické záchranné služby',
    'Náležitosti zdravotnické dokumentace ve zdravotnických zařízeních',
    'Podmínky výkonu činností epidemiologicky závažných'
  ], a: [0],
  why: 'Vyhláška 106/2001 Sb. Ministerstva zdravotnictví upravuje umístění, prostorové podmínky, vybavení, ubytování, osvětlení, úklid, zásobování vodou, odstraňování odpadů, stravování a režim dne. Poslední velká změna: vyhláška 422/2013 Sb.',
  src: 'Skripta s. 4'
},
{
  id: 'zak16', c: 'zakon',
  q: 'Co obsahuje příloha č. 4 vyhlášky 106/2001 Sb.?',
  o: [
    'Minimální rozsah vybavení lékárničky',
    'Náplň kurzu první pomoci pro zdravotníka',
    'Vzor posudku o zdravotní způsobilosti dítěte',
    'Podmínky pro podávání a použití některých potravin'
  ], a: [0],
  why: 'Přílohy vyhlášky: č. 1 potraviny a příprava pokrmů, č. 2 náplň kurzu první pomoci, č. 3 vzor posudku o zdravotní způsobilosti dítěte, č. 4 minimální rozsah vybavení lékárničky.',
  src: 'Skripta s. 4'
},
{
  id: 'zak17', c: 'zakon',
  q: 'Jaký je celkový rozsah kurzu zdravotníka zotavovacích akcí podle přílohy č. 2?',
  o: [
    '39 hodin — 20 hodin teorie a 19 hodin praxe',
    '40 hodin — 20 hodin teorie a 20 hodin praxe',
    '30 hodin — 15 hodin teorie a 15 hodin praxe',
    '50 hodin — 30 hodin teorie a 20 hodin praxe'
  ], a: [0],
  why: 'Sedm tematických okruhů: stavba a funkce lidského těla (3 h), první pomoc teorie (10 h), první pomoc praxe (16 h), péče o nemocné (4 h), zdravotnická dokumentace (1 h), práva a povinnosti zdravotníka (3 h), hygiena a epidemiologie (4 h).',
  src: 'Příloha č. 2 vyhlášky 106/2001 Sb.'
},
{
  id: 'zak18', c: 'zakon',
  q: 'Jaká je minimální plocha na jedno ubytované dítě ve stavbách?',
  o: ['2,5 m²', '4 m²', '1,5 m²', '5 m²'], a: [0],
  why: 'Prostory ve stavbách musí být suché, s přirozeným větráním a osvětlením, plocha na jedno ubytované dítě nejméně 2,5 m². Ve stavbách i stanech musí zbýt místo na osobní věci a pohyb mezi lůžky.',
  src: '§ 3 odst. 2 vyhlášky 106/2001 Sb.'
},
{
  id: 'zak19', c: 'zakon', m: true,
  q: 'Které hygienické počty odpovídají vyhlášce? (více odpovědí)',
  o: [
    'Jedno umyvadlo nebo výtokový kohout na 5 dětí',
    'Jedna sprchová růžice na 30 dětí',
    'Jeden záchod na 15 dětí',
    'Jedno lůžko na ošetřovně a izolaci na 30 dětí',
    'Jedno umyvadlo na 10 dětí',
    'Jeden záchod na 30 dětí'
  ], a: [0, 1, 2, 3],
  why: 'Umyvadlo 1 : 5, sprcha 1 : 30, záchod 1 : 15, lůžko na ošetřovně 1 : 30. Na všech akcích musí být možnost koupání nebo osprchování v teplé vodě alespoň jednou za týden.',
  src: '§ 3 vyhlášky 106/2001 Sb.'
},
{
  id: 'zak20', c: 'zakon', m: true,
  q: 'Co platí pro ošetřovnu a izolaci ve stavbách? (více odpovědí)',
  o: [
    'Zřizují se v samostatných místnostech s umyvadlem s tekoucí pitnou vodou',
    'Izolace musí mít svůj vlastní záchod s možností mytí rukou',
    'Ani ošetřovna, ani izolace nesmějí být vybaveny patrovými lůžky',
    'Zdravotník se ubytuje v bezprostřední blízkosti ošetřovny s izolací',
    'Ošetřovna může zároveň sloužit jako sklad materiálu',
    'Izolace se zřizuje až při výskytu infekčního onemocnění'
  ], a: [0, 1, 2, 3],
  why: 'Ošetřovna ani izolace nesmějí být použity k jiným účelům. Léky a zdravotnická dokumentace musí být zajištěny tak, aby k nim neměly přístup děti ani nepovolané osoby — tedy uzamykatelná skříň.',
  src: '§ 3 odst. 6 a § 4 odst. 1 vyhlášky 106/2001 Sb.'
},
{
  id: 'zak21', c: 'zakon',
  q: 'Od kolika let věku lze pro děti použít patrová lůžka?',
  o: ['Od 7 let věku', 'Od 6 let věku', 'Od 10 let věku', 'Od 12 let věku'], a: [0],
  why: 'Patrová lůžka lze použít pro děti od 7 let. Horní lůžko musí být bezpečně přístupné, vybavené zábranou proti pádu a nepropustnou podložkou pod matrací.',
  src: '§ 4 odst. 2 vyhlášky 106/2001 Sb.'
},
{
  id: 'zak22', c: 'zakon',
  q: 'Kolik hodin spánku musí režim dne vyhradit dětem do 10 let včetně?',
  o: ['Nejméně 9 hodin', 'Nejméně 11 hodin', 'Nejméně 8 hodin', 'Nejméně 10 hodin'], a: [0],
  why: 'Vyhláška stanoví nejméně 9 hodin pro děti do 10 let včetně a nejméně 8 hodin pro děti starší. V režimu dne musí být pevně vymezena doba pro spánek, osobní hygienu a stravování.',
  src: '§ 8 odst. 1 vyhlášky 106/2001 Sb.',
  alt: {
    t: 'Pozor na rozpor ve skriptech',
    x: 'Skripta uvádějí v kapitole Denní režim, že „školáci by měli spát 11 hodin, mladiství 9 hodin“. To je obecné hygienické doporučení o potřebě spánku, ne norma pro režim dne. Ptají-li se na režim dne na zotavovací akci, platí čísla z vyhlášky: 9 hodin do 10 let včetně, 8 hodin pro starší.'
  }
},
{
  id: 'zak23', c: 'zakon',
  q: 'Kdy musí být na zotavovací akci třetí den vyhrazen odpočinku?',
  o: [
    'Byla-li v prvních dvou dnech soustavná fyzická zátěž dětí',
    'Vždy, protože v týdenním biorytmu třetí den klesá výkonnost',
    'Jen na putovních akcích',
    'Jen na zimních akcích'
  ], a: [0],
  why: 'Vyhláška váže povinný odpočinkový den na podmínku: při soustavné fyzické zátěži v prvních dvou dnech musí být třetí den vyhrazen odpočinku. Na putovní akci se den odpočinku stanoví s přihlédnutím k tělesné zdatnosti a aktuálnímu zdravotnímu stavu dětí.',
  src: '§ 8 odst. 2 vyhlášky 106/2001 Sb.',
  alt: {
    t: 'Odlišné odůvodnění v jiných skriptech',
    x: 'Skripta ČČK Praha 1 uvádějí, že se v týdenním biorytmu každý třetí den snižuje výkonnost, a proto je třetí den odpočinkový. Vyhláška takové bezpodmínečné pravidlo nezná — váže ho na předchozí zátěž.'
  }
},
{
  id: 'zak24', c: 'zakon',
  q: 'Za jak dlouho po hlavním jídle se děti smějí koupat?',
  o: [
    'Nejdříve 1 hodinu po hlavním jídle nebo po intenzivním cvičení',
    'Nejdříve 30 minut po jídle',
    'Nejdříve 2 hodiny po jídle',
    'Vyhláška to neřeší'
  ], a: [0],
  why: 'Koupání musí být přizpůsobeno počasí, fyzické zdatnosti a plaveckým schopnostem dětí, smí probíhat jen za dohledu osoby schopné poskytnout záchranu tonoucímu, a nejdříve hodinu po hlavním jídle nebo intenzivním cvičení.',
  src: '§ 8 odst. 4 vyhlášky 106/2001 Sb.'
},
{
  id: 'zak25', c: 'zakon',
  q: 'Jakou nejzávažnější pravomoc má pracovník státního zdravotního dozoru na táboře?',
  o: [
    'Může zotavovací akci ukončit',
    'Může odvolat vedoucího akce',
    'Může uložit pokutu až do výše 1 milionu korun',
    'Může nařídit karanténu celého okresu'
  ], a: [0],
  why: 'Pracovníci státního zdravotního dozoru se prokazují služebním průkazem, mohou vstupovat do všech provozů a staveb, pořizovat zápisy, žádat předložení dokumentace, provádět měření, ukládat nápravná opatření, sankce a pokuty — a mají pravomoc zotavovací akci ukončit.',
  src: 'Skripta s. 7'
},
{
  id: 'zak26', c: 'zakon',
  q: 'Jaká je trestní sazba za neposkytnutí první pomoci?',
  o: [
    '1–3 roky odnětí svobody podle § 150 trestního zákoníku',
    'Pouze pokuta do 50 000 Kč',
    '5–10 let odnětí svobody',
    'Neposkytnutí první pomoci není trestné'
  ], a: [0],
  why: 'Povinnost poskytnout první pomoc má každý občan ČR — je to povinnost morální i zákonná. Trestný čin neposkytnutí pomoci upravuje § 150 zákona č. 40/2009 Sb.',
  src: 'Skripta s. 11'
},
{
  id: 'zak27', c: 'zakon',
  q: 'Komu se po skončení akce vracejí posudky o zdravotní způsobilosti?',
  o: [
    'Zákonným zástupcům dětí a fyzickým osobám činným při akci',
    'Hygienické stanici',
    'Lékaři, který je vystavil',
    'Nevracejí se, archivují se 6 měsíců'
  ], a: [0],
  why: 'Posudky se vracejí, protože platí dva roky a rodina je může použít znovu. Archivuje se zdravotnický deník, seznam účastníků, prohlášení o bezinfekčnosti a výpisy z posudků — ne posudky samotné.',
  src: 'Skripta s. 4 · § 11 odst. 1 písm. c) zák. 258/2000 Sb.'
},
{
  id: 'zak28', c: 'zakon',
  q: 'Jaká je při zimní zotavovací akci maximální denní doba výcviku či soustavné fyzické zátěže?',
  o: ['6 hodin denně', '4 hodiny denně', '8 hodin denně', 'Není stanovena'], a: [0],
  why: 'Při zimních zotavovacích akcích nesmí výcvik nebo jiná soustavná fyzická zátěž dětí přesáhnout 6 hodin denně.',
  src: '§ 8 odst. 5 vyhlášky 106/2001 Sb.'
},

/* ─────────────────── 2. ZDRAVOTNÍK A DOKUMENTACE ─────────────────── */
{
  id: 'pov01', c: 'povinnosti', m: true,
  q: 'Co dělá zdravotník před odjezdem na akci? (více odpovědí)',
  o: [
    'Vyžádá si jmenný seznam dětí a zkontroluje zdravotní doklady',
    'Zkontroluje, zda byl kontaktován místní praktický lékař',
    'Doplní a zkontroluje lékárnu včetně expirací',
    'Zjistí, kde je nejbližší pohotovost a nemocnice',
    'Vyplní za rodiče prohlášení o bezinfekčnosti',
    'Ohlásí akci hygienické stanici'
  ], a: [0, 1, 2, 3],
  why: 'Bezinfekčnost vyplňuje a podepisuje zákonný zástupce, ne zdravotník. Akci ohlašuje pořádající osoba, ne zdravotník — ten se ale podílí na sestavování jídelníčku a režimu dne.',
  src: 'Skripta s. 5 · ČČK Praha 1, s. 3',
  note: 'Kontaktovat pediatra, ne praktika pro dospělé. Vyplatí se předem znát „rizikové děti“.'
},
{
  id: 'pov02', c: 'povinnosti', m: true,
  q: 'Které doklady přebírá zdravotník při odjezdu? (více odpovědí)',
  o: [
    'Průkazy zdravotní pojišťovny (u zahraniční cesty i evropský průkaz)',
    'Posudek praktického lékaře o zdravotní způsobilosti',
    'Prohlášení zákonného zástupce o bezinfekčnosti',
    'Chronické léky dětí včetně dávkování',
    'Rodné listy dětí',
    'Vysvědčení dětí'
  ], a: [0, 1, 2, 3],
  why: 'Od ostatních dospělých navíc bezinfekčnosti, potvrzení o zdravotní způsobilosti pro práci s dětmi a u kuchyně potravinářské průkazy.',
  src: 'Skripta s. 5 · ČČK Praha 1, s. 4',
  note: 'Bezinfekčnost vybírat až v den odjezdu — nesmí být starší než jeden den.'
},
{
  id: 'pov03', c: 'povinnosti',
  q: 'Co je zdravotnický filtr?',
  o: [
    'Kontrola aktuálního zdravotního stavu dětí, kterou zdravotník provede po příjezdu na místo',
    'Filtrace pitné vody na ošetřovně',
    'Seznam dětí s chronickým onemocněním',
    'Sítko proti hmyzu v okně izolace'
  ], a: [0],
  why: 'Po příjezdu zdravotník běžně zkontroluje aktuální stav dětí, provede rychlou kontrolu hygienických podmínek ubytování a zkontroluje stav ošetřovny a izolace.',
  src: 'Skripta s. 5 · ČČK Praha 1, s. 3'
},
{
  id: 'pov04', c: 'povinnosti', m: true,
  q: 'Co musí obsahovat každý záznam ve zdravotnickém deníku? (více odpovědí)',
  o: [
    'Datum a čas',
    'Jméno ošetřovaného',
    'Popis obtíží a závěr učiněný zdravotníkem',
    'Léčebný postup včetně odeslání k lékaři či přivolání ZZS',
    'Podpis zdravotníka',
    'Diagnózu podle mezinárodní klasifikace nemocí'
  ], a: [0, 1, 2, 3, 4],
  why: 'Zdravotník nestanovuje diagnózu — zaznamenává obtíže, svůj závěr a co provedl. Z dokumentace musí být jasné, co bylo dítěti podáno, kdy a kolik, přesně. Každé ošetření = nový řádek. Raději zapsat více než méně.',
  src: 'Skripta s. 5 · ČČK Praha 1, s. 4',
  note: 'K podpisu se hodí razítko. Užitečné je vést jedno dítě = jedna složka.'
},
{
  id: 'pov05', c: 'povinnosti',
  q: 'Jaký je rozdíl mezi ošetřovnou a izolací?',
  o: [
    'Na ošetřovně jsou uloženy léky a vyšetřuje se tam; na izolaci léky nejsou a zdravotník tam nebydlí',
    'Izolace je pro úrazy, ošetřovna pro infekční nemoci',
    'Je to totéž, jen jiný název',
    'Na izolaci se ošetřuje, na ošetřovně se jen spí'
  ], a: [0],
  why: 'Ošetřovna je prostor, kam přicházejí děti se zdravotními problémy, jsou vyšetřeny a ošetřeny, a kde jsou uloženy léky. Izolace je prostor, kde je pacient oddělen od ostatních dětí a má klid — léky tam nejsou a zdravotník tam nebydlí.',
  src: 'ČČK Praha 1, s. 3 · skripta s. 5'
},
{
  id: 'pov06', c: 'povinnosti',
  q: 'Kam se na ošetřovně ukládají léky a zdravotnická dokumentace?',
  o: [
    'Do uzamykatelné skříně, aby k nim neměly přístup nepovolané osoby',
    'Na volně přístupnou polici, aby byly rychle po ruce',
    'Do batohu zdravotníka',
    'Ke kuchaři do skladu potravin'
  ], a: [0],
  why: 'Vyhláška žádá, aby léky a zdravotnická dokumentace byly zajištěny tak, aby k nim neměly přístup děti ani jiné nepovolané osoby.',
  src: 'Skripta s. 5 · § 3 odst. 6 vyhlášky 106/2001 Sb.'
},
{
  id: 'pov07', c: 'povinnosti', m: true,
  q: 'Co zdravotník udělá na konci a po skončení akce? (více odpovědí)',
  o: [
    'Pořídí výpisy ze zdravotnické dokumentace pro rodiče',
    'Oznámí rodičům možný kontakt dítěte s infekcí (například klíště)',
    'Předá případné lékařské zprávy, pokud bylo dítě ošetřeno lékařem',
    'Zajistí vrácení posudků od lékaře',
    'Archivuje zdravotnickou dokumentaci nejméně 6 měsíců',
    'Nahlásí všechna ošetření hygienické stanici'
  ], a: [0, 1, 2, 3, 4],
  why: 'Hygieně se ošetření nehlásí. Hlásí se hromadný výskyt infekčního onemocnění, a to po dohodě s praktickým lékařem.',
  src: 'Skripta s. 5 · ČČK Praha 1, s. 3'
},
{
  id: 'pov08', c: 'povinnosti', m: true,
  q: 'Na co dohlíží zdravotník v průběhu akce? (více odpovědí)',
  o: [
    'Na čistotu a hygienu dětí',
    'Na přípravu stravy a její složení',
    'Aby byly děti zatěžovány přiměřeně věku a zdravotnímu stavu',
    'Na koupání',
    'Na kázeň a dodržování táborového řádu',
    'Na hospodaření tábora'
  ], a: [0, 1, 2, 3],
  why: 'Zdravotník se účastní porad s vedoucími, kde kontroluje a koriguje denní režim, podílí se na dohledu při přípravě jídelníčku (strava má být bohatá a pestrá) a je k dispozici pro ošetření akutních stavů.',
  src: 'Skripta s. 5'
},
{
  id: 'pov09', c: 'povinnosti', m: true,
  q: 'Co patří k zásadám zdravotnické etiky? (více odpovědí)',
  o: [
    'Chápavé a vstřícné chování',
    'Rozhodnost a důslednost',
    'Klid a rozvaha',
    'Povinnost mlčenlivosti',
    'Spolehlivost a bezpečnost',
    'Přísnost a odstup od pacienta'
  ], a: [0, 1, 2, 3, 4],
  why: 'Každý, kdo vykonává zdravotnickou činnost, musí mít nejen odbornou kvalifikaci, ale i dodržovat zdravotnickou etiku. U dětí platí navíc, že léčíme celého člověka, nejen tělo — spousta obtíží má psychický původ.',
  src: 'Skripta s. 6 · ČČK Praha 1, s. 5'
},
{
  id: 'pov10', c: 'povinnosti', m: true,
  q: 'Co patří do péče o nemocné dítě na ošetřovně? (více odpovědí)',
  o: [
    'Sledování stavu nemocného a kontrola fyziologických funkcí',
    'Sledování stavu vědomí a měření tělesné teploty',
    'Sledování příjmu a výdeje tekutin',
    'Péče o nemocného na lůžku a úprava lůžka',
    'Osobní hygiena a čisté spodní prádlo',
    'Samostatná změna dávkování léků předepsaných lékařem'
  ], a: [0, 1, 2, 3, 4],
  why: 'Zdravotník dodržuje ordinace lékaře — nemění je. Podává léčiva podle ordinace nebo volně prodejné přípravky podle jejich příbalové informace.',
  src: 'Skripta s. 6–7'
},
{
  id: 'pov11', c: 'povinnosti', m: true,
  q: 'Jaká opatření se přijímají při hromadném výskytu infekčního onemocnění? (více odpovědí)',
  o: [
    'Prohlídka dětí a oddělení zdravých od nemocných',
    'Izolace nemocných včetně odděleného mytí a WC',
    'Oddělit a dezinfikovat nádobí',
    'Informovat praktického lékaře',
    'Prověřit, zda není zdrojem nákazy stravovací provoz',
    'Okamžitě ukončit akci a poslat děti domů'
  ], a: [0, 1, 2, 3, 4],
  why: 'Ukončit akci může orgán ochrany veřejného zdraví — není to první krok zdravotníka. Nemocné se sestěhují dohromady, aby se nákaza nešířila dál.',
  src: 'ČČK Praha 1, s. 16'
},
{
  id: 'pov12', c: 'povinnosti',
  q: 'Co je zdravotnický deník?',
  o: [
    'Základní zdravotnický dokument na ošetřovně, do kterého se zapisují všechny výkony a ošetření',
    'Denní hlášení pro vedoucího tábora',
    'Seznam léků v lékárničce',
    'Kniha návštěv na ošetřovně'
  ], a: [0],
  why: 'Vedení zdravotnického deníku a seznamu účastníků je zákonnou povinností školy nebo pořádající osoby; prakticky ho vede zdravotník.',
  src: 'Skripta s. 5'
},

/* ───────────────── 3. HYGIENA A EPIDEMIOLOGIE ───────────────── */
{
  id: 'hyg01', c: 'hygiena',
  q: 'Čím se zabývá epidemiologie?',
  o: [
    'Výskytem infekčních i neinfekčních onemocnění, šířením nákaz a opatřeními proti jejich vzniku a šíření',
    'Vztahy mezi člověkem a prostředím a zdravým způsobem života',
    'Léčbou infekčních onemocnění antibiotiky',
    'Rozborem pitné vody'
  ], a: [0],
  why: 'Hygiena pojednává o vztazích mezi člověkem a prostředím — je to nauka o zdravém způsobu života. Epidemiologie se zabývá výskytem onemocnění a šířením nákaz. Cílem obou je předcházet vzniku onemocnění a poruchám zdraví.',
  src: 'Skripta s. 7'
},
{
  id: 'hyg02', c: 'hygiena',
  q: 'Seřaďte správně čtyři stadia infekčního onemocnění. Co následuje po inkubační době?',
  o: [
    'Prodromální stadium',
    'Klinická manifestace',
    'Rekonvalescence',
    'Karanténa'
  ], a: [0],
  why: 'Inkubační doba (od vniknutí mikroba do objevení prvních příznaků) → prodromální stadium (neurčité příznaky, ze kterých nelze stanovit diagnózu: horečka, spavost, bolesti) → klinická manifestace (charakteristické příznaky) → rekonvalescence (příznaky mizí, ale organismus je oslaben).',
  src: 'Skripta s. 9'
},
{
  id: 'hyg03', c: 'hygiena',
  q: 'Ve kterém stadiu infekčního onemocnění nelze ještě stanovit diagnózu?',
  o: ['V prodromálním stadiu', 'V inkubační době', 'Při klinické manifestaci', 'V rekonvalescenci'], a: [0],
  why: 'Prodromální stadium se projevuje neurčitými příznaky — horečka, spavost, bolesti — které samy o sobě diagnózu neurčí. Na táboře je to nejčastější stav, se kterým dítě přijde na ošetřovnu.',
  src: 'Skripta s. 9'
},
{
  id: 'hyg04', c: 'hygiena',
  q: 'Nákaza přenesená kontaminovanými hračkami, nádobím nebo potravinami je přenos:',
  o: ['Nepřímý', 'Přímý', 'Vertikální', 'Vzdušný'], a: [0],
  why: 'Přímý přenos je kontakt kožního nebo sliznicového povrchu, kapénkové vmetení, pokousání, poranění či škrábnutí. Nepřímý přenos je kontaminovaným předmětem, potravinami, krví nebo prachem.',
  src: 'Skripta s. 9',
  note: 'Na táboře je nejtypičtější nepřímý přenos nádobím — proto se při výskytu infekce nádobí odděluje a dezinfikuje.'
},
{
  id: 'hyg05', c: 'hygiena',
  q: 'Které opatření patří mezi nejúčinnější v boji proti infekčním nemocem?',
  o: ['Očkování', 'Dezinfekce podlah', 'Izolace nemocných', 'Podávání vitaminů'], a: [0],
  why: 'Vnímavost člověka vůči nákaze je individuální — ovlivňuje ji věk, pohlaví, genetické vlivy, současné onemocnění, psychické faktory (stres, vyčerpání) i pracovní prostředí. Mezi nejúčinnější opatření patří očkování.',
  src: 'Skripta s. 9'
},
{
  id: 'hyg06', c: 'hygiena',
  q: 'Jaký je rozdíl mezi dezinfekcí a sterilizací?',
  o: [
    'Dezinfekce zneškodňuje mikroorganismy a přerušuje cestu nákazy; sterilizace využívá vysoké teploty, páru nebo plyny',
    'Dezinfekce se používá jen na kůži, sterilizace jen na nástroje',
    'Sterilizace je slabší forma dezinfekce',
    'Jsou to synonyma'
  ], a: [0],
  why: 'Dezinfekce zneškodňuje mikroorganismy fyzikálními a chemickými postupy, aby přerušila cestu nákazy. Provádí se v místech s velkou frekvencí a koncentrací osob — tábory, ubytovny, stravovací služby.',
  src: 'Skripta s. 9–10'
},
{
  id: 'hyg07', c: 'hygiena', m: true,
  q: 'Jaké zásady platí pro práci s dezinfekčními prostředky? (více odpovědí)',
  o: [
    'Vždy se řídit návodem výrobce — koncentrace a doba působení',
    'Dezinfekce je vhodné střídat',
    'Prostředky mezi sebou nemícháme',
    'Rozlišovat dezinfekci na velké plochy, na nábytek a na předměty',
    'Čím vyšší koncentrace, tím lépe',
    'Stačí jeden univerzální přípravek na vše'
  ], a: [0, 1, 2, 3],
  why: 'Vyšší koncentrace není účinnější — je jen agresivnější ke kůži a materiálu. Rozhodující je předepsaná koncentrace a hlavně dodržení doby působení.',
  src: 'Skripta s. 9–10'
},
{
  id: 'hyg08', c: 'hygiena',
  q: 'Jak se správně myjí ruce?',
  o: [
    'Vlažnou vodou a mýdlem, důkladně ze všech stran včetně zápěstí, se zvláštní pozorností nehtům',
    'Horkou vodou bez mýdla, aby se nepoškodil kožní film',
    'Studenou vodou a dezinfekcí, mýdlo není třeba',
    'Stačí opláchnout dlaně'
  ], a: [0],
  why: 'Zdravá kůže chrání tělo před poškozením zvenčí a funguje jako ochranná bariéra. Na povrchu ji doplňuje kožní film z kožního mazu, který brání pronikání vody a jiných tekutin. Mytím se odstraňuje znehodnocená kožní vrstva.',
  src: 'Skripta s. 7'
},
{
  id: 'hyg09', c: 'hygiena', m: true,
  q: 'Na které body osobní hygieny se u dětí na táboře dohlíží především? (více odpovědí)',
  o: [
    'Mytí rukou po použití záchodu a před jídlem',
    'Pravidelné čištění zubů nejméně ráno a večer',
    'Koupání alespoň 1× týdně',
    'Výměna spodního prádla a ponožek, nošení suchého oblečení a obuvi',
    'Větrání lůžkovin a hygienické uložení osobních věcí',
    'Denní holení'
  ], a: [0, 1, 2, 3, 4],
  why: 'Kontroluje se také, zda si děti neukládají ve stanech a v zavazadlech jídlo, které snadno podléhá zkáze, a zda si dostatečně myjí osobní jídelní nádobí před jídlem i po něm.',
  src: 'ČČK Praha 1, s. 16'
},
{
  id: 'hyg10', c: 'hygiena', m: true,
  q: 'Jaké jsou tři hygienické požadavky na denní režim? (více odpovědí)',
  o: [
    'Vyvážení délky činností a odpočinku',
    'Pravidelnost činností (usínání × probouzení, příjem stravy)',
    'Zařazení činností do vhodné denní doby podle biologického rytmu těla',
    'Maximální možné zaplnění dne programem',
    'Stejný program pro všechny věkové kategorie'
  ], a: [0, 1, 2],
  why: 'Vyvážením délky činností a odpočinku se zabraňuje přetěžování a únavě dětí. Denní režim má odpovídat věku a zdravotnímu stavu.',
  src: 'Skripta s. 8'
},
{
  id: 'hyg11', c: 'hygiena',
  q: 'V jakém teplotním rozmezí se uchovávají pokrmy podle zlatých pravidel stravování?',
  o: [
    'V teplém stavu kolem 60 °C, nebo ve studeném stavu pod 10 °C',
    'V teplém stavu kolem 40 °C, nebo ve studeném pod 15 °C',
    'Vždy při pokojové teplotě',
    'V teplém stavu nad 80 °C, nebo ve studeném pod 0 °C'
  ], a: [0],
  why: 'Mezi 10 a 60 °C se bakterie množí nejrychleji. Proto se čerstvě vyrobené pokrmy nesmí skladovat a ohřívat, a jednou uvařená potravina se před opakovanou konzumací musí důkladně ohřát.',
  src: 'ČČK Praha 1, s. 15 · skripta s. 9'
},
{
  id: 'hyg12', c: 'hygiena', m: true,
  q: 'Co se na zotavovací akci nesmí podávat? (více odpovědí)',
  o: [
    'Pokrmy z tepelně neopracovaných vajec',
    'Pokrmy ze syrového masa',
    'Pokrmy z tepelně opracovaných vajec',
    'Ovoce a zeleninu'
  ], a: [0, 1],
  why: 'Za kvalitu a nezávadnost stravy ručí provozovatel. Každá provozovna stravovacích služeb musí mít vypracovaný provozní řád s postupy, složením a alergeny, schválený orgánem ochrany veřejného zdraví; všichni pracovníci ho stvrzují podpisem.',
  src: 'Skripta s. 9'
},
{
  id: 'hyg13', c: 'hygiena',
  q: 'Co musí mít osoba, která na táboře provozuje stravovací služby?',
  o: [
    'Zdravotní průkaz pracovníka v potravinářství a zdravotní způsobilost',
    'Vysokoškolské vzdělání v oboru výživy',
    'Živnostenský list na hostinskou činnost',
    'Osvědčení zdravotníka zotavovacích akcí'
  ], a: [0],
  why: 'Hygienické požadavky na stravovací služby stanoví vyhláška MZ ČR č. 137/2004 Sb. Zdravotník zdravotní průkazy kontroluje — je to jedna z jeho povinností při převzetí dokladů.',
  src: 'Skripta s. 8'
},
{
  id: 'hyg14', c: 'hygiena',
  q: 'Kolik jídel denně musí být dětem na zotavovací akci zajištěno?',
  o: [
    'Pět — snídaně, přesnídávka, oběd, svačina a večeře',
    'Tři — snídaně, oběd a večeře',
    'Čtyři — snídaně, oběd, svačina a večeře',
    'Vyhláška počet jídel nestanoví'
  ], a: [0],
  why: 'Součástí snídaně musí být teplý nápoj a jedno z hlavních jídel musí být teplé. Nápoje musí být k dispozici po celý den. Při výdeji lze sloučit snídani s přesnídávkou a oběd se svačinou. Na sestavování jídelního lístku se podílí zdravotník.',
  src: '§ 7 odst. 5 vyhlášky 106/2001 Sb. · skripta s. 8'
},
{
  id: 'hyg15', c: 'hygiena', m: true,
  q: 'Které z následujících patří mezi doporučení o výživě ze skript? (více odpovědí)',
  o: [
    'Strava má být pestrá, používat rostlinné oleje',
    'Mléčné výrobky s nízkým obsahem tuků, omezit uzeniny, více jíst ryby',
    'Omezit solení, dostatek ovoce a zeleniny',
    'Dávat přednost celozrnnému pečivu',
    'Dostatek tekutin a nealkoholického pití',
    'Bohatší večeře než snídaně'
  ], a: [0, 1, 2, 3, 4],
  why: 'Režim stravování je opačný: bohatší snídaně a oběd, večeře lehká a málo objemná. Je-li to možné, stravovat se 5× denně s intervaly ne delšími než 3 hodiny.',
  src: 'Skripta s. 8'
},
{
  id: 'hyg16', c: 'hygiena',
  q: 'Čeho se děti na táboře nesmějí účastnit v rámci denního úklidu?',
  o: ['Úklidu záchodů', 'Zametání ubytovacích prostor', 'Sběru odpadků v areálu', 'Úklidu jídelny'], a: [0],
  why: 'Denního úklidu se děti mohou účastnit pod vedením osob činných při akci — s výslovnou výjimkou úklidu záchodů.',
  src: '§ 4 odst. 5 vyhlášky 106/2001 Sb.'
},
{
  id: 'hyg17', c: 'hygiena',
  q: 'Jak se děti mohou podílet na přípravě stravy?',
  o: [
    'Jen před tepelným zpracováním a při pomocných pracích; na akci do 50 účastníků na celé přípravě pod dozorem',
    'Vůbec, příprava stravy je dětem zakázána',
    'Bez omezení, pokud mají čisté ruce',
    'Jen pokud mají potravinářský průkaz'
  ], a: [0],
  why: 'Zdravotní stav dětí, které se podílejí na přípravě stravy, musí posoudit zdravotník. Na akci do 50 účastníků se děti mohou podílet i na celé přípravě a výdeji, jsou-li pod dozorem osoby činné při stravování.',
  src: '§ 7 odst. 7 vyhlášky 106/2001 Sb.'
},

/* ─────────────────── 4. LÉKÁRNIČKA A LÉKY ─────────────────── */
{
  id: 'lek01', c: 'lekarna',
  q: 'Na kolik částí je členěn minimální rozsah vybavení lékárničky podle přílohy č. 4?',
  o: [
    'Tři — I. léčivé přípravky, II. obvazový a jiný zdravotnický materiál, III. různé',
    'Dvě — léky a obvazový materiál',
    'Čtyři — léky, obvazy, nástroje a dokumentace',
    'Není členěn, je to jeden seznam'
  ], a: [0],
  why: 'Z léčivých přípravků smí lékárnička obsahovat pouze ty, jejichž výdej není vázán na lékařský předpis.',
  src: 'Skripta s. 6 · příloha č. 4 vyhlášky 106/2001 Sb.'
},
{
  id: 'lek02', c: 'lekarna', m: true,
  q: 'Které léčivé přípravky vyhláška v lékárničce vyžaduje, ale seznam ve skriptech je neuvádí? (více odpovědí)',
  o: [
    'Přípravky proti teplotě a bolestem (antipyretika, analgetika)',
    'Přípravky k užití při průjmu',
    'Přípravky proti kašli (antitusika, expektorancia)',
    'Tablety proti nevolnosti při jízdě (antiemetika)',
    'Kloktadlo pro dezinfekci dutiny ústní',
    'Inertní mast nebo vazelína'
  ], a: [0, 1, 2],
  why: 'Tištěný seznam ve skriptech reprodukuje starší nebo zkrácenou verzi přílohy. Aktuální znění přílohy č. 4 vyhlášky 106/2001 Sb. obsahuje navíc přípravky proti teplotě a bolestem, při průjmu a proti kašli. Pro zkoušku je autoritativní znění vyhlášky.',
  src: 'Příloha č. 4 vyhlášky 106/2001 Sb. · skripta s. 6',
  note: 'Ruční doplněk v jejích skriptech to potvrzuje: „+ 2 léky na teploty, + na kašel, + na průjem“.'
},
{
  id: 'lek03', c: 'lekarna',
  q: 'Kynedryl je příkladem které skupiny?',
  o: ['Antiemetika — proti nevolnosti při jízdě dopravním prostředkem', 'Antitusika — proti kašli', 'Antihistaminika — proti alergii', 'Analgetika — proti bolesti'],
  a: [0],
  why: 'Antiemetika se podávají preventivně před cestou. Pozor, Kynedryl je tlumivý — u dětí často způsobí spavost.',
  src: 'Skripta s. 6 · ČČK Praha 1, s. 14'
},
{
  id: 'lek04', c: 'lekarna',
  q: 'Fenistil gel je v lékárničce zařazen jako:',
  o: [
    'Lokální antihistaminikum — mast nebo gel při poštípání hmyzem',
    'Celkové antihistaminikum při systémové alergické reakci',
    'Přípravek k dezinfekci kůže',
    'Inertní mast'
  ], a: [0],
  why: 'Lokální antihistaminikum se nanáší na místo vpichu. Při systémové alergické reakci se podávají celková antihistaminika v tabletách — Analergin, Zyrtec, Zodac, Xyzal.',
  src: 'Skripta s. 6 · ČČK Praha 1, s. 14'
},
{
  id: 'lek05', c: 'lekarna',
  q: 'Který přípravek se v lékárničce používá k výplachu očí?',
  o: ['Borová voda / oční voda na výplach očí', 'Peroxid vodíku', 'Betadine', 'Fyziologický roztok s adrenalinem'], a: [0],
  why: 'Do lékárničky patří oční kapky nebo oční mast s dezinfekčním účinkem a oční voda na výplach očí (oftalmologika). Výplach oka se provádí velkým množstvím vody, nejméně 10 minut, od vnitřního koutku k vnějšímu.',
  src: 'Skripta s. 6 · ČČK Praha 1, s. 6'
},
{
  id: 'lek06', c: 'lekarna',
  q: 'Jaký přípravek k dezinfekci kůže a povrchových ran uvádějí skripta?',
  o: ['Detol a peroxid vodíku', 'Betadine a Jodisol', 'Líh 96 %', 'Chlornan sodný'], a: [0],
  why: 'Vyhláška požaduje jen obecně „přípravek k dezinfekci kůže a povrchových ran“ — konkrétní značka je na zdravotníkovi.',
  src: 'Skripta s. 6',
  note: 'Ruční poznámka z kurzu: nekupovat jodové dezinfekce.',
  alt: {
    t: 'Jiné doporučení v jiných skriptech',
    x: 'Skripta ČČK Praha 1 doporučují u téže položky Betadine a Jodisol, tedy jodové přípravky. Poznámka z kurzu jde proti tomu — jod má omezení u dětí, u alergiků a u poruch štítné žlázy a barví ránu, takže se hůř hodnotí její vzhled. U dětské akce je bezpečnější nejodová dezinfekce.'
  }
},
{
  id: 'lek07', c: 'lekarna',
  q: 'Jaké rozměry má mít škrtící pryžové obinadlo podle skript?',
  o: ['60 × 1250 mm', '45 × 550 mm', '100 × 2000 mm', '30 × 800 mm'], a: [0],
  why: 'Šířka je podstatná: škrtidlo musí být dostatečně široké, aby netlačilo v úzkém pruhu. Minimální šířka improvizovaného zaškrcovadla je 5 cm.',
  src: 'Skripta s. 6'
},
{
  id: 'lek08', c: 'lekarna',
  q: 'Jaký tvar má šátkový obvaz?',
  o: ['Rovnoramenného trojúhelníku', 'Rovnostranného trojúhelníku', 'Čtverce', 'Obdélníku 45 × 55 cm'], a: [0],
  why: 'Šátkové obvazy patří k nejčastěji používaným v první pomoci, hlavně pro závěs horní končetiny. Dají se kombinovat ke krytí ran, fixacím, podpůrným účelům i kompresím.',
  src: 'Skripta s. 18'
},
{
  id: 'lek09', c: 'lekarna',
  q: 'Co znamená zkratka SUPP na obalu léku?',
  o: ['Čípky', 'Sirup', 'Kapsle', 'Prášek'], a: [0],
  why: 'Lékové formy: CPS kapsle, TBL tablety, GTT kapky, PLV prášek, SIR sirup, UNG mast, OPH oční, DG dražé, SUPP čípky, INH inhalačně, NAS nosní.',
  src: 'Skripta s. 10'
},
{
  id: 'lek10', c: 'lekarna',
  q: 'Co znamená zkratka GTT?',
  o: ['Kapky', 'Mast', 'Dražé', 'Sirup'], a: [0],
  why: 'GTT = guttae, kapky. Pozor na záměnu s GLY (glykemie) v záznamu o vyšetření.',
  src: 'Skripta s. 10'
},
{
  id: 'lek11', c: 'lekarna',
  q: 'Co znamená zkratka p.r. u způsobu podání?',
  o: ['Perrektálně — do konečníku', 'Perorálně — ústy', 'Parenterálně — mimo trávicí trakt', 'Pod jazyk'], a: [0],
  why: 'p.o. perorálně (ústy), s.l. sublinguálně (pod jazyk), p.r. perrektálně (do konečníku), s.c. subkutánně (pod kůži), i.m. intramuskulárně (do svalu), i.v. intravenózně (do žíly), i.a. intraarteriálně (do tepny), i.o. intraoseálně (do kosti).',
  src: 'Skripta s. 10'
},
{
  id: 'lek12', c: 'lekarna',
  q: 'Za jak dlouho nastupuje účinek léku podaného ústy?',
  o: ['Zhruba do půl hodiny', 'Do 5 minut', 'Do 2 hodin', 'Okamžitě'], a: [0],
  why: 'Lék podaný konečníkem účinkuje asi za 15 minut, do svalu do 10 minut (proto Epipen i.m.), do žíly do 1 minuty. Rozdíl v rychlosti je důvod, proč se u zvracejícího dítěte volí čípek.',
  src: 'Skripta s. 10 · ČČK Praha 1, s. 6'
},
{
  id: 'lek13', c: 'lekarna', m: true,
  q: 'Co platí pro podávání léků ústy? (více odpovědí)',
  o: [
    'Nápoj připravit předem',
    'Zkontrolovat, že dítě lék skutečně požilo',
    'Potahované tablety nepůlit',
    'U antibiotik dodržet intervaly podání a kúru dobrat',
    'Tabletu vždy rozdrtit, aby se lépe polykala',
    'Léky podávat nalačno, aby rychleji účinkovaly'
  ], a: [0, 1, 2, 3],
  why: 'Potahovaná vrstva chrání žaludeční sliznici nebo zajišťuje postupné uvolňování — rozpůlením se účinek změní. Vždy je nutné prostudovat příbalový leták a dát pozor na záměny.',
  src: 'ČČK Praha 1, s. 6'
},
{
  id: 'lek14', c: 'lekarna',
  q: 'Které léčivo proti bolesti a teplotě se nepodává dětem?',
  o: [
    'Kyselina acetylsalicylová (Acylpyrin, Anopyrin)',
    'Paracetamol (Paralen, Panadol)',
    'Ibuprofen (Ibalgin, Nurofen)',
    'Žádné omezení neexistuje'
  ], a: [0],
  why: 'Pro děti se používá paracetamol nebo ibuprofen. Kyselina acetylsalicylová se dětem nepodává (riziko Reyova syndromu).',
  src: 'ČČK Praha 1, s. 14',
  note: 'Do lékárny na dětskou akci patří dva různé léky na teplotu, aby se dala účinná látka střídat.'
},
{
  id: 'lek15', c: 'lekarna',
  q: 'Od kolika let věku děti obvykle zvládnou kloktání?',
  o: ['Asi od 6 let', 'Asi od 3 let', 'Asi od 10 let', 'Od 15 let'], a: [0],
  why: 'Kloktá se se záklonem hlavy. Mladším dětem se místo kloktadla podávají spreje nebo pastilky.',
  src: 'ČČK Praha 1, s. 6'
},
{
  id: 'lek16', c: 'lekarna',
  q: 'Jaká je správná technika použití inhalátoru?',
  o: [
    'Vydechnout, při stlačení inhalátoru pomalu nadechnout a zadržet dech asi na 10 sekund',
    'Nadechnout, stlačit inhalátor a rychle vydechnout',
    'Stlačit inhalátor do vzduchu a pak se nadechnout',
    'Zadržet dech, stlačit inhalátor a pak vydechnout'
  ], a: [0],
  why: 'Zadržení dechu umožní, aby se aerosol usadil v dýchacích cestách místo aby byl hned vydechnut. Špatná technika je nejčastější důvod, proč inhalátor u dítěte „nefunguje“.',
  src: 'ČČK Praha 1, s. 6'
},
{
  id: 'lek17', c: 'lekarna',
  q: 'Jak se provádí výplach oka?',
  o: [
    'Velkým množstvím vody, nejméně 10 minut, od vnitřního koutku k vnějšímu',
    'Malým množstvím dezinfekce, od vnějšího koutku k vnitřnímu',
    'Peroxidem vodíku po dobu 1 minuty',
    'Suchou sterilní gázou bez tekutiny'
  ], a: [0],
  why: 'Směr od vnitřního koutku ven brání zanesení látky do druhého oka a do slzných cest. Důležitá je čistota — umýt ruce před i po, a dítěti zakázat mnout si oči.',
  src: 'ČČK Praha 1, s. 6 · ČČK příručka'
},
{
  id: 'lek18', c: 'lekarna', m: true,
  q: 'Které reakce jsou důvodem okamžitě zastavit podávání léku? (více odpovědí)',
  o: [
    'Svědění a vyrážka',
    'Otoky',
    'Slzení',
    'Dechové obtíže',
    'Mírná ospalost po antiemetiku',
    'Hořká chuť léku'
  ], a: [0, 1, 2, 3],
  why: 'Jde o příznaky alergické reakce, jejíž nejtěžší fází je anafylaktický šok. Při jejich objevení se podávání léku zastavuje a dítě se sleduje.',
  src: 'ČČK Praha 1, s. 6'
},
{
  id: 'lek19', c: 'lekarna',
  q: 'Jak se aplikují masti a krémy?',
  o: [
    'Rovnoměrně a v tenké vrstvě, ne holou rukou, a nevracet zpět do obalu',
    'Silnou vrstvou, aby účinek trval déle',
    'Vždy holou rukou, aby se mast zahřála',
    'Pod neprodyšný obvaz'
  ], a: [0],
  why: 'Bez rozhodnutí lékaře lze použít jen naprosto běžné masti. Zásadně nelze, zvláště u dětí, používat masti s obsahem kortikoidů — o léčbě těmi rozhoduje výhradně lékař.',
  src: 'ČČK Praha 1, s. 6 · ČČK příručka, s. 162'
},
{
  id: 'lek20', c: 'lekarna',
  q: 'Jaký je léčebný účinek tepla a chladu?',
  o: [
    'Teplo rozšiřuje cévy a uvolňuje, chlad zužuje cévy, snižuje otok a místně znecitlivuje',
    'Teplo zužuje cévy, chlad je rozšiřuje',
    'Obojí působí stejně, liší se jen příjemností',
    'Teplo se používá u úrazů, chlad u zánětů'
  ], a: [0],
  why: 'Teplé obklady se přikládají například při kašli na hrudník nebo na bolavé svalstvo po pochodu — ale nikdy na břicho při podezření na zánět v dutině břišní. Chlad se používá u úrazů a otoků.',
  src: 'ČČK Praha 1, s. 6 · ČČK příručka, s. 162'
},
{
  id: 'lek21', c: 'lekarna',
  q: 'Jak se skládá Priessnitzův obklad?',
  o: [
    'Studená mokrá vrstva, igelit, teplá suchá vrstva',
    'Suchá vrstva, igelit, studená mokrá vrstva',
    'Jen studená mokrá vrstva ponechaná volně',
    'Teplá mokrá vrstva a suchý obvaz'
  ], a: [0],
  why: 'Vlažný Priessnitzův zábal na krk účinně zmírňuje bolesti při angíně. Je použitelný na všechny části těla, žádáme-li uklidňující účinek.',
  src: 'ČČK Praha 1, s. 6',
  alt: {
    t: 'Novější doporučení ČČK',
    x: 'Příručka ČČK (2017) výslovně varuje: mezi vrstvy nevkládáme plastikovou fólii, byť tak bývá doporučováno — přílišné zapaření poškozuje kůži. Doporučuje tedy vlhkou textilii překrýt jen suchou textilií, původně vlněnou.'
  }
},
{
  id: 'lek22', c: 'lekarna',
  q: 'Co znamená údaj o expiraci na léku?',
  o: [
    'Maximální dobu použitelnosti léčiva',
    'Datum výroby',
    'Datum, kdy byl lék zakoupen',
    'Doporučenou dobu podávání'
  ], a: [0],
  why: 'Kontrola expirací je součástí doplnění lékárny před odjezdem. Prošlé léky se vyřazují a odevzdávají v lékárně.',
  src: 'Skripta s. 10'
},
{
  id: 'lek23', c: 'lekarna',
  q: 'Antitusika a expektorancia — v čem se liší jejich použití?',
  o: [
    'Antitusika tlumí suchý dráždivý kašel, expektorancia a mukolytika usnadňují vykašlávání u vlhkého produktivního kašle',
    'Antitusika se používají u vlhkého kašle, expektorancia u suchého',
    'Je to totéž, jen jiné názvy',
    'Antitusika jsou pro děti, expektorancia pro dospělé'
  ], a: [0],
  why: 'Suchý dráždivý kašel se zastavuje (Stoptussin, Sinecod), vlhký produktivní se naopak podporuje a hlen se ředí (ACC, Ambrobene, Mucosolvan) — k tomu dostatek tekutin, ale ne mléko. Přípravky na ředění hlenu se nepodávají před spaním.',
  src: 'ČČK Praha 1, s. 9 a 14 · skripta s. 10'
},
{
  id: 'lek24', c: 'lekarna',
  q: 'Která skupina léků stavuje krvácení?',
  o: ['Hemostatika', 'Antikoagulancia', 'Hypnotika', 'Diuretika'], a: [0],
  why: 'Antikoagulancia naopak snižují srážlivost krve. Hypnotika navozují spánek, diuretika odvodňují organismus.',
  src: 'Skripta s. 10'
},
{
  id: 'lek25', c: 'lekarna',
  q: 'Která skupina léků rozšiřuje průdušky?',
  o: ['Bronchodilatancia', 'Mukolytika', 'Antitusika', 'Kardiotonika'], a: [0],
  why: 'Bronchodilatancia jsou účinnou látkou astmatických inhalátorů (Berotec, Ventolin). Mukolytika rozpouštějí hlen, kardiotonika zvyšují stažlivost srdce.',
  src: 'Skripta s. 10'
},
{
  id: 'lek26', c: 'lekarna', m: true,
  q: 'Které z těchto zdravotnických pomůcek příloha č. 4 vyžaduje? (více odpovědí)',
  o: [
    'Rouška resuscitační',
    'Pinzeta anatomická a pinzeta chirurgická rovná',
    'Lékařské rukavice pryžové',
    'Rouška PVC 45 × 55 cm',
    'Teploměr lékařský',
    'Tlakoměr a fonendoskop'
  ], a: [0, 1, 2, 3, 4],
  why: 'Tlakoměr ani fonendoskop příloha nevyžaduje. Ve III. skupině „Různé“ jsou nůžky, zavírací špendlíky různých velikostí, záznamník s tužkou a svítilna/baterka včetně zdroje.',
  src: 'Příloha č. 4 vyhlášky 106/2001 Sb. · skripta s. 6',
  note: 'Doporučení z kurzu: nitrilové rukavice ve 2–3 baleních místo pryžových, bezrtuťový teploměr, čelovka a resuscitační rouška 2×.'
}

);
