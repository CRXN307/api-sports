import type { HttpClient } from "../../../../client"
import type {
	GetOddsBookmakersParams,
	GetOddsBetsParams,
	GetOddsLiveBetsParams,
	GetOddsLiveParams,
	GetOddsParams,
	OddsLiveResponse,
	OddsNameResponse,
	OddsResponse,
} from "./types"

/** Returns live in-play odds for ongoing fixtures. */
export function getOddsLive(
	client: HttpClient,
	baseUrl: string,
	params?: GetOddsLiveParams,
) {
	return client.get<OddsLiveResponse[]>(baseUrl, "odds/live", params)
}

/** Returns available bet types for live odds. */
export function getOddsLiveBets(
	client: HttpClient,
	baseUrl: string,
	params?: GetOddsLiveBetsParams,
) {
	return client.get<OddsNameResponse[]>(baseUrl, "odds/live/bets", params)
}

/** Returns pre-match odds from various bookmakers. */
export function getOdds(
	client: HttpClient,
	baseUrl: string,
	params?: GetOddsParams,
) {
	return client.get<OddsResponse[]>(baseUrl, "odds", params)
}

/** Returns the list of available bookmakers. */
export function getOddsBookmakers(
	client: HttpClient,
	baseUrl: string,
	params?: GetOddsBookmakersParams,
) {
	return client.get<OddsNameResponse[]>(baseUrl, "odds/bookmakers", params)
}

/** Returns the list of available bet types for pre-match odds. */
export function getOddsBets(
	client: HttpClient,
	baseUrl: string,
	params?: GetOddsBetsParams,
) {
	return client.get<OddsNameResponse[]>(baseUrl, "odds/bets", params)
}
