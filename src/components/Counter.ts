import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

declare const KB_PW: string;
declare const KB_EMAIL: string;

export const tagName: string = 'my-counter';
@customElement('my-counter')
export class Counter extends LitElement {
  @property({ type: Number })
  public count: number = 0;

  increment() {
    this.count++;
  }

  protected async firstUpdated(): Promise<void> {
    // const x = await fetch('/api/user/login', {
    // 	method: 'POST',
    // 	headers: { 'Content-Type': 'application/json', 'Accept': "application/json" },
    // 	body: JSON.stringify({ email: KB_EMAIL, password: KB_PW })
    // })
    // const { token } = await x.json();
    // document.cookie = `kkstrauth=${token}`;
    // const player = await fetch('/api/players/1794/points');
    // const playerJson = await player.json();
  }

  render() {
    return html`
      <div>
        <p>Count: ${this.count}</p>

        <button type="button" @click=${this.increment}>Increment</button>
      </div>
    `;
  }
}
