import { PlayerPosition } from './player-position';
import { PlayerStatus } from './player-status';

export interface PlayerListItem {
  playerId: number;
  playerName: string;
  firstName: string;
  lastName: string;
  knownName: string;
  teamName: string;
  teamId: string;
  status: PlayerStatus;
  position: PlayerPosition;
  profileBig: string;
  number: number;
  averagePoints: number;
  totalPoints: number;
  marketValue: number;
  marketValueTrend: number;
}

export function playerListItemFromApiResponse(player: any): PlayerListItem {
  return {
    playerId: player.id,
    playerName: player.knownName ?? `${player.firstName} ${player.lastName}`,
    firstName: player.firstName,
    lastName: player.lastName,
    knownName: player.knownName,
    teamName: player.teamName,
    teamId: player.teamId,
    profileBig: player.profileBig,
    status: player.status,
    position: player.position,
    number: player.number,
    averagePoints: player.averagePoints,
    totalPoints: player.totalPoints,
    marketValue: player.marketValue,
    marketValueTrend: player.marketValueTrend
  };
}
