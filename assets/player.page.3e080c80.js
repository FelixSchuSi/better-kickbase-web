import{r as m,e as n,s as u,$ as c,y as b,n as h,t as g,i as f}from"./vendor.f171523b.js";function v(t){switch(t){case 1:return"TW";case 2:return"ABW";case 3:return"MIT";case 4:return"ST";case 9999999999:default:return""}}var $=Object.defineProperty,P=Object.getOwnPropertyDescriptor,d=(t,a,s,r)=>{for(var e=r>1?void 0:r?P(a,s):a,l=t.length-1,o;l>=0;l--)(o=t[l])&&(e=(r?o(a,s,e):o(e))||e);return r&&e&&$(a,s,e),e};const S="bkb-player-badges";let y=class extends u{render(){return c`
      <div class="badges-container">
        ${this.singleBadge(String(this.number))}
        ${this.singleBadge(v(this.position))}
        ${this.singleBadge(this.status)}
      </div>
    `}singleBadge(t){return t===void 0?"":c`
      ${b`
        <defs>
          <mask id="mask-${t}" x="0" y="0" >
            <rect x="0" y="0" width="50" height="25" fill="#fff" />
            <text text-anchor="middle" x="25" y="18" dy="1">${t}</text>
          </mask>
        </defs>
        <rect x="0" y="0" width="50" height="25" mask="url(#mask-${t})" fill-opacity="1" />
    `}
    `}};y.styles=m`
    .badges-container {
      display: flex;
    }

    svg {
      transform: skew(-10deg);
      height: 25px;
      width: 54px;
    }
  `;d([n({type:Number})],y.prototype,"number",2);d([n({type:String})],y.prototype,"position",2);d([n({type:String})],y.prototype,"status",2);y=d([h(S)],y);var _=Object.defineProperty,I=Object.getOwnPropertyDescriptor,p=(t,a,s,r)=>{for(var e=r>1?void 0:r?I(a,s):a,l=t.length-1,o;l>=0;l--)(o=t[l])&&(e=(r?o(a,s,e):o(e))||e);return r&&e&&_(a,s,e),e};const w="bkb-player";let i=class extends u{async willUpdate(t){if(!this.playerPoints){const{playerInfo:s,playerPoints:r,playerStats:e}=JSON.parse(this.serverJsonData);this.playerInfo=s,this.playerPoints=r,this.playerStats=e}}get upperHalfStyles(){return{"background-color":`var(--team-primary-color-${this.teamId})`}}get colorFadeStyles(){return{background:`linear-gradient(to bottom, transparent, var(--team-primary-color-${this.teamId}));`}}render(){return c`
      <div class="upper-half" style=${f(this.upperHalfStyles)}>
        <img class="player-image" src=${this.playerInfo?.profileBig} alt="picture of ${this.playerName}" />
        <div class="player-color-fade" style=${f(this.colorFadeStyles)}></div>
        <div class="player-summary">
          <div class="player-name">${this.playerName}</div>

          <bkb-player-badges
            .number=${this.playerInfo.number}
            .position=${this.playerInfo.position}
          ></bkb-player-badges>
        </div>
      </div>
    `}};p([n({type:String,attribute:"player-name"})],i.prototype,"playerName",2);p([n({type:String,attribute:"player-id"})],i.prototype,"playerId",2);p([n({type:String,attribute:"server-json-data"})],i.prototype,"serverJsonData",2);p([n({type:String,attribute:"team-id"})],i.prototype,"teamId",2);p([g()],i.prototype,"playerInfo",2);p([g()],i.prototype,"playerPoints",2);p([g()],i.prototype,"playerStats",2);i=p([h(w)],i);export{i as PlayerPage,w as tagName};
