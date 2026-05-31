type StandingRecord = {
	played: number
	win: number
	draw: number
	lose: number
	goals: { for: number; against: number }
}

export type Standing = {
	rank: number
	team: { id: number; name: string; logo: string }
	points: number
	goalsDiff: number
	group: string
	form: string
	status: string
	description: string | null
	all: StandingRecord
	home: StandingRecord
	away: StandingRecord
	update: string
}

export type StandingsResponse = {
	league: {
		id: number
		name: string
		country: string
		logo: string
		flag: string | null
		season: number
		standings: Standing[][]
	}
}

/**
 * Query parameters for the standings endpoint.
 * `season` is required. At least one of `league` or `team` should be provided.
 */
export type GetStandingsParams = {
	/** 4-digit year (e.g. 2024). */
	season: number
	league?: number
	team?: number
}
