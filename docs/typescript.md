# TypeScript

All types are exported from the package root.

## Response shape

Every method returns `Promise<ApiResponse<T>>`:

```ts
type ApiResponse<T> = {
  get: string
  parameters: Record<string, string> | []
  errors: Record<string, string> | []
  results: number
  paging: { current: number; total: number }
  response: T
}
```

Destructure what you need:

```ts
const { response, paging, results } = await client.football.getFixtures({
  league: 39,
  season: 2024,
})
```

## Exported types

### Core

```ts
import type {
  ApiResponse,          // generic response envelope
  Paging,               // { current: number; total: number }
  ApiSportsErrorCode,   // "RATE_LIMIT_EXCEEDED" | "SERVER_ERROR" | "API_ERROR"
  HttpClient,           // internal HTTP client interface
  ClientOptions,        // { apiKey: string; fetch?: ... }
} from "api-sports"
```

### Football — shared

```ts
import type {
  Country,              // { name: string; code: string | null; flag: string | null }
  FixtureGoals,         // { home: number | null; away: number | null }
  TeamInfo,             // { id: number; name: string; logo: string }
  PlayerBirth,          // { date: string | null; place: string | null; country: string | null }
  PlayerProfile,        // id, name, age, nationality, photo, ...
  PlayerStatistics,     // goals, assists, cards, passes, ...
  PlayerWithStats,      // { player: PlayerProfile; statistics: PlayerStatistics[] }
} from "api-sports"
```

### Football — fixtures

```ts
import type {
  FixtureResponse,           // full fixture object (teams, league, score, status...)
  FixtureStatusShort,        // "NS" | "1H" | "HT" | "2H" | "FT" | ... (19 values)
  FixtureStatistic,          // { type: string; value: string | number | null }
  FixtureStatisticsResponse, // { team: TeamInfo; statistics: FixtureStatistic[] }
  FixtureEvent,              // goal, card, substitution event
  FixtureLineupsPlayer,      // { id, name, number, pos, grid }
  FixtureLineup,             // formation, startXI, substitutes, coach
  FixturePlayerStatistics,   // per-player stats (shots, passes, cards, ...)
  FixturePlayersResponse,    // { team: TeamInfo; players: [...] }
  GetRoundsParams,
  GetFixturesParams,
  GetHeadToHeadParams,
  GetFixtureStatisticsParams,
  GetFixtureEventsParams,
  GetFixtureLineupsParams,
  GetFixturePlayersParams,
} from "api-sports"
```

### Football — leagues & teams

```ts
import type {
  LeagueResponse,            // league info + seasons array
  LeagueSeason,              // { year, start, end, current, coverage }
  FixtureCoverage,           // coverage flags (lineups, events, statistics, ...)
  GetLeaguesParams,
  TeamResponse,              // { team: {...}; venue: {...} }
  TeamStatisticsResponse,    // full season stats for a team
  GetTeamsParams,
  GetTeamStatisticsParams,
  GetTeamSeasonsParams,
} from "api-sports"
```

### Football — players

```ts
import type {
  PlayerSquadResponse,       // { id, name, age, number, pos, photo }
  PlayerProfileResponse,     // { player: PlayerProfile; statistics: [] }
  GetPlayersParams,
  GetPlayerProfilesParams,
  GetPlayerSeasonsParams,
  GetPlayerSquadsParams,
  GetTopPlayersParams,       // { league: number; season: number }
} from "api-sports"
```

### Football — odds

```ts
import type {
  OddsLiveResponse,          // live fixture odds
  OddsLiveBet,               // { id, name, values: OddsLiveValue[] }
  OddsLiveValue,             // { value, odd, handicap, main, suspended }
  OddsResponse,              // pre-match fixture odds per bookmaker
  OddsNameResponse,          // { id: number; name: string }
  OddsValue,                 // { value: string; odd: string }
  GetOddsLiveParams,
  GetOddsLiveBetsParams,
  GetOddsParams,
  GetOddsBookmakersParams,
  GetOddsBetsParams,
} from "api-sports"
```

### Football — other

```ts
import type {
  VenueResponse,             // venue info (name, city, capacity, ...)
  GetVenuesParams,
  Standing,                  // single team standing entry
  StandingsResponse,         // { league: {...}; standings: Standing[][] }
  GetStandingsParams,
  InjuryResponse,            // player injury record
  GetInjuriesParams,
  PredictionResponse,        // prediction + comparison data
  CoachResponse,             // coach info + career + trophies
  GetCoachsParams,
  TransferResponse,          // transfer record for a player or team
  GetTransfersParams,
  TrophyResponse,            // { league, country, season, place }
  GetTrophiesParams,
  SidelinedResponse,         // { type: string; start: string; end: string | null }
  GetSidelinedParams,
  GetCountriesParams,
} from "api-sports"
```

## Typing responses manually

When you need to annotate a variable before the call:

```ts
import type { ApiResponse, FixtureResponse } from "api-sports"

let data: ApiResponse<FixtureResponse[]>

data = await client.football.getFixtures({ league: 39, season: 2024 })
```
