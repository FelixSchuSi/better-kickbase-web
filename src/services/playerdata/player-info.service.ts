import { PlayerPosition } from '../../models/player-position';
import { PlayerStatus } from '../../models/player-status';
import { BasePlayerService } from './base-player.service';

export interface PlayerInfo {
  id: string;
  teamId: string;
  teamName: string;
  firstName: string;
  lastName: string;
  profile: string;
  profileBig: string;
  team: string;
  teamCover: string;
  status: PlayerStatus;
  position: PlayerPosition;
  number: number;
  averagePoints: number;
  totalPoints: number;
  marketValue: number;
  marketValueTrend: number;
}

export class PlayerInfoService extends BasePlayerService<PlayerInfo> {
  public async getData(playerId: string): Promise<PlayerInfo> {
    await this.ensureLogin();

    const url: string = import.meta.env.SSR
      ? `https://api.kickbase.com/leagues/${this.leagueId}/players/${playerId}/`
      : `/api/leagues/${this.leagueId}/players/${playerId}/`;

    const response: Response = await fetch(url, this.default_opts);

    return await response.json();
  }
}

export const playerInfoService = new PlayerInfoService();
