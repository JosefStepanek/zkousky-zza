/* Banka otázek 8 — podklady kurzu zaslané e-mailem (23. 9. 2026):
   „Anatomie“ (12 stran, primární zdroj pro okruh Stavba lidského těla),
   vzor „Zdravotnický deník“ (pokyny a povinnosti zdravotníka)
   a vzorové záznamy ošetřovny (karta pacienta, záznamy podle druhu obtíží).
   Kde podklady Anatomie nesedí s učebnicovou anatomií, otázka se tomu místu vyhýbá
   nebo je rozdíl uveden ve vysvětlení či v `alt`. */
window.QB = window.QB || [];
window.QB.push(

/* ─────────────── Anatomie: tkáně, kosti, svaly ─────────────── */
{
  id: 'ana15', c: 'anatomie', t: 'order',
  q: 'Seřaď od nejmenší stavební jednotky po celý organismus.',
  items: ['Buňka', 'Tkáň', 'Orgán', 'Orgánová soustava', 'Organismus'],
  why: 'Základní stavební jednotkou je buňka. Soubor buněk stejného původu, tvaru a funkce je tkáň. Tkáně vytvářejí orgány, funkčně související orgány tvoří soustavy (systémy) a soubor všech soustav je organismus.',
  src: 'Anatomie (podklady kurzu), s. 1'
},
{
  id: 'ana16', c: 'anatomie', t: 'match',
  q: 'Přiřaď druhy tkání k příkladům.',
  pairs: [
    ['výstelková tkáň', 'kůže a sliznice'],
    ['pojivová tkáň', 'vazivo, chrupavka a kost'],
    ['svalová tkáň', 'svalovina žaludku a srdce'],
    ['nervová tkáň', 'neurony'],
    ['tělní tekutiny', 'krev, tkáňový mok, mozkomíšní mok']
  ],
  why: 'Buňky výstelkové tkáně k sobě těsně přiléhají. Pro svalovou tkáň je typická dráždivost a stažlivost.',
  src: 'Anatomie (podklady kurzu), s. 1'
},
{
  id: 'ana17', c: 'anatomie',
  q: 'Jaké dvě vlastnosti jsou typické pro buňky svalové tkáně?',
  o: ['Dráždivost a stažlivost', 'Pevnost a tvrdost', 'Vstřebávání a vylučování', 'Tvorba krevních buněk a hormonů'], a: [0],
  why: 'Svalová tkáň je příčně pruhovaná (kosterní svaly), hladká (například stěna žaludku) a srdeční. Pevnost dává kostem pojivová tkáň, krevní buňky vznikají v kostní dřeni.',
  src: 'Anatomie (podklady kurzu), s. 1 a 3'
},
{
  id: 'ana18', c: 'anatomie', t: 'match',
  q: 'Přiřaď druh svaloviny k místu, kde ji najdeme.',
  pairs: [['příčně pruhovaná', 'kosterní svaly'], ['hladká', 'stěna žaludku'], ['srdeční', 'srdce']],
  extra: ['chrupavka'],
  why: 'Příčně pruhované svaly se většinou upínají přes klouby ke kostem a umožňují pohyb, menší část se upíná do kůže, k chrupavkám nebo k vazivu. Podle funkce se svaly dělí na ohýbače a natahovače, podle tvaru na dlouhé, krátké, ploché a kruhové.',
  src: 'Anatomie (podklady kurzu), s. 1 a 3'
},
{
  id: 'ana19', c: 'anatomie', t: 'match',
  q: 'Přiřaď kosti podle tvaru.',
  pairs: [['dlouhé kosti', 'kost stehenní, pažní, holenní'], ['krátké kosti', 'obratle'], ['ploché kosti', 'lopatka, lopata kosti kyčelní']],
  extra: ['chrupavky žeber'],
  why: 'Ploché kosti tvoří také většinu lebky. Uvnitř kostí bývá dutina vyplněná kostní dření.',
  src: 'Anatomie (podklady kurzu), s. 1–2'
},
{
  id: 'ana20', c: 'anatomie',
  q: 'Co je hlavním úkolem kostní dřeně?',
  o: ['Tvorba krevních buněk', 'Růst kosti do šířky', 'Výživa kloubní chrupavky', 'Spojení kostí v kloubu'], a: [0],
  why: 'V kostní dřeni se tvoří červené krvinky, krevní destičky i část bílých krvinek. Růst kosti do šířky, její hojení a výživu zajišťuje okostice.',
  src: 'Anatomie (podklady kurzu), s. 1 a 6'
},
{
  id: 'ana21', c: 'anatomie',
  q: 'Co je okostice?',
  o: [
    'Pevná blána na povrchu kosti s cévami a nervy; umožňuje růst kosti do šířky a její hojení',
    'Dutina uvnitř kosti vyplněná kostní dření',
    'Chrupavka, která pokrývá kloubní plochy',
    'Vazivový šev mezi kostmi lebky'
  ], a: [0],
  why: 'Okostice pevně lne k povrchu kosti a zajišťuje její výživu a regeneraci. Protože obsahuje nervy, je úder do místa, kde je kost těsně pod kůží (například holeň), velmi bolestivý.',
  src: 'Anatomie (podklady kurzu), s. 1'
},
{
  id: 'ana22', c: 'anatomie', t: 'match',
  q: 'Přiřaď druhy pevného spojení kostí k příkladům.',
  pairs: [
    ['vazivové spojení (švy)', 'kosti lebky v mladším věku'],
    ['chrupavčité spojení', 'žebra s hrudní kostí'],
    ['kostní spojení (srůst)', 'kosti pánve']
  ],
  extra: ['kolenní kloub'],
  why: 'Švy lebky později zkostnatí. Volným (pohyblivým) spojením kostí je kloub — spojení dvou nebo více kostí v uzavřeném kloubním pouzdře.',
  src: 'Anatomie (podklady kurzu), s. 1'
},
{
  id: 'ana23', c: 'anatomie',
  q: 'Která kost lebky je připojena volným kloubním spojením?',
  o: ['Dolní čelist', 'Kost čelní', 'Kost týlní', 'Horní čelist'], a: [0],
  why: 'Lebku tvoří většinou ploché kosti spojené švy, jen dolní čelist se kloubně připojuje ke kosti spánkové. Na lebce rozlišujeme část mozkovou a obličejovou.',
  src: 'Anatomie (podklady kurzu), s. 2'
},
{
  id: 'ana24', c: 'anatomie', t: 'match',
  q: 'Přiřaď druhy žeber podle toho, jak se vpředu upínají.',
  pairs: [
    ['žebra pravá', '7 párů — chrupavkou přímo k hrudní kosti'],
    ['žebra nepravá', '3 páry — chrupavkou k předchozímu žebru'],
    ['žebra volná', '2 páry — volně končí v břišní stěně']
  ],
  extra: ['5 párů — srostlá s klíční kostí'],
  why: 'Celkem 12 párů žeber. Vzadu jsou všechna kloubně spojena s hrudními obratli. Hrudník tvoří žebra, hrudní obratle a hrudní kost.',
  src: 'Anatomie (podklady kurzu), s. 2',
  tags: ['cislo']
},
{
  id: 'ana25', c: 'anatomie', m: true,
  q: 'Co tvoří hrudník?',
  o: ['Žebra', 'Hrudní obratle', 'Hrudní kost', 'Lopatky', 'Klíční kosti', 'Bederní obratle'], a: [0, 1, 2],
  why: 'Hrudní koš chrání plíce a srdce. Lopatka a klíční kost patří ke kostře horní končetiny (ramenní pletenec), bederní obratle k páteři pod hrudníkem.',
  src: 'Anatomie (podklady kurzu), s. 2'
},
{
  id: 'ana26', c: 'anatomie', t: 'match',
  q: 'Přiřaď části končetin ke kostem, které je tvoří.',
  pairs: [
    ['předloktí', 'kost vřetenní a kost loketní'],
    ['bérec', 'kost holenní a kost lýtková'],
    ['kostra ruky', 'kosti zápěstní, záprstní a články prstů'],
    ['kostra nohy', 'kosti zánártní, nártní a články prstů']
  ],
  extra: ['kost pažní', 'kost stehenní'],
  why: 'Paži tvoří jediná kost pažní, stehno jediná kost stehenní. Ramenní pletenec tvoří klíční kost a lopatka, na kterou se kloubem připojuje kost pažní.',
  src: 'Anatomie (podklady kurzu), s. 2'
},
{
  id: 'ana27', c: 'anatomie', m: true,
  q: 'Které párové kosti tvoří pánev?',
  o: ['Kost kyčelní', 'Kost sedací', 'Kost stydká', 'Kost holenní', 'Lopatka', 'Kost loketní'], a: [0, 1, 2],
  why: 'Tři párové kosti srůstají v kost pánevní (kostní spojení). K pánvi se kyčelním kloubem připojuje kost stehenní — podklady kurzu ji k pánevnímu pletenci řadí také. Zlomenina pánve může znamenat ztrátu až 5 litrů krve.',
  src: 'Anatomie (podklady kurzu), s. 1–2 · skripta s. 20'
},

/* ─────────────── Anatomie: srdce, cévy, krev ─────────────── */
{
  id: 'ana28', c: 'anatomie',
  q: 'Kde leží srdce?',
  o: [
    'Před páteří ve střední části hrudní dutiny, za dolní polovinou hrudní kosti, nad bránicí',
    'Celé v levé polovině hrudníku pod levou klíční kostí',
    'Pod bránicí vedle žaludku',
    'Za páteří mezi lopatkami'
  ], a: [0],
  why: 'Srdce je chráněno osrdečníkovým vakem a funguje jako pumpa. Proto se při resuscitaci stlačuje střed hrudníku — dolní polovina hrudní kosti — a srdce se tlačí proti páteři.',
  src: 'Anatomie (podklady kurzu), s. 3 · skripta s. 34'
},
{
  id: 'ana29', c: 'anatomie', t: 'tf', v: false,
  q: 'Srdce leží v levé polovině hrudníku, proto se při resuscitaci tlačí vlevo na hrudník.',
  why: 'Srdce leží uprostřed hrudní dutiny za dolní polovinou hrudní kosti, jen hrotem míří mírně doleva. Stlačuje se střed hrudníku.',
  src: 'Anatomie (podklady kurzu), s. 3 · skripta s. 34'
},
{
  id: 'ana30', c: 'anatomie', t: 'order',
  q: 'Seřaď vrstvy srdeční stěny od povrchu dovnitř.',
  items: ['Epikard', 'Myokard', 'Endokard'],
  why: 'Epikard je tenká lesklá blána na povrchu srdce, myokard nejmohutnější vrstva ze srdeční svaloviny a endokard tvoří výstelku srdečních dutin. Celé srdce obaluje osrdečník.',
  src: 'Anatomie (podklady kurzu), s. 3'
},
{
  id: 'ana31', c: 'anatomie', t: 'match',
  q: 'Přiřaď srdeční chlopně k jejich umístění.',
  pairs: [
    ['mezi pravou síní a komorou', 'chlopeň trojcípá'],
    ['mezi levou síní a komorou', 'chlopeň dvojcípá (mitrální)'],
    ['při odstupu aorty a plicnice', 'chlopně poloměsíčité']
  ],
  extra: ['chlopeň čtyřcípá'],
  why: 'Srdce je přepážkou rozdělené na pravou a levou polovinu, každá má síň a komoru. Cípaté chlopně pouštějí krev jen ze síní do komor, poloměsíčité chlopně brání jejímu návratu z aorty a plicnice zpět do komor.',
  src: 'Anatomie (podklady kurzu), s. 4'
},
{
  id: 'ana32', c: 'anatomie',
  q: 'Čím se liší tepna od žíly?',
  o: [
    'Tepna vede krev ze srdce, žíla do srdce',
    'Tepna má tenkou poddajnou stěnu, žíla silnou a pružnou',
    'Tepny jsou jen v malém oběhu, žíly jen ve velkém',
    'Tepna vede krev z plic, žíla do plic'
  ], a: [0],
  why: 'Stěna tepny je silná, pružná a elastická. Tepnou krev proudí pod tlakem, proto tepenné krvácení stříká v rytmu tepu, kdežto žilní krev vytéká souvisle.',
  src: 'Anatomie (podklady kurzu), s. 4 · skripta s. 15'
},
{
  id: 'ana33', c: 'anatomie', t: 'tf', v: false,
  q: 'Tepny vedou vždy okysličenou krev a žíly vždy odkysličenou.',
  why: 'V malém oběhu je to naopak: plicní tepny vedou tmavou odkysličenou krev z pravé komory do plic a plicní žíly jasně červenou okysličenou krev do levé síně. Tepna a žíla se rozlišují podle směru — ze srdce, nebo do srdce.',
  src: 'Anatomie (podklady kurzu), s. 4'
},
{
  id: 'ana34', c: 'anatomie',
  q: 'Co se děje ve vlásečnicích (kapilárách)?',
  o: [
    'Přes jejich stěnu z jediné vrstvy buněk přechází kyslík a živiny do tkání a oxid uhličitý a zplodiny zpět do krve',
    'Vzniká v nich podnět ke stahu srdce',
    'Tvoří se v nich červené krvinky',
    'Krev v nich teče nejrychleji z celého těla'
  ], a: [0],
  why: 'Vlásečnice tvoří velmi rozsáhlou síť — výměnnou plochu, ve které se může krev i přechodně uskladnit jako rezerva organismu.',
  src: 'Anatomie (podklady kurzu), s. 4'
},
{
  id: 'ana35', c: 'anatomie',
  q: 'Jaké jsou základní krevní skupiny?',
  o: ['A, B, AB a 0', 'A, B, C a D', 'I, II a III', 'Jen A a B'], a: [0],
  why: 'Krev je červená, neprůhledná a vazká tekutina. Obsahuje červené a bílé krvinky a krevní destičky rozptýlené v plazmě a neustále se obnovuje — asi 50 ml denně.',
  src: 'Anatomie (podklady kurzu), s. 5'
},
{
  id: 'ana36', c: 'anatomie', t: 'match',
  q: 'Přiřaď k částem krve, jak dlouho žijí.',
  pairs: [
    ['červené krvinky', 'průměrně 120 dní'],
    ['krevní destičky', 'jen několik dní'],
    ['bílé krvinky', 'od několika hodin až po 100 dní']
  ],
  extra: ['celý život'],
  why: 'Červené krvinky a destičky vznikají v kostní dřeni, bílé krvinky v kostní dřeni, slezině a mízních uzlinách.',
  src: 'Anatomie (podklady kurzu), s. 6',
  tags: ['cislo']
},
{
  id: 'ana37', c: 'anatomie',
  q: 'Na co se v krvi váže kyslík?',
  o: ['Na hemoglobin — červené krevní barvivo v červených krvinkách', 'Na krevní destičky', 'Na bílé krvinky', 'Na inzulin'], a: [0],
  why: 'Hemoglobin přenáší kyslík i oxid uhličitý. Oxid uhelnatý se na něj váže mnohem pevněji než kyslík — proto je otrava CO tak nebezpečná.',
  src: 'Anatomie (podklady kurzu), s. 6 · skripta s. 30'
},

/* ─────────────── Anatomie: trávicí soustava ─────────────── */
{
  id: 'ana38', c: 'anatomie', t: 'order',
  q: 'Seřaď části trávicí trubice podle toho, jak jimi prochází potrava.',
  items: ['Hltan', 'Jícen', 'Žaludek', 'Tenké střevo', 'Tlusté střevo', 'Konečník'],
  why: 'Jícen posouvá sousto do žaludku peristaltickými pohyby. Tenké střevo tráví potravu a vstřebává živiny, tlusté střevo lemuje obvod dutiny břišní a konečníkem odcházejí nevstřebatelné zbytky.',
  src: 'Anatomie (podklady kurzu), s. 6–7'
},
{
  id: 'ana39', c: 'anatomie', t: 'order',
  q: 'Seřaď oddíly tenkého střeva od žaludku.',
  items: ['Dvanáctník', 'Lačník', 'Kyčelník'],
  why: 'Do dvanáctníku (asi 25–30 cm) ústí společným vývodem žlučovod a slinivka břišní. Kyčelník ústí do tlustého střeva. Klky zvětšují vstřebávací plochu tenkého střeva.',
  src: 'Anatomie (podklady kurzu), s. 7'
},
{
  id: 'ana40', c: 'anatomie', t: 'match',
  q: 'Přiřaď části žaludku a hltanu k jejich popisu.',
  pairs: [
    ['česlo', 'spojení jícnu se žaludkem'],
    ['vrátník', 'přechod žaludku do dvanáctníku'],
    ['hrtanová příklopka', 'brání vdechnutí potravy při polykání']
  ],
  extra: ['výběžek slepého střeva'],
  why: 'Hltan je společný oddíl dýchacích a polykacích cest (nosohltan, ústní a hrtanová část). U bezvědomého ochranné reflexy chybějí a zvratky mohou zatéct do dýchacích cest — proto poloha na boku.',
  src: 'Anatomie (podklady kurzu), s. 6–7'
},
{
  id: 'ana41', c: 'anatomie', t: 'match',
  q: 'Přiřaď údaje k orgánům trávicí soustavy.',
  pairs: [
    ['jícen', 'délka asi 25 cm'],
    ['žaludek', 'objem 1,5–2 litry'],
    ['tenké střevo', 'délka asi 3–5 m'],
    ['tlusté střevo', 'délka asi 1,5 m'],
    ['červovitý výběžek', 'délka asi 6 cm']
  ],
  extra: ['délka asi 12 m'],
  why: 'Tenké střevo je nejdelší oddíl trávicí soustavy. Tlusté střevo je široké 5–8 cm, jeho nejdelší částí je tračník. Játra váží zhruba 1,5 kg.',
  src: 'Anatomie (podklady kurzu), s. 7',
  tags: ['cislo']
},
{
  id: 'ana42', c: 'anatomie', t: 'match',
  q: 'Přiřaď orgány k jejich úloze.',
  pairs: [
    ['žlučník', 'zásobárna žluči'],
    ['slinivka břišní', 'pankreatická šťáva a inzulin'],
    ['játra', 'zneškodňování jedovatých látek'],
    ['ledviny', 'filtrace krve a tvorba moči']
  ],
  extra: ['tvorba červených krvinek'],
  why: 'Do jater přivádí vrátnicová žíla krev se vstřebanými živinami ze žaludku, střev, slinivky a sleziny. Žluč se ve žlučníku zahušťuje a vyprazdňuje do dvanáctníku, kde pomáhá trávit.',
  src: 'Anatomie (podklady kurzu), s. 7 a 9'
},

/* ─────────────── Anatomie: dýchání, vylučování ─────────────── */
{
  id: 'ana43', c: 'anatomie',
  q: 'Jaký je rozdíl mezi zevním a vnitřním dýcháním?',
  o: [
    'Zevní: výměna plynů v plicních sklípcích; vnitřní: výměna mezi krví a buňkami tkání',
    'Zevní: dýchání nosem; vnitřní: dýchání ústy',
    'Zevní: nádech; vnitřní: výdech',
    'Zevní: dýchání plícemi; vnitřní: dýchání kůží'
  ], a: [0],
  why: 'V plicních sklípcích přechází kyslík do krve a oxid uhličitý z krve přes tenkou alveolokapilární membránu. V tkáních si krev s buňkami vymění kyslík za oxid uhličitý.',
  src: 'Anatomie (podklady kurzu), s. 8'
},
{
  id: 'ana44', c: 'anatomie', m: true,
  q: 'Které svaly jsou hlavními dýchacími svaly?',
  o: ['Bránice', 'Mezižeberní svaly', 'Břišní svaly', 'Prsní svaly', 'Svaly krku', 'Zádové svaly'], a: [0, 1],
  why: 'Svaly krku, prsní a další jsou jen pomocné dýchací svaly — zapojují se při dušnosti. Proto se dušnému astmatikovi uleví v polosedu, kde může pomocné svaly zapojit.',
  src: 'Anatomie (podklady kurzu), s. 8 · skripta s. 23'
},
{
  id: 'ana45', c: 'anatomie',
  q: 'Kde se vdechovaný vzduch ohřívá a zvlhčuje?',
  o: ['V dutině nosní', 'V plicních sklípcích', 'V průdušnici', 'V jícnu'], a: [0],
  why: 'Dutina nosní patří k horním cestám dýchacím spolu s dutinou ústní a nosohltanem, který je křižovatkou dýchací a trávicí cesty.',
  src: 'Anatomie (podklady kurzu), s. 8'
},
{
  id: 'ana46', c: 'anatomie',
  q: 'Jak se jmenuje základní jednotka ledviny, která z krve filtruje moč?',
  o: ['Nefron', 'Neuron', 'Klk', 'Plicní sklípek'], a: [0],
  why: 'Nefrony leží v kůře ledvin. Ledviny jsou párový orgán, který čistí krev od odpadních látek metabolismu. Moč odtéká močovody do močového měchýře.',
  src: 'Anatomie (podklady kurzu), s. 9'
},
{
  id: 'ana47', c: 'anatomie', t: 'match',
  q: 'Přiřaď údaje k vylučovací soustavě.',
  pairs: [
    ['močovod', 'délka asi 30 cm'],
    ['ženská močová trubice', 'délka 3–4 cm'],
    ['mužská močová trubice', 'délka asi 20 cm'],
    ['kapacita močového měchýře', 'asi 750 ml'],
    ['nucení na močení u dospělého', 'při náplni asi 250 ml']
  ],
  extra: ['asi 2 litry'],
  why: 'Krátká ženská močová trubice je důvod, proč mají dívky častěji záněty močových cest — na táboře pomáhá dostatek pití, nepodchlazovat se a nezadržovat moč.',
  src: 'Anatomie (podklady kurzu), s. 9',
  tags: ['cislo']
},

/* ─────────────── Anatomie: nervy, smysly, hormony ─────────────── */
{
  id: 'ana48', c: 'anatomie', m: true,
  q: 'Co tvoří centrální nervový systém?',
  o: ['Mozek', 'Mícha', 'Hlavové nervy', 'Míšní nervy', 'Vegetativní nervy', 'Smyslové receptory'], a: [0, 1],
  why: 'Periferní nervový systém tvoří hlavové nervy (12 párů ze spodiny mozku), míšní nervy vystupující z míchy mezi obratli a vegetativní nervový systém.',
  src: 'Anatomie (podklady kurzu), s. 10'
},
{
  id: 'ana49', c: 'anatomie',
  q: 'Kolik párů hlavových nervů vystupuje ze spodiny mozku?',
  o: ['12', '7', '24', '5'], a: [0],
  why: 'Míšní nervy vystupují z míchy mezi obratli — podklady kurzu uvádějí 32 párů (učebnice obvykle 31).',
  src: 'Anatomie (podklady kurzu), s. 10',
  tags: ['cislo']
},
{
  id: 'ana50', c: 'anatomie', m: true,
  q: 'Které z těchto částí jsou oddíly mozku?',
  o: ['Mozeček', 'Mezimozek', 'Prodloužená mícha', 'Hrtan', 'Kostní dřeň', 'Nosohltan'], a: [0, 1, 2],
  why: 'Podklady uvádějí oddíly přední mozek, střední mozek, mezimozek, mozeček a prodlouženou míchu, na kterou navazuje mícha. Mozek se dělí na laloky čelní, temenní, týlní a spánkový a tvoří ho šedá a bílá hmota.',
  src: 'Anatomie (podklady kurzu), s. 10'
},
{
  id: 'ana51', c: 'anatomie',
  q: 'Proč jsou mozkové buňky (neurony) tak zranitelné?',
  o: [
    'Jsou velmi citlivé na nedostatek kyslíku a živin, hlavně cukru — při nedostatku vznikají nevratné změny',
    'Nemají žádný obal, takže je poškodí každý otřes',
    'Tvoří se jen v kostní dřeni a obnovují se pomalu',
    'Leží přímo pod kůží hlavy'
  ], a: [0],
  why: 'Proto se při zástavě oběhu nesmí ztrácet čas a proto je nebezpečná hypoglykemie u diabetika. Mozek chrání lebka, plény a mozkomíšní mok.',
  src: 'Anatomie (podklady kurzu), s. 10'
},
{
  id: 'ana52', c: 'anatomie',
  q: 'Co zajišťuje vegetativní nervový systém?',
  o: [
    'Činnost nezávislou na vůli, například dýchání — tvoří ho sympatikus a parasympatikus',
    'Vědomé pohyby kosterních svalů',
    'Vnímání tlaku, bolesti a tepla v kůži',
    'Tvorbu mozkomíšního moku'
  ], a: [0],
  why: 'Sympatikus připravuje tělo na zátěž a stres, parasympatikus na klid a trávení. Vůlí je nelze ovládat.',
  src: 'Anatomie (podklady kurzu), s. 10'
},
{
  id: 'ana53', c: 'anatomie',
  q: 'Co jsou exteroreceptory?',
  o: [
    'Smyslové buňky, které přijímají podněty z vnějšího prostředí — například oko, ucho, chuťové pohárky',
    'Smyslové buňky, které přijímají podněty z vlastního těla — například rovnovážné ústrojí',
    'Žlázy, které vylučují hormony do krve',
    'Nervy, které vystupují z míchy mezi obratli'
  ], a: [0],
  why: 'Podněty z vlastního těla přijímají interoreceptory. Kožní, hloubková a útrobní čidla v kůži, svalech, šlachách a útrobách vnímají tlak, bolest, teplo a chlad.',
  src: 'Anatomie (podklady kurzu), s. 11–12'
},
{
  id: 'ana54', c: 'anatomie', t: 'order',
  q: 'Seřaď části ucha od povrchu dovnitř.',
  items: ['Zevní ucho', 'Střední ucho', 'Vnitřní ucho'],
  why: 'V uchu je sluchové ústrojí (vnímání zvuku) a rovnovážné ústrojí (vnímání polohy a rovnováhy). Výtok čiré tekutiny nebo krve z ucha po úrazu hlavy ukazuje na zlomeninu spodiny lební.',
  src: 'Anatomie (podklady kurzu), s. 12 · skripta s. 32'
},
{
  id: 'ana55', c: 'anatomie', m: true,
  q: 'Co vnímají kožní čidla?',
  o: ['Tlak', 'Bolest', 'Teplo a chlad', 'Barvy', 'Vůně', 'Chuť'], a: [0, 1, 2],
  why: 'Čidla mají podobu hmatových tělísek nebo volných nervových zakončení v kůži, svalech, šlachách a útrobách. Chuťové ústrojí je ve sliznici dutiny ústní (hlavně chuťové pohárky jazyka), čichové ve sliznici horní části dutiny nosní.',
  src: 'Anatomie (podklady kurzu), s. 12'
},
{
  id: 'ana56', c: 'anatomie', t: 'match',
  q: 'Přiřaď žlázy k hormonům, které tvoří.',
  pairs: [
    ['štítná žláza', 'kalcitonin'],
    ['příštítná tělíska', 'parathormon'],
    ['nadledviny', 'adrenalin a noradrenalin'],
    ['vaječníky', 'estrogen a progesteron'],
    ['varlata', 'testosteron']
  ],
  extra: ['inzulin'],
  why: 'Kalcitonin a parathormon řídí hospodaření s vápníkem a jeho ukládání v kostech. Inzulin a glukagon tvoří slinivka břišní. Adrenalin a noradrenalin řídí reakci na akutní stres.',
  src: 'Anatomie (podklady kurzu), s. 12'
},
{
  id: 'ana57', c: 'anatomie',
  q: 'Co v těle dělají adrenalin a noradrenalin z nadledvin?',
  o: ['Řídí reakci organismu na akutní stres', 'Snižují hladinu cukru v krvi', 'Řídí ukládání vápníku v kostech', 'Řídí tvorbu moči v ledvinách'], a: [0],
  why: 'Patří mezi katecholaminy. Nadledviny tvoří také glukokortikoidy a mineralokortikoidy. Adrenalin je i účinnou látkou autoinjektoru při anafylaktickém šoku.',
  src: 'Anatomie (podklady kurzu), s. 12 · skripta s. 25'
},

/* ─────────────── Zdravotnický deník (vzor) ─────────────── */
{
  id: 'dnk01', c: 'povinnosti', m: true,
  q: 'Které části má vzorový Zdravotnický deník?',
  o: [
    'Záznam příznaků onemocnění, úrazů a přisátých klíšťat',
    'Výpis ze zdravotní dokumentace',
    'Výkaz o nemocnosti a úrazovosti',
    'Jídelníček a pitný režim',
    'Rozpis služeb vedoucích',
    'Inventuru lékárničky'
  ], a: [0, 1, 2],
  why: 'První část — záznamy ošetření — je potřeba namnožit v dostatečném množství. Deník je dokladem o nemocnosti během akce podle vyhlášky 106/2001 Sb.; záznamy se dělají pečlivě a pravidelně.',
  src: 'Vzor zdravotnického deníku (podklady kurzu)'
},
{
  id: 'dnk02', c: 'povinnosti', m: true,
  q: 'Co zdravotník udělá ještě před zahájením akce?',
  o: [
    'Zkontroluje a doplní lékárničku',
    'Zkontroluje zásobování pitnou vodou',
    'Podílí se na sestavení jídelníčku',
    'Vystaví dětem posudky o zdravotní způsobilosti',
    'Ohlásí akci krajské hygienické stanici',
    'Podepíše za rodiče prohlášení o bezinfekčnosti'
  ], a: [0, 1, 2],
  why: 'Posudky vystavuje praktický lékař dítěte, akci ohlašuje pořádající osoba a bezinfekčnost podepisuje zákonný zástupce. Deník přebírá zdravotník před nástupem, předem vyplní první stranu a převezme seznam účastníků a pracovníků.',
  src: 'Vzor zdravotnického deníku (podklady kurzu) · skripta s. 3 a 5'
},
{
  id: 'dnk03', c: 'povinnosti', m: true,
  q: 'Co zdravotník dělá při zahájení akce?',
  o: [
    'Provede zdravotní filtr a převezme prohlášení o bezinfekčnosti',
    'Převezme od rodičů léky, které dítě užívá',
    'Seznámí se se zdravotní dokumentací a upozorní vedoucí na zdravotní odchylky dětí',
    'Převezme a zkontroluje ošetřovnu a lékárničku',
    'Vrátí rodičům posudky o zdravotní způsobilosti',
    'Pošle kopii deníku hygienické stanici',
    'Dětem s alergií zakáže účast na programu'
  ], a: [0, 1, 2, 3],
  why: 'U provozních pracovníků (kuchyně) kontroluje navíc potravinářské průkazy. Posudky se vracejí až po skončení akce.',
  src: 'Vzor zdravotnického deníku (podklady kurzu) · skripta s. 5'
},
{
  id: 'dnk04', c: 'povinnosti',
  q: 'Komu zdravotník po skončení akce předá vyplněný a podepsaný zdravotnický deník?',
  o: ['Hlavnímu vedoucímu akce', 'Krajské hygienické stanici', 'Rodičům dětí', 'Praktickému lékaři dětí'], a: [0],
  why: 'Spolu se seznamem účastníků a pracovníků a s nástupními listy dětí i vedoucích. Tyto doklady se archivují nejméně 6 měsíců. Zdravotník také předá lékárničku a inventář ošetřovny a rodičům nezletilých, kteří během akce onemocněli, písemnou informaci.',
  src: 'Vzor zdravotnického deníku (podklady kurzu) · skripta s. 5'
},
{
  id: 'dnk05', c: 'povinnosti', m: true,
  q: 'Co se zapisuje do výpisu ze zdravotní dokumentace (druhá část deníku)?',
  o: ['Alergie', 'Zvýšená krvácivost', 'Přecitlivělost na některé léky', 'Pravidelně užívané léky', 'Prospěch ve škole', 'Výsledky táborových soutěží', 'Velikost oblečení'], a: [0, 1, 2, 3],
  why: 'Jde o zdravotní odchylky, o kterých musí zdravotník i vedoucí vědět. Výskyt přenosných nemocí zdravotník hlásí lékaři a hygienické stanici.',
  src: 'Vzor zdravotnického deníku (podklady kurzu)'
},
{
  id: 'dnk06', c: 'povinnosti',
  q: 'Co zapíšete u každého přisátého klíštěte?',
  o: [
    'Datum a čas, místo přisátí a kdo ho ošetřil',
    'Jen celkový počet klíšťat za celý turnus',
    'Druh a velikost klíštěte',
    'Nic, dokud se neobjeví zarudnutí'
  ], a: [0],
  why: 'Každé klíště má ve vzorových záznamech vlastní řádek (klíště č., datum a čas, místo a poznámky). Místo se pak sleduje a rodičům se po akci oznámí možný kontakt s infekcí.',
  src: 'Záznamy ošetřovny (podklady kurzu) · skripta s. 14'
},

/* ─────────────── Záznamy ošetřovny: varovné znaky ─────────────── */
{
  id: 'zaz01', c: 'kosti', m: true,
  q: 'Po úderu do hlavy vyplňujete záznam. Které zjištění je varovné?',
  o: [
    'Bezvědomí po úrazu, i krátkodobé',
    'Dítě nedokáže popsat, co se stalo',
    'Opakované zvracení',
    'Výtok čiré tekutiny nebo krve z ucha či nosu',
    'Boule na čele bez dalších obtíží',
    'Odřenina na čele, která už nekrvácí',
    'Dítě přesně popíše, jak se to stalo'
  ], a: [0, 1, 2, 3],
  why: 'Varovné je také nápadně odlišné chování (zmatenost, neklid), krutá bolest a porušení celistvosti lebky. Záznam se opakuje při druhé a třetí kontrole — změna stavu je stejně důležitá jako první nález.',
  src: 'Záznamy ošetřovny (podklady kurzu) · skripta s. 32'
},
{
  id: 'zaz02', c: 'kosti', m: true,
  q: 'Dítě bolí břicho. Které zjištění ze záznamu ošetřovny je varovné?',
  o: [
    'Tvrdé břicho',
    'Krev ve zvratcích nebo černá dehtovitá stolice',
    'Bolest trvá déle než 12 hodin',
    'Úraz břicha, i několik dní zpátky',
    'Bolest zmizí po odchodu větrů',
    'Dítě má hlad a bolest přejde po jídle',
    'Mírná bolest při zácpě, která po vyprázdnění ustoupí'
  ], a: [0, 1, 2, 3],
  why: 'Varovná je dále horečka nad 38 °C, obtíže s dýcháním, krutá bolest, známky dehydratace a u dívek možné těhotenství. Při podezření na náhlou příhodu břišní nepodáváme léky proti bolesti ani tekutiny.',
  src: 'Záznamy ošetřovny (podklady kurzu) · skripta s. 21'
},
{
  id: 'zaz03', c: 'kosti', m: true,
  q: 'Které zjištění u úrazu končetiny je varovné?',
  o: [
    'Končetinu nemůže zatížit',
    'Necitlivé nebo mravenčící prsty',
    'Jiná barva nebo teplota než na druhé končetině',
    'Velká nebo rychle se zvětšující modřina',
    'Při úrazu cítil prasknutí nebo lupnutí',
    'Po chlazení bolest ustoupila a hýbe normálně',
    'Drobná odřenina bez otoku',
    'Únava nohou po celodenní túře'
  ], a: [0, 1, 2, 3, 4],
  why: 'Stejně tak otevřená zlomenina a omezená hybnost. Změna barvy, teploty a citlivosti prstů ukazuje na útlak cév nebo nervů — kontroluje se i po přiložení dlahy.',
  src: 'Záznamy ošetřovny (podklady kurzu) · skripta s. 19'
},
{
  id: 'zaz04', c: 'rany', m: true,
  q: 'Které zjištění u rány patří k lékaři?',
  o: [
    'Uvnitř rány jsou vidět hlubší struktury',
    'Okraje rány se rozestupují',
    'Rána je silně znečištěná',
    'Pokousání nebo podrápání zvířetem',
    'Zarudnutí, otok a zápach — známky infekce',
    'Povrchová odřenina, která po omytí nekrvácí',
    'Drobné říznutí papírem',
    'Malá tříska, která šla celá vytáhnout'
  ], a: [0, 1, 2, 3, 4],
  why: 'Riziková je i rána vzniklá v infekčním prostředí. Rozestupující se ránu je potřeba včas ošetřit u lékaře; u znečištěných a kousnutých ran jde navíc o tetanus, u zvířat i o vzteklinu.',
  src: 'Záznamy ošetřovny (podklady kurzu) · skripta s. 13–14'
},
{
  id: 'zaz05', c: 'stavy', m: true,
  q: 'Dítě bodla vosa. Které zjištění je varovné?',
  o: [
    'Dechové obtíže nebo motání hlavy',
    'Otok mimo místo vpichu',
    'Vyrážka a svědění i jinde na těle',
    'Výrazný otok kolem vpichu',
    'Malé zarudnutí a bolest v místě vpichu',
    'Svědění jen v místě vpichu',
    'Pláč z leknutí, který brzy přejde'
  ], a: [0, 1, 2, 3],
  why: 'Dechové obtíže, motání hlavy a reakce mimo místo vpichu ukazují na celkovou alergickou reakci, která může přejít v anafylaktický šok — volat 155. Každé bodnutí se zapisuje zvlášť a stav se kontroluje opakovaně.',
  src: 'Záznamy ošetřovny (podklady kurzu) · skripta s. 25'
},

/* ─────────────── Anatomie: obrázkové otázky (vlastní schémata podle obrázků v podkladech) ─────────────── */
{
  id: 'ana58', c: 'anatomie', keep: true, fig: 'srdceOddily',
  q: 'Schéma srdce zepředu — pravá strana těla je na obrázku vlevo. Ve kterém oddílu začíná velký krevní oběh?',
  o: ['Oddíl A', 'Oddíl B', 'Oddíl C', 'Oddíl D'], a: [3],
  why: 'D je levá komora — z ní vede aorta okysličenou krev do celého těla. A je pravá síň (přivádějí do ní krev duté žíly), B pravá komora (začíná v ní malý oběh do plic), C levá síň (ústí do ní plicní žíly).',
  src: 'Anatomie (podklady kurzu), s. 4–5'
},
{
  id: 'ana59', c: 'anatomie', keep: true, fig: 'srdceOddily',
  q: 'Do kterého oddílu srdce přivádějí plicní žíly jasně červenou okysličenou krev?',
  o: ['Oddíl A', 'Oddíl B', 'Oddíl C', 'Oddíl D'], a: [2],
  why: 'C je levá síň. Z ní krev projde dvojcípou (mitrální) chlopní do levé komory (D) a odtud do aorty. Pravá strana srdce (A, B) pracuje s odkysličenou krví.',
  src: 'Anatomie (podklady kurzu), s. 4–5'
},
{
  id: 'ana60', c: 'anatomie', keep: true, fig: 'srdcePrevod',
  q: 'Který bod na schématu převodního systému srdce je síňokomorový uzel?',
  o: ['Bod A', 'Bod B', 'Bod C', 'Bod D'], a: [1],
  why: 'Síňokomorový uzel (B) leží na rozhraní síní a komor a převádí vzruch ze síní na komory. Vzruch vzniká v sinusovém uzlu (A) v pravé síni, z B pokračuje svazkem v přepážce (C) a raménky do vláken ve stěnách komor (D).',
  src: 'Anatomie (podklady kurzu), s. 4'
},
{
  id: 'ana61', c: 'anatomie', keep: true, fig: 'srdcePrevod',
  q: 'Ve kterém bodě na schématu vzniká vzruch, který udává rytmus srdce?',
  o: ['Bod A', 'Bod B', 'Bod C', 'Bod D'], a: [0],
  why: 'A je sinusový uzel v pravé síni. B je síňokomorový uzel, C Hisův svazek v přepážce mezi komorami, D Purkyňova vlákna ve stěně komory.',
  src: 'Anatomie (podklady kurzu), s. 4 · First Responder Česká Lípa, kap. 1'
},
{
  id: 'ana62', c: 'anatomie', fig: 'hrudnikZebra',
  q: 'Jak se nazývají žebra označená na schématu písmenem B?',
  o: ['Žebra nepravá', 'Žebra pravá', 'Žebra volná', 'Žebra krční'], a: [0],
  why: 'Tři páry nepravých žeber (B) se připojují chrupavkou k žebru nad sebou. Sedm párů pravých žeber (A) vede chrupavkou přímo k hrudní kosti (D), dva páry volných žeber (C) končí volně v břišní stěně.',
  src: 'Anatomie (podklady kurzu), s. 2'
},
{
  id: 'ana63', c: 'anatomie', fig: 'hrudnikZebra',
  q: 'Co je na schématu hrudníku označeno písmenem C?',
  o: ['Žebra volná — 2 páry', 'Žebra nepravá — 3 páry', 'Žebra pravá — 7 párů', 'Klíční kost'], a: [0],
  why: 'Volná žebra nejsou vpředu připojena k hrudní kosti ani k jinému žebru. Celkem má člověk 12 párů žeber.',
  src: 'Anatomie (podklady kurzu), s. 2',
  tags: ['cislo']
},
{
  id: 'ana64', c: 'anatomie', keep: true, fig: 'pater',
  q: 'Schéma páteře z boku, hlava je nahoře. Který úsek má 12 obratlů a připojují se k němu žebra?',
  o: ['Úsek A', 'Úsek B', 'Úsek C', 'Úsek D'], a: [1],
  why: 'B je hrudní páteř (12 obratlů). A je krční páteř (7 obratlů), C bederní (5 mohutných obratlů), D kost křížová s kostrčí. Páteř má ze strany tvar dvojitého S.',
  src: 'Anatomie (podklady kurzu), s. 2',
  tags: ['cislo']
},
{
  id: 'ana65', c: 'anatomie', fig: 'pater',
  q: 'Jak se jmenuje úsek páteře označený písmenem C?',
  o: ['Bederní páteř — 5 obratlů', 'Krční páteř — 7 obratlů', 'Hrudní páteř — 12 obratlů', 'Kost křížová'], a: [0],
  why: 'Bederní obratle jsou největší, protože nesou váhu celého trupu. Mícha končí zhruba na úrovni posledního hrudního až prvního bederního obratle.',
  src: 'Anatomie (podklady kurzu), s. 2 a 10',
  tags: ['cislo']
},
{
  id: 'ana66', c: 'anatomie', fig: 'dychaci',
  q: 'Co je na schématu dýchací soustavy označeno písmenem A?',
  o: ['Průdušnice', 'Jícen', 'Průdušky', 'Hrtanová příklopka'], a: [0],
  why: 'Průdušnice vede vzduch z hrtanu a dělí se na dvě průdušky (B), které se dál větví na průdušinky zakončené plicními sklípky. Jícen leží za průdušnicí.',
  src: 'Anatomie (podklady kurzu), s. 8–9'
},
{
  id: 'ana67', c: 'anatomie', fig: 'dychaci',
  q: 'Schéma plic zepředu — pravá strana těla je na obrázku vlevo. Která plíce je pravá?',
  o: ['C — má tři laloky', 'D — má tři laloky', 'C — má dva laloky', 'D — má dva laloky'], a: [0],
  why: 'Pravá plíce má tři laloky, levá dva. Levá plíce je menší a má zářez, ve kterém leží srdce.',
  src: 'Anatomie (podklady kurzu), s. 8–9'
},
{
  id: 'ana68', c: 'anatomie', fig: 'mocova',
  q: 'Co je na schématu vylučovací soustavy označeno písmenem B?',
  o: ['Močovody', 'Močová trubice', 'Nadledviny', 'Ledvinné tepny'], a: [0],
  why: 'Močovody jsou dvě tenké trubice asi 30 cm dlouhé, které vedou moč z ledvin (A) do močového měchýře (C). Z měchýře odvádí moč ven močová trubice (D).',
  src: 'Anatomie (podklady kurzu), s. 9'
},
{
  id: 'ana69', c: 'anatomie', keep: true, fig: 'mocova',
  q: 'Která část na schématu je u žen dlouhá jen 3–4 cm, kdežto u mužů asi 20 cm?',
  o: ['Část A', 'Část B', 'Část C', 'Část D'], a: [3],
  why: 'D je močová trubice. Protože je u žen krátká, mají dívky častěji záněty močových cest.',
  src: 'Anatomie (podklady kurzu), s. 9',
  tags: ['cislo']
},
{
  id: 'ana70', c: 'anatomie', fig: 'mozekLaloky',
  q: 'Mozek z boku, obličej je vlevo. Jak se jmenuje lalok označený písmenem C?',
  o: ['Týlní', 'Čelní', 'Temenní', 'Spánkový'], a: [0],
  why: 'A je čelní lalok, B temenní (za centrální brázdou), C týlní (vzadu), D spánkový (pod boční brázdou). Pod týlním lalokem leží mozeček.',
  src: 'Anatomie (podklady kurzu), s. 10'
},
{
  id: 'ana71', c: 'anatomie', fig: 'mozekLaloky',
  q: 'Jak se jmenuje lalok označený písmenem D?',
  o: ['Spánkový', 'Čelní', 'Temenní', 'Týlní'], a: [0],
  why: 'Spánkový lalok leží pod boční brázdou, v úrovni spánku. Mozek je uložen v lebce a chráněn plenami a mozkomíšním mokem.',
  src: 'Anatomie (podklady kurzu), s. 10'
},
{
  id: 'ana72', c: 'anatomie', fig: 'ucho',
  q: 'Jak se jmenuje část ucha označená písmenem C, ve které je hlemýžď a rovnovážné ústrojí?',
  o: ['Vnitřní ucho', 'Střední ucho', 'Zevní ucho', 'Eustachova trubice'], a: [0],
  why: 'A je zevní ucho (boltec a zvukovod), B střední ucho (za bubínkem, se sluchovými kůstkami, Eustachovou trubicí propojené s nosohltanem), C vnitřní ucho.',
  src: 'Anatomie (podklady kurzu), s. 12'
},
{
  id: 'ana73', c: 'anatomie', fig: 'travici',
  q: 'Co je na schématu trávicí soustavy (pohled zepředu) označeno písmenem A?',
  o: ['Játra', 'Žaludek', 'Slinivka břišní', 'Slezina'], a: [0],
  why: 'Játra leží vpravo pod bránicí a váží asi 1,5 kg. B je žaludek, C tlusté střevo, D kličky tenkého střeva.',
  src: 'Anatomie (podklady kurzu), s. 7–8'
},
{
  id: 'ana74', c: 'anatomie', keep: true, fig: 'travici',
  q: 'Které písmeno na schématu označuje tlusté střevo?',
  o: ['Útvar A', 'Útvar B', 'Útvar C', 'Útvar D'], a: [2],
  why: 'Tlusté střevo (asi 1,5 m) lemuje obvod dutiny břišní a obkružuje kličky tenkého střeva (D). Na jeho začátku vpravo dole je slepé střevo s červovitým výběžkem.',
  src: 'Anatomie (podklady kurzu), s. 7–8'
}

);
