import{r as u,e as p,s as v,$ as m,y as $,n as b,t as d,i as g}from"./client-shim.719ec460.js";function x(e){switch(e){case 1:return"TW";case 2:return"ABW";case 3:return"MIT";case 4:return"ST";case 9999999999:default:return""}}var P=Object.defineProperty,w=Object.getOwnPropertyDescriptor,h=(e,r,a,s)=>{for(var t=s>1?void 0:s?w(r,a):r,i=e.length-1,o;i>=0;i--)(o=e[i])&&(t=(s?o(r,a,t):o(t))||t);return s&&t&&P(r,a,t),t};const S="bkb-player-badges";let y=class extends v{render(){return m`
      <div class="badges-container">
        ${this.singleBadge(String(this.number))}
        ${this.singleBadge(x(this.position))}
        ${this.singleBadge(this.status)}
      </div>
    `}singleBadge(e){return e===void 0?"":m`
      ${$`
        <defs>
          <mask id="mask-${e}" x="0" y="0" >
            <rect x="0" y="0" width="50" height="25" fill="#fff" />
            <text text-anchor="middle" x="25" y="18" dy="1">${e}</text>
          </mask>
        </defs>
        <rect x="0" y="0" width="50" height="25" mask="url(#mask-${e})" fill-opacity="1" />
    `}
    `}};y.styles=u`
    .badges-container {
      display: flex;
    }

    svg {
      transform: skew(-10deg);
      height: 25px;
      width: 54px;
    }
  `;h([p({type:Number})],y.prototype,"number",2);h([p({type:String})],y.prototype,"position",2);h([p({type:String})],y.prototype,"status",2);y=h([b(S)],y);var _=Object.defineProperty,O=Object.getOwnPropertyDescriptor,f=(e,r,a,s)=>{for(var t=s>1?void 0:s?O(r,a):r,i=e.length-1,o;i>=0;i--)(o=e[i])&&(t=(s?o(r,a,t):o(t))||t);return s&&t&&_(r,a,t),t};const I="bkb-player-points";let c=class extends v{constructor(){super(...arguments);this.maxPoints=0}willUpdate(e){e.has("points")&&!!this.points?.seasons&&(this.maxPoints=Math.max(...this.points.seasons.flatMap(r=>r.matches).map(r=>r.points)))}render(){return m`
      <div class="root">
        ${""}
        ${this.seasonTemplate(this.points.seasons[this.points.seasons.length-1])}
        ${""}
      </div>
    `}seasonTemplate(e){return m`
      <div class="season">
        ${e.matches.map(r=>this.matchTemplate(r))}
        <div class="season-summary">
          ${e.year}</br>
          <small>Season Summary</small>
          ${e.points}</br>
          <small>Points</small>
          ${Math.round(e.points/e.appearances)}</br>
          <small>AVG Points</small>
          ${e.startingEleven}</br>
          <small>Starting Eleven</small>
        </div>
      </div>
    `}matchTemplate(e){const r=e.points>=100?"#25c28b":"#ea5f42",a=`${Math.round(e.points/this.maxPoints*100)}%`;return m`
      <div class="match">
        <div
          class="match-bar"
          style=${g({background:`linear-gradient(to top, ${r}, ${r}, ${a}, #f5f7f6, ${a}, #f5f7f6);`})}
        ></div>
        <small>${e.points}</small>
      </div>
    `}upcomingMatchTemplate(e){return m`<div>TODO: UpcomingMatch ${e.day}</div>`}};c.styles=u`
    .root {
      width: 100%;
      display: flex;
      flex-wrap: no-wrap;
      overflow-x: scroll;
    }

    .season {
      display: flex;
    }

    .season-summary {
      display: flex;
      flex-direction: column;
    }

    .match {
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      min-width: 20px;
    }
    .match > small {
      display: inline-flex;
      justify-content: center;
    }

    .match-bar {
      height: 200px;
      background-color: #f5f7f6;
      width: 100%;
    }
  `;f([p({type:Object})],c.prototype,"points",2);f([p({type:Array})],c.prototype,"upcomingMatches",2);f([d()],c.prototype,"maxPoints",2);c=f([b(I)],c);var M=Object.defineProperty,j=Object.getOwnPropertyDescriptor,n=(e,r,a,s)=>{for(var t=s>1?void 0:s?j(r,a):r,i=e.length-1,o;i>=0;i--)(o=e[i])&&(t=(s?o(r,a,t):o(t))||t);return s&&t&&M(r,a,t),t};const D="bkb-player";let l=class extends v{async willUpdate(e){if(!this.playerPoints){const{playerInfo:a,playerPoints:s,playerStats:t}=JSON.parse(this.serverJsonData);this.playerInfo=a,this.playerPoints=s,this.playerStats=t}}get upperHalfStyles(){return{"background-color":`var(--team-primary-color-${this.teamId})`}}get colorFadeStyles(){return{background:`linear-gradient(to bottom, transparent, var(--team-primary-color-${this.teamId}));`}}render(){return m`
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
      <bkb-player-points
        .points=${this.playerPoints}
        .upcomingMatches=${this.playerStats.upcomingMatches}
      ></bkb-player-points>
    `}};l.styles=u`
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
  `;n([p({type:String,attribute:"player-name"})],l.prototype,"playerName",2);n([p({type:String,attribute:"player-id"})],l.prototype,"playerId",2);n([p({type:String,attribute:"server-json-data"})],l.prototype,"serverJsonData",2);n([p({type:String,attribute:"team-id"})],l.prototype,"teamId",2);n([d()],l.prototype,"playerInfo",2);n([d()],l.prototype,"playerPoints",2);n([d()],l.prototype,"playerStats",2);l=n([b(D)],l);export{l as PlayerPage,D as tagName};
