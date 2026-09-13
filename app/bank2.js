/* Banka otázek 2/3 — Základy PP, Rány a krvácení, Zlomeniny a úrazy
   Pokrývá skripta s. 11–22 a 32–33. */
window.QB = window.QB || [];
window.QB.push(

/* ───────────────── 5. ZÁKLADY PRVNÍ POMOCI (s. 11–13) ───────────────── */
{
  id: 'zak_pp01', c: 'zaklady',
  q: 'Jak skripta definují první pomoc?',
  o: [
    'Jednoduchá naučená opatření a výkony k záchraně života a neprohloubení již vzniklého úrazu nebo akutního stavu',
    'Odborný lékařský výkon prováděný na místě události',
    'Soubor opatření, která provádí výhradně zdravotnická záchranná služba',
    'Transport zraněného do nemocnice'
  ], a: [0],
  why: 'Klíčové slovo je NAUČENÁ — první pomoc není improvizace ani intuice, je to nacvičený postup. Druhá polovina definice je stejně důležitá: nejen zachránit život, ale ani stav nezhoršit.',
  src: 'Skripta s. 11'
},
{
  id: 'zak_pp02', c: 'zaklady',
  q: 'Kdo je povinen poskytnout první pomoc?',
  o: ['Každý občan ČR', 'Pouze zdravotník', 'Pouze osoba, která úraz způsobila', 'Pouze osoba starší 18 let'], a: [0],
  why: 'Je to povinnost morální i zákonná. Upravuje ji vyhláška č. 55/2011 Sb. a zákon č. 40/2009 Sb., trestní zákoník, § 150.',
  src: 'Skripta s. 11'
},
{
  id: 'zak_pp03', c: 'zaklady',
  q: 'Jaké jsou dva druhy první pomoci?',
  o: [
    'Zdravotnická a technická',
    'Laická a profesionální',
    'Základní a rozšířená',
    'Přednemocniční a nemocniční'
  ], a: [0],
  why: 'Zdravotnická první pomoc se dále dělí na základní (laickou) a rozšířenou (ZZS). Technickou první pomoc zajišťují nejčastěji hasiči.',
  src: 'Skripta s. 11'
},
{
  id: 'zak_pp04', c: 'zaklady',
  q: 'Co patří pod technickou první pomoc?',
  o: [
    'Vyproštění a vystřihání osob při dopravní nehodě, ochranné masky v zamořených prostorách',
    'Podání léků a zástava krvácení',
    'Resuscitace a defibrilace',
    'Třídění raněných podle závažnosti'
  ], a: [0],
  why: 'Technickou první pomoc zajišťují nejčastěji hasiči (HZS), kteří na ni mají výcvik a vybavení. Zdravotník ji provádět nemá — to platí i u záchrany tonoucího.',
  src: 'Skripta s. 11 a 32'
},
{
  id: 'zak_pp05', c: 'zaklady', m: true,
  q: 'Co spadá pod rozšířenou první pomoc? (více odpovědí)',
  o: [
    'První lékařská pomoc — zdravotnická záchranná služba',
    'Odborná lékařská pomoc — interna, chirurgie, gynekologie',
    'Specializovaná první pomoc — kardiocentrum, traumacentrum, iktové centrum',
    'Laická pomoc školeného zachránce',
    'Vyproštění osoby z havarovaného vozidla'
  ], a: [0, 1, 2],
  why: 'Základní první pomoc je laická (neškolený i školený zachránce), poskytovaná na místě události s minimálním vybavením (lékárnička) — a bývá často rozhodující. Jako zdravotník ZZA poskytuje Dana právě tuto základní první pomoc.',
  src: 'Skripta s. 11'
},
{
  id: 'zak_pp06', c: 'zaklady', m: true,
  q: 'Přiřaďte správně čísla integrovaného záchranného systému. Která tvrzení platí? (více odpovědí)',
  o: [
    '150 — Hasičský záchranný sbor',
    '155 — Zdravotnická záchranná služba',
    '158 — Policie ČR',
    '156 — Městská policie',
    '112 — Evropské tísňové číslo',
    '155 — Hasiči'
  ], a: [0, 1, 2, 3, 4],
  why: 'K dispozici je i aplikace Záchranka, která operátorovi předá polohu. Číslo 112 je vhodné hlavně tam, kde je jazyková bariéra — u zahraničních účastníků.',
  src: 'Skripta s. 11',
  note: '112 = jazyková bariéra (cizinci). Iktové centrum pro Prahu: Vinohrady.'
},
{
  id: 'zak_pp07', c: 'zaklady',
  q: 'Co znamená zkratka TANR?',
  o: [
    'Telefonicky asistovaná neodkladná resuscitace',
    'Telefonicky asistovaná neodkladná rehabilitace',
    'Traumatologický a neurologický registr',
    'Transport a neodkladná resuscitace'
  ], a: [0],
  why: 'TAPP je telefonicky asistovaná první pomoc, TANR telefonicky asistovaná neodkladná resuscitace. Dispečerka vás povede — proto nikdy nezavěšujeme jako první.',
  src: 'Skripta s. 12',
  note: 'Lapavé dechy hlásit jako lapavé — dispečerka je vyhodnotí jako srdeční zástavu.'
},
{
  id: 'zak_pp08', c: 'zaklady', m: true,
  q: 'Co platí při hovoru s dispečinkem záchranné služby? (více odpovědí)',
  o: [
    'Předávat jasné a stručné informace',
    'Nikdy nezavěšovat jako první',
    'Nejdůležitější je zachovat klid a rozvahu',
    'Zavěsit hned po nahlášení adresy, aby linka byla volná',
    'Trvat na tom, aby přijel lékař'
  ], a: [0, 1, 2],
  why: 'Dispečerka potřebuje doplňující informace a povede vás při první pomoci. Zavěšení přerušuje pomoc, kterou byste jinak dostali po celou dobu do příjezdu posádky.',
  src: 'Skripta s. 12'
},
{
  id: 'zak_pp09', c: 'zaklady', m: true,
  q: 'Jaký je postup na místě události podle skript? (více odpovědí — sedm bodů)',
  o: [
    'Co se stalo a kde?',
    'Nejsem v nebezpečí?',
    'Co budu dělat?',
    'Koho mám k dispozici?',
    'Co mám k dispozici?',
    'Kdo za to může?'
  ], a: [0, 1, 2, 3, 4],
  why: 'Sedmibodový postup je: co se stalo a kde → nejsem v nebezpečí → co budu dělat → koho mám k dispozici → co mám k dispozici → zajištění místa → přivolání si pomoci. Hledání viníka do první pomoci nepatří.',
  src: 'Skripta s. 12'
},
{
  id: 'zak_pp10', c: 'zaklady', m: true,
  q: 'Co patří do prvotního vyšetření postiženého a zajištění životních funkcí? (více odpovědí)',
  o: [
    'Stav vědomí',
    'Dýchání',
    'Krevní oběh',
    'Masivní krvácení',
    'Zjištění anamnézy',
    'Celkové vyšetření od hlavy k patě'
  ], a: [0, 1, 2, 3],
  why: 'Anamnéza, vyšetření od hlavy k patě, ošetření poranění, mechanismus úrazu a polohování s protišokovými opatřeními patří až do NÁSLEDNÉHO vyšetření — tedy po zajištění životních funkcí.',
  src: 'Skripta s. 12'
},
{
  id: 'zak_pp11', c: 'zaklady',
  q: 'Co znamenají zkratky AA, FA, OA, NO v anamnéze?',
  o: [
    'Alergologická, farmakologická, osobní a nynější onemocnění',
    'Akutní, familiární, ortopedická a neurologická anamnéza',
    'Anamnéza aktuální, fyzikální, objektivní a nepřímá',
    'Alergie, fyzioterapie, operace, nemoci'
  ], a: [0],
  why: 'U dítěte na táboře je nejcennější AA (alergie) a FA (co dlouhodobě užívá) — obojí by mělo být v posudku a v informacích od rodičů.',
  src: 'Skripta s. 12'
},
{
  id: 'zak_pp12', c: 'zaklady', m: true,
  q: 'Které vyšetřovací metody skripta uvádějí pod „čtyři P“? (více odpovědí)',
  o: [
    'Pohled (inspekce)',
    'Poslech (auskultace)',
    'Pohmat (palpace)',
    'Poklep (perkuse)',
    'Punkce',
    'Průkaz'
  ], a: [0, 1, 2, 3],
  why: 'Dále se měří krevní tlak (TK), glykemie (GLY) a tělesná teplota (TT). Mezi další vyšetřovací metody patří laboratorní vyšetření, RTG, CT, MR a sonografie — ty už provádí zdravotnické zařízení.',
  src: 'Skripta s. 12–13'
},
{
  id: 'zak_pp13', c: 'zaklady',
  q: 'Co je základním předpokladem poskytnutí první pomoci?',
  o: [
    'Vlastní bezpečnost zachránce',
    'Kompletní lékárnička',
    'Souhlas postiženého',
    'Přítomnost druhého zachránce'
  ], a: [0],
  why: 'Pokud se zachránci něco stane, nikdo mu nepomůže, protože o něm nikdo neví. Zásady: zachovej klid a rozvahu, přivolej si pomoc, používej ochranné pomůcky, nepřeceňuj své síly.',
  src: 'Skripta s. 13'
},
{
  id: 'zak_pp14', c: 'zaklady', m: true,
  q: 'Které zásady prevence úrazů skripta uvádějí? (více odpovědí)',
  o: [
    'Vykonávat pouze činnosti, které dobře znám',
    'Používat kvalitní a k tomu určené přístroje či zařízení',
    'Používat ochranné pomůcky',
    'Respektovat upozornění a návody',
    'Nepřeceňovat se a nepokoušet se o výkony, na které nejsem připraven',
    'Nepředvádět se a nenechat se strhnout vlastní ješitností',
    'Nechat děti zkoušet neznámé činnosti bez dozoru, aby se naučily samostatnosti'
  ], a: [0, 1, 2, 3, 4, 5],
  why: 'Skripta u každé zásady uvádějí typický příklad: amatérské úpravy plynových zařízení, žebříky, sváření, chemické saponáty, sport a skoky do vody. Na dětské akci je nejrizikovější právě poslední bod.',
  src: 'Skripta s. 13'
},
{
  id: 'zak_pp15', c: 'zaklady',
  q: 'Kdy se používá třídění zraněných (triage)?',
  o: [
    'Při hromadném postižení osob — výbuchy, dopravní nehody',
    'U každého zraněného, i když je sám',
    'Pouze v nemocnici na urgentním příjmu',
    'Při epidemii infekčního onemocnění'
  ], a: [0],
  why: 'Postup: celkové zhodnocení situace (co se stalo, kde, kolik osob, proč) → neprodleně kontaktovat záchrannou službu a spolupracovat s operátorem → zahájit vlastní třídění osob na místě podle pravidla START.',
  src: 'Skripta s. 13'
},
{
  id: 'zak_pp16', c: 'zaklady', m: true,
  q: 'Které kategorie rozlišuje pravidlo START? (více odpovědí)',
  o: [
    'Stavy neodkladné pomoci — poruchy životních funkcí, bezvědomí, masivní krvácení',
    'Stavy odložitelné pomoci — například zlomeniny',
    'Stavy lehké — například oděrky',
    'Stavy netransportovatelné — zranění neslučitelná se životem',
    'Stavy simulované'
  ], a: [0, 1, 2, 3],
  why: 'Cílem STARTu je zachránit co nejvíce osob v co nejkratší možné době. Proto se začíná u stavů neodkladné pomoci, ne u nejhlasitěji volajících ani u zranění neslučitelných se životem.',
  src: 'Skripta s. 13'
},

/* ───────────────── 6. RÁNY, KRVÁCENÍ, OBVAZY (s. 13–18) ───────────────── */
{
  id: 'ran01', c: 'rany',
  q: 'Jak se dělí rány podle základního dělení?',
  o: [
    'Vnější, které vidíme, a vnitřní, které nevidíme (tělní dutiny)',
    'Povrchové a hluboké',
    'Čisté a znečištěné',
    'Akutní a chronické'
  ], a: [0],
  why: 'Stejné základní dělení platí i pro krvácení: vnější vidíme, vnitřní nevidíme. U vnitřního krvácení je jedinou pomocí neprodleně zavolat ZZS a upozornit na podezření.',
  src: 'Skripta s. 13 a 15'
},
{
  id: 'ran02', c: 'rany', m: true,
  q: 'Jaké typy ran rozlišují skripta podle vzniku? (více odpovědí)',
  o: [
    'Řezné — ostrým předmětem (nůž, ostrý plech)',
    'Bodné — bodné poranění ostrým předmětem (nůž, vidle)',
    'Sečné — ostrým nebo tupým předmětem (sekera, meč)',
    'Střelné — střelné zbraně',
    'Tržně zhmožděné — velká traumata jako pády, výbuchy a dopravní nehody',
    'Termické — způsobené horkem'
  ], a: [0, 1, 2, 3, 4],
  why: 'Popáleniny skripta řadí samostatně mezi úrazy teplem, ne mezi rány podle vzniku.',
  src: 'Skripta s. 13–14'
},
{
  id: 'ran03', c: 'rany', m: true,
  q: 'Z čeho se skládá základní ošetření rány (základní toaleta)? (více odpovědí)',
  o: [
    'Oplach vodou',
    'Dezinfekce',
    'Sterilní krytí',
    'Sešití (sutura)',
    'Aplikace masti do rány',
    'Zásyp práškovým antibiotikem'
  ], a: [0, 1, 2, 3],
  why: 'Do ran se neaplikují žádné masti, léky ani zásypy. U znečištěných ran, nejčastěji odřenin, je nutné ránu důkladně vyčistit od štěrku a kamínků.',
  src: 'Skripta s. 14 a 16'
},
{
  id: 'ran04', c: 'rany',
  q: 'V ráně je zabodnutý střep. Co uděláte?',
  o: [
    'Ránu jemně kryji a předmět fixuji — zaklíněná tělesa nikdy nevyjímáme',
    'Střep opatrně vytáhnu pinzetou a ránu vydezinfikuji',
    'Vytáhnu ho jen tehdy, když nekrvácí',
    'Zatlačím ho hlouběji, aby nevypadl při transportu'
  ], a: [0],
  why: 'Ze všech typů ran vyjímáme pouze tělesa volně ležící. Zaklíněné těleso může tamponovat poraněnou cévu — jeho vytažením by se spustilo masivní krvácení.',
  src: 'Skripta s. 14 a 16'
},
{
  id: 'ran05', c: 'rany', m: true,
  q: 'Jak se postupuje při amputaci podle skript? (více odpovědí)',
  o: [
    'Zaškrtit nad ránou (nad kloubem, je-li rána níže)',
    'Přiložit tlakový obvaz',
    'Amputát sterilně krýt, uložit do zvlhčené sterilní gázy a pytlíku',
    'První pytlík vložit do druhého s vlažnou vodou',
    'Amputát vložit přímo do ledu, aby se zpomalil rozklad',
    'Amputát omýt dezinfekcí'
  ], a: [0, 1, 2, 3],
  why: 'Amputát se nikdy nedává přímo do ledu ani se nedezinfikuje. Vždy se odesílá spolu se zraněným.',
  src: 'Skripta s. 14',
  alt: {
    t: 'Odlišný postup v příručce ČČK',
    x: 'Příručka ČČK (2017) uvádí: amputát sterilně zabalit, vložit do plastového sáčku a ten pak do nádoby nebo dalšího obalu s vodou A LEDEM. V žádném případě neukládáme amputát přímo do vody nebo k ledu. Rozdíl je v teplotě vnějšího obalu — skripta říkají vlažná voda, ČČK voda s ledem. Společné oběma je, že amputát nikdy nesmí přijít do přímého kontaktu s vodou ani s ledem.'
  }
},
{
  id: 'ran06', c: 'rany',
  q: 'Co je skalpace a jak se ošetřuje?',
  o: [
    'Odtržení kůže a vlasů, nejčastěji u rotačních strojů či kolotočů — oplach a sterilní krytí',
    'Hluboká řezná rána na hlavě — sešití na místě',
    'Zlomenina klenby lební — fixace hlavy',
    'Popálení vlasové části hlavy — chlazení'
  ], a: [0],
  why: 'Skalpace patří spolu s amputací mezi ztrátová poranění — oddělenou část těla vždy uchováme a odešleme se zraněným.',
  src: 'Skripta s. 14'
},
{
  id: 'ran07', c: 'rany', m: true,
  q: 'Jak se ošetřuje bodnutí hmyzem? (více odpovědí)',
  o: [
    'Odstranit žihadlo',
    'Potírání chladivými gely (Fenistil)',
    'Chladit místo vpichu a sledovat projevy zánětu',
    'Pozor na prudkou alergickou reakci (včela, vosa)',
    'Místo vpichu prohřát',
    'Vysát jed ústy'
  ], a: [0, 1, 2, 3],
  why: 'Nejnebezpečnější je bodnutí do dutiny ústní nebo krku — hrozí otok dýchacích cest. Tam se podává chlad a cucání ledu či zmrzliny a volá se ZZS.',
  src: 'Skripta s. 14 a 25'
},
{
  id: 'ran08', c: 'rany', m: true,
  q: 'Jak se postupuje při uštknutí hadem? (více odpovědí)',
  o: [
    'Oplach a dezinfekce',
    'Naprostý tělesný klid',
    'Sterilní krytí a chlazení',
    'Lehká komprese elastickým obvazem nad kousnutím',
    'Vysát jed z rány',
    'Zaškrtit končetinu turniketem'
  ], a: [0, 1, 2, 3],
  why: 'Zrychlení krevního oběhu je nežádoucí, proto klid. Odborné ošetření je nezbytné kvůli podání séra. U exotického hada je nutné zjistit přesný druh živočicha.',
  src: 'Skripta s. 14 · ČČK příručka'
},
{
  id: 'ran09', c: 'rany', m: true,
  q: 'Jak se správně odstraňuje klíště? (více odpovědí)',
  o: [
    'Vyviklat, vytočit a vytrhnout pinzetou či rukou v místě přisátí',
    'Po odstranění místo vydezinfikovat',
    'Udělat záznam do zdravotnického deníku',
    'Sledovat místo po odstranění',
    'Klíště předem natřít olejem nebo krémem',
    'Klíště vytáhnout kolmo jedním rychlým tahem bez otáčení'
  ], a: [0, 1, 2, 3],
  why: 'Natírání olejem nebo krémem klíště dusí a zvyšuje riziko, že vyvrhne obsah do rány. Záznam a následné sledování jsou důležité — po akci se rodičům oznamuje možný kontakt dítěte s infekcí, klíště se uvádí výslovně.',
  src: 'Skripta s. 14 a 5 · ČČK Praha 1, s. 10'
},
{
  id: 'ran10', c: 'rany', m: true,
  q: 'Na co nezapomenout u každé ošetřené rány? (více odpovědí)',
  o: [
    'Každou ránu opakovaně kontrolovat',
    'Pozor na příznaky infekce — zarudnutí, teplota',
    'Pravidelné převazy rány dle ordinace',
    'Ránu nechat bez krytí, aby se rychleji zahojila',
    'Okamžitě nasadit antibiotika'
  ], a: [0, 1, 2],
  why: 'Antibiotika nasazuje lékař. Zdravotník sleduje a při známkách infekce odesílá k lékaři — a vše zapisuje do deníku.',
  src: 'Skripta s. 14'
},
{
  id: 'ran11', c: 'rany',
  q: 'Jak vypadá tepenné krvácení?',
  o: [
    'Světlá krev vystřikující z rány v pravidelných intervalech',
    'Tmavá krev nepřetržitě vytékající z rány',
    'Drobné prosakování z celé plochy rány',
    'Krev pění a je jasně červená'
  ], a: [0],
  why: 'Pravidelné intervaly odpovídají srdečnímu stahu a světlá barva okysličené krvi. Hrozí hemoragický šok z vykrvácení. Žilní krvácení je tmavé a nepřetržité, vlásečnicové vzniká u odřenin a drobných ranek.',
  src: 'Skripta s. 15'
},
{
  id: 'ran12', c: 'rany', m: true,
  q: 'Jaká je první pomoc u tepenného krvácení? (více odpovědí)',
  o: [
    'Tamponáda, tedy stlačení rány',
    'Tlakový obvaz s případným nabalením',
    'Zaškrcení nad ránou jako poslední možnost, nelze-li krvácení zastavit tlakovým obvazem',
    'Protišoková poloha, není-li poraněná hlava',
    'Okamžité zaškrcení jako první krok',
    'Vypláchnutí rány peroxidem'
  ], a: [0, 1, 2, 3],
  why: 'Pořadí je závazné: stlačení → tlakový obvaz → teprve pak zaškrcení. Výjimkou je úrazová amputace, kde se zaškrcuje rovnou.',
  src: 'Skripta s. 15–16'
},
{
  id: 'ran13', c: 'rany',
  q: 'Tlakový obvaz prosakuje krví. Co uděláte?',
  o: [
    'Přidám další tlakovou vrstvu, stávající obvaz neodstraňuji',
    'Obvaz sejmu a přiložím nový, čistý',
    'Obvaz utáhnu škrtidlem',
    'Obvaz ponechám a vyčkám'
  ], a: [0],
  why: 'Odstraněním obvazu se strhne začínající sraženina a krvácení se obnoví. Nabaluje se tedy další vrstva na stávající.',
  src: 'ČČK příručka, s. 41 · skripta s. 15'
},
{
  id: 'ran14', c: 'rany',
  q: 'Proč se masivní krvácení na krku tamponuje a překrývá neprodyšnou fólií?',
  o: [
    'Aby se předešlo vzduchové embolii',
    'Aby rána zůstala sterilní',
    'Aby se krev nevsakovala do oděvu',
    'Aby se zachovala tělesná teplota'
  ], a: [0],
  why: 'Do poraněné krční žíly může být při nádechu nasát vzduch, který se dostane do srdce a plicního oběhu — vzduchová embolie. Neprodyšné krytí tomu brání.',
  src: 'Skripta s. 15'
},
{
  id: 'ran15', c: 'rany', m: true,
  q: 'Dítěti teče krev z nosu. Co podle skript uděláte? (více odpovědí)',
  o: [
    'Posadím dítě a předkloním mu hlavu',
    'Zmáčknu nosní skořepy',
    'Chladím čelo, nos a krk',
    'Přední tamponáda',
    'Zakloním dítěti hlavu, aby krev netekla ven',
    'Nechám dítě ležet na zádech'
  ], a: [0, 1, 2, 3],
  why: 'Záklon hlavy je vždy chyba — dítě krev polyká, může na ni zvracet a ztráta krve se nedá odhadnout. Skripta řadí epistaxi mezi vlásečnicové krvácení a doplňují protišoková opatření.',
  src: 'Skripta s. 15',
  alt: {
    t: 'Novější postup ČČK (2017)',
    x: 'ČČK zásadně zakazuje ucpávat nos gázou: „Zásadně se nepokoušíme zastavit krvácení z nosu ucpáním nosu gázou nebo podobným materiálem.“ Doporučuje pevně stisknout NOSNÍ KŘÍDLA mezi prsty alespoň 5 minut a přiložit studený obklad na TÝLNÍ krajinu (ne na nos a čelo). Postižený sedí v mírném předklonu, dýchá ústy, nekašle, krev nepolyká, ale vyplivuje. Nezastaví-li se krvácení ani po postupném uvolnění tlaku, přikládá se odsávací prakový obvaz na nos a postižený se dopraví na ORL.'
  }
},
{
  id: 'ran16', c: 'rany', m: true,
  q: 'Jak se ošetřuje krvácení ze zvukovodu? (více odpovědí)',
  o: [
    'Přiložení sterilního krytí, savého obvazu na ucho',
    'Poloha na boku na stranu krvácejícího ucha',
    'Pozor na poruchy vědomí a náhlou zástavu oběhu',
    'Protišoková opatření',
    'Ucpání zvukovodu vatou, aby krev nevytékala',
    'Výplach zvukovodu dezinfekcí'
  ], a: [0, 1, 2, 3],
  why: 'Nejčastější příčinou jsou tupé úrazy hlavy, zejména zlomenina base lební. Krev ani mozkomíšní mok se nesmí zadržet — proto se ucho ukládá dolů a kryje savým obvazem, který tekutinu odsává.',
  src: 'Skripta s. 16 a 32'
},
{
  id: 'ran17', c: 'rany',
  q: 'Dítěti byl vyražen zub a krvácí z dutiny ústní. Co je správně?',
  o: [
    'Nechat skousnout sterilní tampon a stisk pevně držet delší dobu; trvalý zub vzít s sebou k lékaři',
    'Vypláchnout ústa dezinfekcí a dát ledovou vodu',
    'Zub vyhodit, replantace není možná',
    'Zub vydezinfikovat a zasunout zpět do lůžka'
  ], a: [0],
  why: 'ČČK doporučuje držet stisk i 30 minut, dokud krvácení neustane. Jde-li o trvalý zub, může být úspěšná replantace — rozhoduje o ní odborné pracoviště.',
  src: 'Skripta s. 16 · ČČK příručka, s. 42'
},
{
  id: 'ran18', c: 'rany',
  q: 'Co je hematemeza?',
  o: [
    'Zvracení krve',
    'Vykašlávání krve',
    'Krev ve stolici',
    'Krvácení z močových cest'
  ], a: [0],
  why: 'Hematemeza = zvracení krve (nejčastěji bodné, střelné nebo tupé poranění břicha, vředová choroba). Hemoptýza = vykašlávání krve (poranění hrudníku). Meléna = tmavá natrávená krev ve stolici, „kávová sedlina“. Enteroragie = čerstvá krev ve stolici.',
  src: 'Skripta s. 16 a 21'
},
{
  id: 'ran19', c: 'rany',
  q: 'Jaká poloha je správná při vykašlávání krve (hemoptýza)?',
  o: [
    'Poloha v polosedě nebo na boku',
    'Poloha vleže na zádech s podloženýma nohama',
    'Protišoková poloha',
    'Poloha na břiše'
  ], a: [0],
  why: 'Polosed usnadňuje dýchání. U zvracení krve se naopak volí poloha na boku, aby nedošlo k vdechnutí. U obou stavů se postižený uklidňuje, provádějí se protišoková opatření a zjišťuje se mechanismus úrazu.',
  src: 'Skripta s. 16'
},
{
  id: 'ran20', c: 'rany', m: true,
  q: 'Které zásady platí u ran a krvácení? (více odpovědí)',
  o: [
    'Nikdy nevytahovat předmět z rány',
    'Snažit se o co nejčistší krytí rány (sterilní krytí)',
    'Zaškrcení jako poslední možnost, nejedná-li se o amputaci',
    'Do ran neaplikovat žádné masti, léky či zásypy',
    'Nepodávat postiženému nic per os',
    'Chránit sami sebe — rukavice',
    'Ránu vždy nejprve vypláchnout peroxidem vodíku'
  ], a: [0, 1, 2, 3, 4, 5],
  why: 'Zákaz podávání čehokoliv ústy platí proto, že zraněný může jít na operaci v celkové anestezii a hrozí vdechnutí žaludečního obsahu. Platí to i u poranění břicha a u šoku.',
  src: 'Skripta s. 16'
},
{
  id: 'ran21', c: 'rany', m: true,
  q: 'Jak ČČK vymezuje zásady přiložení zaškrcovadla (turniketu)? (více odpovědí)',
  o: [
    'Přikládá se zásadně na paži nebo stehno, nikdy na bérec, předloktí ani do blízkosti kloubů',
    'Minimální šířka improvizovaného zaškrcovadla je 5 cm',
    'Přiložené zaškrcovadlo nikdy nepovolujeme',
    'Vždy zaznamenat čas přiložení a písemně ho předat záchranné službě',
    'Zaškrcovadlo se přikládá přímo na kůži',
    'Zaškrcovadlo se každých 10 minut povoluje'
  ], a: [0, 1, 2, 3],
  why: 'Nedostatečně přiložené zaškrcovadlo krvácení naopak zvýší — musí zastavit krvácení úplně. K utahování improvizovaného nepružného zaškrcovadla se použije roubík. Zaškrcenou končetinu při delším zaškrcení chladíme.',
  src: 'ČČK příručka, s. 41 — skripta tyto zásady neuvádějí',
  alt: {
    t: 'Doplněk nad rámec skript',
    x: 'Danina skripta uvádějí u zaškrcení jen „nad ránou (nad kloubem)“ a „jako poslední možnost“. Zásady o šířce 5 cm, zákazu bérce a předloktí a hlavně o zaznamenání času přiložení ve skriptech nejsou — u zkoušky to nebude chyba je uvést, ale nesmí to vytlačit odpověď ze skript.'
  }
},
{
  id: 'ran22', c: 'rany', m: true,
  q: 'Jak se dělí obvazy podle funkce? (více odpovědí)',
  o: [
    'Krycí — ochrana rány před vnějšími vlivy',
    'Tlakové — vyvíjejí tlak na ránu, pomáhají k zástavě krvácení',
    'Znehybňující — znehybní část těla pro správné hojení či omezení bolestivosti',
    'Tahové (extenční) — využívají tah a částečnou imobilizaci',
    'Korekční — využívají se zejména u dětí a žen',
    'Chladivé — snižují teplotu tkáně'
  ], a: [0, 1, 2, 3, 4],
  why: 'Obvazem lze nazvat prakticky jakýkoliv prostředek, který za účelem léčby ovineme kolem části těla. Obvazová technika je jednou ze základních dovedností první pomoci.',
  src: 'Skripta s. 17'
},
{
  id: 'ran23', c: 'rany', m: true,
  q: 'Které skupiny obvazů podle materiálu skripta uvádějí? (více odpovědí)',
  o: [
    'Obvazové tkaniny (elastická a hydrofilní obinadla, mulové čtverce, longety, břišní roušky, tampóny, Pruban)',
    'Obvazové vaty a stříže (obvazová vata, buničitá vata, viskózová střiž)',
    'Impregnované obvazové materiály (sádrové, zinkoklihové, pryskyřičné, termoplastické)',
    'Materiály zpevňující obvazy — výztuhy a dlahy (Kramerovy, Samsplint, plastové, dřevěné)',
    'Náplasťové obvazy (mašličky, stripy) a tekuté obvazy (Novikov, Akutol)',
    'Šátkové a obinadlové obvazy',
    'Magnetické obvazy'
  ], a: [0, 1, 2, 3, 4, 5],
  why: 'Skripta uvádějí osm skupin: tkaniny, vaty a stříže, impregnované, výztuhy a dlahy, náplasťové, tekuté, šátkové a obinadlové. Obinadlové obvazy patří k nejčastěji užívaným.',
  src: 'Skripta s. 17–18'
},
{
  id: 'ran24', c: 'rany', m: true,
  q: 'Jaké jsou základní zásady obvazování? (více odpovědí)',
  o: [
    'Stojíme čelem k poraněnému',
    'Čisté ruce',
    'Obvaz vždy sterilní',
    'Po přiložení sterilního krytí už s ním nepohybujeme',
    'Obvaz vždy překrývá ránu',
    'Obvaz utahujeme co nejvíce, aby držel'
  ], a: [0, 1, 2, 3, 4],
  why: 'Přílišné utažení zhorší prokrvení. U znehybňujících obvazů se proto vždy sleduje prokrvení končetiny pod obvazem.',
  src: 'ČČK Praha 1, s. 17 · skripta s. 19'
},

/* ───────── 7. ZLOMENINY, KLOUBY, BŘICHO, HLAVA, PÁTEŘ (s. 18–22, 32–33) ───────── */
{
  id: 'kos01', c: 'kosti',
  q: 'Jaký je rozdíl mezi natažením, natržením a přetržením?',
  o: [
    'Natažení je podélné poškození, natržení částečné a přetržení úplné poranění svalu nebo šlachy',
    'Natažení je částečné, natržení úplné a přetržení poškození kosti',
    'Liší se pouze bolestivostí, ne rozsahem',
    'Natažení postihuje vaz, natržení sval a přetržení kloubní pouzdro'
  ], a: [0],
  why: 'Příznaky jsou u všech tří stejné: bolestivost, omezení pohybu, hematom, otok. První pomoc také: imobilizace, fixace, analgetika, chlazení.',
  src: 'Skripta s. 18'
},
{
  id: 'kos02', c: 'kosti',
  q: 'Co je distorze?',
  o: [
    'Podvrtnutí — překročení fyziologického rozsahu pohybu v kloubu',
    'Vymknutí — vykloubení hlavice z kloubní jamky',
    'Zhmoždění kloubu bez poranění kloubního pouzdra',
    'Zlomenina v blízkosti kloubu'
  ], a: [0],
  why: 'Kontuze = zhmoždění, otřes kloubu bez poranění pouzdra. Distorze = podvrtnutí. Luxace = vymknutí, vzniká při velkém násilí, nejčastěji ramenní a kolenní kloub.',
  src: 'Skripta s. 18'
},
{
  id: 'kos03', c: 'kosti',
  q: 'Jaká je první pomoc u vymknutí (luxace)?',
  o: [
    'Fixace, analgetika, chlazení — repozice až v definitivním místě ošetření',
    'Okamžitá repozice na místě, jinak hrozí nekróza',
    'Pouze chlazení a klid, fixace není nutná',
    'Tlakový obvaz a elevace končetiny'
  ], a: [0],
  why: 'Příznaky luxace: otok, hematom, výrazná bolest, nemožnost pohybu končetiny a deformace kloubu. Repozici provádí ortopedie — laická repozice může poškodit cévy a nervy.',
  src: 'Skripta s. 18'
},
{
  id: 'kos04', c: 'kosti', m: true,
  q: 'Jaké jsou příznaky zlomeniny? (více odpovědí)',
  o: [
    'Bolest a porucha funkce',
    'Otok a hematom',
    'Deformace končetiny',
    'U otevřené zlomeniny je vidět kost a hrozí silné krvácení při poranění tepny',
    'Zvýšená tělesná teplota nad 38 °C',
    'Vždy bezvědomí'
  ], a: [0, 1, 2, 3],
  why: 'Základní dělení zlomenin: otevřené a zavřené, neúplné a úplné, traumatické amputace.',
  src: 'Skripta s. 19'
},
{
  id: 'kos05', c: 'kosti', m: true,
  q: 'Jak se dělí zlomeniny podle pozice kostních úlomků? (více odpovědí)',
  o: [
    'Tříštivá — více kostních úlomků',
    'Zaklíněná — jedna část kosti je vpáčená do druhé',
    'S posunem osy — úlomky jsou postaveny v určitém úhlu',
    'Dislokovaná — úlomky jsou posunuty',
    'Nedislokovaná — kosti jsou zlomené, ale bez posunu',
    'Spirálová — lom se točí kolem osy kosti'
  ], a: [0, 1, 2, 3, 4],
  why: 'Spirálová je dělení podle LINIE LOMU, spolu s lineární, podélnou, šikmou a příčnou. Pozor na záměnu obou dělení — u zkoušky jde o dvě různé otázky.',
  src: 'Skripta s. 19'
},
{
  id: 'kos06', c: 'kosti', m: true,
  q: 'Jak se dělí zlomeniny podle mechanismu vzniku? (více odpovědí)',
  o: [
    'Kompresivní — násilí působí v ose (obratle)',
    'Impresivní — násilí působí na malou část kosti a ta je vpáčena dovnitř (lebka)',
    'Tahové — způsobené velkým tahem svalů (čéška)',
    'Únavové — pochodové zlomeniny',
    'Patologické — při onkologickém onemocnění'
  ], a: [0, 1, 2],
  why: 'Únavové a patologické patří do dělení podle VZNIKU spolu s úrazovými. Podle mechanismu vzniku jsou jen tři: kompresivní, impresivní a tahové.',
  src: 'Skripta s. 19'
},
{
  id: 'kos07', c: 'kosti', m: true,
  q: 'Jaká je první pomoc u zlomenin podle skript? (více odpovědí)',
  o: [
    'Nejdůležitější je správná fixace zlomeniny',
    'Vždy fixujeme mezi dvěma klouby',
    'Fixujeme pouze horní končetiny a kotníky, nehrozí-li nebezpečí (požár, výbuch, zával)',
    'Repozici necháme odborníkům',
    'Sledujeme prokrvení končetiny a sundáme prstýnky a náramky',
    'Sterilní krytí u otevřených zlomenin, tlakový obvaz při masivním krvácení',
    'Zlomeninu vždy narovnáme do fyziologického postavení'
  ], a: [0, 1, 2, 3, 4, 5],
  why: 'Doplňuje se minimální manipulace s postiženým a protišoková opatření. Při zlomeninách často dochází k poškození okolních měkkých tkání, nervů a velkých cév — proto se sleduje prokrvení.',
  src: 'Skripta s. 19'
},
{
  id: 'kos08', c: 'kosti', m: true,
  q: 'Jaký je odhad krevních ztrát při zlomeninách? (více odpovědí — správné dvojice)',
  o: [
    'Pánev — 5 litrů',
    'Stehenní kost — 3 litry',
    'Pažní kost — 1 litr',
    'Kosti bérce — 1 litr',
    'Kosti předloktí — 0,5 litru',
    'Jedno žebro — 100 ml',
    'Pánev — 1 litr'
  ], a: [0, 1, 2, 3, 4, 5],
  why: 'Zapamatujte si zvlášť ta velká čísla: pánev 5 l a stehenní kost 3 l. Hypovolemický šok se rozvíjí nad ztrátou 20–30 % objemu, takže zlomená pánev sama o sobě znamená rozvinutý šok.',
  src: 'Skripta s. 20',
  tags: ['cislo']
},
{
  id: 'kos09', c: 'kosti',
  q: 'Jaký je rozdíl mezi penetrujícím a nepenetrujícím poraněním břicha?',
  o: [
    'Penetrující proniká břišní stěnou a pobřišnicí, nepenetrující je kontuze břišní stěny s hematomy (tupý úraz)',
    'Penetrující je způsobeno tupým násilím, nepenetrující ostrým předmětem',
    'Penetrující postihuje jen svalstvo, nepenetrující orgány',
    'Liší se pouze velikostí rány'
  ], a: [0],
  why: 'U penetrujícího poranění je velké riziko infekce (až 97 %) a nebezpečí poranění nitrobřišních orgánů a výhřezu střevních kliček. U nepenetrujícího pozor na skrytá poranění nitrobřišních orgánů — tvrdé, prkenovité břicho.',
  src: 'Skripta s. 20'
},
{
  id: 'kos10', c: 'kosti', m: true,
  q: 'Jaká je první pomoc u poranění břicha? (více odpovědí)',
  o: [
    'Sterilní krytí rány',
    'Anamnéza a mechanismus úrazu',
    'Úlevová poloha (klubíčko)',
    'Nepodávat tekutiny a analgetika',
    'Sterilní krytí vyhřezlých kliček — nevracet zpět',
    'Vyhřezlé kličky opatrně vrátit do dutiny břišní'
  ], a: [0, 1, 2, 3, 4],
  why: 'Kličky se nikdy nevracejí — zanesla by se infekce a mohly by se poškodit. Kryjí se sterilně, ideálně vlhkým sterilním krytím, a čeká se na operaci.',
  src: 'Skripta s. 20'
},
{
  id: 'kos11', c: 'kosti',
  q: 'Dítě spolklo cizí těleso. Co platí?',
  o: [
    'Pokud se předmět nikde nezasekne, vyjde přirozenou cestou; jinak RTG, projímadlo nebo operace',
    'Vždy je nutné okamžitě vyvolat zvracení',
    'Vždy následuje endoskopické vyjmutí',
    'Nikdy se nic nedělá, tělo si poradí samo'
  ], a: [0],
  why: 'Spolknutí cizího tělesa je nejčastější u malých dětí a u duševně nemocných (sebepoškozování). Příznaky se odvíjejí od místa, kde předmět uvázne, a od toho, zda není ostrý — může dojít k perforaci střeva, bolesti břicha, zvracení krve.',
  src: 'Skripta s. 20'
},
{
  id: 'kos12', c: 'kosti',
  q: 'Co je nejčastější příčinou náhlé příhody břišní?',
  o: [
    'Zánět slepého střeva',
    'Zánět žlučníku',
    'Zánět slinivky',
    'Střevní neprůchodnost'
  ], a: [0],
  why: 'Zánět červovitého přívěsku slepého střeva. Příznaky: bolest v pravém podbřišku nebo okolo pupku, zvýšená teplota až horečka, nevolnost, nechutenství, zvracení, zácpa nebo průjem, zastavení plynů.',
  src: 'Skripta s. 21'
},
{
  id: 'kos13', c: 'kosti',
  q: 'Co je společnou první pomocí u VŠECH náhlých příhod břišních?',
  o: [
    'Úlevová poloha a nepodávat analgetika ani tekutiny',
    'Úlevová poloha a podat analgetika proti bolesti',
    'Teplý obklad na břicho a dostatek tekutin',
    'Vyvolat zvracení a podat aktivní uhlí'
  ], a: [0],
  why: 'Analgetika zamaskují vývoj bolesti a znemožní lékaři posoudit stav. Tekutiny brání operaci v celkové anestezii. Teplý obklad na břicho se u zánětu v dutině břišní nikdy nepřikládá.',
  src: 'Skripta s. 21–22 · ČČK příručka, s. 162'
},
{
  id: 'kos14', c: 'kosti',
  q: 'Kde je typická bolest u zánětu žlučníku?',
  o: [
    'Silná bolest v pravém podžebří vystřelující pod pravou lopatku',
    'Bolest v nadbřišku vlevo a v okolí pupku',
    'Bolest v pravém podbřišku',
    'Špatně lokalizovatelná rozsáhlá bolest po celém břiše'
  ], a: [0],
  why: 'Zánět slinivky: bolest v nadbřišku vlevo a v okolí pupku. Zánět pobřišnice: špatně lokalizovatelná rozsáhlá bolest, prkenovité břicho, šouravá chůze v předklonu. Zánět žlučníku má z 90 % příčinu ve žlučových kamenech.',
  src: 'Skripta s. 21'
},
{
  id: 'kos15', c: 'kosti', m: true,
  q: 'Jaké typy střevní neprůchodnosti (ileu) skripta rozlišují? (více odpovědí)',
  o: [
    'Mechanický — překážka bránící odchodu plynů a stolice',
    'Neurogenní — poškození nervového zakončení ve stěně střeva a ztráta peristaltiky',
    'Cévní — trombóza či embolie cévy, poškození cévního zásobení, až gangréna',
    'Zánětlivý — způsobený zánětem slepého střeva',
    'Toxický — způsobený otravou'
  ], a: [0, 1, 2],
  why: 'Příznaky: vyklenuté nafouklé břicho, porucha peristaltiky, zácpa, křeče, kolikovité bolesti, zvracení a nauzea. Poslechově je nad překážkou slyšitelná peristaltika a pod překážkou ticho. U neurogenního ileu je „mrtvé ticho“ v dutině břišní.',
  src: 'Skripta s. 22'
},
{
  id: 'kos16', c: 'kosti',
  q: 'Co je ledvinová kolika?',
  o: [
    'Bolest způsobená přítomností kamenů v močových cestách',
    'Zánět ledvinné tkáně',
    'Selhání funkce ledvin',
    'Krvácení do ledviny po úrazu'
  ], a: [0],
  why: 'Často vzniká při infekci močových cest a snížené hydrataci — na táboře typická kombinace. Příznaky: kolikovitá kolísavá bolest v břiše vystřelující do boku nebo do třísel, neklid, může být teplota, pálení či řezání při močení.',
  src: 'Skripta s. 22'
},
{
  id: 'kos17', c: 'kosti',
  q: 'Jak skripta definují akutní koronární syndrom?',
  o: [
    '„Jakákoliv bolest na hrudi doprovázená klidovou dušností“',
    'Bolest na hrudi při námaze, která v klidu ustoupí',
    'Náhlá zástava oběhu',
    'Bolest vystřelující do zad při nádechu'
  ], a: [0],
  why: 'U infarktu myokardu je z 90 % příčinou ateroskleróza, která vytvoří trombotický uzávěr věnčité tepny. Je-li pacient do 3 hodin dopraven na kardiocentrum, je veliká naděje na plnohodnotný návrat do života.',
  src: 'Skripta s. 22'
},
{
  id: 'kos18', c: 'kosti', m: true,
  q: 'Jaká je první pomoc u infarktu myokardu? (více odpovědí)',
  o: [
    'Naprostý tělesný klid, větrání, poloha v polosedě',
    'Snažit se postiženého uklidnit a volat ZZS — jde o čas',
    'Po telefonické dohodě s operátorem ZZS lze podat nitráty pod jazyk nebo antikoagulancia',
    'Nechat postiženého dojít pěšky k autu',
    'Podat teplý nápoj s cukrem'
  ], a: [0, 1, 2],
  why: 'Nitroglycerin nebo Isoket ve spreji či tabletách pod jazyk, případně Acylpyrin, Anopyrin nebo Plavix — vždy až po dohodě s operátorem. Cílem je PCI do 3 hodin.',
  src: 'Skripta s. 22'
},
{
  id: 'kos19', c: 'kosti', m: true,
  q: 'Co patří mezi úrazy hlavy podle skript? (více odpovědí)',
  o: [
    'Zlomenina klenby — kompresivní zlomeniny a praskliny (fisury)',
    'Zlomenina spodiny lebeční (base lební)',
    'Otřes mozku',
    'Zhmoždění mozku',
    'Komprese mozku',
    'Zlomenina krční páteře'
  ], a: [0, 1, 2, 3, 4],
  why: 'Poranění krční páteře patří mezi poranění páteře a míchy. U úrazů hlavy ale vždy myslíme i na spinální trauma.',
  src: 'Skripta s. 32'
},
{
  id: 'kos20', c: 'kosti', m: true,
  q: 'Jaké jsou příznaky zlomeniny spodiny lebeční? (více odpovědí)',
  o: [
    'Bezvědomí',
    'Krvácení z úst nebo ucha s příměsí likvoru',
    'Brýlový hematom',
    'Vysoká horečka',
    'Ztuhlost šíje'
  ], a: [0, 1, 2],
  why: 'První pomocí je přiložení savého obvazu, poloha na boku na stranu krvácejícího ucha a pozor na spinální trauma. Brýlový hematom je krevní výron do očních víček obou očí symetricky — není ale podmínkou.',
  src: 'Skripta s. 32 · ČČK příručka, s. 69'
},
{
  id: 'kos21', c: 'kosti', m: true,
  q: 'Jaké jsou příznaky otřesu mozku? (více odpovědí)',
  o: [
    'Krátkodobé bezvědomí',
    'Bolest hlavy a amnézie na úraz',
    'Nauzea, bledost, pocení, závratě',
    'Spavost — hlavně u dětí',
    'Opakovaná bezvědomí a neurologický deficit'
  ], a: [0, 1, 2, 3],
  why: 'Opakovaná bezvědomí, dezorientace, amnézie a poruchy vidění s dalším neurologickým deficitem jsou příznaky ZHMOŽDĚNÍ mozku, které je závažnější. Spavost u dítěte po úrazu hlavy je varovný příznak, ne únava z programu.',
  src: 'Skripta s. 32'
},
{
  id: 'kos22', c: 'kosti',
  q: 'Které nitrolební krvácení je tepenné a má typicky dvoufázové bezvědomí?',
  o: [
    'Epidurální krvácení',
    'Subdurální krvácení',
    'Subarachnoideální krvácení',
    'Krvácení do mozkových komor'
  ], a: [0],
  why: 'Epidurální: tepenné, mezi lebku a tvrdou plenu mozkovou, dvoufázové bezvědomí (bezvědomí × probuzení × bezvědomí), anizokorie zornic, křeče, ochrnutí. Subdurální: žilní, mezi tvrdou plenu a pavoučnici, nejčastější typ, pomalý rozvoj příznaků dny až týdny. Subarachnoideální: mezi pavoučnicí a měkkou plenou, meningeální dráždění — ztuhlost a opozice šíje.',
  src: 'Skripta s. 32–33'
},
{
  id: 'kos23', c: 'kosti',
  q: 'Které tvrzení o poranění páteře a míchy je správné?',
  o: [
    'Je-li poškozena mícha, je poškozena i páteř — ale poškozená páteř nemusí znamenat poškozenou míchu',
    'Poškozená páteř vždy znamená poškozenou míchu',
    'Mícha může být poškozena i bez poranění páteře',
    'Obojí se vždy vyskytuje současně'
  ], a: [0],
  why: 'Již podle mechanismu úrazu lze poranění páteře a míchy předpokládat. Spinální šok je ztráta neurologické funkce pod úplnou míšní lézí (přetržením míchy).',
  src: 'Skripta s. 33'
},
{
  id: 'kos24', c: 'kosti', m: true,
  q: 'Jaké jsou nejčastější příčiny poranění páteře a míchy? (více odpovědí — podíly ze skript)',
  o: [
    '40 % dopravní nehody',
    '24 % sportovní úrazy',
    '21 % pády z výšky',
    '15 % násilné úrazy',
    '40 % sportovní úrazy'
  ], a: [0, 1, 2, 3],
  why: 'Na táboře jsou v ohrožení hlavně sportovní úrazy a pády z výšky — a skoky do vody na neznámém místě, což skripta zmiňují i v zásadách prevence úrazů.',
  src: 'Skripta s. 33',
  tags: ['cislo']
},
{
  id: 'kos25', c: 'kosti',
  q: 'Postižený po pádu leží, mluví, dýchá a masivně nekrvácí. Co uděláte?',
  o: [
    'Nehýbat s ním',
    'Otočit ho na bok do zotavovací polohy',
    'Posadit ho a zkontrolovat páteř',
    'Přenést ho na ošetřovnu'
  ], a: [0],
  why: 'Skripta to zdůrazňují velkými písmeny: NEHÝBEJTE S NÍM. Pokud samozřejmě nedýchá, šetrně ho otočíme na záda a zahájíme KPR — tam už riziko poranění míchy ustupuje před rizikem smrti.',
  src: 'Skripta s. 33'
},
{
  id: 'kos26', c: 'kosti', m: true,
  q: 'Kdy je namístě manipulovat se zraněným? (více odpovědí)',
  o: [
    'Hrozí-li další riziko — požár, výbuch, zavalení',
    'Brání-li nám v ošetření dalších raněných',
    'Je-li to nutné pro další ošetření, například KPR',
    'Aby bylo zraněnému pohodlněji',
    'Aby si ho mohli prohlédnout ostatní'
  ], a: [0, 1, 2],
  why: 'Manipulace se zraněnými a jejich odsun nejsou součástí první pomoci. Neodborná manipulace může poranění ještě zhoršit. Pokud postižený mluví, dýchá a nehrozí další nebezpečí, nemanipulujeme s ním.',
  src: 'Skripta s. 33'
},
{
  id: 'kos27', c: 'kosti', m: true,
  q: 'Co patří mezi zavřená poranění hrudníku? (více odpovědí)',
  o: [
    'Poškození stěny hrudníku a orgánů vlivem nárazu či výbuchu (tupá poranění)',
    'Zlomeniny žeber, kontuze srdce a plic',
    'Blast syndrom — poranění hrudníku tlakovou vlnou při výbuchu',
    'Paradoxní dýchání — vlající hrudník, „okénko“ se propadá při nádechu',
    'Bodná a střelná poranění stěny hrudníku'
  ], a: [0, 1, 2, 3],
  why: 'Bodná a střelná poranění patří mezi OTEVŘENÁ poranění hrudníku a vedou k pneumotoraxu. Paradoxní dýchání vzniká při sériových zlomeninách žeber.',
  src: 'Skripta s. 27'
},
{
  id: 'kos28', c: 'kosti',
  q: 'Co je pneumotorax?',
  o: [
    'Patologická přítomnost vzduchu v hrudní dutině mimo dýchací cesty',
    'Nahromadění krve v osrdečníku',
    'Zánět plicní tkáně',
    'Zúžení průdušek bronchospasmem'
  ], a: [0],
  why: 'Dochází k útlaku hrudních orgánů a kolapsu plíce. Příznaky: bledost, cyanóza, neklid, klidová dušnost, rána v hrudní stěně, ze které vytéká či pění světle červená krev, slyšitelný unikající vzduch, hrozí udušení.',
  src: 'Skripta s. 27'
},
{
  id: 'kos29', c: 'kosti',
  q: 'Jak skripta popisují ošetření otevřeného pneumotoraxu?',
  o: [
    'Převést otevřený PNO na zavřený — neprodyšná fólie ze tří stran',
    'Ránu ponechat zcela otevřenou',
    'Přiložit prodyšný obvaz z gázy fixovaný leukoplastí',
    'Ránu pevně vytamponovat gázou'
  ], a: [0],
  why: 'Otevřeným PNO vzniká stálá komunikace s vnějším prostředím, vzduch proudí do hrudníku a zase ven — kolaps plic a paradoxní dýchání. U ventilového (tenzního) PNO rána funguje jako ventil: vzduch může dovnitř, ale ne ven; léčbou je převést ho na otevřený a následně zavřený, drenáž hrudníku a oblepení neprodyšné fólie ze tří stran.',
  src: 'Skripta s. 27',
  alt: {
    t: 'Novější postup ČČK (2017)',
    x: 'Příručka ČČK výslovně uvádí, že jde o změnu: „Oproti dříve doporučovaným postupům spočívá nyní ošetření v přiložení PRODYŠNÉHO obvazu — otvor v hrudníku překryjeme obvazovým materiálem (sterilní gázou) a fixujeme leukoplastí — nebo může zachránce ponechat ránu i otevřenou.“ Poloha zraněného je v polosedě, provádějí se protišoková opatření a neprodleně se volá ZZS. Důvod změny: neprodyšné krytí může proměnit otevřený PNO v tenzní, který je nebezpečnější.'
  }
},
{
  id: 'kos30', c: 'kosti',
  q: 'Co je srdeční tamponáda?',
  o: [
    'Výpotek v osrdečníku, který se plní tekutinou, takže srdce nemůže plnit funkci pumpy',
    'Ucpání věnčité tepny trombem',
    'Zástava srdce po úrazu elektrickým proudem',
    'Stlačení srdce zlomenými žebry'
  ], a: [0],
  why: 'Příčinou je kontuze srdce při úraze, akutní infarkt myokardu, tenzní PNO nebo ruptura srdečního svalu. Příznakem je srdeční zástava po úrazu hrudníku — pády, dopravní nehody. Léčbou je punkce perikardu.',
  src: 'Skripta s. 28'
},
{
  id: 'kos31', c: 'kosti',
  q: 'Co je disekující aneurysma aorty?',
  o: [
    'Odtržení vrstev stěny aorty',
    'Úplné přetržení aorty',
    'Zúžení aorty vlivem aterosklerózy',
    'Zánět stěny aorty'
  ], a: [0],
  why: 'Aneurysma je výduť ve stěně aorty, která může prasknout a vyvolat masivní krvácení. Příznakem je náhle vzniklá ostrá bolest v hrudníku a zádech („něco se mi tam utrhlo“), vysoká úmrtnost, léčbou neodkladná operace.',
  src: 'Skripta s. 28'
},
{
  id: 'kos32', c: 'kosti',
  q: 'Co je vředová choroba a co je meléna?',
  o: [
    'Vředy GIT vznikající porušením sliznice; meléna je tmavá natrávená krev ve stolici — „kávová sedlina“',
    'Zánět žaludeční sliznice; meléna je čerstvá krev ve stolici',
    'Nádor žaludku; meléna je zvracení krve',
    'Zánět jícnu; meléna je krev v moči'
  ], a: [0],
  why: 'Akutní (stresové) vředy vznikají rychle a mají příčiny spojené se stresem. Peptické vředy vznikají postupně (kořeněná potrava, alkohol). Vředy mohou pacienta ohrožovat na životě — může vzniknout perforace vředu s hemoragickým šokem a smrtí.',
  src: 'Skripta s. 21–22'
}

);
