// ---------- Radar ---------
// https://github.com/es-joy/eslint-plugin-radar
// -----------------------------

// 0 - disabled
// 1 - warning
// 2 - error

module.exports = {
  'radar/no-all-duplicated-branches': 1,
  'radar/no-element-overwrite': 0, // Nincs rá szükségünk.
  'radar/no-extra-arguments': 0, // Megoldja ts.
  'radar/no-identical-conditions': 0, // Megoldja ts.
  'radar/no-identical-expressions': 1,
  'radar/no-one-iteration-loop': 0, // Megoldja ts.
  'radar/no-use-of-empty-return-value': 0, // Megoldja ts.
  'radar/cognitive-complexity': 0, // Érdemes ránézni: https://www.sonarsource.com/docs/CognitiveComplexity.pdf
  'radar/max-switch-cases': [ 1, 10 ],
  'radar/no-collapsible-if': 0, // Megoldja ts.
  'radar/no-collection-size-mischeck': 1,
  'radar/no-duplicate-string': 0, // Nincs rá szükségünk.
  'radar/no-duplicated-branches': 1,
  'radar/no-identical-functions': 1,
  'radar/no-inverted-boolean-check': 1,
  'radar/no-redundant-boolean': 0, // Megoldja ts.
  'radar/no-redundant-jump': 0, // Megoldja ts.
  'radar/no-same-line-conditional': 0, // Megoldja ts.
  'radar/no-small-switch': 1,
  'radar/no-unused-collection': 1,
  'radar/no-useless-catch': 0, // Jelenleg nincs rá szükségünk.
  'radar/prefer-immediate-return': 0, // Nem rossz, de nem minden esetben megfelelő.
  'radar/prefer-object-literal': 1,
  'radar/prefer-single-boolean-return': 1,
  'radar/prefer-while': 1
}
