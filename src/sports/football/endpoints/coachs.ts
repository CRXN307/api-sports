import type { HttpClient } from "@/types";

export type FootballCoachsResponse = {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number | null;
  birth: { date: string | null; place: string | null; country: string | null };
  nationality: string | null;
  height: string | null;
  weight: string | null;
  photo: string;
  team: { id: number; name: string; logo: string } | null;
  career: {
    team: { id: number; name: string; logo: string };
    start: string;
    end: string | null;
  }[];
}[];

export type GetCoachsParams = {
  id?: number;
  team?: number;
  search?: string;
};

export function getCoachs(
  client: HttpClient,
  baseUrl: string,
  params?: GetCoachsParams,
) {
  return client.get<FootballCoachsResponse>(baseUrl, "coachs", params);
}
