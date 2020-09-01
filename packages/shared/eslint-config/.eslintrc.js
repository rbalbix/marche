module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    semi: [2, 'always'], // Added by rbalbi
    'space-before-function-paren': 'off', // Added by rbalbi
    '@typescript-eslint/explicit-function-return-type': 'off', // Added by rbalbi
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Added by rbalbi
    'no-useless-constructor': 'off' // Added by rbalbi
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    }
  }
};
