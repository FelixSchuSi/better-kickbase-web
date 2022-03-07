// https://api.kickbase.com/leagues/[league_id]/players/[player_id]/
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
export enum PlayerStatus {
  NONE = 0,
  INJURED = 1,
  STRICKEN = 2,
  REHAB = 4,
  RED_CARD = 8,
  YELLOW_RED_CARD = 16,
  FIFTH_YELLOW_CARD = 32,
  NOT_IN_TEAM = 64,
  NOT_IN_LEAGUE = 128,
  ABSENT = 256,
  UNKNOWN = 9999999999
}
export enum PlayerPosition {
  GOAL_KEEPER = 1,
  DEFENDER = 2,
  MIDFIELDER = 3,
  FORWARD = 4,
  UNKNOWN = 9999999999
}

export class PlayerInfoService extends BasePlayerService<PlayerInfo> {
  public async getData(playerId: string): Promise<PlayerInfo> {
    await this.ensureLogin();

    // const url: string = import.meta.env.SSR
    //   ? `https://api.kickbase.com/leagues/${this.leagueId}/players/${playerId}/`
    //   : `/api/leagues/${this.leagueId}/players/${playerId}/`;

    // const response: Response = await fetch(url, this.default_opts);
    // debugger;
    // const info: any = await response.json();

    // const mappings = { ...info };
    // // No mapping required since all keys are human-readable
    // for (const key of Object.keys(mappings)) {
    //   mappings[key] = key;
    // }

    // return this.mapAndTransform(info, mappings);
    return;
  }
}

export const playerInfoService = new PlayerInfoService();
