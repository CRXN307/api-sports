/**
 * Query parameters for the coachs endpoint.
 * All parameters are optional and can be combined.
 */
export type GetCoachsParams = {
	id?: number
	team?: number
	/** Minimum 3 characters. */
	search?: string
}

export type CoachResponse = {
	id: number
	name: string
	firstname: string
	lastname: string
	age: number | null
	birth: { date: string | null; place: string | null; country: string | null }
	nationality: string | null
	height: string | null
	weight: string | null
	photo: string
	team: { id: number; name: string; logo: string } | null
	career: Array<{
		team: { id: number; name: string; logo: string }
		start: string
		end: string | null
	}>
}
