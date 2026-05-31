/**
 * Query parameters for the countries endpoint.
 * All parameters are optional and can be combined.
 */
export type GetCountriesParams = {
	name?: string
	/** Alpha code of the country (e.g. "FR", "GB-ENG"). 2–6 characters. */
	code?: string
	/** Minimum 3 characters. */
	search?: string
}
