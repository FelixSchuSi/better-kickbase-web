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
      height: 25px;
      width: 54px;
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
        <defs>
          <mask id="mask-${text}" x="0" y="0" >
            <rect x="0" y="0" width="50" height="25" fill="#fff" />
            <text text-anchor="middle" x="25" y="18" dy="1">${text}</text>
          </mask>
        </defs>
        <rect x="0" y="0" width="50" height="25" mask="url(#mask-${text})" fill-opacity="1" />
    `}
    `;
  }
}
