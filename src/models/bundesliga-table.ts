export interface BundesligaTableEntry {
  goadDifference: number;
  matches: number;
  points: number;
  place: number;
  teamId: string;
  teamName: string;
  trend: number;
}

export interface BundesligaTable {
  matchDay: number;
  currentMatchDay: number;
  teams: BundesligaTableEntry[];
}

export function bundesligaTableEntryFromApiResponse(tableEntry: any): BundesligaTableEntry {
  return {
    goadDifference: tableEntry.g,
    matches: tableEntry.m,
    points: tableEntry.p,
    place: tableEntry.pl,
    teamId: tableEntry.tid,
    teamName: tableEntry.tn,
    trend: tableEntry.t
  };
}
