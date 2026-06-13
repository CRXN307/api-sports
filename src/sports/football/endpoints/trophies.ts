import type { HttpClient } from "@/types";

import type {
	FootballTrophiesResponse,
	GetFootballTrophiesParams,
} from "../types/trophies";

/**
 * Returns trophies won by a player or coach.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.player - The player id
 * @param params.coach - The coach id
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getTrophies({ player: 306 });
 * // response: [{ league: "Premier League", country: "England", season: "2012/2013", place: "Winner" }]
 * ```
 */
export function getTrophies<P extends GetFootballTrophiesParams | undefined = undefined>(
	client: HttpClient,
	baseUrl: string,
	params?: P,
) {
	return client.get<FootballTrophiesResponse[], P>(baseUrl, "trophies", params);
}
