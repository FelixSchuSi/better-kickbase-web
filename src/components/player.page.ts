import { LitElement, html, PropertyValueMap, CSSResultGroup, css, TemplateResult } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { PlayerInfo } from '../services/playerdata/player-info.service';
import { PlayerPoints } from '../services/playerdata/player-points.service';
import { PlayerStats } from '../services/playerdata/player-stats.service';
import { PlayerData, playerDataService } from '../services/playerdata/playerdata.service';
import { teamColors } from '../models/team-colors';
import noProfilePicFallback from '../../images/no_profile_pic.png';
import './player-badges.ts';
import './player-points.ts';
import { priceFormatter } from '../helpers/price-formatter';

@customElement('bkb-player')
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

      h1.player-name {
        margin: 0;
        color: white;
      }
      h1.player-name.inverted {
        color: black;
      }
      .bottom-container {
        align-self: stretch;
        padding: 0.5rem 1rem 0.5rem 1rem;
        color: white;
      }
      .bottom-container.inverted {
        color: black;
      }
      .price-container {
        display: flex;
      }
      .price-value {
        margin: 0;
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

    if (import.meta.env.SSR === false && isFirstUpdate) {
      const { playerInfo, playerPoints, playerStats }: PlayerData = await playerDataService.getData(this.playerId);
      this.playerInfo = playerInfo;
      this.playerPoints = playerPoints;
      this.playerStats = playerStats;
    }
  }

  private get upperHalfStyles() {
    return { 'background-color': `var(--team-primary-color-${this.teamId}, gray)` };
  }

  private get colorFadeStyles() {
    return {
      background: `linear-gradient(to bottom, transparent, var(--team-primary-color-${this.teamId}, gray));`
    };
  }

  protected render(): TemplateResult {
    return html`
      <div class="upper-half" style=${styleMap(this.upperHalfStyles)}>
        <img
          class="player-image"
          src=${this.playerInfo?.profileBig ?? noProfilePicFallback}
          alt="Profilbild von ${this.playerName}"
        />
        <div class="player-color-fade" style=${styleMap(this.colorFadeStyles)}></div>
        <div class="player-summary">
          <div
            class=${classMap({
              'bottom-container': true,
              'inverted': this.playerInfo.teamName === 'Dortmund'
            })}
          >
            <div class="price-container">
              <h3 class="price-value">
                ${priceFormatter.format(this.playerInfo.marketValue ?? 0)}&nbsp${this.priceTrendTemplate(
                  this.playerInfo.marketValueTrend
                )}
              </h3>
            </div>
          </div>
          <h1
            class=${classMap({
              'player-name': true,
              'inverted': this.playerInfo.teamName === 'Dortmund'
            })}
          >
            ${this.playerName}
          </h1>

          <bkb-player-badges
            .number=${this.playerInfo.number}
            .position=${this.playerInfo.position}
            ?inverted=${this.playerInfo.teamName === 'Dortmund'}
          ></bkb-player-badges>
        </div>
      </div>
      <bkb-player-points
        .points=${this.playerPoints}
        .upcomingMatches=${this.playerStats.upcomingMatches}
      ></bkb-player-points>
    `;
  }

  private priceTrendTemplate(trend: number): TemplateResult {
    switch (trend) {
      case 1:
        return html`&#129045;`;
      case 2:
        return html` &#129047;`;
      default:
      case 0:
        return html`-`;
    }
  }
}
