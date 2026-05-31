export type PredictionResponse = {
	predictions: {
		winner: { id: number | null; name: string | null; comment: string | null }
		win_or_draw: boolean
		under_over: string | null
		goals: { home: string; away: string }
		advice: string
		percent: { home: string; draw: string; away: string }
	}
	league: {
		id: number
		name: string
		country: string
		logo: string
		flag: string | null
		season: number
	}
	teams: {
		home: {
			id: number
			name: string
			logo: string
			last_5: {
				form: string
				att: string
				def: string
				goals: { for: { total: number; average: string }; against: { total: number; average: string } }
			}
		}
		away: {
			id: number
			name: string
			logo: string
			last_5: {
				form: string
				att: string
				def: string
				goals: { for: { total: number; average: string }; against: { total: number; average: string } }
			}
		}
	}
	comparison: {
		form: { home: string; away: string }
		att: { home: string; away: string }
		def: { home: string; away: string }
		poisson_distribution: { home: string; away: string }
		h2h: { home: string; away: string }
		goals: { home: string; away: string }
		total: { home: string; away: string }
	}
}
