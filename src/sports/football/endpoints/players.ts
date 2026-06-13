import type { HttpClient } from "@/types";

import type {
	FootballPlayersProfilesResponse,
	FootballPlayersResponse,
	FootballPlayersSeasonsResponse,
	FootballPlayersSquadsResponse,
	FootballPlayersTeamsResponse,
	GetFootballPlayerProfilesParams,
	GetFootballPlayerSeasonsParams,
	GetFootballPlayerSquadsParams,
	GetFootballPlayersParams,
	GetFootballPlayersTeamsParams,
	GetFootballPlayersTopParams,
} from "../types/players";

/**
 * Returns players matching the given filters, with per-league statistics.
 *
 * Results are paginated. Use `page` to iterate through results.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.id - The player id
 * @param params.team - Filter by team id
 * @param params.league - Filter by league id
 * @param params.season - Season year, 4 digits (e.g. `2023`)
 * @param params.search - Search by player name (min 3 characters)
 * @param params.page - Page number for paginated results
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getPlayers({ league: 39, season: 2023 });
 * // response: [{ player: { id: 306, name: "Marcus Rashford", ... }, statistics: { goals: { total: 17, ... }, ... } }]
 * ```
 */
export function getPlayers<P extends GetFootballPlayersParams | undefined = undefined>(
	client: HttpClient,
	baseUrl: string,
	params?: P,
) {
	return client.get<FootballPlayersResponse[], P>(baseUrl, "players", params);
}

/**
 * Returns all seasons a player has statistics for.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.player - The player id
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getPlayersSeasons({ player: 306 });
 * // response: [2018, 2019, 2020, 2021, 2022, 2023]
 * ```
 */
export function getPlayersSeasons<P extends GetFootballPlayerSeasonsParams | undefined = undefined>(
	client: HttpClient,
	baseUrl: string,
	params?: P,
) {
	return client.get<FootballPlayersSeasonsResponse[], P>(
		baseUrl,
		"players/seasons",
		params,
	);
}

/**
 * Returns player profiles without statistics.
 *
 * Includes personal details and current position/number. Paginated.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.player - The player id
 * @param params.search - Search by player name (min 3 characters)
 * @param params.page - Page number for paginated results
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getPlayersProfiles({ search: "Rashford" });
 * // response: [{ player: { id: 306, name: "Marcus Rashford", position: "Attacker", ... } }]
 * ```
 */
export function getPlayersProfiles<P extends GetFootballPlayerProfilesParams | undefined = undefined>(
	client: HttpClient,
	baseUrl: string,
	params?: P,
) {
	return client.get<FootballPlayersProfilesResponse[], P>(
		baseUrl,
		"players/profiles",
		params,
	);
}

/**
 * Returns the squad (roster) for a team or all teams a player has been part of.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.team - The team id
 * @param params.player - The player id
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getPlayerSquads({ team: 33 });
 * // response: [{ team: { id: 33, name: "Manchester United", logo: "..." }, players: [{ id: 306, name: "...", position: "Attacker" }] }]
 * ```
 */
export function getPlayersSquads<P extends GetFootballPlayerSquadsParams | undefined = undefined>(
	client: HttpClient,
	baseUrl: string,
	params?: P,
) {
	return client.get<FootballPlayersSquadsResponse[], P>(
		baseUrl,
		"players/squads",
		params,
	);
}

/**
 * Returns all teams a player has played for, with the seasons available.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.player - The player id (required)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getPlayersTeams({ player: 306 });
 * // response: [{ team: { id: 33, name: "Manchester United", logo: "..." }, seasons: [2019, 2020, 2021] }]
 * ```
 */
export function getPlayersTeams<P extends GetFootballPlayersTeamsParams>(
	client: HttpClient,
	baseUrl: string,
	params: P,
) {
	return client.get<FootballPlayersTeamsResponse[], P>(
		baseUrl,
		"players/teams",
		params,
	);
}

/**
 * Returns the top scorers for a league and season.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.league - The league id (required)
 * @param params.season - Season year, 4 digits (required, e.g. `2023`)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getPlayersTopScorers({ league: 39, season: 2023 });
 * // response: [{ player: { id: 306, name: "..." }, statistics: { goals: { total: 27, ... } } }]
 * ```
 */
export function getPlayersTopScorers<P extends GetFootballPlayersTopParams>(
	client: HttpClient,
	baseUrl: string,
	params: P,
) {
	return client.get<FootballPlayersResponse[], P>(
		baseUrl,
		"players/topscorers",
		params,
	);
}

/**
 * Returns the top assist providers for a league and season.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.league - The league id (required)
 * @param params.season - Season year, 4 digits (required, e.g. `2023`)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getPlayersTopAssists({ league: 39, season: 2023 });
 * // response: [{ player: { id: 306, name: "..." }, statistics: { goals: { assists: 15, ... } } }]
 * ```
 */
export function getTopAssists<P extends GetFootballPlayersTopParams>(
	client: HttpClient,
	baseUrl: string,
	params: P,
) {
	return client.get<FootballPlayersResponse[], P>(
		baseUrl,
		"players/topassists",
		params,
	);
}

/**
 * Returns the players with the most yellow cards for a league and season.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.league - The league id (required)
 * @param params.season - Season year, 4 digits (required, e.g. `2023`)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getPlayersTopYellowCards({ league: 39, season: 2023 });
 * // response: [{ player: { id: 306, name: "..." }, statistics: { cards: { yellow: 12, ... } } }]
 * ```
 */
export function getTopYellowCards<P extends GetFootballPlayersTopParams>(
	client: HttpClient,
	baseUrl: string,
	params: P,
) {
	return client.get<FootballPlayersResponse[], P>(
		baseUrl,
		"players/topyellowcards",
		params,
	);
}

/**
 * Returns the players with the most red cards for a league and season.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.league - The league id (required)
 * @param params.season - Season year, 4 digits (required, e.g. `2023`)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getPlayersTopRedCards({ league: 39, season: 2023 });
 * // response: [{ player: { id: 306, name: "..." }, statistics: { cards: { red: 3, ... } } }]
 * ```
 */
export function getTopRedCards<P extends GetFootballPlayersTopParams>(
	client: HttpClient,
	baseUrl: string,
	params: P,
) {
	return client.get<FootballPlayersResponse[], P>(
		baseUrl,
		"players/topredcards",
		params,
	);
}
