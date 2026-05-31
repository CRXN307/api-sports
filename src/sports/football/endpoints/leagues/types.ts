import type { Country } from "../../types"

export type FixtureCoverage = {
	fixtures: {
		events: boolean
		lineups: boolean
		statistics_fixtures: boolean
		statistics_players: boolean
	}
	standings: boolean
	players: boolean
	top_scorers: boolean
	top_assists: boolean
	top_cards: boolean
	injuries: boolean
	predictions: boolean
	odds: boolean
}

export type LeagueSeason = {
	year: number
	start: string
	end: string
	current: boolean
	coverage: FixtureCoverage
}

/**
 * A league or cup with its country and available seasons.
 */
export type LeagueResponse = {
	league: {
		id: number
		name: string
		type: string
		logo: string
	}
	country: Country
	seasons: LeagueSeason[]
}

/**
 * Query parameters for the leagues endpoint.
 * Most parameters can be combined.
 */
export type GetLeaguesParams = {
	id?: number
	name?: string
	country?: string
	/** Alpha code of the country (e.g. "FR", "GB-ENG"). */
	code?: string
	/** 4-digit year (e.g. 2024). */
	season?: number
	team?: number
	type?: "league" | "cup"
	current?: boolean
	/** Minimum 3 characters. */
	search?: string
	/** Maximum 2 digits. Returns the X last leagues added. */
	last?: number
}
