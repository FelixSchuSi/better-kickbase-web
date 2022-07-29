import{r as f,e as l,s as b,n as p,t as h}from"./chunks/point-formatter.e755dd0c.js";import{$ as r}from"./chunks/lit-html.154a0938.js";import"./chunks/player-points.5b2624bc.js";import{B as v}from"./chunks/base-path.6dae1c4c.js";import"./chunks/directive.7cba340f.js";const u="/better-kickbase-web/assets/2.a58a4fe1.png",k="/better-kickbase-web/assets/3.1aaf4c2d.png",_="/better-kickbase-web/assets/4.390aa2e6.png",D="/better-kickbase-web/assets/5.3c60513d.png",w="/better-kickbase-web/assets/7.3228187f.png",I="/better-kickbase-web/assets/8.62dbde79.png",N="/better-kickbase-web/assets/9.dec4e08a.png",y="/better-kickbase-web/assets/10.8350e8cf.png",$="/better-kickbase-web/assets/11.966c1542.png",P="/better-kickbase-web/assets/13.d1f5ae18.png",T="/better-kickbase-web/assets/14.5d4a8ad3.png",O="/better-kickbase-web/assets/15.1de1fa14.png",x="/better-kickbase-web/assets/18.bb2586fc.png",j="/better-kickbase-web/assets/19.6cf8fd57.png",B="/better-kickbase-web/assets/20.9ea4b95b.png",S="/better-kickbase-web/assets/22.94f6b1e5.png",A="/better-kickbase-web/assets/24.3e3d819b.png",F="/better-kickbase-web/assets/28.43738ef7.png",H="/better-kickbase-web/assets/40.3353a31d.png",L="/better-kickbase-web/assets/43.9f19ca2e.png",M={team_2:u,team_3:k,team_4:_,team_5:D,team_7:w,team_8:I,team_9:N,team_11:$,team_10:y,team_13:P,team_14:T,team_15:O,team_18:x,team_19:j,team_20:B,team_22:S,team_24:A,team_28:F,team_40:H,team_43:L};var U=Object.defineProperty,C=Object.getOwnPropertyDescriptor,g=(i,t,a,s)=>{for(var e=s>1?void 0:s?C(t,a):t,n=i.length-1,c;n>=0;n--)(c=i[n])&&(e=(s?c(t,a,e):c(e))||e);return s&&e&&U(t,a,e),e};let o=class extends b{render(){return r`
      <a class="root" href=${`${v}/bundesliga/team/${this.data.teamName}`}>
        <div class="place">
          ${String(this.data.place).length===1?r`<span class="invisible">1</span>`:""}${this.data.place}
        </div>
        <div class="team-logo">
          <img src="${M[`team_${this.data.teamId}`]}" />
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
    `}};o.styles=f`
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
      max-height: 70%;
      width: 128px;
    }

    .team-logo > img {
      object-fit: contain;
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
  `;g([l({type:Object})],o.prototype,"data",2);o=g([p("bkb-bundesliga-table-list-item")],o);class J{async getData(){return this.mockData()}mockData(){return{matchDay:1,currentMatchDay:1,teams:[{goadDifference:0,matches:0,points:0,place:4,teamId:"43",teamName:"Leipzig",trend:0},{goadDifference:0,matches:0,points:0,place:17,teamId:"10",teamName:"Bremen",trend:0},{goadDifference:0,matches:0,points:0,place:14,teamId:"13",teamName:"Augsburg",trend:0},{goadDifference:0,matches:0,points:0,place:18,teamId:"8",teamName:"Schalke",trend:0},{goadDifference:0,matches:0,points:0,place:8,teamId:"18",teamName:"Mainz 05",trend:0},{goadDifference:0,matches:0,points:0,place:11,teamId:"4",teamName:"Frankfurt",trend:0},{goadDifference:0,matches:0,points:0,place:15,teamId:"9",teamName:"Stuttgart",trend:0},{goadDifference:0,matches:0,points:0,place:7,teamId:"28",teamName:"K\xF6ln",trend:0},{goadDifference:0,matches:0,points:0,place:10,teamId:"15",teamName:"M-Gladbach",trend:0},{goadDifference:0,matches:0,points:0,place:9,teamId:"14",teamName:"Hoffenheim",trend:0},{goadDifference:0,matches:0,points:0,place:5,teamId:"40",teamName:"Union",trend:0},{goadDifference:0,matches:0,points:0,place:13,teamId:"24",teamName:"Bochum",trend:0},{goadDifference:0,matches:0,points:0,place:3,teamId:"7",teamName:"Bayer 04",trend:0},{goadDifference:0,matches:0,points:0,place:6,teamId:"5",teamName:"Freiburg",trend:0},{goadDifference:0,matches:0,points:0,place:12,teamId:"11",teamName:"Wolfsburg",trend:0},{goadDifference:0,matches:0,points:0,place:1,teamId:"2",teamName:"Bayern",trend:0},{goadDifference:0,matches:0,points:0,place:2,teamId:"3",teamName:"Dortmund",trend:0},{goadDifference:0,matches:0,points:0,place:16,teamId:"20",teamName:"Hertha",trend:0}]}}}const z=new J;var G=Object.defineProperty,W=Object.getOwnPropertyDescriptor,m=(i,t,a,s)=>{for(var e=s>1?void 0:s?W(t,a):t,n=i.length-1,c;n>=0;n--)(c=i[n])&&(e=(s?c(t,a,e):c(e))||e);return s&&e&&G(t,a,e),e};let d=class extends b{async willUpdate(i){const t=!this.bundesligaTable;if(t){const a=JSON.parse(this.serverJsonData);a.teams.sort((s,e)=>s.place-e.place),this.bundesligaTable=a}if(t){const a=await z.getData();a.teams.sort((s,e)=>s.place-e.place),this.bundesligaTable=a}}render(){return r`
      <div class="root">
        ${this.bundesligaTable?.teams.map(i=>r`
            <bkb-bundesliga-table-list-item .data=${i}></bkb-bundesliga-table-list-item>
          `)}
      </div>
    `}};m([l({type:String,attribute:"server-json-data"})],d.prototype,"serverJsonData",2);m([h()],d.prototype,"bundesligaTable",2);d=m([p("bkb-bundesliga-table")],d);export{d as BundesligaTablePage};
