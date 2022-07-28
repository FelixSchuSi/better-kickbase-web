import inactivePlayers from '../data/all_inactive_players.json';
import { PlayerListItem, playerListItemFromApiResponse } from '../models/player-list-item';

export class TeamPlayerService {
  public async getData(team_id: string): Promise<PlayerListItem[]> {
    if (team_id === 'INACTIVE_PLAYERS') {
      return this.getInactivePlayers();
    }
    const url: string = `https://api.better-kickbase.workers.dev/competition/teams/${team_id}/players`;
    const response: Response = await fetch(url);

    if (!response.ok) {
      console.log(`request was not successful: 
      ${response.statusText}: ${response.status}
      `);
      return [];
    }

    const rawPlayers: any = await response.json();

    if (!response.ok) {
      console.log(`request was not successful: 
      ${response.statusText}: ${response.status}
      `);
      return [];
    }

    const players: PlayerListItem[] = rawPlayers.p.map(playerListItemFromApiResponse);
    return players;
  }

  public getInactivePlayers() {
    return inactivePlayers as PlayerListItem[];
  }
}

export const teamPlayerService = new TeamPlayerService();
