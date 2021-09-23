/*
class - matches any class declaration.

Allowed modifiers: abstract, exported, unused.
Allowed types: none.

--------------------------------------

példa:

class Car extends HTMLElement { }
*/

module.exports = [
  {
    selector: 'class',
    format: [ 'StrictPascalCase' ]
  }
]
