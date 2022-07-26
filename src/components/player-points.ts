import { LitElement, html, CSSResultGroup, css, TemplateResult, PropertyValueMap } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { pointFormatter } from '../helpers/point-formatter';
import { PlayerMatch } from '../models/player-match';
import { PlayerSeason } from '../models/player-season';
import { PlayerUpcomingMatch } from '../models/player-upcoming-match';
import { PlayerPoints } from '../services/playerdata/player-points.service';
import './player-points-match';

@customElement('bkb-player-points')
export class PlayerPointsComponent extends LitElement {
  static styles: CSSResultGroup = css`
    .root {
      width: 100%;
      display: flex;
      overflow-x: scroll;
    }

    .root {
      scrollbar-width: thin;
    }

    .root::-webkit-scrollbar {
      width: 5px;
      height: 8px;
      background-color: #f1f1f1;
    }

    .root::-webkit-scrollbar-thumb {
      background: #c1c1c1;
    }

    .season {
      display: flex;
    }

    .season-summary {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-left: 1px solid #d3d7d8;
      border-right: 1px solid #d3d7d8;
      margin-right: 10px;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .season-summary-year {
      margin-bottom: 0px;
      margin-top: 0px;
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .season-summary > .season-summary-details-key {
      padding-bottom: 0.4rem;
    }

    .season-summary * {
      text-align: center;
    }

    .season-summary-details {
      display: flex;
      flex-direction: column;
    }

    .season-summary-details-value {
      padding-top: 1rem;
      font-weight: 600;
      opacity: 87%;
      font-size: medium;
    }

    .season-summary-details-key {
      font-size: smaller;
      opacity: 60%;
    }

    .load-season {
      font-family: 'Roboto Condensed';
      font-size: medium;
      background-color: transparent;
      border: 0px solid black;
      border-left: 1px solid #d3d7d8;
      border-right: 1px solid #d3d7d8;
      cursor: pointer;
      padding-left: 1rem;
      padding-right: 1rem;
      max-width: 128px;
    }

    .load-season:hover {
      background-color: #efefef;
    }
  `;

  @property({ type: Object })
  public points?: PlayerPoints;

  @property({ type: Array })
  public upcomingMatches?: PlayerUpcomingMatch[];

  /**
   * The highest points the player has ever scored.
   * Is used to determine how to render the bars.
   */
  private maxPoints: number = 0;

  @query('.root > bkb-player-points-match')
  private firstUpcomingMatch!: HTMLDivElement;

  @query('.season:last-of-type > .season-summary')
  private lastSeasonSummary!: HTMLDivElement;

  protected willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('points') && !!this.points?.seasons) {
      this.maxPoints = Math.max(
        ...this.points.seasons
          .flatMap((season: PlayerSeason) => season.matches)
          .map((match: PlayerMatch) => match.points)
      );
    }
  }

  protected render(): TemplateResult {
    return html`
      <div class="root">
        ${this.points.seasons.map((season: PlayerSeason) => this.seasonTemplate(season))}
        ${this.upcomingMatches.map(
          (upcomingMatch: PlayerUpcomingMatch) =>
            html`<bkb-player-points-match
              .match=${upcomingMatch}
              .maxPoints=${this.maxPoints}
            ></bkb-player-points-match>`
        )}
      </div>
    `;
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (this.firstUpcomingMatch) {
      this.firstUpcomingMatch?.scrollIntoView(false);
    } else {
      this.lastSeasonSummary?.scrollIntoView(false);
    }
  }

  private seasonTemplate(season: PlayerSeason): TemplateResult {
    const avgPoints: number = season.appearances > 0 ? Math.round(season.points / season.appearances) : 0;
    return html`
      <div class="season">
        ${season.matches.map(
          (match: PlayerMatch) =>
            html`<bkb-player-points-match .match=${match} .maxPoints=${this.maxPoints}></bkb-player-points-match>`
        )}
        <div class="season-summary">
          <div class="season-summary-details">
            <div class="season-summary-details-value">${season.year}</div>
            <div class="season-summary-details-key">Saison Auswertung</div>
            <div class="season-summary-details-value">${pointFormatter.format(season.points)}</div>
            <div class="season-summary-details-key">Punkte</div>
            <div class="season-summary-details-value">${avgPoints}</div>
            <div class="season-summary-details-key">∅ Punkte</div>
            <div class="season-summary-details-value">${season.appearances}</div>
            <div class="season-summary-details-key">Einsätze</div>
            <div class="season-summary-details-value">${season.startingEleven}</div>
            <div class="season-summary-details-key">Startelf</div>
          </div>
        </div>
      </div>
    `;
  }
}
