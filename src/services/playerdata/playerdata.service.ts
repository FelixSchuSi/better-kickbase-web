import { PlayerInfo, playerInfoService } from './player-info.service';
import { PlayerPoints, playerPointsService } from './player-points.service';

export interface PlayerData {
  playerInfo: PlayerInfo;
  playerPoints: PlayerPoints;
}

class PlayerDataService {
  public async getData(playerId: string): Promise<PlayerData> {
    return {
      playerInfo: await playerInfoService.getData(playerId),
      playerPoints: await playerPointsService.getData(playerId)
    };
  }
}

export const playerDataService = new PlayerDataService();
