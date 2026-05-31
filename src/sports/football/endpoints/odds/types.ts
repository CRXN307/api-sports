/** Query parameters for live odds. All parameters are optional. */
export type GetOddsLiveParams = {
	fixture?: number
	league?: number
	bet?: number
}

export type OddsLiveValue = {
	value: string
	odd: string
	handicap: string | null
	main: boolean | null
	suspended: boolean
}

export type OddsLiveBet = {
	id: number
	name: string
	values: OddsLiveValue[]
}

export type OddsLiveResponse = {
	fixture: {
		id: number
		status: { long: string; elapsed: number; seconds: string }
	}
	league: { id: number; season: number }
	teams: {
		home: { id: number; goals: number | null }
		away: { id: number; goals: number | null }
	}
	status: { stopped: boolean; blocked: boolean; finished: boolean }
	update: string
	odds: OddsLiveBet[]
}

/** Query parameters for live odds bets. All parameters are optional. */
export type GetOddsLiveBetsParams = {
	id?: number
	/** Exactly 3 characters. */
	search?: string
}

/**
 * Query parameters for pre-match odds.
 * All parameters are optional and can be combined.
 */
export type GetOddsParams = {
	fixture?: number
	league?: number
	/** 4-digit year (e.g. 2024). */
	season?: number
	/** Format: YYYY-MM-DD. */
	date?: string
	timezone?: string
	page?: number
	bookmaker?: number
	bet?: number
}

export type OddsValue = { value: string; odd: string }

export type OddsResponse = {
	league: {
		id: number
		name: string
		country: string
		logo: string
		flag: string | null
		season: number
	}
	fixture: { id: number; timezone: string; date: string; timestamp: number }
	update: string
	bookmakers: Array<{
		id: number
		name: string
		bets: Array<{
			id: number
			name: string
			values: OddsValue[]
		}>
	}>
}

/** Query parameters for odds bookmakers. All parameters are optional. */
export type GetOddsBookmakersParams = {
	id?: number
	/** Exactly 3 characters. */
	search?: string
}

/** Query parameters for odds bet types. All parameters are optional. */
export type GetOddsBetsParams = {
	id?: number
	/** Exactly 3 characters. */
	search?: string
}

export type OddsNameResponse = {
	id: number
	name: string
}
