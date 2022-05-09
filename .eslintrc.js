module.exports = {
  env: {
    es6: true,
  },
  extends: ['plugin:react-hooks/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', '@typescript-eslint/tslint'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/indent': ['off', 2],
    '@typescript-eslint/member-delimiter-style': [
      'off',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'none',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/semi': ['off', 'always'],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    eqeqeq: ['error', 'always'],
    'no-duplicate-imports': 'error',
    'no-multiple-empty-lines': 'error',
    '@typescript-eslint/tslint/config': [
      'error',
      {
        rules: {
          whitespace: [
            true,
            'check-branch',
            'check-decl',
            'check-operator',
            'check-separator',
            'check-typecast',
            'check-type',
            'check-typecast',
            'check-module',
          ],
        },
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
  },
};
