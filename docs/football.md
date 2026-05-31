# Football

```ts
import { ApiSports } from "api-sports"

const client = ApiSports({ apiKey: "your-api-key" })

// client.football.<method>(params)
```

Base URL: `https://v3.football.api-sports.io`

## Account

| Method | Description |
|--------|-------------|
| `getStatus()` | API account status and subscription info |

## Reference data

| Method | Params | Description |
|--------|--------|-------------|
| `getTimezones()` | — | Supported timezones |
| `getCountries(params?)` | `name?` `code?` `search?` | Countries supported by the API |
| `getSeasons()` | — | All available seasons |
| `getLeagues(params?)` | `id?` `name?` `country?` `code?` `season?` `team?` `type?` `current?` `search?` `last?` | Leagues and cups |
| `getVenues(params?)` | `id?` `name?` `city?` `country?` `search?` | Stadium and venue data |

## Teams

| Method | Params | Description |
|--------|--------|-------------|
| `getTeams(params?)` | `id?` `name?` `league?` `season?` `country?` `search?` | Team info |
| `getTeamStatistics(params)` | `league` `season` `team` `date?` | Season statistics for a team |
| `getTeamSeasons(params)` | `team` | Seasons a team has data for |
| `getTeamCountries()` | — | Countries that have at least one team |

## Fixtures

| Method | Params | Description |
|--------|--------|-------------|
| `getRounds(params)` | `league` `season` `current?` `dates?` `timezone?` | Rounds in a league/season |
| `getFixtures(params?)` | `id?` `ids?` `live?` `date?` `league?` `season?` `team?` `last?` `next?` `from?` `to?` `round?` `status?` `venue?` `timezone?` | Fixtures with results |
| `getHeadToHead(params)` | `h2h` `date?` `league?` `season?` `last?` `next?` `from?` `to?` `status?` `venue?` `timezone?` | Head-to-head history between two teams |
| `getFixtureStatistics(params)` | `fixture` `team?` `type?` `half?` | In-match statistics |
| `getFixtureEvents(params)` | `fixture` `team?` `player?` `type?` | Goals, cards, substitutions |
| `getFixtureLineups(params)` | `fixture` `team?` `player?` `type?` | Starting XI and substitutes |
| `getFixturePlayers(params)` | `fixture` `team?` | Player statistics for a fixture |

### Live fixtures

```ts
// All currently live fixtures
const { response } = await client.football.getFixtures({ live: "all" })

// Live fixtures for specific leagues
const { response } = await client.football.getFixtures({ live: "39-61" })
```

### Fixture status codes

| Short | Long |
|-------|------|
| `NS` | Not Started |
| `1H` | First Half |
| `HT` | Halftime |
| `2H` | Second Half |
| `ET` | Extra Time |
| `BT` | Break Time |
| `P` | Penalty In Progress |
| `FT` | Match Finished |
| `AET` | After Extra Time |
| `PEN` | After Penalties |
| `SUSP` | Match Suspended |
| `INT` | Match Interrupted |
| `PST` | Match Postponed |
| `CANC` | Match Cancelled |
| `ABD` | Match Abandoned |
| `AWD` | Technical Loss |
| `WO` | WalkOver |
| `TBD` | To Be Defined |
| `LIVE` | In Progress |

Filter by status:

```ts
// Postponed and cancelled fixtures
const { response } = await client.football.getFixtures({
  league: 39,
  season: 2024,
  status: "PST-CANC",
})
```

## Standings

| Method | Params | Description |
|--------|--------|-------------|
| `getStandings(params)` | `league` `season` `team?` | League table |

## Injuries

| Method | Params | Description |
|--------|--------|-------------|
| `getInjuries(params?)` | `league?` `season?` `fixture?` `team?` `player?` `date?` `timezone?` | Player injuries |

## Predictions

| Method | Params | Description |
|--------|--------|-------------|
| `getPredictions(params)` | `fixture` | Match predictions and team comparison |

## Coachs

| Method | Params | Description |
|--------|--------|-------------|
| `getCoachs(params?)` | `id?` `team?` `search?` | Coach info and career history |

## Players

| Method | Params | Description |
|--------|--------|-------------|
| `getPlayers(params?)` | `id?` `team?` `league?` `season?` `search?` `page?` | Player season statistics |
| `getPlayerSeasons(params?)` | `player?` | Seasons a player has data for |
| `getPlayerProfiles(params?)` | `player?` | Player profile without season stats |
| `getPlayerSquads(params?)` | `team?` `player?` | Current squad or player's current team |
| `getTopScorers(params)` | `league` `season` | Top goal scorers |
| `getTopAssists(params)` | `league` `season` | Top assist providers |
| `getTopYellowCards(params)` | `league` `season` | Most yellow cards |
| `getTopRedCards(params)` | `league` `season` | Most red cards |

### Pagination

Endpoints that support `page` return a `paging` object:

```ts
const { response, paging, results } = await client.football.getPlayers({
  league: 39,
  season: 2024,
  page: 2,
})

console.log(paging.current) // 2
console.log(paging.total)   // total number of pages
```

## Transfers

| Method | Params | Description |
|--------|--------|-------------|
| `getTransfers(params?)` | `player?` `team?` | Transfer history for a player or team |

## Trophies & Sidelined

| Method | Params | Description |
|--------|--------|-------------|
| `getTrophies(params?)` | `player?` `coach?` | Trophies won by a player or coach |
| `getSidelined(params?)` | `player?` `coach?` | Sidelined periods — injuries and suspensions |

## Odds

| Method | Params | Description |
|--------|--------|-------------|
| `getOddsLive(params?)` | `fixture?` `league?` `bet?` | Live in-play odds |
| `getOddsLiveBets(params?)` | `id?` `search?` | Bet types available for live odds |
| `getOdds(params?)` | `fixture?` `league?` `season?` `date?` `timezone?` `page?` `bookmaker?` `bet?` | Pre-match odds |
| `getOddsBookmakers(params?)` | `id?` `search?` | Available bookmakers |
| `getOddsBets(params?)` | `id?` `search?` | Bet types available for pre-match odds |
