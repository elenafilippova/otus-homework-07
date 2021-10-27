module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 100,
      },
    ],
    'no-console': 'off',
    'no-alert': 'off',
  },
  plugins: ['jest'],
};
