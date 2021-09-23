/* eslint-disable no-undef */
// https://eslint.org/docs/user-guide/configuring/configuration-files

const path = require('path')

module.exports = {
  // 'off'   or 0 - turn the rule off
  // 'warn'  or 1 - turn the rule on as a warning (doesn’t affect exit code)
  // 'error' or 2 - turn the rule on as an error (exit code will be 1)

  // Nem kellenek recommended-ek, teljes kontroll kell a saját szabályaink felett.
  extends: [],

  // https://github.com/yannickcr/eslint-plugin-react#configuration
  settings: {
    react: {
      pragma: 'd',
      version: 'latest'
    }
  },

  plugins: [
    'import',
    'node',
    'promise',
    'react',
    'wc',
    '@typescript-eslint',
    'unicorn',
    'radar',
    'jsdoc'
  ],

  globals: {
    ...require('./globals')
  },

  env: {
    es6: true
  },

  rules: {
    // Ez a négy szabály alapból mindenhol jelen van.
    ...require('./rules/eslint'),
    ...require('./rules/unicorn'),
    ...require('./rules/promise'),
    ...require('./rules/radar')
  },

  // https://eslint.org/docs/user-guide/configuring#report-unused-eslint-disable-comments
  reportUnusedDisableDirectives: true,

  overrides: [
    {
      files: [ '*.ts', '*.tsx' ],
      env: {
        browser: true
      },
      parser: '@typescript-eslint/parser',

      parserOptions: {
        ecmaVersion: 2020,

        ecmaFeatures: {
          jsx: true
        },
        useJSXTextNode: true,
        project: path.resolve(__dirname, '..', 'tsconfig.json'),
        tsconfigRootDir: path.resolve(__dirname, '..'),
        sourceType: 'module'
      },

      rules: {
        ...require('./disabled/disabled-eslint'),
        ...require('./rules/typescript'),
        ...require('./rules/react'),
        ...require('./rules/jsx'),
        ...require('./rules/jsdoc'),
        ...require('./rules/webcomponents'),
        ...require('./rules/import'),
        // ...(developer.eslint.useSlowRules ? {} : require('./rules/slow'))
        ...require('./rules/slow')
      }
    },

    /* {
      files: [ '*.test.ts', '*.test.tsx' ],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-magic-numbers': 0,
        '@typescript-eslint/naming-convention': 0,
        '@typescript-eslint/no-explicit-any': 0,
        'max-classes-per-file': 0, // Van hogy több class-t is felveszünk teszt környezetben
        'no-console': 0, // Tesztnél logolhatunk.
        'max-depth': 0, // Teszt környezetben nem számít.
        'import/order': 0,
        'import/first': 0,
        'import/no-extraneous-dependencies': 0,
        ...require('./disabled/disabled-jsdoc')
      }
    }, */

    {
      files: [ '*.js' ],
      env: {
        /* node: true, */
        es6: true
      },
      parserOptions: {
        ecmaVersion: 2018
      },
      rules: {
        ...require('./rules/node'),
        'no-underscore-dangle': 1, // a typescript naming-convention miatt ott nincs, csak js-nél
        'no-console': 0 // Használunk console-t node környezetben
      }
    }
  ]
}
