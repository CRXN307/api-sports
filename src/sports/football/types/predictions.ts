import type { FootballFixtureResponse } from "./fixtures";

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
	average: number;
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

export type FootballPredictionTeamLeagueGoalStat = {
	total: { home: number; away: number; total: number };
	average: { home: string; away: string; total: string };
};

export type FootballPredictionTeamLeague = {
	form: string;
	fixtures: {
		played: { home: number; away: number; total: number };
		wins: { home: number; away: number; total: number };
		draws: { home: number; away: number; total: number };
		loses: { home: number; away: number; total: number };
	};
	goals: {
		for: FootballPredictionTeamLeagueGoalStat;
		against: FootballPredictionTeamLeagueGoalStat;
	};
	biggest: {
		streak: { wins: number; draws: number; loses: number };
		wins: { home: string; away: string };
		loses: { home: string; away: string };
		goals: {
			for: { home: number; away: number };
			against: { home: number; away: number };
		};
	};
	clean_sheet: { home: number; away: number; total: number };
	failed_to_score: { home: number; away: number; total: number };
};

export type FootballPredictionTeam = {
	id: number;
	name: string;
	logo: string;
	last_5: FootballPredictionTeamLast5;
	league: FootballPredictionTeamLeague;
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
	h2h: FootballFixtureResponse[];
};

export type GetFootballPredictionsParams = {
	fixture: number;
};
