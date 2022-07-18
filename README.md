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
- `babel`
- `eslint`
- `prettier`
- `react`
- `react-dom`
- `sass`
- `postcss`

## ESLint

### plugins

- `prettier`
- `react-hooks`
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
