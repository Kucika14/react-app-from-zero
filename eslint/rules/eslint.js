// ---------- Standard ---------
// https://eslint.org/docs/rules
// -----------------------------
//
// Airbnb:   https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base/rules
// Standard: https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json
//
// 0 - disabled
// 1 - warning
// 2 - error

module.exports = {
  // A constructorban mindig hívjunk supert!
  'constructor-super': 2,
  'for-direction': 2,
  'getter-return': 2,
  'no-async-promise-executor': 2,
  'no-await-in-loop': 2,
  'no-case-declarations': 2,
  'no-class-assign': 2,
  'no-compare-neg-zero': 2,
  'no-cond-assign': 2,
  'no-const-assign': 2,
  'no-constant-condition': [ 2, { checkLoops: true } ],
  'no-control-regex': 1,
  'no-debugger': 2,

  // Lehessen változót törölni?
  'no-delete-var': 2,

  'no-dupe-args': 2,
  'no-dupe-class-members': 2,
  'no-dupe-else-if': 2,
  'no-dupe-keys': 2,
  'no-duplicate-case': 2,
  'no-empty': [ 2, { allowEmptyCatch: false } ],
  'no-empty-character-class': 2,
  'no-empty-pattern': 2,
  'no-ex-assign': 2,
  'no-extra-boolean-cast': 2,
  'no-extra-semi': 2,
  'no-fallthrough': 2,
  'no-func-assign': 2,
  'no-global-assign': 2,
  'no-import-assign': 2,
  'no-inner-declarations': 1,
  'no-invalid-regexp': 2,
  'no-irregular-whitespace': 2,
  'no-loss-of-precision': 2,
  'no-misleading-character-class': 2,
  'no-mixed-spaces-and-tabs': 2,
  'no-new-symbol': 2,
  'no-obj-calls': 2,
  'no-octal': 2,

  // Csak Object.prototype-on keresztül lehet használni az alábbiakat:
  // - hasOwnProperty
  // - isPrototypeOf
  // - propertyisEnumerable
  // https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': 2,

  'no-redeclare': [ 2, { builtinGlobals: false } ],
  'no-regex-spaces': 2,
  'no-self-assign': 2,
  'no-setter-return': 2,
  'no-shadow-restricted-names': 2,
  'no-sparse-arrays': 2,
  'no-this-before-super': 2,
  'no-undef': [ 2, { typeof: true } ],
  'no-unexpected-multiline': 2,
  'no-unreachable': 2,
  'no-unsafe-finally': 2,
  'no-unsafe-negation': 2,
  'no-unused-labels': 2,
  'no-labels': [ 2, { allowLoop: false, allowSwitch: false } ], // [SAS] pfújj, ez mi a rettenet? :D
  'no-extra-label': 2,
  'no-useless-catch': 2,
  'no-useless-escape': 2,
  'no-with': 2,
  'require-yield': 2,
  'use-isnan': 2,
  'valid-typeof': [ 2, { requireStringLiterals: true } ],
  'template-curly-spacing': [ 1, 'always' ],
  'no-multiple-empty-lines': [
    1,
    {
      max: 1,
      maxEOF: 1,
      maxBOF: 0
    }
  ],

  indent: [
    1,
    2,
    {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 0,
      MemberExpression: 'off',
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 'first',
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      offsetTernaryExpressions: false,
      ignoredNodes: [
        'ConditionalExpression',
        'JSXElement', 'JSXElement > *', 'JSXAttribute',
        'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression',
        'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement',
        'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment',
        'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'
      ],
      ignoreComments: true
    }
  ],

  'key-spacing': [
    1,
    {
      beforeColon: false,
      afterColon: true,
      mode: 'minimum'
    }
  ],

  'comma-dangle': [
    1,
    {
      arrays:    'never',
      objects:   'never',
      imports:   'never',
      exports:   'never',
      functions: 'never'
    }
  ],

  'brace-style': [ 1, 'stroustrup', { allowSingleLine: false } ],

  'no-unused-vars': [
    1,
    {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false,
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_'
    }
  ],

  // Függvénymetódusoknál kötelező a this használat?
  'class-methods-use-this': 0, // [SAS] Sok függvényünk van, ahol nem kell a this.

  'no-floating-decimal': 0, // Lehessen írni így is: .5, .98
  'no-var': 2,
  'array-bracket-spacing': [ 1, 'always' ],

  // Kell az osztályon belül a definiciók között üres sor?
  // https://eslint.org/docs/rules/lines-between-class-members
  'lines-between-class-members': [
    1,
    'always',
    {
      exceptAfterSingleLine: true
    }
  ],

  // Kötelező minden eseteben a curly braces?
  // https://eslint.org/docs/rules/curly
  curly: [ 1, 'all' ],

  'space-before-function-paren': [
    1,
    {
      anonymous: 'always',
      named: 'always',
      asyncArrow: 'always'
    }
  ],

  'space-before-blocks': [ 1, 'always' ],
  'padded-blocks': [ 1, { blocks: 'never', switches: 'never', classes: 'never' } ],
  'spaced-comment': [ 1, 'always' ],

  // https://eslint.org/docs/rules/padding-line-between-statements
  // TODO: Ezzel lehet finomhangolni az enterezéseket
  'padding-line-between-statements': [
    1,
    { blankLine: 'always', prev: 'block-like', next: '*' },
    { blankLine: 'always', prev: '*', next: 'block-like' },
    { blankLine: 'always', prev: 'break', next: '*' },
    { blankLine: 'always', prev: 'class', next: '*' },
    { blankLine: 'always', prev: 'continue', next: '*' },
    { blankLine: 'always', prev: 'function', next: '*' },
    { blankLine: 'always', prev: 'if', next: '*' },
    { blankLine: 'always', prev: 'switch', next: '*' },
    { blankLine: 'always', prev: 'for', next: '*' },
    { blankLine: 'always', prev: 'do', next: '*' }
  ],

  // Kell getter-setter páros?
  'accessor-pairs': 0, // [SAS] Nálunk nem kell, ha az egyik van.

  // A setter és a getter egymás mellett legyen.
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  'grouped-accessor-pairs': 1,

  'no-console': 2, // Production-ben bent ragadhat a console.log, erre van a saját 'log'

  // https://eslint.org/docs/rules/no-extra-parens#disallow-unnecessary-parentheses-no-extra-parens
  // TODO: Nem lehet jól belőni, így inkább kikapcsoltam
  'no-extra-parens': [
    0,
    'all',
    {
      conditionalAssign: true,
      returnAssign: true,
      nestedBinaryExpressions: false,
      ignoreJSX: 'none',
      enforceForArrowConditionals: false,
      enforceForSequenceExpressions: false,
      enforceForNewInMemberExpressions: false,
      enforceForFunctionPrototypeMethods: false
    }
  ],

  'no-template-curly-in-string': 2,
  'no-useless-backreference': 0, // nem tudom :)
  'require-atomic-updates': 2,

  // Kötelező a tömb függvényeknél a return?
  'array-callback-return': [ 2, { allowImplicit: true } ], // Unicorn: no-useless-undefined ajánlás

  'block-scoped-var': 2,

  // https://eslint.org/docs/rules/no-multi-spaces#disallow-multiple-spaces-no-multi-spaces
  // Nem lehet használni a mi elvárásaink szerint.
  // Nem lehet használni TS-specifikus syntax miatt (sem): Bejelez enumnál, típusnál, stb.
  // Ha lesz TS-változata, akkor ezekből a beállításokból lehet extendálni.
  'no-multi-spaces': [
    0,
    {
      ignoreEOLComments: false, // Nem használunk EOL commentet, ezért erre jelezzen hibát.
      exceptions: {
        Property:           true,  // Object property-nél lehet több space.
        BinaryExpression:   false, // Matematikai műveleteknél nem lehet több space.
        VariableDeclarator: true,  // Változódeklarálásnál lehet több space.
        ImportDeclaration:  true   // Importnál lehet több space.
      }
    }
  ],

  'no-magic-numbers': 0, // Sima nodejs környezetben nem kell a magic numbers, csak TS alatt, ott vannak definiálva.

  // https://eslint.org/docs/rules/complexity#limit-cyclomatic-complexity-complexity
  // TODO
  complexity: [ 0, { max: 4 } ],

  'consistent-return': 0, // Ez TS miatt nem igazán jó, mert a void és bármi más pár esetén is konzisztens akar lenni.

  // Kötelező a default eset a switch-eknél?
  // https://eslint.org/docs/rules/default-case
  'default-case': 0, // [SAS] Nem kell.

  // Switch-ben a default mindig utoljára legyen?
  // https://eslint.org/docs/rules/default-case-last
  'default-case-last': 2,

  // Függvények paramétereinél a default-al rendelkezőek hátul legyenek?
  // https://eslint.org/docs/rules/default-param-last
  'default-param-last': 2,

  // Kötelező ponttal kiírni a hivatkozást az objecteknél?
  // https://eslint.org/docs/rules/dot-notation
  'dot-notation': [ 2, { allowKeywords: true } ],

  // A pontot mindig a property-hez előtt írjuk.
  // https://eslint.org/docs/rules/dot-location
  'dot-location': [ 2, 'property' ],

  // Tripla egyenlőségjel a dupla helyett, hogy típust is ellenőrízzen.
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: [ 2, 'always' ],

  // For-in loop-ban legyen hasOwnProperty?
  // https://eslint.org/docs/rules/guard-for-in
  'guard-for-in': 0, // [SAS] A rendszer nem engedi, hogy prototype-on keresztül definiáljunk bármit is, ezért nem kell.

  // Hány class lehet egy fájlon belül.
  // https://eslint.org/docs/rules/max-classes-per-file
  'max-classes-per-file': [ 2, 1 ], // [SAS] Szigorúan csak egyetlen egy.

  // Lehet alertet, confirmot és promptot használni?
  // https://eslint.org/docs/rules/no-alert
  'no-alert': 2, // [SAS] Ezek nekünk nem kellenek.

  // Lehet használni arguments.caller, arguments.calle -t?
  // https://eslint.org/docs/rules/no-caller
  'no-caller': 2, // [SAS] Nálunk nem lehet.

  'no-constructor-return': 2,
  'no-div-regex': 2,
  'no-else-return': [
    1,
    {
      allowElseIf: true // [SAS] Engedjük az elseIf -et, mert csomó errorkezelésünk van arra az esetre, ha nem futna bele feltételbe.
    }
  ],
  'no-empty-function': [ 1, { allow: [] } ],
  'no-eq-null': 2,
  'no-eval': 2,
  'no-extend-native': 2,
  'no-extra-bind': 2,
  'no-implicit-coercion': 2,
  'no-implicit-globals': 0, // [SAS] Ez hülyeség.
  'no-implied-eval': 1, // [SAS] Mivel ez ts-ben egy slow szabály, ezért warninon kell tartani.
  'no-invalid-this': 2, // TODO: options
  'no-iterator': 2,
  'no-lone-blocks': 2,
  'no-loop-func': 2,
  'no-multi-str': 2,
  'no-new': 2,
  'no-new-func': 2,
  'no-new-wrappers': 2,
  'no-octal-escape': 2,
  'no-param-reassign': 2,
  'no-proto': 2,
  'no-restricted-properties': 0, // TODO: Ez NAGYON jó lenne a deprecated kezeléshez!
  'no-return-assign': 2,
  'no-return-await': 2,
  'no-script-url': 2,
  'no-self-compare': 2,
  'no-sequences': 2,
  'no-throw-literal': 2,
  'no-unmodified-loop-condition': 2,
  'no-unused-expressions': [
    2,
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false
    }
  ],
  'no-useless-call': 2,
  'no-useless-concat': 2,
  'no-useless-return': 2,
  'no-void': 2,
  'no-warning-comments': 0, // [SAS] Szoktunk használni TODO-t.
  'prefer-named-capture-group': 0, // Nem érteni regex.
  'prefer-promise-reject-errors': 2,
  'prefer-regex-literals': 2,
  radix: [ 1, 'as-needed' ],
  'require-await': 2,
  'require-unicode-regexp': 0, // Nem tudom még.
  'vars-on-top': 2,
  'wrap-iife': 0, // Nem használunk már IIFE-t.
  yoda: [ 1, 'never' ],

  strict: [ 2, 'never' ], // TS beszúrja a 'use strict'-et.

  'init-declarations': 0, // Ez TS miatt kell így.

  // Nem lehet label és változó egyazon nevű.
  // https://eslint.org/docs/rules/no-label-var
  'no-label-var': 2,

  // Különböző globális függvények, objectek, stb. kitiltása.
  'no-restricted-globals': [
    2,
    {
      name: 'event',
      message: 'Use local parameter instead.'
    },
    {
      name: 'fdescribe',
      message: 'Do not commit fdescribe. Use describe instead.'
    },
    {
      name: 'isFinite',
      message:
        'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite'
    },
    {
      name: 'isNaN',
      message:
        'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan'
    },
    // https://github.com/facebook/create-react-app/tree/main/packages/confusing-browser-globals
    'addEventListener', 'blur', 'close', 'closed', 'confirm', 'defaultStatus', 'defaultstatus', 'external',
    'find', 'focus', 'frameElement', 'frames', 'history', 'innerHeight', 'innerWidth', 'length', 'location',
    'locationbar', 'menubar', 'moveBy', 'moveTo', 'name', 'onblur', 'onerror', 'onfocus', 'onload', 'onresize',
    'onunload', 'open', 'opener', 'opera', 'outerHeight', 'outerWidth', 'pageXOffset', 'pageYOffset', 'parent',
    'print', 'removeEventListener', 'resizeBy', 'resizeTo', 'screen', 'screenLeft', 'screenTop', 'screenX',
    'screenY', 'scroll', 'scrollbars', 'scrollBy', 'scrollTo', 'scrollX', 'scrollY', 'self', 'status',
    'statusbar', 'stop', 'toolbar', 'top'
  ],

  // https://eslint.org/docs/rules/no-shadow
  // TODO: options
  'no-shadow': 1,

  'no-undef-init': 0, // [SAS] Ez ts miatt lehet kikapcsolva kell.
  'no-undefined': 0, // [SAS] Van hogy kell az undefined.

  'no-use-before-define': [
    1,
    {
      functions: true,
      classes: true,
      variables: true
    }
  ],

  // Kell a tömbnél új sor a nyitó és a záró előtt?
  // https://eslint.org/docs/rules/array-bracket-newline
  'array-bracket-newline': [ 1, 'consistent' ],

  // Tömb elemei között kell új sor?
  // https://eslint.org/docs/rules/array-element-newline
  'array-element-newline': 0, // [SAS] Fölösleges.

  // Kell space nyitó után és záró elé?
  // https://eslint.org/docs/rules/block-spacing
  'block-spacing': [ 1, 'always' ],

  camelcase: [
    2,
    {
      properties: 'always',
      ignoreDestructuring: false,
      ignoreImports: false,
      ignoreGlobals: false
    }
  ],

  // Nagybetűvel kezdődjenek a commentek?
  // TODO: jó lenne, de gyakorlatilag tele leszünk új eslint warningokkal.
  // https://eslint.org/docs/rules/capitalized-comments
  'capitalized-comments': [
    0,
    'always',
    {
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true,
      ignorePattern: '@ignore'
    }
  ],

  'comma-spacing': [ 2, { before: false, after: true } ],

  'comma-style': [
    1,
    'last',
    {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false
      }
    }
  ],

  // Computed-property-ben lehet-e szóköz:
  // obj[key], { [key]: a }
  // https://eslint.org/docs/rules/computed-property-spacing
  'computed-property-spacing': [
    1,
    'never',
    {
      enforceForClassMembers: true
    }
  ],

  'consistent-this': 0, // Nem használunk 'that'-et.
  'eol-last': [ 2, 'always' ],
  'func-call-spacing': [ 2, 'never' ],

  'func-name-matching': [
    2,
    'always',
    {
      includeCommonJSModuleExports: false, // [SAS] A webpack configok simán module.exports = function ... -al vannak felvéve, ezért ugatna.
      considerPropertyDescriptor: true
    }
  ],

  'func-names': [ 2, 'as-needed' ],
  'func-style': [ 2, 'declaration', { allowArrowFunctions: true } ], // Ne lehessen változóhoz adni functiont, arra ott az arrow.
  'function-call-argument-newline': [ 2, 'consistent' ],

  // Hány paraméter után legyen kötelező az enter ütés a függvényeknél?
  // https://eslint.org/docs/rules/function-paren-newline
  'function-paren-newline': [ 0, 'consistent' ], // [SAS] Csomó helyen elrontja a zárójezelést, inkább kikapcsolva hagyjuk.

  // Ez az id nem a DOM id, hanem a változó neve
  // TODO
  'id-denylist': 0, // [SAS] [ 'arr', 'array', 'obj', 'object', 'str', 'string', 'boolean', 'bool', 'tmp', 'onClickFn', 'val', 'value' ]
  'id-length': 0,   // [SAS] { min: 3, max: ? }
  'id-match': 0,    // [SAS] Ez szerintem már túl durva volna.
  // --------------

  'implicit-arrow-linebreak': [ 1, 'beside' ],

  // JSX attribútumok sima vagy dupla quote-al legyenek?
  // https://eslint.org/docs/rules/jsx-quotes
  'jsx-quotes': [ 2, 'prefer-double' ],

  'keyword-spacing': [
    2,
    {
      before: true,
      after: true
    }
  ],

  // Hol kommenteljünk?
  // https://eslint.org/docs/rules/line-comment-position
  'line-comment-position': 0, // Teljesen mindegy, hogy fölötte vagy mellette.

  // 'LF' vagy 'CRLF' linebreak legyen?
  // https://eslint.org/docs/rules/linebreak-style
  'linebreak-style': 0, // [SAS] Nem fontos, majd verziókezelő konvertálgat.

  'lines-around-comment': 0, // Mindegy.

  // Egy blokkon belüli maximum mélység.
  'max-depth': [ 1, { max: 4 } ],

  // Hány karakter hosszú lehet egy sor?
  // https://eslint.org/docs/rules/max-len
  'max-len': [ 1, {
    code: 140, // [SAS] Ezt idővel lehetne szigorítani: 100
    ignoreComments: true,
    ignoreUrls: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreRegExpLiterals: true
  } ],

  // Egy fájl maximálisan milyen hosszú lehet?
  // https://eslint.org/docs/rules/max-lines
  // TODO: a formázás a konzolban kidobja az összes sort a 300 fölött. Használhatatlan így.
  'max-lines': 0, // [ 1, { max: 300, skipBlankLines: true, skipComments: true } ]

  // Egy függvény maximálisan milyen hosszú lehet?
  // https://eslint.org/docs/rules/max-lines-per-function
  // TODO
  'max-lines-per-function': 0, // [ 1, { max: 50, skipBlankLines: true, skipComments: true, IIFEs: true } ]

  'max-nested-callbacks': 0, // Ez túl erős, hagyjuk inkább.

  // Mennyi paramétere lehet egy függvénynek?
  'max-params': [ 1, { max: 4 } ],

  // https://eslint.org/docs/rules/max-statements
  // TODO
  'max-statements': 0, // [ 1, 20, { ignoreTopLevelFunctions: true } ]

  'max-statements-per-line': [ 1, { max: 1 } ],

  // Többsoros kommenteket hogyan csináljunk?
  // https://eslint.org/docs/rules/multiline-comment-style
  'multiline-comment-style': 0, // [SAS] Mindegy.

  // Többsoros ternary-t hogyan írjuk?
  // https://eslint.org/docs/rules/multiline-ternary
  'multiline-ternary': 0, // [SAS] Jelenleg mindegy.

  // https://eslint.org/docs/rules/new-cap
  // TODO
  'new-cap': 0, // [ 1, { newIsCap: true, capIsNew: false, newIsCapExceptions: [], properties: true } ]

  'new-parens': [ 2, 'always' ],
  'newline-per-chained-call': [ 1, { ignoreChainWithDepth: 3 } ],
  'no-array-constructor': 2,
  'no-bitwise': 0, // Van hogy kell.
  'no-continue': 2,
  'no-inline-comments': 0,
  'no-lonely-if': 0, // Vannak kivételek :)

  // TODO: allowSamePrecedence
  'no-mixed-operators': [
    1,
    {
      allowSamePrecedence: true // [SAS] Itt a false talán durva volna, de meg lehet nézni.
    }
  ],

  'no-multi-assign': 2,
  'no-negated-condition': 1,
  'no-nested-ternary': 0, // UNICORN
  'no-new-object': 2,
  'no-plusplus': 0, // [SAS] Szeretek így inkrementálni.

  // https://eslint.org/docs/rules/no-restricted-syntax
  // TODO
  'no-restricted-syntax': 0,

  'no-tabs': 2,
  'no-ternary': 0, // Lol?
  'no-trailing-spaces': [
    2,
    {
      skipBlankLines: false,
      ignoreComments: false
    }
  ],
  'no-underscore-dangle': 2, // [SAS] Vannak option-ök, de nem kell, mert minden undescore-t tiltunk.
  'no-unneeded-ternary': 1,
  'no-whitespace-before-property': 1,
  'nonblock-statement-body-position': 0, // [SAS] A 'curly' megoldja és single-line -t NEM csinálunk!
  'object-curly-newline': 0, // Fölösleges.
  'object-curly-spacing': [
    1,
    'always',
    {
      arraysInObjects: true,
      objectsInObjects: true
    }
  ],
  'object-property-newline': 0, // Fölösleges.
  'one-var': [ 2, 'never' ], // [SAS] Nem használunk ilyet.
  'one-var-declaration-per-line': 0, // [SAS] Nem használunk multi-declarationt, így nem kell.
  'operator-assignment': [ 1, 'always' ],
  'operator-linebreak': [ 1, 'after', { overrides: { '?': 'ignore', ':': 'ignore' } } ],
  'prefer-exponentiation-operator': 1,
  'prefer-object-spread': 1,
  'quote-props': [ 1, 'as-needed' ],
  quotes: [
    1,
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: false
    }
  ],
  semi: [ 2, 'never' ],
  'semi-spacing': 0, // Mivel nincs semicolon, nem kell.
  'semi-style': 0, // Szintén.
  'sort-keys': 0, // Fölösleges.
  'sort-vars': 0, // Nem.
  'space-in-parens': [ 1, 'never' ],
  'space-infix-ops': [ 2, { int32Hint: false } ],
  'space-unary-ops': [ 1, { words: true, nonwords: false } ],
  'switch-colon-spacing': [ 1, { after: true, before: false } ],
  'template-tag-spacing': [ 1, 'never' ],
  'unicode-bom': [ 1, 'never' ],
  'wrap-regex': 0, // Nekem mindegy, ha zárójelben van vagy nincs.

  // Arrow function-nál kell return vagy sem?
  // https://eslint.org/docs/rules/arrow-body-style
  'arrow-body-style': 0, // [SAS] Jó nekünk a return is.

  // require parens in arrow function arguments
  // https://eslint.org/docs/rules/arrow-parens
  'arrow-parens': [ 1, 'always' ],
  'arrow-spacing': [ 1, { before: true, after: true } ],
  'generator-star-spacing': [ 1, 'after' ],
  'no-confusing-arrow': [ 1, { allowParens: true } ],
  'no-duplicate-imports': 0, // Ez TS miatt lehet kell sajnos :/
  'no-restricted-exports': 0, // Nem használjuk.
  'no-restricted-imports': 0, // Nem használjuk.
  'no-useless-computed-key': 1,
  'no-useless-constructor': 2,
  'no-useless-rename': 1,
  'object-shorthand': [ 1, 'always', { avoidQuotes: true } ],
  'prefer-arrow-callback': 1,

  'prefer-const': [
    1,
    {
      ignoreReadBeforeAssign: true,
      destructuring: 'any'
    }
  ],

  'prefer-destructuring': [
    1,
    {
      VariableDeclarator: {
        array: true,
        object: true
      },
      AssignmentExpression: {
        array: true,

        // [Peti]: object destructuring-nál mikor egy let változót kell felülcsapni, akkor azt eddig így kellett:
        // let a:number; <-- kötelező a pontos vessző
        // ({ a } = { a: 20 })
        // A szabály false-ra állítása miatt nem kötelező let változó felülcsapásánál object destructuring-ot használni
        // let a: number
        // a = { a: 20 }.a <-- Engedi
        object: false
      }
    },
    {
      enforceForRenamedProperties: false
    }
  ],

  'prefer-numeric-literals': 0, // Használunk parseInt-et.
  'prefer-rest-params': 1,
  'prefer-spread': 1,
  'prefer-template': 1,
  'rest-spread-spacing': [ 1, 'never' ],
  'sort-imports': 0, // Fölösleges.
  'symbol-description': 1,
  'yield-star-spacing': 0, // Nem használunk yield-et.

  // v7.4
  'no-promise-executor-return': 0, // TODO
  'no-unreachable-loop': 1,

  'no-unsafe-optional-chaining': 1,
  'no-nonoctal-decimal-escape': 1
}
