# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Code quality

```sh
pnpm fmt        # Format files
pnpm fmt:check  # Check formatting without writing
pnpm lint       # Lint; warnings also fail
pnpm lint:fix   # Apply automatic lint fixes
pnpm build      # Type-check and build
```

Formatting is defined in `oxfmt.config.ts`: two spaces, 80 columns, single
quotes, no semicolons, and sorted imports. Side-effect imports are not sorted.
The lockfile and build output are excluded.

`oxlint.config.ts` checks correctness, React Hooks, explicit `any`, non-null
assertions, and cyclic imports. Use `type` declarations and separate type imports.
Both named and default exports are allowed.
Browser globals are scoped to `src`; tool configs use Node globals.

These conventions follow the existing tabi-log and medication-tracker projects.
Type-aware linting is not enabled; `pnpm build` runs the TypeScript checks.

See the [Oxlint configuration documentation](https://oxc.rs/docs/guide/usage/linter/config)
and [Oxfmt configuration documentation](https://oxc.rs/docs/guide/usage/formatter/config).
