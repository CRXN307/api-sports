import type { HttpClient } from "@/types";

export type FootballTrophiesResponse = {
  league: string;
  country: string;
  season: string;
  place: string;
}[];

export type GetTrophiesParams = {
  player?: number;
  players?: string;
  coach?: number;
  coachs?: string;
};

export function getTrophies(
  client: HttpClient,
  baseUrl: string,
  params?: GetTrophiesParams,
) {
  return client.get<FootballTrophiesResponse>(baseUrl, "trophies", params);
}
