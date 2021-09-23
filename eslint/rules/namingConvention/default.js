// Globálisan nem lehet SEMMINEK _ sem az elején, sem a végén.
// A dupla dash kezdetűek rendszerszintű kontansok, webpack-ben definiálva.

module.exports = [
  {
    selector: 'default', // ELVILEG EZ MINDENRE VONATKOZIK
    format: null, // Ez null maradjon, mert felülcsapja a többiek formázását.
    leadingUnderscore: 'forbid',
    trailingUnderscore: 'forbid',
    custom: {
      regex: '(__[a-zA-Z0-9]*(__)?)', // A __X__ változókkal kivételt tesz
      match: false
    },
    filter: {
      regex: '^(__html|_)', // Ez pedig a JSX dangerouslySetInnerHTML={ { __html: '' } } -hez kell VAGY nem használt paraméternél egyetlen underscoure
      match: false
    }
  }
]
