// ------------ JSX ------------
// https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
// -----------------------------

module.exports = {
  'react/jsx-no-useless-fragment': 0, // Nem tudjuk használni, mert a mappot is egy childnak veszi.
  'react/jsx-no-script-url': [ 2, [
    {
      name: 'Link',
      props: [ 'to' ]
    }
  ] ],
  'react/jsx-curly-newline': [ 2, {
    multiline: 'consistent',
    singleline: 'consistent'
  } ],
  'react/jsx-fragments': [ 2, 'syntax' ],
  'react/jsx-max-depth': [ 1, { max: 5 } ],
  'react/jsx-props-no-multi-spaces': 2,
  'react/jsx-child-element-spacing': 0, // Nem kell
  'react/jsx-curly-brace-presence': [ 2, { props: 'never', children: 'never' } ],
  'react/jsx-boolean-value': [ 2, 'never', { always: [] } ],
  'react/jsx-closing-bracket-location': [ 2, 'line-aligned' ],
  'react/jsx-closing-tag-location': 2,
  'react/jsx-curly-spacing': [
    1,
    {
      children: { when: 'always' },
      spacing:  { objectLiterals: 'always' },
      when:     'always'
    }
  ],
  'react/jsx-handler-names': [ 1, {
    eventHandlerPropPrefix: 'on',
    checkLocalVariables:    false,
    checkInlineFunction:    true,
    eventHandlerPrefix:     'on'
  } ],
  'react/jsx-indent-props': [ 2, 2 ],
  'react/jsx-key': 0, // Nem kell.

  // Sajnos ez csak vagy-vagy, tehát vagy a többsorost védjük le, mint most, vagy pedig az egy sorban lévő maximumot adjuk meg. :/
  'react/jsx-max-props-per-line': [ 2, { maximum: 1, when: 'multiline' } ],

  'react/jsx-no-bind': [ 2, {
    allowArrowFunctions: true,
    ignoreDOMComponents: true,
    allowFunctions:      true,
    ignoreRefs:          true,
    allowBind:           false
  } ],

  'react/jsx-no-duplicate-props': [ 2, { ignoreCase: true } ],
  'react/jsx-no-literals': 0, // Nem kell.
  'react/jsx-no-undef': [ 1, { allowGlobals: true } ],
  'react/jsx-sort-props': 0, // Nem kell.
  'react/jsx-sort-prop-types': 0, // Nem kell.
  'react/jsx-sort-default-props': 0, // Nem kell.
  'react/jsx-uses-react': 2,
  'react/jsx-uses-vars': 2,

  'react/jsx-tag-spacing': [
    1,
    {
      beforeSelfClosing: 'always',
      beforeClosing:     'never',
      closingSlash:      'never',
      afterOpening:      'never'
    }
  ],

  'react/jsx-one-expression-per-line': [ 1, { allow: 'single-child' } ],
  'react/jsx-filename-extension': [ 1, { extensions: [ '.jsx', '.tsx' ] } ],
  'react/jsx-props-no-spreading': 0, // Nem kell.

  'react/jsx-wrap-multilines': [ 2, {
    declaration: 'parens-new-line',
    assignment:  'parens-new-line',
    condition:   'parens-new-line',
    logical:     'parens-new-line',
    return:      'parens-new-line',
    arrow:       'parens-new-line',
    prop:        'parens-new-line'
  } ],

  'react/jsx-first-prop-new-line': [ 2, 'multiline-multiprop' ],
  'react/jsx-equals-spacing': [ 2, 'never' ],
  'react/jsx-indent': [ 2, 2 ],
  'react/jsx-no-target-blank': [ 2, { enforceDynamicLinks: 'always' } ],
  'react/jsx-no-comment-textnodes': 2,
  'react/jsx-pascal-case': 1,
  'react/jsx-newline': 0, // Nem kell.
  'react/jsx-no-constructed-context-values': 0 // Nem használunk providert.
}
