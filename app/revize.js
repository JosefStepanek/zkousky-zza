/* Revize banky otázek.
   set: přepis polí otázky (id → nová pole).
   add: další chybné možnosti připojené na konec (id → [možnosti]) — aby otázky s více
   správnými odpověďmi neměly vzorec „označ všechno kromě jedné“. Indexy správných odpovědí
   se nemění, protože se připojuje až za stávající možnosti. */
window.QREV = {
  set: {
    vod05: {
      m: false,
      q: 'Dítě se topí asi 4 metry od břehu, je při vědomí a vy máte po ruce záchranný kruh na laně. Jaký způsob záchrany zvolíte?',
      o: ['Hodit mu kruh na laně ze břehu', 'Skočit pro něj do vody bez pomůcky', 'Doplavat k němu a táhnout ho za vlasy', 'Běžet pro loďku na druhý konec tábora'],
      a: [0],
      why: 'Volí se vždy nejnižší stupeň záchrany, který stačí — čím vyšší stupeň, tím větší riziko pro zachránce. Pořadí: slovem ze břehu → házecí pomůcka → dosažením ze břehu → pomocí plavidla → dosažením z mělčiny → osobní zásah. Tonoucímu dítěti samotné povzbuzení nestačí a kruh je po ruce, proto házecí pomůcka. Osobní zásah jen proškolený plavec, hrozí utonutí zachránce; za ruku nebo vlasy se táhne až tonoucí v bezvědomí.'
    },
    sta10: {
      q: 'Co je při epileptickém záchvatu zakázané?',
      o: [
        'Bránit křečím zalehnutím postiženého',
        'Rozevírat zaťaté čelisti a vsouvat předměty do úst',
        'Vytahovat nebo připínat jazyk',
        'Snažit se postiženého probudit',
        'Odstranit nebezpečné předměty z dosahu',
        'Chránit postiženému hlavu, aby se neporanil',
        'Po probuzení ho uložit do polohy na boku',
        'Zavolat záchrannou službu'
      ],
      a: [0, 1, 2, 3],
      why: 'Skripta vyjmenovávají, co nikdy nedělat: nebránit křečím zalehnutím, nerozevírat zaťaté čelisti a nevsouvat předměty do úst, nevytahovat a nepřipínat jazyk, nesnažit se postiženého probouzet. Naopak odstranit nebezpečné předměty, chránit hlavu, po odeznění záklon hlavy, po probuzení poloha na boku — a volat ZZS, zejména u prvního záchvatu nebo když se dítě neprobírá.'
    }
  },

  add: {
    /* Zákony */
    zak05: ['Seznam vedoucích a jejich telefonní čísla', 'Rozpis programu akce'],
    zak12: ['Absolvent kurzu první pomoci v autoškole', 'Plavčík s platným průkazem'],
    zak19: ['Jedna sprchová růžice na 10 dětí', 'Plocha na jedno ubytované dítě nejméně 4 m²'],
    zak20: ['Na ošetřovně smějí být patrová lůžka pro děti od 7 let', 'Izolace může sdílet záchod s ubytovanými dětmi'],

    /* Zdravotník a dokumentace */
    pov01: ['Vybere od rodičů prohlášení o bezinfekčnosti týden před odjezdem', 'Zajistí dětem očkování proti klíšťové encefalitidě'],
    pov02: ['Zprávy od zubního lékaře', 'Plnou moc rodičů k podpisu operace'],
    pov04: ['Rodné číslo rodičů', 'Podpis ošetřovaného dítěte', 'Cenu použitých léků'],
    pov07: ['Vyhodí prohlášení o bezinfekčnosti hned po skončení akce', 'Pošle posudky dětí jejich praktickým lékařům', 'Předá originál zdravotnického deníku rodičům'],
    pov08: ['Na nákup potravin a jejich cenu', 'Na výběr her do programu'],
    pov09: ['Autoritativní rozhodování bez vysvětlení', 'Ochota vydat lék na předpis, když dítě prosí'],
    pov10: ['Nechat nemocné dítě bez dohledu, aby se vyspalo', 'Podávat léky na předpis z vlastní domácí lékárničky', 'Omezit pití, aby dítě nemuselo na záchod'],
    pov11: ['Nemocné rozdělit do různých pokojů mezi zdravé děti', 'Podat všem dětem preventivně antibiotika', 'Pokračovat v programu bez omezení'],

    /* Hygiena */
    hyg07: ['Přípravky smíchat, aby působily proti více mikrobům', 'Dezinfekci hned setřít, aby nepoškodila povrch'],
    hyg09: ['Mytí vlasů každý den', 'Koupání v teplé vodě každý den', 'Dezinfekce rukou místo mytí mýdlem'],
    hyg10: ['Co nejdelší polední klid', 'Program řízený přáním dětí'],
    hyg12: ['Chléb a pečivo', 'Vařené těstoviny'],
    hyg15: ['Omezit tekutiny na minimum', 'Dávat přednost bílému pečivu', 'Zvýšit spotřebu uzenin'],
    hyg18: ['Mléčné výrobky narušují střevní mikroflóru', 'Minerály patří mezi základní živiny'],
    hyg19: ['Pravidelný pohyb', 'Pití vody', 'Konzumace ryb'],

    /* Lékárnička */
    lek13: ['Antibiotika vysadit, jakmile se dítěti uleví', 'Vyplivne-li dítě tabletu, podat hned dvojnásobnou dávku'],
    lek18: ['Zlepšení příznaků', 'Dítě se po léku napije'],
    lek26: ['Glukometr', 'Skalpel', 'Injekční stříkačky a jehly'],

    /* Základy první pomoci */
    zak_pp05: ['Rada kamaráda po telefonu', 'Ošetření zdravotníkem tábora z lékárničky'],
    zak_pp06: ['158 — Zdravotnická záchranná služba', '150 — Městská policie', '156 — Evropské tísňové číslo'],
    zak_pp08: ['Mluvit co nejdéle, aby měli čas přijet', 'Požádat dispečera, ať zavolá zpátky později'],
    zak_pp09: ['Vyfotit místo pro pojišťovnu', 'Zavolat nejdřív rodičům dítěte', 'Uklidit okolí, aby to neviděli ostatní'],
    zak_pp10: ['Měření tělesné teploty', 'Mechanismus úrazu'],
    zak_pp12: ['Podání léku', 'Popis'],
    zak_pp14: ['Nepohodlné ochranné pomůcky při sportu vynechat', 'Návody přeskočit, stačí zdravý rozum', 'Skákat do vody tam, kde to zkusil někdo jiný'],
    zak_pp16: ['Stavy psychické', 'Stavy chronické', 'Stavy hospitalizované'],

    /* Rány, krvácení, obvazy */
    ran02: ['Chemické', 'Tlakové', 'Vlhké'],
    ran03: ['Přiložení škrtidla', 'Vysušení rány fénem'],
    ran05: ['Amputát vložit do misky s vodou', 'Amputát zabalit do suchého igelitu bez gázy'],
    ran07: ['Žihadlo vymáčknout prsty', 'Místo natřít alkoholem a zakrýt náplastí'],
    ran08: ['Nechat postiženého dojít pěšky k lékaři', 'Ránu naříznout'],
    ran09: ['Klíště spálit zapalovačem přímo na kůži', 'Místo po klíštěti nedezinfikovat, aby se nepodráždilo'],
    ran10: ['Obvaz nechat do konce akce bez výměny', 'Ránu pravidelně natírat mastí'],
    ran12: ['Uložit s hlavou níž i při poranění hlavy', 'Dát postiženému napít'],
    ran15: ['Přiložit teplý obklad na nos', 'Nechat dítě běhat, ať se krev rozproudí'],
    ran16: ['Poloha na boku na zdravou stranu', 'Nakapat do ucha ušní kapky'],
    ran20: ['Zaklíněný předmět vytáhnout, pokud nekrvácí', 'Dát postiženému napít sladkého', 'Obvaz sundávat při každém prosáknutí'],
    ran21: ['Přikládá se na bérec nebo předloktí co nejblíž ráně', 'Jako improvizované zaškrcovadlo poslouží tenký provázek'],
    ran22: ['Hřejivé', 'Dezinfekční', 'Hojivé'],
    ran23: ['Kovové fólie', 'Papírové obvazy', 'Gelové obvazy'],
    ran24: ['Stojíme zády k poraněnému', 'Sterilní krytí posouváme, aby lépe sedělo', 'Rána může zůstat částečně odkrytá'],
    ran27: ['Nechat ránu volně krvácet, aby se vyčistila', 'Podat napít sladký čaj', 'Přiložit teplý obklad'],
    ran28: ['Zaškrcení', 'Zásyp do rány', 'Protišoková poloha'],
    ran29: ['Z konečníku nejčastěji zlomenina pánve', 'Z močových cest nejčastěji úraz', 'U všech zaškrcení'],

    /* Zlomeniny, břicho, hlava, páteř */
    kos04: ['Kašel', 'Svědění kůže'],
    kos05: ['Příčná', 'Únavová', 'Impresivní'],
    kos06: ['Tříštivé', 'Šikmé'],
    kos07: ['Fixujeme jen kloub pod zlomeninou', 'Vyčnívající kost zatlačíme zpět pod kůži', 'Prstýnky necháme na místě'],
    kos08: ['Stehenní kost — 0,5 litru', 'Jedno žebro — 1 litr', 'Kosti předloktí — 3 litry'],
    kos10: ['Podat analgetika proti bolesti', 'Dát napít, aby nedehydratoval', 'Uložit na břicho'],
    kos15: ['Alergický', 'Psychogenní'],
    kos18: ['Poloha vleže s nohama nahoře', 'Podat nitroglycerin bez dohody s operátorem'],
    kos19: ['Zánět mozkových blan', 'Migréna', 'Zánět středního ucha'],
    kos20: ['Krvácení z nosu bez úrazu', 'Svědivá vyrážka'],
    kos21: ['Vysoká horečka', 'Krvácení z ucha s příměsí likvoru', 'Otok kotníku'],
    kos24: ['24 % pády z výšky', '15 % dopravní nehody', '21 % násilné úrazy'],
    kos26: ['Aby se dal lépe vyfotit pro dokumentaci', 'Když postižený mluví a dýchá'],
    kos27: ['Otevřený pneumotorax', 'Rána s unikajícím vzduchem', 'Poranění nožem'],
    kos33: ['Dislokovaná', 'Kompresivní', 'Únavová'],
    kos34: ['Poranění páteře: zlomenina žeber', 'Příznak poranění míchy: krvácení z nosu', 'Příznak poranění míchy: zvýšená citlivost celého těla'],

    /* Náhlé stavy */
    sta01: ['Položit dítě na záda a počkat', 'Poklepat ho po hlavě'],
    sta03: ['Štěkavý kašel hlavně v noci', 'Vysoká horečka', 'Pomalé klidné dýchání'],
    sta05: ['Oslí hýkání a prodloužený výdech', 'Dítě chce ležet na zádech', 'Svědivá vyrážka'],
    sta09: ['Vložit mezi zuby dřevěnou lžíci', 'Polít obličej studenou vodou', 'Během křečí podat napít'],
    sta16: ['Pomalý tep a suchá kůže', 'Dech páchnoucí po acetonu'],
    sta18: ['Poruchy chování', 'Alzheimerova choroba'],
    sta19: ['Tělesná teplota', 'Glykemie'],
    sta20: ['Posazení postiženého', 'Změření teploty', 'Plácání po tvářích do probuzení'],
    sta24: ['Psychogenní', 'Tepelný'],
    sta25: ['Horká suchá kůže', 'Pomalé hluboké dýchání', 'Vysoký krevní tlak'],
    sta26: ['Toaleta', 'Tablety'],
    sta28: ['U postiženého při vědomí s bolestí břicha', 'Při zástavě dechu', 'U dítěte s astmatickým záchvatem'],
    sta29: ['Svědivá vyrážka', 'Nachlazení', 'Bolest zubů'],

    /* Teplo, chlad, otravy */
    pro03: ['Masírovat končetiny', 'Podat alkohol na zahřátí', 'Nechat postiženého chodit, ať se zahřeje'],
    pro04: ['I. stupeň — puchýře', 'II. stupeň — nekróza', 'III. stupeň — zarudnutí'],
    pro07: ['Chladit ledem přímo na kůži', 'Strhnout přiškvařený oděv', 'Podat postiženému napít'],
    pro08: ['Chladit až po příjezdu záchranné služby', 'Rozsáhlé popáleniny chladit co nejdéle'],
    pro10: ['Hlava a krk — 18 %', 'Jedna dolní končetina — 9 %', 'Záda — 9 %'],
    pro12: ['Náhodné otravy tvoří 95 %', 'Alergie na pyl', 'Nachlazení'],
    pro13: ['1. zástava dechu a oběhu', '2. euforie a ztráta zábran', '3. zčervenání'],

    /* Tonutí */
    vod01: ['Nejčastější příčina smrti u lidí nad 60 let', 'Až 70 % tonutí nastává v bazénech', 'Asi 90 % utonulých jsou neplavci'],
    vod03: ['Pasivní tonoucí hlasitě kašle a mává', 'Aktivní tonoucí leží klidně obličejem dolů'],
    vod06: ['Vždy pro tonoucího skočit, i bez pomůcky', 'K tonoucímu při vědomí připlavat zepředu', 'Záchranu může provést kdokoliv, i neplavec'],
    vod08: ['KPR ukončit po 10 minutách bez reakce', 'Rozdýchaného tonoucího nechat odpočívat na táboře', 'Začít 30 stlačeními bez vdechů'],
    vod09: ['Plav daleko od břehu, abys nikomu nepřekážel', 'Ve vodě se klidně pošťuchuj', 'Na loďce vesta není nutná, když umíš plavat'],

    /* Resuscitace */
    kpr01: ['A — Alarm', 'B — Bleeding', 'C — Consciousness'],
    kpr03: ['Při výboji je nutné postiženého přidržet', 'AED nelze použít u dětí'],
    kpr04: ['Nejdřív podej postiženému vodu', 'Počkej 5 minut, zda se probudí', 'Lapavé dýchání považuj za normální dech'],
    kpr08: ['Začni 30 stlačeními bez vdechů', 'Stlač hrudník o 5–6 cm', 'Hlavu nezakláněj'],
    kpr10: ['Vdechnout plný nádech', 'Stlačovat celou dlaní'],
    kpr12: ['Dokud nezačne lapavě dýchat', 'Dokud nedorazí rodiče'],
    kpr13: ['Postižený je cizinec', 'Zachránce nemá resuscitační roušku'],
    kpr14: ['Frekvence 100–120 stlačení za minutu', 'Přivolání pomoci hned na začátku', 'Pět úvodních vdechů u dítěte'],

    /* Táborové nemoci */
    nem05: ['Bolest po večerní hře, která po spánku zmizí', 'Bolest při rýmě a nachlazení'],
    nem06: ['Bolest po snědení sladkostí, která sama přejde', 'Mírná bolest z trémy před vystoupením'],
    nem07: ['Jednou zvrací po přejedení a pak je v pořádku', 'Pocit na zvracení při pohledu na jídlo', 'Zvracení po kolotoči'],
    nem08: ['Podat mléko a smetanové pokrmy', 'Nechat dítě normálně sportovat', 'Průjem nevyžaduje izolaci'],
    nem11: ['Kašel při prachu na hřišti', 'Ranní odkašlání'],
    nem12: ['Únava', 'Bolest svalů'],
    nem16: ['Opar — tekutý pudr', 'Plíseň nohou — Fenistil', 'Kopřivka — antibiotika'],

    /* Doplněná témata a obrázky */
    dop02: ['Má s sebou vlastní léky na teplotu', 'Je starší 6 let'],
    dop04: ['Ošetřovna může mít patrová lůžka', 'Léky mohou být na volně přístupné polici', 'Izolace musí být v jedné místnosti s ošetřovnou'],
    dop12: ['Úpal', 'Alergie na pyl'],
    dop14: ['Kupovat jodovou dezinfekci Betadine', 'Rtuťový teploměr', 'Pryžové rukavice místo nitrilových'],
    obr04: ['Krvácení z bérce', 'Zlomenina pánve']
  }
};
