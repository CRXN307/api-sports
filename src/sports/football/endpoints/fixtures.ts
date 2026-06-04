import type { HttpClient } from "@/types";

export type FootballFixturesRounds = string[];

export type GetRoundsParams = {
  league: number;
  season: number;
  current?: boolean;
  dates?: boolean;
  timezone?: string;
};

export function getRounds(
  client: HttpClient,
  baseUrl: string,
  params: GetRoundsParams,
) {
  return client.get<FootballFixturesRounds>(baseUrl, "fixtures/rounds", params);
}

export type FootballFixturesResponse = {
  fixture: {
    id: number;
    referee: string | null;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: number | null;
      second: number | null;
    };
    venue: {
      id: number | null;
      name: string | null;
      city: string | null;
    };
    status: {
      long: string;
      short:
        | "TBD"
        | "NS"
        | "1H"
        | "HT"
        | "2H"
        | "ET"
        | "BT"
        | "P"
        | "SUSP"
        | "INT"
        | "FT"
        | "AET"
        | "PEN"
        | "PST"
        | "CANC"
        | "ABD"
        | "AWD"
        | "WO"
        | "LIVE";
      elapsed: number | null;
      extra: number | null;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string | null;
    season: number;
    round: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
  };
  score: {
    halftime: {
      home: number | null;
      away: number | null;
    };
    fulltime: {
      home: number | null;
      away: number | null;
    };
    extratime: {
      home: number | null;
      away: number | null;
    };
    penalty: {
      home: number | null;
      away: number | null;
    };
  };
}[];

export type GetFixturesParams = {
  id?: number;
  ids?: string;
  live?: string;
  date?: string;
  league?: number;
  season?: number;
  team?: number;
  last?: number;
  next?: number;
  from?: string;
  to?: string;
  round?: string;
  status?: string;
  venue?: number;
  timezone?: string;
};

export function getFixtures(
  client: HttpClient,
  baseUrl: string,
  params?: GetFixturesParams,
) {
  return client.get<FootballFixturesResponse>(baseUrl, "fixtures", params);
}

export type FootballFixturesH2HResponse = {
  fixture: {
    id: number;
    referee: string | null;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: number | null;
      second: number | null;
    };
    venue: {
      id: number | null;
      name: string | null;
      city: string | null;
    };
    status: {
      long: string;
      short:
        | "TBD"
        | "NS"
        | "1H"
        | "HT"
        | "2H"
        | "ET"
        | "BT"
        | "P"
        | "SUSP"
        | "INT"
        | "FT"
        | "AET"
        | "PEN"
        | "PST"
        | "CANC"
        | "ABD"
        | "AWD"
        | "WO"
        | "LIVE";
      elapsed: number | null;
      extra: number | null;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string | null;
    season: number;
    round: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
  };
  score: {
    halftime: {
      home: number | null;
      away: number | null;
    };
    fulltime: {
      home: number | null;
      away: number | null;
    };
    extratime: {
      home: number | null;
      away: number | null;
    };
    penalty: {
      home: number | null;
      away: number | null;
    };
  };
}[];

export type GetHeadToHeadParams = {
  h2h: string;
  date?: string;
  league?: number;
  season?: number;
  last?: number;
  next?: number;
  from?: string;
  to?: string;
  status?: string;
  venue?: number;
  timezone?: string;
};

export function getHeadToHead(
  client: HttpClient,
  baseUrl: string,
  params: GetHeadToHeadParams,
) {
  return client.get<FootballFixturesH2HResponse>(
    baseUrl,
    "fixtures/headtohead",
    params,
  );
}

export type FootballFixturesStatisticsResponse = {
  team: {
    id: number;
    name: string;
    logo: string;
  };
  statistics: {
    type: string;
    value: number | string;
  }[];
}[];

export type GetFixtureStatisticsParams = {
  fixture: number;
  team?: number;
  type?: string;
  half?: boolean;
};

export function getFixtureStatistics(
  client: HttpClient,
  baseUrl: string,
  params: GetFixtureStatisticsParams,
) {
  return client.get<FootballFixturesStatisticsResponse>(
    baseUrl,
    "fixtures/statistics",
    params,
  );
}

export type FootballFixturesEventsResponse = ({
  time: {
    elapsed: number;
    extra: number | null;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  player: {
    id: number;
    name: string;
  };
  assist: {
    id: number | null;
    name: string | null;
  };
  comments: string | null;
} & (
  | {
      type: "Goal";
      detail: "Normal Goal" | "Own Goal" | "Penalty" | "Missed Penalty";
    }
  | {
      type: "Card";
      detail: "Yellow Card" | "Red Card";
    }
  | {
      type: "Subst";
      detail: `Substitution ${number}`;
    }
  | {
      type: "Var";
      detail: "Goal cancelled" | "Penalty confirmed";
    }
))[];

export type GetFixtureEventsParams = {
  fixture: number;
  team?: number;
  player?: number;
  type?: string;
};

export function getFixtureEvents(
  client: HttpClient,
  baseUrl: string,
  params: GetFixtureEventsParams,
) {
  return client.get<FootballFixturesEventsResponse>(
    baseUrl,
    "fixtures/events",
    params,
  );
}

export type FootballFixturesLineupsResponse = {
  team: {
    id: number;
    name: string;
    logo: string;
    colors: {
      player: { primary: string; number: string; border: string };
      goalkeeper: { primary: string; number: string; border: string };
    } | null;
  };
  formation: string;
  startXI: {
    player: {
      id: number;
      name: string;
      number: number;
      pos: string;
      grid: string;
    };
  }[];
  substitues: {
    player: {
      id: number;
      name: string;
      number: number;
      pos: string;
      grid: string | null;
    };
  }[];
  coach: {
    id: number;
    name: string;
    photo: string;
  };
}[];

export type GetFixtureLineupsParams = {
  fixture: number;
  team?: number;
  player?: number;
  type?: string;
};

export function getFixtureLineups(
  client: HttpClient,
  baseUrl: string,
  params: GetFixtureLineupsParams,
) {
  return client.get<FootballFixturesLineupsResponse>(
    baseUrl,
    "fixtures/lineups",
    params,
  );
}

export type FootballFixturesPlayersResponse = {
  team: {
    id: number;
    name: string;
    logo: string;
    update: string;
  };
  players: {
    player: {
      id: number;
      name: string;
      photo: string;
    };
    statistics: {
      games: {
        minutes: number | null;
        number: number;
        position: string;
        rating: string | null;
        captain: boolean;
        substitute: boolean;
      };
      offsides: number | null;
      shots: { total: number | null; on: number | null };
      goals: {
        total: number | null;
        conceded: number;
        assists: number | null;
        saves: number | null;
      };
      passes: {
        total: number | null;
        key: number | null;
        accuracy: number | null;
      };
      tackles: {
        total: number | null;
        blocks: number | null;
        interceptions: number | null;
      };
      duels: { total: number | null; won: number | null };
      dribbles: {
        attempts: number | null;
        success: number | null;
        past: number | null;
      };
      fouls: { drawn: number | null; committed: number | null };
      cards: { yellow: number; red: number };
      penalty: {
        won: number | null;
        committed: number | null;
        scored: number;
        missed: number;
        saved: number | null;
      };
    }[];
  }[];
}[];

export type GetFixturePlayersParams = {
  fixture: number;
  team?: number;
};

export function getFixturePlayers(
  client: HttpClient,
  baseUrl: string,
  params: GetFixturePlayersParams,
) {
  return client.get<FootballFixturesPlayersResponse>(
    baseUrl,
    "fixtures/players",
    params,
  );
}
