export enum PlayerPosition {
  GOAL_KEEPER = 1,
  DEFENDER = 2,
  MIDFIELDER = 3,
  FORWARD = 4,
  UNKNOWN = 9999999999
}

export function getPlayerPositionLabel(playerPosition: PlayerPosition): string {
  switch (playerPosition) {
    case PlayerPosition.GOAL_KEEPER:
      return 'TW';
    case PlayerPosition.DEFENDER:
      return 'ABW';
    case PlayerPosition.MIDFIELDER:
      return 'MIT';
    case PlayerPosition.FORWARD:
      return 'ST';
    case PlayerPosition.UNKNOWN:
    default:
      return '';
  }
}
