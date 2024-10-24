export default {
  rules: {
    // Overall styling
    camelcase: 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'max-params': ['error', 3],
    'max-depth': ['error', 4],
    'one-var': ['error', 'never'],
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',

    // Write less, code more
    'no-new-object': 'error',
    'no-array-constructor': 'error',
    'no-new-func': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-template': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'prefer-spread': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'no-useless-constructor': 'error',
    'no-duplicate-imports': 'error',
    'dot-notation': 'error',
    'no-extra-bind': 'error',

    // Touchy stuff you probably don’t want in production
    'no-console': 'warn',
    'no-eval': 'error',
    'no-loop-func': 'error',
    'no-dupe-class-members': 'error',
    eqeqeq: ['error', 'always'],

    // Variables
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'no-const-assign': 'error',
    'no-unused-vars': 'error',
    'no-undef': 'error',
  },
};
