// ----------- JSON -----------
// https://github.com/Bkucera/eslint-plugin-json-format
// ------------------------------

module.exports = {
  'json/sort-package-json': [ 1, 'standard' ],
  'json/ignore-files': [ 1, [ '**/package-lock.json' ] ],
  'json/json-with-comments-files': [ 1, [ '**/tsconfig.json', '.vscode/**' ] ]
}
