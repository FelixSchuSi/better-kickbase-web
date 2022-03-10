export interface PlayerSeasonSummary {
  assists: number;
  defensiveAverage: number;
  defensivePoints: number;
  generalAverage: number;
  generalPoints: number;
  goalFree: number;
  goalKeeperAverage: number;
  goalKeeperPoints: number;
  goals: number;
  matches: number;
  offensiveAverage: number;
  offensivePoints: number;
  points: number;
  redCards: number;
  season: string;
  seasonId: string;
  secondsPerGoal: number;
  secondsPlayed: number;
  startMatches: number;
  teamAverage: number;
  teamPoints: number;
  yellowCards: number;
}

export function playerSeasonSummaryFromApiResponse(playerSeasonSummary: any): PlayerSeasonSummary {
  return { ...playerSeasonSummary };
}
