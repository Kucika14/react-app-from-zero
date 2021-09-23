/*
enum - matches any enum declaration.

Allowed modifiers: exported, unused.
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
    selector: 'enum',
    format: [ 'PascalCase' ],
    prefix: [ 'E' ]
  }
]
