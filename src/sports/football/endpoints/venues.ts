import type { HttpClient } from "@/types";

export type FootballVenueResponse = {
  id: number;
  name: string;
  address: string | null;
  city: string | null;
  country: string;
  capacity: number | null;
  surface: string | null;
  image: string | null;
}[];

export type GetVenuesParams = {
  id?: number;
  name?: string;
  city?: string;
  country?: string;
  search?: string;
};

/** Returns information about football venues. */
export function getVenues(
  client: HttpClient,
  baseUrl: string,
  params?: GetVenuesParams,
) {
  return client.get<FootballVenueResponse>(baseUrl, "venues", params);
}
