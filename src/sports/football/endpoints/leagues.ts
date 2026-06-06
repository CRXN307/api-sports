import type { HttpClient } from "@/types";

import type {
	FootballLeagueResponse,
	FootballLeagueSeasonResponse,
	GetFootballLeaguesParams,
} from "../types/leagues";

/**
 * Returns available leagues and cups with per-season coverage details.
 *
 * League IDs are unique and stable across all seasons.
 * The `coverage` object reflects data available at call time — values may be `false`
 * for competitions that haven't started yet.
 * League logos are available at `https://media.api-sports.io/football/leagues/{id}.png`.
 * Most parameters can be combined.
 *
 * **Recommended calls:** 1 per hour.
 *
 * @param params.id - The league id
 * @param params.name - The league name (e.g. `"Premier League"`)
 * @param params.country - The country name (e.g. `"england"`)
 * @param params.code - Country alpha code, 2–6 chars (e.g. `"GB"`, `"GB-ENG"`)
 * @param params.season - Season year, 4 digits (e.g. `2023`)
 * @param params.team - Filter leagues by team id
 * @param params.type - `"league"` or `"cup"`
 * @param params.current - `true` to return only currently active leagues
 * @param params.search - Search by name or country, min 3 chars
 * @param params.last - Return the last N leagues added to the API (max 2 digits)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getLeagues({ id: 39, season: 2023 });
 * // response: [{ league: { id: 39, name: "Premier League", ... }, country: { ... }, seasons: [...] }]
 * ```
 */
export function getLeagues(
	client: HttpClient,
	baseUrl: string,
	params?: GetFootballLeaguesParams,
) {
	return client.get<FootballLeagueResponse[]>(baseUrl, "leagues", params);
}

/**
 * Returns all available seasons as 4-digit years.
 *
 * For cross-year leagues (e.g. EPL), season `2018` represents the 2018–2019 season.
 * All seasons returned here can be used as the `season` filter in other endpoints.
 * No parameters required.
 *
 * **Recommended calls:** 1 per day.
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getSeasons();
 * // response: [2008, 2010, 2011, ..., 2023]
 * ```
 */
export function getSeasons(client: HttpClient, baseUrl: string) {
	return client.get<FootballLeagueSeasonResponse[]>(baseUrl, "leagues/seasons");
}
