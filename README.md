# api-sports

TypeScript client for [API-SPORTS](https://api-sports.io). Fully typed, ESM-only, zero runtime dependencies.

## Installation

```bash
pnpm add api-sports
```

> Requires Node.js ≥ 18 (uses native `fetch`).

## Quick start

```ts
import { apiSports } from "@crxn307/api-sports"

const client = apiSports({ apiKey: "your-api-key" })

const { response } = await client.football.getFixtures({
  league: 39,
  season: 2024,
})
```

## Documentation

- [Error handling](docs/error-handling.md)
- [Rate limiting](docs/rate-limiting.md)
- [Football endpoints](docs/football.md)
- [TypeScript types](docs/typescript.md)

## Development

```bash
pnpm build       # build dist/
pnpm typecheck   # tsc type check
pnpm test        # vitest
pnpm lint        # biome lint
pnpm check       # biome lint + format
```

## License

MIT
