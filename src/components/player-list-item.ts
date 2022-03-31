import { LitElement, html, CSSResultGroup, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PlayerListItem } from '../models/player-list-item';
import noProfilePicFallback from '../../images/no_profile_pic.png';
import { BASE_PATH_WITHOUT_DOMAIN } from '../../base-path.mjs';
export const tagName: string = 'bkb-player-list-item';
@customElement(tagName)
export class PlayerListItemWidget extends LitElement {
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
      /* transform: scale(0.4); */
    }
    .player-img {
      clip-path: inset(0% 0% 0% 50px round 0.5rem);
      margin-left: -50px;
    }
    .right {
      display: grid;
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
    }
    .points.value {
      grid-area: points-value;
    }
    .avg-points.value {
      grid-area: avg-points-value;
    }
    .market-value.value {
      grid-area: market-value-value;
    }
    .points.label {
      grid-area: points-label;
    }
    .avg-points.label {
      grid-area: avg-points-label;
    }
    .market-value.label {
      grid-area: market-value-label;
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
          <div class="badges">badges</div>
          <div class="name value">${this.data.knownName ?? this.data.lastName}</div>
          <div class="points value">${this.data.totalPoints}</div>
          <div class="points label">Pts.</div>
          <div class="avg-points value">${this.data.averagePoints}</div>
          <div class="avg-points label">∅ Pts.</div>
          <div class="market-value value">${this.data.marketValue}</div>
          <div class="market-value label">Market value</div>
        </div>
      </a>
    `;
  }
}
