/* Banka otázek 3/3 — Náhlé stavy, Teplo/chlad/otravy, Tonutí, Resuscitace
   Pokrývá skripta s. 23–31 a 34–36. */
window.QB = window.QB || [];
window.QB.push(

/* ───────────────── 8. NÁHLÉ STAVY (s. 23–27) ───────────────── */
{
  id: 'sta01', c: 'stavy', m: true,
  q: 'Dítě se dusí, drží se za krk a kašle. Co je první pomocí? (více odpovědí)',
  o: [
    'Povzbudit ho ke kašli, aby překážku vykašlalo samo',
    'Opakované údery mezi lopatky v sériích po 5×',
    'Heimlichův manévr podle věkové kategorie',
    'Zahájení KPR, pokud upadne do bezvědomí',
    'Vsunout prsty do úst a překážku nahmatat',
    'Dát napít vody, aby se překážka spláchla'
  ], a: [0, 1, 2, 3],
  why: 'Dokud postižený kašle, je kašel účinnější než jakýkoliv manévr. Slepé vytahování prstem překážku zasune hlouběji. Příznaky: dušení, držení se za krk, chrčení (stridor), modrání (cyanóza), bezvědomí, zástava dechu a následně oběhu, smrt.',
  src: 'Skripta s. 23'
},
{
  id: 'sta02', c: 'stavy',
  q: 'Co je status astmaticus?',
  o: [
    'Několik za sebou jdoucích astmatických záchvatů bez reakce na léčbu',
    'První astmatický záchvat v životě',
    'Astma vyvolané fyzickou námahou',
    'Chronické astma léčené inhalátorem'
  ], a: [0],
  why: 'Astmatický záchvat vyvolávají alergeny — prach, pyl, kouř, léky, psychické vlivy, emoční zátěž. Dochází ke zúžení průdušek bronchospasmem, otokem a zvýšenou sekrecí hlenu.',
  src: 'Skripta s. 23'
},
{
  id: 'sta03', c: 'stavy', m: true,
  q: 'Jaké jsou příznaky astmatického záchvatu? (více odpovědí)',
  o: [
    'Typické „oslí hýkání“',
    'Narůstající klidová dušnost',
    'Zapojení pomocných dýchacích svalů',
    'Prodloužený výdech a pískot',
    'Neklid, pocení, slabost, modrání (cyanóza)',
    'Prodloužený nádech bez zvuku'
  ], a: [0, 1, 2, 3, 4],
  why: 'První pomocí je poloha v polosedě, uvolnit oděv, vyvětrat, snažit se postiženého uklidnit a použít jeho osobní inhalátor (Berotec, Ventolin, Ecobec).',
  src: 'Skripta s. 23'
},
{
  id: 'sta04', c: 'stavy',
  q: 'Pro které děti je zánět hrtanu život ohrožujícím stavem?',
  o: [
    'Pro děti do 8 let věku',
    'Pro děti do 3 let věku',
    'Pro děti nad 10 let',
    'Pro všechny děti stejně'
  ], a: [0],
  why: 'Děti do 8 let nemají dostatečně široké dýchací cesty a hrozí udušení. Příčinou je virový zánět způsobující otok v oblasti hrtanu, který úplně uzavírá dýchací cesty. Sezónní výskyt: jaro a podzim.',
  src: 'Skripta s. 23'
},
{
  id: 'sta05', c: 'stavy', m: true,
  q: 'Jaké jsou typické příznaky zánětu hrtanu u dítěte? (více odpovědí)',
  o: [
    '„Štěkavý kašel“, hlavně v noci',
    'Narůstající klidová dušnost a zapojení pomocných dýchacích svalů',
    'Dítě se nenechá položit',
    'Neklid, pocení, slabost, modrání (cyanóza)',
    'Vysoká horečka nad 40 °C jako první příznak'
  ], a: [0, 1, 2, 3],
  why: 'První pomocí je chlad — cucání zmrzliny či ledu — a Rectodelt. To, že se dítě nenechá položit, je varovný příznak: vleže se mu hůř dýchá.',
  src: 'Skripta s. 23'
},
{
  id: 'sta06', c: 'stavy',
  q: 'Jaký je rozdíl mezi ischemickou a hemoragickou CMP?',
  o: [
    'U ischemické trombus ucpe cévu, u hemoragické céva praskne',
    'U ischemické céva praskne, u hemoragické ji ucpe trombus',
    'Ischemická postihuje jen mladé, hemoragická jen staré',
    'Rozdíl je jen v rychlosti nástupu'
  ], a: [0],
  why: 'Příčinou je trombus, který „ucpe“ cévu v mozku, nebo céva praskne vlivem vysokého tlaku (ateroskleróza, hypertenze). Příznaky: vertigo, bolest hlavy, porucha řeči, apatie, pokles koutku, paréza nebo plegie poloviny těla, nauzea, zvracení.',
  src: 'Skripta s. 23–24'
},
{
  id: 'sta07', c: 'stavy',
  q: 'Do jaké doby má být pacient s CMP dopraven na iktové centrum?',
  o: ['Do 3 hodin', 'Do 6 hodin', 'Do 1 hodiny', 'Do 12 hodin'], a: [0],
  why: 'Stejné časové okno jako u infarktu myokardu a kardiocentra. První pomocí je snažit se postiženého uklidnit a volat ZZS — jde o čas.',
  src: 'Skripta s. 24',
  tags: ['cislo']
},
{
  id: 'sta08', c: 'stavy',
  q: 'Co je petit mal?',
  o: [
    'Malý epileptický záchvat — zahledění, nepřítomný pohled, stáčení očí do strany',
    'Velký epileptický záchvat s tonicko-klonickými křečemi',
    'Několik po sobě jdoucích záchvatů',
    'Epileptický záchvat u dětí do 8 let'
  ], a: [0],
  why: 'Grand mal (velký záchvat): aura, upadnutí do bezvědomí, tonicko-klonické křeče, lapavé dýchání, pěna u úst, pokousání spojené s pomočením nebo pokálením; po odeznění se pacient probírá, je zmatený a nic si nepamatuje. Status epilepticus: několik po sobě jdoucích záchvatů.',
  src: 'Skripta s. 24'
},
{
  id: 'sta09', c: 'stavy', m: true,
  q: 'Jaká je první pomoc u epileptického záchvatu? (více odpovědí)',
  o: [
    'Odstranit nebezpečné předměty z dosahu',
    'Pokud je to možné, držet postiženému hlavu, aby se neporanil',
    'Počkat na odeznění záchvatu',
    'Po odeznění provést záklon hlavy a počkat, než se probudí',
    'Po probuzení poloha na boku, Diazepam Tube',
    'Bránit křečím pevným držením končetin'
  ], a: [0, 1, 2, 3, 4],
  why: 'Křečím se nikdy nebrání — hrozí zlomeniny a poranění svalů.',
  src: 'Skripta s. 24'
},
{
  id: 'sta10', c: 'stavy', m: true,
  q: 'Co se při epileptickém záchvatu NIKDY nedělá? (více odpovědí)',
  o: [
    'Nebránit křečím zalehnutím postiženého',
    'Nerozevírat zaťaté čelisti a nevsouvat předměty do úst',
    'Nevytahovat jazyk',
    'Nesnažit se postiženého probouzet',
    'Nepřipínat jazyk',
    'Nevolat záchrannou službu'
  ], a: [0, 1, 2, 3, 4],
  why: 'Záchrannou službu naopak volat je namístě — zejména u prvního záchvatu, u status epilepticus, po úraze hlavy nebo když se dítě neprobírá. Vsunutí předmětu do úst způsobí vyražení zubů a jejich vdechnutí.',
  src: 'Skripta s. 24'
},
{
  id: 'sta11', c: 'stavy',
  q: 'U kterých dětí vznikají febrilní křeče a proč?',
  o: [
    'U dětí do 8 let, protože nemají vyvinuté termoregulační centrum',
    'U dětí nad 10 let při přehřátí na slunci',
    'Pouze u dětí s epilepsií',
    'U kojenců do 1 roku při očkování'
  ], a: [0],
  why: 'Jde o obrannou reakci organismu. Příčinou jsou vysoké teploty a nesprávné chlazení (zábaly u teplot). Příznakem jsou vysoké teploty, tonicko-klonické křeče a cyanóza.',
  src: 'Skripta s. 24'
},
{
  id: 'sta12', c: 'stavy',
  q: 'Co je u febrilních křečí navíc zakázáno oproti epilepsii?',
  o: [
    'Chladit dítě ve vaně či sprše',
    'Podávat antipyretika',
    'Ukládat dítě do polohy na boku',
    'Volat záchrannou službu'
  ], a: [0],
  why: 'Prudké ochlazení vyvolá další křeč. První pomocí je prevence — správné, postupné snižování teploty. Po odeznění záchvatu záklon hlavy, poloha na boku po probuzení, Diazepam Tube a antipyretika.',
  src: 'Skripta s. 24–25'
},
{
  id: 'sta13', c: 'stavy',
  q: 'Jaký je rozdíl mezi cukrovkou I. a II. typu?',
  o: [
    'I. typ je dependentní (závislý na inzulinu), II. typ rezistentní',
    'I. typ je rezistentní, II. typ dependentní',
    'I. typ postihuje jen dospělé, II. typ jen děti',
    'Rozdíl je jen v závažnosti'
  ], a: [0],
  why: 'Cukrovka je onemocnění slinivky břišní — porucha metabolismu sacharidů. Chybí hormon inzulin nebo ho tělo neumí využít. Dítě s cukrovkou I. typu má na táboře inzulinovou pumpu a průkaz diabetika.',
  src: 'Skripta s. 25'
},
{
  id: 'sta14', c: 'stavy',
  q: 'Dítě-diabetik je bledé, opocené a má pocit hladu. O co jde?',
  o: [
    'Hypoglykemie — předávkování inzulinem nebo snížený příjem cukrů',
    'Hyperglykemie — zvýšený příjem cukrů nebo nízká dávka inzulinu',
    'Úžeh',
    'Začínající alergická reakce'
  ], a: [0],
  why: 'Hypoglykemie: pocit hladu, bledost, opocenost, bezvědomí. Hyperglykemie: žízeň, teplá kůže, dech páchne po acetonu. První pomocí je v obou případech podání cukrů a sladký nápoj — u hypoglykemie pomůže, u hyperglykemie krátkodobě neuškodí.',
  src: 'Skripta s. 25'
},
{
  id: 'sta15', c: 'stavy',
  q: 'Diabetik je v bezvědomí. Co je první pomocí?',
  o: [
    'Glukagon a vypnout inzulinovou pumpu',
    'Nalít do úst sladký nápoj',
    'Podat inzulin z pumpy',
    'Nechat ležet a čekat'
  ], a: [0],
  why: 'Osobě v bezvědomí se nikdy nic nepodává ústy — hrozí vdechnutí. Glukagon se aplikuje injekčně nebo nosním sprejem. Vypnutí pumpy zabrání dalšímu poklesu glykemie.',
  src: 'Skripta s. 25'
},
{
  id: 'sta16', c: 'stavy', m: true,
  q: 'Jaké jsou příznaky alergické reakce podle skript? (více odpovědí)',
  o: [
    'Kožní projevy, průjem, zvracení, slzení očí',
    'Bolesti a křeče břicha',
    'Otoky, dušnost, anafylaktický šok jako nejtěžší fáze',
    'Vysoká horečka nad 40 °C',
    'Ztuhlost šíje'
  ], a: [0, 1, 2],
  why: 'Alergická reakce je nepřiměřená reakce organismu na cizorodou látku. Nastává v řádu sekund, hodin až dní a příznaky závisí na alergenu.',
  src: 'Skripta s. 25'
},
{
  id: 'sta17', c: 'stavy',
  q: 'Co je Epipen a jak se podává?',
  o: [
    'Adrenalinové pero podávané do svalu (i.m.), účinek do 10 minut',
    'Antihistaminikum v tabletách',
    'Inhalátor s bronchodilatancii',
    'Injekce glukagonu pro diabetiky'
  ], a: [0],
  why: 'První pomocí u alergické reakce je chlazení, cucání ledu či zmrzliny u otoku dýchacích cest nebo dutiny ústní, antihistaminika a Epipen. Dítě, které Epipen má, ho musí mít stále u sebe nebo musí zdravotník vědět, kde je.',
  src: 'Skripta s. 25 a 10'
},
{
  id: 'sta18', c: 'stavy', m: true,
  q: 'Které poruchy vědomí jsou kvantitativní? (více odpovědí)',
  o: ['Somnolence', 'Sopor', 'Koma', 'Zmatenost', 'Demence'], a: [0, 1, 2],
  why: 'Kvalitativní poruchy vědomí jsou zmatenost, poruchy chování, Alzheimerova choroba a Parkinsonova nemoc, demence. Kvantitativní stupňuje hloubku: somnolence → sopor → koma.',
  src: 'Skripta s. 25'
},
{
  id: 'sta19', c: 'stavy', m: true,
  q: 'Co se hodnotí podle Glasgow Coma Scale (GCS)? (více odpovědí)',
  o: ['Otevření očí', 'Slovní reakce', 'Motorická reakce', 'Reakce zornic na světlo', 'Krevní tlak'], a: [0, 1, 2],
  why: 'Tři složky: otevření očí, slovní reakce, motorická reakce. Zornice se hodnotí zvlášť — anizokorie je příznak nitrolebního krvácení.',
  src: 'Skripta s. 25'
},
{
  id: 'sta20', c: 'stavy', m: true,
  q: 'Jaký je postup při bezvědomí podle skript? (více odpovědí — sedm kroků)',
  o: [
    'Oslovení',
    'Bolestivý podnět (algický)',
    'Záklon hlavy',
    'Předsunutí čelisti a kontrola dutiny ústní',
    'Zhodnocení životních funkcí (dýchání a srdeční akce)',
    'Přivolání si pomoci 155 a zjištění, zda dýchá či nedýchá',
    'Podání tekutin'
  ], a: [0, 1, 2, 3, 4, 5],
  why: 'Dýchá-li → poloha na zádech a opakovaná kontrola stavu. Nedýchá-li, nebo si nejste jisti → ihned zahájení neodkladné resuscitace.',
  src: 'Skripta s. 26'
},
{
  id: 'sta21', c: 'stavy',
  q: 'Co je mdloba?',
  o: [
    'Krátkodobá ztráta vědomí často doprovázená pádem, která se spontánně upraví sama',
    'Dlouhodobé bezvědomí vyžadující resuscitaci',
    'Porucha vědomí způsobená cukrovkou',
    'Stav po epileptickém záchvatu'
  ], a: [0],
  why: 'Příčiny: vazovagální (pobyt v horkém prostředí), ortostatická (nedokrvení mozku při rychlém pohybu), neurogenní (epilepsie, migréna), srdeční onemocnění, námahová (vyčerpání), psychogenní (panika, hysterie, deprese) a nejasného původu — nejčastější, „restart těla“.',
  src: 'Skripta s. 26'
},
{
  id: 'sta22', c: 'stavy',
  q: 'Jak skripta definují šok?',
  o: [
    'Obranná odpověď organismu na akutní snížení krevního tlaku vlivem snížení objemu kolující tekutiny',
    'Psychická reakce na traumatickou událost',
    'Náhlá zástava krevního oběhu',
    'Alergická reakce na cizorodou látku'
  ], a: [0],
  why: 'Fáze šoku: kompenzovaný (tělo reaguje zrychlením srdeční akce), dekompenzovaný (zrychlení srdeční akce A snížení tlaku — kombinace, která zabíjí), ireverzibilní (multiorgánové selhání, smrt).',
  src: 'Skripta s. 26'
},
{
  id: 'sta23', c: 'stavy',
  q: 'Která fáze šoku je podle skript tou, která zabíjí?',
  o: [
    'Dekompenzovaná — zrychlená srdeční akce se snížením tlaku',
    'Kompenzovaná — zrychlená srdeční akce',
    'Ireverzibilní — multiorgánové selhání',
    'Iniciální'
  ], a: [0],
  why: 'V kompenzované fázi tělo zvládá udržet tlak zrychlením tepu. Jakmile tlak i přes zrychlený tep klesá, kompenzace selhala — skripta to zdůrazňují: „kombinace, která zabíjí!!!“. Ireverzibilní fáze už je nezvratná.',
  src: 'Skripta s. 26'
},
{
  id: 'sta24', c: 'stavy', m: true,
  q: 'Jaké druhy šoku skripta rozlišují? (více odpovědí)',
  o: [
    'Hypovolemický (hemoragický) — masivní krevní ztráta, průjmy, zvracení, popáleniny',
    'Kardiogenní — při srdečním selhávání (AIM)',
    'Obstrukční — vzniká překážkou v těle (plicní embolie)',
    'Neurogenní — při poranění míchy',
    'Septický — při těžké infekci'
  ], a: [0, 1, 2],
  why: 'Skripta uvádějí tři druhy. Hypovolemický se rozvíjí nad ztrátou 20–30 % objemu krve.',
  src: 'Skripta s. 26'
},
{
  id: 'sta25', c: 'stavy', m: true,
  q: 'Jaké jsou příznaky rozvíjejícího se šoku? (více odpovědí)',
  o: [
    'Bledost, šednutí, pocení',
    'Poruchy vědomí — apatie nebo neklid až agrese',
    'Rychlý slabý (nitkovitý) tep',
    'Zrychlené povrchní dýchání (tachypnoe)',
    'Nízký tlak (hypotenze)',
    'Zrudnutí obličeje a pomalý silný tep'
  ], a: [0, 1, 2, 3, 4],
  why: 'Neklid až agrese jsou u dětí častější než apatie a snadno se přehlédnou jako „zlobení“. První pomocí je odstranění příčiny šoku (krvácení), protišoková poloha a pravidlo 5T.',
  src: 'Skripta s. 26–27'
},
{
  id: 'sta26', c: 'stavy', m: true,
  q: 'Co znamená pravidlo 5T? (více odpovědí)',
  o: ['Teplo', 'Ticho', 'Tekutiny', 'Tlumení bolesti', 'Transport', 'Tlak'], a: [0, 1, 2, 3, 4],
  why: '„Tekutiny“ zde znamená tlumení žízně — otírání rtů, ne podávání nápojů. Postiženému v šoku ani se zraněním břicha se nic nepodává ústy kvůli riziku operace v celkové anestezii.',
  src: 'Skripta s. 27 a 16'
},
{
  id: 'sta27', c: 'stavy',
  q: 'Jak vypadá protišoková poloha?',
  o: [
    'Vleže na zádech s dolními končetinami zvednutými nad úroveň těla',
    'Vleže na boku s pokrčenou horní nohou',
    'V polosedě se zapřenýma rukama',
    'Vleže na břiše s hlavou na stranu'
  ], a: [0],
  why: 'Protišoková poloha se nepoužívá, je-li poraněná hlava. ČČK uvádí zvednutí přibližně o 20–30 cm. Poloha na boku (zotavovací) je pro bezvědomého se zachovaným dýcháním, polosed pro poranění hrudníku, astma a infarkt.',
  src: 'Skripta s. 36 a 15'
},
{
  id: 'sta28', c: 'stavy', m: true,
  q: 'Kdy se používá zotavovací poloha (na boku)? (více odpovědí)',
  o: [
    'U bezvědomého se zachovanými životními funkcemi',
    'Hrozí-li vdechnutí zvratků nebo krve',
    'Při bezvědomí následkem otravy nebo opilosti',
    'U tonoucího a při výrazném krvácení z nosu či dutiny ústní',
    'Musí-li zachránce bezvědomého krátkodobě opustit',
    'U zlomenin dlouhých kostí a u polytraumat'
  ], a: [0, 1, 2, 3, 4],
  why: 'Pro zraněné se zlomeninami dlouhých kostí nebo s polytraumaty se poloha nepoužije. U poranění spodiny lebeční a u pronikajícího poranění hrudníku se ukládá na ZRANĚNOU stranu.',
  src: 'ČČK příručka, s. 190 · skripta s. 36'
},

/* ─────────── 9. ÚRAZY TEPLEM, CHLADEM, PROUDEM, OTRAVY (s. 28–31) ─────────── */
{
  id: 'pro01', c: 'prostredi',
  q: 'Jaký je rozdíl mezi úpalem a úžehem?',
  o: [
    'Úpal je z dlouhého pobytu v horkém a vlhkém prostředí, úžeh z přímého a dlouhého kontaktu slunečních paprsků',
    'Úpal je ze slunce, úžeh z horkého prostředí',
    'Úpal postihuje děti, úžeh dospělé',
    'Jsou to dva názvy pro totéž'
  ], a: [0],
  why: 'Úpal: suchá a zarudlá kůže, malátnost, poruchy vědomí, dezorientace, nevolnost, zvracení, hypotenze, poruchy zraku (mžitky) a sluchu (hučení), vysoká teplota na 40 °C, kolaps. Úžeh: překrvení mozkových obalů a dehydratace, bolest hlavy, suchá nebo spálená kůže, chybí pocení, teplota přes 40 °C, zvracení, křeče.',
  src: 'Skripta s. 28'
},
{
  id: 'pro02', c: 'prostredi',
  q: 'Pod jakou teplotu tělesného jádra klesá teplota při podchlazení?',
  o: ['Pod 35 °C', 'Pod 36 °C', 'Pod 33 °C', 'Pod 30 °C'], a: [0],
  why: 'Podchlazení může nastat i v teplejším období — v mokrém oděvu v silném větru, kdy oděv funguje prakticky jako chladnička. Delší pobyt v chladné vodě rovněž způsobí podchlazení.',
  src: 'Skripta s. 28 · ČČK příručka, s. 64',
  tags: ['cislo']
},
{
  id: 'pro03', c: 'prostredi', m: true,
  q: 'Jaká je první pomoc u podchlazení? (více odpovědí)',
  o: [
    'Zabránit dalším ztrátám tepla',
    'Teplé nápoje',
    'Při těžkém podchlazení nehýbat končetinami',
    'Pomalé ohřívání těla',
    'Termo fólie a termo sáčky s teplou vodou',
    'Nepodávat alkohol',
    'Rychlé ohřátí horkou sprchou'
  ], a: [0, 1, 2, 3, 4, 5],
  why: 'Rychlé ohřátí a pohyb končetinami vyplaví chladnou krev z periferie do jádra a může způsobit poruchu srdečního rytmu. Alkohol rozšiřuje cévy a ztráty tepla naopak zvyšuje. Příznaky: útlum životně důležitých funkcí (bradykardie, hypotenze), hypoxie, svalový třes, porucha vědomí až smrt.',
  src: 'Skripta s. 28'
},
{
  id: 'pro04', c: 'prostredi', m: true,
  q: 'Jaké jsou stupně omrzlin? (více odpovědí)',
  o: [
    'I. stupeň — zarudnutí, chladná kůže, málo citlivá',
    'II. stupeň — puchýře, necitlivost, nafialovělá kůže',
    'III. stupeň — nekróza, tkáně křehké s rizikem odlomení',
    'IV. stupeň — zuhelnatění'
  ], a: [0, 1, 2],
  why: 'Omrzliny vznikají poškozením tkání vlivem chladu, větru a vlhkosti. Nejčastěji jsou postiženy akrální části těla — uši, nos a prsty. První pomocí je prokrvení aktivním i pasivním pohybem, postupné zahřívání, suché a sterilní krytí — kůži netřít.',
  src: 'Skripta s. 29'
},
{
  id: 'pro05', c: 'prostredi',
  q: 'Kudy prochází elektrický proud tělem?',
  o: [
    'Cestou nejmenšího odporu',
    'Vždy přímou cestou od vstupu k výstupu',
    'Pouze po povrchu kůže',
    'Vždy přes srdce'
  ], a: [0],
  why: 'Stupeň popálení závisí na typu proudu (jednosměrný, střídavý), napětí, cestě přechodu proudu a době kontaktu. Nejrizikovější skupinou jsou děti a lidé pracující s elektrickým proudem. Příznaky: zmatenost, ochrnutí, těžké popáleniny, bezvědomí, křeče, srdeční zástava či arytmie. Vždy pozor na vlastní bezpečnost.',
  src: 'Skripta s. 29'
},
{
  id: 'pro06', c: 'prostredi',
  q: 'Dítě vypilo neznámou čisticí chemikálii, ale nevíte kdy. Co uděláte?',
  o: [
    'Nepodávat nic per os a nevyvolávat zvracení; poradit se s operátorem ZZS nebo TIS',
    'Dát vypít co nejvíce vody a vyvolat zvracení',
    'Podat aktivní uhlí a mléko',
    'Počkat, zda se objeví příznaky'
  ], a: [0],
  why: 'Víme-li kdy: postižený vypije co nejvíce vody, vyvoláme zvracení a podáme aktivní uhlí. Nevíme-li kdy: nic per os a nevyvolávat zvracení — hrozí druhé poleptání jícnu při zpětném průchodu. Vždy zajistit nádobu a etiketu chemické látky.',
  src: 'Skripta s. 29'
},
{
  id: 'pro07', c: 'prostredi', m: true,
  q: 'Jaké jsou stupně popálenin a jak se ošetřují podle skript? (více odpovědí)',
  o: [
    'I. stupeň — zarudnutí',
    'II. stupeň — tvorba puchýřů',
    'III. stupeň — nekróza',
    'Chladit pod tekoucí vodou I. a II. stupeň, sterilní krytí u III.',
    'Neaplikovat do rány žádné masti ani léky',
    'Puchýře propíchnout, aby se rychleji hojily'
  ], a: [0, 1, 2, 3, 4],
  why: 'Dále: odstranit reverzibilní příčiny, nestrhávat oděv, odstranit šperky, nepodávat nic per os. Puchýře se nikdy nepropichují ani neprostřihují, příškvary se nestrhávají.',
  src: 'Skripta s. 29 · ČČK příručka, s. 63'
},
{
  id: 'pro08', c: 'prostredi', m: true,
  q: 'Jak dlouho a čím se popálenina chladí podle příručky ČČK? (více odpovědí)',
  o: [
    'Minimální doba chlazení je 10 minut, spíše však 20 minut',
    'Tekoucí studenou vodou, pokud možno nad 15 °C',
    'Chlazení musí vždy začít co nejdříve',
    'Rozsáhlé popáleniny nad 20 % povrchu těla chladíme jen krátkodobě a jednorázově',
    'Ledovou vodou po dobu alespoň 30 minut',
    'Chladit se musí vždy celé tělo'
  ], a: [0, 1, 2, 3],
  why: 'Voda pod 15 °C a chlazení velké plochy vedou k podchlazení, které je u dítěte nebezpečnější než samotná popálenina. Skripta uvádějí jen „chladit pod tekoucí vodou“ bez časů — konkrétní čísla jsou z příručky ČČK a jsou užitečný doplněk.',
  src: 'ČČK příručka, s. 63 — skripta časy neuvádějí',
  tags: ['cislo']
},
{
  id: 'pro09', c: 'prostredi',
  q: 'Jak se hodnotí rozsah popálenin u dětí?',
  o: [
    'Palmárním pravidlem — dlaň postiženého odpovídá zhruba 1 % povrchu těla',
    'Pouze pravidlem devíti, stejně jako u dospělých',
    'Podle hmotnosti dítěte',
    'Podle počtu puchýřů'
  ], a: [0],
  why: 'U dospělých se používá pravidlo devíti v procentech. U dětí jsou tělesné proporce jiné (větší hlava, kratší končetiny), proto se používá palmární pravidlo.',
  src: 'Skripta s. 30',
  img: 'devitka'
},
{
  id: 'pro10', c: 'prostredi', m: true,
  q: 'Pravidlo devíti u dospělého — která přiřazení jsou správná? (více odpovědí)',
  o: [
    'Hlava a krk — 9 %',
    'Jedna horní končetina — 9 %',
    'Přední strana trupu — 18 %',
    'Jedna dolní končetina — 18 %',
    'Krajina genitálu — 1 %',
    'Jedna horní končetina — 18 %'
  ], a: [0, 1, 2, 3, 4],
  why: 'Celkem: hlava a krk 9, každá horní končetina 9 (2 × 9 = 18), přední trup 18, zadní trup 18, každá dolní končetina 18 (2 × 18 = 36), genitál 1. Součet = 100 %.',
  src: 'Skripta s. 30',
  img: 'devitka',
  tags: ['cislo']
},
{
  id: 'pro11', c: 'prostredi',
  q: 'Jaké je telefonní číslo Toxikologického informačního střediska (TIS)?',
  o: ['224 919 293', '155', '112', '224 915 402'], a: [0],
  why: 'Na intoxikaci myslíme vždy při bezvědomí nejasného původu. Vstup jedu do těla: enterálně (ústy), parenterálně (žilní cestou), inhalačně (vdechnutím), transdermálně (přes kůži).',
  src: 'Skripta s. 30',
  tags: ['cislo']
},
{
  id: 'pro12', c: 'prostredi', m: true,
  q: 'Jaké jsou příčiny otrav podle skript? (více odpovědí)',
  o: [
    'Sebevražedné (95 %)',
    'Náhodné (oxid uhelnatý)',
    'Experimentování s drogami',
    'Syndrom týraného dítěte (sebepoškozování)',
    'Profesionální expozice v zaměstnání'
  ], a: [0, 1, 2, 3],
  why: 'Příznaky: velice důležitá anamnéza a o jakou látku se jedná, prázdná plata a krabičky od léků, lahve v okolí, poruchy chování a vědomí, nauzea, zvracení, průjem, bolest břicha, křečové stavy, dušnost a masivní otoky dýchacích cest.',
  src: 'Skripta s. 30'
},
{
  id: 'pro13', c: 'prostredi', m: true,
  q: 'Jaká jsou stadia otravy alkoholem? (více odpovědí, správné pořadí)',
  o: [
    '1. zčervenání, ztráta zábran, euforie',
    '2. poruchy rovnováhy, koordinace, zvýšený práh bolesti',
    '3. zmatenost, poruchy vědomí, zvracení s rizikem aspirace',
    '4. zástava dechu a oběhu — smrt',
    '5. kocovina'
  ], a: [0, 1, 2, 3],
  why: 'Otrava alkoholem je nejběžnější intoxikace u dětí i dospělých. První pomocí je vyvolat zvracení v časné fázi, hydratace, poloha na boku a kontrola fyziologických funkcí.',
  src: 'Skripta s. 30'
},
{
  id: 'pro14', c: 'prostredi',
  q: 'Proč je otrava oxidem uhelnatým tak nebezpečná?',
  o: [
    'CO je bezbarvý plyn bez zápachu a na hemoglobin se váže mnohokrát rychleji než kyslík',
    'CO leptá dýchací cesty',
    'CO je těžší než vzduch a hromadí se u země',
    'CO vyvolává okamžitou alergickou reakci'
  ], a: [0],
  why: 'Proto dochází k hypoxii. Nejčastěji v malých nevětraných prostorách při nedokonalém hoření (karmy). Příznaky: bolest hlavy, závratě, nauzea, kolaps a bezvědomí. První pomocí je dostat postiženého na čerstvý vzduch — vždy pozor na vlastní bezpečnost.',
  src: 'Skripta s. 30–31'
},
{
  id: 'pro15', c: 'prostredi',
  q: 'K otravám organofosfáty dochází na výletě nejčastěji jak?',
  o: [
    'Pitím vody v přírodě — studánky, potoky',
    'Dotykem postřikovaných rostlin',
    'Vdechnutím výfukových plynů',
    'Konzumací hub'
  ], a: [0],
  why: 'Jde o látky používané v zemědělství, průmyslu nebo bojové plyny (pesticidy, herbicidy, Sarin). Příznaky: průjem, zvracení, bolest břicha, křeče. První pomocí je vyvolat zvracení, poloha na boku při zvracení, kontrola FF — a vždy se poradit s operátorem ZZS nebo TIS.',
  src: 'Skripta s. 31'
},
{
  id: 'pro16', c: 'prostredi',
  q: 'Která houba je podle skript nejjedovatější v ČR?',
  o: ['Muchomůrka zelená', 'Muchomůrka červená', 'Hřib satan', 'Závojenka olovová'], a: [0],
  why: 'Prevencí je sbírat a jíst pouze houby, které dobře známe. Příznaky: nevolnost, zvracení, průjem, bolest břicha po požití hub. První pomocí je vyvolat zvracení a podat aktivní uhlí — a poradit se s ZZS nebo TIS.',
  src: 'Skripta s. 31'
},
{
  id: 'pro17', c: 'prostredi',
  q: 'Dítě spolklo neznámé léky. Co je nejdůležitější kromě první pomoci?',
  o: [
    'Zajistit plata či krabičky od léků a odebrat kvalitní anamnézu',
    'Změřit tělesnou teplotu',
    'Podat mléko',
    'Vyčkat 2 hodiny na příznaky'
  ], a: [0],
  why: 'Příznaky otrav léky a drogami jsou velice pestré a záleží na druhu a množství látky. Vždy se poraďte s operátorem ZZS nebo TIS. První pomocí je vyvolat zvracení u léků v rané fázi, poloha na boku při zvracení, kontrola fyziologických funkcí.',
  src: 'Skripta s. 31'
},

/* ───────────────── 10. TONUTÍ A VODNÍ ZÁCHRANA (s. 31–32) ───────────────── */
{
  id: 'vod01', c: 'voda', m: true,
  q: 'Která čísla o tonutí skripta uvádějí? (více odpovědí)',
  o: [
    'Druhá nejčastější příčina smrti u mladých lidí do 40 let věku',
    'Asi 40 % utonulých jsou děti',
    'Až 70 % nastává po požití alkoholu či omamných látek',
    'Asi 10 % utonulých jsou děti'
  ], a: [0, 1, 2],
  why: 'Kombinace čísel vysvětluje, proč vyhláška u vody trvá na dozoru osoby schopné poskytnout záchranu tonoucímu a proč se děti smějí koupat nejdříve hodinu po jídle.',
  src: 'Skripta s. 31',
  tags: ['cislo']
},
{
  id: 'vod02', c: 'voda',
  q: 'Jaký je rozdíl mezi suchým a vlhkým tonutím?',
  o: [
    'U vlhkého vnikne voda do plic, u suchého ne — nastává reflexní křečí hrtanu (laryngospasmus)',
    'U suchého vnikne voda do plic, u vlhkého ne',
    'Suché tonutí nastává jen v bazénu',
    'Rozdíl je jen v teplotě vody'
  ], a: [0],
  why: 'Vlhké (mokré) tonutí = aspirace vody do plic, postižený se v bezvědomí nadechne pod vodou. Suché tonutí = otok hlasivek a laryngospasmus, voda do plic nevnikne.',
  src: 'Skripta s. 31 · ČČK Praha 1, s. 20'
},
{
  id: 'vod03', c: 'voda', m: true,
  q: 'Jak se pozná aktivní a pasivní tonoucí? (více odpovědí)',
  o: [
    'Aktivní tonoucí bojuje o život, je cyanotický a dusí se',
    'Aktivní tonoucí pohybuje pažemi do stran, zkráceně dýchá a nemůže volat o pomoc',
    'Pasivní tonoucí nebojuje, nedělá žádné pohyby a nedýchá',
    'Aktivní tonoucí hlasitě volá o pomoc a mává',
    'Pasivní tonoucí klidně plave na zádech'
  ], a: [0, 1, 2],
  why: 'Nejnebezpečnější omyl je čekat, až tonoucí zavolá — tonoucí volat nedokáže, protože nemá dech. Rozeznávají se čtyři stavy: plavec (koordinované pohyby, reaguje na výzvu, dýchá pravidelně), vyčerpaný plavec (pomalé pohyby, šlapání vody), aktivní tonoucí a pasivní tonoucí.',
  src: 'Skripta s. 31 · ČČK Praha 1, s. 19'
},
{
  id: 'vod04', c: 'voda',
  q: 'Kolik dozorů má být u vody na 10 dětí?',
  o: ['2 dozory na 10 dětí', '1 dozor na 10 dětí', '1 dozor na 15 dětí', '3 dozory na 10 dětí'], a: [0],
  why: 'Dohled u vody může vykonávat jen osoba, která je schopna poskytnout záchranu tonoucímu. K zásadám bezpečnosti patří poučení dětí (smíš, nesmíš, zakázané zóny, pravidla), rozlišení plavec × neplavec a připravenost na krizové situace — házecí pomůcka.',
  src: 'ČČK Praha 1, s. 19 · § 8 odst. 4 vyhlášky 106/2001 Sb.',
  tags: ['cislo']
},
{
  id: 'vod05', c: 'voda', m: true,
  q: 'Jaké jsou stupně záchrany tonoucího od nejbezpečnějšího po nejnebezpečnější? (více odpovědí)',
  o: [
    '1. slovem ze břehu',
    '2. házecí pomůcka',
    '3. dosažením ze břehu',
    '4. pomocí plavidla',
    '5. dosažením z mělčiny',
    '6.–8. osobní zásah (oběť při vědomí / v bezvědomí s pomůckou / v bezvědomí bez pomůcek)',
    'Skočit do vody je vždy první volba'
  ], a: [0, 1, 2, 3, 4, 5],
  why: 'Nebezpečnost pro zachránce stoupá s číslem — vždy zvážit, jestli to zvládnu sám, nebo nechám záchranu na profesionálech. Osobní zásah bez pomůcek u tonoucího v bezvědomí je poslední a nejnebezpečnější možnost.',
  src: 'ČČK Praha 1, s. 20'
},
{
  id: 'vod06', c: 'voda', m: true,
  q: 'Co platí pro technickou první pomoc u tonutí? (více odpovědí)',
  o: [
    'Ideálně vzít s sebou předmět, kterého se topící může sám držet (kruh, bójka, lehátko)',
    'Nepřibližovat se k tonoucímu a hodit mu záchranný předmět',
    'Záchranu by měl provádět jen proškolený nebo velmi dobrý plavec (plavčík)',
    'Hrozí velké riziko vlastního utonutí',
    'Není-li k dispozici loďka či bójka, je lepší nepřibližovat se, dokud tonoucí není v bezvědomí',
    'Technickou první pomoc by měl provádět zdravotník'
  ], a: [0, 1, 2, 3, 4],
  why: 'Skripta výslovně uvádějí: technickou první pomoc by NEMĚL provádět zdravotník — ten je potřeba na břehu, aby mohl poskytnout zdravotnickou první pomoc. K postiženému v bezvědomí se přibližujeme zezadu, uchopíme ho za ruku nebo vlasy a táhneme ke břehu.',
  src: 'Skripta s. 32'
},
{
  id: 'vod07', c: 'voda',
  q: 'Kolika vdechy se zahajuje resuscitace tonoucího?',
  o: ['Pěti vdechy', 'Dvěma vdechy', 'Třiceti stlačeními bez vdechů', 'Deseti vdechy'], a: [0],
  why: 'U tonoucího je příčinou zástavy nedostatek kyslíku, ne primárně selhání srdce — proto se začíná dýcháním. Stejných pět úvodních vdechů platí i u dětí. Při hypotermii se šance na úspěšnou resuscitaci zvyšuje.',
  src: 'Skripta s. 32'
},
{
  id: 'vod08', c: 'voda', m: true,
  q: 'Co platí při resuscitaci a ošetření tonoucího? (více odpovědí)',
  o: [
    'Vodu z plic nevyléváme',
    'Zahájit umělé dýchání co nejrychleji, případně už během transportu na břeh',
    'KPR nikdy nevzdávat — utonulí ve studené vodě mají velkou šanci na přežití',
    'Tonoucího, který byl delší dobu pod vodou a rozdýchal se, je nutné dopravit na lékařské ošetření',
    'Nejprve je nutné vylít vodu z plic převrácením postiženého'
  ], a: [0, 1, 2, 3],
  why: 'Důvodem k lékařskému ošetření i po rozdýchání je riziko druhotného tonutí — otoku plic, který se rozvine s odstupem hodin. Skripta tuto informaci neuvádějí, ale je v obou materiálech ČČK a u dětí je zásadní.',
  src: 'ČČK Praha 1, s. 20 · ČČK příručka',
  alt: {
    t: 'Doplněk nad rámec skript',
    x: 'Druhotné tonutí ve skriptech Zdravotníci není. Prakticky to znamená: dítě, které se topilo a po vytažení se rozdýchalo, nezůstává na táboře „pod dohledem“ — posílá se k lékaři.'
  }
},
{
  id: 'vod09', c: 'voda', m: true,
  q: 'Které body obsahuje desatero bezpečného pobytu u vody? (více odpovědí)',
  o: [
    'Nechoď se koupat sám, nepodceňuj nebezpečí vody',
    'Neplav a neskákej do vody v neznámých místech',
    'Plav ve vyznačeném prostoru',
    'Neplav, jsi-li rozpálený nebo unavený',
    'Neplav hned po jídle, nech si alespoň hodinu odstup',
    'Na plavidla nepatří děti bez řádně oblečených a upevněných záchranných vest',
    'Skákej vždy po hlavě, je to bezpečnější'
  ], a: [0, 1, 2, 3, 4, 5],
  why: 'Skoky do neznámé vody jsou typickou příčinou poranění krční páteře — skripta je zmiňují i v zásadách prevence úrazů jako příklad „nenechat se strhnout vlastní ješitností“.',
  src: 'ČČK Praha 1, s. 19'
},

/* ───────────────── 11. NEODKLADNÁ RESUSCITACE (s. 34–36) ───────────────── */
{
  id: 'kpr01', c: 'kpr', m: true,
  q: 'Co znamenají písmena ABCD u základní KPR? (více odpovědí)',
  o: [
    'A — Airway, průchodnost dýchacích cest',
    'B — Breathing, umělé dýchání',
    'C — Circulation, komprese hrudníku',
    'D — Defibrilation, defibrilace AED',
    'D — Drugs, podání léků'
  ], a: [0, 1, 2, 3],
  why: 'Drugs and fluids patří k ROZŠÍŘENÉ KPR (DEFGHI): Drugs and fluids — podání léků, ECG — monitorace, Fibrillation treatment — defibrilace, Gauging — odstranění příčiny, Human mentation — stabilizace fyziologických funkcí, Intenzive care — intenzivní péče a transport.',
  src: 'Skripta s. 34'
},
{
  id: 'kpr02', c: 'kpr',
  q: 'Jak skripta definují neodkladnou resuscitaci?',
  o: [
    'Soubor jednoduchých naučených opatření vedoucích k obnově cirkulace okysličené krve',
    'Soubor opatření k obnovení dýchání',
    'Lékařský výkon prováděný výhradně záchrannou službou',
    'Postup k udržení tělesné teploty postiženého'
  ], a: [0],
  why: 'Klíčové je spojení „cirkulace OKYSLIČENÉ krve“ — proto samotné stlačování hrudníku bez dýchání je u dětí a u tonoucích nedostatečné.',
  src: 'Skripta s. 34'
},
{
  id: 'kpr03', c: 'kpr', m: true,
  q: 'Co platí o použití AED? (více odpovědí)',
  o: [
    'Přístroj vás povede hlasovými nebo psanými pokyny',
    'Sám vyhodnotí defibrilovatelný rytmus (VF, VT)',
    'Po 3–5 minutách resuscitaci přeruší a vyhodnotí rytmus',
    'Při hodnocení a při výboji se postiženého nesmí nikdo dotýkat',
    'AED smí použít pouze lékař',
    'AED nahrazuje stlačování hrudníku'
  ], a: [0, 1, 2, 3],
  why: 'ČČK doporučuje AED u osob starších 8 let; u mladších dětí je vhodné použít AED s dětskými elektrodami, v nouzi lze užít i běžný. KPR se provádí až do připravení přístroje (nalepení elektrod a zapnutí).',
  src: 'Skripta s. 34 · ČČK příručka, s. 53'
},
{
  id: 'kpr04', c: 'kpr', m: true,
  q: 'Jaký je postup vyšetření a záklonu hlavy? (více odpovědí)',
  o: [
    'Oslovení',
    'Bolestivý podnět',
    'Zavolej si o pomoc z okolí',
    'Záklon hlavy',
    'Dýchá a probouzí se? → poloha na boku a kontrola životních funkcí',
    'Nedýchá nebo má lapavé dýchání (gasping) → volej 155 a zahaj resuscitaci',
    'Změř krevní tlak'
  ], a: [0, 1, 2, 3, 4, 5],
  why: 'Lapavé dýchání (gasping) NENÍ dýchání — je to známka srdeční zástavy a důvod okamžitě zahájit KPR. Je to jedna z nejčastějších chyb laiků.',
  src: 'Skripta s. 34'
},
{
  id: 'kpr05', c: 'kpr',
  q: 'Jaký je poměr stlačení a vdechů u dospělého?',
  o: ['30 : 2', '15 : 2', '3 : 1', '5 : 1'], a: [0],
  why: 'U dítěte 15 : 2, u novorozence 3 : 1. Poměr 30 : 2 platí u dospělého a u dítěte tehdy, resuscituje-li ho laik, který není školen pro poskytování pomoci dětem.',
  src: 'Skripta s. 35',
  tags: ['cislo']
},
{
  id: 'kpr06', c: 'kpr',
  q: 'Jak hluboko se stlačuje hrudník dospělého?',
  o: ['Minimálně o 5–6 cm', 'O 2–3 cm', 'O 1/3 hrudníku', 'O 8–10 cm'], a: [0],
  why: 'U dítěte i novorozence se stlačuje o 1/3 hrudníku. Frekvence je u obou 100–120 stlačení za minutu — skripta si ji pomáhají zapamatovat rytmem „teď, už, haf, tuc“.',
  src: 'Skripta s. 35',
  tags: ['cislo']
},
{
  id: 'kpr07', c: 'kpr',
  q: 'Jakou frekvenci stlačení udržujete podle skript?',
  o: ['100–120 stlačení za minutu', '60–80 stlačení za minutu', '140–160 stlačení za minutu', '80–100 stlačení za minutu'],
  a: [0],
  why: 'Skripta uvádějí 100–120/min plošně pro dospělého, dítě i novorozence.',
  src: 'Skripta s. 35',
  tags: ['cislo'],
  alt: {
    t: 'Upřesnění v příručce ČČK',
    x: 'ČČK rozlišuje podle věku: u novorozence (0–1 měsíc) minimálně 120 stlačení za minutu, u ostatních věkových kategorií minimálně 100 za minutu. Danina skripta rozdíl nedělají. U zkoušky platí jejich 100–120.'
  }
},
{
  id: 'kpr08', c: 'kpr', m: true,
  q: 'Jaký je postup KPR u dítěte podle skript? (více odpovědí)',
  o: [
    'Zavolej si o pomoc kohokoliv v okolí, ať nejsi sám',
    'Otoč dítě šetrně na záda, zakloň hlavu a zkontroluj dutinu ústní',
    'Volej 155, dones AED, je-li v dosahu',
    'Zakloň hlavu, zacpi nos a 5× vdechni, až se zvedne hrudník',
    'Prudce stlač hrudník o 1/3 hrudníku dítěte, poměr 15 : 2',
    'Poměr 30 : 2 jako u dospělého'
  ], a: [0, 1, 2, 3, 4],
  why: 'Ruka se pokládá na střed hrudníku mezi prsní bradavky. Pět úvodních vdechů je u dětí zásadní — příčinou zástavy u dítěte bývá nedostatek kyslíku, ne selhání srdce.',
  src: 'Skripta s. 35'
},
{
  id: 'kpr09', c: 'kpr',
  q: 'Kdy podle skript voláte 155 u resuscitovaného dítěte?',
  o: [
    'Hned po zjištění, že nedýchá — před zahájením vdechů',
    'Až po jedné minutě resuscitace',
    'Až po pěti minutách resuscitace',
    'Až když se dítě neprobere'
  ], a: [0],
  why: 'Skripta řadí „volej 155, dones AED“ do postupu ještě před pěti úvodními vdechy, a to stejně u dospělého i u dítěte — nerozlišují podle věku.',
  src: 'Skripta s. 35',
  alt: {
    t: 'Novější postup ČČK (2017, dle ERC)',
    x: 'ČČK má tabulku podle věku: do 8 let voláš pomoc až PO 1 MINUTĚ KPR, nad 8 let PŘED zahájením KPR. Výjimka: u otravy léky, u zástavy při úrazu elektrickým proudem a u tonutí voláš i nad 8 let až po 1 minutě KPR. Logika je stejná jako u pěti úvodních vdechů — u dítěte je nejdůležitější rychle dodat kyslík, ne rychle přivolat defibrilátor. Jste-li s dítětem sám, platí tohle; je-li u toho někdo další, volá on hned.'
  }
},
{
  id: 'kpr10', c: 'kpr', m: true,
  q: 'Co je specifické pro KPR novorozence (dítě do 1 měsíce po porodu)? (více odpovědí)',
  o: [
    'Nezaklánět hlavu, držet ji v neutrální poloze — hrozí poranění páteře',
    'Svými ústy obejmout pusu i nos a 5× vdechnout obsah svých úst',
    'Položit dva prsty na střed hrudníku mezi prsní bradavky',
    'Prudce stlačit hrudník o 1/3, poměr 3 : 1',
    'Zaklonit hlavu stejně jako u dospělého',
    'Poměr 15 : 2'
  ], a: [0, 1, 2, 3],
  why: 'Vdechuje se pouze obsah úst, ne plný nádech — plíce novorozence mají zlomek objemu dospělého a přetlak by je poškodil.',
  src: 'Skripta s. 35'
},
{
  id: 'kpr11', c: 'kpr',
  q: 'Kam se u kojence a novorozence přikládají prsty ke stlačení hrudníku?',
  o: [
    'Na střed hrudníku mezi prsní bradavky',
    'Na dolní třetinu hrudní kosti pod mečovitým výběžkem',
    'Na levou stranu hrudníku nad srdcem',
    'Na horní třetinu hrudní kosti'
  ], a: [0],
  why: 'Skripta uvádějí u dospělého, dítěte i novorozence shodně střed hrudníku mezi prsními bradavkami — u novorozence dvěma prsty.',
  src: 'Skripta s. 34–35',
  alt: {
    t: 'Upřesnění v příručce ČČK',
    x: 'ČČK rozlišuje podle věku: u dítěte do 1 roku (0–1 měsíc i 1 měsíc – 1 rok) POD středem spojnice bradavek, u dítěte od 1 roku výše VE STŘEDU spojnice bradavek. Důvod je anatomický — u kojence leží srdce relativně výš, takže stlačování přesně ve středu spojnice by mířilo nad srdce. U zkoušky platí verze ze skript.'
  }
},
{
  id: 'kpr12', c: 'kpr', m: true,
  q: 'Jak dlouho se resuscituje? (více odpovědí)',
  o: [
    'Do obnovení životních funkcí — postižený se brání',
    'Do příjezdu záchranné služby',
    'Do úplného vyčerpání zachránce',
    'Maximálně 20 minut',
    'Do uplynutí 30 minut od zástavy'
  ], a: [0, 1, 2],
  why: 'Žádný časový limit neexistuje. U podchlazených a utonulých ve studené vodě se resuscituje obzvlášť dlouho — hypotermie chrání mozek a šance na přežití je vyšší.',
  src: 'Skripta s. 35'
},
{
  id: 'kpr13', c: 'kpr', m: true,
  q: 'Kdy se KPR NEZAHAJUJE? (více odpovědí)',
  o: [
    'Je-li zranění neslučitelné se životem (amputace hlavy)',
    'Jeví-li tělo jasné známky smrti (tělo v rozkladu)',
    'Došlo-li by k našemu zranění (výbuch, požár)',
    'Je-li postižený starší 80 let',
    'Trvala-li zástava déle než 10 minut'
  ], a: [0, 1, 2],
  why: 'Skripta uvádějí jen tyto tři důvody — jsou to jediné případy. V nejistotě se resuscituje vždy.',
  src: 'Skripta s. 35'
},
{
  id: 'kpr14', c: 'kpr', m: true,
  q: 'Jaké chyby při KPR skripta vyjmenovávají? (více odpovědí)',
  o: [
    'Nekvalitní dýchání, lapavé dechy (gasping)',
    'Přerušení kompresí hrudníku na déle než 10 sekund',
    'Nedostatečná nebo příliš velká hloubka stlačení',
    'Nesprávná frekvence stlačení',
    'Nepřivolání si pomoci (155)',
    'Nezaklonit hlavu',
    'Nezahájení KPR',
    'Stlačování hrudníku na pevné podložce'
  ], a: [0, 1, 2, 3, 4, 5, 6],
  why: 'Všech sedm bodů je ze skript. Nejzávažnější jsou poslední dva — nezahájení KPR a nezaklonění hlavy, protože tím se resuscitace míjí účinkem úplně.',
  src: 'Skripta s. 36'
},
{
  id: 'kpr15', c: 'kpr',
  q: 'Kolik stlačení hrudníku nebo vdechů zahajuje KPR podle ČČK u dospělého od puberty?',
  o: [
    '30 stlačení',
    '5 vdechů',
    '2 vdechy',
    '15 stlačení'
  ], a: [0],
  why: 'ČČK: u všech dětí od narození do puberty se zahajuje 5 vdechy, od puberty výše 30 stlačeními. U tonutí se 5 úvodními vdechy zahajuje v každém věku.',
  src: 'ČČK příručka, s. 52 · skripta s. 32'
},
{
  id: 'kpr16', c: 'kpr',
  q: 'Jaký poměr má podle ČČK použít zdravotník zotavovacích akcí při resuscitaci dítěte?',
  o: [
    '15 : 2 bez ohledu na počet zachránců',
    '30 : 2 vždy',
    '15 : 2 jen je-li sám',
    '3 : 1 do 8 let'
  ], a: [0],
  why: 'ČČK to uvádí výslovně: „Je-li zachránce školen pro poskytování neodkladné péče dětem (což je i zdravotník zotavovacích akcí), bude při resuscitaci provádět 15 stlačení na 2 vdechy, a to bez ohledu na počet zachránců.“ Poměr 30 : 2 je ústupek pro laiky, kteří umějí jen resuscitaci dospělého.',
  src: 'ČČK příručka, s. 52'
},
{
  id: 'kpr17', c: 'kpr',
  q: 'Před zahájením umělého dýchání zjistíte, že má dítě v ústech rovnátka. Co s nimi?',
  o: [
    'Odstranit volné zubní náhrady a rovnátka při revizi dutiny ústní',
    'Nechat je na místě, nevadí',
    'Pevná rovnátka vylomit',
    'Dýchat nosem místo ústy'
  ], a: [0],
  why: 'Uvolnění dýchacích cest začíná revizí dutiny ústní: dvěma prsty s gázou nebo kapesníkem odstraníme viditelná cizí tělesa a hrubé nečistoty — to je důležité zejména u tonoucího — a volné zubní náhrady či rovnátka.',
  src: 'ČČK příručka, s. 47'
},
{
  id: 'kpr18', c: 'kpr',
  q: 'Proč se u resuscitace používá resuscitační rouška?',
  o: [
    'Kvůli ochraně zachránce při styku s tělními tekutinami postiženého',
    'Aby se zvýšil objem vdechovaného vzduchu',
    'Aby se udržela tělesná teplota postiženého',
    'Je to jen estetické opatření'
  ], a: [0],
  why: 'Při všech úkonech, kdy zachránce přichází do styku s tělními tekutinami (krev, sliny), se používají ochranné rukavice a při umělém dýchání resuscitační rouška nebo maska. ČČK dodává, že u dětí ve většině případů není tak intenzivní ochrany třeba — riziko infekce je velmi nízké.',
  src: 'ČČK příručka, s. 53 · příloha č. 4 vyhlášky'
}

);
