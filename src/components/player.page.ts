import { LitElement, html, PropertyValueMap, CSSResultGroup, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { property, customElement, state } from 'lit/decorators.js';
import { PlayerInfo } from '../services/playerdata/player-info.service';
import { PlayerPoints } from '../services/playerdata/player-points.service';
import { PlayerStats } from '../services/playerdata/player-stats.service';
import { PlayerData } from '../services/playerdata/playerdata.service';
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

  @property({ type: String, attribute: 'team-id' })
  public teamId: string;

  @state()
  public playerInfo: PlayerInfo;

  @state()
  public playerPoints: PlayerPoints;

  @state()
  public playerStats: PlayerStats;

  static styles: CSSResultGroup = css`
    :root,
    * {
      --team-primary-color-15: #28a144;
      --team-primary-color-11: #51a600;
      --team-primary-color-7: #fe0000;
      --team-primary-color-40: #d3011c;
      --team-primary-color-43: #001f46;
      --team-primary-color-3: #fde101;
      --team-primary-color-20: #001f46;
      --team-primary-color-24: #0a5ca5;
      --team-primary-color-13: #ce1719;
      --team-primary-color-14: #1c62b7;
      --team-primary-color-5: #d11b1a;
      --team-primary-color-2: #dc052e;
      --team-primary-color-22: #0090d7;
      --team-primary-color-19: #fde101;
      --team-primary-color-28: #e20612;
      --team-primary-color-9: #e32219;
      --team-primary-color-18: #e30713;
    }
    .upper-half {
      width: 100%;
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

    // if (import.meta.env.SSR === false && isFirstUpdate) {
    //   const { playerInfo, playerPoints, playerStats }: PlayerData = await playerDataService.getData(this.playerId);
    //   this.playerInfo = playerInfo;
    //   this.playerPoints = playerPoints;
    //   this.playerStats = playerStats;
    // }
  }

  private get upperHalfStyles() {
    return { 'background-color': `var(--team-primary-color-${this.teamId})` };
  }

  private get colorFadeStyles() {
    return {
      background: `linear-gradient(to bottom, transparent, var(--team-primary-color-${this.teamId}));`
    };
  }

  render() {
    return html`
      <div class="upper-half" style=${styleMap(this.upperHalfStyles)}>
        <img class="player-image" src=${this.playerInfo?.profileBig} alt="picture of ${this.playerName}" />
        <div class="player-color-fade" style=${styleMap(this.colorFadeStyles)}></div>
        <div class="player-summary">
          <div class="player-name">${this.playerName}</div>

          <bkb-player-badges
            .number=${this.playerInfo.number}
            .position=${this.playerInfo.position}
          ></bkb-player-badges>
        </div>
      </div>
    `;
  }
}
