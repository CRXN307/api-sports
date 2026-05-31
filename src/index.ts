import { createHttpClient } from "./client"
import type { HttpClient } from "./client"
import { API_SPORTS_ERROR_CODES } from "./error"

/**
 * Options for initialising the API-Sports client.
 *
 * @param apiKey - Your API-Sports key.
 * @param fetch - Optional custom fetch implementation (e.g. a throttled fetch for rate limiting).
 */
export type ApiSportsOptions = {
	apiKey: string
	fetch?: typeof globalThis.fetch
}

/**
 * Internal factory that wires the init function to the client.
 * Mirrors the `createBetterAuth(options, initFn)` pattern.
 */
function createApiSports<Options extends ApiSportsOptions>(
	options: Options,
	init: (options: Options) => HttpClient,
) {
	const client = init(options)

	return {
		// Sports modules will be added here: football: football(client)
		$ERROR_CODES: API_SPORTS_ERROR_CODES,
		_client: client,
	}
}

/**
 * Creates an API-Sports client.
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "xxx" })
 * const { response } = await client.football.getFixtures({ league: 39, season: 2024 })
 * ```
 */
export function ApiSports<Options extends ApiSportsOptions>(options: Options) {
	return createApiSports(options, createHttpClient)
}

export { ApiSportsError, API_SPORTS_ERROR_CODES } from "./error"
export type { ApiSportsErrorCode } from "./error"
export type { HttpClient } from "./client"
export type { ApiResponse, Paging } from "./types/api"
export type { ClientOptions } from "./types/client"
