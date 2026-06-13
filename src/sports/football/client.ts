import type { HttpClient } from "@/types";

import {
  getCoachs,
  getCountries,
  getFixtureEvents,
  getFixtureLineups,
  getFixturePlayersStatistics,
  getFixtureRounds,
  getFixtureStatistics,
  getFixtures,
  getFixturesHeadToHead,
  getInjuries,
  getLeagueSeasons,
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
  GetFootballFixtureHeadToHeadParams,
  GetFootballFixtureLineupsParams,
  GetFootballFixturePlayersStatisticsParams,
  GetFootballFixtureRoundsParams,
  GetFootballFixtureStatisticsParams,
  GetFootballFixturesParams,
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
    getCountries: <
      P extends GetFootballCountriesParams | undefined = undefined,
    >(
      params?: P,
    ) => getCountries(client, BASE_URL, params),
    getLeagueSeasons: () => getLeagueSeasons(client, BASE_URL),
    getLeagues: <P extends GetFootballLeaguesParams | undefined = undefined>(
      params?: P,
    ) => getLeagues(client, BASE_URL, params),
    getVenues: <P extends GetFootballVenuesParams | undefined = undefined>(
      params?: P,
    ) => getVenues(client, BASE_URL, params),

    // ─── Teams ─────────────────────────────────────────────────────────────
    getTeams: <P extends GetFootballTeamsParams | undefined = undefined>(
      params?: P,
    ) => getTeams(client, BASE_URL, params),
    getTeamStatistics: <P extends GetFootballTeamStatisticsParams>(params: P) =>
      getTeamStatistics(client, BASE_URL, params),
    getTeamSeasons: <P extends GetFootballTeamSeasonsParams>(params: P) =>
      getTeamSeasons(client, BASE_URL, params),
    getTeamCountries: () => getTeamCountries(client, BASE_URL),

    // ─── Fixtures ──────────────────────────────────────────────────────────
    getFixtureRounds: <P extends GetFootballFixtureRoundsParams>(params: P) =>
      getFixtureRounds(client, BASE_URL, params),
    getFixtures: <P extends GetFootballFixturesParams | undefined = undefined>(
      params: P,
    ) => getFixtures(client, BASE_URL, params),
    getFixturesHeadToHead: <P extends GetFootballFixtureHeadToHeadParams>(
      params: P,
    ) => getFixturesHeadToHead(client, BASE_URL, params),
    getFixtureStatistics: <P extends GetFootballFixtureStatisticsParams>(
      params: P,
    ) => getFixtureStatistics(client, BASE_URL, params),
    getFixtureEvents: <P extends GetFootballFixtureEventsParams>(params: P) =>
      getFixtureEvents(client, BASE_URL, params),
    getFixtureLineups: <P extends GetFootballFixtureLineupsParams>(params: P) =>
      getFixtureLineups(client, BASE_URL, params),
    getFixturePlayersStatistics: <
      P extends GetFootballFixturePlayersStatisticsParams,
    >(
      params: P,
    ) => getFixturePlayersStatistics(client, BASE_URL, params),

    // ─── Standings ─────────────────────────────────────────────────────────
    getStandings: <P extends GetFootballStandingsParams>(params: P) =>
      getStandings(client, BASE_URL, params),

    // ─── Injuries ──────────────────────────────────────────────────────────
    getInjuries: <P extends GetFootballInjuriesParams | undefined = undefined>(
      params: P,
    ) => getInjuries(client, BASE_URL, params),

    // ─── Predictions ───────────────────────────────────────────────────────
    getPredictions: <P extends GetFootballPredictionsParams>(params: P) =>
      getPredictions(client, BASE_URL, params),

    // ─── Coachs ────────────────────────────────────────────────────────────
    getCoachs: <P extends GetFootballCoachsParams | undefined = undefined>(
      params: P,
    ) => getCoachs(client, BASE_URL, params),

    // ─── Players ───────────────────────────────────────────────────────────
    getPlayers: <P extends GetFootballPlayersParams | undefined = undefined>(
      params: P,
    ) => getPlayers(client, BASE_URL, params),
    getPlayersSeasons: <
      P extends GetFootballPlayerSeasonsParams | undefined = undefined,
    >(
      params: P,
    ) => getPlayersSeasons(client, BASE_URL, params),
    getPlayersProfiles: <
      P extends GetFootballPlayerProfilesParams | undefined = undefined,
    >(
      params: P,
    ) => getPlayersProfiles(client, BASE_URL, params),
    getPlayerSquads: <
      P extends GetFootballPlayerSquadsParams | undefined = undefined,
    >(
      params: P,
    ) => getPlayersSquads(client, BASE_URL, params),
    getPlayersTeams: <P extends GetFootballPlayersTeamsParams>(params: P) =>
      getPlayersTeams(client, BASE_URL, params),
    getPlayersTopScorers: <P extends GetFootballPlayersTopParams>(params: P) =>
      getPlayersTopScorers(client, BASE_URL, params),
    getPlayersTopAssists: <P extends GetFootballPlayersTopParams>(params: P) =>
      getTopAssists(client, BASE_URL, params),
    getPlayersTopYellowCards: <P extends GetFootballPlayersTopParams>(
      params: P,
    ) => getTopYellowCards(client, BASE_URL, params),
    getPlayersTopRedCards: <P extends GetFootballPlayersTopParams>(params: P) =>
      getTopRedCards(client, BASE_URL, params),

    // ─── Transfers ─────────────────────────────────────────────────────────
    getTransfers: <
      P extends GetFootballTransfersParams | undefined = undefined,
    >(
      params: P,
    ) => getTransfers(client, BASE_URL, params),

    // ─── Trophies & Sidelined ──────────────────────────────────────────────
    getTrophies: <P extends GetFootballTrophiesParams | undefined = undefined>(
      params: P,
    ) => getTrophies(client, BASE_URL, params),
    getSidelined: <
      P extends GetFootballSidelinedParams | undefined = undefined,
    >(
      params: P,
    ) => getSidelined(client, BASE_URL, params),

    // ─── Odds ──────────────────────────────────────────────────────────────
    getOddsLive: <P extends GetFootballOddsLiveParams | undefined = undefined>(
      params: P,
    ) => getOddsLive(client, BASE_URL, params),
    getOddsLiveBets: <
      P extends GetFootballOddsLiveBetsParams | undefined = undefined,
    >(
      params: P,
    ) => getOddsLiveBets(client, BASE_URL, params),
    getOdds: <P extends GetFootballOddsParams | undefined = undefined>(
      params: P,
    ) => getOdds(client, BASE_URL, params),
    getOddsBookmakers: <
      P extends GetFootballOddsBookmakersParams | undefined = undefined,
    >(
      params: P,
    ) => getOddsBookmakers(client, BASE_URL, params),
    getOddsBets: <P extends GetFootballOddsBetsParams | undefined = undefined>(
      params: P,
    ) => getOddsBets(client, BASE_URL, params),
  };
}
