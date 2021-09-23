// ---------- SCSS ---------
// https://github.com/kristerkari/stylelint-scss/blob/master/README.md
// -----------------------------
module.exports = {
  'scss/at-each-key-value-single-line': true,
  'scss/at-else-closing-brace-newline-after': null, // Helyette: block-closing-brace-newline-after
  'scss/at-else-closing-brace-space-after': null, // Helyette: block-closing-brace-space-after

  'scss/at-else-empty-line-before': 'never',
  'scss/at-else-if-parentheses-space-before': 'always',

  'scss/at-extend-no-missing-placeholder': null, // Jelenleg nincs rá szükségünk.

  'scss/at-function-named-arguments': 'never',
  'scss/at-function-parentheses-space-before': 'always',

  'scss/at-function-pattern': /^sni-fn-[\da-z-]+$/, // Csak-kebab-casing-lehet.

  'scss/at-if-closing-brace-newline-after': null, // Helyette: block-closing-brace-newline-after
  'scss/at-if-closing-brace-space-after': null, // Helyette: block-closing-brace-space-after

  'scss/at-if-no-null': true,
  'scss/at-import-no-partial-leading-underscore': true,

  'scss/at-import-partial-extension': 'always', // Mindig kell a .scss fájlkiterjesztés.
  'scss/at-import-partial-extension-blacklist': null, // Whitelist.
  'scss/at-import-partial-extension-whitelist': [ 'scss', 'css' ],

  'scss/at-mixin-argumentless-call-parentheses': 'never',
  'scss/at-mixin-named-arguments': 'never',
  'scss/at-mixin-parentheses-space-before': 'always',

  // TODO:
  // Nem tudjuk még bekötni, mert a spriteSheetGenerator camelCases mixineket generált és
  // végig kéne verni az egész gokun ezt a módosítást.
  'scss/at-mixin-pattern': null,

  'scss/at-rule-conditional-no-parentheses': true,
  'scss/at-rule-no-unknown': true,

  'scss/dollar-variable-colon-newline-after': 'always-multi-line',
  'scss/dollar-variable-colon-space-after': 'always',
  'scss/dollar-variable-colon-space-before': 'never',

  'scss/dollar-variable-default': null, // Nem kell.

  'scss/dollar-variable-empty-line-after': null, // Nem kell.
  'scss/dollar-variable-empty-line-before': null, // Nem kell.
  'scss/dollar-variable-first-in-block': null, // Nem kell.
  'scss/dollar-variable-no-missing-interpolation': true,

  'scss/dollar-variable-pattern': null, // TODO: kellhet?
  'scss/percent-placeholder-pattern': null, // [SAS] TODO: kellhet? Eddig nem használtunk placeholder.

  'scss/double-slash-comment-empty-line-before': 'never',
  'scss/double-slash-comment-inline': 'never',
  'scss/double-slash-comment-whitespace-inside': 'always',

  'scss/comment-no-empty': true,
  'scss/comment-no-loud': null, // [SAS] Mivel css-ben is kommentelünk és ott csak a hagyományos működik, ezt nem használjuk.

  'scss/declaration-nested-properties': 'never', // [SAS] Nem engedjük a nested properties-t, mert nehezen olvasható.
  'scss/declaration-nested-properties-no-divided-groups': null, // Nem kell, mivel nem használjuk a nested propertiest.

  'scss/dimension-no-non-numeric-values': true,

  'scss/function-color-relative': true,
  'scss/function-quote-no-quoted-strings-inside': true,
  'scss/function-unquote-no-unquoted-strings-inside': true,

  'scss/map-keys-quotes': 'always',

  'scss/media-feature-value-dollar-variable': null, // Nem kell.

  'scss/operator-no-newline-after': true,
  'scss/operator-no-newline-before': true,
  'scss/operator-no-unspaced': true,

  'scss/partial-no-import': null, // TODO: ?

  'scss/selector-nest-combinators': null, // TODO: ?
  'scss/selector-no-redundant-nesting-selector': null, // Szeretjük használni az ampersandot.
  'scss/selector-no-union-class-name': null, // Nem kell.

  'scss/no-dollar-variables': null, // Nem kell.
  'scss/no-duplicate-dollar-variables': true,
  'scss/no-duplicate-mixins': true,
  'scss/no-global-function-names': null // A filter: transition-t cserélni akarja color.adjust-ra, de ez képeknél nem fog működni. Ezért kikapcsoljuk.
}
