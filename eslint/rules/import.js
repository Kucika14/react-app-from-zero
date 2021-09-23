// ----------- Import -----------
// https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
// ------------------------------

const path = require('path')

module.exports = {
  'import/default': 1,

  // TODO
  // [SAS] jó regex kell, hogy le tudjuk kezelni a locales/[request] -et.
  'import/dynamic-import-chunkname': 0,
  /*
  'import/dynamic-import-chunkname': [
    1, {
      importFunctions: [ 'dynamicImport' ],

      webpackChunknameFormat: '[a-zA-Z0-9-/_\[\]]+'
    }
  ],
  */

  'import/export': 2,
  'import/export-last': 0, // Nem kell

  'import/extensions': [
    1,
    'never',
    {
      svg:  'always',
      jpg:  'always',
      png:  'always',
      json: 'always',
      mp3:  'always',
      css:  'always',
      scss: 'always',
      pdf:  'always',
      mp4:  'always',
      webm: 'always'
    }
  ],

  'import/first': 2,
  'import/group-exports': 0, // Nem kell.
  'import/max-dependencies': 0, // Nem kell.
  'import/named': 1,
  'import/namespace': 0, // Nem kell.
  'import/newline-after-import': [ 1, { count: 1 } ],
  'import/no-absolute-path': [ 2, { esmodule: true, commonjs: true, amd: false } ],
  'import/no-amd': 2,
  'import/no-anonymous-default-export': [
    2,
    {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowCallExpression: false,
      allowLiteral: false,
      allowObject: false
    }
  ],
  'import/no-commonjs': 0, // Kell a require a webpack miatt.
  'import/no-cycle': [ 1, { maxDepth: 1 } ],
  'import/no-default-export': 0, // Hülyeség. Mindig kell név!
  'import/no-deprecated': 0, // Nem kell.

  // Azért jobb, mint az eslint no-duplicate-imports, mert ez felismeri az import type syntax-ot.
  // SLOW
  'import/no-duplicates': [ 1, { considerQueryString: true } ],

  'import/no-dynamic-require': 0, // Kell a dynamic require.

  'import/no-extraneous-dependencies': [
    1,
    {
      devDependencies: false,
      optionalDependencies: false,
      peerDependencies: false,
      bundledDependencies: false,
      packageDir: path.resolve(__dirname, '..', '..')
    }
  ],

  'import/no-internal-modules': 0, // Tudjuk mit csinálunk.
  'import/no-mutable-exports': 2,
  'import/no-named-as-default': 1,
  'import/no-named-as-default-member': 1,
  'import/no-named-default': 0, // Nem tudjuk használni, mert type importnál kellhet.
  'import/no-named-export': 0, // Nekünk kellenek nevek.
  'import/no-namespace': 2, // Kitiltottuk a csillagos (mindentbele) importot.
  'import/no-nodejs-modules': 0, // Tudjuk mit csinálunk. :)
  'import/no-import-module-exports': 1, // Ilyet tilos.:)
  'import/no-relative-parent-imports': 0, // Ezt sajnos nem tudjuk használni.
  'import/no-relative-packages': 0,
  'import/no-restricted-paths': 0, // Nehéz lenne beállítani, túl sok idő és annyit nem ér.
  'import/no-self-import': 1,
  'import/no-unassigned-import': 0, // Nem kell.
  'import/no-unresolved': 0, // Nem kell.
  'import/no-unused-modules': 0, // Nem kell.
  'import/no-useless-path-segments': 1,
  'import/no-webpack-loader-syntax': 2, // Ha ilyen speckó kell, azt webpack configban oldjuk meg.

  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/order.md
  // TODO: Ezt lehetne sokkal pontosabbá tenni.
  //       Az ideális az lenne, ha automatikusan ilyenné tudná formázni (enterezéssel együtt):
  //
  // import GameOver from '@bc/v2/GameOver/GameOver'
  // import events from '@apps/events/events'
  // import type { IPileGameParams, TLetter, TLetterArrays } from '@apps/gameLogics/PileGameLogic'
  //
  // import type TravellerGameLogic       from '../../gameLogics/TravellerGameLogic/TravellerGameLogic'
  // import { NewTravellerGameLogic }     from '../../gameLogics/TravellerGameLogic/TravellerGameLogic'
  // import type { TAppearance, TGender } from '../../definitions'
  // import { MAX_WINDOW }                from '../../definitions'
  //
  // import type PassengerCar   from '../PassengerCar/PassengerCar'
  // import { levelSelections } from '../LevelScene/tree'
  //
  // import styles from './TravellerGame.scss'
  //
  'import/order': [
    1,
    {
      groups: [ 'builtin', 'external', 'parent', 'sibling', 'index' ],
      pathGroups: [
        {
          pattern: '@common/**',
          group: 'external'
        },
        {
          pattern: '@projects/**',
          group: 'external'
        },
        {
          pattern: '@apps/**',
          group: 'parent'
        },
        {
          pattern: '@gameLogics/**',
          group: 'parent'
        },
        {
          pattern: '@bc/**',
          group: 'parent'
        }
      ],
      'newlines-between': 'ignore',
      alphabetize: { order: 'ignore', caseInsensitive: false }
    }
  ],

  'import/prefer-default-export': 0, // Sok helyen nincs, pl. típus exportkor.
  'import/exports-last': 0, // Nem kell, mert mindenhol vannak exportjaink.
  'import/unambiguous': 0 // Nem kell, mert nekünk kell, hogy parseoljon scriptet.
}
