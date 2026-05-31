import type { HttpClient } from "../../../../client"
import type { GetSidelinedParams, SidelinedResponse } from "./types"

/** Returns sidelined periods (injuries, suspensions) for a player or coach. */
export function getSidelined(
	client: HttpClient,
	baseUrl: string,
	params?: GetSidelinedParams,
) {
	return client.get<SidelinedResponse[]>(baseUrl, "sidelined", params)
}
