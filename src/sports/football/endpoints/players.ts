import type { HttpClient } from "@/types";

export type FootballPlayersResponse = {
  player: {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: {
      date: string | null;
      place: string | null;
      country: string | null;
    };
    nationality: string | null;
    height: string | null;
    weight: string | null;
    injured: boolean;
    photo: string;
  };
  statistics: {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    league: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string | null;
      season: number;
    };
    games: {
      appearences: number | null;
      lineups: number | null;
      minutes: number | null;
      number: number | null;
      position: string | null;
      rating: string | null;
      captain: boolean;
    };
    substitutes: {
      in: number | null;
      out: number | null;
      bench: number | null;
    };
    shots: { total: number | null; on: number | null };
    goals: {
      total: number | null;
      conceded: number | null;
      assists: number | null;
      saves: number | null;
    };
    passes: {
      total: number | null;
      key: number | null;
      accuracy: string | null;
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
    cards: { yellow: number; yellowred: number; red: number };
    penalty: {
      won: number | null;
      committed: number | null;
      scored: number;
      missed: number;
      saved: number | null;
    };
  };
}[];

export type GetPlayersParams = {
  id?: number;
  team?: number;
  league?: number;
  season?: number;
  search?: string;
  page?: number;
};

export function getPlayers(
  client: HttpClient,
  baseUrl: string,
  params?: GetPlayersParams,
) {
  return client.get<FootballPlayersResponse>(baseUrl, "players", params);
}

export type FootballPlayersSeasonsResponse = number[];

export type GetPlayerSeasonsParams = {
  player?: number;
};

export function getPlayersSeasons(
  client: HttpClient,
  baseUrl: string,
  params?: GetPlayerSeasonsParams,
) {
  return client.get<FootballPlayersSeasonsResponse>(
    baseUrl,
    "players/seasons",
    params,
  );
}

export type FootballPlayersProfilesResponse = {
  player: {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: {
      date: string | null;
      place: string | null;
      country: string | null;
    };
    nationality: string | null;
    height: string | null;
    weight: string | null;
    number: number | null;
    position: string | null;
    photo: string;
  };
}[];

export type GetPlayerProfilesParams = {
  player?: number;
  search?: string;
  page?: number;
};

export function getPlayersProfiles(
  client: HttpClient,
  baseUrl: string,
  params?: GetPlayerProfilesParams,
) {
  return client.get<FootballPlayersProfilesResponse>(
    baseUrl,
    "players/profiles",
    params,
  );
}

export type FootballPlayersSquadsResponse = {
  team: { id: number; name: string; logo: string };
  players: {
    id: number;
    name: string;
    age: number;
    number: number | null;
    position: string;
    photo: string;
  }[];
}[];

export type GetPlayerSquadsParams = {
  team?: number;
  player?: number;
};

export function getPlayersSquads(
  client: HttpClient,
  baseUrl: string,
  params?: GetPlayerSquadsParams,
) {
  return client.get<FootballPlayersSquadsResponse>(
    baseUrl,
    "players/squads",
    params,
  );
}

export type FootballPlayersTeamsResponse = {
  team: {
    id: number;
    name: string;
    logo: string;
  };
  seasons: number[];
}[];

export type GetPlayersTeamsParams = {
  player: number;
};

export function getPlayersTeams(
  client: HttpClient,
  baseUrl: string,
  params?: GetPlayersTeamsParams,
) {
  return client.get<FootballPlayersTeamsResponse>(
    baseUrl,
    "players/teams",
    params,
  );
}

export type FootballPlayersTopScorersResponse = {
  player: {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: {
      date: string | null;
      place: string | null;
      country: string | null;
    };
    nationality: string | null;
    height: string | null;
    weight: string | null;
    injured: boolean;
    photo: string;
  };
  statistics: {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    league: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string | null;
      season: number;
    };
    games: {
      appearences: number | null;
      lineups: number | null;
      minutes: number | null;
      number: number | null;
      position: string | null;
      rating: string | null;
      captain: boolean;
    };
    substitutes: {
      in: number | null;
      out: number | null;
      bench: number | null;
    };
    shots: { total: number | null; on: number | null };
    goals: {
      total: number | null;
      conceded: number | null;
      assists: number | null;
      saves: number | null;
    };
    passes: {
      total: number | null;
      key: number | null;
      accuracy: string | null;
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
    cards: { yellow: number; yellowred: number; red: number };
    penalty: {
      won: number | null;
      committed: number | null;
      scored: number;
      missed: number;
      saved: number | null;
    };
  };
}[];

