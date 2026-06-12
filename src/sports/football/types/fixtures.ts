import type { FootballPlayer } from "./players";
import type { FootballVenue } from "./venues";

export type FootballRound = {
  round: string;
  dates: string[];
};

export type FootballRoundResponse = FootballRound;

export type GetFootballRoundsParams = {
  league: number;
  season: number;
  current?: boolean;
  dates?: boolean;
  timezone?: string;
};

export type FootballFixtureStatusMap = {
  TBD: "Time To Be Defined";
  NS: "Not Started";
  "1H": "First Half, Kick Off";
  HT: "Halftime";
  "2H": "Second Half, 2nd Half Started";
  ET: "Extra Time";
  BT: "Break Time";
  P: "Penalty In Progress";
  SUSP: "Match Suspended";
  INT: "Match Interrupted";
  FT: "Match Finished";
  AET: "Match Finished After Extra Time";
  PEN: "Match Finished Penalty Shootout";
  PST: "Match Postponed";
  CANC: "Match Cancelled";
  ABD: "Match Abandoned";
  AWD: "Technical Loss";
  WO: "WalkOver";
  LIVE: "In Progress";
};

export type FootballFixtureStatus = {
  [S in keyof FootballFixtureStatusMap]: {
    short: S;
    long: FootballFixtureStatusMap[S];
    elapsed: number | null;
    extra: number | null;
  };
}[keyof FootballFixtureStatusMap];

export type FootballFixtureLeague = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string | null;
  season: number;
  round: string;
};

export type FootballFixtureTeam = {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
};

export type FootballFixtureGoals = { home: number | null; away: number | null };

export type FootballFixture = {
  id: number;
  referee: string | null;
  timezone: string;
  date: string;
  timestamp: number;
  periods: { first: number | null; second: number | null };
  venue: Pick<FootballVenue, "id" | "name" | "city">;
  status: FootballFixtureStatus;
};

export type FootballFixtureTeams = {
  home: FootballFixtureTeam;
  away: FootballFixtureTeam;
};

export type FootballFixtureScore = {
  halftime: FootballFixtureGoals;
  fulltime: FootballFixtureGoals;
  extratime: FootballFixtureGoals;
  penalty: FootballFixtureGoals;
};

export type FootballFixtureResponse = {
  fixture: FootballFixture;
  league: FootballFixtureLeague;
  teams: FootballFixtureTeams;
  goals: FootballFixtureGoals;
  score: FootballFixtureScore;
};

export type GetFootballFixturesParams = {
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

export type GetFootballHeadToHeadParams = {
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

export type FootballFixtureStatisticsMap = {
  "Shots on Goal": number | null;
  "Shots off Goal": number | null;
  "Total Shots": number | null;
  "Blocked Shots": number | null;
  "Shots insidebox": number | null;
  "Shots outsidebox": number | null;
  Fouls: number | null;
  "Corner Kicks": number | null;
  Offsides: number | null;
  "Ball Possession": string | null;
  "Yellow Cards": number | null;
  "Red Cards": number | null;
  "Goalkeeper Saves": number | null;
  "Total passes": number | null;
  "Passes accurate": number | null;
  "Passes %": string | null;
  expected_goals: string | null;
};

export type FootballFixtureStatistic = {
  [T in keyof FootballFixtureStatisticsMap]: {
    type: T;
    value: FootballFixtureStatisticsMap[T];
  };
}[keyof FootballFixtureStatisticsMap];

export type FootballFixtureStatisticsResponse = {
  team: { id: number; name: string; logo: string };
  statistics: FootballFixtureStatistic[];
  statistics_1h: FootballFixtureStatistic[];
  statistics_2h: FootballFixtureStatistic[];
};

export type GetFootballFixtureStatisticsParams = {
  fixture: number;
  team?: number;
  type?: string;
  half?: boolean;
};

export type FootballFixtureEvent = {
  time: { elapsed: number; extra: number | null };
  team: { id: number; name: string; logo: string };
  player: Pick<FootballPlayer, "id" | "name">;
  assist: { id: number | null; name: string | null };
  comments: string | null;
} & (
  | {
      type: "Goal";
      detail: "Normal Goal" | "Own Goal" | "Penalty" | "Missed Penalty";
    }
  | { type: "Card"; detail: "Yellow Card" | "Red Card" }
  | { type: "Subst"; detail: `Substitution ${number}` }
  | { type: "Var"; detail: "Goal cancelled" | "Penalty confirmed" }
);

export type FootballFixtureEventResponse = FootballFixtureEvent;

export type GetFootballFixtureEventsParams = {
  fixture: number;
  team?: number;
  player?: number;
  type?: string;
};

export type FootballFixtureLineupColors = {
  primary: string;
  number: string;
  border: string;
};

export type FootballFixtureLineupPlayer = {
  id: number;
  name: string;
  number: number;
  pos: string;
  grid: string | null;
};

export type FootballFixtureLineupTeam = {
  id: number;
  name: string;
  logo: string;
  colors: {
    player: FootballFixtureLineupColors;
    goalkeeper: FootballFixtureLineupColors;
  } | null;
};

export type FootballFixtureLineupResponse = {
  team: FootballFixtureLineupTeam;
  formation: string;
  startXI: { player: FootballFixtureLineupPlayer }[];
  substitutes: { player: FootballFixtureLineupPlayer }[];
  coach: { id: number; name: string; photo: string };
};

export type GetFootballFixtureLineupsParams = {
  fixture: number;
  team?: number;
  player?: number;
  type?: string;
};

export type FootballFixturePlayerStatistics = {
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
  passes: { total: number | null; key: number | null; accuracy: string | null };
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
    commited: number | null;
    scored: number;
    missed: number;
    saved: number | null;
  };
};

export type FootballFixturePlayersStatisticsResponse = {
  team: { id: number; name: string; logo: string; update: string };
  players: {
    player: Pick<FootballPlayer, "id" | "name" | "photo">;
    statistics: FootballFixturePlayerStatistics[];
  }[];
};

export type GetFootballFixturePlayersStatisticsParams = {
  fixture: number;
  team?: number;
};
