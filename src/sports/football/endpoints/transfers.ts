import type { HttpClient } from "@/types";

export type FootballTransfersResponse = {
  player: { id: number; name: string };
  update: string;
  transfers: {
    date: string;
    type: string;
    teams: {
      in: { id: number; name: string; logo: string };
      out: { id: number; name: string; logo: string };
    };
  }[];
}[];

export type GetTransfersParams = {
  player?: number;
  team?: number;
};

export function getTransfers(
  client: HttpClient,
  baseUrl: string,
  params?: GetTransfersParams,
) {
  return client.get<FootballTransfersResponse>(baseUrl, "transfers", params);
}
