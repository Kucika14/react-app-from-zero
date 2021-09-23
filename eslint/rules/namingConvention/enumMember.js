/*
enumMember - matches any enum member.

Allowed modifiers: requiresQuotes.
Allowed types: none.

--------------------------------------

példa:

enum EType {
  Robot = 'robot',
  Human = 'human'
}
*/

module.exports = [
  {
    selector: 'enumMember',
    format: [ 'StrictPascalCase' ]
  }
]
