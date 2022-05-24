import{r as p,e as m,s as v,$ as n,n as b,t as u}from"./client-shim.48ed8262.js";import{t as f}from"./chunks/player-points.3e623989.js";import{B as h}from"./chunks/base-path.6dae1c4c.js";import{B as _}from"./chunks/base.service.069015bb.js";var $=Object.defineProperty,w=Object.getOwnPropertyDescriptor,g=(a,i,s,t)=>{for(var e=t>1?void 0:t?w(i,s):i,l=a.length-1,r;l>=0;l--)(r=a[l])&&(e=(t?r(i,s,e):r(e))||e);return t&&e&&$(i,s,e),e};const y="bkb-bundesliga-table-list-item";let d=class extends v{render(){return n`
      <a class="root" href=${`${h}/bundesliga/team/${this.data.teamName}`}>
        <div class="place">
          ${String(this.data.place).length===1?n`<span class="invisible">1</span>`:""}${this.data.place}
        </div>
        <div class="team-logo">
          <img src="${f[`team_${this.data.teamId}`]}" />
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
    `}};d.styles=p`
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
  `;g([m({type:Object})],d.prototype,"data",2);d=g([b(y)],d);function D(a){return{goadDifference:a.g,matches:a.m,points:a.p,place:a.pl,teamId:a.tid,teamName:a.tn,trend:a.t}}class T extends _{async getData(){await this.ensureLogin();const t=await(await fetch("https://api.better-kickbase.workers.dev/competition/table",this.default_opts)).json(),e=t.t.map(D);return{matchDay:t.md,currentMatchDay:t.cmd,teams:e}}}const P=new T;var O=Object.defineProperty,j=Object.getOwnPropertyDescriptor,c=(a,i,s,t)=>{for(var e=t>1?void 0:t?j(i,s):i,l=a.length-1,r;l>=0;l--)(r=a[l])&&(e=(t?r(i,s,e):r(e))||e);return t&&e&&O(i,s,e),e};const x="bkb-bundesliga-table";let o=class extends v{async willUpdate(a){const i=!this.bundesligaTable;if(i){const s=JSON.parse(this.serverJsonData);s.teams.sort((t,e)=>t.place-e.place),this.bundesligaTable=s}if(i){const s=await P.getData();s.teams.sort((t,e)=>t.place-e.place),this.bundesligaTable=s}}render(){return n`
      <div class="root">
        ${this.bundesligaTable?.teams.map(a=>n`
            <bkb-bundesliga-table-list-item .data=${a}></bkb-bundesliga-table-list-item>
          `)}
      </div>
    `}};o.styles=p``;c([m({type:String,attribute:"server-json-data"})],o.prototype,"serverJsonData",2);c([u()],o.prototype,"bundesligaTable",2);o=c([b(x)],o);export{o as BundesligaTablePage,x as tagName};
