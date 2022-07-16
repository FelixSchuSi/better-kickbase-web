import { BaseService } from './base.service';
import inactivePlayers from '../data/all_inactive_players.json';
import { PlayerListItem, playerListItemFromApiResponse } from '../models/player-list-item';

export class TeamPlayerService extends BaseService<PlayerListItem[]> {
  public override async getData(team_id: string): Promise<PlayerListItem[]> {
    if (team_id === 'INACTIVE_PLAYERS') {
      return this.getInactivePlayers();
    }
    const url: string = `https://api.better-kickbase.workers.dev/competition/teams/${team_id}/players`;
    const response: Response = await fetch(url, this.default_opts);
    const rawPlayers: any = await response.json();
    const players: PlayerListItem[] = rawPlayers.p.map(playerListItemFromApiResponse);
    return players;
  }

  public getInactivePlayers() {
    return inactivePlayers as PlayerListItem[];
  }
}

export const teamPlayerService = new TeamPlayerService();
