// ----------- Promise -----------
// https://github.com/xjamundx/eslint-plugin-promise#rules
// -------------------------------

module.exports = {
  'promise/catch-or-return': 0, // Túl szigorú.
  'promise/no-return-wrap': 1,
  'promise/param-names': 2,
  'promise/always-return': 0, // Nem.
  'promise/no-native': 0, // Natívot használjuk.
  'promise/no-nesting': 0, // Nestingelünk.
  'promise/no-promise-in-callback': 0, // Nem.
  'promise/no-callback-in-promise': 0, // Nem.
  'promise/avoid-new': 0, // Nem kell.
  'promise/no-new-statics': 2,
  'promise/no-return-in-finally': 2,
  'promise/valid-params': 2,
  'promise/prefer-await-to-then': 0, // TODO: majd talán, [Péter] maradhat 0, nem mindig kell használni await-et
  'promise/prefer-await-to-callbacks': 0 // ?
}
