# Stylelint

Alapértelmezett [szabályok](https://stylelint.io/user-guide/rules/list)

## Struktúra

A könnyebb karbantarthatóság végett pluginonként külön-külön fájlba vannak szedve a szabályok és
ezt összeállítjuk a `stylelint.js` fájlban, amit a gyökérben lévő `stylelint.config.js` fájl fog használni.

## Felhasznált pluginok

- [stylelint-order](https://github.com/hudochenkov/stylelint-order)
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss)

## Deprecated

Az alábbi paranccsal ki tudod listázni a kifutó stylelint szabályokat:

```bash
npm run stylelint:find-deprecated-rules
```

Ez azt jelenti, hogy valamelyik plugin, vagy akár maga a stylelint a következő major verziónál el fog törni,
ha azt a szabályt továbbra is megtartjuk.

## Új szabályok

Mivel folyamatosan jönnek ki frissítések a stylelinthez és a pluginjaihoz, nehéz követni, hogy mikor jönnek ki
új szabályok.

```bash
npm run stylelint:find-unused-rules
```

Ezzel a paranccsal kilistázhatod az összes olyan szabályt, ami nincs még használva.
A "nincs használva" azt jelenti, hogy még kikapcsolt állapotban sincs felvéve a configban.

## Új plugin felvétele

Telepíted a plugint, példaként legyen a neve `awesome`.

```bash
npm i --save-dev stylelint-plugin-awesome
```

Létrehozod a config fájlát a `rules` könyvtárban: `awesome.js`.

Figyelsz a helyes kommentelésre, és hogy egyetlen objectet exportálsz:

```js
// ---------- Awesome ---------
// https://github.com/foobarbaz/stylelint-plugin-awesome
// -----------------------------

module.exports = {
  // ide jönnek a szabályok
}
```

A plugin *összes* szabályát be kell kötnöd, akkor is ha nem használjuk, akkor kikapcsolt állapotban (null) kell lennie és meg kell indokolni, hogy miért nem használjuk.

Bekötöd az `stylelint.config.js` fájlba a `rules` objectbe.
A `plugins` részhez felveszed a telepített plugin nevét.

Bekötés után `npm run stylelint:find-unused-rules` kidobja, ha esetleg valamelyik szabályát az új pluginnak nem vetted fel.

Végül a `stylelint.test.ts` fájlt bővíted az új pluginnak megfelelően és futtatsz tesztet az egész `stylelint` könyvtárra.

