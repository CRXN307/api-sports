/**
 * Country info shared across multiple football endpoints.
 */
export type Country = {
	name: string
	code: string | null
	flag: string | null
}

/**
 * Goals scored by home and away teams.
 * Shared across fixture score breakdowns.
 */
export type FixtureGoals = {
	home: number | null
	away: number | null
}

/**
 * Basic team info shared across multiple endpoints.
 */
export type TeamInfo = {
	id: number
	name: string
	logo: string
}

/**
 * Player birth details.
 */
export type PlayerBirth = {
	date: string | null
	place: string | null
	country: string | null
}

/**
 * Full player profile shared across player-related endpoints.
 */
export type PlayerProfile = {
	id: number
	name: string
	firstname: string
	lastname: string
	age: number
	birth: PlayerBirth
	nationality: string | null
	height: string | null
	weight: string | null
	injured: boolean
	photo: string
}

/**
 * Player statistics per team and league.
 * Shared across players, top scorers, top assists, top cards endpoints.
 */
export type PlayerStatistics = {
	team: TeamInfo
	league: {
		id: number
		name: string
		country: string
		logo: string
		flag: string | null
		season: number
	}
	games: {
		appearences: number | null
		lineups: number | null
		minutes: number | null
		number: number | null
		position: string | null
		rating: string | null
		captain: boolean
	}
	substitutes: {
		in: number | null
		out: number | null
		bench: number | null
	}
	shots: { total: number | null; on: number | null }
	goals: {
		total: number | null
		conceded: number | null
		assists: number | null
		saves: number | null
	}
	passes: { total: number | null; key: number | null; accuracy: string | null }
	tackles: {
		total: number | null
		blocks: number | null
		interceptions: number | null
	}
	duels: { total: number | null; won: number | null }
	dribbles: {
		attempts: number | null
		success: number | null
		past: number | null
	}
	fouls: { drawn: number | null; committed: number | null }
	cards: { yellow: number; yellowred: number; red: number }
	penalty: {
		won: number | null
		committed: number | null
		scored: number
		missed: number
		saved: number | null
	}
}

/**
 * A player combined with their statistics.
 * Shared across players, top scorers, top assists, top cards endpoints.
 */
export type PlayerWithStats = {
	player: PlayerProfile
	statistics: PlayerStatistics[]
}
