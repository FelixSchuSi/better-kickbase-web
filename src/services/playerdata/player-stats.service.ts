import { BasePlayerService } from './base-player.service';
// averagePoints: 198
// f: false
// firstName: "Robert"
// id: "455"
// lastName: "Lewandowski"
// marketValue: 64112276
// marketValues: (365) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
// mvHigh: 65201903
// mvHighDate: "2021-10-04T00:00:00Z"
// mvLow: 49436304
// mvLowDate: "2021-04-09T00:00:00Z"
// mvTrend: 1
// nm: (3) [{…}, {…}, {…}]
// number: 9
// points: 4944
// position: 4
// profileUrl: "https://kickbase.b-cdn.net/pool/players/455.jpg"
// seasons: (5) [{…}, {…}, {…}, {…}, {…}]
// status: 0
// teamCoverUrl: "https://kickbase.b-cdn.net/team/2013/08/01/ec8377d89197450e89fa942e4e36d48c.png"
// teamId: "2"
// teamUrl: "https://kickbase.b-cdn.net/team/2013/07/30/3ebe44c53c3f4c87bd605da69e743fb8.jpg"
// userFlags: 0
export enum MarketValueTrend {
  UP = 1,
  DOWN = 2
}
export interface PlayerStats {
  averagePoints: number;
  f: boolean;
  firstName: string;
  id: string;
  lastName: string;
  marketValue: number;
  // marketValues: (365) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
  mvHigh: number;
  mvHighDate: Date;
  mvLow: number;
  mvLowDate: Date;
  mvTrend: MarketValueTrend;
  // nm: (3) [{…}, {…}, {…}]
  number: number;
  points: number;
  // position: 4
  profileUrl: string;
  // seasons: (5) [{…}, {…}, {…}, {…}, {…}]
  // status: 0
  teamCoverUrl: string;
  teamId: string; // TODO: Create ENUM with Team IDs
  teamUrl: string;
  // userFlags: 0
}
export class PlayerStatsService extends BasePlayerService<PlayerStats> {
  public async getData(playerId: string): Promise<PlayerStats> {
    await this.ensureLogin();

    // TODO:
    const url: string = import.meta.env.SSR
      ? `https://api.kickbase.com/leagues/${this.leagueId}/players/${playerId}/stats`
      : `/api/leagues/${this.leagueId}/players/${playerId}/stats`;

    const response: Response = await fetch(url, this.default_opts);

    const info: any = await response.json();
    debugger;
    return info;
    // const mappings = { ...info };
    // // No mapping required since all keys are human-readable
    // for (const key of Object.keys(mappings)) {
    //   mappings[key] = key;
    // }

    // return this.mapAndTransform(info, mappings);
  }
}

export const playerStatsService = new PlayerStatsService();
