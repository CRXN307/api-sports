/**
 * Query parameters for the teams endpoint.
 * All parameters are optional and can be combined.
 */
export type GetTeamsParams = {
	id?: number
	name?: string
	league?: number
	/** 4-digit year (e.g. 2024). */
	season?: number
	country?: string
	/** 3-character country code. */
	code?: string
	venue?: number
	/** Minimum 3 characters. */
	search?: string
}

export type TeamResponse = {
	team: {
		id: number
		name: string
		code: string | null
		country: string | null
		founded: number | null
		national: boolean
		logo: string
	}
	venue: {
		id: number | null
		name: string | null
		address: string | null
		city: string | null
		capacity: number | null
		surface: string | null
		image: string | null
	}
}

/**
 * Query parameters for teams/statistics.
 * `league`, `season`, and `team` are required.
 */
export type GetTeamStatisticsParams = {
	league: number
	/** 4-digit year (e.g. 2024). */
	season: number
	team: number
	/** Format: YYYY-MM-DD. Limit statistics to a specific date. */
	date?: string
}

type StatRecord = {
	played: { home: number; away: number; total: number }
	wins: { home: number; away: number; total: number }
	draws: { home: number; away: number; total: number }
	loses: { home: number; away: number; total: number }
}

type GoalMinute = Record<string, { total: number | null; percentage: string | null }>

export type TeamStatisticsResponse = {
	league: {
		id: number
		name: string
		country: string
		logo: string
		flag: string | null
		season: number
	}
	team: { id: number; name: string; logo: string }
	form: string
	fixtures: StatRecord
	goals: {
		for: {
			total: { home: number; away: number; total: number }
			average: { home: string; away: string; total: string }
			minute: GoalMinute
		}
		against: {
			total: { home: number; away: number; total: number }
			average: { home: string; away: string; total: string }
			minute: GoalMinute
		}
	}
	biggest: {
		streak: { wins: number; draws: number; loses: number }
		wins: { home: string | null; away: string | null }
		loses: { home: string | null; away: string | null }
		goals: {
			for: { home: number; away: number }
			against: { home: number; away: number }
		}
	}
	clean_sheet: { home: number; away: number; total: number }
	failed_to_score: { home: number; away: number; total: number }
	penalty: {
		scored: { total: number; percentage: string }
		missed: { total: number; percentage: string }
		total: number
	}
	lineups: Array<{ formation: string; played: number }>
	cards: {
		yellow: GoalMinute
		red: GoalMinute
	}
}

/** Query parameters for teams/seasons. `team` is required. */
export type GetTeamSeasonsParams = {
	team: number
}