export type GetPlayersTopScorersParams = {
  league: number;
  season: number;
};

export function getPlayersTopScorers(
  client: HttpClient,
  baseUrl: string,
  params: GetPlayersTopScorersParams,
) {
  return client.get<FootballPlayersTopScorersResponse>(
    baseUrl,
    "players/topscorers",
    params,
  );
}

export type FootballPlayersTopAssistsResponse = {
  player: {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: {
      date: string | null;
      place: string | null;
      country: string | null;
    };
    nationality: string | null;
    height: string | null;
    weight: string | null;
    injured: boolean;
    photo: string;
  };
  statistics: {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    league: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string | null;
      season: number;
    };
    games: {
      appearences: number | null;
      lineups: number | null;
      minutes: number | null;
      number: number | null;
      position: string | null;
      rating: string | null;
      captain: boolean;
    };
    substitutes: {
      in: number | null;
      out: number | null;
      bench: number | null;
    };
    shots: { total: number | null; on: number | null };
    goals: {
      total: number | null;
      conceded: number | null;
      assists: number | null;
      saves: number | null;
    };
    passes: {
      total: number | null;
      key: number | null;
      accuracy: string | null;
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
    cards: { yellow: number; yellowred: number; red: number };
    penalty: {
      won: number | null;
      committed: number | null;
      scored: number;
      missed: number;
      saved: number | null;
    };
  };
}[];

export type GetPlayersTopAssistsParams = {
  league: number;
  season: number;
};

export function getTopAssists(
  client: HttpClient,
  baseUrl: string,
  params: GetPlayersTopAssistsParams,
) {
  return client.get<FootballPlayersTopAssistsResponse>(
    baseUrl,
    "players/topassists",
    params,
  );
}

export type FootballPlayersTopYellowCards = {
  player: {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: {
      date: string | null;
      place: string | null;
      country: string | null;
    };
    nationality: string | null;
    height: string | null;
    weight: string | null;
    injured: boolean;
    photo: string;
  };
  statistics: {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    league: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string | null;
      season: number;
    };
    games: {
      appearences: number | null;
      lineups: number | null;
      minutes: number | null;
      number: number | null;
      position: string | null;
      rating: string | null;
      captain: boolean;
    };
    substitutes: {
      in: number | null;
      out: number | null;
      bench: number | null;
    };
    shots: { total: number | null; on: number | null };
    goals: {
      total: number | null;
      conceded: number | null;
      assists: number | null;
      saves: number | null;
    };
    passes: {
      total: number | null;
      key: number | null;
      accuracy: string | null;
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
    cards: { yellow: number; yellowred: number; red: number };
    penalty: {
      won: number | null;
      committed: number | null;
      scored: number;
      missed: number;
      saved: number | null;
    };
  };
}[];

export type GetPlayersTopYellowCardsParams = {
  league: number;
  season: number;
};

export function getTopYellowCards(
  client: HttpClient,
  baseUrl: string,
  params: GetPlayersTopYellowCardsParams,
) {
  return client.get<FootballPlayersTopYellowCards>(
    baseUrl,
    "players/topyellowcards",
    params,
  );
}

export type FootballPlayersTopRedCards = {
  player: {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: {
      date: string | null;
      place: string | null;
      country: string | null;
    };
    nationality: string | null;
    height: string | null;
    weight: string | null;
    injured: boolean;
    photo: string;
  };
  statistics: {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    league: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string | null;
      season: number;
    };
    games: {
      appearences: number | null;
      lineups: number | null;
      minutes: number | null;
      number: number | null;
      position: string | null;
      rating: string | null;
      captain: boolean;
    };
    substitutes: {
      in: number | null;
      out: number | null;
      bench: number | null;
    };
    shots: { total: number | null; on: number | null };
    goals: {
      total: number | null;
      conceded: number | null;
      assists: number | null;
      saves: number | null;
    };
    passes: {
      total: number | null;
      key: number | null;
      accuracy: string | null;
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
    cards: { yellow: number; yellowred: number; red: number };
    penalty: {
      won: number | null;
      committed: number | null;
      scored: number;
      missed: number;
      saved: number | null;
    };
  };
}[];

export type GetPlayersTopRedCardsParams = {
  league: number;
  season: number;
};

export function getTopRedCards(
  client: HttpClient,
  baseUrl: string,
  params: GetPlayersTopRedCardsParams,
) {
  return client.get<FootballPlayersTopRedCards>(
    baseUrl,
    "players/topredcards",
    params,
  );
}
