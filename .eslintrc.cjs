module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'only-multiline'],
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'no-extra-semi': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'one-var-declaration-per-line': ['error', 'always'],
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
  },
};
