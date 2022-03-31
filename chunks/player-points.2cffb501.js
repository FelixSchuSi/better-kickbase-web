import{r as A,e as c,s as b,$ as l,y as h,n as v,i as Z,t as w,a as y}from"../client-shim.48ed8262.js";function R(e){switch(e){case 1:return"TW";case 2:return"ABW";case 3:return"MIT";case 4:return"ST";case 9999999999:default:return""}}var x=Object.defineProperty,k=Object.getOwnPropertyDescriptor,g=(e,t,a,i)=>{for(var s=i>1?void 0:i?k(t,a):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(s=(i?n(t,a,s):n(s))||s);return i&&s&&x(t,a,s),s};const M="bkb-player-badges";let m=class extends b{constructor(){super(...arguments);this.inverted=!1}render(){return l`
      <div class="badges-container">
        ${this.singleBadge(String(this.number))}
        ${this.singleBadge(R(this.position))}
        ${this.singleBadge(this.status)}
      </div>
    `}singleBadge(e){return e===void 0?"":this.inverted?l`
      ${h`
      <defs>
        <mask id="mask-${e}" x="0" y="0" >
          <rect x="0" y="0" width="32" height="16" fill="#fff" />
          <text text-anchor="middle" x="16" y="12" dy="1">${e}</text>
        </mask>
      </defs>
      <rect x="0" y="0" width="32" height="16" mask="url(#mask-${e})" fill-opacity="1" />
      `}
    `:l`
        ${h`
        <rect x="0" y="0" width="32" height="16" fill="white" />
        <text text-anchor="middle" x="16" y="12" dy="1">${e}</text>
    `}
      `}};m.styles=A`
    .badges-container {
      display: flex;
    }

    svg {
      transform: skew(-10deg);
      height: 16px;
      width: 32px;
    }

    svg:not(:last-child) {
      margin-right: 4px;
    }

    svg text {
      font-weight: 700;
      font-size: smaller;
    }
  `;g([c({type:Number})],m.prototype,"number",2);g([c({type:String})],m.prototype,"position",2);g([c({type:String})],m.prototype,"status",2);g([c({type:Boolean})],m.prototype,"inverted",2);m=g([v(M)],m);var S="/better-kickbase-web/assets/2.b9770161.png",I="/better-kickbase-web/assets/3.c4ecc237.png",U="/better-kickbase-web/assets/4.18b4e12c.png",Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAqCAMAAAAtU0N2AAAB4FBMVEUAAABlZWWLi46FhYdYWFtdXV9PT1KcnJxra25iYmVzc3VOTlBvb3Nvb293d3dvb2+NjY6Wlph/f4FsbG2ZmZt/f3+Xl5dycnNaWlpgYGF6enuOjo5wcHJzc3WFhYZRUVR/f4B1dXZZWVqKioqgoKBISEhGRkllZWZ4eHpycnJfX2FCQkNhYWJubnCJiYuhoaODg4Ofn6GUlJSenp5NTU9NTU9kZGRpaWyUlJVOTlCJiYtlZWdGRkeQkJB6en1xcXQ8PD9bW1uPj5Bra2xmZmdra2v///91dXVeXl7q6upZWVkPDw8HBweMjIxWVlUVFRXt7e3y8vJnZ2jj4+P9/f1MTExlZWXo6OhISEgZGRnu7u5CQkKRkZGUlJRwcHBkZGRgYGAEBAR6enqurq6np6eGhoWYmJj19fU6OjodHR0LCwttbW09PT1FRUUtLS27u7t9fX1KSkqxsbEhISFcXFwSEhJPT0/w8PAwMDD5+fnf394pKSm0tLSrq6u+vr4nJyekpKRTU1MzMzMCAgIkJCTAwMDJycmJiYmDg4PT09NSUlI3NzfNzc0+Pj6IiIj29vbX19eZmZnGxsaAgID+/v64uLja2tqenp7R0dHZ2dmQkJCPj49ra2tzc3NaWlqYmJjU52JuAAAAm3RSTlMA5A5eEr8p/gMJaHw09qTLpRYq4Cnu61Tj5sSQQTngTaWJ1PT+nhu0lPZ/d9OcbIi/P/TdcmLEWdStU6JBdR+aNfr85b/+/////////////////////////////////////////////////////////////////////////////////////////////////////////////////jqiQPcAAAMcSURBVEjHxdRXb9pgFIBhN0skbbp3m051772H1MoGErNsbDA2EA8BYROzwUBKgGyc5TTB5q8WkrZ3NlxU6nv/6PuOjnSA/5Vu5OWdYxevXx7tFww9uEeWC4ly+9rJ/sDI8GohlwU3iWXm+bm+wMO9HfAgi9Ae7ONL32EE/JOPbT/rKe43cqgFz+XwrsDpxosTPcARObEuB90bMsSiILiFYeKTHuIOJxTi4TgZMylR0EdiGCSd1gQTMSZRExiJsyn6Oth0Y5iHvKQpvlAEsrbpW5C8eloCGczj8QbPak0ydKYAgtmdqFC2eWPzVs7j1fMKPKhTBbpzqz9BEF0nKRhzu7ebHaAYTdDxAVUxerftA7tloy06YSl3QSXFX5lQFZ8vFtHuqtdJj2yz4EG9Yqqk4vYzY6ri8pX5TRBdYKgWJlOE0AGLdkc4LD9SFWM3d0C8XKfIFuRG0hvGfbAS8hxTFdf3EAPMshy1wULp5v4LrhX/kumUqrhLWQxNohhrr4qFtFRJdUBoaS5jP6QqjorEJholRXEXNhg8qXi4CyJ5l5ZIgzvwwhZT3DNspeKOsMufiZSqIQ0hWdNwLb1bY0QLHTfKjYZsj1QD/guq4ppk3U6gyzRSLDRTQYmjZRmWI07/eVVxScKzaLZY9y0gpFfioToHZWSbM6QuPonbaHYtKlgJXKEWK0IrCOsDLrPrhqp4f3Y5m/URBGEpKvCcixU8/pAzaba/UxWn30bX1qxpwmJoYXIk72ASfCA5aeYPq4qB42x6Hyw79FC+WuLYBG2ecV64qip0j9u5LsCpORdcnc3Ifm/DPJUZvg2odvKmQBhwPKeP5GMmF7UR5ozmgP2w1v19KuGdGH+pmqlXbCxpysfi/Aig0SC3jiMIXZoNOPMxt9Fu5EJzw4BWA6dEBKk5OsCcnFwyKY6Zaf4qoNkYHUXE6j6YmZmamv6xMqzTFqOv4VrrAEx1wSw/AfToyDhU+g2mp3+YlftAz954/X9B0vRhtLfQvbI5kgeg2ro1BPTTxxu2FedkMsK3Orvrr9sPHo6P3/t266sO+Bf9AvhvKSRXV7QAAAAAAElFTkSuQmCC",P="/better-kickbase-web/assets/7.e4732b84.png",E="/better-kickbase-web/assets/9.0dfad2eb.png",O="/better-kickbase-web/assets/11.0b614101.png",B="/better-kickbase-web/assets/13.9d841356.png",T="/better-kickbase-web/assets/14.63efdbd8.png",H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAqCAYAAAAajbNEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6NENBMUVEMTYzREIwRTMxMUE2QUM4NDNGODlGRDczOUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzZFNDYzQkVCRkQ4MTFFQUE0RkZBMDlBOEY3QzBDODAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzZFNDYzQkRCRkQ4MTFFQUE0RkZBMDlBOEY3QzBDODAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGY3Mzg4YTMtN2Q1YS01ZjQxLWI2ZTAtODQ2ODkzNzIxYWExIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NThjYzhhZjktMzkwMi1hNTRjLTg4MmMtYzU0ZTgzOWM0MjEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XSCZNwAABwBJREFUeNrUWWlMVFcUPiwubO4ISHFDo6USsCooUbGixcElKi5RQay0YIwaFRdEUkWEGP+4RQiOA0QRd0URBQJiYlyIVnApTdS4hDqMW1QooLKcnnPsvGDqDzvM0JmX3Mzhvfsu99x7zvd95z4rRAQTXQHUyqnVgYkvaxON61FfX59DvxHQFhfvhLHbx48fD0yePBkvX75cRX+7meJ/tGymGDRk165dzbw+o0ePxoaGhgxLc8Lx8ePHv3ft2pUTTdrevXub6f6PluRE0qxZs2TyBw8eRC8vL+zcuTM+ffr0Hj1zsAQnvs/JyWEkwoULF+L9+/cxOztbHJozZw49xgRzd8LmzZs3xf369UNXV1dOaPlVq9UYGRkpjuTm5tZSPx9zdiJq9erVMtnMzExcsmSJ2B4eHnj16lV0cXFBT09PfPv2bTH1tTZHJ74pLS3VWllZYXBwMFJIKUnNLSoqSnaE7ZiYGA6rn83OCYLQrFGjRmGHDh2wpKQEhw8fjg4ODujo6IhOTk7YsWNHcWzSpEnIjt64cUNH7/UyJydUu3fvllXevHkzJiUl4aFDh/DJkydIUCu/d+/elfCinBBHAwICkMgw01yccCLo/INX28fHB0+fPo1xG+PwS1dhYSEmJydjQkJCS+5QmYMTiaGhoTKpY8eOISc2w2pdbR3W1tYqra6uDpuamnDTpk147lwuent7C3c8evSogsnRGE7YGii5fM+cORNz8uRJoMSF169fA9s9e/aE5uZmpRPlALx//x4otODKlStAAAC0IzB16lRYt27dt8ePH4+lbvGt1X9WBkhx63fv3hUOHTo0iJQqUBjB9OnTwd3dHaZMmQLEEZ85QUkOw4YNg6qqKkhLSwONRgPXrl2D/fv387v19K5esrepio1mqORXaUICoWyPGzcOWbm2hNeWbe3atTh79mx0dnZG2hXhjj59+jB3lLSWO/7rC+4UEjpra2tUqVQU4+eQbZ5kYGAgzpw5U+xFixZhfHw8btiwAceOHSv37O3tcfv27Qp3ZGRkiL1q1SrO/V/azAnihAMjR44U7GdOGDhwoLLSzBX6RCcpjixBmLEZcvWqlvIAbW1txaZ8wJCQELH/4Q6PtkhsVWpqavj169eBOAHoHwOpVCDcl4Hat28POp1OOnIyT5gwAWiXgBALCKGU0J02bRp06tQJCNFg5cqVQIsBK1ascLl06VIyjRFu0pyoqKi4x5wwYsQIPHHihEBmy+vo0aM4fvx4WdkuXbrggAEDsH///kq48U4xV7x48UL6FxcXY2JiojR+vm3bNr4dZshOfHWNffPmTc+amhqgBIbKykogvP8c5giJ9BclKzx8+BCICxTIpdyQPpTYn04RaAeJ0cHPz0/+JkLkvqEmhVgKkfSJEyf+RM4ArTqcP38eSA+BnZ2drMadO3fg4sWLUFBQIGHCE+bW2Ngo0Orm5gbz5s0DyiMgVAICBfD39xeo5ZAitavz++RRpSkh1vXWrVtaGxsbpHjHs2fPfgahXE/r0SklJQWJ+LBdu3ZisyjUwyzfY5vrDHJA7PXr13MoRRqa2P/lyEZHBLdxzZo1UFRUJOS1bNky5SE5p9jV1dWcrBAXFwfPnz+HBw8eyH1CNdkdJsbFixcDQTBQnQEEx0X0OLOtyE7YmqG1R48eUvAwYel5YsaMGWIzjHbv3h27deum7BTX21u2bBE7KytLqfhoR/+icYe0tQAcQvlQwxOIiIiQAwE9Y8+fP1/kNkGlhA03ritYfu/Zswf79u0rJMmKl9+ZO3euUWpvKwOPMeMXLFiQmJ2dLdopPT0dysvLgVYXCEIVpOKxCZYFoUgwglarhQsXLoho5DCjd+4RIfq39qjTUCfsnj17Vkow600aCHbs2AH79u2TGGcHWo7JDhDTC4QyIX748AG2bt0KXFMsXbpUxej6fx5jBhF0NvEQrJF27twpBPaliyYu9TVrLc6XMWPGGPVksFUvEweoWeBx7DPkRkdH46tXr/7lBJethw8fxqCgIGHwsrIyrTHrbNvW7CLB6kZK2BDigV4cUgy/wcHBQMil9KHqDmjlpXCinRLY9fX15WJIa06n4hEsu/Ukpz9z0jeuH/gwjSGXoZmkS4Gxz56MMYgVkVve4MGDRfhxwcMHZXonWIqHh4eLnZeXV0P9vzPXE0Cv/Pz8ap4oQa9yBssy5NSpU2KHhbFAxV/N/UA5Tr/iR44cweXLlyOJQRw0aJCEEinfMupjb+5O2JGeKmM50rt3b6QQE8HHTqnV6kZ6/oOlfJ8I1Gg0DXotxfKD5QhBcZpFfe4ihk6lukN2gJ2gOuNPuu9iad/snG/fvl3JBBgbG8vJHG6JHx65hXFyv3z5Mp8h2NROGCoAv+bSUEuh9pupP2P/LcAA3HI/pKwkMYUAAAAASUVORK5CYII=",N="/better-kickbase-web/assets/18.3780ff0a.png",G="/better-kickbase-web/assets/19.0896da6a.png",Q="/better-kickbase-web/assets/20.ea3c24b0.png",j="data:image/png;base64,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",W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAqCAMAAAAtU0N2AAADAFBMVEUAAAAzW3opWH17rdNRiLAlXokebqsnY5JYmcoxVnKDtNgncKsicayRtdB3p84VZaYhTG9CgLUTZKF1qtIhS247YH89ZYI4e65AZYGqxdkpVXkqVHQnVno0gLofUndBZYERTnwlcKgRYaBelsI2e7NJiLsrfbs3XHpOirRCfa84eKtUjbdWkLpqnMFNboZ6qtEhVHmOudovdKoaRmgaZ6MLW5sjbacTQmYLV5ctdaojaJwKUYUNPGIxWHV/stYodrZyqtJwpM9ypc9no85ZmspKkMVNk8Zdmsf////k5OTn5+fh4eH+/v7r6+t+psRkoc3i4uLt7e1fncvp6emZwd729vbz8/Nmo84ha6NhmckYZ6H5+fksdKhemsbR4Os+iMGy0Obl5ubw8PD8/P19sNYUX52pyuOTvd36+vru7u6tw9R7pMNYlcJioM02eazf6/VPi7utzeXo6Oj7+/uFr8339/gncaZIkcbV5vLl7/anv9FQlMfV3OCMmaPG3O2Outu+2OtekbigvdLP4e/O1918rdA5hb9OkMVLiLjc6PKauM2Mrsc+f6+71Oidw99WmMnK3u220uaBstf09PWZvNfC1uSau9W3z+KTuthWjLZDjcTX4+wxcqgxdqpUksBEicFXk8bc4OOGq8dGg7NimL+gvtXx8fKuyNuyy96ZudFXdImascLE2uspa6QzgLsrebZknctal8RyhZT3+vxelMPw9foVYp7N2+V2ocBMhrJ2qM7y9/utyN2crbmKs9GBqMXr8fW7z99ynr4/fbFwocaHmahJjMIhY57C2etheYzP3ejI0tq6ytV9jpukyOJHh7h2rNOTssmIoLOhxeFuptFbk76Gtdi9ztno7O6ev9dqm8De5eukxd5PkL9omLwzg77m6uxklrujsLmEkpxonMI7eq4aYZlllLhCg7FvkqxSbYKUqLZxpcqqtsHQ3ebA0t84fa+1xtSsyd9Xg6VehqRSgqZTg6dcmso5cp+EpLtaiaqapKtqnsRDgb17pscxerBbcKwXAAAA+HRSTlMANSLPBAcUGP7+/FQN/lGBUErPj0aE29Km/G48oO3S6No9tRoseKiT7oyD0b3u/Dnu3dX024afw17v97GRyvBnrWlC17WY4v7//////////////////////////////////////v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////v///////////////////////////////////////////gj0DRcAAAS3SURBVEjHldNnVFJhGMDxm2Ye23vvvffe+1xFxICSq8wISIZAiSKguFDEgV537m2ZpaapWZntrMyGltmwYXuv0/T0ouUBV/b/fH88933eC9SirhP7Tdq0cUPlDrQ7utp47YB16ydAHdRtzeTNKNvdzZ0uZrPZ4hD3YC+3EKLxgN5d23y8Z4/JFA49UMxBURWqJBKDiBylkkMUuwe7iecNmNP65/uMqnYL2aGl0X5xDsHNlbgEs5VKtpdXkDEYZPg8MUQpP+BDo+1JqIYNYwpDoqIigz8Y99YTY0+GowcO3veh7dnjfPZGC2HJ3L2TGqXKLI/QE3OzDh4EA3TA2VdwyHAEABJJaG3E8Td6YvQ1MMCHluDs7Cz31boYDNCBraGh6XXHywzEAVqF23466qutCOZ4wbDQXWqpAy5C5m47ALalby90HKYnRp654iOwhAN95fJKKUKHYS/l9QKpS4nX+aAYajk1PLys1j7TMU1PDL9cRUtgwy5aeSIxKJ8Dw1IiG1wj8fz+O3eiwmrCIhwztnj26qUn+ubxEs7iD8HKRG2IDVLJhKX0/X7g6gKpkZGZNUczMtLKsI57G/RElwv+Cc6+brBQWylG8DiXv0uSSCTgzOn29lgs4bRslp4wnZ11Vu6LwjB6HUVyELHBkpoAI5U7U/+LHXzsrlyrlcJ+53FB9Oscpg4UUG9RqdsKY8LfYAmEXd63uZMgg2WlarWJShgmVsDEEqkQgJ0noiIdj9aC1+cSCBYW3FJNP30xPI+XqMXjCkoEfvAOehAdvJGdJCxcdTzidNrjvYRdDIaVZ5HBP6XLvqxEPB6hux85AVfcQFA7AE6EHc2oeeu419PTgsHARHNn6ANwkIcUvEBgc6O6AA5U5SCBYEnpt7bX6c6cBID5zWjNNMigQa4NiAAHElqqEDzlSGjzknZZMMzNrZN5vH6GYsSFLASHs7GxETJRhELhZ4IvyX4LltAIrK2tPbhTexoKkzHHKDqA82OqKJRcPj+mCVg0gUsesulQiwZdLs0BIMdvpyo3lx8vamiawGgEmAf+9ya2FKb7XiM2OBzez07F58ffFanTdEf4A7wDZEOgVg11tcoR4JEYyZH4eJFafSXl5h+AwWB4pbwerQC4kmP5eAolJvRVfq+yMu7tU2pv3ZJ0wjvlPRjR5pB8Si512ytRVR1WcyqgPlqhex7kwTvZoy1htO9hFZ9fnn5aLUoi+Ne/c4j1UDSCS89k802gtpqS900UX779Z4o6iZDs4BBHzvZIAiApwPPBOKjNTMf8eCoqtH+colZYJMfGkclOpGgFBlPk4b8YaqeBL16mFGJTT6UoGKWxZCcnEulcsTc34NIyU6i9ply4xsOm1j9TmFtlAxBAsj0cR5YVj4PazWTV5efJqfUB3ta8bCcS2Z9ka8vSFPWBOsjIzPW7g4ODwpp3jpR9tZRly7K6Oh7qsBFmrl/iii5elD29p7lYzGJZafp3gzqur5nr51gymRwHNnWYddJz4b8AWJjZo4/nSOAEtodZyZr+zWvqcMqjT090wPaqf6cAOMuCvOdPWKxYWdH4nlDnMlry4szXaG7xIhOos5msNHN9uXwp9D8NHLvCCGqz3xXnNcMQzXXVAAAAAElFTkSuQmCC",F="/better-kickbase-web/assets/28.a4cea9d1.png",L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAqCAYAAAAajbNEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REYwNUE1MDcyRjNEMTFFN0FFRTJCMDQ2RkU3NkI3OEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REYwNUE1MDgyRjNEMTFFN0FFRTJCMDQ2RkU3NkI3OEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERjA1QTUwNTJGM0QxMUU3QUVFMkIwNDZGRTc2Qjc4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERjA1QTUwNjJGM0QxMUU3QUVFMkIwNDZGRTc2Qjc4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqfkeWUAAAldSURBVHja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",J="/better-kickbase-web/assets/43.a88206a1.png";const u={team_2:S,team_3:I,team_4:U,team_5:Y,team_7:P,team_9:E,team_11:O,team_13:B,team_14:T,team_15:H,team_18:N,team_19:G,team_20:Q,team_22:j,team_24:W,team_28:F,team_40:L,team_43:J};var z=Object.defineProperty,D=Object.getOwnPropertyDescriptor,f=(e,t,a,i)=>{for(var s=i>1?void 0:i?D(t,a):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(s=(i?n(t,a,s):n(s))||s);return i&&s&&z(t,a,s),s};const C="bkb-player-points-match";let p=class extends b{constructor(){super(...arguments);this.maxPoints=0}render(){const e=this.match.points>=100?"#25c28b":"#ea5f42",t=`${Math.round(this.match.points/this.maxPoints*100)}%`,a={background:`linear-gradient(to top, ${e}, ${e}, ${t}, #f5f7f6, ${t}, #f5f7f6)`};return l`
      <div class="match">
        <div class="match-day">
          <small class="match-value">${this.match.match}.</small>
          <small class="match-label">Spieltag</small>
        </div>
        <div class="match-bar" style=${Z(a)}>
          ${Array.from({length:this.match.assists}).map(()=>l`<div>${this.assistSvg}</div>`)}
          ${Array.from({length:this.match.goals}).map(()=>l`<div>${this.goalSvg}</div>`)}
        </div>
        <small class="match-value points">${this.match.points}</small>
        <div class="match-team-logos">
          <img class="home-team-logo" src="${u[`team_${this.match.homeTeamId}`]}" />
          <img class="away-team-logo" src="${u[`team_${this.match.awayTeamId}`]}" />
        </div>
        ${this.matchResultBadgeSvg(this.match.homeTeamGoals,this.match.awayTeamGoals)}
        <small class="match-value">${Math.round(this.match.playtimeSeconds/60)}'</small>
      </div>
    `}matchResultBadgeSvg(e,t){const a=e===-1?"-":String(e??0),i=t===-1?"-":String(t??0);return l`
      <svg class="score-badge">
        ${h`
      <rect x="0" y="0" width="50" height="16" fill="%23#f4f6f5" />
          <text fill="black" font-size="8pt" text-anchor="middle" x="18" y="12" dy="1">${a} : ${i}</text>
  `}
      </svg>
    `}get assistSvg(){return l` <svg width="14" height="14" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${h`
      <path d="M10.025 11.9412H0.190917C0.00612408 11.9412 -0.0700793 12.1774 0.0785173 12.286L8.03415 18.066C8.13893 18.1422 8.28753 18.0946 8.32753 17.9708L10.2059 12.1907C10.246 12.0669 10.1545 11.9412 10.025 11.9412Z" fill="white"/>
      <path d="M33.0632 11.9411H24.6218C24.4199 11.9411 24.2255 12.0039 24.0617 12.1221L16.9957 17.2563C16.8471 17.3648 16.6452 17.2182 16.7024 17.0429L19.4076 8.71957C19.4705 8.52906 19.4705 8.32141 19.4076 8.1309L16.809 0.131451C16.7519 -0.0438169 16.5042 -0.0438169 16.4471 0.131451L6.28727 31.3939C6.23011 31.5692 6.43205 31.7158 6.58065 31.6073L16.0661 24.7147C16.3995 24.4727 16.8529 24.4727 17.1863 24.7147L26.6717 31.6073C26.8203 31.7158 27.0222 31.5692 26.9651 31.3939L23.3416 20.2434C23.2139 19.851 23.353 19.4204 23.6883 19.1785L33.1737 12.2859C33.3242 12.1773 33.248 11.9411 33.0632 11.9411Z" fill="white"/>
    `}
    </svg>`}get goalSvg(){return l`
      <svg height="12" width="12" viewBox="0 0 1000 1000">
        ${h`
  <g><path fill="white" d="M343,456.3l157-113.8l157,113.8L597.3,640H403.2L343,456.3z M500,10c66.4,0,129.8,12.9,190.3,38.8S803,109.5,846.7,153.3c43.8,43.7,78.6,95.9,104.5,156.4c25.9,60.5,38.8,124,38.8,190.3c0,66.4-12.9,129.8-38.8,190.3c-25.9,60.5-60.7,112.7-104.5,156.4s-95.9,78.6-156.4,104.5C629.8,977.1,566.4,990,500,990c-66.4,0-129.8-12.9-190.3-38.8c-60.5-25.9-112.7-60.7-156.4-104.5S74.7,750.8,48.8,690.3C22.9,629.8,10,566.4,10,500c0-66.4,12.9-129.8,38.8-190.3S109.5,197,153.3,153.3c43.8-43.8,95.9-78.6,156.4-104.5C370.2,22.9,433.6,10,500,10z M838.5,748.3c54.3-74,81.5-156.8,81.5-248.3v-1.6L864.2,547L733,424.5l34.5-176.6l73.3,6.6C786,179.3,715.1,127.9,628,100.2l29,67.8l-157,87l-157-87l29-67.8c-87.1,27.7-158,79.1-212.7,154.2l73.8-6.6L267,424.5L135.8,547L80,498.4v1.6c0,91.5,27.2,174.3,81.5,248.3l16.4-72.2L356.2,698l76,163l-63.4,37.7C411.4,912.9,455.2,920,500,920c44.8,0,88.6-7.1,131.3-21.3l-63.4-37.7l76-163l178.3-21.9L838.5,748.3z"/></g>
    `}
      </svg>
    `}};p.styles=A`
    .match {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 10px;
      width: 48px;
      padding-top: 8px;
      padding-bottom: 8px;
    }

    .match > *:not(:last-child) {
      margin-bottom: 8px;
    }

    .match > small {
      display: inline-flex;
      justify-content: center;
    }

    .match-day {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .match-value {
      opacity: 87%;
      font-weight: 700;
    }
    .match-value.points {
      font-size: medium;
    }

    .match-label {
      opacity: 60%;
      font-size: smaller;
    }

    .match-bar {
      height: 200px;
      background-color: #f5f7f6;
      width: 24px;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

    .home-team-logo,
    .away-team-logo {
      width: 40%;
    }

    .match-team-logos {
      display: flex;
      justify-content: space-evenly;
    }

    svg.score-badge {
      transform: skew(-10deg);
      width: 80%;
      height: 16px;
    }

    svg.score-badge rect {
      fill: #f4f6f5;
    }

    svg.score-badge text {
      font-size: 12px;
      opacity: 80%;
    }
  `;f([c({type:Number,attribute:"max-points"})],p.prototype,"maxPoints",2);f([c({type:Object})],p.prototype,"match",2);p=f([v(C)],p);var X=Object.defineProperty,V=Object.getOwnPropertyDescriptor,d=(e,t,a,i)=>{for(var s=i>1?void 0:i?V(t,a):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(s=(i?n(t,a,s):n(s))||s);return i&&s&&X(t,a,s),s};const q="bkb-player-points";let r=class extends b{constructor(){super(...arguments);this.maxPoints=0,this.numberOfSeasonsToRender=1}willUpdate(e){e.has("points")&&!!this.points?.seasons&&(this.maxPoints=Math.max(...this.points.seasons.flatMap(t=>t.matches).map(t=>t.points)))}render(){let e=[];return this.points?.seasons?.length>0&&(e=this.points.seasons.slice(-this.numberOfSeasonsToRender)),l`
      <div class="root">
        ${this.loadSeasonTemplate} ${e.map(t=>this.seasonTemplate(t))}
        ${this.upcomingMatches.map(t=>l`<bkb-player-points-match
              .match=${t}
              .maxPoints=${this.maxPoints}
            ></bkb-player-points-match>`)}
      </div>
    `}firstUpdated(e){this.firstUpcomingMatch?this.firstUpcomingMatch?.scrollIntoView(!1):this.lastSeasonSummary?.scrollIntoView(!1)}updated(e){e.has("numberOfSeasonsToRender")&&this.firstSeasonSummary?.scrollIntoView({block:"end",inline:"start"})}seasonTemplate(e){const t=e.appearances>0?Math.round(e.points/e.appearances):0;return l`
      <div class="season">
        ${e.matches.map(a=>l`<bkb-player-points-match .match=${a} .maxPoints=${this.maxPoints}></bkb-player-points-match>`)}
        <div class="season-summary">
          <div class="season-summary-details">
            <div class="season-summary-details-value">${e.year}</div>
            <div class="season-summary-details-key">Saison Auswertung</div>
            <div class="season-summary-details-value">${e.points}</div>
            <div class="season-summary-details-key">Punkte</div>
            <div class="season-summary-details-value">${t}</div>
            <div class="season-summary-details-key">∅ Punkte</div>
            <div class="season-summary-details-value">${e.appearances}</div>
            <div class="season-summary-details-key">Einsätze</div>
            <div class="season-summary-details-value">${e.startingEleven}</div>
            <div class="season-summary-details-key">Startelf</div>
          </div>
        </div>
      </div>
    `}get loadSeasonTemplate(){if(this.numberOfSeasonsToRender>=this.points.seasons.length)return l``;const e=this.points.seasons[this.points.seasons.length-this.numberOfSeasonsToRender-1].year;return l`
      <button
        class="load-season"
        @click=${()=>{this.numberOfSeasonsToRender<this.points?.seasons.length&&(this.numberOfSeasonsToRender=this.numberOfSeasonsToRender+1)}}
      >
        Saison ${e} laden
      </button>
    `}};r.styles=A`
    .root {
      width: 100%;
      display: flex;
      overflow-x: scroll;
    }

    .root {
      scrollbar-width: thin;
    }

    .root::-webkit-scrollbar {
      width: 5px;
      height: 8px;
      background-color: #f1f1f1;
    }

    .root::-webkit-scrollbar-thumb {
      background: #c1c1c1;
    }

    .season {
      display: flex;
    }

    .season-summary {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-left: 1px solid #d3d7d8;
      border-right: 1px solid #d3d7d8;
      margin-right: 10px;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .season-summary-year {
      margin-bottom: 0px;
      margin-top: 0px;
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .season-summary > .season-summary-details-key {
      padding-bottom: 0.4rem;
    }

    .season-summary * {
      text-align: center;
    }

    .season-summary-details {
      display: flex;
      flex-direction: column;
    }

    .season-summary-details-value {
      padding-top: 1rem;
      font-weight: 600;
      opacity: 87%;
      font-size: medium;
    }

    .season-summary-details-key {
      font-size: smaller;
      opacity: 60%;
    }

    .load-season {
      font-family: 'Roboto Condensed';
      font-size: medium;
      background-color: transparent;
      border: 0px solid black;
      border-left: 1px solid #d3d7d8;
      border-right: 1px solid #d3d7d8;
      cursor: pointer;
      padding-left: 1rem;
      padding-right: 1rem;
      max-width: 128px;
    }

    .load-season:hover {
      background-color: #efefef;
    }
  `;d([c({type:Object})],r.prototype,"points",2);d([c({type:Array})],r.prototype,"upcomingMatches",2);d([w()],r.prototype,"numberOfSeasonsToRender",2);d([y(".root > bkb-player-points-match")],r.prototype,"firstUpcomingMatch",2);d([y(".root > .season > .season-summary")],r.prototype,"firstSeasonSummary",2);d([y(".season-summary:last-of-type")],r.prototype,"lastSeasonSummary",2);r=d([v(q)],r);export{u as t};
