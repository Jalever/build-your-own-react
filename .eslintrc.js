module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
  },
  extends: ['eslint:recommended'],
  rules: {
    eqeqeq: [
      'warn',
      'always',
      {
        null: 'ignore',
      },
    ],
    semi: ['error', 'never'],
    'no-unused-vars': 'off',
  },
}
