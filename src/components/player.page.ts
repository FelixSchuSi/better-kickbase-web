import { Task } from '@lit-labs/task';
import { LitElement, html, PropertyValueMap } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { PlayerInfo } from '../services/playerdata/player-info.service';
import { PlayerPoints } from '../services/playerdata/player-points.service';
import { playerDataService } from '../services/playerdata/playerdata.service';

interface ApiResponse {
  playerInfo?: PlayerInfo;
  playerPoints?: PlayerPoints;
}

export const tagName: string = 'bkb-player';
@customElement(tagName)
export class PlayerPage extends LitElement {
  @property({ type: String, attribute: 'player-name' })
  public playerName: any;

  @property({ type: String, attribute: 'player-id' })
  public playerId: any;

  @property({ type: String, attribute: 'server-json-data' })
  public serverJsonData: string;

  @state()
  public playerInfo: PlayerInfo;

  @state()
  public playerPoints: PlayerPoints;

  private apiTask = new Task(
    this,
    async ([playerId]) => {
      const isFirstUpdate: boolean = !this.playerPoints;
      let data: ApiResponse = {};
      if (isFirstUpdate) {
        data = JSON.parse(this.serverJsonData);
      }
      if (import.meta.env.SSR === false && isFirstUpdate) {
        data = await playerDataService.getData(playerId);
      }
      return data;
    },
    () => [this.playerId]
  );

  // protected async willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): Promise<void> {
  //   const isFirstUpdate: boolean = !this.playerPoints;

  //   if (isFirstUpdate) {
  //     const { playerInfo, playerPoints } = JSON.parse(this.serverJsonData);
  //     this.playerInfo = playerInfo;
  //     this.playerPoints = playerPoints;
  //   }

  //   // if (import.meta.env.SSR === false && isFirstUpdate) {
  //   //   const { playerInfo, playerPoints } = await playerDataService.getData(this.playerId);
  //   //   this.playerInfo = playerInfo;
  //   //   this.playerPoints = playerPoints;
  //   // }
  // }

  render() {
    return html`
      <h1>${this.playerName} ${this.playerId}</h1>
      ${this.apiTask.render({
        pending: () => html`Loading...`,
        complete: (apiResponse: ApiResponse) => html`
          <h2>season ${apiResponse.playerPoints?.seasons[0]?.year}</h2>
          ${JSON.stringify(apiResponse.playerPoints?.seasons[0])}
          <h2>season ${apiResponse.playerPoints?.seasons[1]?.year}</h2>
          ${JSON.stringify(apiResponse.playerPoints?.seasons[1])}
          <h2>season ${apiResponse.playerPoints?.seasons[2]?.year}</h2>
          ${JSON.stringify(apiResponse.playerPoints?.seasons[2])}
        `
      })}
    `;
  }
}
