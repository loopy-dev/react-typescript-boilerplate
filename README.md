# React typescript boilerplate

## 설치 방법

```cli
yarn install
yarn start # development
yarn build # production build
```

## 설치되어 있는 개발 환경

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

### webpack 환경 관련

이 boilerplate는 더이상 babel을 사용하지 않습니다. rust로 쓰여진 swc를 도입하여, babel 보다 훨씬 빠른 빌드 환경을 구축합니다.  
또한, React에서 자주 사용되는 `emotion` 패키지와의 호환성 테스트를 완료하였습니다.

<details>
<summary>이전 babel 환경</summary>

`webpack.config.js`에서 `babel-loader` 설정이 필요합니다.

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

자체적으로 설정한 eslint rule을 사용하고 있습니다.

- 기존에 사용하던 `airbnb-typescript` rule에서 불필요한 style 관련 포맷이 너무나 많음을 확인하였습니다.
- 이에 따라, 자체적으로 필요한 부분만 사용하는 것으로 결정하였습니다.

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
