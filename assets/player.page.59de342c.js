import{r as d,e as c,s as b,$ as n,y as f,n as v,t as g,i as u}from"./vendor.f171523b.js";const h=d`
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
`;function $(a){switch(a){case 1:return"TW";case 2:return"ABW";case 3:return"MIT";case 4:return"ST";case 9999999999:default:return""}}var k=Object.defineProperty,P=Object.getOwnPropertyDescriptor,y=(a,o,i,e)=>{for(var r=e>1?void 0:e?P(o,i):o,m=a.length-1,p;m>=0;m--)(p=a[m])&&(r=(e?p(o,i,r):p(r))||r);return e&&r&&k(o,i,r),r};const S="bkb-player-badges";let s=class extends b{render(){return n`
      <div class="badges-container">
        ${this.singleBadge(String(this.number))}
        ${this.singleBadge($(this.position))}
        ${this.singleBadge(this.status)}
      </div>
    `}singleBadge(a){return a===void 0?"":n`
      ${f`
        <defs>
          <mask id="mask-${a}" x="0" y="0" >
            <rect x="0" y="0" width="50" height="25" fill="#fff" />
            <text text-anchor="middle" x="25" y="18" dy="1">${a}</text>
          </mask>
        </defs>
        <rect x="0" y="0" width="50" height="25" mask="url(#mask-${a})" fill-opacity="1" />
    `}
    `}};s.styles=d`
    .badges-container {
      display: flex;
    }

    svg {
      transform: skew(-10deg);
      height: 25px;
      width: 54px;
    }
  `;y([c({type:Number})],s.prototype,"number",2);y([c({type:String})],s.prototype,"position",2);y([c({type:String})],s.prototype,"status",2);s=y([v(S)],s);var x=Object.defineProperty,w=Object.getOwnPropertyDescriptor,l=(a,o,i,e)=>{for(var r=e>1?void 0:e?w(o,i):o,m=a.length-1,p;m>=0;m--)(p=a[m])&&(r=(e?p(o,i,r):p(r))||r);return e&&r&&x(o,i,r),r};const _="bkb-player";let t=class extends b{async willUpdate(a){if(!this.playerPoints){const{playerInfo:i,playerPoints:e,playerStats:r}=JSON.parse(this.serverJsonData);this.playerInfo=i,this.playerPoints=e,this.playerStats=r}}get upperHalfStyles(){return{"background-color":`var(--team-primary-color-${this.teamId})`}}get colorFadeStyles(){return{background:`linear-gradient(to bottom, transparent, var(--team-primary-color-${this.teamId}));`}}render(){return n`
      <div class="upper-half" style=${u(this.upperHalfStyles)}>
        <img class="player-image" src=${this.playerInfo?.profileBig} alt="picture of ${this.playerName}" />
        <div class="player-color-fade" style=${u(this.colorFadeStyles)}></div>
        <div class="player-summary">
          <div class="player-name">${this.playerName}</div>

          <bkb-player-badges
            .number=${this.playerInfo.number}
            .position=${this.playerInfo.position}
          ></bkb-player-badges>
        </div>
      </div>
    `}};t.styles=[h,d`
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
    `];l([c({type:String,attribute:"player-name"})],t.prototype,"playerName",2);l([c({type:String,attribute:"player-id"})],t.prototype,"playerId",2);l([c({type:String,attribute:"server-json-data"})],t.prototype,"serverJsonData",2);l([c({type:String,attribute:"team-id"})],t.prototype,"teamId",2);l([g()],t.prototype,"playerInfo",2);l([g()],t.prototype,"playerPoints",2);l([g()],t.prototype,"playerStats",2);t=l([v(_)],t);export{t as PlayerPage,_ as tagName};
