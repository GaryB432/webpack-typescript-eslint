

**Repro**

> webpack.config.js snippet
```JS
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
```

```TS
const someObj = {
  b: 9,
  a: 4,  // member out of order
};

export function someNumber() { // no return type
  return undefined;
}

console.log(someNumber()!); // non-null assertion
```

**Expected Result**

All the violations of [recommended](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) rules would be reported

**Actual Result**

No violations are reported

**Additional Info**

The violations are reported if I spell out the rules in the webpack config's `options.rules`.

Repro repo is available on [github](https://github.com/GaryB432/webpack-typescript-eslint.git)

> run npm build

**Versions**

| package                            | version |
| ---------------------------------- | ------- |
| `@typescript-eslint/eslint-plugin` | `1.11.0` |
| `@typescript-eslint/parser`        | `1.11.0` |
| `TypeScript`                       | `3.5.2` |
| `ESLint`                           | `6.0.1` |
| `node`                             | `10.16.0` |
| `npm`                              | `6.0.0` |
