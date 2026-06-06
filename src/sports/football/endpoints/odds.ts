import type { HttpClient } from "@/types";

import type {
	FootballOddsBetsResponse,
	FootballOddsBookmakersResponse,
	FootballOddsLiveBetsResponse,
	FootballOddsLiveResponse,
	FootballOddsResponse,
	GetFootballOddsBetsParams,
	GetFootballOddsBookmakersParams,
	GetFootballOddsLiveBetsParams,
	GetFootballOddsLiveParams,
	GetFootballOddsParams,
} from "../types/odds";

/**
 * Returns live odds for fixtures currently in progress.
 *
 * **Recommended calls:** 1 per minute.
 *
 * @param params.fixture - The fixture id
 * @param params.league - The league id
 * @param params.bet - The bet id (from `getOddsLiveBets`)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getOddsLive({ league: 39 });
 * // response: [{ fixture: { id: 867946, status: { elapsed: 45 } }, odds: [...] }]
 * ```
 */
export function getOddsLive(
	client: HttpClient,
	baseUrl: string,
	params?: GetFootballOddsLiveParams,
) {
	return client.get<FootballOddsLiveResponse[]>(baseUrl, "odds/live", params);
}

/**
 * Returns available bet types for live odds.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.id - The bet id
 * @param params.search - Search by bet name (min 3 characters)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getOddsLiveBets();
 * // response: [{ id: 1, name: "Match Winner" }, ...]
 * ```
 */
export function getOddsLiveBets(
	client: HttpClient,
	baseUrl: string,
	params?: GetFootballOddsLiveBetsParams,
) {
	return client.get<FootballOddsLiveBetsResponse[]>(
		baseUrl,
		"odds/live/bets",
		params,
	);
}

/**
 * Returns pre-match odds for fixtures.
 *
 * Results are paginated. Each entry groups odds by bookmaker and bet type.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.fixture - The fixture id
 * @param params.league - The league id
 * @param params.season - Season year, 4 digits (e.g. `2023`)
 * @param params.date - Date in `YYYY-MM-DD` format
 * @param params.timezone - A valid timezone string from `getTimezones`
 * @param params.page - Page number for paginated results
 * @param params.bookmaker - Filter by bookmaker id
 * @param params.bet - Filter by bet type id
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getOdds({ fixture: 867946 });
 * // response: [{ fixture: { id: 867946, ... }, bookmakers: [{ id: 6, name: "Bwin", bets: [...] }] }]
 * ```
 */
export function getOdds(
	client: HttpClient,
	baseUrl: string,
	params?: GetFootballOddsParams,
) {
	return client.get<FootballOddsResponse[]>(baseUrl, "odds", params);
}

/**
 * Returns available bookmakers for odds.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.id - The bookmaker id
 * @param params.search - Search by bookmaker name (min 3 characters)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getOddsBookmakers();
 * // response: [{ id: 6, name: "Bwin" }, ...]
 * ```
 */
export function getOddsBookmakers(
	client: HttpClient,
	baseUrl: string,
	params?: GetFootballOddsBookmakersParams,
) {
	return client.get<FootballOddsBookmakersResponse[]>(
		baseUrl,
		"odds/bookmakers",
		params,
	);
}

/**
 * Returns available bet types for pre-match odds.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.id - The bet id
 * @param params.search - Search by bet name (min 3 characters)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getOddsBets();
 * // response: [{ id: 1, name: "Match Winner" }, ...]
 * ```
 */
export function getOddsBets(
	client: HttpClient,
	baseUrl: string,
	params?: GetFootballOddsBetsParams,
) {
	return client.get<FootballOddsBetsResponse[]>(baseUrl, "odds/bets", params);
}
