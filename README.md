# Next.js TypeScript Patterns Boilerplate

A compact Next.js App Router boilerplate with TypeScript, atomic design folders, Redux Toolkit wiring, and a Patterns.dev-inspired catalog of JavaScript and React/Next patterns.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm test
npm run build:pages
npm run test:e2e
npm run build
```

## Structure

```text
src/app                         Next.js App Router entry points
src/components/atoms            Small reusable UI primitives
src/components/molecules        Composed UI blocks
src/components/organisms        Feature-sized UI sections
src/components/templates        Page templates
src/features                    Domain features and containers
src/lib/patterns                JavaScript and React pattern examples
src/store                       Redux Toolkit store setup
tests/unit                     Vitest unit tests
tests/integration              Vitest integration tests
tests/e2e                      Playwright e2e tests
.vscode/component.code-snippets Component snippet convention
docs/patterns.md                Pattern index and implementation map
agents/shared.md                Canonical AI-agent coding instructions
CLAUDE.md / CODEX.md / AGENTS.md Tool-specific agent entry points
.github/workflows/deploy-pages.yml GitHub Pages deployment workflow
```

## Component Convention

Use the included `component` VS Code snippet in TypeScript React files. New components should follow the section comments used throughout the boilerplate:

```tsx
import React from 'react';

interface IProps {}

const ComponentName: React.FC<IProps> = (props) => {
  // --- Hooks -----------------------------------------------------------------
  // --- END: Hooks ------------------------------------------------------------

  return <div>Content</div>;
};

export default ComponentName;
```

## Deployment

This project is configured for GitHub Pages through GitHub Actions.

- Static export is enabled in `next.config.mjs`.
- `npm run build:pages` writes the deployable site to `out/`.
- The workflow deploys from `main` using `.github/workflows/deploy-pages.yml`.
- For project Pages, the workflow sets `NEXT_PUBLIC_BASE_PATH` to `/<repo-name>`.
- For user or organization Pages repositories ending in `.github.io`, the base path is left empty.

After pushing to GitHub, enable Pages with **Source: GitHub Actions** in the repository settings if it is not enabled automatically.
