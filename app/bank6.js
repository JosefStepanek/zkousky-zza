/* Banka otázek 6 — obrázky podle příručky ČČK (2017) a skript ČČK Praha 1:
   resuscitace, polohy, rány a obvazy, znehybnění, transport, tonutí, vyrážky. */
window.QB = window.QB || [];
window.QB.push(

/* ─────────────── Resuscitace ─────────────── */
{
  id: 'obr27', c: 'kpr', ofig: ['aedOk', 'aedStred', 'aedBricho'],
  q: 'Na kterém obrázku jsou elektrody AED nalepené správně?',
  o: ['Pod pravou klíční kostí a na levém boku pod podpažím', 'Obě nad sebou na hrudní kosti', 'Na břiše a na levém rameni'], a: [0],
  why: 'Srdce musí ležet mezi elektrodami, aby jím výboj prošel. Správné místo je nakreslené přímo na elektrodách. KPR se nepřerušuje, dokud přístroj není připravený, a při analýze a výboji se postiženého nikdo nesmí dotýkat. U dětí mladších 8 let se použijí dětské elektrody, v nouzi i běžné.',
  src: 'ČČK příručka, s. 53 · skripta s. 34'
},
{
  id: 'obr28', c: 'kpr', ofig: ['masazOk', 'masazBad'],
  q: 'Na kterém obrázku zachránce stlačuje hrudník správně?',
  o: ['Ramena kolmo nad hrudníkem, lokty propnuté', 'Lokty pokrčené, ramena mimo osu hrudníku'], a: [0],
  why: 'Skripta: ruku na střed hrudníku, druhou na ni a propnout lokty. ČČK: opírat se částí dlaně blíže zápěstí, při napjatých pažích stlačovat vahou celého těla, postižený leží na pevné podložce a po stlačení ruce od hrudníku neoddalujeme. S pokrčenými lokty zachránce rychle unaví paže a stlačení nemá dost hloubky.',
  src: 'Skripta s. 34 · ČČK příručka, s. 47–48'
},
{
  id: 'obr29', c: 'kpr', ofig: ['techDveRuce', 'techJednaRuka', 'techDvaPrsty'],
  q: 'Kterou technikou se podle skript stlačuje hrudník novorozence?',
  o: ['Dvěma dlaněmi na sobě', 'Dlaní jedné ruky', 'Dvěma prsty'], a: [2],
  why: 'Novorozenec: dva prsty na střed hrudníku, stlačit o 1/3, poměr 3 : 1. Dospělý: dvě dlaně na sobě. U dítěte skripta uvádějí „polož ruku“, ČČK dlaň jedné ruky, u většího hrudníku i obou rukou.',
  src: 'Skripta s. 34–35 · ČČK příručka, s. 51'
},
{
  id: 'obr30', c: 'kpr', ofig: ['vdechObe', 'vdechUsta', 'vdechNos'],
  q: 'Jak se provádí umělý vdech u novorozence?',
  o: ['Ústy překrýt ústa i nos dítěte', 'Vdechovat jen do úst', 'Vdechovat jen do nosu'], a: [0],
  why: 'Skripta: „svými ústy obejmi pusu i nos, 5× vdechni obsah svých úst, až se zvedne hrudník“. Vdechuje se jen objem vzduchu v ústech zachránce. U dítěte od 1 roku se podle velikosti obličeje dýchá z úst do úst a nosu, nebo z úst do úst se zacpaným nosem.',
  src: 'Skripta s. 35 · ČČK příručka, s. 50–51'
},

/* ─────────────── Polohy, rány, obvazy ─────────────── */
{
  id: 'obr31', c: 'kosti', fig: 'polohaKlubicko',
  q: 'Pro koho je vhodná poloha na obrázku?',
  o: [
    'Pro postiženého s bolestí břicha — úlevová poloha „klubíčko“',
    'Pro bezvědomého, který zvrací',
    'Pro postiženého s astmatickým záchvatem',
    'Pro zraněného s podezřením na poranění páteře'
  ], a: [0],
  why: 'Skripta uvádějí úlevovou polohu „klubíčko“ u poranění břicha i u náhlých příhod břišních — a k tomu nepodávat tekutiny ani analgetika. ČČK: úlevovou polohu si zraněný obvykle najde sám, na boku nebo na zádech s podloženými dolními končetinami.',
  src: 'Skripta s. 20–21 · ČČK příručka, s. 58'
},
{
  id: 'obr32', c: 'rany', ofig: ['cteloOk', 'cteloVen', 'cteloPres'],
  q: 'Na kterém obrázku je zaklíněný předmět v ráně ošetřen správně?',
  o: ['Předmět zůstává v ráně, je obložený a zafixovaný', 'Předmět je vytažený, rána krytá gázou', 'Obvaz je přetažený přes předmět'], a: [0],
  why: 'Zaklíněný předmět se nikdy nevytahuje — může tamponovat poraněnou cévu. ČČK: obložit obvazovým materiálem a vždy viditelně zafixovat, aby bylo při dalším ošetření jasné, že v ráně je cizí těleso. Obvaz přes předmět by ho zatlačil hlouběji.',
  src: 'Skripta s. 14 a 16 · ČČK příručka, s. 60'
},
{
  id: 'por15', c: 'rany', t: 'order', fig: 'tlakovy',
  q: 'Seřaď postup přiložení tlakového obvazu.',
  items: [
    'Krýt krvácející ránu sterilní gázou',
    'Přiložit tlakovou vrstvu 3–5 cm, nejlépe nerozvinuté obinadlo',
    'Tlakovou vrstvu pevně zafixovat obinadlem nebo trojcípým šátkem',
    'Prosakuje-li krev, přidat další tlakovou vrstvu, obvaz nesundávat'
  ],
  why: 'Tlakový obvaz je hlavní ošetření žilního krvácení i většiny tepenných krvácení na končetinách. Zaškrcení přichází až tehdy, když tlakový obvaz nestačí.',
  src: 'ČČK příručka, s. 41 · skripta s. 15'
},
{
  id: 'obr33', c: 'kosti', ofig: ['nohaOk', 'nohaKratka', 'nohaBezKotniku'],
  q: 'Pomoc je daleko a zlomeninu bérce je nutné znehybnit. Která fixace je správná?',
  o: ['Dlaha přes koleno i kotník', 'Dlaha jen přes místo zlomeniny', 'Dlaha přes koleno, kotník volný'], a: [0],
  why: 'Vždy se fixuje mezi dvěma klouby — u bérce koleno i kotník. Dlaha se měkce obloží a sleduje se prokrvení končetiny.',
  src: 'ČČK příručka, s. 70–74 · skripta s. 19',
  alt: {
    t: 'Skripta k dolní končetině',
    x: 'Skripta uvádějí, že fixujeme pouze horní končetiny a kotníky, pokud nehrozí nebezpečí — zlomeninu bérce či stehna je lepší nechat na záchranné službě s minimální manipulací. ČČK doporučuje dlahu tam, kde zdravotnická pomoc není dostupná. Pravidlo „mezi dvěma klouby“ platí v obou zdrojích.'
  }
},
{
  id: 'obr34', c: 'rany', ofig: ['obvazKlasovy', 'obvazKruhovy'],
  q: 'Který obrázek ukazuje klasový obvaz?',
  o: ['Otáčky se kříží do tvaru klasu', 'Otáčky jdou vodorovně přes sebe'], a: [0],
  why: 'U klasového obvazu se otáčky kříží a vytvářejí vzor připomínající klas. Díky tomu dobře drží i na části, která se zužuje, například na předloktí nebo lýtku. Prosté kruhové otáčky se na kuželovité části snadno smekají.',
  src: 'ČČK Praha 1, s. 17'
},
{
  id: 'obv01', c: 'rany',
  q: 'Který obvaz kloubu ponechá kloub pohyblivý?',
  o: ['Rozbíhavý', 'Sbíhavý', 'Kruhový', 'Tlakový'], a: [0],
  why: 'Skripta ČČK Praha 1: sbíhavý obvaz kloubu slouží k jeho fixaci, rozbíhavý se přikládá tak, aby kloub zůstal pohyblivý. U sbíhavého se otáčky sbíhají ke kloubu, u rozbíhavého začínají na kloubu a rozbíhají se od něj.',
  src: 'ČČK Praha 1, s. 17–18'
},
{
  id: 'obr35', c: 'rany', fig: 'maltez',
  q: 'K čemu se používá náplast vystřižená do tvaru na obrázku (maltézský kříž)?',
  o: ['K obvazu bříška nebo špičky prstu', 'K zajištění zlomeného prstu', 'K přelepení přisátého klíštěte', 'Jako tlakový obvaz na koleno'], a: [0],
  why: 'Polštářek se přiloží na bříško prstu a ramena kříže se přeloží přes špičku ze všech stran. Náplast tak drží i na místě, odkud by se obyčejná náplast hned sesunula.',
  src: 'ČČK Praha 1, s. 18–19'
},
{
  id: 'obr36', c: 'rany', fig: 'leukosteh',
  q: 'Co ukazuje obrázek?',
  o: [
    'Leukosteh — proužky náplasti přitahující okraje drobné rány k sobě',
    'Tlakový obvaz',
    'Maltézský kříž',
    'Tekutý obvaz'
  ], a: [0],
  why: 'Skripta řadí mezi náplasťové obvazy mašličky a stripy a uvádějí je u vlásečnicového krvácení a drobných ranek. Proužky se lepí napříč ránou a její okraje přitahují k sobě.',
  src: 'Skripta s. 15 a 17 · ČČK Praha 1, s. 19'
},

/* ─────────────── Transport ─────────────── */
{
  id: 'obr37', c: 'kosti', fig: 'fotoRautek',
  q: 'Jak se jmenuje úchop na obrázku a k čemu slouží?',
  o: [
    'Rautekův hmat — bezpečné uchopení a vyproštění zraněného, například z auta',
    'Heimlichův manévr — vypuzení cizího tělesa z dýchacích cest',
    'Doprovod — podpora zraněného, který může chodit',
    'Stabilizace páteře zraněného ve vodě'
  ], a: [0],
  why: 'Zachránce přistoupí zezadu, provlékne paže pod rameny zraněného a uchopí jeho ohnuté předloktí nad zápěstím a pod loktem. Při vyprošťování je nutné zajistit hlavu a zabránit pohybům krční páteře. Hmat se hodí i k odnesení dvěma zachránci.',
  src: 'ČČK příručka, s. 187 · skripta s. 33'
},
{
  id: 'tra01', c: 'kosti', m: true,
  q: 'Kdy se Rautekův hmat nepoužije?',
  o: [
    'Při zlomenině kostí horní nebo dolní končetiny',
    'Při zlomenině žeber',
    'Při podezření na poranění hrudní nebo bederní páteře',
    'Při vyprošťování zraněného z hořícího auta',
    'Když je zraněný v bezvědomí',
    'Když je zachránce na místě sám',
    'U dítěte'
  ], a: [0, 1, 2],
  why: 'ČČK výslovně uvádí, že Rautekův hmat nelze použít při zlomeninách kostí končetin, žeber a při podezření na poranění hrudní nebo bederní páteře. Vyproštění z nebezpečí, například z hořícího auta, je naopak typické použití.',
  src: 'ČČK příručka, s. 187'
},
{
  id: 'obr38', c: 'kosti', fig: 'doprovod',
  q: 'Kdy se používá způsob transportu na obrázku?',
  o: ['U lehčích poranění, když zraněný může chodit', 'U zraněného v bezvědomí', 'Při podezření na poranění páteře', 'Při zlomenině stehenní kosti'], a: [0],
  why: 'Doprovod: zachránce by měl být přibližně stejně vysoký, chytne zraněného kolem pasu a jeho paži si položí kolem krku. Stále sleduje jeho stav. Když zraněný omdlí, ukročí za něj, chytne ho Rautekovým hmatem a šetrně posadí nebo položí na zem.',
  src: 'ČČK příručka, s. 187–188'
},
{
  id: 'obr39', c: 'kosti', fig: 'odnesZaSebou',
  q: 'Jak se jmenuje způsob odsunu na obrázku?',
  o: ['Odnesení dvěma zachránci za sebou', 'Odnesení dvěma zachránci vedle sebe', 'Doprovod', 'Odnesení na zádech jedním zachráncem'], a: [0],
  why: 'Jeden zachránce drží zraněného Rautekovým hmatem, druhý zvedne jeho dolní končetiny. Při odnesení vedle sebe tvoří zachránci sedátko ze spojených rukou nebo trojcípého šátku. Manipulace se zraněným není součástí první pomoci — jen když hrozí další nebezpečí nebo je to nutné pro ošetření.',
  src: 'ČČK příručka, s. 186–188 · skripta s. 33'
},
{
  id: 'tra02', c: 'kosti',
  q: 'Jak se nese zraněný na zdravotnických nosítkách?',
  o: [
    'Nohama napřed; hlavou napřed jen do svahu, do schodů a při nakládání do vozidla',
    'Vždy hlavou napřed',
    'Vždy nohama napřed, i do schodů',
    'Na boku, aby mohl zvracet'
  ], a: [0],
  why: 'Nosítka se vždy přinášejí ke zraněnému, ne zraněný k nosítkům. Bezvědomého nebo zraněného s podezřením na poranění páteře nakládají nejméně tři zachránci a koordinuje je ten u hlavy.',
  src: 'ČČK příručka, s. 188'
},

/* ─────────────── Tonutí ─────────────── */
{
  id: 'obr40', c: 'voda', fig: 'tazeni',
  q: 'Jak se táhne tonoucí ke břehu?',
  o: [
    'Na zádech s obličejem nad hladinou, zachránce ho drží zezadu',
    'Na břiše s obličejem ve vodě, aby rychleji klouzal',
    'Svisle, zachránce ho táhne za nohy',
    'Zachránce ho nese na zádech pod vodou'
  ], a: [0],
  why: 'Skripta: k tonoucímu se přiblížit zezadu, uchopit ho za ruku nebo za vlasy a táhnout ke břehu. Obličej musí zůstat nad vodou. Osobní zásah je nejnebezpečnější stupeň záchrany a patří jen proškolenému plavci.',
  src: 'Skripta s. 32 · ČČK Praha 1, s. 20'
},
{
  id: 'por16', c: 'voda', t: 'order',
  q: 'Seřaď postup u tonoucího podle schématu ČČK.',
  items: [
    'Zjistit bezvědomí a nenormální dýchání',
    'Hlasitě volat o pomoc a volat 155',
    'Zprůchodnit dýchací cesty',
    'Provést 5 umělých vdechů',
    'Nejsou známky života → zahájit KPR',
    'Připojit AED a řídit se jeho pokyny'
  ],
  why: 'U tonutí se KPR zahajuje pěti vdechy v každém věku, protože příčinou zástavy je nedostatek kyslíku. Vodu z plic se nevylévá. Dítě resuscituje zdravotník v poměru 15 : 2.',
  src: 'ČČK příručka, s. 182 · skripta s. 32'
},
{
  id: 'vod10', c: 'voda',
  q: 'Tonoucí po skoku do mělké vody je v bezvědomí a nedýchá. Hrozí poranění páteře, páteřní deska ale není po ruce. Co uděláte?',
  o: [
    'Vytáhnu ho šetrně, ale co nejrychleji, a snažím se omezit pohyby krku',
    'Nechám ho ve vodě, dokud nepřivezou páteřní desku',
    'Nejdřív mu na hladině zkusím nasadit krční límec',
    'Vytáhnu ho za nohy a nechám vytéct vodu z plic'
  ], a: [0],
  why: 'ČČK: navzdory možnému poranění páteře se nedýchající postižený v bezvědomí vytahuje z vody šetrně, ale tak rychle, jak je to jen možné, i bez páteřní desky a krčního límce. Pohyby krku se omezují a vytahuje se pokud možno ve vodorovné poloze.',
  src: 'ČČK příručka, s. 181–182'
},

/* ─────────────── Vyrážky ─────────────── */
{
  id: 'obr41', c: 'nemoci', fig: 'fotoPlisen',
  q: 'Dítěti svědí a pálí rozmočená, popraskaná kůže mezi prsty na noze jako na fotografii. O co jde?',
  o: [
    'Plíseň nohou — léčba podle lékaře, koupele, zabránit šíření',
    'Opruzeniny — Calcium pantothenicum',
    'Puchýř z bot — propíchnout a přelepit',
    'Ekzém — jen promaštit'
  ], a: [0],
  why: 'Plíseň nohou (dermatomykóza) tvoří shluky drobných puchýřků a šupinatých oparů zejména mezi prsty, svědí a pálí. Léčba může trvat i měsíc. Na táboře je nutné zabránit šíření, protože se přenáší ve sprchách a přes společné ručníky.',
  src: 'ČČK Praha 1, s. 12'
},
{
  id: 'obr42', c: 'nemoci', fig: 'fotoEkzem',
  q: 'Dítě-alergik má na předloktí suchou, zarudlou a rozškrábanou vyrážku, která silně svědí. O co nejspíš jde?',
  o: [
    'Ekzém — antihistaminika, promaštění suchých míst, zjistit spouštěč',
    'Plané neštovice — izolace a tekutý pudr',
    'Lymská borelióza — antibiotika',
    'Úžeh — chlazení a tekutiny'
  ], a: [0],
  why: 'Ekzém: vystouplá zarudlá vyrážka, suchá a šupinatá, nebo mokvající, a velmi svědí. Bývá způsoben alergickou reakcí. Příznaky se zmírní, když se zjistí příčina a zamezí se kontaktu s alergenem.',
  src: 'ČČK Praha 1, s. 13'
}
,
{
  id: 'obr43', c: 'nemoci', fig: 'fotoNehty',
  q: 'Nehet na palci u nohy je zažloutlý, ztluštělý a rozpadá se jako na fotografii. O co nejspíš jde?',
  o: [
    'Plíseň nehtu — k lékaři, léčba je zdlouhavá, zabránit šíření',
    'Zarostlý nehet — ostříhat nakrátko do kulata',
    'Modřina pod nehtem po kopnutí do míče',
    'Nedostatek vitaminů — není třeba nic řešit'
  ], a: [0],
  why: 'Skripta ČČK Praha 1 řadí plíseň nehtů k plísni nohou. Léčí se podle doporučení lékaře a léčba bývá zdlouhavá. Na táboře je důležité zabránit šíření — vlastní ručník, obuv do sprch, dezinfekce.',
  src: 'ČČK Praha 1, s. 12'
}
);
