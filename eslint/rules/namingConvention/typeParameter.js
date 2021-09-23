/*
typeParameter - matches any generic type parameter declaration.

Allowed modifiers: unused.
Allowed types: none.

--------------------------------------

példa:

type TObject = IObject[]
*/
module.exports = [
  {
    selector: 'typeParameter',
    format: [ 'PascalCase' ],
    prefix: [ 'T' ],
    custom: {
      // Generickhez
      regex: '[A-Z]', // [Péter]: (^[A-Z]{1}$|^T[A-Z].+), ez hibát dob az összes generic-re, nincs T prefixe
      match: false
    }
  }
]
