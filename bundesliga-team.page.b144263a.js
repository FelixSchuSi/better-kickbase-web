import{r as m,e as g,s as v,$ as s,y as h,n as b,t as u}from"./client-shim.48ed8262.js";import{g as f,p as y}from"./chunks/player-points.8a671821.js";import{n as $,p as P}from"./chunks/price-formatter.395600fd.js";import{B as x}from"./chunks/base-path.6dae1c4c.js";var _=Object.defineProperty,w=Object.getOwnPropertyDescriptor,c=(t,i,r,a)=>{for(var e=a>1?void 0:a?w(i,r):i,l=t.length-1,o;l>=0;l--)(o=t[l])&&(e=(a?o(i,r,e):o(e))||e);return a&&e&&_(i,r,e),e};const O="bkb-player-list-item";let n=class extends v{render(){return s`
      <a class="root" href=${`${x}/player/${this.data.playerName}/${this.data.playerId}`}>
        <div class="left">
          <img
            class="player-img"
            src="${this.data.profileBig??$}"
            alt="Profilbild von ${this.data.playerName}"
          />
        </div>

        <div class="right">
          <div class="badges">
            ${this.data.number?this.badgeTemplate(String(this.data.number)):s``}
            ${this.data.position?this.badgeTemplate(f(this.data.position)):s``}
            ${this.data.status?this.badgeTemplate(String(this.data.status)):s``}
          </div>
          <div class="name value">${this.data.knownName??this.data.lastName}</div>
          <div class="points value">${y.format(this.data.totalPoints)}</div>
          <div class="points label">Pts.</div>
          <div class="avg-points value">${this.data.averagePoints}</div>
          <div class="avg-points label">∅ Pts.</div>
          <div class="market-value value">${P.format(this.data.marketValue)}</div>
          <div class="market-value label">Market value</div>
        </div>
      </a>
    `}badgeTemplate(t=""){return t===""?s``:s`
      <svg class="badge">
        ${h`
      <rect x="0" y="0" width="32" height="16"  />
          <text fill="black" font-size="8pt" text-anchor="middle" x="16" y="12" dy="1">${t}</text>
  `}
      </svg>
    `}};n.styles=m`
    .root {
      display: flex;
      background-color: white;
      margin-top: 0.5rem;
      border-radius: 0.5rem;
      height: 128px;
      align-items: center;
      /* justify-content: space-between; */
      cursor: pointer;
      color: black;
    }

    .root:link,
    .root:visited,
    .root:hover,
    .root:active {
      text-decoration: none;
    }

    .root > *:not(:first-child) {
      padding-left: 1rem;
    }

    .invisible {
      visibility: hidden;
    }
    .label {
      color: #9ca4a8;
    }
    .left,
    .player-img {
      height: 100%;
    }
    .player-img {
      clip-path: inset(0% 0% 0% 50px round 0.5rem);
      margin-left: -50px;
    }
    .right {
      display: grid;
      width: 100%;
      justify-content: stretch;
      align-content: stretch;
      grid-template-columns: auto auto 1fr;
      padding: 1rem 1rem 1rem 1rem;
      grid-template-areas:
        'badges badges .'
        'name name .'
        'points-value avg-points-value market-value-value'
        'points-label avg-points-label market-value-label';
    }

    .badges {
      grid-area: badges;
    }
    .name {
      grid-area: name;
      font-weight: 700;
      font-size: x-large;
      letter-spacing: 0.01rem;
      padding-top: 0.2rem !important;
    }
    .value {
      padding-top: 0.5rem;
    }
    .points {
      padding-right: 1rem;
    }
    .points.value {
      grid-area: points-value;
    }
    .avg-points.value {
      grid-area: avg-points-value;
    }
    .market-value.value {
      grid-area: market-value-value;
      justify-self: end;
    }
    .points {
      width: 2.5rem;
    }
    .points.label {
      grid-area: points-label;
    }
    .avg-points.label {
      grid-area: avg-points-label;
    }
    .market-value.label {
      grid-area: market-value-label;
      justify-self: end;
    }
    .badges {
      display: flex;
    }
    .badge {
      transform: skew(-10deg);
      width: 32px;
      height: 16px;
      margin-right: 4px;
    }

    .badge rect {
      fill: #9cacb9;
    }

    .badge text {
      font-size: 12px;
      fill: white;
    }
  `;c([g({type:Object})],n.prototype,"data",2);n=c([b(O)],n);var k=Object.defineProperty,j=Object.getOwnPropertyDescriptor,d=(t,i,r,a)=>{for(var e=a>1?void 0:a?j(i,r):i,l=t.length-1,o;l>=0;l--)(o=t[l])&&(e=(a?o(i,r,e):o(e))||e);return a&&e&&k(i,r,e),e};const N="bkb-team";let p=class extends v{async willUpdate(t){!this.players&&(this.players=JSON.parse(this.serverJsonData)),this.players?.sort((r,a)=>r.position-a.position)}render(){return s`
      <div class="root">
        ${this.players.map(t=>s` <bkb-player-list-item .data=${t}></bkb-player-list-item> `)}
      </div>
    `}};p.styles=m``;d([g({type:String,attribute:"server-json-data"})],p.prototype,"serverJsonData",2);d([g({type:String,attribute:"team-id"})],p.prototype,"teamId",2);d([g({type:String,attribute:"team-name"})],p.prototype,"teamName",2);d([u()],p.prototype,"players",2);p=d([b(N)],p);export{p as BundesligaTablePage,N as tagName};
