# Shared Agent Instructions

These instructions apply to every AI coding agent working in this repository.

## Project Baseline

- Framework: Next.js App Router with TypeScript.
- React: function components only.
- State: Redux Toolkit is available through `src/store`.
- UI organization: atomic design.
- Pattern references: `docs/patterns.md` and `src/lib/patterns`.
- Component snippet: `.vscode/component.code-snippets`.

## Required Commands

Run these before handing off code changes unless the task clearly does not touch code:

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

Use `npm run dev` for local preview. Use `npm run test:e2e` when a change affects routing, page rendering, browser behavior, or critical user flows.

## Deployment

- GitHub Pages deployment is configured in `.github/workflows/deploy-pages.yml`.
- Static export settings live in `next.config.mjs`.
- Use `npm run build:pages` when validating the deploy artifact locally.
- The deploy artifact is `out/`.
- The workflow sets `NEXT_PUBLIC_BASE_PATH` automatically for project Pages URLs.
- Preserve `scripts/prepare-pages-artifact.mjs`; it adds `.nojekyll` so GitHub Pages serves Next.js underscore-prefixed assets correctly.

## Testing

- Unit tests live in `tests/unit`.
- Integration tests live in `tests/integration`.
- End-to-end tests live in `tests/e2e` and use Playwright.
- Test utilities live in `tests/utils`.
- Prefer Testing Library queries by role, label, and visible text.
- Add unit tests for pure utilities, hooks, reducers, and isolated components.
- Add integration tests when components interact with Redux, providers, containers, or multiple UI layers.
- Add Playwright tests for route-level behavior and user-visible flows.

## Component Convention

All new `.tsx` components must follow this section layout:

```tsx
import React from 'react';

interface IProps {}

const ComponentName: React.FC<IProps> = (props) => {
  // --- Hooks -----------------------------------------------------------------
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  // --- END: Local state ------------------------------------------------------

  // --- Refs ------------------------------------------------------------------
  // --- END: Refs -------------------------------------------------------------

  // --- Redux -----------------------------------------------------------------
  // --- END: Redux ------------------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  // --- END: Data and handlers ------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  // --- END: Side effects -----------------------------------------------------

  return (
    <div>
      Content
    </div>
  );
};

export default ComponentName;
```

Rules:

- Use `interface IProps` for component props.
- Keep imports at the top, then `IProps`, then the component.
- Keep the section comments, even when a section is empty.
- Destructure props inside `Data and handlers`, not in the function parameter.
- Export the component as the default export.

## Atomic Design

Place components by responsibility:

- `src/components/atoms`: single-purpose primitives such as buttons, labels, inputs, and containers.
- `src/components/molecules`: small compositions of atoms.
- `src/components/organisms`: feature-sized sections composed from atoms and molecules.
- `src/components/templates`: page-level layouts that arrange organisms and slots.
- `src/features`: domain-specific state, hooks, containers, and feature logic.

Keep presentational components in `src/components`. Keep domain orchestration in `src/features`.

## Patterns.dev Alignment

Use `docs/patterns.md` before adding a new pattern implementation.

Preferred mappings:

- Container/Presentational: containers in `src/features/**/containers`, presentational UI in `src/components`.
- Hooks: reusable stateful logic in `src/features/**/hooks` or a shared hook folder when it is cross-domain.
- Render Props, HOC, Compound Components: keep reusable examples in `src/lib/patterns/react` unless they become production UI primitives.
- JavaScript design patterns: keep generic examples in `src/lib/patterns/javascript`.
- Loading/performance patterns: prefer Next.js primitives, route boundaries, dynamic imports, Suspense, and server components.

Do not force a pattern where it adds ceremony without solving a real problem.

## Next.js Defaults

- Default to server components.
- Add `"use client"` only when the file uses browser APIs, local interactive state, effects, refs, Redux hooks, or event handlers.
- Use route segments for route-level splitting.
- Use `next/dynamic` for explicitly lazy client-only code.
- Use `next/link`, `next/image`, `next/script`, and metadata APIs instead of raw equivalents when their Next.js behavior is useful.

## Styling

- Prefer CSS Modules colocated with the component.
- Use existing global CSS variables from `src/styles/globals.css`.
- Keep UI quiet, readable, and work-focused.
- Avoid broad visual rewrites when making focused changes.

## TypeScript

- Keep `strict` compatibility.
- Avoid `any`; if TypeScript requires it, isolate it and explain with a short comment.
- Prefer named exports for utilities and default exports for components.
- Keep utility modules side-effect-light so tree shaking remains effective.

## Change Discipline

- Preserve existing conventions before introducing new abstractions.
- Keep edits scoped to the requested behavior.
- Do not remove pattern examples or documentation unless replacing them with a clearer equivalent.
- Update `docs/patterns.md` when adding, moving, or deleting pattern implementations.
- Update `README.md` when project setup, commands, or structure changes.
