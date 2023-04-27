"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[83219],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>s});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),d=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,s=c["".concat(p,".").concat(m)]||c[m]||k[m]||a;return t?i.createElement(s,l(l({ref:n},u),{},{components:t})):i.createElement(s,l({ref:n},u))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<a;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>h,default:()=>b,frontMatter:()=>s,metadata:()=>f,toc:()=>N});var i=t(3905),r=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&u(e,t,n[t]);if(o)for(var t of o(n))d.call(n,t)&&u(e,t,n[t]);return e},k=(e,n)=>a(e,l(n)),m=(e,n)=>{var t={};for(var i in e)p.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&o)for(var i of o(e))n.indexOf(i)<0&&d.call(e,i)&&(t[i]=e[i]);return t};const s={title:"ArrowGraphHashed.Types",slug:"/rimbu/core/ArrowGraphHashed/Types/interface"},h="interface ArrowGraphHashed.Types",f={unversionedId:"rimbu_core/ArrowGraphHashed/Types.interface",id:"rimbu_core/ArrowGraphHashed/Types.interface",title:"ArrowGraphHashed.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_core/ArrowGraphHashed/Types.interface.mdx",sourceDirName:"rimbu_core/ArrowGraphHashed",slug:"/rimbu/core/ArrowGraphHashed/Types/interface",permalink:"/api/rimbu/core/ArrowGraphHashed/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"ArrowGraphHashed.Types",slug:"/rimbu/core/ArrowGraphHashed/Types/interface"},sidebar:"defaultSidebar",previous:{title:"ArrowGraphHashed.NonEmpty<N>",permalink:"/api/rimbu/core/ArrowGraphHashed/NonEmpty/interface"},next:{title:"ArrowGraphHashed<N>",permalink:"/api/rimbu/core/ArrowGraphHashed/interface"}},y={},N=[{value:"Properties",id:"properties",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>linkConnections</code>",id:"linkconnections",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>linkConnectionsBuilder</code>",id:"linkconnectionsbuilder",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>linkConnectionsContext</code>",id:"linkconnectionscontext",level:3},{value:"Definition",id:"definition-4",level:4},{value:"<code>linkMap</code>",id:"linkmap",level:3},{value:"Definition",id:"definition-5",level:4},{value:"<code>linkMapBuilder</code>",id:"linkmapbuilder",level:3},{value:"Definition",id:"definition-6",level:4},{value:"<code>linkMapContext</code>",id:"linkmapcontext",level:3},{value:"Definition",id:"definition-7",level:4},{value:"<code>linkMapNonEmpty</code>",id:"linkmapnonempty",level:3},{value:"Definition",id:"definition-8",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-9",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-10",level:4}],v={toc:N},C="wrapper";function b(e){var n=e,{components:t}=n,r=m(n,["components"]);return(0,i.kt)(C,k(c(c({},v),r),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",c({},{id:"interface-arrowgraphhashedtypes"}),(0,i.kt)("inlineCode",{parentName:"h1"},"interface ArrowGraphHashed.Types")),(0,i.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,i.kt)("h2",c({},{id:"properties"}),"Properties"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"builder"}),(0,i.kt)("inlineCode",{parentName:"h3"},"builder")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/ArrowGraphHashed/Builder/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"ArrowGraphHashed.Builder")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"context"}),(0,i.kt)("inlineCode",{parentName:"h3"},"context")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-1"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/ArrowGraphHashed/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"ArrowGraphHashed.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"linkconnections"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkConnections")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-2"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkConnections: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/HashSet/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"HashSet")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"linkconnectionsbuilder"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkConnectionsBuilder")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-3"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkConnectionsBuilder: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/HashSet/Builder/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"HashSet.Builder")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"linkconnectionscontext"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkConnectionsContext")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-4"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkConnectionsContext: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/HashSet/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"HashSet.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"linkmap"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkMap")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-5"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkMap: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/HashMap/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"HashMap")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/HashSet/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"HashSet")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"linkmapbuilder"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkMapBuilder")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-6"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkMapBuilder: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/HashMap/Builder/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"HashMap.Builder")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/HashSet/Builder/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"HashSet.Builder")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"linkmapcontext"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkMapContext")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-7"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkMapContext: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/HashMap/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"HashMap.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"linkmapnonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkMapNonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-8"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkMapNonEmpty: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/HashMap/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"HashMap.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/HashSet/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"HashSet")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"nonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-9"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/ArrowGraphHashed/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"ArrowGraphHashed.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"normal"}),(0,i.kt)("inlineCode",{parentName:"h3"},"normal")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-10"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/ArrowGraphHashed/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"ArrowGraphHashed")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;")))))}b.isMDXComponent=!0}}]);