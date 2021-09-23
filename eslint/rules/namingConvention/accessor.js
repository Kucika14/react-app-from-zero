/*
accessor - matches any accessor.

Allowed modifiers: abstract, private, protected, public, requiresQuotes, static.
Allowed types: boolean, string, number, function, array.

--------------------------------------

példa: ?

*/
module.exports = [
  {
    selector: 'accessor',
    format: [ 'strictCamelCase' ]
  }
]
