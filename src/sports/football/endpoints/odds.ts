import type { HttpClient } from "@/types";

export type FootballOdsLiveResponse = {
  fixture: {
    id: number;
    status: { long: string; elapsed: number; seconds: string };
  };
  league: { id: number; season: number };
  teams: {
    home: { id: number; goals: number | null };
    away: { id: number; goals: number | null };
  };
  status: { stopped: boolean; blocked: boolean; finished: boolean };
  update: string;
  odds: {
    id: number;
    name: string;
    values: {
      value: string;
      odd: string;
      handicap: string | null;
      main: boolean | null;
      suspended: boolean;
    }[];
  }[];
}[];

export type GetOddsLiveParams = {
  fixture?: number;
  league?: number;
  bet?: number;
};

export function getOddsLive(
  client: HttpClient,
  baseUrl: string,
  params?: GetOddsLiveParams,
) {
  return client.get<FootballOdsLiveResponse>(baseUrl, "odds/live", params);
}

export type FootballOddsLiveBetsResponse = {
  id: number;
  name: string;
}[];

export type GetOddsLiveBetsParams = {
  id?: number;
  search?: string;
};

export function getOddsLiveBets(
  client: HttpClient,
  baseUrl: string,
  params?: GetOddsLiveBetsParams,
) {
  return client.get<FootballOddsLiveBetsResponse>(
    baseUrl,
    "odds/live/bets",
    params,
  );
}

export type FootballOddsResponse = {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string | null;
    season: number;
  };
  fixture: { id: number; timezone: string; date: string; timestamp: number };
  update: string;
  bookmakers: {
    id: number;
    name: string;
    bets: {
      id: number;
      name: string;
      values: { value: string; odd: string }[];
    }[];
  }[];
}[];

export type GetOddsParams = {
  fixture?: number;
  league?: number;
  season?: number;
  date?: string;
  timezone?: string;
  page?: number;
  bookmaker?: number;
  bet?: number;
};

export function getOdds(
  client: HttpClient,
  baseUrl: string,
  params?: GetOddsParams,
) {
  return client.get<FootballOddsResponse>(baseUrl, "odds", params);
}

export type FootballOddsBookmakersResponse = {
  id: number;
  name: string;
}[];

export type GetOddsBookmakersParams = {
  id?: number;
  search?: string;
};

export function getOddsBookmakers(
  client: HttpClient,
  baseUrl: string,
  params?: GetOddsBookmakersParams,
) {
  return client.get<FootballOddsBookmakersResponse>(
    baseUrl,
    "odds/bookmakers",
    params,
  );
}

export type FootballOddsBetsResponse = {
  id: number;
  name: string;
}[];

export type GetOddsBetsParams = {
  id?: number;
  search?: string;
};

export function getOddsBets(
  client: HttpClient,
  baseUrl: string,
  params?: GetOddsBetsParams,
) {
  return client.get<FootballOddsBetsResponse>(baseUrl, "odds/bets", params);
}

export type FootballOddsMappingResponse = {
  league: {
    id: number;
    season: number;
  };
  fixture: {
    id: number;
    date: string;
    timestamp: number;
  };
  update: string;
}[];

export type GetOddsMappingParams = {
  page?: number;
};

export function getOddsMapping(
  client: HttpClient,
  baseUrl: string,
  params?: GetOddsMappingParams,
) {
  return client.get<FootballOddsMappingResponse>(
    baseUrl,
    "odds/mapping",
    params,
  );
}
