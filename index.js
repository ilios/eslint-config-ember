/* eslint-env node */
'use strict';

module.exports = {
  plugins: [
    'ember'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      legacyDecorators: true
    },
  },
  extends: [
    '@ilios/eslint-config',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'ember/no-empty-attrs': 2,
    'ember/no-jquery': 1,
    'ember/no-new-mixins': 2,
    'ember/use-ember-get-and-set': 2,
    'ember/no-unnecessary-route-path-option': 2,
    'ember/no-test-and-then': 2,
    'ember/no-test-import-export': 2,
    'ember/order-in-components': 2,
    'ember/order-in-controllers': 2,
    'ember/order-in-routes': 2,
  },
  overrides: [
    // node files
    {
      files: [
        '.ember-cli.js',
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      rules: {
        // add your custom rules and overrides for node files here

        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off'
      },
    },
    // test files
    {
      files: ['tests/**/*.js'],
      excludedFiles: ['tests/dummy/**/*.js'],
      rules: {
        "no-restricted-globals": [
          "error",
          {
            name: "find",
            message: "You forgot to import `find`, and we are preventing accidental usage of `window.find`."
          },
        ]
      }
    }
  ]
};
