import{r as m,e as v,s as g,$ as d,n as b,t as u}from"./client-shim.48ed8262.js";import"./chunks/player-points.2cffb501.js";import{n as y}from"./chunks/no_profile_pic.07fd5963.js";import{B as h}from"./chunks/base-path.6dae1c4c.js";var f=Object.defineProperty,P=Object.getOwnPropertyDescriptor,c=(i,t,r,e)=>{for(var a=e>1?void 0:e?P(t,r):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(e?l(t,r,a):l(a))||a);return e&&a&&f(t,r,a),a};const $="bkb-player-list-item";let n=class extends g{render(){return d`
      <a class="root" href=${`${h}/player/${this.data.playerName}/${this.data.playerId}`}>
        <div class="left">
          <img
            class="player-img"
            src="${this.data.profileBig??y}"
            alt="Profilbild von ${this.data.playerName}"
          />
        </div>

        <div class="right">
          <div class="badges">badges</div>
          <div class="name value">${this.data.knownName??this.data.lastName}</div>
          <div class="points value">${this.data.totalPoints}</div>
          <div class="points label">Pts.</div>
          <div class="avg-points value">${this.data.averagePoints}</div>
          <div class="avg-points label">∅ Pts.</div>
          <div class="market-value value">${this.data.marketValue}</div>
          <div class="market-value label">Market value</div>
        </div>
      </a>
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
      /* transform: scale(0.4); */
    }
    .player-img {
      clip-path: inset(0% 0% 0% 50px round 0.5rem);
      margin-left: -50px;
    }
    .right {
      display: grid;
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
    }
    .points.value {
      grid-area: points-value;
    }
    .avg-points.value {
      grid-area: avg-points-value;
    }
    .market-value.value {
      grid-area: market-value-value;
    }
    .points.label {
      grid-area: points-label;
    }
    .avg-points.label {
      grid-area: avg-points-label;
    }
    .market-value.label {
      grid-area: market-value-label;
    }
  `;c([v({type:Object})],n.prototype,"data",2);n=c([b($)],n);var _=Object.defineProperty,O=Object.getOwnPropertyDescriptor,p=(i,t,r,e)=>{for(var a=e>1?void 0:e?O(t,r):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(e?l(t,r,a):l(a))||a);return e&&a&&_(t,r,a),a};const k="bkb-team";let o=class extends g{async willUpdate(i){!this.players&&(this.players=JSON.parse(this.serverJsonData)),this.players?.sort((r,e)=>r.position-e.position)}render(){return d`
      <div class="root">
        ${this.players.map(i=>d` <bkb-player-list-item .data=${i}></bkb-player-list-item> `)}
      </div>
    `}};o.styles=m``;p([v({type:String,attribute:"server-json-data"})],o.prototype,"serverJsonData",2);p([v({type:String,attribute:"team-id"})],o.prototype,"teamId",2);p([v({type:String,attribute:"team-name"})],o.prototype,"teamName",2);p([u()],o.prototype,"players",2);o=p([b(k)],o);export{o as BundesligaTablePage,k as tagName};
