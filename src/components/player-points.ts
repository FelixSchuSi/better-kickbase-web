import { LitElement, html, CSSResultGroup, css, TemplateResult, PropertyValueMap } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { property, customElement, state } from 'lit/decorators.js';
import { PlayerMatch } from '../models/player-match';
import { PlayerSeason } from '../models/player-season';
import { PlayerUpcomingMatch } from '../models/player-upcoming-match';
import { PlayerPoints } from '../services/playerdata/player-points.service';

export const tagName: string = 'bkb-player-points';
@customElement(tagName)
export class PlayerPage extends LitElement {
  static styles: CSSResultGroup = css`
    .root {
      width: 100%;
      display: flex;
      flex-wrap: no-wrap;
      overflow-x: scroll;
    }

    .season {
      display: flex;
    }

    .season-summary {
      display: flex;
      flex-direction: column;
    }

    .match {
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      min-width: 20px;
    }
    .match > small {
      display: inline-flex;
      justify-content: center;
    }

    .match-bar {
      height: 200px;
      background-color: #f5f7f6;
      width: 100%;
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
  @state()
  private maxPoints: number = 0;

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
        ${/*this.points.seasons.map((season: PlayerSeason) => this.seasonTemplate(season))*/ ''}
        ${this.seasonTemplate(this.points.seasons[this.points.seasons.length - 1])}
        ${
          /*this.upcomingMatches.map((upcomingMatch: PlayerUpcomingMatch) => this.upcomingMatchTemplate(upcomingMatch))*/ ''
        }
      </div>
    `;
  }

  private seasonTemplate(season: PlayerSeason): TemplateResult {
    // debugger;
    return html`
      <div class="season">
        ${season.matches.map((match: PlayerMatch) => this.matchTemplate(match))}
        <div class="season-summary">
          ${season.year}</br>
          <small>Season Summary</small>
          ${season.points}</br>
          <small>Points</small>
          ${Math.round(season.points / season.appearances)}</br>
          <small>AVG Points</small>
          ${season.startingEleven}</br>
          <small>Starting Eleven</small>
        </div>
      </div>
    `;
  }

  private matchTemplate(match: PlayerMatch): TemplateResult {
    const color: string = match.points >= 100 ? '#25c28b' : '#ea5f42';
    const percentage: string = `${Math.round((match.points / this.maxPoints) * 100)}%`;

    return html`
      <div class="match">
        <div
          class="match-bar"
          style=${styleMap({
            background: `linear-gradient(to top, ${color}, ${color}, ${percentage}, #f5f7f6, ${percentage}, #f5f7f6);`
          })}
        ></div>
        <small>${match.points}</small>
      </div>
    `;
  }

  private upcomingMatchTemplate(upcomingMatch: PlayerUpcomingMatch): TemplateResult {
    return html`<div>TODO: UpcomingMatch ${upcomingMatch.day}</div>`;
  }
}
