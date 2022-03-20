import{r as f,e as y,s as u,$ as d,y as b,n as h,t as c,i as g}from"./client-shim.719ec460.js";function v(r){switch(r){case 1:return"TW";case 2:return"ABW";case 3:return"MIT";case 4:return"ST";case 9999999999:default:return""}}var $=Object.defineProperty,P=Object.getOwnPropertyDescriptor,m=(r,a,s,t)=>{for(var e=t>1?void 0:t?P(a,s):a,p=r.length-1,l;p>=0;p--)(l=r[p])&&(e=(t?l(a,s,e):l(e))||e);return t&&e&&$(a,s,e),e};const S="bkb-player-badges";let n=class extends u{render(){return d`
      <div class="badges-container">
        ${this.singleBadge(String(this.number))}
        ${this.singleBadge(v(this.position))}
        ${this.singleBadge(this.status)}
      </div>
    `}singleBadge(r){return r===void 0?"":d`
      ${b`
        <defs>
          <mask id="mask-${r}" x="0" y="0" >
            <rect x="0" y="0" width="50" height="25" fill="#fff" />
            <text text-anchor="middle" x="25" y="18" dy="1">${r}</text>
          </mask>
        </defs>
        <rect x="0" y="0" width="50" height="25" mask="url(#mask-${r})" fill-opacity="1" />
    `}
    `}};n.styles=f`
    .badges-container {
      display: flex;
    }

    svg {
      transform: skew(-10deg);
      height: 25px;
      width: 54px;
    }
  `;m([y({type:Number})],n.prototype,"number",2);m([y({type:String})],n.prototype,"position",2);m([y({type:String})],n.prototype,"status",2);n=m([h(S)],n);var x=Object.defineProperty,w=Object.getOwnPropertyDescriptor,o=(r,a,s,t)=>{for(var e=t>1?void 0:t?w(a,s):a,p=r.length-1,l;p>=0;p--)(l=r[p])&&(e=(t?l(a,s,e):l(e))||e);return t&&e&&x(a,s,e),e};const _="bkb-player";let i=class extends u{async willUpdate(r){if(!this.playerPoints){const{playerInfo:s,playerPoints:t,playerStats:e}=JSON.parse(this.serverJsonData);this.playerInfo=s,this.playerPoints=t,this.playerStats=e}}get upperHalfStyles(){return{"background-color":`var(--team-primary-color-${this.teamId})`}}get colorFadeStyles(){return{background:`linear-gradient(to bottom, transparent, var(--team-primary-color-${this.teamId}));`}}render(){return d`
      <div class="upper-half" style=${g(this.upperHalfStyles)}>
        <img class="player-image" src=${this.playerInfo?.profileBig} alt="picture of ${this.playerName}" />
        <div class="player-color-fade" style=${g(this.colorFadeStyles)}></div>
        <div class="player-summary">
          <div class="player-name">${this.playerName}</div>

          <bkb-player-badges
            .number=${this.playerInfo.number}
            .position=${this.playerInfo.position}
          ></bkb-player-badges>
        </div>
      </div>
    `}};i.styles=f`
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
  `;o([y({type:String,attribute:"player-name"})],i.prototype,"playerName",2);o([y({type:String,attribute:"player-id"})],i.prototype,"playerId",2);o([y({type:String,attribute:"server-json-data"})],i.prototype,"serverJsonData",2);o([y({type:String,attribute:"team-id"})],i.prototype,"teamId",2);o([c()],i.prototype,"playerInfo",2);o([c()],i.prototype,"playerPoints",2);o([c()],i.prototype,"playerStats",2);i=o([h(_)],i);export{i as PlayerPage,_ as tagName};
