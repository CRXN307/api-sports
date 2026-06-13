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
export function getOddsLive<P extends GetFootballOddsLiveParams | undefined = undefined>(
	client: HttpClient,
	baseUrl: string,
	params?: P,
) {
	return client.get<FootballOddsLiveResponse[], P>(baseUrl, "odds/live", params);
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
export function getOddsLiveBets<P extends GetFootballOddsLiveBetsParams | undefined = undefined>(
	client: HttpClient,
	baseUrl: string,
	params?: P,
) {
	return client.get<FootballOddsLiveBetsResponse[], P>(
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
export function getOdds<P extends GetFootballOddsParams | undefined = undefined>(
	client: HttpClient,
	baseUrl: string,
	params?: P,
) {
	return client.get<FootballOddsResponse[], P>(baseUrl, "odds", params);
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
export function getOddsBookmakers<P extends GetFootballOddsBookmakersParams | undefined = undefined>(
	client: HttpClient,
	baseUrl: string,
	params?: P,
) {
	return client.get<FootballOddsBookmakersResponse[], P>(
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
export function getOddsBets<P extends GetFootballOddsBetsParams | undefined = undefined>(
	client: HttpClient,
	baseUrl: string,
	params?: P,
) {
	return client.get<FootballOddsBetsResponse[], P>(baseUrl, "odds/bets", params);
}
