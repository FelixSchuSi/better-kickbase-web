import { LitElement, html, CSSResultGroup, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { BundesligaTableEntry } from '../models/bundesliga-table';
import { BASE_PATH_WITHOUT_DOMAIN } from '../../base-path.mjs';
import { teamLogosLarge } from '../../images/teams/large';

@customElement('bkb-bundesliga-table-list-item')
export class BundesligaPlayerListItemComponent extends LitElement {
  static styles: CSSResultGroup = css`
    .root {
      display: flex;
      background-color: white;
      margin-top: 0.5rem;
      border-radius: 0.5rem;
      height: 64px;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      cursor: pointer;
      color: black;
    }

    .root:link,
    .root:visited,
    .root:hover,
    .root:active {
      text-decoration: none;
    }

    .team-name {
      flex-grow: 1;
    }

    .team-logo {
      display: flex;
      justify-content: center;
      max-height: 70%;
      width: 128px;
    }

    .team-logo > img {
      object-fit: contain;
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
  `;

  @property({ type: Object })
  public data: BundesligaTableEntry;

  protected render(): TemplateResult {
    return html`
      <a class="root" href=${`${BASE_PATH_WITHOUT_DOMAIN}/bundesliga/team/${this.data.teamName}`}>
        <div class="place">
          ${String(this.data.place).length === 1 ? html`<span class="invisible">1</span>` : ''}${this.data.place}
        </div>
        <div class="team-logo">
          <img src="${teamLogosLarge[`team_${this.data.teamId}`]}" />
        </div>
        <div class="team-name">${this.data.teamName}</div>
        <div class="matches-played">
          <div class="matches-played value">${this.data.matches}</div>
          <div class="matches-played label">gesp.</div>
        </div>
        <div class="goal-difference">
          <div class="goal-difference value">${this.data.goadDifference}</div>
          <div class="goal-difference label">GD</div>
        </div>
        <div class="points">
          <div class="points value">${this.data.points}</div>
          <div class="points label">Pts.</div>
        </div>
      </a>
    `;
  }
}
