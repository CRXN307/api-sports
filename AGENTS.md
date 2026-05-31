# API-SPORTS Development Guide

This is the api-sports repository - a TypeScript client for api-sports.io APIs, designed to work across Node.js and browser environments.

## Project Structure

- `src/client.ts` - Main HTTP client
- `src/sports/` - Individual sport modules (football, basketball, etc.)
- `src/types/` - TypeScript types and interfaces
- `src/index.ts` - Public exports

## Commands

- ALWAYS use `pnpm` (never npm, yarn, or bun)
- NEVER run `pnpm test` (runs all packages). Use `vitest path/to/test -t <pattern>`
- Type check: `pnpm typecheck`
- Formatting/linting runs automatically on commit (Lefthook + Biome). No need to run manually.

## Writing Code

- Biome for formatting (tabs for code, 2 spaces for JSON)
- NEVER use `any`. NEVER use classes.
- Use `Uint8Array` instead of `Buffer` (except in tests)
- Use `import type` for type-only imports
- Use `node:` protocol for Node.js built-ins (e.g. `node:crypto`)
- JSDoc comments for public APIs

## Testing

- All tests use Vitest
- Run a specific test: `vitest path/to/test -t <pattern>`
- NEVER run `pnpm test` during development (runs all tests). Use the pattern above.

## Important Development Notes

- Bug fixes and new features MUST include tests
- Ensure `pnpm typecheck` passes before finishing
- DO NOT COMMIT unless the user explicitly asks
- Conventional Commits: `feat(scope):`, `fix(scope):`, `docs:`, `chore:`. Use `!` for breaking changes (e.g.
`feat(football)!:`)
- PRs target `main`

## API Documentation
- `API-SPORTS.md` - General api-sports.io documentation (authentication, base URLs, rate limits, headers, error codes). Read this first before implementing any sport.
- `API-FOOTBALL.md` - Full documentation for the Football API (endpoints, parameters, response types). Read this when working on `src/sports/football.ts`.

When adding a new sport module, check if a corresponding `API-{SPORT}.md` documentation file exists and use it as the source of truth for endpoints and response types.

## Branching Strategy

- `main` — stable branch, published to npm. Never commit directly.
- `feat/name` — new features (e.g. `feat/football-client`)
- `fix/name` — bug fixes (e.g. `fix/auth-header`)
- `chore/name` — tooling, config (e.g. `chore/setup-vitest`)
