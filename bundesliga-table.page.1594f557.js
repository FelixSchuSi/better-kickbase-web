import{r as p,e as v,s as b,$ as o,n as m,t as f}from"./client-shim.48ed8262.js";import{t as h}from"./chunks/player-points.2cffb501.js";import{B as u}from"./chunks/base-path.6dae1c4c.js";var $=Object.defineProperty,y=Object.getOwnPropertyDescriptor,g=(i,t,s,a)=>{for(var e=a>1?void 0:a?y(t,s):t,l=i.length-1,r;l>=0;l--)(r=i[l])&&(e=(a?r(t,s,e):r(e))||e);return a&&e&&$(t,s,e),e};const _="bkb-bundesliga-table-list-item";let n=class extends b{render(){return o`
      <a class="root" href=${`${u}/bundesliga/team/${this.data.teamName}`}>
        <div class="place">
          ${String(this.data.place).length===1?o`<span class="invisible">1</span>`:""}${this.data.place}
        </div>
        <div class="team-logo">
          <img src="${h[`team_${this.data.teamId}`]}" />
        </div>
        <div class="team-name">${this.data.teamName}</div>
        <div class="matches-played">
          <div class="matches-played value">${this.data.matches}</div>
          <div class="matches-played label">gesp.</div>
        </div>
        <div class="goal-difference">
          <div class="goal-difference value">${this.data.goadDifference}</div>
          <div class="goal-difference label">GD</div>
        </div>
        <div class="points">
          <div class="points value">${this.data.points}</div>
          <div class="points label">Pts.</div>
        </div>
      </a>
    `}};n.styles=p`
    .root {
      display: flex;
      background-color: white;
      margin-top: 0.5rem;
      border-radius: 0.5rem;
      height: 64px;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      cursor: pointer;
      color: black;
    }

    .root:link,
    .root:visited,
    .root:hover,
    .root:active {
      text-decoration: none;
    }

    .team-name {
      flex-grow: 1;
    }

    .team-logo {
      display: flex;
      justify-content: center;
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
  `;g([v({type:Object})],n.prototype,"data",2);n=g([m(_)],n);var P=Object.defineProperty,O=Object.getOwnPropertyDescriptor,c=(i,t,s,a)=>{for(var e=a>1?void 0:a?O(t,s):t,l=i.length-1,r;l>=0;l--)(r=i[l])&&(e=(a?r(t,s,e):r(e))||e);return a&&e&&P(t,s,e),e};const D="bkb-bundesliga-table";let d=class extends b{async willUpdate(i){!this.bundesligaTable&&(this.bundesligaTable=JSON.parse(this.serverJsonData)),this.bundesligaTable?.teams.sort((s,a)=>s.place-a.place)}render(){return o`
      <div class="root">
        ${this.bundesligaTable?.teams.map(i=>o`
            <bkb-bundesliga-table-list-item .data=${i}></bkb-bundesliga-table-list-item>
          `)}
      </div>
    `}};d.styles=p``;c([v({type:String,attribute:"server-json-data"})],d.prototype,"serverJsonData",2);c([f()],d.prototype,"bundesligaTable",2);d=c([m(D)],d);export{d as BundesligaTablePage,D as tagName};
