export type FootballVenue = {
	id: number;
	name: string;
	address: string | null;
	city: string | null;
	country: string;
	capacity: number | null;
	surface: string | null;
	image: string | null;
};

export type FootballVenuesResponse = FootballVenue;

export type GetFootballVenuesParams = {
	id?: number;
	name?: string;
	city?: string;
	country?: string;
	search?: string;
};
