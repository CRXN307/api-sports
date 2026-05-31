/**
 * Query parameters for the players endpoint.
 * All parameters are optional and can be combined.
 */
export type GetPlayersParams = {
	id?: number
	team?: number
	league?: number
	/** 4-digit year (e.g. 2024). */
	season?: number
	/** Minimum 4 characters. */
	search?: string
	page?: number
}

/** Query parameters for players/profiles. */
export type GetPlayerProfilesParams = {
	player?: number
	/** Minimum 3 characters. */
	search?: string
	page?: number
}

/** Query parameters for players/squads. */
export type GetPlayerSquadsParams = {
	team?: number
	player?: number
}

/** Query parameters for players/seasons. */
export type GetPlayerSeasonsParams = {
	player?: number
}

/** Query parameters for top scorers/assists/cards. `league` and `season` are required. */
export type GetTopPlayersParams = {
	league: number
	/** 4-digit year (e.g. 2024). */
	season: number
}

export type PlayerSquadResponse = {
	team: { id: number; name: string; logo: string }
	players: Array<{
		id: number
		name: string
		age: number
		number: number | null
		position: string
		photo: string
	}>
}

export type PlayerProfileResponse = {
	player: {
		id: number
		name: string
		firstname: string
		lastname: string
		age: number
		birth: { date: string | null; place: string | null; country: string | null }
		nationality: string | null
		height: string | null
		weight: string | null
		number: number | null
		position: string | null
		photo: string
	}
}
