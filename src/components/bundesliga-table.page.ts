import { LitElement, html, PropertyValueMap, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { BundesligaTable, BundesligaTableEntry } from '../models/bundesliga-table';
import './player-badges.ts';
import './player-points.ts';
import './bundesliga-table-list-item.ts';
import { bundesligaTableService } from '../services/bundesliga-table.service';

@customElement('bkb-bundesliga-table')
export class BundesligaTablePage extends LitElement {
  @property({ type: String, attribute: 'server-json-data' })
  public serverJsonData: string;

  @state()
  private bundesligaTable?: BundesligaTable;

  protected async willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): Promise<void> {
    const isFirstUpdate: boolean = !this.bundesligaTable;

    if (isFirstUpdate) {
      const result: BundesligaTable = JSON.parse(this.serverJsonData);
      result.teams.sort((a: BundesligaTableEntry, b: BundesligaTableEntry) => a.place - b.place);
      this.bundesligaTable = result;
    }

    if (import.meta.env.SSR === false && isFirstUpdate) {
      const result: BundesligaTable = await bundesligaTableService.getData();
      result.teams.sort((a: BundesligaTableEntry, b: BundesligaTableEntry) => a.place - b.place);
      this.bundesligaTable = result;
    }
  }

  protected render(): TemplateResult {
    return html`
      <div class="root">
        ${this.bundesligaTable?.teams.map(
          (team: BundesligaTableEntry) => html`
            <bkb-bundesliga-table-list-item .data=${team}></bkb-bundesliga-table-list-item>
          `
        )}
      </div>
    `;
  }
}
