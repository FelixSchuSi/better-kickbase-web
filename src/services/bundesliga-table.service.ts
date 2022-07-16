import { BundesligaTable, BundesligaTableEntry, bundesligaTableEntryFromApiResponse } from '../models/bundesliga-table';
import { BaseService } from './base.service';

export class BundesligaTableService extends BaseService<any> {
  public override async getData(): Promise<BundesligaTable> {
    // TODO: The path `/competition/table` of the kickbase api doesnt work anymore.
    // TODO: This should be fixed but for now we just mock the responst.
    return this.mockData();

    // const url: string = `https://api.better-kickbase.workers.dev/competition/table`;
    // const response: Response = await fetch(url, this.default_opts);
    // const rawTableData: any = await response.json();
    // const teams: BundesligaTableEntry[] = rawTableData.t.map(bundesligaTableEntryFromApiResponse);

    // const bundesligaTable: BundesligaTable = {
    //   matchDay: rawTableData.md,
    //   currentMatchDay: rawTableData.cmd,
    //   teams
    // };
    // return bundesligaTable;
  }

  private mockData(): BundesligaTable {
    const teams: BundesligaTableEntry[] = [
      { goadDifference: 0, matches: 0, points: 0, place: 4, teamId: '43', teamName: 'Leipzig', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 17, teamId: '10', teamName: 'Bremen', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 14, teamId: '13', teamName: 'Augsburg', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 18, teamId: '8', teamName: 'Schalke', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 8, teamId: '18', teamName: 'Mainz 05', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 11, teamId: '4', teamName: 'Frankfurt', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 15, teamId: '9', teamName: 'Stuttgart', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 7, teamId: '28', teamName: 'Köln', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 10, teamId: '15', teamName: 'M-Gladbach', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 9, teamId: '14', teamName: 'Hoffenheim', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 5, teamId: '40', teamName: 'Union', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 13, teamId: '24', teamName: 'Bochum', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 3, teamId: '7', teamName: 'Bayer 04', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 6, teamId: '5', teamName: 'Freiburg', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 12, teamId: '11', teamName: 'Wolfsburg', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 1, teamId: '2', teamName: 'Bayern', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 2, teamId: '3', teamName: 'Dortmund', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 16, teamId: '20', teamName: 'Hertha', trend: 0 }
    ];
    const bundesligaTable: BundesligaTable = {
      matchDay: 1,
      currentMatchDay: 1,
      teams
    };
    return bundesligaTable;
  }
}

export const bundesligaTableService = new BundesligaTableService();
