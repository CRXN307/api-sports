import type { HttpClient } from "../../../../client"
import type {
	FixtureEvent,
	FixtureLineup,
	FixturePlayersResponse,
	FixtureResponse,
	FixtureStatisticsResponse,
	GetFixtureEventsParams,
	GetFixtureLineupsParams,
	GetFixturePlayersParams,
	GetFixtureStatisticsParams,
	GetFixturesParams,
	GetHeadToHeadParams,
	GetRoundsParams,
} from "./types"

/** Returns the rounds for a league or cup. */
export function getRounds(
	client: HttpClient,
	baseUrl: string,
	params: GetRoundsParams,
) {
	return client.get<string[]>(baseUrl, "fixtures/rounds", params)
}

/**
 * Returns fixtures with optional live scores, events, lineups, and statistics.
 * Updated every 15 seconds.
 */
export function getFixtures(
	client: HttpClient,
	baseUrl: string,
	params?: GetFixturesParams,
) {
	return client.get<FixtureResponse[]>(baseUrl, "fixtures", params)
}

/** Returns head-to-head fixtures between two teams. */
export function getHeadToHead(
	client: HttpClient,
	baseUrl: string,
	params: GetHeadToHeadParams,
) {
	return client.get<FixtureResponse[]>(baseUrl, "fixtures/headtohead", params)
}

/** Returns statistics for a specific fixture. */
export function getFixtureStatistics(
	client: HttpClient,
	baseUrl: string,
	params: GetFixtureStatisticsParams,
) {
	return client.get<FixtureStatisticsResponse[]>(
		baseUrl,
		"fixtures/statistics",
		params,
	)
}

/** Returns events (goals, cards, substitutions) for a specific fixture. */
export function getFixtureEvents(
	client: HttpClient,
	baseUrl: string,
	params: GetFixtureEventsParams,
) {
	return client.get<FixtureEvent[]>(baseUrl, "fixtures/events", params)
}

/** Returns lineups for a specific fixture. */
export function getFixtureLineups(
	client: HttpClient,
	baseUrl: string,
	params: GetFixtureLineupsParams,
) {
	return client.get<FixtureLineup[]>(baseUrl, "fixtures/lineups", params)
}

/** Returns player statistics for a specific fixture. */
export function getFixturePlayers(
	client: HttpClient,
	baseUrl: string,
	params: GetFixturePlayersParams,
) {
	return client.get<FixturePlayersResponse[]>(
		baseUrl,
		"fixtures/players",
		params,
	)
}
