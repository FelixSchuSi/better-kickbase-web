import { PlayerMatch, playerMatchFromApiResponse } from './player-match';

export interface PlayerSeason {
  points: number;
  appearances: number;
  startingEleven: number;
  year: string;
  matches: PlayerMatch[];
}

export function playerSeasonFromApiResponse(season: any): PlayerSeason {
  return {
    points: season.p,
    appearances: season.mp,
    startingEleven: season.ms,
    matches: season.m.map(playerMatchFromApiResponse),
    year: season.t
  };
}
