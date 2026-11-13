import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['typescript', 'react', 'oxc', 'import'],
  categories: { correctness: 'error' },
  ignorePatterns: ['**/dist/**'],
  options: {
    maxWarnings: 0,
    reportUnusedDisableDirectives: 'error',
  },
  rules: {
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'no-param-reassign': ['error', { props: true }],
    'no-nested-ternary': 'error',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always'],
    'typescript/no-explicit-any': 'error',
    'typescript/no-non-null-assertion': 'error',
    'typescript/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
    ],
    'typescript/consistent-type-definitions': ['error', 'type'],
    'typescript/array-type': ['error', { default: 'array', readonly: 'array' }],
    'import/no-cycle': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/rules-of-hooks': 'error',
    'react/exhaustive-deps': 'error',
    'react/no-array-index-key': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/only-export-components': ['error', { allowConstantExport: true }],
  },
  overrides: [
    {
      files: ['apps/web/src/**/*.{ts,tsx}'],
      env: { browser: true },
      rules: { 'no-console': ['error', { allow: ['warn', 'error'] }] },
    },
    {
      files: ['**/*.config.{ts,mts}'],
      env: { node: true },
    },
  ],
})
