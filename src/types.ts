/**
 * Internal HTTP client interface shared by every sport module.
 *
 * Implementations issue authenticated `GET` requests and resolve to the parsed
 * {@link ApiResponse} envelope, or reject with an `ApiSportsError`.
 */
export type HttpClient = {
	/**
	 * Performs a `GET` request against an API-SPORTS endpoint.
	 *
	 * @typeParam T - Type of the `response` field in the returned envelope.
	 * @param baseUrl - Sport base URL (e.g. `https://v3.football.api-sports.io`).
	 * @param endpoint - Endpoint path relative to `baseUrl` (e.g. `"leagues"`).
	 * @param params - Query params; `undefined` values are skipped.
	 */
	get<T>(
		baseUrl: string,
		endpoint: string,
		params?: Record<string, string | number | boolean | undefined>,
	): Promise<ApiResponse<T>>;
};

/** Options used to create an API-Sports client. */
export type ClientOptions = {
	apiKey: string;
	fetch?: typeof globalThis.fetch;
};

/**
 * Standard API-SPORTS response envelope wrapping every endpoint payload.
 *
 * @typeParam T - Type of the `response` payload.
 */
export type ApiResponse<T> = {
	get: string;
	parameters: Record<string, string> | [];
	errors: Record<string, string> | [];
	results: number;
	paging: {
		current: number;
		total: number;
	};
	response: T;
};
