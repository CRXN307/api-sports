import type { HttpClient } from "@/types";

import type {
	FootballCoachsResponse,
	GetFootballCoachsParams,
} from "../types/coachs";

/**
 * Returns coaches matching the given filters.
 *
 * Each coach includes personal details, current team, and full career history.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.id - The coach id
 * @param params.team - The team id
 * @param params.search - Search by coach name (min 3 characters)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getCoachs({ team: 33 });
 * // response: [{ id: 1, name: "Erik ten Hag", team: { id: 33, name: "Manchester United", logo: "..." }, career: [...] }]
 * ```
 */
export function getCoachs<P extends GetFootballCoachsParams | undefined = undefined>(
	client: HttpClient,
	baseUrl: string,
	params?: P,
) {
	return client.get<FootballCoachsResponse[], P>(baseUrl, "coachs", params);
}
