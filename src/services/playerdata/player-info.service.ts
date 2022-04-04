import { PlayerPosition } from '../../models/player-position';
import { PlayerStatus } from '../../models/player-status';
import { BasePlayerService } from './base-player.service';

export interface PlayerInfo {
  id: string;
  teamId: string;
  teamName: string;
  firstName: string;
  knownName: string;
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
  public override async getData(playerId: string, leagueId: string = '2335868'): Promise<PlayerInfo> {
    await this.ensureLogin();

    // const url: string = import.meta.env.SSR
    //   ? `https://api.kickbase.com/leagues/${this.leagueId}/players/${playerId}/`
    //   : `https://api.better-kickbase.workers.dev/leagues/${this.leagueId}/players/${playerId}/`;

    const url: string = `https://api.better-kickbase.workers.dev/leagues/${leagueId}/players/${playerId}/`;

    const response: Response = await fetch(url, this.default_opts);

    return await response.json();
  }
}

export const playerInfoService = new PlayerInfoService();
