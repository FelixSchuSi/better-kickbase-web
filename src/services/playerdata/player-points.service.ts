import { BasePlayerService } from './base-player.service';

export interface PlayerPoints {
  seasons: PlayerSeason[];
}

export interface PlayerSeason {
  points: number;
  appearances: number;
  startingEleven: number;
  year: string;
  matches: PlayerMatch[];
}

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

class PlayerPointsService extends BasePlayerService<PlayerPoints> {
  protected async getData(): Promise<PlayerPoints> {
    await this.ensureLogin();
    const points: any = await fetch('https://api.kickbase.com/players/1794/points', this.default_opts).then(res =>
      res.json()
    );
    const seasonMappings = {
      p: 'points',
      mp: 'appearances',
      ms: 'startingEleven',
      m: 'matches',
      t: 'year'
    };

    const seasonTransforms = {
      m: (matches: any[]) =>
        matches.map(match => {
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
        })
    };
    const playerPointsMappings = {
      s: 'seasons'
    };
    const playerPointsTransforms = {
      s: seasons => {
        return seasons.map(season => this.mapAndTransform(season, seasonMappings, seasonTransforms));
      }
    };

    return this.mapAndTransform(points, playerPointsMappings, playerPointsTransforms);
  }
}

export const playerPointsService = new PlayerPointsService();
