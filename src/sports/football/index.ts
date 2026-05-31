import type { HttpClient } from "../../client"
import { getCountries } from "./endpoints/countries"
import type { GetCountriesParams } from "./endpoints/countries/types"
import { getCoachs } from "./endpoints/coachs"
import type { GetCoachsParams } from "./endpoints/coachs/types"
import {
	getFixtureEvents,
	getFixtureLineups,
	getFixturePlayers,
	getFixtures,
	getFixtureStatistics,
	getHeadToHead,
	getRounds,
} from "./endpoints/fixtures"
import type {
	GetFixtureEventsParams,
	GetFixtureLineupsParams,
	GetFixturePlayersParams,
	GetFixturesParams,
	GetFixtureStatisticsParams,
	GetHeadToHeadParams,
	GetRoundsParams,
} from "./endpoints/fixtures/types"
import { getInjuries } from "./endpoints/injuries"
import type { GetInjuriesParams } from "./endpoints/injuries/types"
import { getLeagues, getSeasons } from "./endpoints/leagues"
import type { GetLeaguesParams } from "./endpoints/leagues/types"
import {
	getOdds,
	getOddsBookmakers,
	getOddsBets,
	getOddsLive,
	getOddsLiveBets,
} from "./endpoints/odds"
import type {
	GetOddsBookmakersParams,
	GetOddsBetsParams,
	GetOddsLiveBetsParams,
	GetOddsLiveParams,
	GetOddsParams,
} from "./endpoints/odds/types"
import {
	getPlayerProfiles,
	getPlayers,
	getPlayerSeasons,
	getPlayerSquads,
	getTopAssists,
	getTopRedCards,
	getTopScorers,
	getTopYellowCards,
} from "./endpoints/players"
import type {
	GetPlayerProfilesParams,
	GetPlayerSeasonsParams,
	GetPlayerSquadsParams,
	GetPlayersParams,
	GetTopPlayersParams,
} from "./endpoints/players/types"
import { getPredictions } from "./endpoints/predictions"
import { getSidelined } from "./endpoints/sidelined"
import type { GetSidelinedParams } from "./endpoints/sidelined/types"
import { getStandings } from "./endpoints/standings"
import type { GetStandingsParams } from "./endpoints/standings/types"
import { getStatus } from "./endpoints/status"
import { getTeamCountries, getTeams, getTeamSeasons, getTeamStatistics } from "./endpoints/teams"
import type {
	GetTeamSeasonsParams,
	GetTeamStatisticsParams,
	GetTeamsParams,
} from "./endpoints/teams/types"
import { getTimezones } from "./endpoints/timezone"
import { getTransfers } from "./endpoints/transfers"
import type { GetTransfersParams } from "./endpoints/transfers/types"
import { getTrophies } from "./endpoints/trophies"
import type { GetTrophiesParams } from "./endpoints/trophies/types"
import { getVenues } from "./endpoints/venues"
import type { GetVenuesParams } from "./endpoints/venues/types"

export const BASE_URL = "https://v3.football.api-sports.io"

/**
 * Football sport module. Receives the shared HTTP client from `ApiSports()`.
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "xxx" })
 * const { response } = await client.football.getFixtures({ league: 39, season: 2024 })
 * ```
 */
