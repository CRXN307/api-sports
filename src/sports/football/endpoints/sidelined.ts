import type { HttpClient } from "@/types";

export type FootballSidelinedResponse = {
  type: string;
  start: string;
  end: string | null;
}[];

export type GetSidelinedParams = {
  player?: number;
  players?: string;
  coach?: number;
  coachs?: string;
};

export function getSidelined(
  client: HttpClient,
  baseUrl: string,
  params?: GetSidelinedParams,
) {
  return client.get<FootballSidelinedResponse>(baseUrl, "sidelined", params);
}
