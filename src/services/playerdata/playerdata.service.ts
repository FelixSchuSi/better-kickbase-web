import { PlayerInfo, playerInfoService } from './player-info.service';
import { PlayerPoints, playerPointsService } from './player-points.service';
import { PlayerStats, playerStatsService } from './player-stats.service';

export interface PlayerData {
  playerInfo: PlayerInfo;
  playerPoints: PlayerPoints;
  playerStats: PlayerStats;
}

class PlayerDataService {
  public async getData(playerId: string): Promise<PlayerData> {
    return {
      playerInfo: await playerInfoService.getData(playerId),
      playerPoints: await playerPointsService.getData(playerId),
      playerStats: await playerStatsService.getData(playerId)
    };
  }
}

export const playerDataService = new PlayerDataService();
