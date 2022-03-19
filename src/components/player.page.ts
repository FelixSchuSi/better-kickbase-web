import { LitElement, html, PropertyValueMap, CSSResultGroup, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { PlayerInfo } from '../services/playerdata/player-info.service';
import { PlayerPoints } from '../services/playerdata/player-points.service';
import { PlayerStats } from '../services/playerdata/player-stats.service';
import { PlayerData, playerDataService } from '../services/playerdata/playerdata.service';
import './player-badges.ts';

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

  @state()
  public playerStats: PlayerStats;

  static styles: CSSResultGroup = css`
    .upper-half {
      /* height: 100px; */
      width: 100%;
      background-color: #dc052e;
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto;
      grid-template-areas: 'main';
    }

    img.player-image {
      grid-area: main;
      width: 100%;
      z-index: 0;
    }

    .player-color-fade {
      grid-area: main;
      width: 100%;
      height: 60%;
      align-self: end;
      background: linear-gradient(to bottom, transparent, #dc052e);
      z-index: 1;
    }

    .player-summary {
      grid-area: main;
      z-index: 2;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
  `;

  protected async willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): Promise<void> {
    const isFirstUpdate: boolean = !this.playerPoints;

    if (isFirstUpdate) {
      const { playerInfo, playerPoints, playerStats }: PlayerData = JSON.parse(this.serverJsonData);
      this.playerInfo = playerInfo;
      this.playerPoints = playerPoints;
      this.playerStats = playerStats;
    }

    if (import.meta.env.SSR === false && isFirstUpdate) {
      const { playerInfo, playerPoints, playerStats }: PlayerData = await playerDataService.getData(this.playerId);
      this.playerInfo = playerInfo;
      this.playerPoints = playerPoints;
      this.playerStats = playerStats;
    }
  }

  render() {
    console.log(this.playerInfo.teamId);
    return html`
      <div class="upper-half">
        <img class="player-image" src=${this.playerInfo?.profileBig} />
        <div class="player-color-fade"></div>
        <div class="player-summary">
          <div class="player-name">${this.playerName}</div>

          <bkb-player-badges
            .number=${this.playerInfo.number}
            .position=${this.playerInfo.position}
          ></bkb-player-badges>
        </div>
      </div>
    `;
    // return html`
    //   <h1>${this.playerName} ${this.playerId}</h1>
    //   <h2>playerInfo</h2>
    //   ${this.playerInfo
    //     ? html`${Object.entries(this.playerInfo ?? {}).map(([key, value]) => html` <p>${key}: ${value}</p> `)}
    //         <img src=${this.playerInfo?.profile} />
    //         <img src=${this.playerInfo?.profileBig} />
    //         <img src=${this.playerInfo?.team} />
    //         <img src=${this.playerInfo?.teamCover} />`
    //     : ''}
    //   <h2>playerStats</h2>
    //   ${JSON.stringify(this.playerStats)}
    //   <h2>playerPoints</h2>
    //   ${this.playerPoints?.seasons.map(
    //     season => html`
    //       <h3>season ${season.year}</h3>
    //       ${JSON.stringify(season)}
    //     `
    //   )}
    // `;
  }
}
