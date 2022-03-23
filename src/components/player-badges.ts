import { LitElement, html, CSSResultGroup, css, TemplateResult, svg } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { getPlayerPositionLabel, PlayerPosition } from '../models/player-position';

export const tagName: string = 'bkb-player-badges';
@customElement(tagName)
export class PlayerPage extends LitElement {
  static styles: CSSResultGroup = css`
    .badges-container {
      display: flex;
    }

    svg {
      transform: skew(-10deg);
      height: 16px;
      width: 32px;
    }

    svg:not(:last-child) {
      margin-right: 4px;
    }

    svg text {
      font-weight: 700;
      font-size: smaller;
    }
  `;

  @property({ type: Number })
  public number?: number;

  @property({ type: String })
  public position?: string;

  @property({ type: String })
  public status?: string;

  render() {
    return html`
      <div class="badges-container">
        ${this.singleBadge(String(this.number))}
        ${this.singleBadge(getPlayerPositionLabel(this.position as unknown as PlayerPosition))}
        ${this.singleBadge(this.status)}
      </div>
    `;
  }

  private singleBadge(text: string | undefined): TemplateResult | string {
    if (text === undefined) return '';

    return html`
      ${svg`
      
        <rect x="0" y="0" width="32" height="16" fill="white" />
        <text text-anchor="middle" x="16" y="12" dy="1">${text}</text>
    `}
    `;
  }
}
