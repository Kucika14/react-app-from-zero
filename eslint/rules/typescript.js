// ----------- Typescript -----------
// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
//
// Airbnb: https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/lib/shared.js
//
// ----------------------------------

const eslintConfig = require('./eslint.js')

function setRule (key, definition) {
  if (!eslintConfig[key]) {
    throw new TypeError(`[ESLINT] nincs ilyen kulcs: ${ key }`)
  }

  const rule = eslintConfig[key]

  if (!definition) {
    return rule
  }

  const res = [
    rule[0],
    {
      ...rule[1],
      ...definition
    }
  ]

  return res
}

module.exports = {
  // A sima eslint indent szabályt extendálja: mindent tud, amit az
  // https://eslint.org/docs/rules/indent
  // SLOW
  '@typescript-eslint/indent': setRule('indent'),

  '@typescript-eslint/adjacent-overload-signatures': 2,

  '@typescript-eslint/array-type': [
    1,
    {
      default: 'array',
      readonly: 'array'
    }
  ],

  '@typescript-eslint/await-thenable': 2,

  '@typescript-eslint/ban-ts-comment': [
    1,
    {
      'ts-expect-error': false,
      'ts-ignore': 'allow-with-description',
      'ts-nocheck': false,
      'ts-check': false,
      minimumDescriptionLength: 3
    }
  ],

  '@typescript-eslint/ban-types': 2,

  '@typescript-eslint/class-literal-property-style': 0, // Nem számít, jó nekünk a readonly is, sőt!
  '@typescript-eslint/consistent-type-assertions': 2,

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
  //
  // TODO: El kéne dönteni, hogy ezt kikapcsolva hagyjuk-e, de akkor megvan a veszély,
  //       hogy össze-vissza csináljuk a definiciókat, vagy fixáljuk interface-re vagy type-ra.
  //
  // [SAS]: én az interface-t preferálnám mindenhol, viszont ez magával vonja, hogy az ÖSSZES projectünk és összes játékunkban át kell majd írni dolgokat.
  //        Update: NEM lehet csak interface-t használni, mert a [key in TDifficulty] -t interface-ben nem engedi, csak type-ban, így javaslom, hogy maradjon vegyes
  //                és kikapcsolt állapotban ez a szabály.
  //
  '@typescript-eslint/consistent-type-definitions': [ 0, 'interface' ],

  '@typescript-eslint/explicit-function-return-type': [
    1,
    {
      allowExpressions: true, // TODO: ezt itt false-ra rakjuk!
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: false,
      allowDirectConstAssertionInArrowFunctions: false,
      allowConciseArrowFunctionExpressionsStartingWithVoid: false
    }
  ],

  '@typescript-eslint/explicit-member-accessibility': [
    1,
    {
      accessibility: 'explicit',
      overrides: {
        parameterProperties: 'off',
        constructors:        'explicit',
        properties:          'explicit',
        accessors:           'explicit',
        methods:             'explicit'
      }
    }
  ],

  '@typescript-eslint/explicit-module-boundary-types': [
    1,
    {
      allowDirectConstAssertionInArrowFunctions: true,
      allowArgumentsExplicitlyTypedAsAny:        true,
      allowTypedFunctionExpressions:             true,
      allowHigherOrderFunctions:                 true,
      allowedNames:                              []
    }
  ],

  '@typescript-eslint/member-delimiter-style': [
    1,
    {
      singleline: {
        delimiter: 'comma',
        requireLast: false
      },
      multiline: {
        delimiter: 'none',
        requireLast: false
      }
    }
  ],

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
  '@typescript-eslint/member-ordering': [
    1,
    {
      classes: [
        // Index signature
        'signature', // [Z: string]: any;

        // Fields
        'public-static-field',
        'protected-static-field',
        'private-static-field',

        'public-decorated-field',
        'protected-decorated-field',
        'private-decorated-field',

        'public-instance-field',
        'protected-instance-field',
        'private-instance-field',

        'public-abstract-field',
        'protected-abstract-field',
        'private-abstract-field',

        'public-field',
        'protected-field',
        'private-field',

        'static-field',
        'instance-field',
        'abstract-field',

        'decorated-field',

        // Constructors
        'public-constructor',
        'protected-constructor',
        'private-constructor',

        // Methods
        'public-static-method',
        'protected-static-method',
        'private-static-method',

        'public-decorated-method',
        'protected-decorated-method',
        'private-decorated-method',

        'public-instance-method',
        'protected-instance-method',
        'private-instance-method',

        'public-abstract-method',
        'protected-abstract-method',
        'private-abstract-method',

        'public-method',
        'protected-method',
        'private-method',

        'static-method',
        'instance-method',
        'abstract-method',

        'decorated-method'
      ],
      interfaces: [
        'signature',
        'field',
        'method',
        'constructor'
      ],
      typeLiterals: [
        'signature',
        'field',
        'method',
        'constructor'
      ]
    }
  ],

  '@typescript-eslint/method-signature-style': [ 1, 'property' ],

  '@typescript-eslint/naming-convention': [
    1,
    ...require('./namingConvention/default.js'),
    ...require('./namingConvention/variable.js'),
    ...require('./namingConvention/function.js'),
    ...require('./namingConvention/parameter.js'),
    ...require('./namingConvention/property.js'),
    ...require('./namingConvention/parameterProperty.js'),
    ...require('./namingConvention/method.js'),
    ...require('./namingConvention/accessor.js'),
    ...require('./namingConvention/enumMember.js'),
    ...require('./namingConvention/class.js'),
    ...require('./namingConvention/classProperty.js'),
    ...require('./namingConvention/interface.js'),
    ...require('./namingConvention/typeAlias.js'),
    ...require('./namingConvention/enum.js'),
    ...require('./namingConvention/typeParameter.js')
  ],

  '@typescript-eslint/no-base-to-string': 0, // Nem kell.
  '@typescript-eslint/no-dynamic-delete': 2,
  '@typescript-eslint/no-empty-interface': [
    2,
    {
      // Engedünk úgy extendálni, hogy nem adunk hozzá semmi újat.
      allowSingleExtends: true
    }
  ],
  '@typescript-eslint/no-explicit-any': 1,
  '@typescript-eslint/no-extra-non-null-assertion': 1,

  '@typescript-eslint/no-extraneous-class': [
    1,
    {
      allowConstructorOnly: false,
      allowWithDecorator:   false,
      allowStaticOnly:      true, // Lehet static osztályunk is.
      allowEmpty:           true  // Lehet üres osztályunk is.
    }
  ],

  '@typescript-eslint/no-floating-promises': 0, // A Promise-al való munka gyakorlatilag használhatatlan lesz a sok catch-től. :/
  '@typescript-eslint/no-for-in-array': 0, // Szoktuk használni.
  '@typescript-eslint/no-implied-eval': setRule('no-implied-eval'), // SLOW
  '@typescript-eslint/no-inferrable-types': [
    1,
    {
      // Ez túl hardcore volna.
      ignoreParameters: false,
      // TODO: ezen el lehet gondolkozni.
      ignoreProperties: false
    }
  ],
  '@typescript-eslint/no-invalid-void-type': 0, // TODO: jelenleg nem működik Promise-al jól
  '@typescript-eslint/no-misused-new': 2,

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
  // TODO
  // [SAS] ezt lehet be kéne kapcsolni?
  '@typescript-eslint/no-misused-promises': 0,

  '@typescript-eslint/no-namespace': 2,
  '@typescript-eslint/no-non-null-asserted-optional-chain': 1,
  '@typescript-eslint/no-non-null-assertion': 0, // Classok field definícióinál használjuk.
  '@typescript-eslint/no-parameter-properties': 1,
  '@typescript-eslint/no-require-imports': 0, // Van hogy kell a require.
  '@typescript-eslint/no-this-alias': [
    2,
    {
      allowDestructuring: true,
      allowedNames: []
    }
  ],
  '@typescript-eslint/no-throw-literal': 2,
  '@typescript-eslint/no-type-alias': [
    1,
    {
      allowConditionalTypes: 'never',
      allowConstructors:     'never',
      allowMappedTypes:      'always',
      allowTupleTypes:       'always',
      allowCallbacks:        'always',
      allowLiterals:         'always',
      allowAliases:          'always'
    }
  ],
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 1,
  '@typescript-eslint/no-unnecessary-condition': [ 0, { allowConstantLoopConditions: false } ], // TODO: v3.10 óta hülyeségeket is jelez, teljesen használhatatlan
  '@typescript-eslint/no-unnecessary-qualifier': 2,
  '@typescript-eslint/no-unnecessary-type-arguments': 1,
  '@typescript-eslint/no-unnecessary-type-assertion': 1,

  // TODO: ezek fontosak lennének, de jelenleg csak tönkreteszik a jsx-et
  //       [SAS] Kell tenni velük egy próbát, mert rég volt, hogy megnéztük őket.
  '@typescript-eslint/no-unsafe-assignment': 0,
  '@typescript-eslint/no-unsafe-call': 0,
  '@typescript-eslint/no-unsafe-member-access': 0,
  '@typescript-eslint/no-unsafe-return': 0,
  '@typescript-eslint/no-unsafe-argument': 0,
  // ---

  '@typescript-eslint/no-var-requires': 0, // Használunk require-t ts környezetben is webpack miatt.
  '@typescript-eslint/prefer-as-const': 1,
  '@typescript-eslint/prefer-for-of': 1,
  '@typescript-eslint/prefer-function-type': 1,
  '@typescript-eslint/prefer-includes': 1,
  '@typescript-eslint/prefer-namespace-keyword': 2,
  '@typescript-eslint/prefer-nullish-coalescing': [
    1,
    {
      ignoreMixedLogicalExpressions: true, // by default
      ignoreConditionalTests:        true  // by default
    }
  ],
  '@typescript-eslint/prefer-optional-chain': 1,
  '@typescript-eslint/prefer-readonly': [ 1, { onlyInlineLambdas: false } ],

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
  // TODO
  // [SAS] Sajnos használhatatlan, mert HTMLElement-et, Event-et, stb. is bejelez és nem lehet ignorálni.
  '@typescript-eslint/prefer-readonly-parameter-types': [
    0,
    {
      checkParameterProperties: true,
      ignoreInferredTypes: true,
      treatMethodsAsReadonly: true
    }
  ],

  '@typescript-eslint/prefer-reduce-type-parameter': 0, // NEM!
  '@typescript-eslint/prefer-regexp-exec': 1,
  '@typescript-eslint/prefer-string-starts-ends-with': 1,

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
  // TODO
  '@typescript-eslint/prefer-ts-expect-error': 0,

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
  // TODO
  '@typescript-eslint/promise-function-async': 0,

  '@typescript-eslint/require-array-sort-compare': 1,
  '@typescript-eslint/restrict-plus-operands': 1,

  '@typescript-eslint/restrict-template-expressions': [
    1,
    {
      allowBoolean: true,
      allowNullish: true,
      allowNumber:  true,
      allowAny:     true,
      allowRegExp:  false
    }
  ],

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
  // TODO
  // [SAS] Túlságosan verbose-á teszi a kódot, de lehet érdemes volna bevezetni.
  '@typescript-eslint/strict-boolean-expressions': 0,

  '@typescript-eslint/switch-exhaustiveness-check': 1,
  '@typescript-eslint/triple-slash-reference': 2,

  '@typescript-eslint/type-annotation-spacing': [
    1,
    {
      before: false,
      after: true,
      overrides: {
        arrow: {
          before: true, after: true
        }
      }
    }
  ],

  '@typescript-eslint/typedef': 0, // Nincs rá szükségünk.
  '@typescript-eslint/unbound-method': 1,
  '@typescript-eslint/unified-signatures': 1,

  // --- Extension rules
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules

  '@typescript-eslint/brace-style': setRule('brace-style'),

  '@typescript-eslint/comma-spacing': setRule('comma-spacing'),
  '@typescript-eslint/default-param-last': 2,

  '@typescript-eslint/dot-notation': setRule('dot-notation', {
    allowPrivateClassPropertyAccess: false,
    allowProtectedClassPropertyAccess: false
  }),

  '@typescript-eslint/func-call-spacing': setRule('func-call-spacing'),
  '@typescript-eslint/init-declarations': 0, // Van olyan, hogy utólag adunk neki értéket.
  '@typescript-eslint/keyword-spacing': setRule('keyword-spacing'),
  '@typescript-eslint/lines-between-class-members': setRule('lines-between-class-members'),
  '@typescript-eslint/no-array-constructor': 2,
  '@typescript-eslint/no-dupe-class-members': 2, // Nem használunk overload-ot.
  '@typescript-eslint/no-empty-function': setRule('no-empty-function'),
  '@typescript-eslint/no-extra-parens': 0, // Nem kell, mert nem lehet úgy belőni, ahogy nekünk jó legyen.
  '@typescript-eslint/no-extra-semi': 2,

  // TODO
  // [SAS] Mutatja a class-ban az arrow-nál, hogy hiba. Inkább kikapcsoltam.
  '@typescript-eslint/no-invalid-this': 0,

  '@typescript-eslint/no-magic-numbers': [ 1, {
    // ES
    //
    // https://eslint.org/docs/rules/no-magic-numbers#options
    ignore: [ 0, 1, -1 ], // [SAS]
    ignoreArrayIndexes: true,
    ignoreDefaultValues: true,
    enforceConst: false, // Erre nincs szükség, mert úgyis constot használunk.
    detectObjects: false,
    //
    // TS
    //
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md#options
    ignoreEnums: true,
    ignoreNumericLiteralTypes: true,
    ignoreReadonlyClassProperties: true
  } ],

  '@typescript-eslint/no-unused-expressions': setRule('no-unused-expressions'),
  '@typescript-eslint/no-unused-vars': setRule('no-unused-vars'),
  '@typescript-eslint/no-use-before-define': setRule('no-use-before-define', {
    enums: true,
    typedefs: true,
    ignoreTypeReferences: false
  }),

  '@typescript-eslint/no-useless-constructor': 2,
  '@typescript-eslint/quotes': setRule('quotes'),
  '@typescript-eslint/require-await': setRule('require-await'),
  '@typescript-eslint/return-await': 2,
  '@typescript-eslint/semi': setRule('semi'),
  '@typescript-eslint/space-before-function-paren': setRule('space-before-function-paren'),
  '@typescript-eslint/prefer-enum-initializers': 1,
  '@typescript-eslint/ban-tslint-comment': 1,

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
  // TODO
  // [SAS]: most még nem jó, de 4-es TS-től lehet elfogadja
  '@typescript-eslint/no-implicit-any-catch': 0,

  '@typescript-eslint/no-loss-of-precision': 1,
  '@typescript-eslint/no-confusing-non-null-assertion': 1,
  '@typescript-eslint/prefer-literal-enum-member': 1,

  '@typescript-eslint/no-redeclare': setRule('no-redeclare', {
    ignoreDeclarationMerge: true
  }),

  '@typescript-eslint/no-loop-func': 2,

  '@typescript-eslint/comma-dangle': setRule('comma-dangle', {
    enums: 'never',
    generics: 'never',
    tuples: 'never'
  }),

  // Record<string, unknown> ---> type Foo = { [key: string]: unknown }
  '@typescript-eslint/consistent-indexed-object-style': [ 1, 'index-signature' ],

  '@typescript-eslint/space-infix-ops': setRule('space-infix-ops'),
  '@typescript-eslint/no-unnecessary-type-constraint': 1,

  '@typescript-eslint/no-confusing-void-expression': [
    1,
    {
      ignoreVoidOperator: false,
      ignoreArrowShorthand: true
    }
  ],

  '@typescript-eslint/non-nullable-type-assertion-style': 0, // Jó nekünk a verbose casting is.
  '@typescript-eslint/sort-type-union-intersection-members': 0, // Fölösleges
  '@typescript-eslint/object-curly-spacing': setRule('object-curly-spacing'),
  '@typescript-eslint/no-duplicate-imports': 0, // Van a sima eslint-nek is, azt extendálná ez, de az import-pluginnek is van sajátja, azt használjuk jelenleg

  // TODO
  // [SAS] jelenleg hülyeségeket is jelez és össze kell húzni a sima eslint no-shadow -al, setRule-al.
  '@typescript-eslint/no-shadow': [
    0,
    {
      // https://eslint.org/docs/rules/no-shadow#options
      builtinGlobals: true,
      hoist: 'functions',

      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md#options
      ignoreTypeValueShadow: false, // NEM lehet ugyanolyan nevű változónk, mint típusunk
      ignoreFunctionTypeParameterNameValueShadow: false
    }
  ],

  '@typescript-eslint/consistent-type-imports': [ 1, { prefer: 'type-imports', disallowTypeAnnotations: true } ],

  // v4.29.0
  '@typescript-eslint/prefer-return-this-type': 0,

  // v4.31.0
  '@typescript-eslint/no-meaningless-void-operator': [ 1, { checkNever: false } ],

  '@typescript-eslint/padding-line-between-statements': setRule(
    'padding-line-between-statements',
    { blankLine: 'always', prev: '*', next: [ 'interface' ] }
    //
    // TODO: type, de ennek továbbra is mennie kell:
    //
    // export const ENV_BUILDING_TYPES = [ 1, 6, 7, 8, 9 ] as const
    // export type TEnvBuildingType = typeof ENV_BUILDING_TYPES[number]
    //
  )
}
