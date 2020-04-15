module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    "import-helpers",
  ],
  rules: {
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-restricted-globals": 0,
    "no-unused-vars": ["error", {"argsIgnorePattern": "next"}],
    'import-helpers/order-imports': [
      'warn',
      {
          newlinesBetween: 'always', // new line between groups
          groups: [
              'module',
              '/..controllers/',
              '/..middlewares/',
              ['parent', 'sibling', 'index'],
          ],
          alphabetize: { order: 'asc', ignoreCase: true },
        
      },
  ],
  },
};
