# Agents

This folder keeps AI-agent instructions synchronized.

`shared.md` is the source of truth. Root-level files such as `CLAUDE.md`, `CODEX.md`, `AGENTS.md`, and `.cursorrules` point back here so different tools follow the same Next.js, atomic design, TypeScript, and Patterns.dev conventions.

When adding support for another agent, create a small adapter file that references `agents/shared.md` instead of duplicating the full rules.
