import type { HttpClient } from "../../../../client"
import type { GetTrophiesParams, TrophyResponse } from "./types"

/** Returns trophies won by a player or coach. */
export function getTrophies(
	client: HttpClient,
	baseUrl: string,
	params?: GetTrophiesParams,
) {
	return client.get<TrophyResponse[]>(baseUrl, "trophies", params)
}
