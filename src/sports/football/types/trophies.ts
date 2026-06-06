export type FootballTrophy = {
	league: string;
	country: string;
	season: string;
	place: string;
};

export type FootballTrophiesResponse = FootballTrophy;

export type GetFootballTrophiesParams = {
	player?: number;
	players?: string;
	coach?: number;
	coachs?: string;
};
