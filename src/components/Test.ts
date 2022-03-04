import { LitElement, html, PropertyValueMap } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// export const tagName: string = 'calc-add';
@customElement('calc-add')
export class CalcAdd extends LitElement {
  @property({ type: Number })
  num: number = 0;

  render() {
    return html`<div>Number: ${this.num}</div>`;
  }
}
