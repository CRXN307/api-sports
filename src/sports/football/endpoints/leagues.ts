import type { HttpClient } from "@/types";

export type FootballLeaguesResponse = {
  league: {
    id: number;
    name: string;
    type: "League" | "Cup";
    logo: string;
  };
  country: {
    name: string;
    code: string | null;
    flag: string | null;
  };
  seasons: {
    year: number;
    start: string | null;
    end: string | null;
    current: boolean;
    coverage: {
      fixtures: {
        events: boolean;
        lineups: boolean;
        statistics_fixtures: boolean;
        statistics_players: boolean;
      };
      standings: boolean;
      players: boolean;
      top_scorers: boolean;
      top_assists: boolean;
      top_cards: boolean;
      injuries: boolean;
      predictions: boolean;
      odds: boolean;
    };
  }[];
}[];

export type GetLeaguesParams = {
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

export function getLeagues(
  client: HttpClient,
  baseUrl: string,
  params?: GetLeaguesParams,
) {
  return client.get<FootballLeaguesResponse>(baseUrl, "leagues", params);
}

export type FootballLeaguesSeasonsResponse = number[];

export function getSeasons(client: HttpClient, baseUrl: string) {
  return client.get<FootballLeaguesSeasonsResponse>(baseUrl, "leagues/seasons");
}
