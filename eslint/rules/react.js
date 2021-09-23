// ----------- React -----------
// https://github.com/yannickcr/eslint-plugin-react
// -----------------------------

module.exports = {
  'react/display-name': [ 0, { ignoreTranspilerName: false } ], // Nem reactozunk.

  'react/forbid-prop-types': [
    0,
    {
      forbid: [ 'any', 'array', 'object' ],
      checkContextTypes: true,
      checkChildContextTypes: true
    }
  ],

  'react/forbid-dom-props': [ 0, { forbid: [] } ], // Nem kell.
  'react/no-danger': 0, // Tudjuk mit csinálunk :)
  'react/react-in-jsx-scope': 0, // Nem, mert a wp PluginProvide megoldja.
  'react/destructuring-assignment': 0, // Nem kell.
  'react/prop-types': 0, // Nincs propTypes.
  'react/sort-prop-types': 0, // Nálunk nincs propTypes.
  'react/no-deprecated': 0, // Nem reactozunk.

  // Nincsenek lifecycle metódusaink / Nem reactozunk
  'react/no-did-mount-set-state': 0,
  'react/no-did-update-set-state': 0,
  'react/no-will-update-set-state': 0,
  'react/no-direct-mutation-state': 0,
  // -----------

  'react/no-is-mounted': 2, // Ezt azért meghagyjuk.
  'react/no-multi-comp': 0, // Van olyan, hogy kisebb komponenseket ugyanabban a fájlban deklarálunk.
  'react/no-set-state': 0, // Nincs state.
  'react/no-string-refs': 0, // Nincs ref.
  'react/no-unknown-property': 2,
  'react/prefer-es6-class': 0, // Nem kell. [ 2, 'always' ],
  'react/prefer-stateless-function': 0,
  'react/require-render-return': 0,
  'react/self-closing-comp': 2,
  'react/sort-comp': 0,
  'react/no-render-return-value': 0,
  'react/require-optimization': 0,
  'react/no-find-dom-node': 0,
  'react/forbid-component-props': 0,
  'react/forbid-elements': 0,
  'react/no-danger-with-children': 2,
  'react/no-unused-prop-types': 0,
  'react/style-prop-object': 2,
  'react/no-unescaped-entities': 2,
  'react/no-children-prop': 2,
  'react/no-array-index-key': 2,
  'react/require-default-props': 0, // Nincs propTypes.
  'react/forbid-foreign-prop-types': 0, // Ugyanaz.
  'react/void-dom-elements-no-children': 2,
  'react/default-props-match-prop-types': 0, // Nincs propTypes. [ 2, { allowRequiredDefaults: false } ],
  'react/no-redundant-should-component-update': 0, // Nincs.
  'react/no-unused-state': 0, // Nincs.

  // Ezt nem fogjuk tudni használni, mert csomó property-nk van, ami önmagában boolean
  'react/boolean-prop-naming': [
    0,
    {
      propTypeNames: [ 'bool', 'mutuallyExclusiveTrueProps' ],
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      message: ''
    }
  ],

  'react/no-access-state-in-setstate': 0, // Nincs react.
  'react/no-typos': 0, // Nincs react.
  'react/button-has-type': [ 2, {
    button: true,
    submit: true,
    reset: false
  } ],
  'react/no-this-in-sfc': 2,
  'react/no-unsafe': 0,
  'react/no-unstable-nested-components': [ 1, { allowAsProps: true } ],
  'react/state-in-constructor': 0, // Nincs state-ünk.
  'react/static-property-placement': 0, // Nem kell. [ 2, 'property assignment' ],
  'react/prefer-read-only-props': 0,
  'react/no-adjacent-inline-elements': 0,
  'react/function-component-definition': [ 0, {
    namedComponents: 'function-expression',
    unnamedComponents: 'function-expression'
  } ],

  'react/prefer-exact-props': 1
}
