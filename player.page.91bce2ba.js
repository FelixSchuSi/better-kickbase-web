import{r as g,e as m,t as c,s as v,$ as l,i as d,o as u,n as h}from"./client-shim.48ed8262.js";import{B as f}from"./chunks/base.service.55de1ff6.js";import{n as b,p as w}from"./chunks/price-formatter.395600fd.js";import"./chunks/player-points.3361089f.js";class y extends f{}class k extends y{async getData(e){await this.ensureLogin();const t=`https://api.better-kickbase.workers.dev/leagues/${this.leagueId}/players/${e}/`;return await(await fetch(t,this.default_opts)).json()}}const S=new k;function I(r){return{match:r.d,points:r.p,goals:r.g,assists:r.a,home:r.h,playtimeSeconds:r.sp,startingEleven:r.ms,homeTeamId:r.t1i,awayTeamId:r.t2i,homeTeamGoals:r.t1s,awayTeamGoals:r.t2s}}function P(r){return{points:r.p,appearances:r.mp,startingEleven:r.ms,matches:r.m.map(I),year:r.t}}class D extends y{async getData(e){await this.ensureLogin();const t=`https://api.better-kickbase.workers.dev/players/${e}/points`;return{seasons:(await(await fetch(t,this.default_opts)).json()).s.map(P)}}}const $=new D;function T(r){return{...r}}function N(r){return{day:new Date(r.d),homeTeamId:r.t1i,homeTeamName:r.t1n,homeTeamNameShort:r.t1y,awayTeamId:r.t2i,awayTeamName:r.t2n,awayTeamNameShort:r.t2y,match:r.md,points:0,playtimeSeconds:0,homeTeamGoals:-1,awayTeamGoals:-1}}class x extends y{async getData(e){await this.ensureLogin();const t=`https://api.better-kickbase.workers.dev/leagues/${this.leagueId}/players/${e}/stats`,a=await(await fetch(t,this.default_opts)).json();return{averagePoints:a.averagePoints,f:a.f,firstName:a.firstName,id:a.id,lastName:a.lastName,marketValue:a.marketValue,mvHigh:a.mvHigh,mvHighDate:new Date(a.mvHighDate),mvLow:a.mvLow,mvLowDate:new Date(a.mvLowDate),mvTrend:a.mvTrend,upcomingMatches:a.nm.map(N),number:a.number,points:a.points,position:a.position,profileUrl:a.profileUrl,seasons:a.seasons.map(T),status:a.status,teamCoverUrl:a.teamCoverUrl,teamId:a.teamId,teamUrl:a.teamUrl,userFlags:a.userFlags}}}const F=new x;class _{async getData(e){return{playerInfo:await S.getData(e),playerPoints:await $.getData(e),playerStats:await F.getData(e)}}}const U=new _,L=g`
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
    --team-primary-color-19: #019a32;
    --team-primary-color-28: #e20612;
    --team-primary-color-9: #e32219;
    --team-primary-color-18: #e30713;
    --team-primary-color-4: #e10010;
  }
  .team-primary-color-4 {
    background-color: var(--team-primary-color-4);
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
`;var j=Object.defineProperty,H=Object.getOwnPropertyDescriptor,s=(r,e,t,o)=>{for(var a=o>1?void 0:o?H(e,t):e,p=r.length-1,n;p>=0;p--)(n=r[p])&&(a=(o?n(e,t,a):n(a))||a);return o&&a&&j(e,t,a),a};const A="bkb-player";let i=class extends v{async willUpdate(r){const e=!this.playerPoints;if(e){const{playerInfo:t,playerPoints:o,playerStats:a}=JSON.parse(this.serverJsonData);this.playerInfo=t,this.playerPoints=o,this.playerStats=a}if(e){const{playerInfo:t,playerPoints:o,playerStats:a}=await U.getData(this.playerId);this.playerInfo=t,this.playerPoints=o,this.playerStats=a}}get upperHalfStyles(){return{"background-color":`var(--team-primary-color-${this.teamId}, gray)`}}get colorFadeStyles(){return{background:`linear-gradient(to bottom, transparent, var(--team-primary-color-${this.teamId}, gray));`}}render(){return l`
      <div class="upper-half" style=${d(this.upperHalfStyles)}>
        <img
          class="player-image"
          src=${this.playerInfo?.profileBig??b}
          alt="Profilbild von ${this.playerName}"
        />
        <div class="player-color-fade" style=${d(this.colorFadeStyles)}></div>
        <div class="player-summary">
          <div
            class=${u({"bottom-container":!0,inverted:this.playerInfo.teamName==="Dortmund"})}
          >
            <div class="price-container">
              <h3 class="price-value">
                ${w.format(this.playerInfo.marketValue??0)}&nbsp${this.priceTrendTemplate(this.playerInfo.marketValueTrend)}
              </h3>
            </div>
          </div>
          <h1
            class=${u({"player-name":!0,inverted:this.playerInfo.teamName==="Dortmund"})}
          >
            ${this.playerName}
          </h1>

          <bkb-player-badges
            .number=${this.playerInfo.number}
            .position=${this.playerInfo.position}
            ?inverted=${this.playerInfo.teamName==="Dortmund"}
          ></bkb-player-badges>
        </div>
      </div>
      <bkb-player-points
        .points=${this.playerPoints}
        .upcomingMatches=${this.playerStats.upcomingMatches}
      ></bkb-player-points>
    `}priceTrendTemplate(r){switch(r){case 1:return l`&#129045;`;case 2:return l` &#129047;`;default:case 0:return l`-`}}};i.styles=[L,g`
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

      h1.player-name {
        margin: 0;
        color: white;
      }
      h1.player-name.inverted {
        color: black;
      }
      .bottom-container {
        align-self: stretch;
        padding: 0.5rem 1rem 0.5rem 1rem;
        color: white;
      }
      .bottom-container.inverted {
        color: black;
      }
      .price-container {
        display: flex;
      }
      .price-value {
        margin: 0;
      }
    `];s([m({type:String,attribute:"player-name"})],i.prototype,"playerName",2);s([m({type:String,attribute:"player-id"})],i.prototype,"playerId",2);s([m({type:String,attribute:"server-json-data"})],i.prototype,"serverJsonData",2);s([m({type:String,attribute:"team-id"})],i.prototype,"teamId",2);s([c()],i.prototype,"playerInfo",2);s([c()],i.prototype,"playerPoints",2);s([c()],i.prototype,"playerStats",2);i=s([h(A)],i);export{i as PlayerPage,A as tagName};
