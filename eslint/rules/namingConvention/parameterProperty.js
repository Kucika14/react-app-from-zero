/*
parameterProperty - matches any parameter property.

Allowed modifiers: private, protected, public, readonly.
Allowed types: boolean, string, number, function, array.

--------------------------------------

példa: ?

*/
module.exports = [
  {
    selector: 'parameterProperty',
    format: [ 'strictCamelCase' ]
  }
]
