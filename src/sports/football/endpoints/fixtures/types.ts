import type { FixtureGoals, TeamInfo } from "../../types"

/** Short status code of a fixture. */
export type FixtureStatusShort =
	| "TBD" | "NS"   | "1H"  | "HT"   | "2H"
	| "ET"  | "BT"   | "P"   | "SUSP" | "INT"
	| "FT"  | "AET"  | "PEN" | "PST"  | "CANC"
	| "ABD" | "AWD"  | "WO"  | "LIVE"

export type FixtureResponse = {
	fixture: {
		id: number
		referee: string | null
		timezone: string
		date: string
		timestamp: number
		periods: {
			first: number | null
			second: number | null
		}
		venue: {
			id: number | null
			name: string | null
			city: string | null
		}
		status: {
			long: string
			short: FixtureStatusShort
			elapsed: number | null
			extra: number | null
		}
	}
	league: {
		id: number
		name: string
		country: string
		logo: string
		flag: string | null
		season: number
		round: string
	}
	teams: {
		home: { id: number; name: string; logo: string; winner: boolean | null }
		away: { id: number; name: string; logo: string; winner: boolean | null }
	}
	goals: FixtureGoals
	score: {
		halftime: FixtureGoals
		fulltime: FixtureGoals
		extratime: FixtureGoals
		penalty: FixtureGoals
	}
}

export type FixtureStatistic = {
	type: string
	value: string | number | null
}

export type FixtureStatisticsResponse = {
	team: TeamInfo
	statistics: FixtureStatistic[]
}

export type FixtureEvent = {
	time: { elapsed: number; extra: number | null }
	team: TeamInfo
	player: { id: number; name: string }
	assist: { id: number | null; name: string | null }
	type: string
	detail: string
	comments: string | null
}

export type FixtureLineupsPlayer = {
	id: number
	name: string
	number: number
	pos: string
	grid: string | null
}

export type FixtureLineup = {
	team: TeamInfo & {
		colors: {
			player: { primary: string; number: string; border: string }
			goalkeeper: { primary: string; number: string; border: string }
		} | null
	}
	formation: string
	startXI: Array<{ player: FixtureLineupsPlayer }>
	substitutes: Array<{ player: FixtureLineupsPlayer }>
	coach: { id: number; name: string; photo: string }
}

export type FixturePlayerStatistics = {
	games: {
		minutes: number | null
		number: number
		position: string
		rating: string | null
		captain: boolean
		substitute: boolean
	}
	offsides: number | null
	shots: { total: number | null; on: number | null }
	goals: { total: number | null; conceded: number; assists: number | null; saves: number | null }
	passes: { total: number | null; key: number | null; accuracy: number | null }
	tackles: { total: number | null; blocks: number | null; interceptions: number | null }
	duels: { total: number | null; won: number | null }
	dribbles: { attempts: number | null; success: number | null; past: number | null }
	fouls: { drawn: number | null; committed: number | null }
	cards: { yellow: number; red: number }
	penalty: { won: number | null; committed: number | null; scored: number; missed: number; saved: number | null }
}

export type FixturePlayersResponse = {
	team: TeamInfo & { update: string }
	players: Array<{
		player: { id: number; name: string; photo: string }
		statistics: FixturePlayerStatistics[]
	}>
}

/**
 * Query parameters for the rounds endpoint.
 * `league` and `season` are required.
 */
export type GetRoundsParams = {
	league: number
	/** 4-digit year (e.g. 2024). */
	season: number
	current?: boolean
	dates?: boolean
	timezone?: string
}

/**
 * Query parameters for the fixtures endpoint.
 * All parameters are optional and can be combined.
 */
export type GetFixturesParams = {
	id?: number
	/** Up to 20 fixture ids separated by dashes (e.g. "1-2-3"). */
	ids?: string
	/** "all" or league ids separated by dashes (e.g. "39-61"). */
	live?: string
	/** Format: YYYY-MM-DD. */
	date?: string
	league?: number
	/** 4-digit year (e.g. 2024). */
	season?: number
	team?: number
	/** Maximum 2 digits. */
	last?: number
	/** Maximum 2 digits. */
	next?: number
	/** Format: YYYY-MM-DD. */
	from?: string
	/** Format: YYYY-MM-DD. */
	to?: string
	round?: string
	/** One or more status codes separated by dashes (e.g. "NS-PST-FT"). */
	status?: string
	venue?: number
	timezone?: string
}

/**
 * Query parameters for the head-to-head endpoint.
 * `h2h` is required in the format "ID-ID".
 */
export type GetHeadToHeadParams = {
	/** Two team ids separated by a dash (e.g. "33-34"). */
	h2h: string
	/** Format: YYYY-MM-DD. */
	date?: string
	league?: number
	/** 4-digit year (e.g. 2024). */
	season?: number
	/** Maximum 2 digits. */
	last?: number
	/** Maximum 2 digits. */
	next?: number
	/** Format: YYYY-MM-DD. */
	from?: string
	/** Format: YYYY-MM-DD. */
	to?: string
	status?: string
	venue?: number
	timezone?: string
}

/** Query parameters for fixture statistics. `fixture` is required. */
export type GetFixtureStatisticsParams = {
	fixture: number
	team?: number
	type?: string
	half?: boolean
}

/** Query parameters for fixture events. `fixture` is required. */
export type GetFixtureEventsParams = {
	fixture: number
	team?: number
	player?: number
	type?: string
}

/** Query parameters for fixture lineups. `fixture` is required. */
export type GetFixtureLineupsParams = {
	fixture: number
	team?: number
	player?: number
	type?: string
}

/** Query parameters for fixture players statistics. `fixture` is required. */
export type GetFixturePlayersParams = {
	fixture: number
	team?: number
}
