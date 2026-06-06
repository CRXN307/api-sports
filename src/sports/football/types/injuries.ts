export type FootballInjuredPlayer = {
	id: number;
	name: string;
	photo: string;
	type: string;
	reason: string;
};

export type FootballInjuryTeam = {
	id: number;
	name: string;
	logo: string;
};

export type FootballInjuryFixture = {
	id: number;
	timezone: string;
	date: string;
	timestamp: number;
};

export type FootballInjuryLeague = {
	id: number;
	name: string;
	country: string;
	logo: string;
	flag: string | null;
	season: number;
};

export type FootballInjuriesResponse = {
	player: FootballInjuredPlayer;
	team: FootballInjuryTeam;
	fixture: FootballInjuryFixture;
	league: FootballInjuryLeague;
};

export type GetFootballInjuriesParams = {
	league?: number;
	season?: number;
	fixture?: number;
	team?: number;
	player?: number;
	date?: string;
	ids?: string;
	timezone?: string;
};
