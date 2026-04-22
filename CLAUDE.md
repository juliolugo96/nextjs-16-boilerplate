# Claude Instructions

Follow the canonical project instructions in `agents/shared.md`.

Claude-specific notes:

- Preserve the component section convention exactly for new `.tsx` files.
- Prefer small, direct patches over broad rewrites.
- When uncertain about architecture, check `docs/patterns.md` first and choose the smallest pattern that fits the problem.
- Before completing code changes, run `npm run typecheck`, `npm run lint`, and `npm run build`.
