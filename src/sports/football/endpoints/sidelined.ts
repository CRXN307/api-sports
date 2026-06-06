import type { HttpClient } from "@/types";

import type {
	FootballSidelinedResponse,
	GetFootballSidelinedParams,
} from "../types/sidelined";

/**
 * Returns sidelined periods (injuries/suspensions) for a player or coach.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.player - The player id
 * @param params.coach - The coach id
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getSidelined({ player: 306 });
 * // response: [{ type: "Knee Injury", start: "2023-01-15", end: "2023-03-10" }]
 * ```
 */
export function getSidelined(
	client: HttpClient,
	baseUrl: string,
	params?: GetFootballSidelinedParams,
) {
	return client.get<FootballSidelinedResponse[]>(baseUrl, "sidelined", params);
}
