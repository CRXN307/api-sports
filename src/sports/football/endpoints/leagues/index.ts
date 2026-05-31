import type { HttpClient } from "../../../../client"
import type { GetLeaguesParams, LeagueResponse } from "./types"

/** Returns the list of available leagues and cups. */
export function getLeagues(
	client: HttpClient,
	baseUrl: string,
	params?: GetLeaguesParams,
) {
	return client.get<LeagueResponse[]>(baseUrl, "leagues", params)
}

/** Returns all available seasons across all leagues. */
export function getSeasons(client: HttpClient, baseUrl: string) {
	return client.get<number[]>(baseUrl, "leagues/seasons")
}
