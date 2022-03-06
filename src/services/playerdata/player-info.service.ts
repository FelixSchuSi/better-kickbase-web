// https://api.kickbase.com/leagues/[league_id]/players/[player_id]/
import { BasePlayerService } from './base-player.service';

export interface PlayerInfo {}

// {
//     id: '1869',
//     teamId: '15',
//     teamName: 'M-Gladbach',
//     firstName: 'Breel',
//     lastName: 'Embolo',
//     profile: 'https://kickbase.b-cdn.net/pool/players/1869.jpg',
//     profileBig: 'https://kickbase.b-cdn.net/pool/playersbig/1869.png',
//     team: 'https://kickbase.b-cdn.net/team/2013/07/30/d91892b110704f76a6d787c5078f3030.jpg',
//     teamCover: 'https://kickbase.b-cdn.net/team/2013/08/01/5b3961e3757049c8889bb60a627b82b1.png',
//     status: 0,
//     position: 4,
//     number: 36,
//     averagePoints: 58,
//     totalPoints: 1100,
//     marketValue: 9693721,
//     marketValueTrend: 1
//   }

export class PlayerInfoService extends BasePlayerService<PlayerInfo> {
  public async getData(playerId: string): Promise<PlayerInfo> {
    await this.ensureLogin();

    const info: any = await fetch(
      `https://api.kickbase.com/leagues/${this.leagueId}/players/${playerId}/`,
      this.default_opts
    ).then(res => res.json());
    // console.log(info);
    return;
  }
}

export const playerInfoService = new PlayerInfoService();
