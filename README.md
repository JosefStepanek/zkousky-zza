# Zkoušky ZZA

Webová aplikace na přípravu ke zkoušce **Zdravotník zotavovacích akcí** (kurz podle přílohy č. 2 vyhlášky 106/2001 Sb.). Běží na **https://zza.josefstepanek.cz/**, dá se přidat na plochu telefonu a funguje i bez signálu.

## Co umí

- **Zkouška nanečisto** — 40 otázek s výběrem napříč okruhy, hranice úspěchu 82 % (33 správně), rozbor chyb podle okruhů.
- **Dnešní opakování** (20 otázek) a **Krátké opakování** (10) — opakování s rozestupy podle Leitnerových přihrádek: co se splete, vrátí se brzy, co se umí, odsune se.
- **Vybav si** — kartičky s výčty, postupy a čísly k volnému vybavení.
- **Pravda, nebo mýtus?**, **Obrázky a fotky**, **Seřaď a přiřaď**, **Opravit chyby**.
- **Sporná místa** — kde se výuková skripta liší od příručky ČČK (2017) nebo od vyhlášky. V otázkách vždy platí odpověď ze skript, novější postup je uveden vedle.
- Procvičování po okruzích i po stranách skript.

Postup se ukládá jen v `localStorage` prohlížeče — žádný server ani databáze.

## Obsah

| | |
|---|---|
| Otázky | 384 (výběr jedné i více odpovědí, pravda/mýtus, seřazení, přiřazení, obrázkové) |
| Kartičky „Vybav si“ | 46 |
| Témata skript | 217 nadpisů ze s. 3–36, každé má aspoň jednu otázku |

Zdroje otázek:

- výuková skripta kurzu *Zdravotník zotavovacích akcí* (Zdravotníci s.r.o.) včetně ručních poznámek z kurzu — primární zdroj, podle nich se zkouší,
- *Zdravotník zotavovacích akcí — výukové materiály* (Oblastní spolek ČČK Praha 1),
- *Příručka zdravotníka zotavovacích akcí* (Český červený kříž, 2017),
- zákon č. 258/2000 Sb. a vyhláška č. 106/2001 Sb.

Otázky a vysvětlení jsou vlastní text, zdrojové PDF v repozitáři nejsou. U každé otázky je uvedena strana zdroje.

## Struktura

```
app/
  index.html        stránka a styly
  app.js            logika aplikace
  bank1–5.js        banka otázek
  revize.js         doplněné chybné možnosti a přepsané otázky
  recall.js         kartičky „Vybav si“
  coverage.js       mapa témat skript po stranách
  figs.js           SVG schémata a fotky
  img/              fotky vyrážek
  sw.js, manifest.json, icon-*.png   instalace na plochu a offline režim
tools/
  check.js          kontrola banky otázek
```

## Úpravy

1. Otázky jsou v `app/bank*.js`. Formát je popsaný v hlavičce `bank5.js`.
2. Spusť kontrolu: `node tools/check.js` — ověří klíče odpovědí, typy otázek, obrázky, počet chybných možností a pokrytí všech témat skript.
3. Zvyš číslo verze `?v=` v `index.html` a `VERSION` v `sw.js`, aby se nová verze načetla i v nainstalované aplikaci.
4. Nahraj obsah složky `app/` na hosting.

## Obrázky

Schémata (polohy, místa stlačení, pravidlo devíti, tonutí, dušení, dlahy…) jsou vlastní SVG kresby. Fotky pocházejí z Wikimedia Commons:

- `plane-nestovice.jpg` — [Varicella.jpg](https://commons.wikimedia.org/wiki/File:Varicella.jpg), volné dílo
- `zardenky.jpg` — [Rash of rubella on back (crop).JPG](https://commons.wikimedia.org/wiki/File:Rash_of_rubella_on_back_(crop).JPG), CDC, volné dílo
- `borelioza.jpg` — [Erythema migrans – PHIL 9875](https://commons.wikimedia.org/wiki/File:Erythema_migrans_-_erythematous_rash_in_Lyme_disease_-_PHIL_9875.jpg), James Gathany / CDC, volné dílo
- `opar.jpg` — [Herpes (PHIL 1573)](https://commons.wikimedia.org/wiki/File:Herpes(PHIL_1573_lores).jpg), CDC, volné dílo
- `koprivka.jpg` — [Hives urticaria.jpg](https://commons.wikimedia.org/wiki/File:Hives_urticaria.jpg), Psixtras, CC0
- `plisen-nohou.jpg` — [Tinea pedis interdigitalis.jpg](https://commons.wikimedia.org/wiki/File:Tinea_pedis_interdigitalis.jpg), Falloonb, volné dílo
- `plisen-nehtu.jpg` — [Oncymycosis.JPG](https://commons.wikimedia.org/wiki/File:Oncymycosis.JPG), James Heilman, MD, CC BY-SA 3.0
- `ekzem.jpg` — [Atopic dermatitis child.JPG](https://commons.wikimedia.org/wiki/File:Atopic_dermatitis_child.JPG), Eisfelder, CC BY-SA 3.0
- `rautek.png` — [Rautek-maneuver.png](https://commons.wikimedia.org/wiki/File:Rautek-maneuver.png), Baedr-9439, CC0

Náměty obrázkových otázek vycházejí z ilustrací v příručce ČČK a ve skriptech ČČK Praha 1; schémata jsou nakreslená nově, ne převzatá.

## Ikony a písmo

Ikony: [Lucide](https://lucide.dev), licence ISC. Písmo nadpisů a otázek: [Atkinson Hyperlegible Next](https://fonts.google.com/specimen/Atkinson+Hyperlegible+Next) (Braille Institute, SIL OFL), text: IBM Plex Sans a IBM Plex Mono (SIL OFL).

## Upozornění

Aplikace slouží k učení na zkoušku. Nenahrazuje kurz první pomoci ani aktuální doporučené postupy.
