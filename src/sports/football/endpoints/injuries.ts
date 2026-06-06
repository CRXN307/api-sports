import type { HttpClient } from "@/types";

import type {
	FootballInjuriesResponse,
	GetFootballInjuriesParams,
} from "../types/injuries";

/**
 * Returns player injuries for a league, team, fixture, or player.
 *
 * At least one filter is required. The `type` field on each player indicates
 * the injury status (e.g. `"Missing Fixture"` or `"Questionable"`).
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.league - The league id
 * @param params.season - Season year, 4 digits (e.g. `2023`)
 * @param params.fixture - The fixture id
 * @param params.team - The team id
 * @param params.player - The player id
 * @param params.date - Date in `YYYY-MM-DD` format
 * @param params.ids - Multiple fixture ids, dash-separated (e.g. `"1-2-3"`)
 * @param params.timezone - A valid timezone string from `getTimezones`
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getInjuries({ league: 39, season: 2023 });
 * // response: [{ player: { id: 306, name: "...", type: "Missing Fixture", reason: "Knee Injury" }, team: { ... }, ... }]
 * ```
 */
export function getInjuries(
	client: HttpClient,
	baseUrl: string,
	params?: GetFootballInjuriesParams,
) {
	return client.get<FootballInjuriesResponse[]>(baseUrl, "injuries", params);
}
