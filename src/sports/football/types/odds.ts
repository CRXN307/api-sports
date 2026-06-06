// ─── Live odds ─────────────────────────────────────────────────────────────

export type FootballOddsLiveFixtureStatus = {
	long: string;
	elapsed: number;
	seconds: string;
};

export type FootballOddsLiveFixture = {
	id: number;
	status: FootballOddsLiveFixtureStatus;
};

export type FootballOddsLiveLeague = {
	id: number;
	season: number;
};

export type FootballOddsLiveTeamGoals = {
	id: number;
	goals: number | null;
};

export type FootballOddsLiveTeams = {
	home: FootballOddsLiveTeamGoals;
	away: FootballOddsLiveTeamGoals;
};

export type FootballOddsLiveStatus = {
	stopped: boolean;
	blocked: boolean;
	finished: boolean;
};

export type FootballOddsLiveOddValue = {
	value: string;
	odd: string;
	handicap: string | null;
	main: boolean | null;
	suspended: boolean;
};

export type FootballOddsLiveOdd = {
	id: number;
	name: string;
	values: FootballOddsLiveOddValue[];
};

export type FootballOddsLiveResponse = {
	fixture: FootballOddsLiveFixture;
	league: FootballOddsLiveLeague;
	teams: FootballOddsLiveTeams;
	status: FootballOddsLiveStatus;
	update: string;
	odds: FootballOddsLiveOdd[];
};

export type GetFootballOddsLiveParams = {
	fixture?: number;
	league?: number;
	bet?: number;
};

// ─── Live bets ─────────────────────────────────────────────────────────────

export type FootballOddsLiveBet = {
	id: number;
	name: string;
};

export type FootballOddsLiveBetsResponse = FootballOddsLiveBet;

export type GetFootballOddsLiveBetsParams = {
	id?: number;
	search?: string;
};

// ─── Odds ───────────────────────────────────────────────────────────────────

export type FootballOddsLeague = {
	id: number;
	name: string;
	country: string;
	logo: string;
	flag: string | null;
	season: number;
};

export type FootballOddsFixture = {
	id: number;
	timezone: string;
	date: string;
	timestamp: number;
};

export type FootballOddsBetValue = {
	value: string;
	odd: string;
};

export type FootballOddsBet = {
	id: number;
	name: string;
	values: FootballOddsBetValue[];
};

export type FootballOddsBookmaker = {
	id: number;
	name: string;
	bets: FootballOddsBet[];
};

export type FootballOddsResponse = {
	league: FootballOddsLeague;
	fixture: FootballOddsFixture;
	update: string;
	bookmakers: FootballOddsBookmaker[];
};

export type GetFootballOddsParams = {
	fixture?: number;
	league?: number;
	season?: number;
	date?: string;
	timezone?: string;
	page?: number;
	bookmaker?: number;
	bet?: number;
};

// ─── Bookmakers ─────────────────────────────────────────────────────────────

export type FootballOddsBookmakerRef = {
	id: number;
	name: string;
};

export type FootballOddsBookmakersResponse = FootballOddsBookmakerRef;

export type GetFootballOddsBookmakersParams = {
	id?: number;
	search?: string;
};

// ─── Bets ───────────────────────────────────────────────────────────────────

export type FootballOddsBetRef = {
	id: number;
	name: string;
};

export type FootballOddsBetsResponse = FootballOddsBetRef;

export type GetFootballOddsBetsParams = {
	id?: number;
	search?: string;
};
