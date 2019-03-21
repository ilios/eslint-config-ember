module.exports = {
  plugins: [
    'ember'
  ],
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
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
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
