/*
classProperty - matches any class property. Does not match properties that have direct function expression or arrow function expression values.

Allowed modifiers: abstract, private, protected, public, readonly, requiresQuotes, static.
Allowed types: boolean, string, number, function, array.

--------------------------------------

példa:

class Car extends HTMLElement {
  public static readonly MY_VAR = 1
  protected static readonly ANOTHER_VAR = 2
}
*/

module.exports = [
  {
    selector: 'classProperty',
    modifiers: [ 'public', 'static', 'readonly' ],
    format: [ 'UPPER_CASE' ]
  },
  {
    selector: 'classProperty',
    modifiers: [ 'protected', 'static', 'readonly' ],
    format: [ 'UPPER_CASE' ]
  },
  {
    selector: 'classProperty',
    modifiers: [ 'private', 'static', 'readonly' ],
    format: [ 'UPPER_CASE' ]
  }
]
