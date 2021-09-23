/*
parameter - matches any function parameter. Does not match parameter properties.

Allowed modifiers: destructured, unused.
Allowed types: boolean, string, number, function, array.

--------------------------------------

példa:

function getRobot (myRobot, _, _tmp) {

}
*/

const { booleanLowerPrefixes, booleanFilter } = require('./consts')

module.exports = [
  {
    selector: 'parameter',
    types: [ 'string', 'number', 'function', 'array' ],
    format: [ 'strictCamelCase' ],
    filter: {
      regex: '^(_|_tmp)',
      match: false
    }
  },
  {
    selector: 'parameter',
    types: [ 'boolean' ],
    format: [
      'PascalCase'
    ],
    prefix: booleanLowerPrefixes,
    filter: booleanFilter
  }
]
