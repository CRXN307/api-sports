export type FootballSidelined = {
	type: string;
	start: string;
	end: string | null;
};

export type FootballSidelinedResponse = FootballSidelined;

export type GetFootballSidelinedParams = {
	player?: number;
	players?: string;
	coach?: number;
	coachs?: string;
};
