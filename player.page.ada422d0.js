import{r as v,e as n,s as $,$ as o,y as f,n as b,t as d,a as x,b as w,i as u}from"./client-shim.158a9d44.js";function P(e){switch(e){case 1:return"TW";case 2:return"ABW";case 3:return"MIT";case 4:return"ST";case 9999999999:default:return""}}var S=Object.defineProperty,C=Object.getOwnPropertyDescriptor,h=(e,r,a,s)=>{for(var t=s>1?void 0:s?C(r,a):r,i=e.length-1,l;i>=0;i--)(l=e[i])&&(t=(s?l(r,a,t):l(t))||t);return s&&t&&S(r,a,t),t};const L="bkb-player-badges";let c=class extends ${render(){return o`
      <div class="badges-container">
        ${this.singleBadge(String(this.number))}
        ${this.singleBadge(P(this.position))}
        ${this.singleBadge(this.status)}
      </div>
    `}singleBadge(e){return e===void 0?"":o`
      ${f`
        <defs>
          <mask id="mask-${e}" x="0" y="0" >
            <rect x="0" y="0" width="50" height="25" fill="#fff" />
            <text text-anchor="middle" x="25" y="18" dy="1">${e}</text>
          </mask>
        </defs>
        <rect x="0" y="0" width="50" height="25" mask="url(#mask-${e})" fill-opacity="1" />
    `}
    `}};c.styles=v`
    .badges-container {
      display: flex;
    }

    svg {
      transform: skew(-10deg);
      height: 25px;
      width: 54px;
    }
  `;h([n({type:Number})],c.prototype,"number",2);h([n({type:String})],c.prototype,"position",2);h([n({type:String})],c.prototype,"status",2);c=h([b(L)],c);var _=Object.defineProperty,M=Object.getOwnPropertyDescriptor,g=(e,r,a,s)=>{for(var t=s>1?void 0:s?M(r,a):r,i=e.length-1,l;i>=0;i--)(l=e[i])&&(t=(s?l(r,a,t):l(t))||t);return s&&t&&_(r,a,t),t};const O="bkb-player-points";let y=class extends ${constructor(){super(...arguments);this.maxPoints=0,this.rootRef=x()}willUpdate(e){e.has("points")&&!!this.points?.seasons&&(this.maxPoints=Math.max(...this.points.seasons.flatMap(r=>r.matches).map(r=>r.points)))}render(){return o`
      <div class="root" ${w(this.rootRef)}>
        ${this.points.seasons.map(e=>this.seasonTemplate(e))}
        ${this.upcomingMatches.map(e=>this.matchTemplate(e))}
      </div>
    `}firstUpdated(e){this.rootRef.value?.scrollTo({left:99999999})}seasonTemplate(e){return o`
      <div class="season">
        ${e.matches.map(r=>this.matchTemplate(r))}
        <div class="season-summary">
          ${e.year}</br>
          <small>Saison Auswertung</small>
          ${e.points}</br>
          <small>Punkte</small>
          ${Math.round(e.points/e.appearances)}</br>
          <small>∅ Punkte</small>
          ${e.appearances}</br>
          <small>Einsätze</small>
          ${e.startingEleven}</br>
          <small>Startelf</small>
        </div>
      </div>
    `}matchTemplate(e){const r=e.points>=100?"#25c28b":"#ea5f42",a=`${Math.round(e.points/this.maxPoints*100)}%`;return o`
      <div class="match">
        <div
          class="match-bar"
          style=${u({background:`linear-gradient(to top, ${r}, ${r}, ${a}, #f5f7f6, ${a}, #f5f7f6);`})}
        >
          ${Array.from({length:e.assists}).map(()=>o`<div>${this.assistSvg}</div>`)}
          ${Array.from({length:e.goals}).map(()=>o`<div>${this.goalSvg}</div>`)}
        </div>
        <small>${e.points}</small>
      </div>
    `}get assistSvg(){return o` <svg width="14" height="14" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${f`
      <path d="M10.025 11.9412H0.190917C0.00612408 11.9412 -0.0700793 12.1774 0.0785173 12.286L8.03415 18.066C8.13893 18.1422 8.28753 18.0946 8.32753 17.9708L10.2059 12.1907C10.246 12.0669 10.1545 11.9412 10.025 11.9412Z" fill="white"/>
      <path d="M33.0632 11.9411H24.6218C24.4199 11.9411 24.2255 12.0039 24.0617 12.1221L16.9957 17.2563C16.8471 17.3648 16.6452 17.2182 16.7024 17.0429L19.4076 8.71957C19.4705 8.52906 19.4705 8.32141 19.4076 8.1309L16.809 0.131451C16.7519 -0.0438169 16.5042 -0.0438169 16.4471 0.131451L6.28727 31.3939C6.23011 31.5692 6.43205 31.7158 6.58065 31.6073L16.0661 24.7147C16.3995 24.4727 16.8529 24.4727 17.1863 24.7147L26.6717 31.6073C26.8203 31.7158 27.0222 31.5692 26.9651 31.3939L23.3416 20.2434C23.2139 19.851 23.353 19.4204 23.6883 19.1785L33.1737 12.2859C33.3242 12.1773 33.248 11.9411 33.0632 11.9411Z" fill="white"/>
    `}
    </svg>`}get goalSvg(){return o`
      <svg height="12" width="12" viewBox="0 0 1000 1000">
        ${f`
  <g><path fill="white" d="M343,456.3l157-113.8l157,113.8L597.3,640H403.2L343,456.3z M500,10c66.4,0,129.8,12.9,190.3,38.8S803,109.5,846.7,153.3c43.8,43.7,78.6,95.9,104.5,156.4c25.9,60.5,38.8,124,38.8,190.3c0,66.4-12.9,129.8-38.8,190.3c-25.9,60.5-60.7,112.7-104.5,156.4s-95.9,78.6-156.4,104.5C629.8,977.1,566.4,990,500,990c-66.4,0-129.8-12.9-190.3-38.8c-60.5-25.9-112.7-60.7-156.4-104.5S74.7,750.8,48.8,690.3C22.9,629.8,10,566.4,10,500c0-66.4,12.9-129.8,38.8-190.3S109.5,197,153.3,153.3c43.8-43.8,95.9-78.6,156.4-104.5C370.2,22.9,433.6,10,500,10z M838.5,748.3c54.3-74,81.5-156.8,81.5-248.3v-1.6L864.2,547L733,424.5l34.5-176.6l73.3,6.6C786,179.3,715.1,127.9,628,100.2l29,67.8l-157,87l-157-87l29-67.8c-87.1,27.7-158,79.1-212.7,154.2l73.8-6.6L267,424.5L135.8,547L80,498.4v1.6c0,91.5,27.2,174.3,81.5,248.3l16.4-72.2L356.2,698l76,163l-63.4,37.7C411.4,912.9,455.2,920,500,920c44.8,0,88.6-7.1,131.3-21.3l-63.4-37.7l76-163l178.3-21.9L838.5,748.3z"/></g>
    `}
      </svg>
    `}};y.styles=v`
    .root {
      width: 100%;
      display: flex;
      flex-wrap: no-wrap;
      overflow-x: scroll;
      scroll-snap-align: end;
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
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
  `;g([n({type:Object})],y.prototype,"points",2);g([n({type:Array})],y.prototype,"upcomingMatches",2);g([d()],y.prototype,"maxPoints",2);y=g([b(O)],y);var I=Object.defineProperty,j=Object.getOwnPropertyDescriptor,m=(e,r,a,s)=>{for(var t=s>1?void 0:s?j(r,a):r,i=e.length-1,l;i>=0;i--)(l=e[i])&&(t=(s?l(r,a,t):l(t))||t);return s&&t&&I(r,a,t),t};const T="bkb-player";let p=class extends ${async willUpdate(e){if(!this.playerPoints){const{playerInfo:a,playerPoints:s,playerStats:t}=JSON.parse(this.serverJsonData);this.playerInfo=a,this.playerPoints=s,this.playerStats=t}}get upperHalfStyles(){return{"background-color":`var(--team-primary-color-${this.teamId})`}}get colorFadeStyles(){return{background:`linear-gradient(to bottom, transparent, var(--team-primary-color-${this.teamId}));`}}render(){return o`
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
      <bkb-player-points
        .points=${this.playerPoints}
        .upcomingMatches=${this.playerStats.upcomingMatches}
      ></bkb-player-points>
    `}};p.styles=v`
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
  `;m([n({type:String,attribute:"player-name"})],p.prototype,"playerName",2);m([n({type:String,attribute:"player-id"})],p.prototype,"playerId",2);m([n({type:String,attribute:"server-json-data"})],p.prototype,"serverJsonData",2);m([n({type:String,attribute:"team-id"})],p.prototype,"teamId",2);m([d()],p.prototype,"playerInfo",2);m([d()],p.prototype,"playerPoints",2);m([d()],p.prototype,"playerStats",2);p=m([b(T)],p);export{p as PlayerPage,T as tagName};
