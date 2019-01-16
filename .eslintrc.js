module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'jest'],
  rules: {
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    'object-shorthand': 'off',
    'one-var': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    quotes: ['error', 'single'],
  },
  settings: {
    react: {
      version: '16.7',
    },
  },
}
