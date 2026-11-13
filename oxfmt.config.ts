import { defineConfig } from 'oxfmt'

export default defineConfig({
  printWidth: 80,
  useTabs: false,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  arrowParens: 'always',
  sortImports: { sortSideEffects: false },
  sortPackageJson: false,
  ignorePatterns: ['**/dist/**', 'pnpm-lock.yaml'],
})
