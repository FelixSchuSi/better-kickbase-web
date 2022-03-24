import { BaseService } from './base.service';
import inactivePlayers from '../data/all_inactive_players.json';

export interface Player {
  playerName: string;
  playerId: number;
}

export class TeamPlayerService extends BaseService<any> {
  public override async getData(team_id: string): Promise<Player[]> {
    if (team_id === 'INACTIVE_PLAYERS') {
      return this.getInactivePlayers();
    }
    await this.ensureLogin();
    const url: string = import.meta.env.SSR
      ? `https://api.kickbase.com/competition/teams/${team_id}/players`
      : `/api/competition/teams/${team_id}/players`;
    const response: Response = await fetch(url, this.default_opts);
    const rawPlayers: any = await response.json();
    const players: Player[] = rawPlayers.p.map((player: any) => {
      return {
        params: {
          playerName: `${player.firstName} ${player.lastName}`,
          playerId: String(player.id)
        },
        metadata: {
          team: player.teamName
        }
      };
    });

    return players;
  }

  public getInactivePlayers() {
    return inactivePlayers as Player[];
  }
}

export const teamPlayerService = new TeamPlayerService();
