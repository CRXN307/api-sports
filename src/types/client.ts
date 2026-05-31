/**
 * Options used to configure the HTTP client.
 *
 * @param apiKey - Your API-Sports key, sent as `x-apisports-key` on every request.
 * @param fetch - Custom fetch implementation. Useful for throttling or mocking in tests.
 */
export type ClientOptions = {
	apiKey: string
	fetch?: typeof globalThis.fetch
}
