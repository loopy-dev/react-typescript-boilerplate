# React typescript boilerplate

## Install

```cli
yarn install
yarn start # development
yarn build # production build
```

## dev dependencies

- `typescript`
- `webpack`
- `webpack-dev-server`
- `webpack-cli`
- `@swc/core`
- `swc-loader`
- `eslint`
- `prettier`
- `react`
- `react-dom`
- `sass`
- `postcss`

### about react compiler

This boilerplate no longer uses babel. Introducing swc, written in rust, to build a much faster build environment than babel.
In addition, we have completed a compatibility test with the emotion package, which is often used in React.

<details>
<summary>Babel config(deprecated)</summary>

You need to configure `babel-loader` in `webpack.config.js`.

`package.json`

```json
{
  "devDependencies": {
    "@babel/core": "^7.18.0",
    "@babel/plugin-transform-runtime": "^7.18.0",
    "@babel/preset-env": "^7.18.0",
    "@babel/preset-react": "^7.17.12",
    "@babel/preset-typescript": "^7.17.12",
    "@babel/runtime-corejs3": "^7.18.0"
  }
}
```

`.babelrc`

```json
{
  "presets": [
    [
      "@babel/preset-env",
      { "targets": { "browsers": ["last 2 versions", ">= 5% in KR"] } }
    ],
    ["@babel/preset-react", { "runtime": "automatic" }],
    "@babel/typescript"
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ]
  ]
}
```

</details>

## ESLint

We are using our own eslint rules.

- We have confirmed that there are too many unnecessary style-related formats in the existing `airbnb-typescript` rule.
- Therefore, We decided to use only the necessary parts.

## Prettier

```json
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "endOfLine": "lf"
}
```
