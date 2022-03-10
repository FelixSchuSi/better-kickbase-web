export interface PlayerMatch {
  match: number;
  points: number;
  goals: number;
  assists: number;
  home: number;
  playtimeSeconds: number;
  startingEleven: boolean;
  homeTeamId: number;
  awayTeamId: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export function playerMatchFromApiResponse(match: any): PlayerMatch {
  return {
    match: match.d,
    points: match.p,
    goals: match.g,
    assists: match.a,
    home: match.h,
    playtimeSeconds: match.sp,
    startingEleven: match.ms,
    homeTeamId: match.t1i,
    awayTeamId: match.t2i,
    homeTeamGoals: match.t1s,
    awayTeamGoals: match.t2s
  };
}
