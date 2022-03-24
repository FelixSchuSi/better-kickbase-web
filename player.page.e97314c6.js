import{r as d,e as s,t as y,s as u,$ as l,a as c,n as h}from"./client-shim.63e9c33e.js";import"./chunks/player-points.530ddb04.js";var g=Object.defineProperty,f=Object.getOwnPropertyDescriptor,a=(i,o,p,t)=>{for(var e=t>1?void 0:t?f(o,p):o,m=i.length-1,n;m>=0;m--)(n=i[m])&&(e=(t?n(o,p,e):n(e))||e);return t&&e&&g(o,p,e),e};const b="bkb-player";let r=class extends u{constructor(){super(...arguments);this.priceFormatter=new Intl.NumberFormat("de",{currency:"EUR",style:"currency",maximumFractionDigits:0})}async willUpdate(i){if(!this.playerPoints){const{playerInfo:p,playerPoints:t,playerStats:e}=JSON.parse(this.serverJsonData);this.playerInfo=p,this.playerPoints=t,this.playerStats=e}}get upperHalfStyles(){return{"background-color":`var(--team-primary-color-${this.teamId}, gray)`}}get colorFadeStyles(){return{background:`linear-gradient(to bottom, transparent, var(--team-primary-color-${this.teamId}, gray));`}}render(){return l`
      <div class="upper-half" style=${c(this.upperHalfStyles)}>
        <img class="player-image" src=${this.playerInfo?.profileBig} alt="picture of ${this.playerName}" />
        <div class="player-color-fade" style=${c(this.colorFadeStyles)}></div>
        <div class="player-summary">
          <div class="bottom-container">
            <div class="price-container">
              <h3 class="price-value">
                ${this.priceFormatter.format(this.playerInfo.marketValue)}&nbsp${this.priceTrendTemplate(this.playerInfo.marketValueTrend)}
              </h3>
            </div>
          </div>
          <h1 class="player-name">${this.playerName}</h1>

          <bkb-player-badges
            .number=${this.playerInfo.number}
            .position=${this.playerInfo.position}
          ></bkb-player-badges>
        </div>
      </div>
      <bkb-player-points
        .points=${this.playerPoints}
        .upcomingMatches=${this.playerStats.upcomingMatches}
      ></bkb-player-points>
    `}priceTrendTemplate(i){switch(i){case 1:return l`&#129045;`;case 2:return l` &#129047;`;default:case 0:return l`-`}}};r.styles=d`
    :root,
    * {
      --team-primary-color-15: #28a144;
      --team-primary-color-11: #51a600;
      --team-primary-color-7: #fe0000;
      --team-primary-color-40: #d3011c;
      --team-primary-color-43: #001f46;
      --team-primary-color-3: #fde101;
      --team-primary-color-20: #001f46;
      --team-primary-color-24: #0a5ca5;
      --team-primary-color-13: #ce1719;
      --team-primary-color-14: #1c62b7;
      --team-primary-color-5: #d11b1a;
      --team-primary-color-2: #dc052e;
      --team-primary-color-22: #0090d7;
      --team-primary-color-19: #fde101;
      --team-primary-color-28: #e20612;
      --team-primary-color-9: #e32219;
      --team-primary-color-18: #e30713;
      --team-primary-color-4: #e10010;
    }
    .upper-half {
      width: 100%;
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto;
      grid-template-areas: 'main';
    }

    img.player-image {
      grid-area: main;
      width: 100%;
      z-index: 0;
    }

    .player-color-fade {
      grid-area: main;
      width: 100%;
      height: 60%;
      align-self: end;
      z-index: 1;
    }

    .player-summary {
      grid-area: main;
      z-index: 2;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

    .player-summary > h1 {
      margin: 0;
      color: white;
    }
    .bottom-container {
      align-self: stretch;
      padding: 0.5rem 1rem 0.5rem 1rem;
      color: white;
    }
    .price-container {
      display: flex;
    }
    .price-value {
      margin: 0;
    }
  `;a([s({type:String,attribute:"player-name"})],r.prototype,"playerName",2);a([s({type:String,attribute:"player-id"})],r.prototype,"playerId",2);a([s({type:String,attribute:"server-json-data"})],r.prototype,"serverJsonData",2);a([s({type:String,attribute:"team-id"})],r.prototype,"teamId",2);a([y()],r.prototype,"playerInfo",2);a([y()],r.prototype,"playerPoints",2);a([y()],r.prototype,"playerStats",2);r=a([h(b)],r);export{r as PlayerPage,b as tagName};
