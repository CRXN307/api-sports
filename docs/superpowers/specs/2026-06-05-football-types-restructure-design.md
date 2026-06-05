# Design: Football types restructure & naming conventions

**Date:** 2026-06-05
**Status:** Approved (design phase)
**Scope:** `@crxn307/api-sports` — improvement only, **no new endpoints/features**
**Target release:** `v2.0.0` (breaking — public renames allowed)

---

## 1. Problem statement

The library works, but the type layer has accumulated debt that hurts both
maintainability and the developer experience for consumers:

1. **Monolithic response types.** Each endpoint exports one type that inlines the
   whole `response` array with every nested object (e.g. `FootballLeaguesResponse =
   {...}[]`). Consumers cannot import a single league, country, or season type.
2. **Heavy duplication.** `FootballFixturesResponse` and `FootballFixturesH2HResponse`
   are byte-for-byte identical. The fixture-status `short` union, team-ref shape,
   and score pair (`{home, away}`) are repeated across many files. Duplication is
   why type bugs keep shipping (3 of the last 5 commits were type-correctness fixes).
3. **Naming drift.** Method `getPlayersTeamsParams` (looks like a bug), param type
   `GetPlayerSeasonsParams` (singular) vs method `getPlayersSeasons` (plural),
   `GetPlayersTopScorersParams` reused for assists/cards, and the typo `substitues`
   in lineups.
4. **Docs out of sync.** `docs/typescript.md` documents types that do not exist in
   the code (`Country`, `TeamInfo`, `PlayerProfile`, `Paging`) and use a different
   convention (no `Football` prefix).
5. **No tests.** There is no `*.test.ts` / `*.test-d.ts` file. Type shapes are
   unprotected against regression.

This design fixes the type layer, establishes a single naming convention for
types/params/functions, decides classes vs no classes, and brings docs + tests
in line.

## 2. Goals / non-goals

**Goals**
- A consistent, documented naming convention for entities, response rows,
  envelopes, params, and functions.
- Decomposed, composable, individually-exportable types.
- A shared-atoms module for the shapes that are 100% identical across endpoints.
- Eliminate the existing duplication and naming bugs.
- A short, decisive "classes vs no classes" rationale baked into the repo.
- Docs and type-level tests that match the new convention.

**Non-goals**
- No new endpoints, methods, or runtime features.
- No change to the public call shape `ApiSports({ apiKey }).football.getX(params)`.
- No revert of the recent intentional flattening (endpoints stay as single files).
- No runtime/HTTP-client behavior change.

## 3. Naming conventions

This is the heart of the design. Every type/function follows one of these rules.

| Layer | Convention | Example |
|---|---|---|
| **Entity** — a real domain object | `Football<Entity>` | `FootballLeague` = `{ id, name, type, logo }`, `FootballSeason`, `FootballSeasonCoverage` |
| **Shared atom** — shape that is 100% identical across ≥2 endpoints → `common.ts` | `Football<Atom>` | `FootballTeamRef` = `{ id, name, logo }`, `FootballCountry` = `{ name, code, flag }`, `FootballFixtureStatusShort` (union), `FootballScorePair` = `{ home, away }` |
| **Response row** — one element of the `response[]` array | `Football<X>Response` | `FootballLeagueResponse` = `{ league, country, seasons }` |
| **Envelope** — exactly what a method returns | `ApiFootball<X>Response` | `ApiFootballLeaguesResponse = ApiResponse<FootballLeagueResponse[]>` |
| **Params** — input args; plural matches the method | `Get<Resource>Params` | `GetLeaguesParams` |
| **Function & method** — identical name in the endpoint fn and the `football()` method | `get<Resource>` | `getLeagues` |

### Rules in detail

1. **`Football` prefix on every exported football type** (entity, atom, row).
   The envelope is the only one with `ApiFootball…Response`. This makes the
   "full API response" visually distinct from "the row inside it".
2. **Entity vs response-row are different things.** `FootballLeague` is the league
   itself (`{ id, name, type, logo }`). The row that bundles `league + country +
   seasons` is `FootballLeagueResponse`. They are never conflated.
3. **Contextual variants, not forced sharing.** When the same concept has a
   different shape per endpoint, give it a contextual name instead of widening one
   type. The `league` object differs between `/leagues` and `/fixtures`:

   ```ts
   // /leagues  → the entity
   type FootballLeague = { id: number; name: string; type: "League" | "Cup"; logo: string }

   // /fixtures → a different shape, different name
   type FootballFixtureLeague = {
     id: number; name: string; country: string; logo: string
     flag: string | null; season: number; round: string
   }
   ```

   Only shapes that are **byte-identical** across endpoints become shared atoms in
   `common.ts`. Anything that merely "looks similar" stays separate.
