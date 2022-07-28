import { PlayerPosition } from '../../models/player-position';
import { PlayerStatus } from '../../models/player-status';

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

export class PlayerInfoService {
  public async getData(playerId: string, leagueId: string = '2335868'): Promise<PlayerInfo> {
    const url: string = `https://api.better-kickbase.workers.dev/leagues/${leagueId}/players/${playerId}/`;

    const response: Response = await fetch(url);

    return await response.json();
  }
}

export const playerInfoService = new PlayerInfoService();
