import type { HttpClient } from "@/types";

import type {
	FootballFixtureEventResponse,
	FootballFixtureLineupResponse,
	FootballFixturePlayersStatisticsResponse,
	FootballFixtureResponse,
	FootballFixtureStatisticsResponse,
	FootballRoundResponse,
	GetFootballFixtureEventsParams,
	GetFootballFixtureLineupsParams,
	GetFootballFixturePlayersStatisticsParams,
	GetFootballFixtureStatisticsParams,
	GetFootballFixturesParams,
	GetFootballHeadToHeadParams,
	GetFootballRoundsParams,
} from "../types/fixtures";

/**
 * Returns all available rounds for a league and season.
 *
 * Round strings (e.g. `"Regular Season - 1"`) can be used as the `round` filter in fixtures.
 * Pass `current: true` to get only the active round.
 * Pass `dates: true` to include the date range of each round.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.league - The league id (required)
 * @param params.season - Season year, 4 digits (required, e.g. `2023`)
 * @param params.current - `true` to return only the current round
 * @param params.dates - `true` to include dates for each round
 * @param params.timezone - A valid timezone string from `getTimezones`
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getRounds({ league: 39, season: 2023 });
 * // response: ["Regular Season - 1", "Regular Season - 2", ...]
 * ```
 */
export function getRounds<P extends GetFootballRoundsParams>(
	client: HttpClient,
	baseUrl: string,
	params: P,
) {
	return client.get<FootballRoundResponse[], P>(
		baseUrl,
		"fixtures/rounds",
		params,
	);
}

/**
 * Returns fixtures matching the given filters.
 *
 * At least one filter is recommended. Use `live: "all"` or `live: "id-id"` for live fixtures.
 * The `status` filter accepts short codes (e.g. `"FT"`, `"NS"`) from `FootballFixtureStatusMap`.
 *
 * **Recommended calls:** 1 per minute for live fixtures, 1 per hour otherwise.
 *
 * @param params.id - A single fixture id
 * @param params.ids - Multiple fixture ids, dash-separated (e.g. `"1-2-3"`, max 20)
 * @param params.live - `"all"` for all live fixtures or `"id-id"` for specific leagues
 * @param params.date - Date in `YYYY-MM-DD` format
 * @param params.league - The league id
 * @param params.season - Season year, 4 digits (e.g. `2023`)
 * @param params.team - The team id
 * @param params.last - Last N fixtures (max 2 years)
 * @param params.next - Next N fixtures (max 2 years)
 * @param params.from - Start date in `YYYY-MM-DD` format
 * @param params.to - End date in `YYYY-MM-DD` format
 * @param params.round - Round string from `getRounds`
 * @param params.status - Short status code (e.g. `"FT"`, `"NS"`, `"1H"`)
 * @param params.venue - The venue id
 * @param params.timezone - A valid timezone string from `getTimezones`
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getFixtures({ league: 39, season: 2023 });
 * // response: [{ fixture: { id: 867946, status: { short: "FT", long: "Match Finished", ... } }, ... }]
 * ```
 */
export function getFixtures<P extends GetFootballFixturesParams | undefined = undefined>(
	client: HttpClient,
	baseUrl: string,
	params?: P,
) {
	return client.get<FootballFixtureResponse[], P>(baseUrl, "fixtures", params);
}

/**
 * Returns head-to-head fixtures between two teams.
 *
 * The `h2h` parameter is a dash-separated pair of team ids (e.g. `"33-34"`).
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.h2h - Two team ids dash-separated (required, e.g. `"33-34"`)
 * @param params.date - Date in `YYYY-MM-DD` format
 * @param params.league - Filter by league id
 * @param params.season - Season year, 4 digits (e.g. `2023`)
 * @param params.last - Last N fixtures
 * @param params.next - Next N fixtures
 * @param params.from - Start date in `YYYY-MM-DD` format
 * @param params.to - End date in `YYYY-MM-DD` format
 * @param params.status - Short status code (e.g. `"FT"`)
 * @param params.venue - The venue id
 * @param params.timezone - A valid timezone string from `getTimezones`
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getHeadToHead({ h2h: "33-34", last: 10 });
 * // response: [{ fixture: { id: 867946, ... }, teams: { home: { winner: true }, away: { winner: false } }, ... }]
 * ```
 */
