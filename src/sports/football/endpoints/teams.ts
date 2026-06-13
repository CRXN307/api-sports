import type { HttpClient } from "@/types";

import type { FootballCountriesResponse } from "../types/countries";
import type {
	FootballTeamResponse,
	FootballTeamSeasonsResponse,
	FootballTeamsStatisticsResponse,
	GetFootballTeamSeasonsParams,
	GetFootballTeamStatisticsParams,
	GetFootballTeamsParams,
} from "../types/teams";

/**
 * Returns teams with their home venue.
 *
 * **At least one parameter is required.**
 * Team IDs are unique and stable across all leagues and seasons.
 * Team logos are available at `https://media.api-sports.io/football/teams/{id}.png`.
 * All parameters can be combined.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.id - The team id
 * @param params.name - The team name (e.g. `"manchester united"`)
 * @param params.league - Filter by league id
 * @param params.season - Season year, 4 digits (e.g. `2023`) — use with `league`
 * @param params.country - The country name of the team (e.g. `"england"`)
 * @param params.code - The team code, exactly 3 chars (e.g. `"MUN"`)
 * @param params.venue - Filter by venue id
 * @param params.search - Search by name or country, min 3 chars
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getTeams({ league: 39, season: 2023 });
 * // response: [{ team: { id: 33, name: "Manchester United", ... }, venue: { ... } }]
 * ```
 */
export function getTeams<P extends GetFootballTeamsParams | undefined = undefined>(
	client: HttpClient,
	baseUrl: string,
	params?: P,
) {
	return client.get<FootballTeamResponse[], P>(baseUrl, "teams", params);
}

/**
 * Returns aggregated statistics for a team in a specific league and season.
 *
 * Includes fixtures, goals (with minute distribution and over/under), biggest streaks,
 * clean sheets, failed-to-score counts, penalty stats, lineup formations and card distribution.
 * Pass `date` to limit stats to matches played up to that date; omit for full season stats.
 *
 * **Recommended calls:** 1 per day for teams with fixtures that day, otherwise 1 per week.
 *
 * @param params.league - The league id (required)
 * @param params.season - Season year, 4 digits (required, e.g. `2023`)
 * @param params.team - The team id (required)
 * @param params.date - Cutoff date in `YYYY-MM-DD` format (optional)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getTeamStatistics({ league: 39, season: 2023, team: 33 });
 * // With date cutoff:
 * const { response: upTo } = await client.football.getTeamStatistics({ league: 39, season: 2023, team: 33, date: "2023-10-08" });
 * ```
 */
export function getTeamStatistics<P extends GetFootballTeamStatisticsParams>(
	client: HttpClient,
	baseUrl: string,
	params: P,
) {
	return client.get<FootballTeamsStatisticsResponse, P>(
		baseUrl,
		"teams/statistics",
		params,
	);
}

/**
 * Returns all seasons (4-digit years) in which the team has participated.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.team - The team id (required)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getTeamSeasons({ team: 33 });
 * // response: [2010, 2011, ..., 2023]
 * ```
 */
export function getTeamSeasons<P extends GetFootballTeamSeasonsParams>(
	client: HttpClient,
	baseUrl: string,
	params: P,
) {
	return client.get<FootballTeamSeasonsResponse[], P>(
		baseUrl,
		"teams/seasons",
		params,
	);
}

/**
 * Returns the list of countries available as filters for the `teams` endpoint.
 *
 * No parameters required.
 *
 * **Recommended calls:** 1 per day.
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getTeamCountries();
 * // response: [{ name: "England", code: "GB", flag: "https://media.api-sports.io/flags/gb.svg" }]
 * ```
 */
export function getTeamCountries(client: HttpClient, baseUrl: string) {
	return client.get<FootballCountriesResponse[], undefined>(baseUrl, "teams/countries");
}
