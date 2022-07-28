import { PlayerPosition } from '../../models/player-position';
import { PlayerSeasonSummary, playerSeasonSummaryFromApiResponse } from '../../models/player-season-summary';
import { PlayerStatus } from '../../models/player-status';
import { PlayerUpcomingMatch, playerUpcomingMatchFromApiResponse } from '../../models/player-upcoming-match';
import { PlayerValueHistoryItem, playerValueHistoryItemFromApiResponse } from '../../models/player-value-history';

export enum MarketValueTrend {
  UP = 1,
  DOWN = 2
}

export interface PlayerStats {
  averagePoints: number;
  f: boolean; // TODO: What is this
  firstName: string;
  id: string;
  lastName: string;
  marketValue: number;
  marketValues?: PlayerValueHistoryItem[];
  mvHigh: number;
  mvHighDate: Date;
  mvLow: number;
  mvLowDate: Date;
  mvTrend: MarketValueTrend;
  upcomingMatches: PlayerUpcomingMatch[];
  number: number;
  points: number;
  position: PlayerPosition;
  profileUrl: string;
  seasons: PlayerSeasonSummary[];
  status: PlayerStatus;
  teamCoverUrl: string;
  teamId: string; // TODO: Create ENUM with Team IDs
  teamUrl: string;
  userFlags: 0; // TODO: What is this?
}

export class PlayerStatsService {
  public async getData(playerId: string, leagueId: string = '2335868'): Promise<PlayerStats> {
    const url: string = `https://api.better-kickbase.workers.dev/leagues/${leagueId}/players/${playerId}/stats`;

    const response: Response = await fetch(url);

    const statsFromApi: any = await response.json();

    return {
      averagePoints: statsFromApi.averagePoints,
      f: statsFromApi.f,
      firstName: statsFromApi.firstName,
      id: statsFromApi.id,
      lastName: statsFromApi.lastName,
      marketValue: statsFromApi.marketValue,
      // TODO: visualize markeit values
      // marketValues: statsFromApi.marketValues.map(playerValueHistoryItemFromApiResponse),
      mvHigh: statsFromApi.mvHigh,
      mvHighDate: new Date(statsFromApi.mvHighDate),
      mvLow: statsFromApi.mvLow,
      mvLowDate: new Date(statsFromApi.mvLowDate),
      mvTrend: statsFromApi.mvTrend,
      upcomingMatches: statsFromApi.nm.map(playerUpcomingMatchFromApiResponse),
      number: statsFromApi.number,
      points: statsFromApi.points,
      position: statsFromApi.position,
      profileUrl: statsFromApi.profileUrl,
      seasons: statsFromApi.seasons.map(playerSeasonSummaryFromApiResponse),
      status: statsFromApi.status,
      teamCoverUrl: statsFromApi.teamCoverUrl,
      teamId: statsFromApi.teamId,
      teamUrl: statsFromApi.teamUrl,
      userFlags: statsFromApi.userFlags
    };
  }
}

export const playerStatsService = new PlayerStatsService();
