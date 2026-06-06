import type { HttpClient } from "@/types";

import {
	getCoachs,
	getCountries,
	getFixtureEvents,
	getFixtureLineups,
	getFixturePlayersStatistics,
	getFixtureStatistics,
	getFixtures,
	getHeadToHead,
	getInjuries,
	getLeagues,
	getOdds,
	getOddsBets,
	getOddsBookmakers,
	getOddsLive,
	getOddsLiveBets,
	getPlayers,
	getPlayersProfiles,
	getPlayersSeasons,
	getPlayersSquads,
	getPlayersTeams,
	getPlayersTopScorers,
	getPredictions,
	getRounds,
	getSeasons,
	getSidelined,
	getStandings,
	getStatus,
	getTeamCountries,
	getTeamSeasons,
	getTeamStatistics,
	getTeams,
	getTimezones,
	getTopAssists,
	getTopRedCards,
	getTopYellowCards,
	getTransfers,
	getTrophies,
	getVenues,
} from "./endpoints";
import type {
	GetFootballCoachsParams,
	GetFootballCountriesParams,
	GetFootballFixtureEventsParams,
	GetFootballFixtureLineupsParams,
	GetFootballFixturePlayersStatisticsParams,
	GetFootballFixtureStatisticsParams,
	GetFootballFixturesParams,
	GetFootballHeadToHeadParams,
	GetFootballInjuriesParams,
	GetFootballLeaguesParams,
	GetFootballOddsBetsParams,
	GetFootballOddsBookmakersParams,
	GetFootballOddsLiveBetsParams,
	GetFootballOddsLiveParams,
	GetFootballOddsParams,
	GetFootballPlayerProfilesParams,
	GetFootballPlayerSeasonsParams,
	GetFootballPlayerSquadsParams,
	GetFootballPlayersParams,
	GetFootballPlayersTeamsParams,
	GetFootballPlayersTopParams,
	GetFootballPredictionsParams,
	GetFootballRoundsParams,
	GetFootballSidelinedParams,
	GetFootballStandingsParams,
	GetFootballTeamSeasonsParams,
	GetFootballTeamStatisticsParams,
	GetFootballTeamsParams,
	GetFootballTransfersParams,
	GetFootballTrophiesParams,
	GetFootballVenuesParams,
} from "./types";

export const BASE_URL = "https://v3.football.api-sports.io";

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
		getStatus: () => getStatus(client, BASE_URL),

		// ─── Reference data ────────────────────────────────────────────────────
		getTimezones: () => getTimezones(client, BASE_URL),
		getCountries: (params?: GetFootballCountriesParams) =>
			getCountries(client, BASE_URL, params),
		getSeasons: () => getSeasons(client, BASE_URL),
		getLeagues: (params?: GetFootballLeaguesParams) =>
			getLeagues(client, BASE_URL, params),
		getVenues: (params?: GetFootballVenuesParams) =>
			getVenues(client, BASE_URL, params),

		// ─── Teams ─────────────────────────────────────────────────────────────
		getTeams: (params?: GetFootballTeamsParams) =>
			getTeams(client, BASE_URL, params),
		getTeamStatistics: (params: GetFootballTeamStatisticsParams) =>
			getTeamStatistics(client, BASE_URL, params),
		getTeamSeasons: (params: GetFootballTeamSeasonsParams) =>
			getTeamSeasons(client, BASE_URL, params),
		getTeamCountries: () => getTeamCountries(client, BASE_URL),

		// ─── Fixtures ──────────────────────────────────────────────────────────
		getRounds: (params: GetFootballRoundsParams) =>
			getRounds(client, BASE_URL, params),
		getFixtures: (params?: GetFootballFixturesParams) =>
			getFixtures(client, BASE_URL, params),
		getHeadToHead: (params: GetFootballHeadToHeadParams) =>
			getHeadToHead(client, BASE_URL, params),
		getFixtureStatistics: (params: GetFootballFixtureStatisticsParams) =>
			getFixtureStatistics(client, BASE_URL, params),
		getFixtureEvents: (params: GetFootballFixtureEventsParams) =>
			getFixtureEvents(client, BASE_URL, params),
		getFixtureLineups: (params: GetFootballFixtureLineupsParams) =>
			getFixtureLineups(client, BASE_URL, params),
		getFixturePlayersStatistics: (
			params: GetFootballFixturePlayersStatisticsParams,
		) => getFixturePlayersStatistics(client, BASE_URL, params),

		// ─── Standings ─────────────────────────────────────────────────────────
		getStandings: (params: GetFootballStandingsParams) =>
			getStandings(client, BASE_URL, params),

		// ─── Injuries ──────────────────────────────────────────────────────────
		getInjuries: (params?: GetFootballInjuriesParams) =>
			getInjuries(client, BASE_URL, params),

		// ─── Predictions ───────────────────────────────────────────────────────
		getPredictions: (params: GetFootballPredictionsParams) =>
			getPredictions(client, BASE_URL, params),

		// ─── Coachs ────────────────────────────────────────────────────────────
		getCoachs: (params?: GetFootballCoachsParams) =>
			getCoachs(client, BASE_URL, params),

		// ─── Players ───────────────────────────────────────────────────────────
		getPlayers: (params?: GetFootballPlayersParams) =>
			getPlayers(client, BASE_URL, params),
		getPlayersSeasons: (params?: GetFootballPlayerSeasonsParams) =>
			getPlayersSeasons(client, BASE_URL, params),
		getPlayersProfiles: (params?: GetFootballPlayerProfilesParams) =>
			getPlayersProfiles(client, BASE_URL, params),
		getPlayerSquads: (params?: GetFootballPlayerSquadsParams) =>
			getPlayersSquads(client, BASE_URL, params),
		getPlayersTeams: (params?: GetFootballPlayersTeamsParams) =>
			getPlayersTeams(client, BASE_URL, params),
		getPlayersTopScorers: (params: GetFootballPlayersTopParams) =>
			getPlayersTopScorers(client, BASE_URL, params),
		getPlayersTopAssists: (params: GetFootballPlayersTopParams) =>
			getTopAssists(client, BASE_URL, params),
		getPlayersTopYellowCards: (params: GetFootballPlayersTopParams) =>
			getTopYellowCards(client, BASE_URL, params),
		getPlayersTopRedCards: (params: GetFootballPlayersTopParams) =>
			getTopRedCards(client, BASE_URL, params),

		// ─── Transfers ─────────────────────────────────────────────────────────
		getTransfers: (params?: GetFootballTransfersParams) =>
			getTransfers(client, BASE_URL, params),

		// ─── Trophies & Sidelined ──────────────────────────────────────────────
		getTrophies: (params?: GetFootballTrophiesParams) =>
			getTrophies(client, BASE_URL, params),
		getSidelined: (params?: GetFootballSidelinedParams) =>
			getSidelined(client, BASE_URL, params),

		// ─── Odds ──────────────────────────────────────────────────────────────
		getOddsLive: (params?: GetFootballOddsLiveParams) =>
			getOddsLive(client, BASE_URL, params),
		getOddsLiveBets: (params?: GetFootballOddsLiveBetsParams) =>
			getOddsLiveBets(client, BASE_URL, params),
		getOdds: (params?: GetFootballOddsParams) =>
			getOdds(client, BASE_URL, params),
		getOddsBookmakers: (params?: GetFootballOddsBookmakersParams) =>
			getOddsBookmakers(client, BASE_URL, params),
		getOddsBets: (params?: GetFootballOddsBetsParams) =>
			getOddsBets(client, BASE_URL, params),
	};
}
