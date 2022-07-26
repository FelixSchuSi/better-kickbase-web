import { svg, LitElement, html, CSSResultGroup, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { PlayerListItem } from '../models/player-list-item';
import noProfilePicFallback from '../../images/no_profile_pic.png';
import { BASE_PATH_WITHOUT_DOMAIN } from '../../base-path.mjs';
import { priceFormatter } from '../helpers/price-formatter';
import { pointFormatter } from '../helpers/point-formatter';
import { getPlayerPositionLabel, PlayerPosition } from '../models/player-position';

@customElement('bkb-player-list-item')
export class PlayerListItemComponent extends LitElement {
  static styles: CSSResultGroup = css`
    .root {
      display: flex;
      background-color: white;
      margin-top: 0.5rem;
      border-radius: 0.5rem;
      height: 128px;
      align-items: center;
      /* justify-content: space-between; */
      cursor: pointer;
      color: black;
    }

    .root:link,
    .root:visited,
    .root:hover,
    .root:active {
      text-decoration: none;
    }

    .root > *:not(:first-child) {
      padding-left: 1rem;
    }

    .invisible {
      visibility: hidden;
    }
    .label {
      color: #9ca4a8;
    }
    .left,
    .player-img {
      height: 100%;
    }
    .player-img {
      clip-path: inset(0% 0% 0% 50px round 0.5rem);
      margin-left: -50px;
    }
    .right {
      display: grid;
      width: 100%;
      justify-content: stretch;
      align-content: stretch;
      grid-template-columns: auto auto 1fr;
      padding: 1rem 1rem 1rem 1rem;
      grid-template-areas:
        'badges badges .'
        'name name .'
        'points-value avg-points-value market-value-value'
        'points-label avg-points-label market-value-label';
    }

    .badges {
      grid-area: badges;
    }
    .name {
      grid-area: name;
      font-weight: 700;
      font-size: x-large;
      letter-spacing: 0.01rem;
      padding-top: 0.2rem !important;
    }
    .value {
      padding-top: 0.5rem;
    }
    .points {
      padding-right: 1rem;
    }
    .points.value {
      grid-area: points-value;
    }
    .avg-points.value {
      grid-area: avg-points-value;
    }
    .market-value.value {
      grid-area: market-value-value;
      justify-self: end;
    }
    .points {
      width: 2.5rem;
    }
    .points.label {
      grid-area: points-label;
    }
    .avg-points.label {
      grid-area: avg-points-label;
    }
    .market-value.label {
      grid-area: market-value-label;
      justify-self: end;
    }
    .badges {
      display: flex;
    }
    .badge {
      transform: skew(-10deg);
      width: 32px;
      height: 16px;
      margin-right: 4px;
    }

    .badge rect {
      fill: #9cacb9;
    }

    .badge text {
      font-size: 12px;
      fill: white;
    }
  `;

  @property({ type: Object })
  public data: PlayerListItem;

  protected render(): TemplateResult {
    return html`
      <a class="root" href=${`${BASE_PATH_WITHOUT_DOMAIN}/player/${this.data.playerName}/${this.data.playerId}`}>
        <div class="left">
          <img
            class="player-img"
            src="${this.data.profileBig ?? noProfilePicFallback}"
            alt="Profilbild von ${this.data.playerName}"
          />
        </div>

        <div class="right">
          <div class="badges">
            ${this.data.number ? this.badgeTemplate(String(this.data.number)) : html``}
            ${this.data.position
              ? this.badgeTemplate(getPlayerPositionLabel(this.data.position as unknown as PlayerPosition))
              : html``}
            ${this.data.status ? this.badgeTemplate(String(this.data.status)) : html``}
          </div>
          <div class="name value">${this.data.knownName ?? this.data.lastName}</div>
          <div class="points value">${pointFormatter.format(this.data.totalPoints)}</div>
          <div class="points label">Pts.</div>
          <div class="avg-points value">${this.data.averagePoints}</div>
          <div class="avg-points label">∅ Pts.</div>
          <div class="market-value value">${priceFormatter.format(this.data.marketValue)}</div>
          <div class="market-value label">Market value</div>
        </div>
      </a>
    `;
  }

  private badgeTemplate(text: string = ''): TemplateResult {
    if (text === '') return html``;
    return html`
      <svg class="badge">
        ${svg`
      <rect x="0" y="0" width="32" height="16"  />
          <text fill="black" font-size="8pt" text-anchor="middle" x="16" y="12" dy="1">${text}</text>
  `}
      </svg>
    `;
  }
}
