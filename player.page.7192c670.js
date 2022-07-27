import{B as h,r as v,e as p,t as c,s as g,n as f}from"./chunks/base.service.da5a4b6f.js";import{b,$ as m}from"./chunks/lit-html.154a0938.js";import{i as d}from"./chunks/player-points.93c5b9db.js";import{e as w,i as k,t as S}from"./chunks/directive.7cba340f.js";import{n as P,p as I}from"./chunks/price-formatter.dffdf829.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=w(class extends k{constructor(r){var a;if(super(r),r.type!==S.ATTRIBUTE||r.name!=="class"||((a=r.strings)===null||a===void 0?void 0:a.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(a=>r[a]).join(" ")+" "}update(r,[a]){var s,t;if(this.nt===void 0){this.nt=new Set,r.strings!==void 0&&(this.st=new Set(r.strings.join(" ").split(/\s/).filter(e=>e!=="")));for(const e in a)a[e]&&!(!((s=this.st)===null||s===void 0)&&s.has(e))&&this.nt.add(e);return this.render(a)}const o=r.element.classList;this.nt.forEach(e=>{e in a||(o.remove(e),this.nt.delete(e))});for(const e in a){const n=!!a[e];n===this.nt.has(e)||((t=this.st)===null||t===void 0?void 0:t.has(e))||(n?(o.add(e),this.nt.add(e)):(o.remove(e),this.nt.delete(e)))}return b}});class y extends h{}class D extends y{async getData(a,s="2335868"){const t=`https://api.better-kickbase.workers.dev/leagues/${s}/players/${a}/`;return await(await fetch(t,this.default_opts)).json()}}const $=new D;function T(r){return{match:r.d,points:r.p,goals:r.g,assists:r.a,home:r.h,playtimeSeconds:r.sp,startingEleven:r.ms,homeTeamId:r.t1i,awayTeamId:r.t2i,homeTeamGoals:r.t1s,awayTeamGoals:r.t2s}}function N(r){return{points:r.p,appearances:r.mp,startingEleven:r.ms,matches:r.m.map(T),year:r.t}}class x extends y{async getData(a){const s=`https://api.better-kickbase.workers.dev/players/${a}/points`,t=await fetch(s,this.default_opts);return t.ok?{seasons:(await t.json()).s.map(N)}:(console.log(`request was not successful: 
      ${t.statusText}: ${t.status}
      `),{seasons:[]})}}const F=new x;function U(r){return{...r}}function _(r){return{day:new Date(r.d),homeTeamId:r.t1i,homeTeamName:r.t1n,homeTeamNameShort:r.t1y,awayTeamId:r.t2i,awayTeamName:r.t2n,awayTeamNameShort:r.t2y,match:r.md,points:0,playtimeSeconds:0,homeTeamGoals:-1,awayTeamGoals:-1}}class j extends y{async getData(a,s="2335868"){const t=`https://api.better-kickbase.workers.dev/leagues/${s}/players/${a}/stats`,e=await(await fetch(t,this.default_opts)).json();return{averagePoints:e.averagePoints,f:e.f,firstName:e.firstName,id:e.id,lastName:e.lastName,marketValue:e.marketValue,mvHigh:e.mvHigh,mvHighDate:new Date(e.mvHighDate),mvLow:e.mvLow,mvLowDate:new Date(e.mvLowDate),mvTrend:e.mvTrend,upcomingMatches:e.nm.map(_),number:e.number,points:e.points,position:e.position,profileUrl:e.profileUrl,seasons:e.seasons.map(U),status:e.status,teamCoverUrl:e.teamCoverUrl,teamId:e.teamId,teamUrl:e.teamUrl,userFlags:e.userFlags}}}const A=new j;class H{async getData(a){return{playerInfo:await $.getData(a),playerPoints:await F.getData(a),playerStats:await A.getData(a)}}}const O=new H,B=v`
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
`;var E=Object.defineProperty,L=Object.getOwnPropertyDescriptor,l=(r,a,s,t)=>{for(var o=t>1?void 0:t?L(a,s):a,e=r.length-1,n;e>=0;e--)(n=r[e])&&(o=(t?n(a,s,o):n(o))||o);return t&&o&&E(a,s,o),o};let i=class extends g{async willUpdate(r){const a=!this.playerPoints;if(a){const{playerInfo:s,playerPoints:t,playerStats:o}=JSON.parse(this.serverJsonData);this.playerInfo=s,this.playerPoints=t,this.playerStats=o}if(a){const{playerInfo:s,playerPoints:t,playerStats:o}=await O.getData(this.playerId);this.playerInfo=s,this.playerPoints=t,this.playerStats=o}}get upperHalfStyles(){return{"background-color":`var(--team-primary-color-${this.teamId}, gray)`}}get colorFadeStyles(){return{background:`linear-gradient(to bottom, transparent, var(--team-primary-color-${this.teamId}, gray));`}}render(){return m`
      <div class="upper-half" style=${d(this.upperHalfStyles)}>
        <img
          class="player-image"
          src=${this.playerInfo?.profileBig??P}
          alt="Profilbild von ${this.playerName}"
        />
        <div class="player-color-fade" style=${d(this.colorFadeStyles)}></div>
        <div class="player-summary">
          <div
            class=${u({"bottom-container":!0,inverted:this.playerInfo.teamName==="Dortmund"})}
          >
            <div class="price-container">
              <h3 class="price-value">
                ${I.format(this.playerInfo.marketValue??0)}&nbsp${this.priceTrendTemplate(this.playerInfo.marketValueTrend)}
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
    `}priceTrendTemplate(r){switch(r){case 1:return m`&#129045;`;case 2:return m` &#129047;`;default:case 0:return m`-`}}};i.styles=[B,v`
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
    `];l([p({type:String,attribute:"player-name"})],i.prototype,"playerName",2);l([p({type:String,attribute:"player-id"})],i.prototype,"playerId",2);l([p({type:String,attribute:"server-json-data"})],i.prototype,"serverJsonData",2);l([p({type:String,attribute:"team-id"})],i.prototype,"teamId",2);l([c()],i.prototype,"playerInfo",2);l([c()],i.prototype,"playerPoints",2);l([c()],i.prototype,"playerStats",2);i=l([f("bkb-player")],i);export{i as PlayerPage};
