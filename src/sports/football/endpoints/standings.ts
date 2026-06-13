import type { HttpClient } from "@/types";

import type {
	FootballStandingsResponse,
	GetFootballStandingsParams,
} from "../types/standings";

/**
 * Returns standings for a league or team.
 *
 * Some competitions have multiple ranking groups (e.g. group phase, opening/closing).
 * The `standings` field is a 2D array — each inner array is one ranking group.
 * `season` is required; `league` or `team` must also be provided.
 *
 * **Recommended calls:** 1 per hour for leagues/teams with a fixture in progress, otherwise 1 per day.
 *
 * @param params.season - Season year, 4 digits (required, e.g. `2023`)
 * @param params.league - The league id
 * @param params.team - The team id
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getStandings({ league: 39, season: 2023 });
 * // response: [{ league: { id: 39, standings: [[{ rank: 1, team: {...}, points: 70, ... }]] } }]
 * ```
 */
export function getStandings<P extends GetFootballStandingsParams>(
	client: HttpClient,
	baseUrl: string,
	params: P,
) {
	return client.get<FootballStandingsResponse[], P>(baseUrl, "standings", params);
}
