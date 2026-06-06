import type { HttpClient } from "@/types";

import type {
	FootballVenuesResponse,
	GetFootballVenuesParams,
} from "../types/venues";

/**
 * Returns football venues matching the given filters.
 *
 * **At least one parameter is required.**
 * Venue images are available at `https://media.api-sports.io/football/venues/{id}.png`.
 * All parameters can be combined.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.id - The venue id
 * @param params.name - The venue name (e.g. `"Old Trafford"`)
 * @param params.city - The city of the venue (e.g. `"manchester"`)
 * @param params.country - The country name (e.g. `"england"`)
 * @param params.search - Search by name, city or country, min 3 chars (e.g. `"trafford"`)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getVenues({ id: 556 });
 * // response: [{ id: 556, name: "Old Trafford", city: "Manchester", country: "England", ... }]
 * ```
 */
export function getVenues(
	client: HttpClient,
	baseUrl: string,
	params?: GetFootballVenuesParams,
) {
	return client.get<FootballVenuesResponse[]>(baseUrl, "venues", params);
}
