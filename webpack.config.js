'use strict';
const path = require('path');

const FriendlyFormatter = require('eslint-formatter-friendly');

const mode = 'production';

module.exports = {
  entry: {
    'wts5': ['scripts/app.ts'],
  },

  context: path.join(process.cwd(), 'src'),

  output: {
    publicPath: mode === 'production' ? '/' : 'http://localhost:8080/',
    path: path.join(process.cwd(), 'dist'),
    filename: 'scripts/[name].[hash].js',
  },

  mode,

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: FriendlyFormatter,
          parser: '@typescript-eslint/parser',
          extends: [
            'plugin:@typescript-eslint/recommended',
          ],
          plugins: ['@typescript-eslint'],
          // rules: { // works with rules like this
          //   'sort-keys': 2,
          //   '@typescript-eslint/explicit-function-return-type': 2,
          // },
          env: {
            browser: true,
            node: true,
          },
        },
      },
    ],
  },

  resolve: {
    modules: ['node_modules', path.resolve(process.cwd(), 'src')],
    extensions: ['.ts', '.js', 'scss'],
  },

};
