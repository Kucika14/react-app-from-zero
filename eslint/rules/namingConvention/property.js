/*
property - matches the same as classProperty, objectLiteralProperty, typeProperty.

Allowed modifiers: private, protected, public, static, readonly, abstract, requiresQuotes.
Allowed types: boolean, string, number, function, array.

--------------------------------------

példa:

const obj = {
  property: 'value',
  __html: 'x',
  'Content-type': 'y'
}
*/

const { booleanFilter, booleanLowerPrefixes } = require('./consts')

module.exports = [
  {
    selector: 'property',
    types: [ 'string', 'number', 'function', 'array' ],
    format: [ 'strictCamelCase' ],
    filter: {
      // Ezek vagy JSX, vagy fejlesztői környezet specifikus kulcsok lehetnek.
      regex: '^(__html|Content-type|PROD|DEV|URL|dangerouslySetInnerHTML)$',
      match: false
    }
  },
  {
    selector: 'property',
    types: [ 'boolean' ],
    format: [
      'PascalCase'
    ],
    prefix: [
      ...booleanLowerPrefixes
    ],
    filter: booleanFilter
  }
]

