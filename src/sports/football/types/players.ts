export type FootballPlayerBirth = {
  date: string | null;
  place: string | null;
  country: string | null;
};

export type FootballPlayer = {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: FootballPlayerBirth;
  nationality: string | null;
  height: string | null;
  weight: string | null;
  injured: boolean;
  photo: string;
};

export type FootballPlayerProfile = {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: FootballPlayerBirth;
  nationality: string | null;
  height: string | null;
  weight: string | null;
  number: number | null;
  position: string | null;
  photo: string;
};

export type FootballPlayerStatisticsTeam = {
  id: number;
  name: string;
  logo: string;
};

export type FootballPlayerStatisticsLeague = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string | null;
  season: number;
};

export type FootballPlayerGames = {
  appearences: number | null;
  lineups: number | null;
  minutes: number | null;
  number: number | null;
  position: string | null;
  rating: string | null;
  captain: boolean;
};

export type FootballPlayerSubstitutes = {
  in: number | null;
  out: number | null;
  bench: number | null;
};

export type FootballPlayerShots = {
  total: number | null;
  on: number | null;
};

export type FootballPlayerGoals = {
  total: number | null;
  conceded: number | null;
  assists: number | null;
  saves: number | null;
};

export type FootballPlayerPasses = {
  total: number | null;
  key: number | null;
  accuracy: number | null;
};

export type FootballPlayerTackles = {
  total: number | null;
  blocks: number | null;
  interceptions: number | null;
};

export type FootballPlayerDuels = {
  total: number | null;
  won: number | null;
};

export type FootballPlayerDribbles = {
  attempts: number | null;
  success: number | null;
  past: number | null;
};

export type FootballPlayerFouls = {
  drawn: number | null;
  committed: number | null;
};

export type FootballPlayerCards = {
  yellow: number;
  yellowred: number;
  red: number;
};

export type FootballPlayerPenalty = {
  won: number | null;
  commited: number | null;
  scored: number;
  missed: number;
  saved: number | null;
};

export type FootballPlayerStatistics = {
  team: FootballPlayerStatisticsTeam;
  league: FootballPlayerStatisticsLeague;
  games: FootballPlayerGames;
  substitutes: FootballPlayerSubstitutes;
  shots: FootballPlayerShots;
  goals: FootballPlayerGoals;
  passes: FootballPlayerPasses;
  tackles: FootballPlayerTackles;
  duels: FootballPlayerDuels;
  dribbles: FootballPlayerDribbles;
  fouls: FootballPlayerFouls;
  cards: FootballPlayerCards;
  penalty: FootballPlayerPenalty;
};

export type FootballPlayersResponse = {
  player: FootballPlayer;
  statistics: FootballPlayerStatistics[];
};

export type GetFootballPlayersParams = {
  id?: number;
  team?: number;
  league?: number;
  season?: number;
  search?: string;
  page?: number;
};

export type FootballPlayersSeasonsResponse = number;

export type GetFootballPlayerSeasonsParams = {
  player?: number;
};

export type FootballPlayersProfilesResponse = {
  player: FootballPlayerProfile;
};

export type GetFootballPlayerProfilesParams = {
  player?: number;
  search?: string;
  page?: number;
};

export type FootballPlayerSquad = {
  id: number;
  name: string;
  age: number;
  number: number | null;
  position: string;
  photo: string;
};

export type FootballPlayersSquadTeam = {
  id: number;
  name: string;
  logo: string;
};

export type FootballPlayersSquadsResponse = {
  team: FootballPlayersSquadTeam;
  players: FootballPlayerSquad[];
};

export type GetFootballPlayerSquadsParams = {
  team?: number;
  player?: number;
};

export type FootballPlayersTeamRef = {
  id: number;
  name: string;
  logo: string;
};

export type FootballPlayersTeamsResponse = {
  team: FootballPlayersTeamRef;
  seasons: number[];
};

export type GetFootballPlayersTeamsParams = {
  player: number;
};

export type GetFootballPlayersTopParams = {
  league: number;
  season: number;
};
