/*
function - matches any named function declaration or named function expression.

Allowed modifiers: global, exported, unused.
Allowed types: none.

--------------------------------------

példa:

function getNumbers (): number[] { return [ 1, 2 ] }

function Calculator (): HTMLElement {
  return <div className='global_calculator' />
}
*/

module.exports = [
  {
    selector: 'function',
    format: [
      // Hagyományos függvények.
      'strictCamelCase',

      // JSX komponensek.
      'StrictPascalCase'
    ]
  }
]
