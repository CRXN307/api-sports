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
	 * @typeParam P - Type of the `parameters` field in the returned envelope.
	 * @param baseUrl - Sport base URL (e.g. `https://v3.football.api-sports.io`).
	 * @param endpoint - Endpoint path relative to `baseUrl` (e.g. `"leagues"`).
	 * @param params - Query params; `undefined` values are skipped.
	 */
	get<T, P>(
		baseUrl: string,
		endpoint: string,
		params?: Record<string, string | number | boolean | undefined>,
	): Promise<ApiResponse<T, P>>;
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
 * @typeParam P - Type of the `parameters` payload.
 */
export type ApiResponse<T, P = undefined> = {
	get: string;
	parameters: P extends undefined ? [] : { [K in keyof P]: string };
	errors: Record<string, string> | [];
	results: number;
	paging: {
		current: number;
		total: number;
	};
	response: T;
};
