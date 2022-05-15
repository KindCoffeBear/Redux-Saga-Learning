module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'linebreak-style': 0,
    'no-console': 0,
    'react/prop-types': 0,
    'react/jsx-no-useless-fragment': 0,
    'max-len': 0,
    'no-underscore-dangle': 0,
  },
}
