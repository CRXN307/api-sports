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
        events: boolean | null;
        lineups: boolean | null;
        statistics_fixtures: boolean | null;
        statistics_players: boolean | null;
      };
      standings: boolean | null;
      players: boolean | null;
      top_scorers: boolean | null;
      top_assists: boolean | null;
      top_cards: boolean | null;
      injuries: boolean | null;
      predictions: boolean | null;
      odds: boolean | null;
    } | null;
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
