/* Banka otázek 4/4 — Táborové nemoci a péče + doplnění mezer v pokrytí skript
   (s. 8, 14, 15, 16, 19, 20, 26, 33). */
window.QB = window.QB || [];
window.QB.push(

/* ───────────────── TÁBOROVÉ NEMOCI A PÉČE ───────────────── */
{
  id: 'nem01', c: 'nemoci',
  q: 'Dítě má 38,4 °C. Co podle teplotní tabulky uděláte?',
  o: [
    'Podám lék na teplotu, klid, v teple ale nepřehřát, pitný režim',
    'Bez léků — klid, v teple, pitný režim',
    'Podám lék a začnu ochlazovat zábaly',
    'Okamžitě vyhledám lékařskou pomoc'
  ], a: [0],
  why: 'Tabulka ČČK Praha 1: 37,0–37,9 °C bez léků (klid, v teple, nepřehřát, pitný režim); 38,0–38,9 °C léky + totéž; nad 39,0 °C léky + ochlazovat; nad 40,0 °C okamžité vyhledání lékařské pomoci, léky po poradě se ZZS.',
  src: 'ČČK Praha 1, s. 5',
  note: 'Z kurzu: teplotu řešit od 38 °C.',
  tags: ['cislo']
},
{
  id: 'nem02', c: 'nemoci',
  q: 'Od jaké teploty se podle tabulky kromě léků také ochlazuje?',
  o: ['Nad 39,0 °C', 'Nad 38,0 °C', 'Nad 37,5 °C', 'Nad 40,0 °C'], a: [0],
  why: 'Nad 39 °C hrozí zvláště u menších dětí křeče z horečky, obluzení a zmatenost. Chladí se postupně — nikdy ve vaně nebo sprše, prudké ochlazení vyvolá febrilní křeč.',
  src: 'ČČK Praha 1, s. 5 · ČČK příručka, s. 162 · skripta s. 24',
  tags: ['cislo']
},
{
  id: 'nem03', c: 'nemoci',
  q: 'Jaká je fyziologická tělesná teplota a kdy je denní minimum a maximum?',
  o: [
    '36,5–37 °C; ranní minimum mezi 4.–5. hodinou, večerní maximum mezi 16.–18. hodinou',
    '35,5–36,5 °C; minimum v poledne, maximum o půlnoci',
    '37–37,5 °C; minimum večer, maximum ráno',
    '36–38 °C; teplota během dne nekolísá'
  ], a: [0],
  why: 'Proto je večerní 37,4 °C méně znepokojivé než ranní 37,4 °C. Měří se lihovým nebo digitálním teploměrem.',
  src: 'ČČK Praha 1, s. 5',
  tags: ['cislo']
},
{
  id: 'nem04', c: 'nemoci',
  q: 'Jak se provádí chladivý zábal při horečce?',
  o: [
    'Prostěradlo namočené ve studené vodě a vyždímané ovinout kolem trupu, zavinout do suché látky, měnit po asi 20 minutách a kombinovat se studeným obkladem hlavy',
    'Dítě ponořit do vany se studenou vodou na 10 minut',
    'Přiložit led přímo na kůži krku a třísel',
    'Otřít tělo lihem'
  ], a: [0],
  why: 'Zábal přichází v úvahu, když teplota stoupne nad 39 °C. Studený obklad hlavy chrání mozek před přehřátím. Dítě dezorientované horečkou se může bránit — zdravotník se nesmí nechat strhnout k použití násilí. Led se nikdy nepřikládá přímo na kůži.',
  src: 'ČČK příručka, s. 162'
},
{
  id: 'nem05', c: 'nemoci', m: true,
  q: 'Kdy je bolest hlavy u dítěte nebezpečná? (více odpovědí)',
  o: [
    'Bolest hlavy + vysoká teplota + ztuhnutí šíje',
    'Bolest, která nepolevuje',
    'Bolest hlavy po úrazu',
    'Bolest po dni stráveném na sluníčku bez pití',
    'Bolest po krátkém spánku'
  ], a: [0, 1, 2],
  why: 'Trojice horečka + bolest hlavy + ztuhlá šíje je podezření na zánět mozkových blan — dítě jde okamžitě k lékaři. Běžné příčiny (málo spánku, málo pití, slunce, stres) se řeší klidem, šerem, tekutinami a případně analgetiky.',
  src: 'ČČK Praha 1, s. 7'
},
{
  id: 'nem06', c: 'nemoci', m: true,
  q: 'Kdy je bolest břicha nebezpečná? (více odpovědí)',
  o: [
    'Silná bolest a napjatá břišní stěna',
    'Přetrvávající bolest',
    'Bolest s horečkou, zvracením a průjmem',
    'Bolest spojená se zaraženými větry, která po odchodu plynů odezní',
    'Menstruační bolest'
  ], a: [0, 1, 2],
  why: 'Příčiny bolesti břicha: úraz, stravovací chyba, otrava, záněty nitrobřišních orgánů, zaražené větry, psychika, menstruace. Léčba: zjistit příčinu, vyšetření břicha, klid, dieta, sledování stolice. Při podezření na náhlou příhodu břišní nepodáváme analgetika ani tekutiny.',
  src: 'ČČK Praha 1, s. 7 · skripta s. 21'
},
{
  id: 'nem07', c: 'nemoci', m: true,
  q: 'Kdy je zvracení nebezpečné? (více odpovědí)',
  o: [
    'Příznaky dehydratace',
    'Dítě zvrací a je apatické',
    'Zvrací déle než 6 hodin',
    'Navíc bolest břicha a průjem',
    'Zvrací sraženou krev',
    'Zvrací jednou po jízdě autobusem'
  ], a: [0, 1, 2, 3, 4],
  why: 'Léčba zvracení: zjistit příčinu, nechat vyzvracet, zajistit rehydrataci — například Cola po lžičkách. Kinedryl slouží jako prevence před cestou dopravním prostředkem.',
  src: 'ČČK Praha 1, s. 8',
  tags: ['cislo']
},
{
  id: 'nem08', c: 'nemoci', m: true,
  q: 'Co skripta uvádějí o průjmu? (více odpovědí)',
  o: [
    'Nejčastější příčinou je dietní chyba, infekce GIT, chronické onemocnění, psychika a stres',
    'Příznaky: tekutá stolice, bolest břicha až křeče',
    'Hrozí dehydratace a rozvrat vnitřního prostředí',
    'Dieta, doplnění živin, tekutin a iontů',
    'Aktivní uhlí, Endiaron',
    'Omezit příjem tekutin, aby průjem ustal'
  ], a: [0, 1, 2, 3, 4],
  why: 'Tekutiny se naopak doplňují. Na táboře navíc izolace dítěte s průjmem — hromadný výskyt průjmů je typickým signálem alimentární nákazy ze stravovacího provozu.',
  src: 'Skripta s. 20 · ČČK Praha 1, s. 8'
},
{
  id: 'nem09', c: 'nemoci',
  q: 'Kdy je zácpa nebezpečná?',
  o: [
    'Stolice neodchází 5 dnů, nebo je přítomna intenzivní bolest břicha, zvracení, křeče či vysoká teplota',
    'Stolice neodchází 1 den',
    'Dítě se stydí chodit na táborové WC',
    'Zácpa není nikdy nebezpečná'
  ], a: [0],
  why: 'Příčiny: stravovací chyba, nedostatek tekutin, psychika (na táboře velmi častá — cizí WC). Léčba: dostatek tekutin, pohyb, dieta, glycerinové čípky.',
  src: 'ČČK Praha 1, s. 8–9',
  tags: ['cislo']
},
{
  id: 'nem10', c: 'nemoci',
  q: 'Dítě má bolest v krku, vysokou teplotu a čepy na mandlích. O co pravděpodobně jde a co s tím?',
  o: [
    'Angína — k lékaři kvůli antibiotikům a izolace',
    'Běžné nachlazení — kloktadlo a pastilky',
    'Zánět hrtanu — cucat led',
    'Alergie — antihistaminika'
  ], a: [0],
  why: 'Bolest v krku bez varovných příznaků se léčí kloktadly, spreji, pastilkami, Priessnitzovým zábalem a tekutinami. Nebezpečné je: vysoká teplota, vyrážka, čepy na mandlích.',
  src: 'ČČK Praha 1, s. 9'
},
{
  id: 'nem11', c: 'nemoci', m: true,
  q: 'Kdy je kašel důvodem k návštěvě lékaře? (více odpovědí)',
  o: [
    'Bez zlepšení po 3 dnech',
    'Sípání',
    'Zelený hlen',
    'Suchý kašel první večer',
    'Kašel po spolknutí drobku'
  ], a: [0, 1, 2],
  why: 'Suchý dráždivý kašel se tlumí, vlhký produktivní se podporuje a hlen se ředí — dostatek tekutin, ale ne mléko. Kašel po vdechnutí cizího tělesa je naopak žádoucí, dokud postižený kašle účinně.',
  src: 'ČČK Praha 1, s. 9',
  tags: ['cislo']
},
{
  id: 'nem12', c: 'nemoci', m: true,
  q: 'Kdy je chřipka u dítěte nebezpečná? (více odpovědí)',
  o: [
    'Změny vědomí',
    'Epileptický záchvat',
    'Zhoršené dýchání',
    'Zimnice a bolesti těla',
    'Rýma a kašel'
  ], a: [0, 1, 2],
  why: 'Zimnice, bolest hlavy a těla, únava, rýma a kašel jsou běžné příznaky chřipky. Léčba: snížení teploty, izolace, klid, tekutiny.',
  src: 'ČČK Praha 1, s. 9–10'
},
{
  id: 'nem13', c: 'nemoci',
  q: 'Vyrážka začala na trupu, šíří se na končetiny, má puchýřky, které se potahují stroupky, a velmi svědí. Co to je?',
  o: ['Plané neštovice', 'Zarděnky', 'Kopřivka', 'Lymská borelióza'], a: [0],
  why: 'Planým neštovicím 1–2 dny předchází horečka, bolest hlavy, únava a malátnost. Léčba: na teplotu paracetamol, na vyrážku tekutý pudr. Jde o infekční onemocnění — dítě na izolaci a domů.',
  src: 'ČČK Praha 1, s. 10'
},
{
  id: 'nem14', c: 'nemoci',
  q: 'Růžová vyrážka s drobnými ostře ohraničenými lézemi začala na hlavě a krku, dítě má zduřelé mízní uzliny. O co jde?',
  o: ['Zarděnky', 'Plané neštovice', 'Ekzém', 'Opar'], a: [0],
  why: 'Zarděnková vyrážka se šíří z hlavy a krku na trup a končetiny, trvá asi tři dny a po dosažení vrcholu vybledne. Léčba: paracetamol na teplotu, tekutý pudr.',
  src: 'ČČK Praha 1, s. 11'
},
{
  id: 'nem15', c: 'nemoci',
  q: 'V místě dřívějšího přisátí klíštěte je kulatá vystouplá zarudlá skvrna, uprostřed bledší. Co to znamená?',
  o: [
    'Podezření na lymskou boreliózu — k lékaři, léčí se antibiotiky',
    'Běžná reakce na kousnutí — Fenistil gel',
    'Opruzenina — Calcium pantothenicum',
    'Plíseň — Lamisil'
  ], a: [0],
  why: 'Může, ale nemusí ji provázet příznaky připomínající chřipku. Vyrážka se může střídavě objevovat a ztrácet. Proto se každé klíště zapisuje do deníku a místo se sleduje — a rodičům se oznamuje kontakt s infekcí.',
  src: 'ČČK Praha 1, s. 12'
},
{
  id: 'nem16', c: 'nemoci', m: true,
  q: 'Přiřaďte správně vyrážku a její léčbu podle skript ČČK Praha 1. (více odpovědí)',
  o: [
    'Kopřivka z alergie — antihistaminika (Zodac, Zyrtec), Fenistil',
    'Plíseň nohou — dle lékaře (Lamisil), koupele a preventivní dezinfekce hypermanganem',
    'Opruzeniny — Calcium pantothenicum, Aviril',
    'Opar — krém Vectavir',
    'Ekzém — antibiotika'
  ], a: [0, 1, 2, 3],
  why: 'Ekzém se léčí antihistaminiky a promaštěním suchých míst (Excipial U Lipolotio, mastná Indulona) — bývá způsoben alergickou reakcí. Plíseň nohou je nutné bránit šíření, léčba může trvat i měsíc.',
  src: 'ČČK Praha 1, s. 11–13'
},
{
  id: 'nem17', c: 'nemoci',
  q: 'Dítě přijde na ošetřovnu a nevíte, co mu je. Co radí skripta ČČK Praha 1?',
  o: [
    'Změřit teplotu a mezitím si vše rozmyslet',
    'Rovnou podat analgetikum',
    'Poslat dítě zpět na program a počkat',
    'Ihned volat 155'
  ], a: [0],
  why: 'Před ošetřením se ptáme: kde to bolí, jaká je bolest (tupá, pulzující, při pohybu, v klidu), kdy to začalo, zda už tento stav dítě někdy mělo, co s tím dělá maminka a jestli to bylo horší nebo lepší.',
  src: 'ČČK Praha 1, s. 7'
},

/* ───────────────── DOPLNĚNÍ MEZER V POKRYTÍ SKRIPT ───────────────── */
{
  id: 'hyg18', c: 'hygiena', m: true,
  q: 'Co skripta řadí mezi základní živiny a co mezi ochranné látky? (více odpovědí)',
  o: [
    'Základní živiny: bílkoviny, tuky a cukry',
    'Ochranné látky: vitamíny a minerály',
    'Vyváženou střevní mikroflóru obnovuje konzumace mléčných výrobků',
    'Objem i skladba stravy se podílí na vzniku onemocnění srdce a cév (IM, CMP, diabetes)',
    'Základní živiny: vitamíny a minerály',
    'Ochranné látky: bílkoviny a tuky'
  ], a: [0, 1, 2, 3],
  why: 'Zdravotně nezávadné potraviny neobsahují žádné chemické ani biologické škodliviny. Výživa ovlivňuje zdravotní stav populace.',
  src: 'Skripta s. 8'
},
{
  id: 'hyg19', c: 'hygiena', m: true,
  q: 'Které rizikové výživové faktory skripta uvádějí? (více odpovědí)',
  o: [
    'Nadváha až obezita',
    'Vysoká spotřeba tuků',
    'Nadměrné solení',
    'Nadměrné užívání sacharidů',
    'Nadměrná spotřeba alkoholu',
    'Vysoká spotřeba zeleniny'
  ], a: [0, 1, 2, 3, 4],
  why: 'Tyto faktory se promítají do doporučení o výživě: rostlinné oleje, méně tučné mléčné výrobky, omezit uzeniny a solení, více ryb, ovoce, zeleniny a celozrnného pečiva.',
  src: 'Skripta s. 8'
},
{
  id: 'ran25', c: 'rany',
  q: 'Proč jsou rány pokousáním od zvířete či člověka zvlášť rizikové?',
  o: [
    'Hrozí nebezpečí infekce — ošetření: oplach, dezinfekce, sterilní krytí',
    'Vždy masivně krvácejí',
    'Vždy vyžadují zaškrcení',
    'Jsou vždy jedovaté'
  ], a: [0],
  why: 'V ústech zvířat i lidí je velké množství bakterií. Na táboře se vždy zjišťuje, čí bylo zvíře a zda je očkované — a rána se sleduje.',
  src: 'Skripta s. 14'
},
{
  id: 'ran26', c: 'rany',
  q: 'U kterých ran je nejčastěji nutné důkladné vyčištění od štěrku a kamínků?',
  o: ['U odřenin', 'U bodných ran', 'U řezných ran', 'U střelných ran'], a: [0],
  why: 'Znečištěné rány jsou nejčastěji odřeniny. Nečistota ponechaná v ráně vede k infekci a k „tetování“ jizvy.',
  src: 'Skripta s. 14'
},
{
  id: 'ran27', c: 'rany', m: true,
  q: 'Jaká je první pomoc u žilního krvácení? (více odpovědí)',
  o: [
    'Tamponáda, tedy stlačení rány',
    'Sterilní krytí',
    'Tlakový obvaz',
    'Při masivním krvácení protišoková poloha, není-li poraněná hlava',
    'Zaškrcení nad ránou jako první krok'
  ], a: [0, 1, 2, 3],
  why: 'Žilní krvácení (tmavá krev, nepřetržité vytékání) zaškrcení nevyžaduje — tlakový obvaz ho zvládne. Zaškrcení u žilního krvácení naopak zablokuje odtok krve a krvácení zhorší.',
  src: 'Skripta s. 15'
},
{
  id: 'ran28', c: 'rany', m: true,
  q: 'Jaká je první pomoc u vlásečnicového krvácení? (více odpovědí)',
  o: [
    'Základní toaleta',
    'Sterilní krytí',
    'Mašlička nebo strip',
    'Chlazení místa při otoku',
    'Tlakový obvaz s nabalením'
  ], a: [0, 1, 2, 3],
  why: 'Vlásečnicové krvácení vzniká při poranění drobné cévy: odřeniny, drobné ranky, modřiny, krvácení z nosu.',
  src: 'Skripta s. 15'
},
{
  id: 'ran29', c: 'rany', m: true,
  q: 'Co skripta uvádějí o krvácení z močových cest, konečníku a pohlavních orgánů? (více odpovědí)',
  o: [
    'Z močových cest nejčastěji u infekce močových cest',
    'Z konečníku nejčastěji hemoroidy',
    'Z pohlavních orgánů nejčastěji úraz nebo násilné činy',
    'U všech: protišoková opatření a vyšetření',
    'Tyto stavy nevyžadují odborné ošetření'
  ], a: [0, 1, 2, 3],
  why: 'U krvácení z konečníku a pohlavních orgánů se přidává základní toaleta a sterilní krytí. Při krvácení z pohlavních orgánů u dítěte je třeba myslet i na možnost násilí — takové zjištění se nepodceňuje a řeší se s vedoucím akce a lékařem.',
  src: 'Skripta s. 16'
},
{
  id: 'kos33', c: 'kosti', m: true,
  q: 'Jak se dělí zlomeniny podle linie lomu? (více odpovědí)',
  o: ['Lineární', 'Podélná', 'Šikmá', 'Spirálová', 'Příčná', 'Tříštivá'], a: [0, 1, 2, 3, 4],
  why: 'Tříštivá patří do dělení podle POZICE KOSTNÍCH ÚLOMKŮ (tříštivá, zaklíněná, s posunem osy, dislokovaná, nedislokovaná).',
  src: 'Skripta s. 19'
},
{
  id: 'kos34', c: 'kosti', m: true,
  q: 'Jaké jsou typy poranění páteře a jaké příznaky poranění míchy? (více odpovědí)',
  o: [
    'Poranění páteře: stlačení (komprese při pádu)',
    'Poranění páteře: ohnutí (prudký pohyb)',
    'Poranění páteře: distorze (šlehnutí bičem typické pro autonehody)',
    'Příznak poranění míchy: nepřirozená poloha vleže',
    'Příznak poranění míchy: porucha hybnosti a ochabnutí svěračů',
    'Příznak poranění míchy: vysoká horečka'
  ], a: [0, 1, 2, 3, 4],
  why: 'Ochabnutí svěračů znamená pomočení nebo pokálení bez vůle — u úrazu je to vážný příznak poškození míchy, ne známka strachu.',
  src: 'Skripta s. 33'
},
{
  id: 'sta29', c: 'stavy', m: true,
  q: 'Jaké příčiny bezvědomí skripta uvádějí? (více odpovědí)',
  o: [
    'Mozkolebeční poranění (úraz, CMP)',
    'Kardiální příčina (arytmie, šok, AIM)',
    'Toxická příčina (hypoglykemie, uremické kóma)',
    'Intoxikace (alkohol, drogy, otravy)',
    'Hluboký spánek'
  ], a: [0, 1, 2, 3],
  why: 'Bezvědomí může nastat náhle nebo se rozvinout postupně. Při bezvědomí nejasného původu vždy myslíme na intoxikaci.',
  src: 'Skripta s. 26 a 30'
}

);
