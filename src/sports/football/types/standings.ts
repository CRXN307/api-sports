import type { FootballTeam } from "./teams";

export type FootballMatchRecord = {
	played: number;
	win: number;
	draw: number;
	lose: number;
	goals: { for: number; against: number };
};

export type FootballStanding = {
	rank: number;
	team: Pick<FootballTeam, "id" | "name" | "logo">;
	points: number;
	goalsDiff: number;
	group: string;
	form: string | null;
	status: string;
	description: string | null;
	all: FootballMatchRecord;
	home: FootballMatchRecord;
	away: FootballMatchRecord;
	update: string;
};

export type FootballStandingsLeague = {
	id: number;
	name: string;
	country: string;
	logo: string;
	flag: string | null;
	season: number;
	standings: FootballStanding[][];
};

export type FootballStandingsResponse = {
	league: FootballStandingsLeague;
};

export type GetFootballStandingsParams = {
	season: number;
	league?: number;
	team?: number;
};
