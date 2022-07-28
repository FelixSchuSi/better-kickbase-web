import { PlayerSeason, playerSeasonFromApiResponse } from '../../models/player-season';

export interface PlayerPoints {
  seasons: PlayerSeason[];
}

export class PlayerPointsService {
  public async getData(playerId: string): Promise<PlayerPoints> {
    const url: string = `https://api.better-kickbase.workers.dev/players/${playerId}/points`;

    const response: Response = await fetch(url);

    if (!response.ok) {
      console.log(`request was not successful: 
      ${response.statusText}: ${response.status}
      `);
      return { seasons: [] };
    }

    const points: any = await response.json();

    return { seasons: points.s.map(playerSeasonFromApiResponse) };
  }
}

export const playerPointsService = new PlayerPointsService();
