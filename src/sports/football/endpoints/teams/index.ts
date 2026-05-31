import type { HttpClient } from "../../../../client"
import type { Country } from "../../types"
import type {
	GetTeamSeasonsParams,
	GetTeamStatisticsParams,
	GetTeamsParams,
	TeamResponse,
	TeamStatisticsResponse,
} from "./types"

/** Returns teams information. */
export function getTeams(
	client: HttpClient,
	baseUrl: string,
	params?: GetTeamsParams,
) {
	return client.get<TeamResponse[]>(baseUrl, "teams", params)
}

/**
 * Returns statistics for a team in a specific league and season.
 * `league`, `season`, and `team` are required.
 */
export function getTeamStatistics(
	client: HttpClient,
	baseUrl: string,
	params: GetTeamStatisticsParams,
) {
	return client.get<TeamStatisticsResponse>(baseUrl, "teams/statistics", params)
}

/** Returns all seasons in which a team has played. */
export function getTeamSeasons(
	client: HttpClient,
	baseUrl: string,
	params: GetTeamSeasonsParams,
) {
	return client.get<number[]>(baseUrl, "teams/seasons", params)
}

/** Returns the list of countries available for the teams endpoint. */
export function getTeamCountries(client: HttpClient, baseUrl: string) {
	return client.get<Country[]>(baseUrl, "teams/countries")
}
