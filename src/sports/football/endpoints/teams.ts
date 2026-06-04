import type { HttpClient } from "@/types";

export type FootballTeamsResponse = {
  team: {
    id: number;
    name: string;
    code: string | null;
    country: string;
    founded: string | null;
    national: boolean;
    logo: string;
  };
  venue: {
    id: number;
    name: string;
    address: string | null;
    city: string | null;
    capacity: number | null;
    surface: string | null;
    image: string | null;
  };
}[];

export type GetTeamsParams = {
  id?: number;
  name?: string;
  league?: number;
  season?: number;
  country?: string;
  code?: string;
  venue?: number;
  search?: string;
};

export function getTeams(
  client: HttpClient,
  baseUrl: string,
  params?: GetTeamsParams,
) {
  return client.get<FootballTeamsResponse>(baseUrl, "teams", params);
}

export type FootballTeamsStatisticsResponse = {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string | null;
    season: number;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  form: string | null;
  fixtures: {
    played: {
      home: number;
      away: number;
      total: number;
    };
    wins: {
      home: number;
      away: number;
      total: number;
    };
    draws: {
      home: number;
      away: number;
      total: number;
    };
    loses: {
      home: number;
      away: number;
      total: number;
    };
  };
  goals: {
    for: {
      total: { home: number; away: number; total: number };
      average: { home: string; away: string; total: string };
      minute: {
        "0-15": {
          total: number | null;
          percentage: string | null;
        };
        "16-30": {
          total: number | null;
          percentage: string | null;
        };
        "31-45": {
          total: number | null;
          percentage: string | null;
        };
        "46-60": {
          total: number | null;
          percentage: string | null;
        };
        "61-75": {
          total: number | null;
          percentage: string | null;
        };
        "76-90": {
          total: number | null;
          percentage: string | null;
        };
        "91-105": {
          total: number | null;
          percentage: string | null;
        };
        "106-120": {
          total: number | null;
          percentage: string | null;
        };
      };
      under_over: {
        "0.5": {
          over: number;
          under: number;
        };
        "1.5": {
          over: number;
          under: number;
        };
        "2.5": {
          over: number;
          under: number;
        };
        "3.5": {
          over: number;
          under: number;
        };
        "4.5": {
          over: number;
          under: number;
        };
      };
    };
    against: {
      total: { home: number; away: number; total: number };
      average: { home: string; away: string; total: string };
      minute: {
        "0-15": {
          total: number | null;
          percentage: string | null;
        };
        "16-30": {
          total: number | null;
          percentage: string | null;
        };
        "31-45": {
          total: number | null;
          percentage: string | null;
        };
        "46-60": {
          total: number | null;
          percentage: string | null;
        };
        "61-75": {
          total: number | null;
          percentage: string | null;
        };
        "76-90": {
          total: number | null;
          percentage: string | null;
        };
        "91-105": {
          total: number | null;
          percentage: string | null;
        };
        "106-120": {
          total: number | null;
          percentage: string | null;
        };
      };
      under_over: {
        "0.5": {
          over: number;
          under: number;
        };
        "1.5": {
          over: number;
          under: number;
        };
        "2.5": {
          over: number;
          under: number;
        };
        "3.5": {
          over: number;
          under: number;
        };
        "4.5": {
          over: number;
          under: number;
        };
      };
    };
  };
  biggest: {
    streak: {
      wins: number;
      draws: number;
      loses: number;
    };
    wins: {
      home: string | null;
      away: string | null;
    };
    loses: {
      home: string | null;
      away: string | null;
    };
    goals: {
      for: {
        home: number;
        away: number;
      };
      against: {
        home: number;
        away: number;
      };
    };
  };
  clean_sheet: {
    home: number;
    away: number;
    total: number;
  };
  failed_to_score: {
    home: number;
    away: number;
    total: number;
  };
  penalty: {
    scored: {
      total: number;
      percentage: string;
    };
    missed: {
      total: number;
      percentage: string;
    };
    total: number;
  };
  lineups: {
    formation: string;
    played: number;
  }[];
  cards: {
    yellow: {
      "0-15": {
        total: number | null;
        percentage: string | null;
      };
      "16-30": {
        total: number | null;
        percentage: string | null;
      };
      "31-45": {
        total: number | null;
        percentage: string | null;
      };
      "46-60": {
        total: number | null;
        percentage: string | null;
      };
      "61-75": {
        total: number | null;
        percentage: string | null;
      };
      "76-90": {
        total: number | null;
        percentage: string | null;
      };
      "91-105": {
        total: number | null;
        percentage: string | null;
      };
      "106-120": {
        total: number | null;
        percentage: string | null;
      };
    };
    red: {
      "0-15": {
        total: number | null;
        percentage: string | null;
      };
      "16-30": {
        total: number | null;
        percentage: string | null;
      };
      "31-45": {
        total: number | null;
        percentage: string | null;
      };
      "46-60": {
        total: number | null;
        percentage: string | null;
      };
      "61-75": {
        total: number | null;
        percentage: string | null;
      };
      "76-90": {
        total: number | null;
        percentage: string | null;
      };
      "91-105": {
        total: number | null;
        percentage: string | null;
      };
      "106-120": {
        total: number | null;
        percentage: string | null;
      };
    };
  };
};

export type GetTeamStatisticsParams = {
  league: number;
  season: number;
  team: number;
  date?: string;
};

export function getTeamStatistics(
  client: HttpClient,
  baseUrl: string,
  params: GetTeamStatisticsParams,
) {
  return client.get<FootballTeamsStatisticsResponse>(
    baseUrl,
    "teams/statistics",
    params,
  );
}

export type FootballTeamsSeasonsResponse = number[];

export type GetTeamSeasonsParams = {
  team: number;
};

export function getTeamSeasons(
  client: HttpClient,
  baseUrl: string,
  params: GetTeamSeasonsParams,
) {
  return client.get<FootballTeamsSeasonsResponse>(
    baseUrl,
    "teams/seasons",
    params,
  );
}

export type FootballTeamsCountriesResponse = {
  name: string;
  code: string | null;
  flag: string | null;
}[];

export function getTeamCountries(client: HttpClient, baseUrl: string) {
  return client.get<FootballTeamsCountriesResponse>(baseUrl, "teams/countries");
}
