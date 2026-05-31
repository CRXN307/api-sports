import type { HttpClient } from "../../../../client"
import type { GetStandingsParams, StandingsResponse } from "./types"

/** Returns league standings for a given season. */
export function getStandings(
	client: HttpClient,
	baseUrl: string,
	params: GetStandingsParams,
) {
	return client.get<StandingsResponse[]>(baseUrl, "standings", params)
}
