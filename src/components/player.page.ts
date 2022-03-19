import { LitElement, html, PropertyValueMap, CSSResultGroup, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { property, customElement, state } from 'lit/decorators.js';
import { teamColors } from '../models/team-colors';
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

  static styles: CSSResultGroup = [
    teamColors,
    css`
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
    `
  ];

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
        <img class="player-image" src=${this.playerInfo?.profileBig} />
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
