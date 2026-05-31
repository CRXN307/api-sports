/**
 * Query parameters for the trophies endpoint.
 * At least one parameter is required.
 */
export type GetTrophiesParams = {
	player?: number
	/** Up to 20 player ids separated by dashes (e.g. "1-2-3"). */
	players?: string
	coach?: number
	/** Up to 20 coach ids separated by dashes (e.g. "1-2-3"). */
	coachs?: string
}

export type TrophyResponse = {
	league: string
	country: string
	season: string
	place: string
}
