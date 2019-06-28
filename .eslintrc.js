'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'sort-keys': "error",
    '@typescript-eslint/explicit-function-return-type': "error",
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2]
  },
  env: {
    browser: true,
    node: true,
  },
};
