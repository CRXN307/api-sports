import type { HttpClient } from "@/types";

export type TimezoneResponse = string[];

export function getTimezones(client: HttpClient, baseUrl: string) {
  return client.get<TimezoneResponse>(baseUrl, "timezone");
}
