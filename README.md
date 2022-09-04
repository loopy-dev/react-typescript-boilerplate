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
    ["@babel/preset-react", {"runtime": "automatic"}],
    "@babel/typescript"
  ],
  "plugins": [
    ["@babel/plugin-transform-runtime", {
    "corejs": 3
    }
    ]
  ]
}

```

</details>

## ESLint

### plugins

- `prettier`
- `@typescript-eslint`
- `react`
- `react-hooks`

### extends

- `eslint:recommended`
- `plugin:@typescript-eslint/recommended`
- `plugin:react/recommended`
- `plugin:react-hooks/recommended`
- `plugin:prettier/recommended`

### rules

```json
{
  "react/react-in-jsx-scope": "off",
  "react/jsx-props-no-spreading": "off",
  "react/require-default-props": "off",
  "react/self-closing-comp": ["error", {
    "component": true
  }],
  "react/function-component-definition": ["error", {
    "namedComponents": "function-declaration",
    "unnamedComponents": "arrow-function"
  }],
  "import/no-unresolved": "off",
  "import/extensions": "off",
  "@typescript-eslint/no-non-null-assertion": "off"
}

```

## Prettier

```json
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "endOfLine": "lf"
}
```
