(()=>{"use strict";var e,n,t,r={5743:(e,n,t)=>{var r=t(5364),a=t(6540),i=t(5338),o=t(2561),u=t(9646),l=t(4015),c=t(2802),f=t(5168),s=t(2009),d=t(6455),g=function(){return a.createElement(d.M,null,a.createElement(h,null))},h=(0,l.PA)((function(){var e=(0,d.N)()[0],n=s.g[e],t=function(e){var n=(0,a.useState)({t:!0}),t=n[0],r=n[1];return(0,a.useLayoutEffect)((function(){if(e instanceof Promise){r({t:!0});var n=r;return e.then((function(e){return n({i:e,t:!1})}),(function(e){return n({h:e,t:!1})})),function(){n=function(){}}}r({i:e,t:!1})}),[e]),t}((0,a.useMemo)((function(){return n.$()}),[n])),r=t.i,i=t.t,o=n.k?n.k():n.L();(0,a.useEffect)((function(){document.title=o}),[o]);var u=(0,f.RT)().P,l=u.T,c=u.A;return a.createElement(a.Fragment,null,i&&a.createElement("div",null,c),r&&a.createElement(r,null),!i&&!r&&a.createElement("div",null,l))})),v=(0,l.PA)((function(){var e=(0,c.Z)();return a.createElement(o.N,{className:m(e),theme:e},a.createElement(g,null))})),m=function(e){return(0,u.Zq)({displayName:"app",":global(body,html)":{margin:0,padding:0,height:"100%",width:"100%",background:e.semanticColors.bodyBackground,display:"flex"},":global(#root)":{display:"flex",flex:1},display:"flex",flex:1,padding:"10px"})};(0,r.v)();var b=document.getElementById("root");(0,i.H)(b).render(a.createElement(v,null))},5168:(e,n,t)=>{t.d(n,{NJ:()=>a,kR:()=>b,RT:()=>m,RW:()=>w});var r={};t.r(r),t.d(r,{en:()=>h,zh:()=>v});var a,i=t(1163),o=t(180),u=t(3210);!function(e){e.en="en",e.zh="zh"}(a||(a={}));var l,c,f,s,d,g=t(4260),h={S:{D:"Home",C:"Kevin ADB's Page",F:"Welcome to the home page, where you can find all pages and settings.",R:"Settings",_:"Change Language",K:"Change Theme"},q:{D:"About",B:"For any inquiries or suggestions, please send an email to "},U:{D:"Page Not Found",F:"The page you are looking for does not exist, please check if the link is correct.",I:"The page will redirect to the home page in {0} seconds..."},P:{A:"Loading...",T:"Failed to load, please try to refresh the page."},V:(l={},l[a.en]="English",l[a.zh]="Chinese",l),X:(c={},c[g.f.dark]="Dark",c[g.f.light]="Light",c)},v={S:{D:"首页",C:"Kevin ADB 的首页",F:"欢迎来到首页，这里可以找到所有的页面和设置。",R:"设置",_:"改变语言",K:"改变主题"},q:{D:"关于",B:"有任何问题或建议，请发送邮件至："},U:{D:"未找到页面",F:"您要找的页面不存在，请检查链接是否正确。",I:"页面将在 {0} 秒后重定向到首页。。。"},P:{A:"加载中...",T:"加载失败，请尝试刷新页面。"},V:(f={},f[a.en]="英文",f[a.zh]="中文",f),X:(s={},s[g.f.dark]="暗色",s[g.f.light]="亮色",s)},m=(0,u.W)("resources/localized-strings",(function(){var e=b();return r[e]})),b=function(){return p()||$()||a.en},p=function(){var e=(0,o.J)().language;if(e&&a[e])return e},$=function(){for(var e=(0,i.x)(a),n=0,t=navigator.languages;n<t.length;n++){var r=t[n];if(e.includes(r))return r;var o=r.split("-");if(e.includes(o[0]))return o[0]}},y={Y:"kevin-adb@hotmail.com",V:(d={},d[a.en]="English",d[a.zh]="中文",d)},w=function(){return y}},2802:(e,n,t)=>{t.d(n,{O:()=>s,Z:()=>f});var r={};t.r(r),t.d(r,{dark:()=>u,light:()=>l});var a=t(180),i=t(3210),o=t(3742),u=(0,o.a)({palette:{themePrimary:"#8f78e4",themeLighterAlt:"#060509",themeLighter:"#171324",themeLight:"#2b2444",themeTertiary:"#564888",themeSecondary:"#7e6ac8",themeDarkAlt:"#9a85e6",themeDark:"#a896ea",themeDarker:"#beb0ef",neutralLighterAlt:"#2b2b2b",neutralLighter:"#333333",neutralLight:"#414141",neutralQuaternaryAlt:"#4a4a4a",neutralQuaternary:"#515151",neutralTertiaryAlt:"#6f6f6f",neutralTertiary:"#c8c8c8",neutralSecondary:"#d0d0d0",neutralSecondaryAlt:"#d0d0d0",neutralPrimaryAlt:"#dadada",neutralPrimary:"#ffffff",neutralDark:"#f4f4f4",black:"#f8f8f8",white:"#222222"}}),l=(0,o.a)({palette:{themePrimary:"#6655dd",themeLighterAlt:"#f8f7fe",themeLighter:"#e4e1fa",themeLight:"#cec7f5",themeTertiary:"#9f94eb",themeSecondary:"#7767e2",themeDarkAlt:"#5c4cc8",themeDark:"#4e40a9",themeDarker:"#392f7c",neutralLighterAlt:"#faf9f8",neutralLighter:"#f3f2f1",neutralLight:"#edebe9",neutralQuaternaryAlt:"#e1dfdd",neutralQuaternary:"#d0d0d0",neutralTertiaryAlt:"#c8c6c4",neutralTertiary:"#a19f9d",neutralSecondary:"#605e5c",neutralSecondaryAlt:"#8a8886",neutralPrimaryAlt:"#3b3a39",neutralPrimary:"#323130",neutralDark:"#201f1e",black:"#000000",white:"#ffffff"}}),c=t(4260),f=function(){var e=s();return r[e]},s=(0,i.W)("resources/theme",(function(){return d()||g()})),d=function(){var e=(0,a.J)().themeName;if(e&&c.f[e])return e},g=function(){return window.matchMedia("(prefers-color-scheme: dark)").matches?c.f.dark:c.f.light}},4260:(e,n,t)=>{var r;t.d(n,{f:()=>r}),function(e){e.dark="dark",e.light="light"}(r||(r={}))},1163:(e,n,t)=>{t.d(n,{x:()=>r});var r=function(e){return Object.keys(e)}},3210:(e,n,t)=>{t.d(n,{W:()=>a});var r=t(7813),a=function(e,n){var t=(0,r.EW)(n,{name:e,requiresReaction:!0,equals:function(e,n){return e===n}});return function(){return t.get()}}},180:(e,n,t)=>{t.d(n,{J:()=>l});var r=t(7813),a=function(){function e(e,n){this.root=r.sH({model:e,settings:n})}return e.prototype.getModel=function(){return this.root.model},e.prototype.setModel=function(e){this.root.model=e},e.prototype.getSettings=function(){return this.root.settings},e}();r.jK({enforceActions:"always"});var i,o=(i=function(e,n){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},i(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}i(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),u=new(function(e){function n(n){var t=e.call(this,JSON.parse(localStorage.getItem(n)||"{}"),{})||this;return(0,r.mJ)((function(){return JSON.stringify(t.getModel())}),(function(e){e!==localStorage.getItem(n)&&localStorage.setItem(n,e)})),window.addEventListener("storage",(function(e){if(e.key===n){var a=localStorage.getItem(n);a&&(0,r.h5)((function(){t.setModel(JSON.parse(a))}))}})),t}return o(n,e),n}(a))("data"),l=function(){return u.getModel()}},2009:(e,n,t)=>{t.d(n,{g:()=>L,e:()=>P});var r,a=t(5168),i=t(7600),o=t(9646),u=t(4015),l=t(6540),c=t(2802),f=t(4260),s=t(1163),d=t(7813),g=function(e,n){return l.useCallback((function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return(0,d.h5)((function(){return e.apply(void 0,n)}))}),n)},h=t(180),v=t(7484),m=t(6455),b=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},p=(0,u.PA)((function(){var e=(0,l.useMemo)((function(){L.home,L.pageNotFound;var e=b(L,["home","pageNotFound"]);return(0,s.x)(e)}),[]),n=y();return l.createElement("div",{className:n.root},e.map((function(e){return l.createElement($,{key:e,page:e})})))})),$=(0,u.PA)((function(e){var n=e.page,t=(0,m.N)()[1],r=(0,l.useCallback)((function(){return t(n)}),[t,n]);return l.createElement(v.N,{onClick:r},L[n].L())})),y=function(){return(0,o.l8)({root:{padding:10}})},w=(0,u.PA)((function(){var e=(0,a.RW)().V,n=(0,a.RT)(),t=n.S,r=t.C,o=t.F,u=t.R,d=t._,v=t.K,m=n.V,b=n.X,$=(0,h.J)(),y=g((function(e){$.language=e}),[$]),w=g((function(e){$.themeName=e}),[$]),N=(0,l.useMemo)((function(){return(0,s.x)(a.NJ).map((function(n){return{key:n,text:"".concat(e[n]," (").concat(m[n],")")}}))}),[y,e,m]),L=(0,l.useMemo)((function(){return(0,s.x)(f.f).map((function(e){return{key:e,text:b[e]}}))}),[w,b]),P=k();return l.createElement("div",{className:P.container},l.createElement("h1",null,r),l.createElement("div",null,o),l.createElement(p,null),l.createElement("div",{className:P.spacing}),l.createElement("div",null,l.createElement("div",{className:P.settings},l.createElement("h2",null,u),l.createElement(i.m,{label:d,options:N,selectedKey:(0,a.kR)(),onChange:function(e,n){return n&&y(n.key)}}),l.createElement(i.m,{label:v,options:L,selectedKey:(0,c.O)(),onChange:function(e,n){return n&&w(n.key)}}))))})),k=function(){return(0,o.l8)({container:{flex:1,display:"flex",flexDirection:"column"},spacing:{flex:1},settings:{display:"inline-block"}})},N=t(4230),L=((r={})[N.G.home]={ee:"home",k:function(){return(0,a.RT)().S.C},L:function(){return(0,a.RT)().S.D},$:function(){return w}},r[N.G.about]={ee:"about",L:function(){return(0,a.RT)().q.D},$:function(){return t.e(594).then(t.bind(t,5359)).then((function(e){return e.AboutPage}))}},r[N.G.pageNotFound]={ee:"404",L:function(){return(0,a.RT)().U.D},$:function(){return t.e(757).then(t.bind(t,8230)).then((function(e){return e.NotFoundPage}))}},r),P=Object.fromEntries(Object.entries(L).map((function(e){var n=e[0];return[e[1].ee,n]})))},6455:(e,n,t)=>{t.d(n,{M:()=>f,N:()=>c});var r=t(6540),a=t(2009),i=t(4230),o=function(e){return new URLSearchParams(window.location.search).get(e)},u=function(e,n,t){var r=new URLSearchParams(window.location.search);if(n!==r.get(e)){n?r.set(e,n):r.delete(e);var a="".concat(window.location.pathname,"?").concat(r.toString()).concat(window.location.hash);t?window.history.replaceState({},"",a):window.history.pushState({},"",a)}},l=(0,r.createContext)({}),c=function(){var e=(0,r.useContext)(l);return[e.ne,e.te]},f=function(e){var n=e.children,t=function(e){var n=(0,r.useState)((function(){return o(e)})),t=n[0],a=n[1];return(0,r.useEffect)((function(){var n=function(){return a(o(e))};return window.addEventListener("popstate",n),function(){window.removeEventListener("popstate",n)}}),[e,a]),[t,(0,r.useCallback)((function(n,t){void 0===t&&(t=!1),a(n),u(e,n,t)}),[e])]}("page"),c=t[0],f=t[1],s=c||a.g[i.G.home].ee,d=a.e[s]||i.G.pageNotFound,g=(0,r.useCallback)((function(e,n){f(a.g[e].ee,n)}),[f]),h=(0,r.useMemo)((function(){return{ne:d,te:g}}),[d,g]);return(0,r.useEffect)((function(){g(d,!0)}),[d,g]),r.createElement(l.Provider,{value:h},n)}},4230:(e,n,t)=>{var r;t.d(n,{G:()=>r}),function(e){e.home="home",e.pageNotFound="pageNotFound",e.about="about"}(r||(r={}))}},a={};function i(e){var n=a[e];if(void 0!==n)return n.exports;var t=a[e]={exports:{}};return r[e](t,t.exports,i),t.exports}i.m=r,e=[],i.O=(n,t,r,a)=>{if(!t){var o=1/0;for(f=0;f<e.length;f++){for(var[t,r,a]=e[f],u=!0,l=0;l<t.length;l++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](t[l])))?t.splice(l--,1):(u=!1,a<o&&(o=a));if(u){e.splice(f--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[t,r,a]},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((n,t)=>(i.f[t](e,n),n)),[])),i.u=e=>"scripts/"+{594:"about",757:"not-found"}[e]+"."+{594:"ef0e8374",757:"e79ef226"}[e]+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),n={},t="gk7-web:",i.l=(e,r,a,o)=>{if(n[e])n[e].push(r);else{var u,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var s=c[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==t+a){u=s;break}}u||(l=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.setAttribute("data-webpack",t+a),u.src=e),n[e]=[r];var d=(t,r)=>{u.onerror=u.onload=null,clearTimeout(g);var a=n[e];if(delete n[e],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((e=>e(r))),t)return t(r)},g=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),l&&document.head.appendChild(u)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var n=i.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../"})(),(()=>{var e={792:0};i.f.j=(n,t)=>{var r=i.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(((t,a)=>r=e[n]=[t,a]));t.push(r[2]=a);var o=i.p+i.u(n),u=new Error;i.l(o,(t=>{if(i.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,r[1](u)}}),"chunk-"+n,n)}},i.O.j=n=>0===e[n];var n=(n,t)=>{var r,a,[o,u,l]=t,c=0;if(o.some((n=>0!==e[n]))){for(r in u)i.o(u,r)&&(i.m[r]=u[r]);if(l)var f=l(i)}for(n&&n(t);c<o.length;c++)a=o[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(f)},t=self.webpackChunkgk7_web=self.webpackChunkgk7_web||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var o=i.O(void 0,[427,989,496],(()=>i(5743)));o=i.O(o)})();