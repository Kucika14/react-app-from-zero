// ----------- Unicorn -----------
// https://github.com/sindresorhus/eslint-plugin-unicorn
// -------------------------------

module.exports = {
  'unicorn/better-regex': 1,
  'unicorn/catch-error-name': 1,
  'unicorn/consistent-function-scoping': [ 1, { checkArrowFunctions: false } ],
  'unicorn/custom-error-definition': 1,
  'unicorn/error-message': 1,
  'unicorn/escape-case': 1,
  'unicorn/expiring-todo-comments': 0, // Nem kell.
  'unicorn/explicit-length-check': 0, // a magic-number miatt jó (a.length) -re vizsgálni
  'unicorn/filename-case': [ 0, { // TODO: ez majd kell!
    cases: {
      camelCase: true,
      pascalCase: true
    }
  } ],
  'unicorn/import-index': 1,
  'unicorn/new-for-builtins': 1,
  'unicorn/no-abusive-eslint-disable': 0, // Néha ez jól jön sajnos
  'unicorn/no-instanceof-array': 1,
  'unicorn/no-console-spaces': 1,
  'unicorn/no-document-cookie': 1,
  'unicorn/no-array-callback-reference': 0,
  'unicorn/no-for-loop': 0, // sajnos csak azt irja, hogy for-of -ot használja
  'unicorn/no-hex-escape': 1,
  'unicorn/no-keyword-prefix': [
    1,
    {
      checkProperties: true,
      disallowedPrefixes: [
        'className', // TSX-nél használjuk
        'newNode'    // DOM műveleteknél használjuk
      ]
    }
  ],
  'unicorn/no-nested-ternary': 0, // Tudjuk mit csinálunk :)
  'unicorn/no-new-buffer': 1,
  'unicorn/no-null': 0, // Hülyeség
  'unicorn/no-process-exit': 0, // Tudom mit csinálok
  'unicorn/no-array-reduce': 0, // Hülyeség
  'unicorn/no-unreadable-array-destructuring': 0, // kell a [ , , x ] = arr
  'unicorn/no-unsafe-regex': 0, // Ez nagyon erős, nincs rá autofix és magunktól inkább nem optimalizálunk regexet.
  'unicorn/no-unused-properties': 1,
  'unicorn/no-zero-fractions': 1,
  'unicorn/number-literal-case': 1,
  'unicorn/prefer-add-event-listener': 1,
  'unicorn/prefer-dom-node-dataset': 0, // Szeretjük a get/setAttribute-ot
  'unicorn/prefer-keyboard-event-key': 1,
  'unicorn/prefer-array-flat-map': 1,
  'unicorn/prefer-includes': 1,
  'unicorn/prefer-modern-dom-apis': 0, // Jó a régi is
  'unicorn/prefer-negative-index': 1,
  'unicorn/prefer-dom-node-append': 0, // nekünk jó az appendChild
  'unicorn/prefer-dom-node-remove': 0, // nekünk jó a removeChild
  'unicorn/prefer-number-properties': 0, // nejünk jó a globális is
  'unicorn/prefer-optional-catch-binding': 0, // nálunk el kell kapni az errort
  'unicorn/prefer-query-selector': 1,
  'unicorn/prefer-reflect-apply': 0, // Nem használunk apply-t
  'unicorn/prefer-string-replace-all': 0, // Replace-t használunk
  'unicorn/prefer-set-has': 0, // Jó nekünk az Array.includes is
  'unicorn/prefer-spread': 0, // jó nekünk az Array.from
  'unicorn/prefer-string-starts-ends-with': 1,
  'unicorn/prefer-dom-node-text-content': 1,
  'unicorn/prefer-string-trim-start-end': 1,
  'unicorn/prefer-type-error': 1,
  'unicorn/string-content': 0, // Haggyál már
  'unicorn/throw-new-error': 1,
  'unicorn/no-useless-undefined': 1,
  'unicorn/prefer-string-slice': 1,

  // v21.0.0
  'unicorn/prefer-array-find': 1,
  'unicorn/no-object-as-default-parameter': 1,

  // v22.0.0
  'unicorn/import-style': 0, // Erre van az import plugin

  // v23.0.0
  'unicorn/numeric-separators-style': 0, // nincs szükség rá
  'unicorn/prefer-math-trunc': 0, // nincs szükség rá
  'unicorn/prefer-ternary': [ 1, 'always' ], // Itt lehetne 'only-single-line' is, de a defaultot használjuk

  // v24.0.0
  'unicorn/no-lonely-if': 1,
  'unicorn/empty-brace-spaces': 1,
  'unicorn/prefer-date-now': 1,

  // v25.0.0
  'unicorn/prefer-array-some': 0, // Nem kell
  'unicorn/prefer-default-parameters': 1,

  // v26.0.0
  'unicorn/no-new-array': 1,
  'unicorn/prefer-array-index-of': 1,
  'unicorn/prefer-regexp-test': 1,
  'unicorn/consistent-destructuring': 1,

  // v27.0.0
  'unicorn/no-array-for-each': 0, // Mi inkább forEach-elünk
  'unicorn/no-array-push-push': 1,
  'unicorn/no-this-assignment': 1,

  // v29.0.0
  'unicorn/no-static-only-class': 0, // Dehogynem.
  'unicorn/prefer-array-flat': 0, // Jó a saját utilsos flatten

  // v30.0.0
  'unicorn/prefer-switch': 0, // Nem kell

  // v31.0.0
  'unicorn/prefer-node-protocol': 0, // webpack köhög miatta, hagyjuk
  'unicorn/prefer-module': 0, // natív nodejs környezetben require-t is használunk

  // v32.0.1
  'unicorn/prevent-abbreviations': 0,

  // v33.0.0
  'unicorn/require-array-join-separator': 1,
  'unicorn/require-number-to-fixed-digits-argument': 1,
  'unicorn/prefer-prototype-methods': 0, // nem használjuk
  'unicorn/prefer-object-has-own': 0, // sehol sem használjuk

  // v34.0.0
  'unicorn/no-array-method-this-argument': 1,
  'unicorn/require-post-message-target-origin': 1,
  'unicorn/prefer-top-level-await': 0, // Nem tudom, hogy a rendszer
  'unicorn/prefer-at': 0, // Nem kell támogatja egy böngésző sem.

  // v35.0.0
  'unicorn/prefer-object-from-entries': 0, // Jó nekünk a reduce.
  'unicorn/no-useless-length-check': 1,
  'unicorn/no-useless-spread': 1,

  // v36.0.0
  'unicorn/no-useless-fallback-in-spread': 1,
  'unicorn/no-invalid-remove-event-listener': 2
}
