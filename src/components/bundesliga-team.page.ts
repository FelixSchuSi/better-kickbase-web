import { LitElement, html, PropertyValueMap, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { TEAM_IDS, TEAM_NAMES } from '../models/teams';
import { PlayerListItem } from '../models/player-list-item';
import { teamPlayerService } from '../services/team-players.service';
import './player-list-item.ts';

@customElement('bkb-team')
export class BundesligaTeamPage extends LitElement {
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
      const result: PlayerListItem[] = JSON.parse(this.serverJsonData);
      result.sort((a: PlayerListItem, b: PlayerListItem) => a.position - b.position);
      this.players = result;
    }

    if (import.meta.env.SSR === false && isFirstUpdate) {
      const result: PlayerListItem[] = await teamPlayerService.getData(String(this.teamId));
      result.sort((a: PlayerListItem, b: PlayerListItem) => a.position - b.position);
      this.players = result;
    }
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
