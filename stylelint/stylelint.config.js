module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-order'
  ],
  rules: {
    ...require('./rules/stylelint.js'),
    ...require('./rules/order.js'),
    ...require('./rules/scss.js')
  }
}
