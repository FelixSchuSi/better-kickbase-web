import{r as u,e as p,t as y,s as g,$ as m,i as s,o as d,n as b}from"./client-shim.48ed8262.js";import"./chunks/player-points.a865c4f1.js";const v=u`
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
    --team-primary-color-19: #019a32;
    --team-primary-color-28: #e20612;
    --team-primary-color-9: #e32219;
    --team-primary-color-18: #e30713;
    --team-primary-color-4: #e10010;
  }
  .team-primary-color-4 {
    background-color: var(--team-primary-color-4);
  }
  .team-primary-color-15 {
    background-color: var(--team-primary-color-15);
  }
  .team-primary-color-11 {
    background-color: var(--team-primary-color-11);
  }
  .team-primary-color-7 {
    background-color: var(--team-primary-color-7);
  }
  .team-primary-color-40 {
    background-color: var(--team-primary-color-40);
  }
  .team-primary-color-43 {
    background-color: var(--team-primary-color-43);
  }
  .team-primary-color-3 {
    background-color: var(--team-primary-color-3);
  }
  .team-primary-color-20 {
    background-color: var(--team-primary-color-20);
  }
  .team-primary-color-24 {
    background-color: var(--team-primary-color-24);
  }
  .team-primary-color-13 {
    background-color: var(--team-primary-color-13);
  }
  .team-primary-color-14 {
    background-color: var(--team-primary-color-14);
  }
  .team-primary-color-5 {
    background-color: var(--team-primary-color-5);
  }
  .team-primary-color-2 {
    background-color: var(--team-primary-color-2);
  }
  .team-primary-color-22 {
    background-color: var(--team-primary-color-22);
  }
  .team-primary-color-19 {
    background-color: var(--team-primary-color-19);
  }
  .team-primary-color-28 {
    background-color: var(--team-primary-color-28);
  }
  .team-primary-color-9 {
    background-color: var(--team-primary-color-9);
  }
  .team-primary-color-18 {
    background-color: var(--team-primary-color-18);
  }
`;var h="/better-kickbase-web/assets/no_profile_pic.89227a2b.png",f=Object.defineProperty,k=Object.getOwnPropertyDescriptor,e=(t,i,l,o)=>{for(var a=o>1?void 0:o?k(i,l):i,c=t.length-1,n;c>=0;c--)(n=t[c])&&(a=(o?n(i,l,a):n(a))||a);return o&&a&&f(i,l,a),a};const $="bkb-player";let r=class extends g{constructor(){super(...arguments);this.priceFormatter=new Intl.NumberFormat("de",{currency:"EUR",style:"currency",maximumFractionDigits:0})}async willUpdate(t){if(!this.playerPoints){const{playerInfo:l,playerPoints:o,playerStats:a}=JSON.parse(this.serverJsonData);this.playerInfo=l,this.playerPoints=o,this.playerStats=a}}get upperHalfStyles(){return{"background-color":`var(--team-primary-color-${this.teamId}, gray)`}}get colorFadeStyles(){return{background:`linear-gradient(to bottom, transparent, var(--team-primary-color-${this.teamId}, gray));`}}render(){return m`
      <div class="upper-half" style=${s(this.upperHalfStyles)}>
        <img
          class="player-image"
          src=${this.playerInfo?.profileBig??h}
          alt="Profilbild von ${this.playerName}"
        />
        <div class="player-color-fade" style=${s(this.colorFadeStyles)}></div>
        <div class="player-summary">
          <div
            class=${d({"bottom-container":!0,inverted:this.playerInfo.teamName==="Dortmund"})}
          >
            <div class="price-container">
              <h3 class="price-value">
                ${this.priceFormatter.format(this.playerInfo.marketValue??0)}&nbsp${this.priceTrendTemplate(this.playerInfo.marketValueTrend)}
              </h3>
            </div>
          </div>
          <h1
            class=${d({"player-name":!0,inverted:this.playerInfo.teamName==="Dortmund"})}
          >
            ${this.playerName}
          </h1>

          <bkb-player-badges
            .number=${this.playerInfo.number}
            .position=${this.playerInfo.position}
            ?inverted=${this.playerInfo.teamName==="Dortmund"}
          ></bkb-player-badges>
        </div>
      </div>
      <bkb-player-points
        .points=${this.playerPoints}
        .upcomingMatches=${this.playerStats.upcomingMatches}
      ></bkb-player-points>
    `}priceTrendTemplate(t){switch(t){case 1:return m`&#129045;`;case 2:return m` &#129047;`;default:case 0:return m`-`}}};r.styles=[v,u`
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

      h1.player-name {
        margin: 0;
        color: white;
      }
      h1.player-name.inverted {
        color: black;
      }
      .bottom-container {
        align-self: stretch;
        padding: 0.5rem 1rem 0.5rem 1rem;
        color: white;
      }
      .bottom-container.inverted {
        color: black;
      }
      .price-container {
        display: flex;
      }
      .price-value {
        margin: 0;
      }
    `];e([p({type:String,attribute:"player-name"})],r.prototype,"playerName",2);e([p({type:String,attribute:"player-id"})],r.prototype,"playerId",2);e([p({type:String,attribute:"server-json-data"})],r.prototype,"serverJsonData",2);e([p({type:String,attribute:"team-id"})],r.prototype,"teamId",2);e([y()],r.prototype,"playerInfo",2);e([y()],r.prototype,"playerPoints",2);e([y()],r.prototype,"playerStats",2);r=e([b($)],r);export{r as PlayerPage,$ as tagName};
