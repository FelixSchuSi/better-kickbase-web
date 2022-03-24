import{r as c,s as p,$ as g,n as h}from"./client-shim.63e9c33e.js";import"./chunks/player-points.530ddb04.js";function d(e){return{goadDifference:e.g,matches:e.m,points:e.p,place:e.pl,teamId:e.tid,teamName:e.tn,trend:e.t}}KB_TOKEN&&(globalThis.KB_TOKEN=KB_TOKEN,globalThis.KB_PW=KB_PW,globalThis.KB_EMAIL=KB_EMAIL,globalThis.KB_LEAGUE_ID=KB_LEAGUE_ID);class l{constructor(){this.token=globalThis.KB_TOKEN,this.leagueId="2335868"}get default_opts(){return{headers:{cookie:`kkstrauth=${this.token}`}}}async ensureLogin(){(this.token===""||!this.isJwtValid(this.token))&&(this.isJwtValid(globalThis.token)?this.token=globalThis.token:(console.log("JWT from env var is expired, gernerate a new one and write it into .env file!"),await this.login()))}async login(){const t=await(await fetch("https://api.kickbase.com/user/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:globalThis.KB_EMAIL,password:globalThis.KB_PW})})).json();this.leagueId=t.leagues[0].id;const{token:a}=t;return globalThis.token=a,this.token=a,this.token}isJwtValid(s){try{const t=JSON.parse(atob(s.split(".")[1]));return new Date(t.exp*1e3)>=new Date}catch{return!1}}}class m extends l{async getData(){await this.ensureLogin();const a=await(await fetch("/api/competition/table",this.default_opts)).json();return{matchDay:a.md,currentMatchDay:a.cmd,teams:a.t.map(d)}}}const u=new m;class w extends l{async getData(s){await this.ensureLogin();const t=`/api/competition/teams/${s}/players`;return(await(await fetch(t,this.default_opts)).json()).p.map(i=>({params:{playerName:`${i.firstName} ${i.lastName}`,playerId:String(i.id)},metadata:{team:i.teamName}}))}}const b=new w;var T=Object.defineProperty,_=Object.getOwnPropertyDescriptor,f=(e,s,t,a)=>{for(var n=a>1?void 0:a?_(s,t):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(n=(a?i(s,t,n):i(n))||n);return a&&n&&T(s,t,n),n};const K="bkb-bundesliga-table";let r=class extends p{async willUpdate(e){const t=(await u.getData()).teams.map(a=>a.teamId);await b.getData(t[0])}render(){return g`Hello`}};r.styles=c``;r=f([h(K)],r);export{r as BundesligaTablePage,K as tagName};
