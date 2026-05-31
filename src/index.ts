import { createHttpClient } from "./client"
import type { HttpClient } from "./client"
import { API_SPORTS_ERROR_CODES } from "./error"
import { football } from "./sports/football"

/**
 * Options for initialising the API-Sports client.
 *
 * @param apiKey - Your API-Sports key.
 * @param fetch - Optional custom fetch implementation (e.g. a throttled fetch for rate limiting).
 */
export type ApiSportsOptions = {
	apiKey: string
	fetch?: typeof globalThis.fetch
}

/**
 * Internal factory that wires the init function to the client.
 * Mirrors the `createBetterAuth(options, initFn)` pattern.
 */
function createApiSports<Options extends ApiSportsOptions>(
	options: Options,
	init: (options: Options) => HttpClient,
) {
	const client = init(options)

	return {
		football: football(client),
		$ERROR_CODES: API_SPORTS_ERROR_CODES,
	}
}

/**
 * Creates an API-Sports client.
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "xxx" })
 * const { response } = await client.football.getFixtures({ league: 39, season: 2024 })
 * ```
 */
export function ApiSports<Options extends ApiSportsOptions>(options: Options) {
	return createApiSports(options, createHttpClient)
}

// ─── Core ──────────────────────────────────────────────────────────────────────
export { ApiSportsError, API_SPORTS_ERROR_CODES } from "./error"
export type { ApiSportsErrorCode } from "./error"
export type { HttpClient } from "./client"
export type { ApiResponse, Paging } from "./types/api"
export type { ClientOptions } from "./types/client"

// ─── Football — shared ─────────────────────────────────────────────────────────
export type {
	Country,
	FixtureGoals,
	TeamInfo,
	PlayerBirth,
	PlayerProfile,
	PlayerStatistics,
	PlayerWithStats,
} from "./sports/football/types"

// ─── Football — status ─────────────────────────────────────────────────────────
export type { StatusResponse } from "./sports/football/endpoints/status/types"

// ─── Football — countries ──────────────────────────────────────────────────────
export type { GetCountriesParams } from "./sports/football/endpoints/countries/types"

// ─── Football — leagues ────────────────────────────────────────────────────────
export type {
	LeagueResponse,
	LeagueSeason,
	FixtureCoverage,
	GetLeaguesParams,
} from "./sports/football/endpoints/leagues/types"

// ─── Football — teams ──────────────────────────────────────────────────────────
export type {
	TeamResponse,
	TeamStatisticsResponse,
	GetTeamsParams,
	GetTeamStatisticsParams,
	GetTeamSeasonsParams,
} from "./sports/football/endpoints/teams/types"

// ─── Football — venues ─────────────────────────────────────────────────────────
export type {
	VenueResponse,
	GetVenuesParams,
} from "./sports/football/endpoints/venues/types"

// ─── Football — standings ──────────────────────────────────────────────────────
export type {
	Standing,
	StandingsResponse,
	GetStandingsParams,
} from "./sports/football/endpoints/standings/types"

// ─── Football — fixtures ───────────────────────────────────────────────────────
export type {
	FixtureResponse,
	FixtureStatusShort,
	FixtureStatistic,
	FixtureStatisticsResponse,
	FixtureEvent,
	FixtureLineupsPlayer,
	FixtureLineup,
	FixturePlayerStatistics,
	FixturePlayersResponse,
	GetRoundsParams,
	GetFixturesParams,
	GetHeadToHeadParams,
	GetFixtureStatisticsParams,
	GetFixtureEventsParams,
	GetFixtureLineupsParams,
	GetFixturePlayersParams,
} from "./sports/football/endpoints/fixtures/types"

// ─── Football — injuries ───────────────────────────────────────────────────────
export type {
	InjuryResponse,
	GetInjuriesParams,
} from "./sports/football/endpoints/injuries/types"

// ─── Football — predictions ────────────────────────────────────────────────────
export type { PredictionResponse } from "./sports/football/endpoints/predictions/types"

// ─── Football — coachs ─────────────────────────────────────────────────────────
export type {
	CoachResponse,
	GetCoachsParams,
} from "./sports/football/endpoints/coachs/types"

// ─── Football — players ────────────────────────────────────────────────────────
export type {
	PlayerSquadResponse,
	PlayerProfileResponse,
	GetPlayersParams,
	GetPlayerProfilesParams,
	GetPlayerSeasonsParams,
	GetPlayerSquadsParams,
	GetTopPlayersParams,
} from "./sports/football/endpoints/players/types"

// ─── Football — transfers ──────────────────────────────────────────────────────
export type {
	TransferResponse,
	GetTransfersParams,
} from "./sports/football/endpoints/transfers/types"

// ─── Football — trophies ───────────────────────────────────────────────────────
export type {
	TrophyResponse,
	GetTrophiesParams,
} from "./sports/football/endpoints/trophies/types"

// ─── Football — sidelined ──────────────────────────────────────────────────────
export type {
	SidelinedResponse,
	GetSidelinedParams,
} from "./sports/football/endpoints/sidelined/types"

// ─── Football — odds ───────────────────────────────────────────────────────────
export type {
	OddsLiveResponse,
	OddsLiveBet,
	OddsLiveValue,
	OddsResponse,
	OddsNameResponse,
	OddsValue,
	GetOddsLiveParams,
	GetOddsLiveBetsParams,
	GetOddsParams,
	GetOddsBookmakersParams,
	GetOddsBetsParams,
} from "./sports/football/endpoints/odds/types"
