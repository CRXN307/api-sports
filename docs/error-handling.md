# Error handling

All API failures throw an `ApiSportsError`. Use `instanceof` to distinguish them from unexpected runtime errors.

```ts
import { ApiSports, ApiSportsError } from "api-sports"

const client = ApiSports({ apiKey: "your-api-key" })

try {
  const { response } = await client.football.getFixtures({ league: 39, season: 2024 })
} catch (err) {
  if (err instanceof ApiSportsError) {
    console.error(err.message) // human-readable description
    console.error(err.status)  // HTTP status code
    console.error(err.code)    // structured error code (see table below)
    console.error(err.errors)  // raw error fields from the API, if any
  }
}
```

## Error codes

| Code | HTTP status | When |
|------|-------------|------|
| `RATE_LIMIT_EXCEEDED` | 429 | Daily quota or per-minute limit exceeded |
| `SERVER_ERROR` | 499 / 500 | API-side failure |
| `API_ERROR` | 200 | Errors in the response envelope (bad params, unknown resource) |

Error codes are also available on the client object — useful for comparisons without importing the constant separately:

```ts
const client = ApiSports({ apiKey: "your-api-key" })

try {
  await client.football.getFixtures({ league: 39, season: 2024 })
} catch (err) {
  if (err instanceof ApiSportsError) {
    if (err.code === client.$ERROR_CODES.RATE_LIMIT_EXCEEDED) {
      // back off and retry later
    }
  }
}
```

## Error scenarios

### Rate limit (429)

The API returns HTTP 429 with an `errors` object:

```json
{ "errors": { "rateLimit": "Too many requests. You have exceeded the limit of requests per minute of your subscription." } }
```

`err.errors` will be `{ rateLimit: "Too many requests..." }` and `err.code` will be `"RATE_LIMIT_EXCEEDED"`.

### Server error (499 / 500)

The API returns a `message` string instead of the standard envelope:

```json
{ "message": "Something went wrong on our end." }
```

`err.errors` will be `{}` and `err.code` will be `"SERVER_ERROR"`.

### API error (200 with errors)

The API returns HTTP 200 but the response envelope contains errors (e.g. invalid parameters):

```json
{ "errors": { "season": "The season field is required." }, "results": 0, "response": [] }
```

`err.errors` will be `{ season: "The season field is required." }` and `err.code` will be `"API_ERROR"`.
