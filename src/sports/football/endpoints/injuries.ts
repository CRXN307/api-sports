import type { HttpClient } from "@/types";

export type FootballInjuriesResponse = {
  player: {
    id: number;
    name: string;
    photo: string;
    type: string;
    reason: string;
  };
  team: { id: number; name: string; logo: string };
  fixture: {
    id: number;
    timezone: string;
    date: string;
    timestamp: number;
  };
  league: {
    id: number;
    season: number;
    name: string;
    country: string;
    logo: string;
    flag: string | null;
  };
}[];

export type GetInjuriesParams = {
  league?: number;
  season?: number;
  fixture?: number;
  team?: number;
  player?: number;
  date?: string;
  ids?: string;
  timezone?: string;
};

export function getInjuries(
  client: HttpClient,
  baseUrl: string,
  params?: GetInjuriesParams,
) {
  return client.get<FootballInjuriesResponse>(baseUrl, "injuries", params);
}
