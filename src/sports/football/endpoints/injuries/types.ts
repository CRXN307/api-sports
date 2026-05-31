/**
 * Query parameters for the injuries endpoint.
 * All parameters are optional and can be combined.
 */
export type GetInjuriesParams = {
	league?: number
	/** 4-digit year (e.g. 2024). */
	season?: number
	fixture?: number
	team?: number
	player?: number
	/** Format: YYYY-MM-DD. */
	date?: string
	/** Up to 20 fixture ids separated by dashes (e.g. "1-2-3"). */
	ids?: string
	timezone?: string
}

export type InjuryResponse = {
	player: {
		id: number
		name: string
		photo: string
		type: string
		reason: string
	}
	team: { id: number; name: string; logo: string }
	fixture: {
		id: number
		timezone: string
		date: string
		timestamp: number
	}
	league: {
		id: number
		season: number
		name: string
		country: string
		logo: string
		flag: string | null
	}
}
