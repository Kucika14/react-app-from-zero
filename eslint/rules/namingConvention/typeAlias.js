/*
typeAlias - matches any type alias declaration.

Allowed modifiers: exported, unused.
Allowed types: none.

--------------------------------------

példa:

type TKiskocsi = string
*/

module.exports = [
  {
    selector: 'typeAlias',
    format: [ 'PascalCase' ],
    prefix: [ 'T' ]
  }
]
