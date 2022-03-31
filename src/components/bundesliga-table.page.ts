import { LitElement, html, PropertyValueMap, CSSResultGroup, css, TemplateResult } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { BundesligaTable, BundesligaTableEntry } from '../models/bundesliga-table';
import './player-badges.ts';
import './player-points.ts';
import './bundesliga-table-list-item.ts';

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

    this.bundesligaTable?.teams.sort((a: BundesligaTableEntry, b: BundesligaTableEntry) => a.place - b.place);
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
