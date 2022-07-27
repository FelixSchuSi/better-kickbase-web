import{r as b,e as m,s as p,n as f,B as h,t as v}from"./chunks/base.service.da5a4b6f.js";import{$ as d}from"./chunks/lit-html.154a0938.js";import{t as u}from"./chunks/player-points.93c5b9db.js";import{B as D}from"./chunks/base-path.6dae1c4c.js";import"./chunks/directive.7cba340f.js";var I=Object.defineProperty,N=Object.getOwnPropertyDescriptor,g=(i,t,a,s)=>{for(var e=s>1?void 0:s?N(t,a):t,r=i.length-1,n;r>=0;r--)(n=i[r])&&(e=(s?n(t,a,e):n(e))||e);return s&&e&&I(t,a,e),e};let l=class extends p{render(){return d`
      <a class="root" href=${`${D}/bundesliga/team/${this.data.teamName}`}>
        <div class="place">
          ${String(this.data.place).length===1?d`<span class="invisible">1</span>`:""}${this.data.place}
        </div>
        <div class="team-logo">
          <img src="${u[`team_${this.data.teamId}`]}" />
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
    `}};l.styles=b`
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
  `;g([m({type:Object})],l.prototype,"data",2);l=g([f("bkb-bundesliga-table-list-item")],l);class y extends h{async getData(){return this.mockData()}mockData(){return{matchDay:1,currentMatchDay:1,teams:[{goadDifference:0,matches:0,points:0,place:4,teamId:"43",teamName:"Leipzig",trend:0},{goadDifference:0,matches:0,points:0,place:17,teamId:"10",teamName:"Bremen",trend:0},{goadDifference:0,matches:0,points:0,place:14,teamId:"13",teamName:"Augsburg",trend:0},{goadDifference:0,matches:0,points:0,place:18,teamId:"8",teamName:"Schalke",trend:0},{goadDifference:0,matches:0,points:0,place:8,teamId:"18",teamName:"Mainz 05",trend:0},{goadDifference:0,matches:0,points:0,place:11,teamId:"4",teamName:"Frankfurt",trend:0},{goadDifference:0,matches:0,points:0,place:15,teamId:"9",teamName:"Stuttgart",trend:0},{goadDifference:0,matches:0,points:0,place:7,teamId:"28",teamName:"K\xF6ln",trend:0},{goadDifference:0,matches:0,points:0,place:10,teamId:"15",teamName:"M-Gladbach",trend:0},{goadDifference:0,matches:0,points:0,place:9,teamId:"14",teamName:"Hoffenheim",trend:0},{goadDifference:0,matches:0,points:0,place:5,teamId:"40",teamName:"Union",trend:0},{goadDifference:0,matches:0,points:0,place:13,teamId:"24",teamName:"Bochum",trend:0},{goadDifference:0,matches:0,points:0,place:3,teamId:"7",teamName:"Bayer 04",trend:0},{goadDifference:0,matches:0,points:0,place:6,teamId:"5",teamName:"Freiburg",trend:0},{goadDifference:0,matches:0,points:0,place:12,teamId:"11",teamName:"Wolfsburg",trend:0},{goadDifference:0,matches:0,points:0,place:1,teamId:"2",teamName:"Bayern",trend:0},{goadDifference:0,matches:0,points:0,place:2,teamId:"3",teamName:"Dortmund",trend:0},{goadDifference:0,matches:0,points:0,place:16,teamId:"20",teamName:"Hertha",trend:0}]}}}const _=new y;var $=Object.defineProperty,P=Object.getOwnPropertyDescriptor,o=(i,t,a,s)=>{for(var e=s>1?void 0:s?P(t,a):t,r=i.length-1,n;r>=0;r--)(n=i[r])&&(e=(s?n(t,a,e):n(e))||e);return s&&e&&$(t,a,e),e};let c=class extends p{async willUpdate(i){const t=!this.bundesligaTable;if(t){const a=JSON.parse(this.serverJsonData);a.teams.sort((s,e)=>s.place-e.place),this.bundesligaTable=a}if(t){const a=await _.getData();a.teams.sort((s,e)=>s.place-e.place),this.bundesligaTable=a}}render(){return d`
      <div class="root">
        ${this.bundesligaTable?.teams.map(i=>d`
            <bkb-bundesliga-table-list-item .data=${i}></bkb-bundesliga-table-list-item>
          `)}
      </div>
    `}};o([m({type:String,attribute:"server-json-data"})],c.prototype,"serverJsonData",2);o([v()],c.prototype,"bundesligaTable",2);c=o([f("bkb-bundesliga-table")],c);export{c as BundesligaTablePage};
