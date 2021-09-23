//
// A naming convention definicióiban ismétlődő részek egybegyűjtve és exportálva.
//
// -----------------------
//

const FILTER = [
  // PerformanceObserver:
  'buffered',
  // matchMedia:
  'matches',
  // addEventListener:
  'useCapture', 'bubbles', 'passive',
  // Object.defineProperty:
  'configurable', 'enumerable', 'writable',
  // XHR
  'withCredentials',
  // Sajátok
  'toCenter',
  'data',
  // dragula
  'removeOnSpill', 'copy', 'copySortSource', 'revertOnSpill', 'ignoreInputTextSelection',
  // textarea
  'spellcheck',
  // select
  'multiple'
]

module.exports.booleanFilter = {
  regex: `^(${ FILTER.join('|') })$`,
  match: false
}

const PREFIXES = [ 'is', 'are', 'has', 'need', 'can', 'will', 'only', 'check', 'should' ]

const booleanLowerPrefixes = PREFIXES
const booleanUpperPrefixes = PREFIXES.map((prefix) => `${ prefix.toUpperCase() }_`) // 'IS_', 'HAS_', ...

module.exports.booleanLowerPrefixes = booleanLowerPrefixes
module.exports.booleanUpperPrefixes = booleanUpperPrefixes
module.exports.booleanPrefixes = [ ...booleanLowerPrefixes, ...booleanUpperPrefixes ]
