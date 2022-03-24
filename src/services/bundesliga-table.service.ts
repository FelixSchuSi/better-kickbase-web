import { BundesligaTable, bundesligaTableEntryFromApiResponse } from '../models/bundesliga-table';
import { BaseService } from './base.service';

export class BundesligaTableService extends BaseService<any> {
  public override async getData(): Promise<BundesligaTable> {
    await this.ensureLogin();
    const url: string = import.meta.env.SSR ? `https://api.kickbase.com/competition/table` : `/api/competition/table`;
    const response: Response = await fetch(url, this.default_opts);
    const rawTableData: any = await response.json();
    const bundesligaTable: BundesligaTable = {
      matchDay: rawTableData.md,
      currentMatchDay: rawTableData.cmd,
      teams: rawTableData.t.map(bundesligaTableEntryFromApiResponse)
    };
    return bundesligaTable;
  }
}

export const bundesligaTableService = new BundesligaTableService();
