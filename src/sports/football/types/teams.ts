import type { FootballVenue } from "./venues";

/* ── /teams ─────────────────────────────────────────────────────────────── */

export type FootballTeam = {
  id: number;
  name: string;
  code: string | null;
  country: string;
  founded: number | null;
  national: boolean;
  logo: string;
};

export type FootballTeamResponse = {
  team: FootballTeam;
  venue: Omit<FootballVenue, "country">;
};

export type GetFootballTeamsParams = {
  id?: number;
  name?: string;
  league?: number;
  season?: number;
  country?: string;
  code?: string;
  venue?: number;
  search?: string;
};

/* ── /teams/statistics ───────────────────────────────────────────────────── */

export type FootballTeamStatisticsLeague = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string | null;
  season: number;
};

export type FootballHomeAwayTotal = {
  home: number;
  away: number;
  total: number;
};

export type FootballMinuteBucket = {
  total: number | null;
  percentage: string | null;
};

export type FootballMinuteBuckets = {
  "0-15": FootballMinuteBucket;
  "16-30": FootballMinuteBucket;
  "31-45": FootballMinuteBucket;
  "46-60": FootballMinuteBucket;
  "61-75": FootballMinuteBucket;
  "76-90": FootballMinuteBucket;
  "91-105": FootballMinuteBucket;
  "106-120": FootballMinuteBucket;
};

export type FootballOverUnder = {
  over: number;
  under: number;
};

export type FootballOverUnderBuckets = {
  "0.5": FootballOverUnder;
  "1.5": FootballOverUnder;
  "2.5": FootballOverUnder;
  "3.5": FootballOverUnder;
  "4.5": FootballOverUnder;
};

export type FootballTeamStatisticsGoals = {
  total: FootballHomeAwayTotal;
  average: { home: string; away: string; total: string };
  minute: FootballMinuteBuckets;
  under_over: FootballOverUnderBuckets;
};

export type FootballTeamStatisticsBiggest = {
  streak: { wins: number; draws: number; loses: number };
  wins: { home: string | null; away: string | null };
  loses: { home: string | null; away: string | null };
  goals: {
    for: { home: number; away: number };
    against: { home: number; away: number };
  };
};

export type FootballTeamStatisticsPenalty = {
  scored: { total: number; percentage: string };
  missed: { total: number; percentage: string };
  total: number;
};

export type FootballTeamsStatisticsResponse = {
  league: FootballTeamStatisticsLeague;
  team: Pick<FootballTeam, "id" | "name" | "logo">;
  form: string | null;
  fixtures: {
    played: FootballHomeAwayTotal;
    wins: FootballHomeAwayTotal;
    draws: FootballHomeAwayTotal;
    loses: FootballHomeAwayTotal;
  };
  goals: {
    for: FootballTeamStatisticsGoals;
    against: FootballTeamStatisticsGoals;
  };
  biggest: FootballTeamStatisticsBiggest;
  clean_sheet: FootballHomeAwayTotal;
  failed_to_score: FootballHomeAwayTotal;
  penalty: FootballTeamStatisticsPenalty;
  lineups: { formation: string; played: number }[];
  cards: {
    yellow: FootballMinuteBuckets;
    red: FootballMinuteBuckets;
  };
};

export type GetFootballTeamStatisticsParams = {
  league: number;
  season: number;
  team: number;
  date?: string;
};

/* ── /teams/seasons ──────────────────────────────────────────────────────── */

export type GetFootballTeamSeasonsParams = {
  team: number;
};

export type FootballTeamSeasonsResponse = number[];
