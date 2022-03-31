import { LitElement, html, PropertyValueMap, CSSResultGroup, css, TemplateResult } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import './player-badges.ts';
import './player-points.ts';
import './player-list-item.ts';

import { TEAM_IDS, TEAM_NAMES } from '../models/teams';
import { PlayerListItem } from '../models/player-list-item';

export const tagName: string = 'bkb-team';
@customElement(tagName)
export class BundesligaTablePage extends LitElement {
  static styles: CSSResultGroup = css``;

  @property({ type: String, attribute: 'server-json-data' })
  public serverJsonData: string;

  @property({ type: String, attribute: 'team-id' })
  public teamId: TEAM_IDS;

  @property({ type: String, attribute: 'team-name' })
  public teamName: TEAM_NAMES;

  @state()
  private players: PlayerListItem[];

  protected async willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): Promise<void> {
    const isFirstUpdate: boolean = !this.players;

    if (isFirstUpdate) {
      this.players = JSON.parse(this.serverJsonData);
    }

    // if (import.meta.env.SSR === false && isFirstUpdate) {
    //   this.bundesligaTable = await bundesligaTableService.getData();
    // }

    this.players?.sort((a: PlayerListItem, b: PlayerListItem) => a.position - b.position);
  }

  protected render(): TemplateResult {
    return html`
      <div class="root">
        ${this.players.map(
          (player: PlayerListItem) => html` <bkb-player-list-item .data=${player}></bkb-player-list-item> `
        )}
      </div>
    `;
  }
}
