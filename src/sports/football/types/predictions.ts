export type FootballPredictionWinner = {
	id: number | null;
	name: string | null;
	comment: string | null;
};

export type FootballPredictionPercent = {
	home: string;
	draw: string;
	away: string;
};

export type FootballPredictionGoals = {
	home: string;
	away: string;
};

export type FootballPrediction = {
	winner: FootballPredictionWinner;
	win_or_draw: boolean;
	under_over: string | null;
	goals: FootballPredictionGoals;
	advice: string;
	percent: FootballPredictionPercent;
};

export type FootballPredictionLeague = {
	id: number;
	name: string;
	country: string;
	logo: string;
	flag: string | null;
	season: number;
};

export type FootballPredictionGoalStat = {
	total: number;
	average: string;
};

export type FootballPredictionTeamLast5 = {
	form: string;
	att: string;
	def: string;
	goals: {
		for: FootballPredictionGoalStat;
		against: FootballPredictionGoalStat;
	};
};

export type FootballPredictionTeam = {
	id: number;
	name: string;
	logo: string;
	last_5: FootballPredictionTeamLast5;
};

export type FootballPredictionTeams = {
	home: FootballPredictionTeam;
	away: FootballPredictionTeam;
};

export type FootballPredictionComparisonStat = {
	home: string;
	away: string;
};

export type FootballPredictionComparison = {
	form: FootballPredictionComparisonStat;
	att: FootballPredictionComparisonStat;
	def: FootballPredictionComparisonStat;
	poisson_distribution: FootballPredictionComparisonStat;
	h2h: FootballPredictionComparisonStat;
	goals: FootballPredictionComparisonStat;
	total: FootballPredictionComparisonStat;
};

export type FootballPredictionsResponse = {
	predictions: FootballPrediction;
	league: FootballPredictionLeague;
	teams: FootballPredictionTeams;
	comparison: FootballPredictionComparison;
};

export type GetFootballPredictionsParams = {
	fixture: number;
};