4. **No speculative collection alias.** We do not introduce `FootballLeagues =
   FootballLeague[]`. The collection is expressed inline in the envelope
   (`ApiResponse<FootballLeagueResponse[]>`) to avoid a third ambiguous name.
   (If real demand appears later, add it then — YAGNI.)
5. **Params plural matches the method.** `getSeasons` → `GetSeasonsParams`,
   `getPlayersSeasons` → `GetPlayersSeasonsParams`. No singular/plural mismatch.

### Worked example — leagues

```ts
// types/leagues.ts
import type { ApiResponse } from "@/types"
import type { FootballCountry } from "./common"

export type FootballLeague = {
  id: number
  name: string
  type: "League" | "Cup"
  logo: string
}

export type FootballSeasonCoverage = {
  fixtures: {
    events: boolean | null
    lineups: boolean | null
    statistics_fixtures: boolean | null
    statistics_players: boolean | null
  }
  standings: boolean | null
  players: boolean | null
  top_scorers: boolean | null
  top_assists: boolean | null
  top_cards: boolean | null
  injuries: boolean | null
  predictions: boolean | null
  odds: boolean | null
}

export type FootballSeason = {
  year: number
  start: string | null
  end: string | null
  current: boolean
  coverage: FootballSeasonCoverage | null
}

export type FootballLeagueResponse = {
  league: FootballLeague
  country: FootballCountry
  seasons: FootballSeason[]
}

export type ApiFootballLeaguesResponse = ApiResponse<FootballLeagueResponse[]>

export type GetLeaguesParams = {
  id?: number; name?: string; country?: string; code?: string
  season?: number; team?: number; type?: "league" | "cup"
  current?: boolean; search?: string; last?: number
}
```

```ts
// endpoints/leagues.ts
import type { HttpClient } from "@/types"
import type { FootballLeagueResponse, GetLeaguesParams } from "../types/leagues"

export function getLeagues(client: HttpClient, baseUrl: string, params?: GetLeaguesParams) {
  return client.get<FootballLeagueResponse[]>(baseUrl, "leagues", params)
}
```

## 4. Module structure

Types move into a parallel `types/` directory (one file per endpoint plus
`common.ts`). Functions stay in `endpoints/` and import their types. This keeps
the deliberate single-file-per-endpoint flattening while separating "shape" from
"behavior".

```
src/sports/football/
  types/
    common.ts        ← shared atoms ONLY (FootballTeamRef, FootballCountry,
                       FootballFixtureStatusShort, FootballScorePair, ...)
    index.ts         ← re-exports every types file
    leagues.ts
    fixtures.ts
    teams.ts
    ... (one per endpoint)
  endpoints/
    index.ts         ← re-exports every endpoint file (functions)
    leagues.ts       ← functions only, import from ../types
    fixtures.ts
    ...
  client.ts          ← football(client) wiring (unchanged behavior)
  index.ts           ← export * from ./endpoints, ./types, ./client
```

Public export surface (`src/index.ts` → package root) is unchanged in mechanism
(`export *`); only the type *names* change. Every new type is reachable from the
package root, satisfying "All types are exported from the package root."

## 5. Shared atoms inventory (to confirm during implementation)

These are the candidates that look 100% identical. The final list is decided by
**diffing the actual shapes** while implementing — only byte-identical shapes are
promoted to `common.ts`; near-misses stay contextual.

| Atom | Shape | Seen in |
|---|---|---|
| `FootballTeamRef` | `{ id: number; name: string; logo: string }` | fixtures (minus `winner`), statistics, lineups (plus `colors`), fixture-players (plus `update`) |
| `FootballCountry` | `{ name: string; code: string \| null; flag: string \| null }` | leagues, teams, countries |
| `FootballFixtureStatusShort` | the long `"TBD" \| "NS" \| ...` union | fixtures, h2h |
| `FootballScorePair` | `{ home: number \| null; away: number \| null }` | fixtures `score.*` (×4), `goals` |
| `FootballPlayerRef` | `{ id: number; name: string }` | fixture events, assists |

Where a shape adds fields on top of an atom, compose with intersection at the
**use site**, not by widening the atom:

```ts
// fixtures: a team that also has `winner`
type FootballFixtureTeam = FootballTeamRef & { winner: boolean | null }
```

## 6. Cleanups (breaking — included in v2.0.0)

| Issue | Fix |
|---|---|
| `FootballFixturesResponse` ≡ `FootballFixturesH2HResponse` (identical) | Collapse to one `FootballFixtureResponse`; both `getFixtures` and `getHeadToHead` return `ApiResponse<FootballFixtureResponse[]>` |
| Fixture-status union duplicated | Extract `FootballFixtureStatusShort` to `common.ts` |
| Method `getPlayersTeamsParams` | Rename to `getPlayersTeams` |
| `getPlayersTopAssists/YellowCards/RedCards` methods wrap fns named `getTopAssists/...` | Unify: fns and methods both `getPlayersTop{Assists,YellowCards,RedCards}` |
| `GetPlayerSeasonsParams` (singular) | Rename to `GetPlayersSeasonsParams` |
| `GetPlayersTopScorersParams` reused for assists/cards | Keep one shared `GetPlayersTopParams` (or per-endpoint if shapes diverge — decide at implementation) |
| Typo `substitues` in lineups | Rename to `substitutes` |

