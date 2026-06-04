import type { HttpClient } from "@/types";

export type StatusResponse = {
  account: {
    firstname: string;
    lastname: string;
    email: string;
  };
  subscription: {
    plan: string;
    end: string;
    active: boolean;
  };
  requests: {
    current: number;
    limit_day: number;
  };
};

export function getStatus(client: HttpClient, baseUrl: string) {
  return client.get<StatusResponse>(baseUrl, "status");
}
