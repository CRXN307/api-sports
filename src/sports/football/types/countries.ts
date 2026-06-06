export type FootballCountry = {
	name: string;
	code: string | null;
	flag: string | null;
};

export type FootballCountriesResponse = FootballCountry;

export type GetFootballCountriesParams = {
	name?: string;
	code?: string;
	search?: string;
};
