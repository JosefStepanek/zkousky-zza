/* Banka otázek 5 — obrázkové otázky, seřazování, přiřazování, výroky „Pravda, nebo mýtus?“
   a doplnění témat, která v bankách 1–4 chyběla.
   Typy: t:'mc' (výchozí), t:'tf' (v = platí/neplatí), t:'order' (items ve správném pořadí),
   t:'match' (pairs [levá, pravá]). fig = obrázek u zadání, ofig = obrázky jako možnosti,
   img = obrázek až ve vysvětlení, keep = neprohazovat pořadí možností. */
window.QB = window.QB || [];
window.QB.push(

/* ═══════════════════════════ OBRÁZKOVÉ OTÁZKY ═══════════════════════════ */
{
  id: 'obr01', c: 'stavy', fig: 'polohaZotavovaci',
  q: 'Jak se jmenuje poloha na obrázku (pohled shora)?',
  o: ['Zotavovací poloha na boku', 'Protišoková poloha', 'Poloha v polosedě', 'Úlevová poloha „klubíčko“'], a: [0],
  why: 'Spodní dolní končetina je natažená, horní pokrčená v koleni a kyčli, tělo leží na boku. Poloha brání tomu, aby se bezvědomý zadusil zvratky nebo krví, a postižený se sám nepřevalí na záda.',
  src: 'Skripta s. 36 · ČČK příručka, s. 190'
},
{
  id: 'obr02', c: 'stavy', ofig: ['polohaZotavovaci', 'polohaProtisok', 'polohaPolosed', 'polohaZada'],
  q: 'Bezvědomý pravidelně dýchá, začíná zvracet a vy musíte odběhnout pro pomoc. Kterou polohu zvolíte?',
  o: ['Zotavovací poloha na boku', 'Protišoková poloha', 'Poloha v polosedě', 'Poloha na zádech'], a: [0],
  why: 'Zvracení a nutnost postiženého opustit jsou přesně situace pro zotavovací polohu — obsah úst volně vytéká a nemůže být vdechnut.',
  src: 'Skripta s. 34 a 36 · ČČK příručka, s. 190',
  alt: {
    t: 'Pozor, skripta si tu odporují',
    x: 'Na s. 26 (Postup při bezvědomí) skripta uvádějí: dýchá-li, „poloha na zádech a opakovaná kontrola stavu“. Na s. 34 (Vyšetření a záklon hlavy) naopak: „dýchá? probouzí se? poloha na boku a kontrola životních funkcí“, a na s. 36 je zotavovací poloha nakreslená. ČČK řeší rozpor jednoznačně: na zádech lze nechat dýchajícího bezvědomého, u kterého stále jste a který nezvrací; jakmile hrozí vdechnutí nebo ho musíte opustit, patří na bok.'
  }
},
{
  id: 'obr03', c: 'stavy', fig: 'polohaProtisok',
  q: 'Kdy se používá poloha na obrázku?',
  o: [
    'Při rozvíjejícím se šoku nebo masivním krvácení, není-li poraněná hlava',
    'U bezvědomého, který dýchá a zvrací',
    'Při astmatickém záchvatu',
    'Při poranění hrudníku s dušností'
  ], a: [0],
  why: 'Protišoková poloha: vleže na zádech s dolními končetinami zvednutými (ČČK uvádí asi o 20–30 cm). Krev z končetin se přesune k životně důležitým orgánům. Nepoužívá se při poranění hlavy, a také ne při podezření na zranění pánve, páteře nebo dolních končetin.',
  src: 'Skripta s. 15 a 36 · ČČK příručka, s. 41'
},
{
  id: 'obr04', c: 'stavy', m: true, fig: 'polohaPolosed',
  q: 'Pro které stavy je vhodná poloha na obrázku? (více odpovědí)',
  o: ['Astmatický záchvat', 'Infarkt myokardu', 'Vykašlávání krve', 'Šok s masivním krvácením', 'Bezvědomí'], a: [0, 1, 2],
  why: 'Polosed usnadňuje dýchání. Skripta ho uvádějí u astmatu (s. 23), u infarktu myokardu (s. 22) a u hemoptýzy (s. 16). U šoku se volí protišoková poloha, bezvědomého nikdy neposazujeme.',
  src: 'Skripta s. 16, 22, 23'
},
{
  id: 'obr05', c: 'kpr', ofig: ['zaklonOk', 'zaklonBad'],
  q: 'Na kterém obrázku jsou dýchací cesty uvolněné záklonem hlavy?',
  o: ['Hlava zakloněná, brada míří vzhůru', 'Hlava předkloněná k hrudníku'], a: [0],
  why: 'Záklonem hlavy a zvednutím brady se kořen jazyka odtáhne od zadní stěny hltanu a vzduch může proudit. Při předklonu jazyk zapadne a dýchací cesty uzavře. Výjimkou je novorozenec — hlavu mu nezakláníme, držíme ji v neutrální poloze.',
  src: 'Skripta s. 34–36'
},
{
  id: 'obr06', c: 'kpr', keep: true, fig: 'kprDospely',
  q: 'Kam přiložíš dlaně při KPR dospělého?',
  o: ['Bod A', 'Bod B', 'Bod C', 'Bod D'], a: [1],
  why: 'Ruka se pokládá na střed hrudníku mezi prsní bradavky (B), druhá ruka na první, propnuté lokty. Bod A je příliš vysoko, bod C na nadbřišku hrozí poraněním jater a žaludku, bod D „nad srdcem“ je častá laická chyba — stlačuje se hrudní kost, ne srdce z boku.',
  src: 'Skripta s. 34'
},
{
  id: 'obr07', c: 'kpr', keep: true, fig: 'kprKojenec',
  q: 'Kam podle skript přiložíš dva prsty při KPR novorozence?',
  o: ['Bod A', 'Bod B', 'Bod C', 'Bod D'], a: [0],
  why: 'Skripta: „polož dva prsty na střed hrudníku mezi prsní bradavky“ — tedy bod A na spojnici bradavek. Stlačuje se o 1/3 hrudníku, poměr 3 : 1.',
  src: 'Skripta s. 35',
  alt: {
    t: 'Upřesnění v příručce ČČK',
    x: 'ČČK uvádí u dětí do 1 roku místo POD středem spojnice bradavek — na obrázku bod B, zhruba šířku prstu pod spojnicí. U zkoušky platí verze ze skript (bod A).'
  }
},
{
  id: 'obr08', c: 'prostredi', fig: 'devitkaNoha', img: 'devitka',
  q: 'Kolik procent povrchu těla dospělého tvoří zvýrazněná část podle pravidla devíti?',
  o: ['18 %', '9 %', '36 %', '1 %'], a: [0],
  why: 'Celá jedna dolní končetina (přední i zadní strana) = 18 %. Obě dolní končetiny tedy 36 %.',
  src: 'Skripta s. 30',
  tags: ['cislo']
},
{
  id: 'obr09', c: 'prostredi', fig: 'devitkaPaze', img: 'devitka',
  q: 'Kolik procent povrchu těla dospělého tvoří zvýrazněná část podle pravidla devíti?',
  o: ['9 %', '18 %', '4,5 %', '27 %'], a: [0],
  why: 'Celá jedna horní končetina = 9 %. Hlava a krk také 9 %, přední strana trupu 18 %, záda 18 %, genitál 1 %.',
  src: 'Skripta s. 30',
  tags: ['cislo']
},
{
  id: 'obr10', c: 'prostredi', fig: 'dlan',
  q: 'Plocha dlaně postiženého i s prsty odpovídá přibližně kolika procentům povrchu jeho těla?',
  o: ['1 %', '5 %', '9 %', '0,1 %'], a: [0],
  why: 'Palmární pravidlo se používá u dětí, protože mají jiné tělesné proporce než dospělí (větší hlava, kratší končetiny) a pravidlo devíti by rozsah zkreslilo. Měří se dlaní POSTIŽENÉHO, ne zachránce.',
  src: 'Skripta s. 30',
  tags: ['cislo']
},
{
  id: 'obr11', c: 'voda', ofig: ['tonAktivni', 'tonPasivni', 'tonPlavec'],
  q: 'Který obrázek ukazuje aktivního tonoucího?',
  o: ['Svisle ve vodě, hlava zakloněná, paže plácají do stran', 'Obličejem dolů bez pohybu', 'Koordinované plavání s hlavou nad vodou'], a: [0],
  why: 'Aktivní tonoucí bojuje o život: je ve svislé poloze, pohybuje pažemi do stran, zkráceně dýchá a NEMŮŽE volat o pomoc. Proto je u vody tak snadné ho přehlédnout.',
  src: 'Skripta s. 31 · ČČK Praha 1, s. 19'
},
{
  id: 'obr12', c: 'voda', ofig: ['tonAktivni', 'tonPasivni', 'tonPlavec'],
  q: 'Který obrázek ukazuje pasivního tonoucího?',
  o: ['Svisle ve vodě, hlava zakloněná, paže plácají do stran', 'Obličejem dolů bez pohybu', 'Koordinované plavání s hlavou nad vodou'], a: [1],
  why: 'Pasivní tonoucí nebojuje, nedělá žádné pohyby a nedýchá. Skripta k němu uvádějí záchranu z vody s využitím více záchranných pomůcek; po vytažení se zahajuje resuscitace pěti vdechy.',
  src: 'Skripta s. 31–32'
},
{
  id: 'obr13', c: 'voda', fig: 'hazeci',
  q: 'Který stupeň záchrany tonoucího ukazuje obrázek?',
  o: ['Házecí pomůcka (2. stupeň)', 'Slovem ze břehu (1. stupeň)', 'Pomocí plavidla (4. stupeň)', 'Osobní zásah (6. stupeň)'], a: [0],
  why: 'Zachránce zůstává na břehu a hodí tonoucímu předmět, kterého se může sám držet. Skripta: nepřibližovat se k tonoucímu a hodit záchranný předmět — hrozí velké riziko vlastního utonutí.',
  src: 'Skripta s. 32 · ČČK Praha 1, s. 20'
},
{
  id: 'obr14', c: 'stavy', ofig: ['dusLopatky', 'dusHeimlich', 'dusKojenec'],
  q: 'Na kterém obrázku zachránce provádí Heimlichův manévr?',
  o: ['Údery mezi lopatky v předklonu', 'Stlačení nadbřišku zezadu', 'Údery mezi lopatky u kojence na předloktí'], a: [1],
  why: 'Heimlichův manévr: zachránce stojí za postiženým, obejme ho, pěst přiloží na nadbřišek a prudce stlačí dovnitř a nahoru. Skripta ho řadí po úderech mezi lopatky — nejdřív povzbudit ke kašli, pak 5 úderů mezi lopatky, pak Heimlich podle věkové kategorie, při bezvědomí KPR.',
  src: 'Skripta s. 23'
},
{
  id: 'obr15', c: 'stavy', fig: 'dusKojenec',
  q: 'Co zachránce na obrázku provádí?',
  o: [
    'Údery mezi lopatky u kojence, který se dusí',
    'Heimlichův manévr u kojence',
    'Vylévání vody z plic po tonutí',
    'Ukládání kojence do zotavovací polohy'
  ], a: [0],
  why: 'Kojenec leží obličejem dolů na předloktí zachránce s hlavou níž než hrudník a zachránce mu udeří mezi lopatky. U kojence se stlačování nadbřišku (Heimlich) nepoužívá — hrozí poranění jater. Vodu z plic po tonutí nevyléváme nikdy.',
  src: 'Skripta s. 23 · ČČK Praha 1, s. 20'
},
{
  id: 'obr16', c: 'rany', ofig: ['nosPredklon', 'nosZaklon'],
  q: 'Která poloha je správná při krvácení z nosu?',
  o: ['Vsedě s předkloněnou hlavou', 'Se zakloněnou hlavou'], a: [0],
  why: 'Předklon uvádějí skripta i ČČK. Při záklonu dítě krev polyká, může na ni zvracet a ztráta krve se nedá odhadnout.',
  src: 'Skripta s. 15 · ČČK příručka, s. 42',
  alt: {
    t: 'V poloze se zdroje shodují, v dalších krocích ne',
    x: 'Skripta: zmáčknout nosní skořepy, chladit čelo, nos a krk, přední tamponáda. ČČK: stisknout nosní křídla alespoň 5 minut, studený obklad na týl, nos gázou zásadně neucpávat.'
  }
},
{
  id: 'obr17', c: 'rany', ofig: ['krvTepenne', 'krvZilni'],
  q: 'Který obrázek ukazuje tepenné krvácení?',
  o: ['Světlá krev vystřikuje v obloucích', 'Tmavá krev souvisle vytéká'], a: [0],
  why: 'Tepenné krvácení: světlá (okysličená) krev vystřikuje v pravidelných intervalech podle tepu, hrozí hemoragický šok. Žilní: tmavá krev nepřetržitě vytéká. U tepenného se po stlačení a tlakovém obvazu jako poslední možnost zaškrcuje.',
  src: 'Skripta s. 15'
},
{
  id: 'obr18', c: 'kpr', fig: 'aed',
  q: 'Co označuje tento symbol?',
  o: [
    'Umístění automatického externího defibrilátoru (AED)',
    'Kardiologickou ambulanci',
    'Lékárnu',
    'Lékárničku první pomoci'
  ], a: [0],
  why: 'Mezinárodní značka AED: bílé srdce s bleskem na zeleném podkladu. Přístroj vás povede hlasem, sám vyhodnotí defibrilovatelný rytmus a při analýze a výboji se postiženého nikdo nesmí dotýkat. Lékárničku označuje bílý kříž na zeleném podkladu.',
  src: 'Skripta s. 34'
},
{
  id: 'obr19', c: 'rany', fig: 'satek',
  q: 'K čemu slouží obvaz na obrázku?',
  o: ['Závěs a znehybnění horní končetiny', 'Tlakový obvaz hrudníku', 'Fixace krční páteře', 'Krytí rány na rameni'], a: [0],
  why: 'Šátkové obvazy mají tvar rovnoramenného trojúhelníku a pro svou jednoduchost patří k nejčastěji využívaným v první pomoci pro závěs. Při zlomenině lopatky, klíční nebo pažní kosti se končetina zavěsí a dalším šátkem přifixuje k trupu.',
  src: 'Skripta s. 18 · ČČK příručka, s. 70'
},
{
  id: 'obr20', c: 'kosti', ofig: ['dlahaOk', 'dlahaKratka', 'dlahaLoket'],
  q: 'Která fixace zlomeniny předloktí je správná?',
  o: ['Dlaha přes loket i zápěstí', 'Dlaha jen přes místo zlomeniny', 'Dlaha od lokte, zápěstí volné'], a: [0],
  why: 'Vždy fixujeme mezi dvěma klouby — u předloktí tedy loket i zápěstí. Dlahu měkce obložíme, sledujeme prokrvení a sundáme prstýnky a náramky, dokud nenateče otok.',
  src: 'Skripta s. 19 · ČČK příručka, s. 70'
},
{
  id: 'obr21', c: 'kosti', fig: 'bryle',
  q: 'Dítě po pádu na hlavu má modřiny kolem obou očí jako na obrázku. Na co to může ukazovat?',
  o: ['Zlomenina spodiny lebeční', 'Otřes mozku', 'Alergická reakce', 'Nedostatek spánku'], a: [0],
  why: 'Brýlový hematom patří k příznakům zlomeniny base lební, spolu s bezvědomím a krvácením z úst nebo ucha s příměsí likvoru. První pomoc: savý obvaz, poloha na boku na stranu krvácejícího ucha, pozor na poranění páteře, volat ZZS.',
  src: 'Skripta s. 32'
},
{
  id: 'obr22', c: 'nemoci', fig: 'fotoNestovice',
  q: 'Dítěti se nejdřív na trupu objevila silně svědivá vyrážka s puchýřky, které se potahují stroupky. Den předtím mělo horečku a bylo unavené. Co to nejspíš je?',
  o: ['Plané neštovice', 'Zarděnky', 'Kopřivka', 'Opar'], a: [0],
  why: 'Plané neštovice: zarudlá vyrážka se mění v puchýřky, které se hojí stroupky, začíná na trupu a šíří se na končetiny, velmi svědí. Léčba: paracetamol na teplotu, tekutý pudr. Je to infekční onemocnění — izolace a domů.',
  src: 'ČČK Praha 1, s. 10'
},
{
  id: 'obr23', c: 'nemoci', fig: 'fotoZardenky',
  q: 'Růžová drobná vyrážka začala na hlavě a krku a šíří se na záda. Dítě má zduřelé mízní uzliny a je unavené. O co jde?',
  o: ['Zarděnky', 'Kopřivka', 'Plané neštovice', 'Úžeh'], a: [0],
  why: 'Zarděnky: růžová vyrážka s drobnými ostře ohraničenými lézemi, otok mízních uzlin, šíří se z hlavy a krku na trup a končetiny, po asi třech dnech vybledne. Léčba: paracetamol, tekutý pudr, izolace.',
  src: 'ČČK Praha 1, s. 11'
},
{
  id: 'obr24', c: 'nemoci', fig: 'fotoBorelioza',
  q: 'Týden po odstranění klíštěte se v jeho místě objevila skvrna jako na fotografii. Co uděláte?',
  o: [
    'Pošlu dítě k lékaři — podezření na lymskou boreliózu',
    'Natřu místo Fenistilem a dál sleduji',
    'Nic, je to běžná reakce na kousnutí',
    'Místo vydezinfikuji a přelepím náplastí'
  ], a: [0],
  why: 'Kulatá zarudlá skvrna, uprostřed bledší nebo naopak s tmavším středem a světlejším prstencem, v místě přisátí klíštěte je typická pro lymskou boreliózu. Léčí se antibiotiky, a proto k lékaři. Proto se klíště zapisuje do deníku a rodičům se hlásí kontakt s infekcí.',
  src: 'ČČK Praha 1, s. 10 a 12 · skripta s. 5'
},
{
  id: 'obr25', c: 'nemoci', fig: 'fotoOpar',
  q: 'Co ukazuje šipka na fotografii a čím se to podle skript ČČK Praha 1 léčí?',
  o: ['Opar — krém Vectavir', 'Plané neštovice — tekutý pudr', 'Plíseň — Lamisil', 'Bodnutí hmyzem — Fenistil'], a: [0],
  why: 'Opar (herpetický virus): malé puchýřky a vřídky podél úst, kterým předchází svědění nebo pálení. Trvá 4–10 dní a může se opakovat.',
  src: 'ČČK Praha 1, s. 13'
},
{
  id: 'obr26', c: 'nemoci', fig: 'fotoKoprivka',
  q: 'Dítě po obědě dostalo silně svědivou vyrážku s vystouplými zarudlými skvrnami jako na fotografii. Dýchá normálně a nemá otoky. Co podáte?',
  o: ['Antihistaminikum (např. Zyrtec) a Fenistil na kůži', 'Antibiotika', 'Paracetamol', 'Nic, vyrážka po jídle je normální'], a: [0],
  why: 'Kopřivka jako alergická reakce na potravinu nebo lék: antihistaminika celkově a Fenistil lokálně, pátrat po příčině. Pozor — objeví-li se otok rtů, jazyka nebo dušnost, jde o život ohrožující reakci: volat 155, u alergika Epipen.',
  src: 'ČČK Praha 1, s. 11 · skripta s. 25'
},

/* ═══════════════════════════ SEŘAĎ ═══════════════════════════ */
{
  id: 'por01', c: 'zaklady', t: 'order',
  q: 'Seřaď postup na místě události podle skript.',
  items: ['Co se stalo a kde?', 'Nejsem v nebezpečí?', 'Co budu dělat?', 'Koho mám k dispozici?', 'Co mám k dispozici?', 'Zajištění místa', 'Přivolání si pomoci'],
  why: 'Nejdřív orientace a vlastní bezpečí, pak plán, lidé a pomůcky, zajištění místa a přivolání pomoci. Po celou dobu je nejdůležitější zachovat klid a rozvahu.',
  src: 'Skripta s. 12'
},
{
  id: 'por02', c: 'stavy', t: 'order',
  q: 'Seřaď postup při bezvědomí podle skript.',
  items: ['Oslovení', 'Bolestivý podnět', 'Záklon hlavy', 'Předsunutí čelisti a kontrola dutiny ústní', 'Zhodnocení životních funkcí', 'Přivolání pomoci 155', 'Dýchá, nebo nedýchá?'],
  why: 'Nedýchá-li postižený, nebo si nejste jisti, ihned zahájit neodkladnou resuscitaci.',
  src: 'Skripta s. 26'
},
{
  id: 'por03', c: 'kpr', t: 'order',
  q: 'Seřaď postup KPR u dítěte podle skript.',
  items: ['Zavolat si o pomoc kohokoliv v okolí', 'Otočit dítě šetrně na záda', 'Zaklonit hlavu a zkontrolovat dutinu ústní', 'Poslechnout, zda dýchá (pozor na lapavé dýchání)', 'Volat 155 a donést AED', '5 úvodních vdechů', 'Stlačování o 1/3 hrudníku v poměru 15 : 2'],
  why: 'Pět úvodních vdechů je u dětí zásadní — zástava u dítěte bývá způsobena nedostatkem kyslíku.',
  src: 'Skripta s. 35',
  alt: {
    t: 'Novější postup ČČK (2017)',
    x: 'Jste-li s dítětem do 8 let sami, voláte 155 až po 1 minutě KPR — tedy až po úvodních vdeších a první minutě stlačování. Nad 8 let voláte před zahájením KPR, výjimkou jsou otrava, úraz proudem a tonutí.'
  }
},
{
  id: 'por04', c: 'hygiena', t: 'order',
  q: 'Seřaď stadia infekčního onemocnění.',
  items: ['Inkubační doba', 'Prodromální stadium', 'Klinická manifestace', 'Rekonvalescence'],
  why: 'Inkubační doba trvá od vniknutí mikroba po první příznaky. Prodromální stadium má neurčité příznaky bez možnosti diagnózy. Klinická manifestace přináší charakteristické příznaky. V rekonvalescenci příznaky mizí, ale organismus je oslabený.',
  src: 'Skripta s. 9'
},
{
  id: 'por05', c: 'rany', t: 'order',
  q: 'Seřaď kroky zástavy tepenného krvácení na končetině.',
  items: ['Stlačení rány (tamponáda)', 'Tlakový obvaz, případně nabalit další vrstvu', 'Zaškrcení nad ránou jako poslední možnost'],
  why: 'Zaškrcení je až poslední možnost, když tlakový obvaz nestačí. Výjimkou je amputace, kde se zaškrcuje hned.',
  src: 'Skripta s. 15–16'
},
{
  id: 'por06', c: 'stavy', t: 'order',
  q: 'Seřaď první pomoc při vdechnutí cizího tělesa.',
  items: ['Povzbudit ke kašli', 'Údery mezi lopatky v sériích po 5', 'Heimlichův manévr podle věkové kategorie', 'Zahájení KPR při bezvědomí'],
  why: 'Dokud postižený účinně kašle, je kašel nejlepší pomoc. Manévry přicházejí na řadu, když kašel nestačí.',
  src: 'Skripta s. 23'
},
{
  id: 'por07', c: 'voda', t: 'order',
  q: 'Seřaď stupně záchrany tonoucího od nejbezpečnějšího po nejnebezpečnější pro zachránce.',
  items: ['Slovem ze břehu', 'Házecí pomůcka', 'Dosažením ze břehu', 'Pomocí plavidla', 'Dosažením z mělčiny', 'Osobní zásah — oběť při vědomí', 'Osobní zásah — oběť v bezvědomí s pomůckou', 'Osobní zásah — oběť v bezvědomí bez pomůcek'],
  why: 'Nebezpečnost pro zachránce stoupá. Vždy zvážit, jestli záchranu zvládnu sám, nebo ji nechám profesionálům.',
  src: 'ČČK Praha 1, s. 20'
},
{
  id: 'por08', c: 'stavy', t: 'order',
  q: 'Seřaď fáze šoku.',
  items: ['Kompenzovaný — zrychlení srdeční akce', 'Dekompenzovaný — zrychlení srdeční akce a pokles tlaku', 'Ireverzibilní — multiorgánové selhání'],
  why: 'Dekompenzovaná fáze je podle skript „kombinace, která zabíjí“ — tělo už tlak neudrží ani zrychleným tepem.',
  src: 'Skripta s. 26'
},
{
  id: 'por09', c: 'prostredi', t: 'order',
  q: 'Seřaď stadia otravy alkoholem.',
  items: ['Zčervenání, ztráta zábran, euforie', 'Poruchy rovnováhy a koordinace, zvýšený práh bolesti', 'Zmatenost, poruchy vědomí, zvracení s rizikem aspirace', 'Zástava dechu a oběhu'],
  why: 'První pomoc: vyvolat zvracení v časné fázi, hydratace, poloha na boku, kontrola fyziologických funkcí.',
  src: 'Skripta s. 30'
},
{
  id: 'por10', c: 'rany', t: 'order',
  q: 'Seřaď základní ošetření rány (základní toaletu).',
  items: ['Oplach vodou', 'Dezinfekce', 'Sterilní krytí', 'Sešití (sutura)'],
  why: 'Sešití už provádí lékař. Do rány se neaplikují žádné masti, léky ani zásypy.',
  src: 'Skripta s. 14'
},
{
  id: 'por11', c: 'nemoci', t: 'order',
  q: 'Seřaď postup při odstranění klíštěte.',
  items: ['Vyviklat, vytočit, vytrhnout', 'Dezinfekce místa přisátí', 'Záznam do zdravotnického deníku', 'Sledování místa po odstranění'],
  why: 'Klíště se nenatírá olejem ani krémem. Záznam a sledování jsou důležité kvůli včasnému zachycení boreliózy a oznámení rodičům.',
  src: 'Skripta s. 14 · ČČK Praha 1, s. 10'
},
{
  id: 'por12', c: 'zaklady', t: 'order',
  q: 'Seřaď body prvotního vyšetření postiženého podle skript.',
  items: ['Stav vědomí', 'Dýchání', 'Krevní oběh', 'Masivní krvácení'],
  why: 'Teprve po zajištění životních funkcí následuje celkové vyšetření od hlavy k patě, ošetření poranění, anamnéza, mechanismus úrazu a polohování.',
  src: 'Skripta s. 12'
},
{
  id: 'por13', c: 'stavy', t: 'order',
  q: 'Seřaď kvantitativní poruchy vědomí od nejlehčí po nejtěžší.',
  items: ['Somnolence', 'Sopor', 'Kóma'],
  why: 'Kvalitativní poruchy vědomí jsou jiná skupina: zmatenost, poruchy chování, demence.',
  src: 'Skripta s. 25'
},
{
  id: 'por14', c: 'povinnosti', t: 'order',
  q: 'Seřaď činnosti zdravotníka podle průběhu akce.',
  items: [
    'Doplnit lékárnu a vyžádat si jmenný seznam dětí',
    'Vybrat prohlášení o bezinfekčnosti a převzít léky dětí',
    'Zdravotnický filtr a kontrola ošetřovny a izolace',
    'Ordinační hodiny a zápisy do deníku',
    'Výpisy pro rodiče a archivace dokumentace'
  ],
  why: 'Před odjezdem, při odjezdu, po příjezdu, během akce a po jejím skončení.',
  src: 'Skripta s. 5 · ČČK Praha 1, s. 3'
},

/* ═══════════════════════════ PŘIŘAĎ ═══════════════════════════ */
{
  id: 'pri01', c: 'lekarna', t: 'match',
  q: 'Přiřaď zkratky lékových forem.',
  pairs: [['CPS', 'kapsle'], ['GTT', 'kapky'], ['SUPP', 'čípky'], ['UNG', 'mast'], ['SIR', 'sirup']],
  extra: ['dražé', 'prášek'],
  why: 'Dále TBL tablety, PLV prášek, OPH oční, DG dražé, INH inhalačně.',
  src: 'Skripta s. 10'
},
{
  id: 'pri02', c: 'lekarna', t: 'match',
  q: 'Přiřaď zkratky způsobů podání léku.',
  pairs: [['p.o.', 'ústy'], ['s.l.', 'pod jazyk'], ['p.r.', 'do konečníku'], ['i.m.', 'do svalu'], ['i.v.', 'do žíly']],
  extra: ['pod kůži', 'do kosti'],
  why: 'Dále s.c. pod kůži, i.a. do tepny, i.o. do kosti.',
  src: 'Skripta s. 10'
},
{
  id: 'pri03', c: 'lekarna', t: 'match',
  q: 'Přiřaď k způsobu podání přibližný nástup účinku.',
  pairs: [['do žíly (i.v.)', 'do 1 minuty'], ['do svalu (i.m.)', 'do 10 minut'], ['konečníkem (p.r.)', 'asi 15 minut'], ['ústy (p.o.)', 'do půl hodiny']],
  why: 'Proto se Epipen podává do svalu, a zvracejícímu dítěti se místo tablety volí čípek.',
  src: 'ČČK Praha 1, s. 6 · ruční poznámka ve skriptech s. 10',
  tags: ['cislo']
},
{
  id: 'pri04', c: 'zaklady', t: 'match',
  q: 'Přiřaď tísňová čísla.',
  pairs: [['150', 'hasiči'], ['155', 'zdravotnická záchranná služba'], ['158', 'Policie ČR'], ['156', 'městská policie'], ['112', 'jednotné evropské tísňové číslo']],
  why: 'Číslo 112 se hodí hlavně při jazykové bariéře. Aplikace Záchranka předá operátorovi polohu.',
  src: 'Skripta s. 11',
  tags: ['cislo']
},
{
  id: 'pri05', c: 'kosti', t: 'match',
  q: 'Přiřaď odhad krevní ztráty při zlomenině.',
  pairs: [['pánev', '5 litrů'], ['stehenní kost', '3 litry'], ['pažní kost', '1 litr'], ['kosti předloktí', '0,5 litru'], ['jedno žebro', '100 ml']],
  why: 'Kosti bérce také 1 litr. Zlomená pánev nebo stehenní kost sama o sobě znamená hrozící hypovolemický šok.',
  src: 'Skripta s. 20',
  tags: ['cislo']
},
{
  id: 'pri06', c: 'kpr', t: 'match',
  q: 'Přiřaď poměr stlačení a vdechů podle věku.',
  pairs: [['dospělý', '30 : 2'], ['dítě', '15 : 2'], ['novorozenec do 1 měsíce', '3 : 1']],
  extra: ['5 : 1'],
  why: 'Frekvence podle skript 100–120/min. Hloubka u dospělého 5–6 cm, u dítěte a novorozence 1/3 hrudníku.',
  src: 'Skripta s. 35',
  tags: ['cislo']
},
{
  id: 'pri07', c: 'lekarna', t: 'match',
  q: 'Přiřaď lékové skupiny k jejich účinku.',
  pairs: [['analgetika', 'tlumí bolest'], ['antipyretika', 'snižují horečku'], ['antihistaminika', 'léčba alergií'], ['antitusika', 'léčba kašle'], ['antiemetika', 'proti zvracení'], ['hemostatika', 'stavují krvácení']],
  extra: ['snižují srážlivost krve'],
  why: 'Snížení srážlivosti krve jsou antikoagulancia — opak hemostatik.',
  src: 'Skripta s. 10'
},
{
  id: 'pri08', c: 'zakon', t: 'match',
  q: 'Přiřaď přílohy vyhlášky č. 106/2001 Sb.',
  pairs: [['příloha č. 1', 'podávání potravin a příprava pokrmů'], ['příloha č. 2', 'náplň kurzu první pomoci'], ['příloha č. 3', 'vzor posudku o zdravotní způsobilosti dítěte'], ['příloha č. 4', 'minimální vybavení lékárničky']],
  why: 'Pro zkoušku je nejdůležitější příloha č. 4 — obsah lékárničky.',
  src: 'Skripta s. 4'
},
{
  id: 'pri09', c: 'rany', t: 'match',
  q: 'Přiřaď odborné názvy krvácení.',
  pairs: [['epistaxe', 'krvácení z nosu'], ['hematemeza', 'zvracení krve'], ['hemoptýza', 'vykašlávání krve'], ['meléna', 'tmavá natrávená krev ve stolici']],
  extra: ['čerstvá krev ve stolici'],
  why: 'Čerstvá krev ve stolici je enteroragie (typicky hemoroidy).',
  src: 'Skripta s. 15, 16 a 21'
},
{
  id: 'pri10', c: 'kosti', t: 'match',
  q: 'Přiřaď typ nitrolebního krvácení k jeho typickému znaku.',
  pairs: [['epidurální', 'tepenné, dvoufázové bezvědomí'], ['subdurální', 'žilní, nejčastější, pomalý rozvoj'], ['subarachnoideální', 'meningeální dráždění, ztuhlá šíje']],
  why: 'Epidurální krvácení je mezi lebkou a tvrdou plenou, subdurální mezi tvrdou plenou a pavoučnicí, subarachnoideální mezi pavoučnicí a měkkou plenou.',
  src: 'Skripta s. 32–33'
},
{
  id: 'pri11', c: 'nemoci', t: 'match',
  q: 'Přiřaď k teplotě postup podle tabulky.',
  pairs: [['37,0–37,9 °C', 'bez léků, klid a pitný režim'], ['38,0–38,9 °C', 'podat lék na teplotu'], ['nad 39,0 °C', 'lék a ochlazovat'], ['nad 40,0 °C', 'okamžitě lékařská pomoc']],
  why: 'Ve všech pásmech platí klid, v teple, ale nepřehřát, a pitný režim. Ruční poznámka z kurzu: teplotu řešit od 38 °C.',
  src: 'ČČK Praha 1, s. 5',
  tags: ['cislo']
},
{
  id: 'pri12', c: 'zakon', t: 'match',
  q: 'Přiřaď zákonné lhůty.',
  pairs: [['platnost posudku o zdravotní způsobilosti', '2 roky'], ['stáří prohlášení o bezinfekčnosti', 'nejvýš 1 den'], ['bez kontaktu s infekcí před odjezdem', '14 dnů'], ['uchování dokumentace po akci', '6 měsíců'], ['ohlášení akce hygieně', '1 měsíc předem']],
  extra: ['3 měsíce'],
  why: 'Tři měsíce smí být starý protokol o kráceném rozboru pitné vody.',
  src: 'Skripta s. 3–5 · zák. 258/2000 Sb.',
  tags: ['cislo']
},
{
  id: 'pri13', c: 'zakon', t: 'match',
  q: 'Přiřaď hygienické počty z vyhlášky.',
  pairs: [['umyvadlo nebo výtokový kohout', '1 na 5 dětí'], ['záchod', '1 na 15 dětí'], ['sprchová růžice', '1 na 30 dětí'], ['plocha na ubytované dítě ve stavbě', 'nejméně 2,5 m²']],
  extra: ['1 na 10 dětí'],
  why: 'Lůžko na ošetřovně a izolaci je také 1 na 30 dětí.',
  src: '§ 3 vyhlášky 106/2001 Sb.',
  tags: ['cislo']
},
{
  id: 'pri14', c: 'nemoci', t: 'match',
  q: 'Přiřaď vyrážku k léčbě podle skript ČČK Praha 1.',
  pairs: [['plané neštovice', 'tekutý pudr, paracetamol'], ['opar', 'krém Vectavir'], ['kopřivka', 'antihistaminika, Fenistil'], ['lymská borelióza', 'antibiotika od lékaře'], ['plíseň nohou', 'Lamisil, koupele v hypermanganu']],
  why: 'U planých neštovic, zarděnek a boreliózy k tomu patří izolace nebo návštěva lékaře.',
  src: 'ČČK Praha 1, s. 10–13'
},
{
  id: 'pri15', c: 'prostredi', t: 'match',
  q: 'Přiřaď úraz teplem nebo chladem k jeho příčině.',
  pairs: [['úpal', 'dlouhý pobyt v horkém a vlhkém prostředí'], ['úžeh', 'přímé a dlouhé působení slunečních paprsků'], ['podchlazení', 'teplota tělesného jádra pod 35 °C'], ['omrzliny', 'poškození tkání chladem, větrem a vlhkostí']],
  why: 'U úžehu dochází k překrvení mozkových obalů a dehydrataci. Omrzliny postihují nejčastěji uši, nos a prsty.',
  src: 'Skripta s. 28–29'
},
{
  id: 'pri16', c: 'kosti', t: 'match',
  q: 'Přiřaď typy pneumotoraxu.',
  pairs: [['uzavřený', 'jednorázové vniknutí vzduchu, většinou se vstřebá'], ['otevřený', 'stálá komunikace hrudníku s okolím'], ['ventilový (tenzní)', 'vzduch jde dovnitř, ale ne ven']],
  why: 'Ventilový pneumotorax je nejnebezpečnější — tlak v hrudníku roste s každým nádechem.',
  src: 'Skripta s. 27'
},
{
  id: 'pri17', c: 'kosti', t: 'match',
  q: 'Přiřaď poranění kloubů.',
  pairs: [['kontuze', 'zhmoždění bez poranění kloubního pouzdra'], ['distorze', 'podvrtnutí, překročení rozsahu pohybu'], ['luxace', 'vymknutí hlavice z kloubní jamky']],
  why: 'Luxace vzniká při velkém násilí, nejčastěji u ramenního a kolenního kloubu. Repozici provádí ortopedie.',
  src: 'Skripta s. 18'
},
{
  id: 'pri18', c: 'stavy', t: 'match',
  q: 'Přiřaď druh šoku k příčině.',
  pairs: [['hypovolemický', 'masivní krevní ztráta, průjmy, popáleniny'], ['kardiogenní', 'selhávání srdce (infarkt)'], ['obstrukční', 'překážka v těle (plicní embolie)']],
  why: 'Hypovolemický šok se rozvíjí nad ztrátou 20–30 % objemu krve.',
  src: 'Skripta s. 26'
},
{
  id: 'pri19', c: 'prostredi', t: 'match',
  q: 'Přiřaď cestu vstupu jedu do těla.',
  pairs: [['enterálně', 'ústy'], ['parenterálně', 'žilní cestou'], ['inhalačně', 'vdechnutím'], ['transdermálně', 'přes kůži']],
  why: 'Na otravu myslíme vždy při bezvědomí nejasného původu. TIS: 224 919 293.',
  src: 'Skripta s. 30'
},

/* ═══════════════════════════ PRAVDA, NEBO MÝTUS? ═══════════════════════════ */
{ id: 'myt01', c: 'rany', t: 'tf', v: false, q: 'Při krvácení z nosu dítěti zakloníme hlavu, aby krev netekla ven.', why: 'Hlava se předklání. Při záklonu dítě krev polyká, může zvracet a ztráta krve se nedá odhadnout.', src: 'Skripta s. 15' },
{ id: 'myt02', c: 'rany', t: 'tf', v: false, q: 'Klíště před vytažením natřeme olejem nebo krémem, aby se samo pustilo.', why: 'Klíště nenatíráme — dusí se a může vyvrhnout obsah do rány. Vyviklat, vytočit, vytrhnout, pak dezinfekce.', src: 'Skripta s. 14' },
{ id: 'myt03', c: 'rany', t: 'tf', v: false, q: 'Zabodnutý nůž z rány opatrně vytáhneme, aby se rána dala ošetřit.', why: 'Zaklíněné předměty nikdy nevytahujeme — mohou tamponovat poraněnou cévu. Ránu jemně kryjeme a předmět fixujeme.', src: 'Skripta s. 14 a 16' },
{ id: 'myt04', c: 'stavy', t: 'tf', v: false, q: 'Při epileptickém záchvatu vsuneme do úst předmět, aby si postižený nepokousal jazyk.', why: 'Nerozevírat zaťaté čelisti a nevsouvat předměty do úst — hrozí vyražení a vdechnutí zubů. Jazyk se ani nevytahuje, ani nepřipíná.', src: 'Skripta s. 24' },
{ id: 'myt05', c: 'prostredi', t: 'tf', v: false, q: 'Popáleninu natřeme mastí nebo máslem, aby tolik nebolela.', why: 'Do popáleniny se neaplikují žádné masti ani léky. Chladit tekoucí vodou (I. a II. stupeň), sterilně krýt.', src: 'Skripta s. 29' },
{ id: 'myt06', c: 'prostredi', t: 'tf', v: false, q: 'Puchýře u popáleniny propíchneme, aby se rychleji zahojily.', why: 'Puchýře nikdy nepropichujeme ani neprostřihujeme — chrání ránu před infekcí.', src: 'ČČK příručka, s. 63' },
{ id: 'myt07', c: 'prostredi', t: 'tf', v: false, q: 'Podchlazenému dáme napít alkoholu, aby se zahřál.', why: 'Alkohol rozšiřuje cévy a ztráty tepla zvyšuje. Podává se teplý nápoj, ohřívá se pomalu.', src: 'Skripta s. 28' },
{ id: 'myt08', c: 'prostredi', t: 'tf', v: false, q: 'Omrzlou kůži rozproudíme třením, nejlépe sněhem.', why: 'Kůži netřít — tkáň je křehká a poškodí se. Prokrvení pohybem, postupné zahřívání, suché sterilní krytí.', src: 'Skripta s. 29' },
{ id: 'myt09', c: 'voda', t: 'tf', v: false, q: 'Tonoucímu po vytažení nejdřív vylijeme vodu z plic.', why: 'Vodu z plic nevyléváme. Co nejrychleji zahájit umělé dýchání pěti vdechy.', src: 'ČČK Praha 1, s. 20 · skripta s. 32' },
{ id: 'myt10', c: 'kpr', t: 'tf', v: false, q: 'Lapavé dechy (gasping) znamenají, že postižený dýchá a KPR není potřeba.', why: 'Lapavé dýchání je známka zástavy oběhu — volat 155 a zahájit resuscitaci.', src: 'Skripta s. 34 a 36' },
{ id: 'myt11', c: 'kpr', t: 'tf', v: true, q: 'Novorozenci při resuscitaci hlavu nezakláníme, ale držíme ji v neutrální poloze.', why: 'Skripta: nezaklánět hlavu, hrozí poranění páteře. Ústy obejmout pusu i nos a vdechovat jen obsah svých úst.', src: 'Skripta s. 35' },
{ id: 'myt12', c: 'rany', t: 'tf', v: false, q: 'Amputovanou část těla vložíme přímo do ledu, aby vydržela do operace.', why: 'Nikdy přímo do ledu ani do vody. Skripta: zvlhčená sterilní gáza, pytlík, ten do druhého s vlažnou vodou. ČČK: vnější obal s vodou a ledem.', src: 'Skripta s. 14' },
{ id: 'myt13', c: 'rany', t: 'tf', v: false, q: 'Po uštknutí zmijí jed z rány vysajeme.', why: 'Skripta: oplach a dezinfekce, naprostý klid, sterilní krytí a chlazení, lehká komprese elastickým obvazem nad kousnutím. K lékaři kvůli séru.', src: 'Skripta s. 14' },
{ id: 'myt14', c: 'rany', t: 'tf', v: false, q: 'Prosáklý tlakový obvaz sundáme a přiložíme nový, čistý.', why: 'Stávající obvaz se nesundává — strhla by se sraženina. Přidává se další tlaková vrstva.', src: 'ČČK příručka, s. 41' },
{ id: 'myt15', c: 'kosti', t: 'tf', v: true, q: 'Při podezření na zánět slepého střeva dítěti nedáváme léky proti bolesti ani pít.', why: 'U všech náhlých příhod břišních: úlevová poloha, nepodávat analgetika a tekutiny — zakryly by příznaky a brání operaci.', src: 'Skripta s. 21' },
{ id: 'myt16', c: 'stavy', t: 'tf', v: false, q: 'Dítě s febrilními křečemi rychle ochladíme ve studené sprše.', why: 'Skripta výslovně: nechladit dítě ve vaně či sprše. Teplota se snižuje postupně.', src: 'Skripta s. 25' },
{ id: 'myt17', c: 'lekarna', t: 'tf', v: true, q: 'V táborové lékárničce smějí být jen léky, jejichž výdej není vázán na lékařský předpis.', why: 'Tak to stanoví příloha č. 4. Léky na předpis, které dítě užívá dlouhodobě, přebírá zdravotník od rodičů i s dávkováním.', src: 'Skripta s. 6 · příloha č. 4' },
{ id: 'myt18', c: 'zakon', t: 'tf', v: false, q: 'Posudek o zdravotní způsobilosti dítěte platí jeden rok.', why: 'Platí dva roky od vystavení, pokud nedošlo ke změně zdravotní způsobilosti.', src: 'Skripta s. 3' },
{ id: 'myt19', c: 'zakon', t: 'tf', v: true, q: 'Pracovníci státního zdravotního dozoru mohou zotavovací akci ukončit.', why: 'Skripta to zdůrazňují třemi vykřičníky.', src: 'Skripta s. 7' },
{ id: 'myt20', c: 'rany', t: 'tf', v: false, q: 'Zaškrcení je prvním krokem při každém tepenném krvácení.', why: 'Zaškrcení je až poslední možnost, pokud nestačí stlačení a tlakový obvaz. Výjimka: amputace.', src: 'Skripta s. 15–16' },
{ id: 'myt21', c: 'lekarna', t: 'tf', v: true, q: 'Kyselinu acetylsalicylovou (Acylpyrin, Anopyrin) dětem nepodáváme.', why: 'Pro děti je paracetamol nebo ibuprofen.', src: 'ČČK Praha 1, s. 14' },
{ id: 'myt22', c: 'kosti', t: 'tf', v: false, q: 'Dítě po pádu z výšky, které mluví a dýchá, hned otočíme do zotavovací polohy.', why: 'Pokud postižený mluví, dýchá a masivně nekrvácí — NEHÝBAT s ním. Hrozí poranění páteře a míchy.', src: 'Skripta s. 33' },
{ id: 'myt23', c: 'stavy', t: 'tf', v: true, q: 'Zánět hrtanu je pro děti do 8 let život ohrožující stav.', why: 'Děti nemají dostatečně široké dýchací cesty a hrozí udušení. Chlad, cucat led nebo zmrzlinu, Rectodelt.', src: 'Skripta s. 23' },
{ id: 'myt24', c: 'prostredi', t: 'tf', v: false, q: 'Dítě vypilo neznámou chemikálii a nevíme kdy — necháme ho hned vyzvracet.', why: 'Nevíme-li kdy: nic ústy a nevyvolávat zvracení. Poradit se se ZZS nebo TIS a zajistit obal.', src: 'Skripta s. 29' },
{ id: 'myt25', c: 'voda', t: 'tf', v: false, q: 'Aktivní tonoucí hlasitě volá o pomoc a mává rukama nad hlavou.', why: 'Aktivní tonoucí nemůže volat — nemá dech. Paže plácají do stran o hladinu.', src: 'ČČK Praha 1, s. 19' },
{ id: 'myt26', c: 'voda', t: 'tf', v: false, q: 'Dítě, které bylo delší dobu pod vodou a po vytažení se rozdýchalo, může zůstat na táboře.', why: 'Musí k lékaři — hrozí druhotné tonutí s otokem plic, který se rozvine s odstupem.', src: 'ČČK Praha 1, s. 20' },
{ id: 'myt27', c: 'stavy', t: 'tf', v: true, q: 'Diabetikovi s hypoglykemií, který je při vědomí, dáme sladký nápoj.', why: 'Podání cukrů je první pomocí. V bezvědomí nic ústy — Glukagon a vypnout inzulinovou pumpu.', src: 'Skripta s. 25' },
{ id: 'myt28', c: 'kosti', t: 'tf', v: false, q: 'Dítě, které je po úderu do hlavy spavé, necháme vyspat — je jen unavené.', why: 'Spavost hlavně u dětí je příznak otřesu mozku. Dítě se sleduje a posílá k lékaři.', src: 'Skripta s. 32' },
{ id: 'myt29', c: 'kosti', t: 'tf', v: true, q: 'Podle skript se otevřený pneumotorax překryje neprodyšnou fólií ze tří stran.', why: 'Tak to uvádějí skripta a u zkoušky to platí.', src: 'Skripta s. 27', alt: { t: 'Novější postup ČČK (2017)', x: 'ČČK dnes doporučuje prodyšný obvaz (sterilní gáza fixovaná leukoplastí), případně ponechat ránu otevřenou — neprodyšné krytí může vést k tenznímu pneumotoraxu.' } },
{ id: 'myt30', c: 'rany', t: 'tf', v: true, q: 'Podle skript se při krvácení z nosu chladí čelo, nos a krk.', why: 'Tak to uvádějí skripta.', src: 'Skripta s. 15', alt: { t: 'Novější postup ČČK (2017)', x: 'ČČK doporučuje studený obklad na týlní krajinu, stisk nosních křídel alespoň 5 minut a nos gázou neucpávat.' } },
{ id: 'myt31', c: 'povinnosti', t: 'tf', v: true, q: 'Zdravotník musí být po celou dobu akce dosažitelný 24 hodin denně.', why: 'Tak to stanoví § 11 zákona 258/2000 Sb. Ordinační hodiny jsou jen vyhrazený čas na ošetřovně.', src: 'Zák. 258/2000 Sb. § 11' },
{ id: 'myt32', c: 'povinnosti', t: 'tf', v: true, q: 'U dětí na ošetřovně často pomůže už samotná péče a pozornost — placebo efekt funguje.', why: 'Spousta obtíží dětí na táboře má psychický původ. Léčíme celého člověka, nejen tělo — ale varovné příznaky se nikdy nepřehlížejí.', src: 'Ruční poznámka ve skriptech s. 5 · ČČK Praha 1, s. 5', note: 'Z kurzu: „placebo efekt funguje“.' },
{ id: 'myt33', c: 'zaklady', t: 'tf', v: true, q: 'S dispečerem záchranné služby nikdy nezavěšujeme jako první.', why: 'Dispečer potřebuje doplňující informace a vede vás telefonicky asistovanou první pomocí (TAPP, TANR).', src: 'Skripta s. 12' },
{ id: 'myt34', c: 'prostredi', t: 'tf', v: false, q: 'Oxid uhelnatý se pozná podle typického zápachu.', why: 'CO je bezbarvý plyn bez zápachu — proto je tak nebezpečný. Na hemoglobin se váže mnohokrát rychleji než kyslík.', src: 'Skripta s. 31' },

/* ═══════════════════════ DOPLNĚNÍ TÉMAT ZE SKRIPT ═══════════════════════ */
{
  id: 'dop01', c: 'zakon',
  q: 'Kdo posuzuje zdravotní způsobilost dospělých osob činných na akci jako dozor nebo zdravotník a jak dlouho posudek platí?',
  o: ['Registrující praktický lékař — posudek platí 2 roky', 'Závodní lékař — posudek platí 1 rok', 'Hygienická stanice — posudek platí 5 let', 'Nikdo, stačí čestné prohlášení'], a: [0],
  why: 'Podle § 10 musí být dozor i zdravotník zdravotně způsobilí. Posudek vydává registrující poskytovatel v oboru všeobecné praktické lékařství a platí 2 roky, pokud nedošlo ke změně zdravotní způsobilosti.',
  src: 'Skripta s. 3 · § 10 zák. 258/2000 Sb.'
},
{
  id: 'dop02', c: 'zakon', m: true,
  q: 'Jaké podmínky musí podle § 9 splnit dítě, aby se mohlo akce zúčastnit? (více odpovědí)',
  o: [
    'Je zdravotně způsobilé',
    'Je pravidelně očkované, nebo je imunní či má trvalou kontraindikaci',
    'Nejeví známky akutního onemocnění (horečka, průjem)',
    'Ve 14 dnech před odjezdem nepřišlo do styku s infekcí',
    'Umí plavat',
    'Má potvrzení od zubního lékaře'
  ], a: [0, 1, 2, 3],
  why: 'Zdravotní způsobilost posuzuje praktický lékař pro děti a dorost. Nepřítomnost akutního onemocnění a kontaktu s infekcí potvrzuje zákonný zástupce prohlášením starým nejvýš jeden den.',
  src: 'Skripta s. 3 · § 9 zák. 258/2000 Sb.',
  note: 'Pokud dítě nemá kontraindikaci, musí být očkované — hodí se okopírovaný očkovací průkaz.'
},
{
  id: 'dop03', c: 'zakon',
  q: 'Co upravuje zákon č. 258/2000 Sb.?',
  o: [
    'Práva a povinnosti v oblasti ochrany a podpory veřejného zdraví a soustavu orgánů ochrany veřejného zdraví',
    'Poskytování zdravotních služeb v nemocnicích',
    'Organizaci integrovaného záchranného systému',
    'Trestní odpovědnost za neposkytnutí první pomoci'
  ], a: [0],
  why: 'Pro zotavovací akce je v něm podstatná Hlava II, Díl 2 — podmínky pro výchovu, vzdělávání a zotavení dětí a mladistvých, s paragrafy 8 až 12.',
  src: 'Skripta s. 3',
  note: 'U zákona je ve skriptech ručně připsáno: „hygiena“.'
},
{
  id: 'dop04', c: 'povinnosti', m: true,
  q: 'Co uvádějí skripta o ošetřovně a izolaci? (více odpovědí)',
  o: [
    'Ošetřovna musí mít dostatečný zdroj světla a uzamykatelné prostory pro léky a dokumentaci',
    'Izolace musí být mimo ubytovací prostory',
    'V izolaci musí být tekoucí pitná voda a možnost vytápění',
    'Zdravotník si v denním režimu vyhradí ordinační hodiny',
    'Izolace může sloužit zároveň jako sklad potravin'
  ], a: [0, 1, 2, 3],
  why: 'Vybavení lékárny se řídí přílohou č. 4 vyhlášky 106/2001 Sb. Vyhláška dál žádá u izolace vlastní záchod a zakazuje patrová lůžka i jiné využití místností.',
  src: 'Skripta s. 5 · § 3 vyhlášky 106/2001 Sb.'
},
{
  id: 'dop05', c: 'hygiena',
  q: 'Kdo vykonává státní správu v ochraně veřejného zdraví?',
  o: [
    'Orgány ochrany veřejného zdraví — ministerstvo zdravotnictví s hlavním hygienikem ČR a krajské hygienické stanice',
    'Zdravotnická záchranná služba',
    'Obecní úřady',
    'Český červený kříž'
  ], a: [0],
  why: 'Krajské hygienické stanice vykonávají státní zdravotní dozor — mají pravomoc nařizovat, organizovat a řídit opatření k ochraně veřejného zdraví.',
  src: 'Skripta s. 7'
},
{
  id: 'dop06', c: 'hygiena',
  q: 'Proč patří k osobní hygieně péče o chrup?',
  o: ['Zabraňuje vzniku zubního kazu a paradentózy', 'Zabraňuje vzniku angíny', 'Je to jen estetická záležitost', 'Chrání před tetanem'], a: [0],
  why: 'Na táboře se dohlíží na čištění zubů nejméně ráno a večer.',
  src: 'Skripta s. 7 · ČČK Praha 1, s. 16'
},
{
  id: 'dop07', c: 'hygiena',
  q: 'Jaký režim stravování doporučují skripta?',
  o: [
    'Bohatší snídaně a oběd, lehká večeře, pokud možno 5× denně s intervaly ne delšími než 3 hodiny',
    'Tři jídla denně s nejbohatší večeří',
    'Jedno hlavní jídlo denně a jinak svačiny',
    'Jíst jen při pocitu hladu'
  ], a: [0],
  why: 'Vyhláška na zotavovací akci stanoví pět jídel: snídani, přesnídávku, oběd, svačinu a večeři.',
  src: 'Skripta s. 8'
},
{
  id: 'dop08', c: 'hygiena',
  q: 'Jak se podle skript člení stravovací provoz?',
  o: [
    'Na skladovací a provozní část (přípravna, teplá a studená kuchyně, umývárna nádobí); strávníci mají jídelnu',
    'Jen na kuchyni a jídelnu',
    'Na čistou a nečistou kuchyni',
    'Na část pro děti a část pro dospělé'
  ], a: [0],
  why: 'Pracovníci používají čisté ochranné pomůcky a oděvy. Hygienické požadavky stanoví vyhláška MZ ČR č. 137/2004 Sb.',
  src: 'Skripta s. 8'
},
{
  id: 'dop09', c: 'hygiena',
  q: 'Jak skripta popisují infekci?',
  o: [
    'Vniknutí původce nákazy do tkáně hostitele; reakce závisí na vlastnostech mikroba a na obraně a imunitě člověka',
    'Jakékoliv onemocnění s horečkou',
    'Přenos nemoci výhradně hmyzem',
    'Otrava zkaženým jídlem'
  ], a: [0],
  why: 'Původci infekčních chorob nacházejí v organismu vhodné prostředí k rozmnožování. Cesta přenosu je způsob, jak se nákaza dostane do těla.',
  src: 'Skripta s. 9'
},
{
  id: 'dop10', c: 'zaklady',
  q: 'Co znamenají zkratky TK, GLY a TT?',
  o: ['Krevní tlak, glykemie, tělesná teplota', 'Tep, glukóza, tlak', 'Tlaková komprese, glykogen, teplota těla', 'Trauma, glasgow, tachykardie'], a: [0],
  why: 'Patří k základním vyšetřením vedle anamnézy a pohledu, poslechu, pohmatu a poklepu.',
  src: 'Skripta s. 13'
},
{
  id: 'dop11', c: 'kosti',
  q: 'Co je spinální šok?',
  o: [
    'Ztráta neurologické funkce pod úplnou míšní lézí (přetržením míchy)',
    'Šok z bolesti při zlomenině páteře',
    'Hypovolemický šok při poranění zad',
    'Psychická reakce na úraz'
  ], a: [0],
  why: 'Pokud je poškozená mícha, je poškozená i páteř. Již podle mechanismu úrazu lze poranění páteře a míchy předpokládat.',
  src: 'Skripta s. 33'
},
{
  id: 'dop12', c: 'stavy', m: true,
  q: 'Jaké příčiny epilepsie skripta uvádějí? (více odpovědí)',
  o: ['Vrozená (genetika)', 'Získaná (úraz hlavy, operace hlavy, nádor)', 'Toxická (návykové látky)', 'Nachlazení', 'Nedostatek vitaminů'], a: [0, 1, 2],
  why: 'Epilepsie je záchvatovité onemocnění mozku spojené s tonicko-klonickými křečemi. Záchvaty se mohou objevit přes den i v noci ve spánku.',
  src: 'Skripta s. 24',
  note: 'Mezi lékové skupiny si na kurzu doplnili i antiepileptika.'
},
{
  id: 'dop13', c: 'zaklady', t: 'tf', v: true,
  q: 'Aplikace Záchranka při volání pomoci předá operátorovi polohu volajícího.',
  why: 'Skripta uvádějí aplikaci Záchranka mezi prostředky přivolání pomoci vedle čísel 150, 155, 158, 156 a 112.',
  src: 'Skripta s. 11'
},
{
  id: 'dop14', c: 'lekarna', m: true,
  q: 'Co si Dana ke vybavení lékárničky poznamenala z kurzu? (více odpovědí)',
  o: [
    'Doplnit dva různé léky na teplotu, lék na kašel a na průjem',
    'Nekupovat jodové dezinfekce',
    'Nitrilové rukavice ve více baleních a bezrtuťový teploměr',
    'Čelovka místo baterky a resuscitační rouška 2×',
    'Přibalit léky na předpis pro případ angíny'
  ], a: [0, 1, 2, 3],
  why: 'Léky na předpis v táborové lékárničce být nesmějí. Ruční poznámky z kurzu doplňují minimální rozsah z přílohy č. 4.',
  src: 'Ruční poznámky ve skriptech s. 6',
  note: 'Dále: náplasti se zvířátky, materiál na popáleniny a rychloobvazy kvalitní.'
}

);
