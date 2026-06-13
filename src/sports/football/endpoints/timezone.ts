import type { HttpClient } from "@/types";

import type { FootballTimezoneResponse } from "../types/timezone";

/**
 * Returns all available timezone strings for use as the `timezone` param in fixtures.
 *
 * This list is static and does not change. No parameters required.
 *
 * **Recommended calls:** once, cache indefinitely.
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getTimezones();
 * // response: ["Africa/Abidjan", "Africa/Accra", ...]
 * ```
 */
export function getTimezones(client: HttpClient, baseUrl: string) {
	return client.get<FootballTimezoneResponse[], undefined>(baseUrl, "timezone");
}
