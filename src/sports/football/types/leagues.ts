import type { FootballCountry } from "./countries";

export type FootballLeague = {
	id: number;
	name: string;
	type: "League" | "Cup";
	logo: string;
};

export type FootballLeagueSeasonCoverage = {
	fixtures: {
		events: boolean | null;
		lineups: boolean | null;
		statistics_fixtures: boolean | null;
		statistics_players: boolean | null;
	};
	standings: boolean | null;
	players: boolean | null;
	top_scorers: boolean | null;
	top_assists: boolean | null;
	top_cards: boolean | null;
	injuries: boolean | null;
	predictions: boolean | null;
	odds: boolean | null;
};

export type FootballLeagueSeason = {
	year: number;
	start: string | null;
	end: string | null;
	current: boolean;
	coverage: FootballLeagueSeasonCoverage | null;
};

export type FootballLeagueResponse = {
	league: FootballLeague;
	country: FootballCountry;
	seasons: FootballLeagueSeason[];
};

export type FootballLeagueSeasonResponse = number;

export type GetFootballLeaguesParams = {
	id?: number;
	name?: string;
	country?: string;
	code?: string;
	season?: number;
	team?: number;
	type?: "league" | "cup";
	current?: boolean;
	search?: string;
	last?: number;
};
