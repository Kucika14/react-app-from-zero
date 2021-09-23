/*
method - matches the same as classMethod, objectLiteralMethod, typeMethod.

Allowed modifiers: private, protected, public, static, readonly, abstract, requiresQuotes.
Allowed types: none.

--------------------------------------

példa:

const obj = { method: (): string => ('value') }
*/
module.exports = [
  {
    selector: 'method',
    format: [ 'strictCamelCase' ]
  }
]
