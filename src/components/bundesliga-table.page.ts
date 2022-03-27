import { LitElement, html, PropertyValueMap, CSSResultGroup, css, TemplateResult } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { property, customElement, state } from 'lit/decorators.js';
import { PlayerInfo } from '../services/playerdata/player-info.service';
import { PlayerPoints } from '../services/playerdata/player-points.service';
import { PlayerStats } from '../services/playerdata/player-stats.service';
import { PlayerData } from '../services/playerdata/playerdata.service';
import './player-badges.ts';
import './player-points';
import { bundesligaTableService } from '../services/bundesliga-table.service';
import { BundesligaTable, BundesligaTableEntry } from '../models/bundesliga-table';
import { teamPlayerService } from '../services/team-players.service';

export const tagName: string = 'bkb-bundesliga-table';
@customElement(tagName)
export class BundesligaTablePage extends LitElement {
  static styles: CSSResultGroup = css``;

  @property({ type: String, attribute: 'server-json-data' })
  public serverJsonData: string;

  @state()
  private bundesligaTable?: BundesligaTable;

  protected async willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): Promise<void> {
    const isFirstUpdate: boolean = !this.bundesligaTable;

    if (isFirstUpdate) {
      this.bundesligaTable = JSON.parse(this.serverJsonData);
    }

    // if (import.meta.env.SSR === false && isFirstUpdate) {
    //   this.bundesligaTable = await bundesligaTableService.getData();
    // }
  }

  protected render(): TemplateResult {
    return html`
      <ul>
        ${this.bundesligaTable?.teams.map((team: BundesligaTableEntry) => html` <li>${team.teamName}</li> `)}
      </ul>
    `;
  }
}