export function getHeadToHead<P extends GetFootballHeadToHeadParams>(
	client: HttpClient,
	baseUrl: string,
	params: P,
) {
	return client.get<FootballFixtureResponse[], P>(
		baseUrl,
		"fixtures/headtohead",
		params,
	);
}

/**
 * Returns statistics for each team in a fixture.
 *
 * Returns one entry per team (home + away). Use `team` to filter to a single team.
 * The `type` filter accepts a statistic name (e.g. `"Shots on Goal"`).
 *
 * **Recommended calls:** 1 per minute for live fixtures, 1 per hour otherwise.
 *
 * @param params.fixture - The fixture id (required)
 * @param params.team - Filter by team id
 * @param params.type - Filter by statistic type name
 * @param params.half - `true` to return only first-half statistics
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getFixtureStatistics({ fixture: 867946 });
 * // response: [{ team: { id: 33, name: "Manchester United", ... }, statistics: [{ type: "Shots on Goal", value: 5 }] }]
 * ```
 */
export function getFixtureStatistics<P extends GetFootballFixtureStatisticsParams>(
	client: HttpClient,
	baseUrl: string,
	params: P,
) {
	return client.get<FootballFixtureStatisticsResponse[], P>(
		baseUrl,
		"fixtures/statistics",
		params,
	);
}

/**
 * Returns all events (goals, cards, substitutions, VAR) for a fixture.
 *
 * Events are discriminated by `type`: `"Goal"`, `"Card"`, `"Subst"`, or `"Var"`.
 * Narrowing on `event.type` gives the correct `detail` union for that event.
 *
 * **Recommended calls:** 1 per minute for live fixtures, 1 per hour otherwise.
 *
 * @param params.fixture - The fixture id (required)
 * @param params.team - Filter by team id
 * @param params.player - Filter by player id
 * @param params.type - Filter by event type (`"Goal"`, `"Card"`, `"Subst"`, `"Var"`)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getFixtureEvents({ fixture: 867946 });
 * // response: [{ type: "Goal", detail: "Normal Goal", time: { elapsed: 23, extra: null }, player: { id: 306, name: "..." } }]
 * ```
 */
export function getFixtureEvents<P extends GetFootballFixtureEventsParams>(
	client: HttpClient,
	baseUrl: string,
	params: P,
) {
	return client.get<FootballFixtureEventResponse[], P>(
		baseUrl,
		"fixtures/events",
		params,
	);
}

/**
 * Returns the lineup for each team in a fixture.
 *
 * Returns one entry per team (home + away). Includes starting XI, substitutes, formation, and coach.
 * `startXI` players have a `grid` position string (e.g. `"1:1"`); substitutes may have `grid: null`.
 *
 * **Recommended calls:** 1 per hour before kickoff, 1 per day after.
 *
 * @param params.fixture - The fixture id (required)
 * @param params.team - Filter by team id
 * @param params.player - Filter by player id
 * @param params.type - Filter by player type
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getFixtureLineups({ fixture: 867946 });
 * // response: [{ team: { id: 33, formation: "4-2-3-1" }, startXI: [{ player: { id: 306, name: "...", grid: "1:1" } }] }]
 * ```
 */
export function getFixtureLineups<P extends GetFootballFixtureLineupsParams>(
	client: HttpClient,
	baseUrl: string,
	params: P,
) {
	return client.get<FootballFixtureLineupResponse[], P>(
		baseUrl,
		"fixtures/lineups",
		params,
	);
}

/**
 * Returns player statistics for each team in a fixture.
 *
 * Returns one entry per team (home + away). Each team entry contains a `players` array
 * with per-player `statistics` covering shots, goals, passes, tackles, and more.
 *
 * **Recommended calls:** 1 per minute for live fixtures, 1 per hour otherwise.
 *
 * @param params.fixture - The fixture id (required)
 * @param params.team - Filter by team id
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getFixturePlayers({ fixture: 867946 });
 * // response: [{ team: { id: 33, ... }, players: [{ player: { id: 306, name: "..." }, statistics: [...] }] }]
 * ```
 */
export function getFixturePlayersStatistics<P extends GetFootballFixturePlayersStatisticsParams>(
	client: HttpClient,
	baseUrl: string,
	params: P,
) {
	return client.get<FootballFixturePlayersStatisticsResponse[], P>(
		baseUrl,
		"fixtures/players",
		params,
	);
}
