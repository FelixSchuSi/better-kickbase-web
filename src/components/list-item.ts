import { LitElement, html, CSSResultGroup, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

export enum ListItemSlots {
  ACTION_LEFT = 'ACTION_LEFT',
  ACTION_RIGHT = 'ACTION_RIGHT',
  MAIN_LEFT = 'ACTION_LEFT',
  MAIN_RIGHT = 'ACTION_RIGHT',
  MAIN_CENTER = 'ACTION_CENTER'
  //   CHILD_LIST_ITEM = 'CHILD_LIST_ITEM' possibly useful for offers
}

export const tagName: string = 'bkb-list-item';
@customElement(tagName)
export class ListItem extends LitElement {
  static styles: CSSResultGroup = css`
    .root {
      display: flex;
      flex-direction: column;
    }
    .main,
    .action {
      display: flex;
    }
  `;

  protected render(): TemplateResult {
    return html`
      <div class="root">
        <div class="main">
          <div slot=${ListItemSlots.MAIN_LEFT}></div>
          <div slot=${ListItemSlots.MAIN_CENTER}></div>
          <div slot=${ListItemSlots.MAIN_RIGHT}></div>
        </div>
        <div class="action">
          <div slot=${ListItemSlots.ACTION_LEFT}></div>
          <div slot=${ListItemSlots.MAIN_RIGHT}></div>
        </div>
      </div>
    `;
  }
}
