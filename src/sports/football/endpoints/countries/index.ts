import type { HttpClient } from "../../../../client"
import type { Country } from "../../types"
import type { GetCountriesParams } from "./types"

/**
 * Returns the list of available countries for the leagues endpoint.
 */
export function getCountries(
	client: HttpClient,
	baseUrl: string,
	params?: GetCountriesParams,
) {
	return client.get<Country[]>(baseUrl, "countries", params)
}
