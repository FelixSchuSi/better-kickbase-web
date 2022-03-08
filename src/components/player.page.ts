import { LitElement, html, PropertyValueMap } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { PlayerInfo } from '../services/playerdata/player-info.service';
import { PlayerPoints } from '../services/playerdata/player-points.service';
import { playerDataService } from '../services/playerdata/playerdata.service';

export const tagName: string = 'bkb-player';
@customElement(tagName)
export class PlayerPage extends LitElement {
  @property({ type: String, attribute: 'player-name' })
  public playerName: any;

  @property({ type: String, attribute: 'player-id' })
  public playerId: any;

  @property({ type: String, attribute: 'server-json-data' })
  public serverJsonData: string;

  @state()
  public playerInfo: PlayerInfo;

  @state()
  public playerPoints: PlayerPoints;

  protected async willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): Promise<void> {
    const isFirstUpdate: boolean = !this.playerPoints;

    if (isFirstUpdate) {
      const { playerInfo, playerPoints } = JSON.parse(this.serverJsonData);
      this.playerInfo = playerInfo;
      this.playerPoints = playerPoints;
    }

    if (import.meta.env.SSR === false && isFirstUpdate) {
      const { playerInfo, playerPoints } = await playerDataService.getData(this.playerId);
      this.playerInfo = playerInfo;
      this.playerPoints = playerPoints;
    }
  }

  render() {
    return html`
      <h1>${this.playerName} ${this.playerId}</h1>
      ${this.playerInfo
        ? html`${Object.entries(this.playerInfo ?? {}).map(([key, value]) => html` <p>${key}: ${value}</p> `)}
            <img src=${this.playerInfo?.profile} />
            <img src=${this.playerInfo?.profileBig} />
            <img src=${this.playerInfo?.team} />
            <img src=${this.playerInfo?.teamCover} />`
        : ''}
      ${this.playerPoints?.seasons.map(
        season => html`
          <h2>season ${season.year}</h2>
          ${JSON.stringify(season)}
        `
      )}
    `;
  }
}
