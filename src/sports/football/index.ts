import type { HttpClient } from "@/types";
import {
  getStatus,
  getTimezones,
  getCountries,
  type GetCountriesParams,
  getSeasons,
  getLeagues,
  type GetLeaguesParams,
  getVenues,
  type GetVenuesParams,
  getTeams,
  type GetTeamsParams,
  getTeamStatistics,
  type GetTeamStatisticsParams,
  getTeamSeasons,
  type GetTeamSeasonsParams,
  getTeamCountries,
  getRounds,
  type GetRoundsParams,
  getFixtures,
  type GetFixturesParams,
  getHeadToHead,
  type GetHeadToHeadParams,
  getFixtureStatistics,
  type GetFixtureStatisticsParams,
  getFixtureEvents,
  type GetFixtureEventsParams,
  getFixtureLineups,
  type GetFixtureLineupsParams,
  getFixturePlayers,
  type GetFixturePlayersParams,
  getStandings,
  type GetStandingsParams,
  getInjuries,
  type GetInjuriesParams,
  getPredictions,
  getCoachs,
  type GetCoachsParams,
  getPlayers,
  type GetPlayersParams,
  getPlayersSeasons,
  type GetPlayerSeasonsParams,
  getPlayersProfiles,
  type GetPlayerProfilesParams,
  getPlayersSquads,
  type GetPlayerSquadsParams,
  getPlayersTeams,
  type GetPlayersTeamsParams,
  getPlayersTopScorers,
  type GetPlayersTopScorersParams,
  getTopAssists,
  getTopYellowCards,
  getTopRedCards,
  getTransfers,
  type GetTransfersParams,
  getTrophies,
  type GetTrophiesParams,
  getSidelined,
  type GetSidelinedParams,
  getOddsLive,
  type GetOddsLiveParams,
  getOddsLiveBets,
  type GetOddsLiveBetsParams,
  getOdds,
  type GetOddsParams,
  getOddsBookmakers,
  type GetOddsBookmakersParams,
  getOddsBets,
  type GetOddsBetsParams,
} from "./endpoints";

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
    getCountries: (params?: GetCountriesParams) =>
      getCountries(client, BASE_URL, params),
    getSeasons: () => getSeasons(client, BASE_URL),
    getLeagues: (params?: GetLeaguesParams) =>
      getLeagues(client, BASE_URL, params),
    getVenues: (params?: GetVenuesParams) =>
      getVenues(client, BASE_URL, params),

    // ─── Teams ─────────────────────────────────────────────────────────────
    getTeams: (params?: GetTeamsParams) => getTeams(client, BASE_URL, params),
    getTeamStatistics: (params: GetTeamStatisticsParams) =>
      getTeamStatistics(client, BASE_URL, params),
    getTeamSeasons: (params: GetTeamSeasonsParams) =>
      getTeamSeasons(client, BASE_URL, params),
    getTeamCountries: () => getTeamCountries(client, BASE_URL),

    // ─── Fixtures ──────────────────────────────────────────────────────────
    getRounds: (params: GetRoundsParams) => getRounds(client, BASE_URL, params),
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
    getPlayersSeasons: (params?: GetPlayerSeasonsParams) =>
      getPlayersSeasons(client, BASE_URL, params),
    getPlayersProfiles: (params?: GetPlayerProfilesParams) =>
      getPlayersProfiles(client, BASE_URL, params),
    getPlayerSquads: (params?: GetPlayerSquadsParams) =>
      getPlayersSquads(client, BASE_URL, params),
    getPlayersTeamsParams: (params?: GetPlayersTeamsParams) =>
      getPlayersTeams(client, BASE_URL, params),
    getPlayersTopScorers: (params: GetPlayersTopScorersParams) =>
      getPlayersTopScorers(client, BASE_URL, params),
    getPlayersTopAssists: (params: GetPlayersTopScorersParams) =>
      getTopAssists(client, BASE_URL, params),
    getPlayersTopYellowCards: (params: GetPlayersTopScorersParams) =>
      getTopYellowCards(client, BASE_URL, params),
    getPlayersTopRedCards: (params: GetPlayersTopScorersParams) =>
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
    getOdds: (params?: GetOddsParams) => getOdds(client, BASE_URL, params),
    getOddsBookmakers: (params?: GetOddsBookmakersParams) =>
      getOddsBookmakers(client, BASE_URL, params),
    getOddsBets: (params?: GetOddsBetsParams) =>
      getOddsBets(client, BASE_URL, params),
  };
}
