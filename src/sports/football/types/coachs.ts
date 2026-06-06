export type FootballCoachBirth = {
	date: string | null;
	place: string | null;
	country: string | null;
};

export type FootballCoachTeam = {
	id: number;
	name: string;
	logo: string;
};

export type FootballCoachCareer = {
	team: FootballCoachTeam;
	start: string;
	end: string | null;
};

export type FootballCoach = {
	id: number;
	name: string;
	firstname: string;
	lastname: string;
	age: number | null;
	birth: FootballCoachBirth;
	nationality: string | null;
	height: string | null;
	weight: string | null;
	photo: string;
	team: FootballCoachTeam | null;
	career: FootballCoachCareer[];
};

export type FootballCoachsResponse = FootballCoach;

export type GetFootballCoachsParams = {
	id?: number;
	team?: number;
	search?: string;
};
