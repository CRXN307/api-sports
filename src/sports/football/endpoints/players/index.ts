import type { HttpClient } from "../../../../client"
import type { PlayerWithStats } from "../../types"
import type {
	GetPlayerProfilesParams,
	GetPlayerSeasonsParams,
	GetPlayerSquadsParams,
	GetPlayersParams,
	GetTopPlayersParams,
	PlayerProfileResponse,
	PlayerSquadResponse,
} from "./types"

/** Returns player statistics per league and season. */
export function getPlayers(
	client: HttpClient,
	baseUrl: string,
	params?: GetPlayersParams,
) {
	return client.get<PlayerWithStats[]>(baseUrl, "players", params)
}

/** Returns all seasons available for a player. */
export function getPlayerSeasons(
	client: HttpClient,
	baseUrl: string,
	params?: GetPlayerSeasonsParams,
) {
	return client.get<number[]>(baseUrl, "players/seasons", params)
}

/** Returns player profiles without statistics. */
export function getPlayerProfiles(
	client: HttpClient,
	baseUrl: string,
	params?: GetPlayerProfilesParams,
) {
	return client.get<PlayerProfileResponse[]>(baseUrl, "players/profiles", params)
}

/** Returns current squad for a team or all teams a player has been in. */
export function getPlayerSquads(
	client: HttpClient,
	baseUrl: string,
	params?: GetPlayerSquadsParams,
) {
	return client.get<PlayerSquadResponse[]>(baseUrl, "players/squads", params)
}

/** Returns the top scorers for a league and season. */
export function getTopScorers(
	client: HttpClient,
	baseUrl: string,
	params: GetTopPlayersParams,
) {
	return client.get<PlayerWithStats[]>(baseUrl, "players/topscorers", params)
}

/** Returns the top assist providers for a league and season. */
export function getTopAssists(
	client: HttpClient,
	baseUrl: string,
	params: GetTopPlayersParams,
) {
	return client.get<PlayerWithStats[]>(baseUrl, "players/topassists", params)
}

/** Returns the players with the most yellow cards for a league and season. */
export function getTopYellowCards(
	client: HttpClient,
	baseUrl: string,
	params: GetTopPlayersParams,
) {
	return client.get<PlayerWithStats[]>(baseUrl, "players/topyellowcards", params)
}

/** Returns the players with the most red cards for a league and season. */
export function getTopRedCards(
	client: HttpClient,
	baseUrl: string,
	params: GetTopPlayersParams,
) {
	return client.get<PlayerWithStats[]>(baseUrl, "players/topredcards", params)
}
