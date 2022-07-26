import { svg, LitElement, html, CSSResultGroup, css, TemplateResult } from 'lit';
import { styleMap, StyleInfo } from 'lit/directives/style-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { PlayerMatch } from '../models/player-match';
import { PlayerUpcomingMatch } from '../models/player-upcoming-match';
import { teamLogosSmall } from '../../images/teams/small';

@customElement('bkb-player-points-match')
export class PlayerPointsMatchComponent extends LitElement {
  static styles: CSSResultGroup = css`
    .match {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 10px;
      width: 48px;
      padding-top: 8px;
      padding-bottom: 8px;
    }

    .match > *:not(:last-child) {
      margin-bottom: 8px;
    }

    .match > small {
      display: inline-flex;
      justify-content: center;
    }

    .match-day {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .match-value {
      opacity: 87%;
      font-weight: 700;
    }
    .match-value.points {
      font-size: medium;
    }

    .match-label {
      opacity: 60%;
      font-size: smaller;
    }

    .match-bar {
      height: 200px;
      background-color: #f5f7f6;
      width: 24px;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

    .home-team-logo,
    .away-team-logo {
      width: 40%;
      object-fit: contain;
    }

    .match-team-logos {
      display: flex;
      justify-content: space-evenly;
    }

    svg.score-badge {
      transform: skew(-10deg);
      width: 80%;
      height: 16px;
    }

    svg.score-badge rect {
      fill: #f4f6f5;
    }

    svg.score-badge text {
      font-size: 12px;
      opacity: 80%;
    }
  `;

  /**
   * The highest points the player has ever scored.
   * Is used to determine how to render the bars.
   */
  @property({ type: Number, attribute: 'max-points' })
  private maxPoints: number = 0;

  @property({ type: Object })
  public match: PlayerMatch | PlayerUpcomingMatch;

  protected render(): TemplateResult {
    const color: string = this.match.points >= 100 ? '#25c28b' : '#ea5f42';
    const percentage: string = `${Math.round((this.match.points / this.maxPoints) * 100)}%`;

    const matchBarStyles: StyleInfo = {
      background: `linear-gradient(to top, ${color}, ${color}, ${percentage}, #f5f7f6, ${percentage}, #f5f7f6)`
    };

    return html`
      <div class="match">
        <div class="match-day">
          <small class="match-value">${this.match.match}.</small>
          <small class="match-label">Spieltag</small>
        </div>
        <div class="match-bar" style=${styleMap(matchBarStyles)}>
          ${Array.from({ length: (this.match as PlayerMatch).assists }).map(() => html`<div>${this.assistSvg}</div>`)}
          ${Array.from({ length: (this.match as PlayerMatch).goals }).map(() => html`<div>${this.goalSvg}</div>`)}
        </div>
        <small class="match-value points">${this.match.points}</small>
        <div class="match-team-logos">
          <img class="home-team-logo" src="${teamLogosSmall[`team_${this.match.homeTeamId}`]}" />
          <img class="away-team-logo" src="${teamLogosSmall[`team_${this.match.awayTeamId}`]}" />
        </div>
        ${this.matchResultBadgeSvg(this.match.homeTeamGoals, this.match.awayTeamGoals)}
        <small class="match-value">${Math.round(this.match.playtimeSeconds / 60)}'</small>
      </div>
    `;
  }

  private matchResultBadgeSvg(homeTeamScore: number, awayTeamScore: number): TemplateResult {
    const home: string = homeTeamScore === -1 ? '-' : String(homeTeamScore ?? 0);
    const away: string = awayTeamScore === -1 ? '-' : String(awayTeamScore ?? 0);
    return html`
      <svg class="score-badge">
        ${svg`
      <rect x="0" y="0" width="50" height="16" fill="%23#f4f6f5" />
          <text fill="black" font-size="8pt" text-anchor="middle" x="18" y="12" dy="1">${home} : ${away}</text>
  `}
      </svg>
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
