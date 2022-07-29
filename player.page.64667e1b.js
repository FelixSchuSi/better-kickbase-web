import{r as u,e as p,t as c,s as v,n as h}from"./chunks/point-formatter.e755dd0c.js";import{b as g,$ as m}from"./chunks/lit-html.154a0938.js";import{i as y}from"./chunks/player-points.5b2624bc.js";import{e as f,i as b,t as w}from"./chunks/directive.7cba340f.js";import{n as k,p as S}from"./chunks/price-formatter.dffdf829.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=f(class extends b{constructor(r){var e;if(super(r),r.type!==w.ATTRIBUTE||r.name!=="class"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,t;if(this.nt===void 0){this.nt=new Set,r.strings!==void 0&&(this.st=new Set(r.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in e)e[a]&&!(!((i=this.st)===null||i===void 0)&&i.has(a))&&this.nt.add(a);return this.render(e)}const o=r.element.classList;this.nt.forEach(a=>{a in e||(o.remove(a),this.nt.delete(a))});for(const a in e){const n=!!e[a];n===this.nt.has(a)||((t=this.st)===null||t===void 0?void 0:t.has(a))||(n?(o.add(a),this.nt.add(a)):(o.remove(a),this.nt.delete(a)))}return g}});class I{async getData(e,i="2335868"){const t=`https://api.better-kickbase.workers.dev/leagues/${i}/players/${e}/`;return await(await fetch(t)).json()}}const P=new I;function D(r){return{match:r.d,points:r.p,goals:r.g,assists:r.a,home:r.h,playtimeSeconds:r.sp,startingEleven:r.ms,homeTeamId:r.t1i,awayTeamId:r.t2i,homeTeamGoals:r.t1s,awayTeamGoals:r.t2s}}function $(r){return{points:r.p,appearances:r.mp,startingEleven:r.ms,matches:r.m.map(D),year:r.t}}class T{async getData(e){const i=`https://api.better-kickbase.workers.dev/players/${e}/points`,t=await fetch(i);return t.ok?{seasons:(await t.json()).s.map($)}:(console.log(`request was not successful: 
      ${t.statusText}: ${t.status}
      `),{seasons:[]})}}const N=new T;function F(r){return{...r}}function x(r){return{day:new Date(r.d),homeTeamId:r.t1i,homeTeamName:r.t1n,homeTeamNameShort:r.t1y,awayTeamId:r.t2i,awayTeamName:r.t2n,awayTeamNameShort:r.t2y,match:r.md,points:0,playtimeSeconds:0,homeTeamGoals:-1,awayTeamGoals:-1}}class U{async getData(e,i="2335868"){const t=`https://api.better-kickbase.workers.dev/leagues/${i}/players/${e}/stats`,a=await(await fetch(t)).json();return{averagePoints:a.averagePoints,f:a.f,firstName:a.firstName,id:a.id,lastName:a.lastName,marketValue:a.marketValue,mvHigh:a.mvHigh,mvHighDate:new Date(a.mvHighDate),mvLow:a.mvLow,mvLowDate:new Date(a.mvLowDate),mvTrend:a.mvTrend,upcomingMatches:a.nm.map(x),number:a.number,points:a.points,position:a.position,profileUrl:a.profileUrl,seasons:a.seasons.map(F),status:a.status,teamCoverUrl:a.teamCoverUrl,teamId:a.teamId,teamUrl:a.teamUrl,userFlags:a.userFlags}}}const j=new U;class _{async getData(e){return{playerInfo:await P.getData(e),playerPoints:await N.getData(e),playerStats:await j.getData(e)}}}const A=new _,H=u`
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
`;var O=Object.defineProperty,E=Object.getOwnPropertyDescriptor,l=(r,e,i,t)=>{for(var o=t>1?void 0:t?E(e,i):e,a=r.length-1,n;a>=0;a--)(n=r[a])&&(o=(t?n(e,i,o):n(o))||o);return t&&o&&O(e,i,o),o};let s=class extends v{async willUpdate(r){const e=!this.playerPoints;if(e){const{playerInfo:i,playerPoints:t,playerStats:o}=JSON.parse(this.serverJsonData);this.playerInfo=i,this.playerPoints=t,this.playerStats=o}if(e){const{playerInfo:i,playerPoints:t,playerStats:o}=await A.getData(this.playerId);this.playerInfo=i,this.playerPoints=t,this.playerStats=o}}get upperHalfStyles(){return{"background-color":`var(--team-primary-color-${this.teamId}, gray)`}}get colorFadeStyles(){return{background:`linear-gradient(to bottom, transparent, var(--team-primary-color-${this.teamId}, gray));`}}render(){return m`
      <div class="upper-half" style=${y(this.upperHalfStyles)}>
        <img
          class="player-image"
          src=${this.playerInfo?.profileBig??k}
          alt="Profilbild von ${this.playerName}"
        />
        <div class="player-color-fade" style=${y(this.colorFadeStyles)}></div>
        <div class="player-summary">
          <div
            class=${d({"bottom-container":!0,inverted:this.playerInfo.teamName==="Dortmund"})}
          >
            <div class="price-container">
              <h3 class="price-value">
                ${S.format(this.playerInfo.marketValue??0)}&nbsp${this.priceTrendTemplate(this.playerInfo.marketValueTrend)}
              </h3>
            </div>
          </div>
          <h1
            class=${d({"player-name":!0,inverted:this.playerInfo.teamName==="Dortmund"})}
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
    `}priceTrendTemplate(r){switch(r){case 1:return m`&#129045;`;case 2:return m` &#129047;`;default:case 0:return m`-`}}};s.styles=[H,u`
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
    `];l([p({type:String,attribute:"player-name"})],s.prototype,"playerName",2);l([p({type:String,attribute:"player-id"})],s.prototype,"playerId",2);l([p({type:String,attribute:"server-json-data"})],s.prototype,"serverJsonData",2);l([p({type:String,attribute:"team-id"})],s.prototype,"teamId",2);l([c()],s.prototype,"playerInfo",2);l([c()],s.prototype,"playerPoints",2);l([c()],s.prototype,"playerStats",2);s=l([h("bkb-player")],s);export{s as PlayerPage};
