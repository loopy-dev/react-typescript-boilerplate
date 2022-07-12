# React typescript boilerplate

## 설치 방법
```cli
npm install
npm start # development
npm build # production
```

## 설치되어 있는 플러그인

- typescript
- webpack
- webpack-dev-server
- webpack-cli
- eslint
- prettier
- sass
- postcss

## ESLint

### 설치되어 있는 extensions 및 plugins

- airbnb
- eslint:recommended
- prettier
- react-hooks
- @typescript-eslint
- plugin:prettier


### 상세 rules

```json
{
  "linebreak-style": "off",
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
  "react/jsx-filename-extension": [
    1,
    {
      "extensions": [
        ".js",
        ".jsx",
        "tsx"
      ]
    }
  ],
  "import/no-unresolved": "off",
  "react/function-component-definition": [
    "error",
    {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }
  ],
  "react/react-in-jsx-scope": "off",
  "react/jsx-props-no-spreading": "off",
  "react/require-default-props": "off",
  "import/no-extraneous-dependencies": [
    "error",
    {
      "devDependencies": true
    }
  ],
  "import/extensions": "off",
  "@typescript-eslint/no-non-null-assertion": "off",
  "prettier/prettier": ["error", { "endOfLine": "auto" }]
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
  "endOfLine": "auto"
}

```
