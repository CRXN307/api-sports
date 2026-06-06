import type { HttpClient } from "@/types";

import type {
	FootballCountriesResponse,
	GetFootballCountriesParams,
} from "../types/countries";

/**
 * Returns the list of countries available for the `leagues` endpoint.
 *
 * The returned `name` and `code` fields can be used as filters in other endpoints.
 * Country flags are available at `https://media.api-sports.io/flags/{code}.svg`.
 * All parameters are optional and can be combined.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.name - Filter by country name (e.g. `"england"`)
 * @param params.code - Filter by ISO alpha code, 2–6 chars (e.g. `"FR"`, `"GB-ENG"`)
 * @param params.search - Search by name prefix, min 3 chars (e.g. `"engl"`)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getCountries({ code: "FR" });
 * // response: [{ name: "France", code: "FR", flag: "https://media.api-sports.io/flags/fr.svg" }]
 * ```
 */
export function getCountries(
	client: HttpClient,
	baseUrl: string,
	params?: GetFootballCountriesParams,
) {
	return client.get<FootballCountriesResponse[]>(baseUrl, "countries", params);
}