All renames are tracked in the migration table (§9) and the changeset.

## 7. Classes vs no classes

The user asked for the trade-offs and the reasoning behind libraries like
better-auth declaring **"NEVER USE CLASSES"**. Decision: **stay functional**;
keep exactly one class — `ApiSportsError`.

### Why functional (the better-auth rationale)

- **Tree-shaking.** Plain functions and `type` declarations are individually
  importable and dead-code-eliminable. A class is a single binding — import one
  method, bundle the whole class. This library advertises ESM-only + zero deps;
  bundle size is a feature.
- **No `this` foot-guns.** Methods passed as callbacks lose their `this` binding
  unless wrapped/bound. The current factory (`football(client)` returns closures)
  has no `this`, so destructuring `const { getLeagues } = client.football` always
  works.
- **Serialization & equality.** Plain objects/data are trivially
  `JSON.stringify`-able, structurally comparable, and easy to snapshot in tests.
  Class instances carry prototype identity and don't round-trip through JSON.
- **Composition over inheritance.** Factory functions + closures compose by
  passing dependencies (`client`, `baseUrl`) explicitly. No inheritance chains,
  no `super`, no hidden state.
- **Testability.** Pure functions take inputs and return outputs; no instance to
  construct, no lifecycle to mock. The HTTP client is already injected as a param.
- **Simpler types.** `type` + functions avoid the class/interface duality and the
  "is this a value or a type?" ambiguity.

### When a class is still the right call

- **Errors.** `ApiSportsError extends Error` is the canonical legitimate use:
  `instanceof` for `catch`-block discrimination, real stack traces, and the
  `Error` contract that tooling/runtimes expect. A plain object can't fully
  replicate this. **Keep it.**

### Trade-offs of staying functional (honest cons)

- No encapsulation via `private` — but the closure-based factory already hides
  internals (`client`, `baseUrl` are not exposed), so this is a non-issue here.
- Slightly more wiring boilerplate than a class with shared `this.client` — but
  it's explicit and tree-shakeable, which we prefer.

**Outcome:** functional everywhere; `ApiSportsError` remains the sole class. No
migration needed — this section documents and ratifies the existing choice.

## 8. Docs & tests

- **Rewrite `docs/typescript.md`** to the new convention: replace the
  non-existent `Country`/`TeamInfo`/`PlayerProfile`/`Paging` listing with the real
  `Football*` / `ApiFootball*Response` names, grouped by endpoint.
- **Update `docs/football.md`** examples to use the new type names.
- **Add type-level tests** (`*.test-d.ts`, `expectTypeOf` from vitest) per
  endpoint that assert: the entity shape, the response-row shape, and that the
  envelope equals `ApiResponse<...Response[]>`. These lock the shapes that keep
  regressing.
- Keep the existing quality gates green: `pnpm typecheck`, `pnpm lint`,
  `pnpm lint:package` (publint), `pnpm lint:types` (attw).

## 9. Migration (v2.0.0 breaking changes)

Public renames consumers must adapt to:

| Old (v1.x) | New (v2.0.0) |
|---|---|
| `FootballLeaguesResponse` | `FootballLeagueResponse` (row) + `ApiFootballLeaguesResponse` (envelope) |
| `FootballFixturesResponse` / `FootballFixturesH2HResponse` | `FootballFixtureResponse` |
| `client.football.getPlayersTeamsParams(...)` | `client.football.getPlayersTeams(...)` |
| `GetPlayerSeasonsParams` | `GetPlayersSeasonsParams` |
| `substitues` field | `substitutes` |
| (all other monolithic `Football*Response` types) | decomposed entity + `Football*Response` row + `ApiFootball*Response` envelope |

A migration note section will be added to `CHANGELOG.md` via a **major** changeset.

## 10. Implementation order (high level)

1. Add `src/sports/football/types/common.ts` with confirmed shared atoms.
2. Per endpoint: create `types/<endpoint>.ts` (entity → row → envelope → params),
   rewrite `endpoints/<endpoint>.ts` to import from it, fix naming bugs.
3. Add `types/index.ts` + update `endpoints/index.ts` re-exports.
4. Add `*.test-d.ts` type tests.
5. Rewrite `docs/typescript.md` + `docs/football.md`.
6. Run all gates (`typecheck`, `lint`, `publint`, `attw`, type tests).
7. Add a major changeset; release v2.0.0.

(The detailed step-by-step lives in the implementation plan, created next.)
