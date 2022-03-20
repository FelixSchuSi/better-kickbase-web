import { createRef, ref, Ref } from 'lit/directives/ref.js';
import { svg, LitElement, html, CSSResultGroup, css, TemplateResult, PropertyValueMap } from 'lit';
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
      scroll-snap-align: end;
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
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
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

  private rootRef: Ref<HTMLDivElement> = createRef();

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
      <div class="root" ${ref(this.rootRef)}>
        ${this.points.seasons.map((season: PlayerSeason) => this.seasonTemplate(season))}
        ${this.upcomingMatches.map((upcomingMatch: PlayerUpcomingMatch) => this.matchTemplate(upcomingMatch))}
      </div>
    `;
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.rootRef.value?.scrollTo({ left: 99999999 });
  }

  private seasonTemplate(season: PlayerSeason): TemplateResult {
    // debugger;
    return html`
      <div class="season">
        ${season.matches.map((match: PlayerMatch) => this.matchTemplate(match))}
        <div class="season-summary">
          ${season.year}</br>
          <small>Saison Auswertung</small>
          ${season.points}</br>
          <small>Punkte</small>
          ${Math.round(season.points / season.appearances)}</br>
          <small>∅ Punkte</small>
          ${season.appearances}</br>
          <small>Einsätze</small>
          ${season.startingEleven}</br>
          <small>Startelf</small>
        </div>
      </div>
    `;
  }

  private matchTemplate(match: PlayerMatch | PlayerUpcomingMatch): TemplateResult {
    const color: string = match.points >= 100 ? '#25c28b' : '#ea5f42';
    const percentage: string = `${Math.round((match.points / this.maxPoints) * 100)}%`;

    return html`
      <div class="match">
        <div
          class="match-bar"
          style=${styleMap({
            background: `linear-gradient(to top, ${color}, ${color}, ${percentage}, #f5f7f6, ${percentage}, #f5f7f6);`
          })}
        >
          ${Array.from({ length: (match as PlayerMatch).assists }).map(() => html`<div>${this.assistSvg}</div>`)}
          ${Array.from({ length: (match as PlayerMatch).goals }).map(() => html`<div>${this.goalSvg}</div>`)}
        </div>
        <small>${match.points}</small>
      </div>
    `;
  }

  private get assistSvg(): TemplateResult {
    return html` <svg width="14" height="14" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${svg`
      <path d="M10.025 11.9412H0.190917C0.00612408 11.9412 -0.0700793 12.1774 0.0785173 12.286L8.03415 18.066C8.13893 18.1422 8.28753 18.0946 8.32753 17.9708L10.2059 12.1907C10.246 12.0669 10.1545 11.9412 10.025 11.9412Z" fill="white"/>
      <path d="M33.0632 11.9411H24.6218C24.4199 11.9411 24.2255 12.0039 24.0617 12.1221L16.9957 17.2563C16.8471 17.3648 16.6452 17.2182 16.7024 17.0429L19.4076 8.71957C19.4705 8.52906 19.4705 8.32141 19.4076 8.1309L16.809 0.131451C16.7519 -0.0438169 16.5042 -0.0438169 16.4471 0.131451L6.28727 31.3939C6.23011 31.5692 6.43205 31.7158 6.58065 31.6073L16.0661 24.7147C16.3995 24.4727 16.8529 24.4727 17.1863 24.7147L26.6717 31.6073C26.8203 31.7158 27.0222 31.5692 26.9651 31.3939L23.3416 20.2434C23.2139 19.851 23.353 19.4204 23.6883 19.1785L33.1737 12.2859C33.3242 12.1773 33.248 11.9411 33.0632 11.9411Z" fill="white"/>
    `}
    </svg>`;
  }

  private get goalSvg(): TemplateResult {
    return html`
      <svg height="12" width="12" viewBox="0 0 1000 1000">
        ${svg`
  <g><path fill="white" d="M343,456.3l157-113.8l157,113.8L597.3,640H403.2L343,456.3z M500,10c66.4,0,129.8,12.9,190.3,38.8S803,109.5,846.7,153.3c43.8,43.7,78.6,95.9,104.5,156.4c25.9,60.5,38.8,124,38.8,190.3c0,66.4-12.9,129.8-38.8,190.3c-25.9,60.5-60.7,112.7-104.5,156.4s-95.9,78.6-156.4,104.5C629.8,977.1,566.4,990,500,990c-66.4,0-129.8-12.9-190.3-38.8c-60.5-25.9-112.7-60.7-156.4-104.5S74.7,750.8,48.8,690.3C22.9,629.8,10,566.4,10,500c0-66.4,12.9-129.8,38.8-190.3S109.5,197,153.3,153.3c43.8-43.8,95.9-78.6,156.4-104.5C370.2,22.9,433.6,10,500,10z M838.5,748.3c54.3-74,81.5-156.8,81.5-248.3v-1.6L864.2,547L733,424.5l34.5-176.6l73.3,6.6C786,179.3,715.1,127.9,628,100.2l29,67.8l-157,87l-157-87l29-67.8c-87.1,27.7-158,79.1-212.7,154.2l73.8-6.6L267,424.5L135.8,547L80,498.4v1.6c0,91.5,27.2,174.3,81.5,248.3l16.4-72.2L356.2,698l76,163l-63.4,37.7C411.4,912.9,455.2,920,500,920c44.8,0,88.6-7.1,131.3-21.3l-63.4-37.7l76-163l178.3-21.9L838.5,748.3z"/></g>
    `}
      </svg>
    `;
  }
}
