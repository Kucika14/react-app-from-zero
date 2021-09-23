# ESLint

Alapértelmezett [szabályok](https://eslint.org/docs/rules/)

## Struktúra

A könnyebb karbantarthatóság végett pluginonként külön-külön fájlba vannak szedve a szabályok és
ezt összeállítjuk a `eslint.config.js` fájlban, amit a gyökérben lévő `.eslintrc.js` fájl fog használni.

### naming convention

Ez a legbonyolultabb és legösszetettebb szabály, ezért külön könyvtárban még tovább van darabolva.

## Felhasznált pluginok

- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest#readme)
- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise#readme)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-radar](https://github.com/es-joy/eslint-plugin-radar)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-wc](https://github.com/43081j/eslint-plugin-wc#readme)

## Deprecated

Az alábbi paranccsal ki tudod listázni a kifutó eslint szabályokat:

```bash
npm run eslint:find-deprecated-rules
```

Ez azt jelenti, hogy valamelyik plugin, vagy akár maga az eslint a következő major verziónál el fog törni,
ha azt a szabályt továbbra is megtartjuk.

## Új szabályok

Mivel folyamatosan jönnek ki frissítések az eslinthez és a pluginjaihoz, nehéz követni, hogy mikor jönnek ki
új szabályok.

```bash
npm run eslint:find-unused-rules
```

Ezzel a paranccsal kilistázhatod az összes olyan szabályt, ami nincs még használva.
A "nincs használva" azt jelenti, hogy még kikapcsolt állapotban sincs felvéve a configban.

## Lassú szabályok szűrése

```bash
npm run eslint:find-slow-rules
```

Ez végignézi a /common/ könyvtáron, hogy milyen szabályok lehetnek lassúak.

A `rules/slow.js` fájlban lehet változtatni a beállításokon és a `goku-developer.js` fájlban pedig használni a lassú szabályok kikapcsolását:

```json
{
  eslint: {
    useSlowRules: false
  }
}
```

Ekkor figyelmeztetés sincs, szóval csak akkor használd, ha tudod mit csinálsz, mert másnál meg be fog jelezni!

## Új plugin felvétele

Telepíted a plugint, példaként legyen a neve `awesome`.

```bash
npm i --save-dev eslint-plugin-awesome
```

Létrehozod a config fájlát a `rules` könyvtárban: `awesome.js`.
NEM kell kiírni elé, hogy eslint, se semmit, csak magát a plugin nevet!

Figyelsz a helyes kommentelésre, és hogy egyetlen objectet exportálsz:

```js
// ---------- Awesome ---------
// https://github.com/foobarbaz/eslint-plugin-awesome
// -----------------------------

// 0 - disabled
// 1 - warning
// 2 - error

module.exports = {
  // ide jönnek a szabályok
}
```

A plugin *összes* szabályát be kell kötnöd, akkor is ha nem használjuk, akkor kikapcsolt állapotban (0) kell lennie és meg kell indokolni, hogy miért nem használjuk.

Bekötöd az `eslint.config.js` fájlba vagy mindenhol elérhetően, ekkor a `rules` objectbe kerül. Viszont ha csak bizonyos esetekben (ts, jest, nodejs környezet, stb.) akarod használni, akkor az `overrides` rész megfelelő helyére kell rakni.

Bekötés után `npm run eslint:find-unused-rules` kidobja, ha esetleg valamelyik szabályát az új pluginnak nem vetted fel.

Végül az `eslint.test.ts` fájlt bővíted az új pluginnak megfelelően és futtatsz tesztet az egész `eslint` könyvtárra.
