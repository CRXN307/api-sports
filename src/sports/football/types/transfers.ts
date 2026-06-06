import type { FootballPlayer } from "./players";

export type FootballTransferTeam = {
	id: number;
	name: string;
	logo: string;
};

export type FootballTransferTeams = {
	in: FootballTransferTeam;
	out: FootballTransferTeam;
};

export type FootballTransfer = {
	date: string;
	type: string;
	teams: FootballTransferTeams;
};

export type FootballTransfersResponse = {
	player: Pick<FootballPlayer, "id" | "name">;
	update: string;
	transfers: FootballTransfer[];
};

export type GetFootballTransfersParams = {
	player?: number;
	team?: number;
};
