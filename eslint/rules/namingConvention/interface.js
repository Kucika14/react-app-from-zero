/*
interface - matches any interface declaration.

Allowed modifiers: exported, unused.
Allowed types: none.

--------------------------------------

példa:

interface IObj {
  color: string,
  index: number
}
*/

module.exports = [
  {
    selector: 'interface',
    format: [ 'PascalCase' ],
    prefix: [ 'I' ]
  }
]
