/*
variable - matches any var / let / const variable name.

Allowed modifiers: const, destructured, global, exported, unused.
Allowed types: boolean, string, number, function, array.

--------------------------------------

példa:

const isSimple = type === 'simple'
const HAS_CHANGED = false
*/

const { booleanFilter, booleanPrefixes } = require('./consts')

module.exports = [
  {
    selector: 'variable',
    types: [ 'string', 'number', 'array', 'function' ],
    format: [ 'strictCamelCase', 'StrictPascalCase', 'UPPER_CASE' ]
  },

  // Ha boolean, akkor is-zel, has-zel, stb. kell kezdődjön.
  {
    selector: 'variable',
    types: [ 'boolean' ],
    format: [
      'PascalCase',
      'UPPER_CASE'
    ],
    prefix: booleanPrefixes,
    filter: booleanFilter
  }
]