export function football(client: HttpClient) {
	return {
		// ─── Account ───────────────────────────────────────────────────────────
		getStatus: () =>
			getStatus(client, BASE_URL),

		// ─── Reference data ────────────────────────────────────────────────────
		getTimezones: () =>
			getTimezones(client, BASE_URL),
		getCountries: (params?: GetCountriesParams) =>
			getCountries(client, BASE_URL, params),
		getSeasons: () =>
			getSeasons(client, BASE_URL),
		getLeagues: (params?: GetLeaguesParams) =>
			getLeagues(client, BASE_URL, params),
		getVenues: (params?: GetVenuesParams) =>
			getVenues(client, BASE_URL, params),

		// ─── Teams ─────────────────────────────────────────────────────────────
		getTeams: (params?: GetTeamsParams) =>
			getTeams(client, BASE_URL, params),
		getTeamStatistics: (params: GetTeamStatisticsParams) =>
			getTeamStatistics(client, BASE_URL, params),
		getTeamSeasons: (params: GetTeamSeasonsParams) =>
			getTeamSeasons(client, BASE_URL, params),
		getTeamCountries: () =>
			getTeamCountries(client, BASE_URL),

		// ─── Fixtures ──────────────────────────────────────────────────────────
		getRounds: (params: GetRoundsParams) =>
			getRounds(client, BASE_URL, params),
		getFixtures: (params?: GetFixturesParams) =>
			getFixtures(client, BASE_URL, params),
		getHeadToHead: (params: GetHeadToHeadParams) =>
			getHeadToHead(client, BASE_URL, params),
		getFixtureStatistics: (params: GetFixtureStatisticsParams) =>
			getFixtureStatistics(client, BASE_URL, params),
		getFixtureEvents: (params: GetFixtureEventsParams) =>
			getFixtureEvents(client, BASE_URL, params),
		getFixtureLineups: (params: GetFixtureLineupsParams) =>
			getFixtureLineups(client, BASE_URL, params),
		getFixturePlayers: (params: GetFixturePlayersParams) =>
			getFixturePlayers(client, BASE_URL, params),

		// ─── Standings ─────────────────────────────────────────────────────────
		getStandings: (params: GetStandingsParams) =>
			getStandings(client, BASE_URL, params),

		// ─── Injuries ──────────────────────────────────────────────────────────
		getInjuries: (params?: GetInjuriesParams) =>
			getInjuries(client, BASE_URL, params),

		// ─── Predictions ───────────────────────────────────────────────────────
		getPredictions: (params: { fixture: number }) =>
			getPredictions(client, BASE_URL, params),

		// ─── Coachs ────────────────────────────────────────────────────────────
		getCoachs: (params?: GetCoachsParams) =>
			getCoachs(client, BASE_URL, params),

		// ─── Players ───────────────────────────────────────────────────────────
		getPlayers: (params?: GetPlayersParams) =>
			getPlayers(client, BASE_URL, params),
		getPlayerSeasons: (params?: GetPlayerSeasonsParams) =>
			getPlayerSeasons(client, BASE_URL, params),
		getPlayerProfiles: (params?: GetPlayerProfilesParams) =>
			getPlayerProfiles(client, BASE_URL, params),
		getPlayerSquads: (params?: GetPlayerSquadsParams) =>
			getPlayerSquads(client, BASE_URL, params),
		getTopScorers: (params: GetTopPlayersParams) =>
			getTopScorers(client, BASE_URL, params),
		getTopAssists: (params: GetTopPlayersParams) =>
			getTopAssists(client, BASE_URL, params),
		getTopYellowCards: (params: GetTopPlayersParams) =>
			getTopYellowCards(client, BASE_URL, params),
		getTopRedCards: (params: GetTopPlayersParams) =>
			getTopRedCards(client, BASE_URL, params),

		// ─── Transfers ─────────────────────────────────────────────────────────
		getTransfers: (params?: GetTransfersParams) =>
			getTransfers(client, BASE_URL, params),

		// ─── Trophies & Sidelined ──────────────────────────────────────────────
		getTrophies: (params?: GetTrophiesParams) =>
			getTrophies(client, BASE_URL, params),
		getSidelined: (params?: GetSidelinedParams) =>
			getSidelined(client, BASE_URL, params),

		// ─── Odds ──────────────────────────────────────────────────────────────
		getOddsLive: (params?: GetOddsLiveParams) =>
			getOddsLive(client, BASE_URL, params),
		getOddsLiveBets: (params?: GetOddsLiveBetsParams) =>
			getOddsLiveBets(client, BASE_URL, params),
		getOdds: (params?: GetOddsParams) =>
			getOdds(client, BASE_URL, params),
		getOddsBookmakers: (params?: GetOddsBookmakersParams) =>
			getOddsBookmakers(client, BASE_URL, params),
		getOddsBets: (params?: GetOddsBetsParams) =>
			getOddsBets(client, BASE_URL, params),
	}
}
