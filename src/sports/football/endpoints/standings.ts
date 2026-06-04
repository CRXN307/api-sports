import type { HttpClient } from "@/types";

export type FootballStandingsResponse = {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string | null;
    season: number;
    standings: {
      rank: number;
      team: {
        id: number;
        name: string;
        logo: string;
      };
      points: number;
      goalsDiff: number;
      group: string;
      form: string | null;
      status: string;
      description: string | null;
      all: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: {
          for: number;
          against: number;
        };
      };
      home: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: {
          for: number;
          against: number;
        };
      };
      away: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: {
          for: number;
          against: number;
        };
      };
      update: string;
    }[][];
  };
}[];

export type GetStandingsParams = {
  season: number;
  league?: number;
  team?: number;
};

export function getStandings(
  client: HttpClient,
  baseUrl: string,
  params: GetStandingsParams,
) {
  return client.get<FootballStandingsResponse>(baseUrl, "standings", params);
}
