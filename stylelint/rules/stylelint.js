// ---------- STYLELINT ---------
// https://stylelint.io/user-guide/rules/list/
// ------------------------------
module.exports = {
  // --- Color
  'color-no-invalid-hex': true,
  'color-hex-case': 'lower',
  'color-hex-length': 'short',
  'color-function-notation': 'legacy',
  'color-named': 'never',
  'color-no-hex': null, // Engedjük a hexadecimális színkódokat.

  // --- Font family
  'font-family-no-duplicate-names': true,
  'font-family-no-missing-generic-family-keyword': null, // SCSS mixin-ből megoldjuk.
  'font-family-name-quotes': 'always-where-recommended', // Nem tudnánk custom-property-t használni font-family-nél.

  // --- Named grid areas
  'named-grid-areas-no-invalid': null, // Jelenleg nincs rá szükség.

  // --- Function
  'function-calc-no-invalid': true,
  'function-calc-no-unspaced-operator': true,
  'function-linear-gradient-no-nonstandard-direction': true,
  'function-comma-newline-after': 'always-multi-line',
  'function-comma-newline-before': null, // Véletlenül sem.
  'function-comma-space-after': 'always-single-line',
  'function-comma-space-before': 'never',
  'function-max-empty-lines': 0,
  'function-name-case': 'lower',
  'function-parentheses-newline-inside': 'always-multi-line',
  'function-parentheses-space-inside': 'never-single-line',
  'function-url-quotes': 'always',
  'function-whitespace-after': null, // Nem tudjuk bekapcsolni, mert: @each $() után is space-t rak

  // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions
  'function-disallowed-list': null, // Az allowedet részesítjük előnyben.
  'function-allowed-list': [
    'url',
    'perspective',
    'rotate',
    'rotate3d',
    'rotateX',
    'rotateY',
    'rotateZ',
    'scale',
    'scaleX',
    'scaleY',
    'scale3d',
    'skew',
    'skewX',
    'skewY',
    'translate',
    'translateX',
    'translateY',
    'translate3d',
    'cubic-bezier',
    'calc',
    'clamp',
    'max',
    'min',
    'abs',
    'blur',
    'brightness',
    'contrast',
    'drop-shadow',
    'grayscale',
    'opacity',
    'saturate',
    'sepia',
    'rgb',
    'rgba',
    'linear-gradient',
    'steps',
    'repeat',
    'var',
    'matrix3d',
    'hue-rotate',

    // --- rendszer
    /^utils\..+$/,

    // --- scss
    'if', // Okosváros World.scss-ben található rá példa
    /^list\..+$/,
    /^map\..+$/,
    /^string\..+$/,
    /^color\..+$/,
    /^math\..+$/,
    /^meta\..+$/,
    /^selector\..+$/,

    // --- custom
    /^sni-fn-([a-z][\da-z]*)(-[\da-z]+)*$/
  ],

  'function-url-no-scheme-relative': true,
  'function-url-scheme-disallowed-list': null, // Jelenleg nincs rá szükség.
  'function-url-scheme-allowed-list': null,    // Jelenleg nincs rá szükség.

  // --- String
  'string-no-newline': true,
  'string-quotes': 'double',

  // --- Unit
  'unit-no-unknown': true,
  'unit-case': 'lower',
  'unit-disallowed-list': null, // Jelenleg nincs rá szükség.
  'unit-allowed-list': null,    // Jelenleg nincs rá szükség.

  // --- Value
  'value-keyword-case': 'lower',
  'value-no-vendor-prefix': true,

  // --- Property
  'property-case': 'lower',

  'property-no-unknown': [
    true,
    {
      // https://github.com/css-modules/css-modules#composition
      ignoreProperties: [ 'composes', 'compose-with' ],
      ignoreSelectors: [ ':export', /^:import/ ]
    }
  ],

  'property-disallowed-list': null,
  'property-allowed-list': null, // A disallowedet használjuk.
  'property-no-vendor-prefix': true,

  // --- Keyframe
  'keyframe-declaration-no-important': true,

  // --- Keyframes
  // Keyframes elnevezés, anim- prefix, kebab case-t kell használni, illetve scss változót is bele lehet rakni
  // pl: anim-test-#{$variable1}
  'keyframes-name-pattern': /^anim-(([a-z][\da-z]*|.*#{\$[\dA-Za-z]+}*))(-[\da-z]+)*$/,

  // --- Declaration
  'declaration-bang-space-after': 'never',
  'declaration-bang-space-before': 'always',
  'declaration-block-semicolon-newline-after': 'always-multi-line',
  'declaration-block-semicolon-newline-before': 'never-multi-line',
  'declaration-block-semicolon-space-after': 'always-single-line',
  'declaration-block-semicolon-space-before': 'never',
  'declaration-block-single-line-max-declarations': 1,
  'declaration-block-trailing-semicolon': 'always',
  'declaration-colon-newline-after': 'always-multi-line',
  'declaration-colon-space-after': 'always-single-line',
  'declaration-colon-space-before': 'never',
  'declaration-block-no-shorthand-property-overrides': true,
  'declaration-empty-line-before': null, // Fölösleges.
  'declaration-no-important': true,
  'declaration-block-no-duplicate-properties': true,
  'declaration-block-no-duplicate-custom-properties': true,

  'declaration-property-value-disallowed-list': {
    // https://caniuse.com/#search=space-evenly
    'justify-content': [ 'space-evenly' ],

    // https://developer.apple.com/forums/thread/99883
    'background-attachment': [ 'fixed' ],

    // [SAS] Gyakran csinálom, hogy transparent helyett ezt írom be és pislogok, miért nem jó, mert nem dob rá syntax errort.
    'background-color': [ 'none' ]
  },

  // ---
  // [SAS] A transition és a transform definiálásánál a már nem használt high-performance-animationst vesszük példának.
  // https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/
  // ---
  'declaration-property-value-allowed-list': {
    // Csak és kizárólag a transformot és az opacity-t szabad transition-el animálni.
    // Minden más repaint-et vagy reflow-t eredményez.
    // Több info: docs/CSS.md
    transition: [
      '/transform/',
      '/opacity/',
      '/color/',
      'none'
    ],
    'transition-property': [
      '/transform/',
      '/opacity/',
      '/color/'
    ],
    transform: [
      '/translate/',
      '/scale/',
      '/rotate/',
      '/matrix3d/',
      'none'
    ]
  },

  'declaration-block-no-redundant-longhand-properties': [
    true,
    { ignoreShorthands: [ 'font' ] }
  ],

  'declaration-property-unit-disallowed-list': {
    // Az animációknál ms-ben adjuk meg az időt.
    '/^animation/': [ 's' ],
    '/^transition/': [ 's' ]
  },
  'declaration-property-unit-allowed-list': null,

  // --- Block
  'block-no-empty': true,
  'block-closing-brace-empty-line-before': 'never',
  'block-closing-brace-newline-after': 'always',
  'block-closing-brace-newline-before': 'always-multi-line',
  'block-closing-brace-space-after': 'always-single-line',
  'block-closing-brace-space-before': 'always-single-line',
  'block-opening-brace-newline-after': 'always-multi-line',
  'block-opening-brace-newline-before': null, // Hülyeség.
  'block-opening-brace-space-after': 'always-single-line',
  'block-opening-brace-space-before': 'always',

  // --- Selector
  'selector-attribute-operator-disallowed-list': null, // Allowedet használjuk.

  // [SAS] Az egyenlőségjelen kívül még nem volt szükségünk a többire, ne is engedjük addig.
  // Ha szükség lesz újra, az megbeszélés kérdése.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
  'selector-attribute-operator-allowed-list': [ '=' ],

  'selector-attribute-name-disallowed-list': [
    // Helyette: #
    'id',
    // Helyette: .
    'class',
    // Lang attribútuma a html tag-nek van a mi rendszerünkben, másra ne rakjuk rá.
    'lang',
    // Ha az anchorra így kell hivatkozni, az már rég rossz.
    'target',
    'href'
  ],

  'selector-class-pattern': [
    // [SAS] Csak a kebabozást engedjük.
    // Viszont :global esetén a BEM-et követjük, ekkor kell a dupla alávonás és a dupla dash.
    // Jelenleg a stylelint ennél a szabálynál nem tud különbséget tenni a globál és nem globál esetén.
    //
    // https://github.com/stylelint/stylelint/issues/3259
    //
    // https://gist.github.com/Potherca/f2a65491e63338659c3a0d2b07eee382
    // Ezzel a regex-el nem működik, gyakorlatilag mindenért ugat, ezért egy nem teljesen pontos BEM regexet használunk.
    //
    /^[\d_a-z-]+$/,
    {
      resolveNestedSelectors: false
    }
  ],
  'selector-combinator-disallowed-list': null, // [Péter]: "selector-disallowed-list"-ben fel vanak véve
  'selector-combinator-allowed-list': null, // [Péter]: "selector-disallowed-list"-ben fel vanak véve
  'selector-id-pattern': null, // [Péter]: id-kat nem használunk, nincs rá szükség
  'selector-max-attribute': 3,
  'selector-max-class': null, // TODO: jó volna.
  'selector-max-combinators': null, // Nem használunk combinatorokat.
  'selector-max-compound-selectors': null, // Lehet olyan, hogy mélységében felül kell vernünk szabályokat.
  'selector-max-empty-lines': 0,
  'selector-max-id': 0, // ID alapján nem stílusozunk és nem is írunk rá CSS selectort.
  'selector-max-pseudo-class': 4,
  'selector-max-specificity': null, // TODO: ezt jó lenne limitálni.
  'selector-max-type': null, // Jelenleg nincs szükségünk rá.
  'selector-max-universal': 0,
  'selector-nested-pattern': null, // TODO: csak ampersanddal előtte engedjük.
  'selector-no-qualifying-type': null, // TODO
  'selector-no-vendor-prefix': true,
  'selector-disallowed-list': [ /[#*+>|~]+/ ],
  'selector-attribute-quotes': 'always',

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
  //
  // A hover kitiltásának oka: docs/CSS.md
  //
  'selector-pseudo-class-disallowed-list': null, // Inkább az allowedet használjuk.
  'selector-pseudo-class-allowed-list': [
    'root',
    'active',
    'focus',
    'empty',
    'active',
    '/^first$/',
    'not',
    '/^nth-.+$/',

    // --- css-modules
    'global',
    'local'
  ],

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
  'selector-pseudo-element-disallowed-list': null, // Inkább az allowedet használjuk.
  'selector-pseudo-element-allowed-list': [
    'before',
    'after',
    'first-letter',
    'first-line'
  ],

  'selector-pseudo-element-colon-notation': 'double',
  'selector-pseudo-class-no-unknown': [
    true,
    {
      ignorePseudoClasses: [ 'global', 'local' ]
    }
  ],
  'selector-pseudo-element-no-unknown': true,
  'selector-type-no-unknown': [
    true,
    {
      ignore: [ 'custom-elements' ],
      ignoreTypes: [ 'from' ]
    }
  ],
  'selector-attribute-brackets-space-inside': 'never',
  'selector-attribute-operator-space-after': 'never',
  'selector-attribute-operator-space-before': 'never',
  'selector-combinator-space-after': 'always',
  'selector-combinator-space-before': 'always',
  'selector-descendant-combinator-no-non-space': true,
  'selector-list-comma-newline-after': 'always',
  'selector-list-comma-newline-before': null, // Nem kell.
  'selector-list-comma-space-after': null, // Nem kell.
  'selector-list-comma-space-before': 'never',
  'selector-pseudo-class-case': 'lower',
  'selector-pseudo-class-parentheses-space-inside': 'never',
  'selector-pseudo-element-case': 'lower',
  'selector-type-case': 'lower',

  // --- Rule
  'rule-empty-line-before': [
    'always-multi-line',
    {
      except: [ 'first-nested' ],
      ignore: [ 'after-comment' ]
    }
  ],

  // --- Media feature
  'media-feature-name-no-unknown': true,
  'media-feature-colon-space-after': 'always',
  'media-feature-colon-space-before': 'never',
  'media-feature-name-case': 'lower',
  'media-feature-parentheses-space-inside': 'never',
  'media-feature-range-operator-space-after': 'always',
  'media-feature-range-operator-space-before': 'always',

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features
  'media-feature-name-disallowed-list': null, // Az allowedet használjuk.
  'media-feature-name-allowed-list': [
    'min-width',
    'max-width',
    'min-height',
    'max-height',
    'orientation'
  ],

  'media-feature-name-no-vendor-prefix': true,

  // --- Media-feature-name
  'media-feature-name-value-allowed-list': {
    'min-width': [ '384px', '576px', '768px', '992px', '1200px', '1680px', '1921px' ],
    'max-width': [ '575px', '767px', '991px', '1119px', '1679px', '1920px' ],
    orientation: [ 'landscape', 'portrait' ]
  },

  // --- Custom media
  'custom-media-pattern': null, // Nem kell.

  // --- Media query list
  'media-query-list-comma-newline-after': 'always-multi-line',
  'media-query-list-comma-newline-before': null, // Nem kell space a vessző elé.
  'media-query-list-comma-space-after': 'always-single-line',
  'media-query-list-comma-space-before': 'never',

  // --- At-rule
  'at-rule-no-unknown': null, // SCSS kezeli.

  'at-rule-empty-line-before': [
    'always',
    {
      except: [
        'blockless-after-same-name-blockless',
        'first-nested'
      ],
      ignore: [ 'after-comment' ],
      ignoreAtRules: [ 'else' ]
    }
  ],
  'at-rule-name-case': 'lower',
  'at-rule-name-newline-after': null, // TODO: ? (never ki volt kommentezve)
  'at-rule-name-space-after': 'always-single-line',
  'at-rule-semicolon-newline-after': 'always',
  'at-rule-semicolon-space-before': 'never',

  // https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
  'at-rule-disallowed-list': [
    'charset',             // Nem használjuk
    'import',              // Csak SCSS-ben használunk fájlbehúzást, ott meg a @use -t kell használni
    'namespace',           // Nem használjuk
    'supports',            // Safari nem támogatja
    'document',            // Nem használjuk
    'page',                // Nem használjuk
    'font-face',           // Csak speciális esetben, a font fájloknál használjuk
    'viewport',            // 2021: Working draft
    'counter-style',       // 2021: Candidate
    'font-feature-values', // 2021: Candidate
    'property',            // 2021: Working draft
    'color-profile'        // Nem használjuk
  ],
  'at-rule-allowed-list': null, // Disallowedet használjuk.

  'at-rule-no-vendor-prefix': true,
  'at-rule-property-required-list': null, // Nem kell.

  // --- Comment
  'comment-no-empty': true,
  'comment-whitespace-inside': 'always',
  'comment-empty-line-before': [
    'always',
    {
      except: [ 'first-nested' ],
      ignore: [ 'after-comment', 'stylelint-commands' ]
    }
  ],
  'comment-word-disallowed-list': null, // Nem kell.
  'comment-pattern': null, // Nem kell.

  // --- General / Sheet
  'no-descending-specificity': null, // [SAS] Ideiglenesen kikapcsolva, lehet később visszaengedjük.
  'no-duplicate-at-import-rules': true,
  'no-duplicate-selectors': true,
  'no-empty-source': true,
  'no-extra-semicolons': true,
  'no-invalid-double-slash-comments': true,
  indentation: 2,
  linebreaks: null, // TODO: ?
  'max-empty-lines': 1,

  // [SAS] Hasraütöttem, de kb. ~80 körüliek a leghosszabbak.
  'max-line-length': [
    100,
    {
      ignore: [ 'comments' ]
    }
  ],

  'no-eol-whitespace': true,
  'no-missing-end-of-source-newline': true,
  'no-empty-first-line': true,
  'max-nesting-depth': null, // [Zsola]: sok helyen nagyon mélyek a nestingjeink, én hagynám.
  'unicode-bom': 'never',
  'no-unknown-animations': true,
  'no-irregular-whitespace': true,
  'no-invalid-position-at-import-rule': null, // Kikapcsoltuk, mert mostantól a stylelint/order-be kezeljük.

  // --- Alpha-value
  'alpha-value-notation': null, // [Zsola] percentage, vagy number lehet. Mindkettő jó. pl opacity: .5 / 50%;

  // --- Hue
  'hue-degree-notation': null, // [Zsola] kb. sose használjuk ami ezt a szabályt érinti.

  // --- Length
  'length-zero-no-unit': true,

  // --- Font weight
  'font-weight-notation': 'numeric', // [SAS] font-weight: 700; NINCS bold és társai

  // --- Number
  'number-no-trailing-zeros': true,
  'number-leading-zero': 'never',
  'number-max-precision': 3, // [SAS] pl. top: 3.243px.

  // --- Time
  'time-min-milliseconds': null, // [Zsola] A minimálisan megadható idő, ms-ben. Szerintem felesleges.

  // --- Shorthand property
  'shorthand-property-no-redundant-values': true,

  // --- Value-list
  'value-list-comma-newline-after': 'always-multi-line',
  'value-list-comma-newline-before': 'never-multi-line', // [Péter]: furán nézne ki, ha a sort ,-vel kezdenénk
  'value-list-comma-space-after': 'always-single-line',
  'value-list-comma-space-before': 'never',
  'value-list-max-empty-lines': 0,

  // --- Custom property
  'custom-property-empty-line-before': null, // [Zsola] Mindegy, hogy van-e előtte sortörés.
  'custom-property-pattern': null // TODO: ?
}
