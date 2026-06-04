import type { HttpClient } from "@/types";

export type FootballCountriesResponse = {
  name: string;
  code: string | null;
  flag: string | null;
}[];

export type GetCountriesParams = {
  name?: string;
  code?: string;
  search?: string;
};

export function getCountries(
  client: HttpClient,
  baseUrl: string,
  params?: GetCountriesParams,
) {
  return client.get<FootballCountriesResponse>(baseUrl, "countries", params);
}
