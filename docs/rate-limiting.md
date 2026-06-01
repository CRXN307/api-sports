# Rate limiting

The client does not retry or queue requests automatically. Pass a custom `fetch` implementation to add rate limiting, logging, or any other behaviour.

## Custom fetch

```ts
import { ApiSports } from "api-sports"

const client = ApiSports({
  apiKey: "your-api-key",
  fetch: myCustomFetch,
})
```

## Bottleneck

[Bottleneck](https://github.com/SGravard/bottleneck) is a lightweight in-process rate limiter. Install it separately — it is not a dependency of this package.

```bash
pnpm add bottleneck
pnpm add -D @types/bottleneck
```

### Pro plan (300 req/min)

```ts
import Bottleneck from "bottleneck"
import { ApiSports } from "api-sports"

const limiter = new Bottleneck({
  reservoir: 300,                // start with 300 requests
  reservoirRefreshAmount: 300,   // refill 300 every minute
  reservoirRefreshInterval: 60_000,
  maxConcurrent: 1,
  minTime: 200,                  // minimum 200 ms between requests
})

const client = ApiSports({
  apiKey: "your-api-key",
  fetch: limiter.wrap(globalThis.fetch.bind(globalThis)),
})
```

### Handling 429 errors

Even with rate limiting, a 429 can occur if quota is exhausted for the day. Handle it in your call site:

```ts
import { ApiSportsError } from "api-sports"

try {
  const { response } = await client.football.getFixtures({ live: "all" })
} catch (err) {
  if (err instanceof ApiSportsError && err.code === "RATE_LIMIT_EXCEEDED") {
    // quota exhausted — skip until reset (daily, at midnight UTC)
    console.warn("API quota exhausted:", err.message)
  }
}
```

## Next.js

Next.js 13/14 caches `fetch` responses with `force-cache` by default. For live data, pass a custom fetch that disables caching:

```ts
const client = ApiSports({
  apiKey: process.env.API_SPORTS_KEY!,
  fetch: (url, init) =>
    globalThis.fetch(url, { ...init, cache: "no-store" }),
})
```

Or use ISR with a revalidation window:

```ts
fetch: (url, init) =>
  globalThis.fetch(url, { ...init, next: { revalidate: 60 } }),
```

## Cron jobs on Vercel

For cron jobs that batch many requests in a single invocation, Bottleneck in module scope works correctly because the process stays alive for the duration of the job:

```ts
// api/cron/fixtures/routes.ts
import Bottleneck from "bottleneck"
import { ApiSports, ApiSportsError } from "api-sports"

const limiter = new Bottleneck({
  reservoir: 300,
  reservoirRefreshAmount: 300,
  reservoirRefreshInterval: 60_000,
  maxConcurrent: 1,
  minTime: 200,
})

const client = ApiSports({
  apiKey: process.env.API_SPORTS_KEY!,
  fetch: limiter.wrap(globalThis.fetch.bind(globalThis)),
})

export async function GET() {
  // Check live fixtures first — costs only 1 request
  const { response: live } = await client.football.getFixtures({ live: "all" })
  if (live.length === 0) return Response.json({ skipped: true })

  // Process live fixtures...
}
```

> **Note:** Bottleneck state is per-invocation. Do not use it for rate limiting across multiple concurrent serverless invocations — each invocation has its own independent counter.
