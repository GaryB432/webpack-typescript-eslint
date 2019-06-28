'use strict';

// const FriendlyFormatter = require('eslint-formatter-friendly');
// const stylish = require('eslint/lib/formatters/stylish')

module.exports = {
  // formatter: FriendlyFormatter,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: { // works with rules like this
    'sort-keys': 2,
    '@typescript-eslint/explicit-function-return-type': 2,
  },
  env: {
    browser: true,
    node: true,
  },
};
