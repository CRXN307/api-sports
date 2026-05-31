import type { HttpClient } from "../../../../client"
import type { GetVenuesParams, VenueResponse } from "./types"

/** Returns information about football venues. */
export function getVenues(
	client: HttpClient,
	baseUrl: string,
	params?: GetVenuesParams,
) {
	return client.get<VenueResponse[]>(baseUrl, "venues", params)
}
