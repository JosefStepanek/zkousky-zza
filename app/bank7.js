/* Banka otázek 7 — doplnění ze skript „Zdravotník zotavovacích akcí“
   (First Responder – Záchranáři Česká Lípa, příloha k dokumentu MŠMT).
   Legislativní část těchto skript vychází z neplatné vyhlášky 148/2004 Sb., proto se nepřebírá.
   Témata: stavba lidského těla, vyšetření a normální hodnoty, akutní stavy u dětí,
   infekční onemocnění, psychologie první pomoci, polohování, organizace první pomoci. */
window.QB = window.QB || [];
window.QB.push(

/* ─────────────── Stavba lidského těla (osnova kurzu, příloha 2) ─────────────── */
{
  id: 'ana01', c: 'anatomie', t: 'match',
  q: 'Přiřaď počet obratlů k úsekům páteře.',
  pairs: [['krční obratle', '7'], ['hrudní obratle', '12'], ['bederní obratle', '5'], ['kostrční obratle', '4–5']],
  extra: ['3', '9'],
  why: 'Páteř dále tvoří 5 křížových obratlů. Na hrudní obratle se kloubně připojuje 12 párů žeber.',
  src: 'First Responder Česká Lípa, kap. 1',
  tags: ['cislo']
},
{
  id: 'ana02', c: 'anatomie',
  q: 'Kolik laloků má pravá a levá plíce?',
  o: ['Pravá 3, levá 2', 'Pravá 2, levá 3', 'Obě po 3', 'Obě po 2'], a: [0],
  why: 'Levá plíce je menší, protože srdce leží zhruba ze dvou třetin vlevo od střední čáry. K výměně plynů dochází v plicních sklípcích, hlavními dýchacími svaly jsou bránice a mezižeberní svaly.',
  src: 'First Responder Česká Lípa, kap. 1'
},
{
  id: 'ana03', c: 'anatomie',
  q: 'Ve kterém oddílu srdce začíná malý (plicní) krevní oběh?',
  o: ['V pravé komoře', 'V levé komoře', 'V pravé předsíni', 'V levé předsíni'], a: [0],
  why: 'Z pravé komory jde odkysličená krev plicnicí do plic, okysličená se vrací plicními žilami do levé předsíně. Velký oběh začíná v levé komoře aortou a krev se vrací horní a dolní dutou žílou do pravé předsíně.',
  src: 'First Responder Česká Lípa, kap. 1'
},
{
  id: 'ana04', c: 'anatomie',
  q: 'Kolik krve má přibližně dospělý člověk?',
  o: ['Muž asi 5–6 litrů, žena asi 4,5 litru', 'Asi 2–3 litry', 'Asi 8–10 litrů', 'Asi 1,5 litru'], a: [0],
  why: 'Pro představu o krevních ztrátách: zlomenina pánve může znamenat ztrátu až 5 litrů, stehenní kosti 3 litry — tedy velkou část celkového objemu. Hypovolemický šok se rozvíjí nad ztrátou 20–30 %.',
  src: 'First Responder Česká Lípa, kap. 1 · skripta s. 20 a 26',
  tags: ['cislo']
},
{
  id: 'ana05', c: 'anatomie', t: 'match',
  q: 'Přiřaď složky krve k jejich hlavní úloze.',
  pairs: [
    ['červené krvinky', 'přenos kyslíku (hemoglobin)'],
    ['bílé krvinky', 'obrana proti infekci'],
    ['krevní destičky', 'zástava krvácení a srážení krve'],
    ['krevní plazma', 'udržení objemu krve a přenos látek']
  ],
  extra: ['tvorba žluči'],
  why: 'Červené krvinky se tvoří v červené kostní dřeni a žijí asi 120 dní. Krevní destičky žijí jen několik dní.',
  src: 'First Responder Česká Lípa, kap. 1'
},
{
  id: 'ana06', c: 'anatomie', m: true,
  q: 'Které kosti tvoří předloktí?',
  o: ['Kost vřetenní', 'Kost loketní', 'Kost pažní', 'Kost holenní', 'Kost lýtková', 'Kost klíční'], a: [0, 1],
  why: 'Paže má jedinou kost pažní, předloktí kost vřetenní a loketní. Na dolní končetině je stehenní kost a v bérci kost holenní a lýtková. Na tepně vřetenní (na zápěstí na straně palce) se měří pulz.',
  src: 'First Responder Česká Lípa, kap. 1 a 3'
},
{
  id: 'ana07', c: 'anatomie',
  q: 'Kde vzniká podnět ke srdečnímu stahu?',
  o: ['V sinusovém uzlu', 'Ve věnčitých tepnách', 'V Purkyňových vláknech', 'V prodloužené míše'], a: [0],
  why: 'Sinusový uzel leží při ústí horní duté žíly. Vzruch se šíří síněmi do síňokomorového uzlu, Hisovým svazkem a Tawarovými raménky do Purkyňových vláken v komorách. Rytmus jiný než sinusový se nazývá arytmie.',
  src: 'First Responder Česká Lípa, kap. 1 a 21'
},
{
  id: 'ana08', c: 'anatomie',
  q: 'Které cévy zásobují krví samotný srdeční sval?',
  o: ['Věnčité (koronární) tepny', 'Plicní tepny', 'Horní dutá žíla', 'Krkavice'], a: [0],
  why: 'Věnčité tepny odstupují z aorty hned za aortální chlopní. Uzávěr věnčité tepny způsobí nedokrevnost a odumření části srdečního svalu — infarkt myokardu.',
  src: 'First Responder Česká Lípa, kap. 1 · skripta s. 22'
},
{
  id: 'ana09', c: 'anatomie',
  q: 'Kde leží slepé střevo s červovitým výběžkem?',
  o: ['V pravé jámě kyčelní — v pravém podbřišku', 'V levém podbřišku', 'Pod pravou klenbou brániční', 'V nadbřišku uprostřed'], a: [0],
  why: 'Proto je u zánětu slepého střeva typická bolest v pravém podbřišku. Pod pravou klenbou brániční leží játra a na jejich spodní straně žlučník — bolest vystřelující pod pravou lopatku ukazuje na zánět žlučníku.',
  src: 'First Responder Česká Lípa, kap. 1 · skripta s. 21'
},
{
  id: 'ana10', c: 'anatomie',
  q: 'Které hormony vylučuje slinivka břišní do krve?',
  o: ['Inzulin a glukagon — řídí hladinu cukru v krvi', 'Adrenalin a noradrenalin', 'Estrogen a progesteron', 'Parathormon'], a: [0],
  why: 'Inzulin hladinu cukru snižuje, glukagon zvyšuje — proto se diabetikovi v bezvědomí při hypoglykemii podává glukagon. Adrenalin tvoří nadledviny, parathormon příštitná tělíska.',
  src: 'First Responder Česká Lípa, kap. 1 · skripta s. 25'
},
{
  id: 'ana11', c: 'anatomie', m: true,
  q: 'Co patří k dolním cestám dýchacím?',
  o: ['Průdušnice', 'Průdušky', 'Průdušinky a plicní sklípky', 'Dutina nosní', 'Nosohltan', 'Dutina ústní'], a: [0, 1, 2],
  why: 'Horní cesty dýchací tvoří dutina nosní (vzduch se v ní ohřívá a zvlhčuje), dutina ústní a nosohltan, kde se kříží cesta dýchací a polykací. Proto může cizí těleso z úst skončit v dýchacích cestách.',
  src: 'First Responder Česká Lípa, kap. 1'
},
{
  id: 'ana12', c: 'anatomie',
  q: 'Kam sahá mícha a co způsobí její přerušení?',
  o: [
    'Sahá zhruba k poslednímu hrudnímu až prvnímu bedernímu obratli; přerušení způsobí ztrátu citlivosti a hybnosti pod místem poranění',
    'Sahá až do kostrče; přerušení způsobí jen bolest v zádech',
    'Leží jen v krční páteři; přerušení nemá následky',
    'Je uložena v lebce; přerušení způsobí ztrátu paměti'
  ], a: [0],
  why: 'Mícha leží v páteřním kanálu a je obklopena mozkomíšním mokem. Proto je u podezření na poranění páteře nutná minimální manipulace — pohyb s nestabilní páteří může míchu poškodit.',
  src: 'First Responder Česká Lípa, kap. 1 · skripta s. 33'
},
{
  id: 'ana13', c: 'anatomie', t: 'order',
  q: 'Seřaď mozkové plény od lebky směrem k mozku.',
  items: ['Tvrdá plena', 'Pavučnice', 'Měkká plena'],
  why: 'Podle toho se jmenují nitrolební krvácení: epidurální (nad tvrdou plenou), subdurální (pod tvrdou plenou) a subarachnoideální (pod pavučnicí).',
  src: 'First Responder Česká Lípa, kap. 1 · skripta s. 32'
},
{
  id: 'ana14', c: 'anatomie', t: 'match',
  q: 'Přiřaď žlázy s vnitřní sekrecí k tomu, co tvoří nebo řídí.',
  pairs: [
    ['nadledviny', 'adrenalin — reakce na akutní stres'],
    ['slinivka břišní', 'inzulin a glukagon'],
    ['štítná žláza', 'thyreoglobulin — řídí metabolismus a růst'],
    ['hypofýza', 'ovlivňuje tvorbu dalších hormonů']
  ],
  extra: ['žluč'],
  why: 'Hormony jdou přímo do krve a krví se dostávají k cílovým orgánům. Adrenalin je i účinná látka Epipenu.',
  src: 'First Responder Česká Lípa, kap. 1'
},

/* ─────────────── Vyšetření a normální hodnoty ─────────────── */
{
  id: 'vys01', c: 'zaklady', t: 'match',
  q: 'Přiřaď normální tepovou frekvenci podle věku.',
  pairs: [['dospělý', '60–80 za minutu'], ['dítě', '100–120 za minutu'], ['novorozenec', '120–160 za minutu']],
  extra: ['30–50 za minutu'],
  why: 'Rychlý tep je tachykardie, pomalý bradykardie. Vedle frekvence se hodnotí kvalita (měkký, nitkovitý, tvrdý) a rytmus (pravidelný, nepravidelný). Rychlý slabý nitkovitý tep je příznak šoku.',
  src: 'First Responder Česká Lípa, kap. 3',
  tags: ['cislo']
},
{
  id: 'vys02', c: 'zaklady',
  q: 'Čím se hmatá pulz?',
  o: ['Dvěma až třemi prsty, nikdy palcem', 'Palcem, protože je nejcitlivější', 'Celou dlaní', 'Hřbetem ruky'], a: [0],
  why: 'V palci je hmatný vlastní tep zachránce, takže by si ho mohl splést s tepem postiženého.',
  src: 'First Responder Česká Lípa, kap. 3'
},
{
  id: 'vys03', c: 'zaklady',
  q: 'Kde se hmatá pulz u postiženého v bezvědomí?',
  o: ['Na krční nebo stehenní tepně', 'Na zápěstí na tepně vřetenní', 'Na spánku', 'Na nártu'], a: [0],
  why: 'Při nízkém tlaku nebo šoku nemusí být tep na zápěstí hmatný, i když krevní oběh trvá. Pozor: o zahájení KPR laik nerozhoduje podle pulzu, ale podle toho, jestli postižený normálně dýchá — hledání tepu zdržuje a bývá nespolehlivé.',
  src: 'First Responder Česká Lípa, kap. 3'
},
{
  id: 'vys04', c: 'zaklady', t: 'match',
  q: 'Přiřaď hodnoty krevního tlaku u dospělého.',
  pairs: [['normální tlak', '120/80'], ['hypertenze (vysoký tlak)', 'od 140/90'], ['hypotenze (nízký tlak)', 'pod 100/60']],
  extra: ['200/40'],
  why: 'Horní číslo je tlak systolický (při stahu srdce), dolní diastolický (při jeho ochabnutí). U dětí jsou hodnoty nižší. Nízký tlak se zrychleným tepem je nebezpečná kombinace dekompenzovaného šoku.',
  src: 'First Responder Česká Lípa, kap. 3',
  tags: ['cislo']
},
{
  id: 'vys05', c: 'nemoci', t: 'match',
  q: 'Přiřaď názvy k hodnotám tělesné teploty.',
  pairs: [['normální teplota', '36,7–37 °C'], ['subfebrilie (zvýšená teplota)', '37–38 °C'], ['horečka (febrilie)', 'nad 38 °C'], ['hyperpyrexie', '40–41 °C'], ['kritická teplota', '42 °C']],
  why: 'V konečníku je teplota asi o 0,5 °C vyšší než v podpaží, ráno bývá nižší než večer. Teplota nad 39 °C už přímo působí na mozek — může vyvolat zmatenost a halucinace.',
  src: 'First Responder Česká Lípa, kap. 3 a 20',
  tags: ['cislo']
},
{
  id: 'vys06', c: 'stavy',
  q: 'Jaká je normální hladina cukru v krvi (glykemie)?',
  o: ['Asi 3,8–6,6 mmol/l', 'Asi 0,5–1 mmol/l', 'Asi 10–15 mmol/l', 'Asi 20–30 mmol/l'], a: [0],
  why: 'Měří se glukometrem z kapky krve. Nízká hladina (hypoglykemie) nejvíc poškozuje mozek a vede až k bezvědomí. Diabetik na táboře glukometr obvykle má a umí ho použít.',
  src: 'First Responder Česká Lípa, kap. 3',
  tags: ['cislo']
},
{
  id: 'vys07', c: 'zaklady',
  q: 'Jaká je normální saturace krve kyslíkem měřená pulzním oxymetrem na prstu?',
  o: ['96–100 %', '80–85 %', '50–60 %', '100–120 %'], a: [0],
  why: 'Nižší hodnota znamená, že tkáně nedostávají dost kyslíku. Většina oxymetrů ukazuje zároveň tepovou frekvenci.',
  src: 'First Responder Česká Lípa, kap. 3',
  tags: ['cislo']
},
{
  id: 'vys08', c: 'stavy',
  q: 'Co znamená tachykardie a bradykardie u dospělého?',
  o: [
    'Tachykardie je tep nad 100 za minutu, bradykardie pod 60 za minutu',
    'Tachykardie je tep pod 60, bradykardie nad 100 za minutu',
    'Tachykardie je nepravidelný tep, bradykardie pravidelný',
    'Tachykardie je zrychlené dýchání, bradykardie zpomalené dýchání'
  ], a: [0],
  why: 'Obojí patří mezi arytmie — rytmy odlišné od normálního sinusového. Komorové arytmie jsou nebezpečnější než síňové a mohou vyústit v zástavu oběhu. Zrychlené dýchání se nazývá tachypnoe.',
  src: 'First Responder Česká Lípa, kap. 21',
  tags: ['cislo']
},
{
  id: 'vys09', c: 'stavy', t: 'match',
  q: 'Přiřaď stupně poruchy vědomí k tomu, jak postižený reaguje.',
  pairs: [
    ['somnolence', 'je spavý, na oslovení reaguje nepřiměřeně'],
    ['sopor', 'na oslovení nereaguje, na bolest cíleným obranným pohybem'],
    ['kóma', 'nereaguje na oslovení ani na bolest']
  ],
  extra: ['je plně orientovaný'],
  why: 'Reakce na bolest se zkouší štípnutím do ušního lalůčku nebo tlakem palcem nad klíční kostí. V kómatu mizí i obranné reflexy (polykací, kašlací), proto hrozí vdechnutí zvratků.',
  src: 'First Responder Česká Lípa, kap. 7 · skripta s. 25'
},

/* ─────────────── Akutní stavy u dětí ─────────────── */
{
  id: 'det01', c: 'stavy', t: 'match',
  q: 'Přiřaď dechovou tíseň u dítěte k typickému průběhu.',
  pairs: [
    ['akutní laryngitida', 'pozvolný začátek v noci, štěkavý kašel, teplota 37–38 °C'],
    ['akutní epiglotitida', 'náhlý začátek, horečka 39–40 °C, slintání, bolestivé polykání'],
    ['vdechnuté cizí těleso', 'náhlé dušení při jídle nebo hře, dávivý kašel']
  ],
  extra: ['bolest v pravém podbřišku a zvracení'],
  why: 'Laryngitida je virová a nejčastější od října do dubna. Epiglotitida je bakteriální zánět příklopky hrtanové, nemá sezónu a má rychlý dramatický průběh — dítě sedí v předklonu, slintá, nemůže polykat.',
  src: 'First Responder Česká Lípa, kap. 25 · skripta s. 23'
},
{
  id: 'det02', c: 'stavy',
  q: 'Dítě má náhle horečku 40 °C, silně ho bolí v krku, nemůže polykat, slintá a sedí v předklonu. Co uděláte?',
  o: [
    'Nechám ho sedět, uklidním ho, zajistím chladný vlhký vzduch a volám 155 — dítě nikdy nepokládám',
    'Položím ho na záda a podívám se mu lžičkou do krku',
    'Podám lék na horečku a nechám ho vyspat',
    'Uložím ho do zotavovací polohy a počkám, jestli se to zlepší'
  ], a: [0],
  why: 'Jde o podezření na akutní epiglotitidu — oteklá příklopka hrtanová může dýchací cesty rychle uzavřít. Poloha vsedě v předklonu je pro dítě úlevová, položením se dýchání zhorší. Připravit se na případnou KPR.',
  src: 'First Responder Česká Lípa, kap. 25'
},
{
  id: 'det03', c: 'stavy', m: true,
  q: 'Které příčiny křečí u dětí skripta First Responder uvádějí?',
  o: [
    'Horečka (febrilní křeče)',
    'Epilepsie',
    'Afektivní křeče',
    'Zánět mozkových blan nebo otrava',
    'Mozkolebeční poranění',
    'Nachlazení bez horečky',
    'Únava po celodenním výletu',
    'Bolest zubů'
  ], a: [0, 1, 2, 3, 4],
  why: 'Při křečích: chránit hlavu lehkým přidržením, odstranit nebezpečné předměty, nic nevkládat do úst, dýchací cesty a životní funkce zajistit až po odeznění křečí, volat ZZS. U febrilních křečí dítě nezahřívat.',
  src: 'First Responder Česká Lípa, kap. 25 · skripta s. 24'
},

/* ─────────────── Úrazy, zvířata ─────────────── */
{
  id: 'zas01', c: 'kosti',
  q: 'Dítěti zavalil nohu těžký kmen a noha je stlačená už přes hodinu. Co podle skript First Responder uděláte jako laik?',
  o: [
    'Nepokouším se o vyproštění, uklidňuji ho a zajistím technickou i zdravotnickou pomoc',
    'Co nejrychleji kmen odvalím a nohu promasíruji',
    'Nohu nad místem stlačení zaškrtím a pak vyprostím',
    'Dám mu hodně pít a počkám, až otok splaskne'
  ], a: [0],
  why: 'Crush syndrom: z rozdrcených tkání se uvolňují toxiny, po uvolnění hrozí šok a selhání ledvin. Při stlačení kratším než hodinu se zraněný vyprostí, zastaví se krvácení, ošetří rány a zahájí protišoková opatření. Vždy se zaznamená doba stlačení a čas vyproštění.',
  src: 'First Responder Česká Lípa, kap. 16'
},
{
  id: 'kou01', c: 'rany',
  q: 'Dítě pokousal cizí pes. Čím nejdřív ránu vymyjete?',
  o: ['Mýdlem a vodou — mýdlo ničí virus vztekliny', 'Jen peroxidem vodíku', 'Ránu nevymývám, jen přelepím', 'Alkoholem'], a: [0],
  why: 'Pak dezinfekce okolí, sterilní krytí a vždy lékař — kvůli infekci, přeočkování proti tetanu a riziku vztekliny. Pokud je to bezpečné, zjistit majitele nebo zajistit zvíře; nelze-li ověřit jeho očkování, musí se pokousaný očkovat proti vzteklině.',
  src: 'First Responder Česká Lípa, kap. 17 · ČČK příručka'
},
{
  id: 'kou02', c: 'rany', m: true,
  q: 'Co se při uštknutí zmijí nedělá?',
  o: [
    'Škrtit končetinu',
    'Nařezávat nebo vypalovat ránu',
    'Vysávat ránu',
    'Uklidnit postiženého a zabránit mu v pohybu',
    'Dezinfikovat ránu a sterilně ji krýt',
    'Znehybnit končetinu',
    'Zajistit transport do nemocnice'
  ], a: [0, 1, 2],
  why: 'Příznaky: bolest, dvě drobné ranky, šířící se otok, zvracení, bolest břicha, nízký tlak a rychlý puls až šok. Otok a bolest přetrvávají dlouho, uzdravení trvá 1–3 týdny.',
  src: 'First Responder Česká Lípa, kap. 17 · skripta s. 14'
},
{
  id: 'vzt01', c: 'nemoci',
  q: 'Jak se projevuje vzteklina u člověka?',
  o: ['Strachem z vody, křečemi svalů hlavně při pití a nadměrným sliněním', 'Svědivou vyrážkou s puchýřky', 'Zežloutnutím kůže', 'Štěkavým kašlem'], a: [0],
  why: 'Virus napadá nervovou soustavu a přenáší ho ve slinách jakékoli teplokrevné zvíře. Jakmile se objeví příznaky, je nemoc pro člověka smrtelná — proto záleží na ošetření rány a včasném očkování po pokousání. Prevence: očkování domácích zvířat a nepřibližovat se ke krotké lesní zvěři.',
  src: 'First Responder Česká Lípa, kap. 26'
},

/* ─────────────── Infekční onemocnění ─────────────── */
{
  id: 'inf01', c: 'hygiena',
  q: 'Kdo je bacilonosič?',
  o: [
    'Člověk, který infekční nemoc prodělal a je vyléčený, ale dál z něj uniká původce nákazy',
    'Člověk s oslabenou imunitou',
    'Člověk očkovaný proti nemoci',
    'Člověk v inkubační době, který ještě nikoho nenakazí'
  ], a: [0],
  why: 'Bacilonosič může nakazit okolí, i když sám nemá příznaky — typicky u břišního tyfu nebo salmonelóz. Proto se u pracovníků kuchyně vyžaduje zdravotní průkaz.',
  src: 'First Responder Česká Lípa, kap. 26'
},
{
  id: 'inf02', c: 'hygiena', m: true,
  q: 'Které tři podmínky musí být splněny, aby se nákaza šířila?',
  o: ['Zdroj původce nákazy', 'Cesta přenosu', 'Vnímavý (oslabený) organismus', 'Teplé počasí', 'Nedostatek spánku', 'Nemocniční prostředí'], a: [0, 1, 2],
  why: 'Přeruší-li se řetěz v kterémkoli bodě, nákaza se zastaví: izolace nemocných odstraní zdroj, hygiena a dezinfekce přeruší přenos, očkování sníží vnímavost.',
  src: 'First Responder Česká Lípa, kap. 26 · skripta s. 9'
},
{
  id: 'inf03', c: 'hygiena', t: 'match',
  q: 'Přiřaď cesty šíření nákazy k příkladům.',
  pairs: [
    ['stykem', 'přes narušenou kůži nebo sliznici'],
    ['vzduchem', 'kapénky — chřipka, spalničky, plané neštovice'],
    ['vodou a potravinami', 'salmonelóza, úplavice, žloutenka typu A'],
    ['hmyzem a členovci', 'klíšťata, komáři, vši']
  ],
  why: 'Nákaza vodou a potravinami postihne hodně lidí v krátké době — na táboře proto ověřený zdroj pitné vody a žádné prošlé nebo špatně skladované potraviny.',
  src: 'First Responder Česká Lípa, kap. 26 · skripta s. 9'
},
{
  id: 'inf04', c: 'hygiena',
  q: 'Jaký je rozdíl mezi aktivní a pasivní imunizací?',
  o: [
    'Při aktivní se podá oslabený původce a tělo si vytvoří protilátky; při pasivní se podávají hotové protilátky (séra)',
    'Při aktivní se podávají hotové protilátky, při pasivní oslabený původce',
    'Aktivní imunita vzniká jen po prodělání nemoci, pasivní jen očkováním',
    'Jsou to dva názvy pro totéž'
  ], a: [0],
  why: 'Imunita může být vrozená (od matky, časem mizí) nebo získaná — po prodělání nemoci nebo očkováním. Sérum se podává například po uštknutí.',
  src: 'First Responder Česká Lípa, kap. 26'
},
{
  id: 'inf05', c: 'hygiena', m: true,
  q: 'Která opatření patří mezi represivní — přijímaná až po vzniku nákazy?',
  o: [
    'Hlášení přenosné nákazy',
    'Izolace nemocných',
    'Karanténa osob, které byly s nemocným v kontaktu',
    'Dezinfekční opatření',
    'Preventivní očkování',
    'Zdravý způsob života',
    'Dodržování hygienických předpisů před akcí'
  ], a: [0, 1, 2, 3],
  why: 'Preventivní opatření (očkování, zdravý životní styl, hygiena) se dělají předem, represivní až ve chvíli, kdy k nákaze došlo — patří k nim i stanovení diagnózy lékařem.',
  src: 'First Responder Česká Lípa, kap. 26'
},
{
  id: 'inf06', c: 'nemoci',
  q: 'Žloutence typu A se říká „nemoc špinavých rukou“. Čím se projevuje?',
  o: ['Zežloutnutím kůže a očního bělma', 'Otokem příušních žláz', 'Štěkavým kašlem', 'Strachem z vody'], a: [0],
  why: 'Virová hepatitida A postihuje játra a šíří se znečištěnýma rukama, vodou a potravinami. Prevence na táboře: mytí rukou po WC a před jídlem.',
  src: 'First Responder Česká Lípa, kap. 26'
},
{
  id: 'inf07', c: 'nemoci',
  q: 'Dítě má oteklé tváře před ušima na obou stranách a bolí ho při žvýkání. O co může jít?',
  o: ['O příušnice', 'O zarděnky', 'O angínu', 'O tetanus'], a: [0],
  why: 'Příušnice jsou virové onemocnění se zduřením příušních slinných žláz. Komplikací může být u chlapců zánět varlat a u dívek vaječníků. Izolace a lékař.',
  src: 'First Responder Česká Lípa, kap. 26'
},
{
  id: 'inf08', c: 'hygiena',
  q: 'Čím se nejčastěji přenáší salmonelóza?',
  o: ['Špatně tepelně zpracovanými potravinami živočišného původu, například vejci', 'Kousnutím klíštěte', 'Kapénkami při kašli', 'Převařenou vodou'], a: [0],
  why: 'Salmonelóza je krátkodobé horečnaté průjmové onemocnění. Proto se na zotavovací akci nesmějí podávat pokrmy z tepelně neopracovaných vajec a syrového masa.',
  src: 'First Responder Česká Lípa, kap. 26'
},
{
  id: 'inf09', c: 'nemoci',
  q: 'Proč je bacilární úplavice nebezpečná hlavně pro děti?',
  o: ['Časté průjmy vedou ke ztrátě tekutin a minerálů a při zanedbání hrozí šok', 'Způsobuje trvalé ochrnutí', 'Přenáší se jen krví', 'Způsobuje ztrátu sluchu'], a: [0],
  why: 'Úplavice je prudce nakažlivá, provází ji horečka a časté průjmy. U dětí je nutné včas doplňovat tekutiny, izolovat a zajistit lékaře.',
  src: 'First Responder Česká Lípa, kap. 26 · skripta s. 20'
},
{
  id: 'inf10', c: 'nemoci',
  q: 'Dítě má silně svědící, zarudlou kůži hlavně v kožních záhybech. Svědění ho budí v noci. Na co je potřeba myslet?',
  o: ['Na svrab — zákožku svrabovou', 'Na kopřivku z jídla', 'Na úžeh', 'Na lymskou boreliózu'], a: [0],
  why: 'Zákožka svrabová se zavrtává do kůže a šíří se blízkým kontaktem a sdíleným prádlem. Prevencí je osobní hygiena. Dítě patří k lékaři a na táboře je nutné zamezit přenosu na ostatní.',
  src: 'First Responder Česká Lípa, kap. 26'
},
{
  id: 'inf11', c: 'hygiena', m: true,
  q: 'Proti kterým z těchto nákaz existuje očkování?',
  o: ['Klíšťový zánět mozku', 'Tetanus', 'Meningokoková infekce (některé typy)', 'Svrab', 'Salmonelóza', 'Otrava stafylokokovým jedem v jídle'], a: [0, 1, 2],
  why: 'Klíšťový zánět mozku může těžce poškodit mozek, meningokoková infekce vést k zánětu mozkových blan i smrti. Tetanus je bez očkování často smrtelný — v Česku se očkuje plošně.',
  src: 'First Responder Česká Lípa, kap. 26'
},
{
  id: 'inf12', c: 'rany',
  q: 'Proč je tetanus nebezpečný i u malé rány znečištěné zeminou?',
  o: [
    'Jeho původce se v ráně množí bez přístupu kyslíku a tvoří prudký jed; bez očkování bývá smrtelný',
    'Způsobuje jen svědivou vyrážku kolem rány',
    'Přenáší se pouze kapénkami',
    'Ohrožuje jen seniory'
  ], a: [0],
  why: 'ČČK: rány znečištěné zeminou, od rezavých hřebíků, ostnatého drátu nebo třísek je nutné vyčistit, dezinfikovat a zajistit přeočkování proti tetanu. Proto se u dětí kontroluje očkovací průkaz.',
  src: 'First Responder Česká Lípa, kap. 26 · ČČK příručka'
},

/* ─────────────── Oběh, přehřátí ─────────────── */
{
  id: 'obe01', c: 'stavy',
  q: 'Čím se liší záchvat anginy pectoris od infarktu myokardu?',
  o: [
    'Bolest při angině pectoris v klidu po několika minutách odezní, u infarktu neustupuje',
    'Angina bolí v břiše, infarkt v hlavě',
    'Infarkt se objevuje jen u dětí',
    'U anginy je tep pomalý, u infarktu se nemění'
  ], a: [0],
  why: 'Obojí má podobnou bolest za hrudní kostí vystřelující do levé paže, krku nebo čelisti. První pomoc je stejná: polosed, absolutní klid, čerstvý vzduch, pomoci s předepsanými léky, nejíst, nepít, nekouřit a volat 155.',
  src: 'First Responder Česká Lípa, kap. 21 · skripta s. 22'
},
{
  id: 'obe02', c: 'stavy',
  q: 'Vedoucí dlouho stojí na slunci, zívá, zbledl, je opocený a říká, že se mu tmí před očima. Co uděláte?',
  o: [
    'Položím ho, zajistím čerstvý vzduch, případně podložím nohy a potom ho pomalu posadím',
    'Pošlu ho rychle doběhnout do stínu',
    'Nechám ho stát a dám mu kávu',
    'Zakloním mu hlavu vestoje'
  ], a: [0],
  why: 'Jde o varovné příznaky mdloby z krátkodobého nedokrvení mozku. Stav se po položení rychle zlepší. Lékaře je potřeba zajistit, když se vědomí nevrací, obtíže trvají nebo příčina není jasná.',
  src: 'First Responder Česká Lípa, kap. 21'
},
{
  id: 'pre01', c: 'prostredi',
  q: 'Dítě má po celodenní túře v horku křeče v lýtkách a břiše, je bledé a lepkavě zpocené. Co pomůže?',
  o: ['Chladnější prostředí a doplnění tekutin i soli, třeba minerálka', 'Teplá koupel', 'Masáž a pokračovat v chůzi', 'Lék na horečku'], a: [0],
  why: 'Křeče a šok z přehřátí vznikají ztrátou tekutin a soli pocením. K tomu patří vyčerpání, bolest hlavy, závratě a zrychlené mělké dýchání. Zajistit zdravotnickou pomoc.',
  src: 'First Responder Česká Lípa, kap. 20'
},

/* ─────────────── Psychologie a komunikace ─────────────── */
{
  id: 'psy01', c: 'povinnosti',
  q: 'Jaký je rozdíl mezi strachem a úzkostí?',
  o: [
    'Strach je vázaný na konkrétní objekt nebo situaci, úzkost stálý objekt nemá',
    'Úzkost je vázaná na konkrétní objekt, strach ne',
    'Jsou to synonyma',
    'Strach prožívají jen děti, úzkost jen dospělí'
  ], a: [0],
  why: 'Obojí má tělesné projevy (bušení srdce, pocení, třes). Velmi silná úzkost se může projevit pohybovým výbuchem s agresí, nebo naopak ztuhnutím bez reakce.',
  src: 'First Responder Česká Lípa, kap. 28'
},
{
  id: 'psy02', c: 'povinnosti', m: true,
  q: 'Jak jednat s rozrušeným postiženým, například v akutní duševní krizi?',
  o: [
    'Klidně navázat kontakt a zjistit, co se stalo',
    'Vyjádřit pochopení a projevit empatii',
    'Situaci nijak nezlehčovat',
    'Aktivně naslouchat a pravdivě informovat',
    'Vystupovat rázně až agresivně, aby poslechl',
    'Tvrdit mu, že se nic vážného neděje',
    'Hned mu předložit hotové řešení a dál ho neposlouchat',
    'Nemluvit s ním a jen jednat'
  ], a: [0, 1, 2, 3],
  why: 'ČČK: nikdy nevystupovat agresivně, ale u neklidného postiženého zůstat obezřetný, aby zachránce nebyl napaden. Skripta First Responder: psychologická první pomoc je jednorázový rozhovor s cílem zklidnit a uvolnit emoční napětí — osobní zájem, akceptace, aktivní naslouchání, pravdivé informace a zajištění návazné péče.',
  src: 'First Responder Česká Lípa, kap. 28 · ČČK příručka'
},
{
  id: 'psy03', c: 'povinnosti',
  q: 'Dítě na táboře řekne, že by se nejradši zabilo. Co je správně?',
  o: [
    'Brát to vážně, v klidu s ním mluvit, nenechat ho samotné a zajistit odbornou pomoc',
    'Nevšímat si toho, děti to tak nemyslí',
    'Zasmát se, aby se odlehčila atmosféra',
    'Říct to ostatním dětem, aby na něj dávaly pozor'
  ], a: [0],
  why: 'Každou zmínku o sebevraždě je nutné brát vážně a postiženého nasměrovat k odborníkovi — informovat vedoucího akce a zákonné zástupce. Pomoci může telefonická krizová intervence, pro děti Linka bezpečí 116 111. Zdravotník je vázán mlčenlivostí vůči ostatním dětem.',
  src: 'First Responder Česká Lípa, kap. 28'
},
{
  id: 'psy04', c: 'povinnosti', m: true,
  q: 'Jak zvládat agresivního postiženého?',
  o: [
    'Klidné chování, gesta a tón hlasu',
    'Vyslechnout ho a projevit porozumění',
    'Posoudit, zda jsou jeho důvody reálné, a pokud to jde, vyhovět',
    'Dbát na vlastní bezpečí a hlídat si únikovou cestu',
    'Zvýšit hlas, aby poslechl',
    'Vyhrožovat trestem',
    'Fyzicky ho zadržet'
  ], a: [0, 1, 2, 3],
  why: 'ČČK: od agresora si udržujeme odstup, vyhýbáme se fyzickému kontaktu a odstraníme předměty, které by mohl použít. Má-li agresor zbraň, doporučí se přítomným odejít do bezpečí.',
  src: 'First Responder Česká Lípa, kap. 28 · ČČK příručka'
},
{
  id: 'psy05', c: 'povinnosti', t: 'order',
  q: 'Seřaď fáze psychické krize.',
  items: ['Fáze šoku', 'Fáze reakce', 'Fáze zpracování'],
  why: 'Psychologická první pomoc je jednorázový rozhovor s cílem zklidnit a uvolnit napětí: osobní zájem, aktivní naslouchání, empatie, pravdivé informace, zapojení dalších lidí a zajištění návazné péče. Postižený často čeká hotové rady — ty dávat nemusíme.',
  src: 'First Responder Česká Lípa, kap. 28'
},
{
  id: 'psy06', c: 'povinnosti',
  q: 'Co je syndrom vyhoření (burn-out)?',
  o: [
    'Emoční vyčerpání a ztráta zaujetí a smyslu pomáhající práce',
    'Popálení zachránce při ošetřování',
    'Přehřátí organismu při námaze',
    'Únava po jedné noční hře'
  ], a: [0],
  why: 'Týká se pomáhajících profesí včetně zdravotníků. Zralou obranou je naopak altruismus — přetavení vlastní zkušenosti do pomoci druhým.',
  src: 'First Responder Česká Lípa, kap. 28'
},

/* ─────────────── Polohování ─────────────── */
{
  id: 'pol01', c: 'stavy',
  q: 'Čím se liší autotransfuzní poloha od protišokové?',
  o: [
    'Dolní končetiny se zvednou co nejvýš — stejný princip, ale s větším účinkem, například při velké krevní ztrátě',
    'Postižený leží na břiše s hlavou na stranu',
    'Postižený sedí s nohama dolů',
    'Hlava leží výš než nohy'
  ], a: [0],
  why: 'Krev z dolních končetin se přesune k srdci, plicím a mozku. Je-li postižený v bezvědomí, je nutné hlídat dýchací cesty a zvážit polohu na boku.',
  src: 'First Responder Česká Lípa, kap. 29 · skripta s. 36',
  alt: {
    t: 'Výška zvednutí nohou se ve zdrojích liší',
    x: 'Skripta First Responder uvádějí u protišokové polohy zvednutí asi o 50 cm, příručka ČČK o 20–30 cm. Danina skripta výšku neuvádějí.'
  }
},
{
  id: 'pol02', c: 'stavy',
  q: 'Co je Fowlerova poloha a kdy se používá?',
  o: [
    'Poloha vsedě nebo v polosedě — při dýchacích potížích a poranění hrudníku',
    'Poloha na boku při bezvědomí',
    'Poloha na břiše při poranění obličeje',
    'Poloha s nohama nahoře při šoku'
  ], a: [0],
  why: 'Vsedě orgány břicha netlačí na bránici a hrudník je volný, takže se lépe dýchá. Danina skripta ji uvádějí jako polosed u astmatu, infarktu a hemoptýzy.',
  src: 'First Responder Česká Lípa, kap. 29 · skripta s. 16, 22, 23'
},
{
  id: 'pol03', c: 'kosti',
  q: 'Jakou polohu zvolíte u zraněného s poraněním hlavy, který je při vědomí a nemá známky šoku?',
  o: [
    'Na zádech s mírně zvýšenou hlavou a hrudníkem, hlava bez záklonu a otáčení',
    'Protišokovou polohu s nohama nahoře',
    'Na břiše',
    'Vsedě s hlavou v předklonu'
  ], a: [0],
  why: 'Zvýšená hlava snižuje nitrolební tlak. Protišoková poloha je u poranění hlavy nevhodná — uvádějí to i Danina skripta. Vždy myslet na možné poranění páteře.',
  src: 'First Responder Česká Lípa, kap. 29 · skripta s. 15'
},
{
  id: 'pol04', c: 'stavy',
  q: 'Jaký je rozdíl mezi stabilizovanou a zotavovací (euro) polohou?',
  o: [
    'U zotavovací zůstává spodní paže před tělem, u stabilizované za zády; zotavovací se dnes používá místo stabilizované',
    'Stabilizovaná poloha je na zádech, zotavovací na boku',
    'Zotavovací je pro šok, stabilizovaná pro astma',
    'Rozdíl není žádný'
  ], a: [0],
  why: 'Obě jsou polohy na boku pro bezvědomého se zachovaným dýcháním — brání zapadnutí jazyka a vdechnutí zvratků a umožní postiženého krátce opustit.',
  src: 'First Responder Česká Lípa, kap. 29'
},
{
  id: 'pol05', c: 'stavy',
  q: 'Bezvědomý dýchá a má zranění hrudníku na jedné straně. Na který bok ho uložíte?',
  o: ['Na poraněnou stranu', 'Na zdravou stranu', 'Na záda', 'Na břicho'], a: [0],
  why: 'Poloha na poraněné straně omezí pohyby zraněné poloviny hrudníku a zdravá plíce může volně dýchat. Stejně tak na stranu krvácejícího ucha. Otevřená rána na hlavě se ukládá na zdravou stranu.',
  src: 'First Responder Česká Lípa, kap. 29 · ČČK příručka'
},

/* ─────────────── Organizace první pomoci ─────────────── */
{
  id: 'org01', c: 'zaklady',
  q: 'Co je potřeba výslovně říct operátorovi, když voláte 155 z mobilního telefonu?',
  o: [
    'Přesně město nebo obec — hovor jde do krajského střediska a hrozí záměna stejných názvů ulic',
    'Číslo průkazu zdravotní pojišťovny postiženého',
    'Značku a model telefonu',
    'Nic navíc, poloha se vždy zjistí sama'
  ], a: [0],
  why: 'Operátorovi se hlásí jméno, co se stalo, počet postižených, místo, vlastní telefonní číslo a orientační body. Hovor vede operátor — stačí přesně odpovídat. Polohu pomůže předat aplikace Záchranka.',
  src: 'First Responder Česká Lípa, kap. 2 · skripta s. 11–12'
},
{
  id: 'org02', c: 'zaklady', m: true,
  q: 'Které chyby při volání záchranné služby skripta uvádějí jako nejčastější?',
  o: [
    'Volající odejde od postiženého',
    'Nikdo nečeká u odbočky ze silnice a posádka místo nenajde',
    'Na domě chybí číslo nebo jsou nečitelné zvonky',
    'Volající nezjistí stav postiženého a volá naslepo',
    'Volající v klidu odpovídá na otázky operátora',
    'Volající nahlásí své telefonní číslo',
    'Volající zůstane na lince, dokud operátor neukončí hovor'
  ], a: [0, 1, 2, 3],
  why: 'Na táboře se vyplatí poslat někoho čekat na příjezdovou cestu a předem znát přesnou adresu nebo GPS souřadnice místa.',
  src: 'First Responder Česká Lípa, kap. 2'
},
{
  id: 'org03', c: 'zaklady',
  q: 'Když se ujmete postiženého a začnete poskytovat první pomoc, jak dlouho u něj zůstáváte?',
  o: [
    'Až do příjezdu záchranné služby a předám jí informace o stavu a první pomoci',
    'Jen dokud se neprobere',
    'Nejvýš 10 minut',
    'Mohu odejít hned po zavolání 155'
  ], a: [0],
  why: 'Informace od zachránce jsou pro posádku velmi cenné: co se stalo, jak se stav vyvíjel, co bylo provedeno a kdy — například čas přiložení zaškrcovadla.',
  src: 'First Responder Česká Lípa, kap. 2'
}

);
