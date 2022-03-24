import { PlayerSeason, playerSeasonFromApiResponse } from '../../models/player-season';
import { BasePlayerService } from './base-player.service';

export interface PlayerPoints {
  seasons: PlayerSeason[];
}

export class PlayerPointsService extends BasePlayerService<PlayerPoints> {
  public override async getData(playerId: string): Promise<PlayerPoints> {
    await this.ensureLogin();
    const url: string = import.meta.env.SSR
      ? `https://api.kickbase.com/players/${playerId}/points`
      : `/api/players/${playerId}/points`;
    const response: Response = await fetch(url, this.default_opts);
    const points: any = await response.json();
    return { seasons: points.s.map(playerSeasonFromApiResponse) };
  }
}

export const playerPointsService = new PlayerPointsService();
