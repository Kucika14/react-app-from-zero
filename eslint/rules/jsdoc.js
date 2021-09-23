// ---------- JSDOC ---------
// https://github.com/gajus/eslint-plugin-jsdoc
// -----------------------------

// 0 - disabled
// 1 - warning
// 2 - error

// Rengeteg olyan szabály van, ami majd jól jöhet, ahogy beleszokunk a jsdoc-ba... de egyelőre kezdjük kicsiben.:)

module.exports = {
  'jsdoc/check-access': 0, // Nincs rá szükségünk a Typescript miatt.
  'jsdoc/check-alignment': 1, // Behúzásokat nézi.
  'jsdoc/check-examples': 0, // Példák csekkolása... én kihagynám.
  'jsdoc/check-indentation': 1, // Behúzás, egyelőre nem kell szétparaméterezni, be lehet lőni csomó mindent.

  // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-line-alignment
  // TODO: elég hardcore align szabály, NEKEM TETSZIK.:B
  // Elég sok issue van vele kapcsolatban... valami nem stimt...
  'jsdoc/check-line-alignment': 0,

  'jsdoc/check-param-names': [ 1, {
    enableFixer: true,
    checkDestructured: true,
    checkRestProperty: true
  } ],

  'jsdoc/check-property-names': [ 1, { enableFixer: true } ],
  'jsdoc/check-syntax': 0, // Syntax checker, egyelőre nem kell.
  'jsdoc/check-tag-names': 0, // Egyelőre nem kell.
  'jsdoc/check-types': 0, // Típusok ellenőrzése, egyelőre nem kell, DE szétparaméterezhető.
  'jsdoc/check-values': 0, // @version, @since, @license, @author checker, EGYELŐRE ez sem kell.
  'jsdoc/empty-tags': 1, // Bizonyos tag-ekhez ne kerüljön semmi.
  'jsdoc/implements-on-classes': [ 1, { contexts: [ 'any' ] } ], // Reports an issue with any non-constructor function using @implements.
  'jsdoc/match-description': 0, // Enforces a regular expression pattern on descriptions. Egyelőre ez is túmács.
  'jsdoc/match-name': 0, // Nincs rá szükségünk.

  'jsdoc/multiline-blocks': [ 1, {
    noZeroLineText: true,
    noFinalLineText: true,
    noSingleLineBlocks: false,
    singleLineTags: [ 'lends', 'type' ],
    noMultilineBlocks: false,
    multilineTags: [ '*' ],
    allowMultipleTags: true
  } ],

  'jsdoc/newline-after-description': [ 1, 'never' ], // Új sor kikényszerítése a description után. Szerintem nem kell.
  'jsdoc/no-bad-blocks': 1,
  'jsdoc/no-defaults': 0, // Egyelőre nem kell.
  'jsdoc/no-missing-syntax': 0, // Egyelőre nem kell.
  'jsdoc/no-restricted-syntax': 0, // Egyelőre nem kell.
  'jsdoc/no-multi-asterisks': [ 1, { preventAtEnd: false, preventAtMiddleLines: false } ],
  'jsdoc/require-asterisk-prefix': [ 1, 'always' ],
  'jsdoc/no-types': 0, // Nem kell.

  // Checks that types in jsdoc comments are defined. This can be used to check unimported types.
  // Egyelőre bekapcsolom, meglátjuk... Ez is szétparaméterezhető.
  'jsdoc/no-undefined-types': [
    1,
    {
      definedTypes: [
        'unknown',
        'TVoidCallback',
        'TUnknownObject',
        'TAnyObject',
        'TUnknownCallback',
        'TEventCallback'
      ]
    }
  ],

  'jsdoc/require-description': 1, // Requires that all functions have a description.

  // Requires that block description, explicit @description, and @param/@returns tag descriptions are written in complete sentences, i.e.,
  'jsdoc/require-description-complete-sentence': 1,
  'jsdoc/require-example': 0, // Példák nem kellenek.
  'jsdoc/require-file-overview': 0, // All files have a @file, @fileoverview, or @overview tag. Egyelőre túmács.

  'jsdoc/require-hyphen-before-param-description': 0, // Nem kell.

  // Checks for presence of jsdoc comments, on class declarations as well as functions. HARDCORE, egyelőre default options-szel. Szétparaméterezhető.
  'jsdoc/require-jsdoc': [ 1, {
    enableFixer:       false, // automatikus javítás
    checkConstructors: false, // constructorok csekkolása
    checkGetters:      false, // getterek
    checkSetters:      false, // setterek
    // Mire legyen érvényes:
    require: {
      ArrowFunctionExpression: true,
      FunctionDeclaration:     true, // egyelőre csak függvényeknél
      FunctionExpression:      false,
      ClassDeclaration:        false,
      MethodDefinition:        true,
      ClassExpression:         false
    }
  } ],

  'jsdoc/require-param': [ 1, {
    enableRestElementFixer: true,
    checkRestProperty: false,
    checkDestructured: true,
    enableFixer: true
  } ],

  'jsdoc/require-param-description': 1, // Kötelező @param description.
  'jsdoc/require-param-name': 1, // Kötelező megadni a @param nevét.
  'jsdoc/require-param-type': 1, // Kötelező megadni a @param típusát.

  // Requires that all @typedef and @namespace tags have @property when their type is a plain object, Object, or PlainObject.
  'jsdoc/require-property': 0, // Egyelőre nem kell.

  // // Requires that each @property tag has a description value.
  'jsdoc/require-property-description': 0, // Egyelőre nem kell.

  // Requires that all function @property tags have names.
  'jsdoc/require-property-name': 0, // Egyelőre nem kell.

  // Requires that each @property tag has a type value.
  'jsdoc/require-property-type': 1, // Egyelőre nem kell.

  // Requires that returns are documented. kötelező @returns minden function-höz.
  'jsdoc/require-returns': [ 1, { exemptedBy: [ 'inheritdoc', 'Promise<void>', 'Promise<void[]>' ] } ],

  // Requires a return statement (or non-undefined Promise resolve value) in function bodies if a @returns tag (without a void or undefined type)
  // is specified in the function's jsdoc comment.
  'jsdoc/require-returns-check': [ 1, { exemptAsync: true } ],

  // Requires that the @returns tag has a description value.
  // The error will not be reported if the return value is void or undefined or if it is Promise<void> or Promise<undefined>.
  'jsdoc/require-returns-description': 1,

  // Requires that @returns tag has type value.
  'jsdoc/require-returns-type': 1,

  // Requires that throw statements are documented.
  'jsdoc/require-throws': 1,
  'jsdoc/require-yields': 1, // Nem használunk yield-et, de maradhat bekapcsolva.
  'jsdoc/require-yields-check': 1, // Nem használunk yield-et, de maradhat bekapcsolva.
  'jsdoc/tag-lines': [ 0, 'never' ], // Tagek közti leütés.

  // Requires all types to be valid JSDoc, Closure, or TypeScript compiler types without syntax errors.
  'jsdoc/valid-types': 1
}
