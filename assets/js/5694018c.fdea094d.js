"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[19708],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),p=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(d.Provider,{value:n},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,f=c["".concat(d,".").concat(m)]||c[m]||k[m]||a;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73080:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>s,default:()=>b,frontMatter:()=>f,metadata:()=>h,toc:()=>N});var i=t(3905),r=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&u(e,t,n[t]);if(l)for(var t of l(n))p.call(n,t)&&u(e,t,n[t]);return e},k=(e,n)=>a(e,o(n)),m=(e,n)=>{var t={};for(var i in e)d.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&l)for(var i of l(e))n.indexOf(i)<0&&p.call(e,i)&&(t[i]=e[i]);return t};const f={title:"ArrowValuedGraphSorted.Types",slug:"/rimbu/core/ArrowValuedGraphSorted/Types/interface"},s="interface ArrowValuedGraphSorted.Types",h={unversionedId:"rimbu_core/ArrowValuedGraphSorted/Types.interface",id:"rimbu_core/ArrowValuedGraphSorted/Types.interface",title:"ArrowValuedGraphSorted.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_core/ArrowValuedGraphSorted/Types.interface.mdx",sourceDirName:"rimbu_core/ArrowValuedGraphSorted",slug:"/rimbu/core/ArrowValuedGraphSorted/Types/interface",permalink:"/api/rimbu/core/ArrowValuedGraphSorted/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"ArrowValuedGraphSorted.Types",slug:"/rimbu/core/ArrowValuedGraphSorted/Types/interface"},sidebar:"defaultSidebar",previous:{title:"ArrowValuedGraphSorted.NonEmpty<N,V>",permalink:"/api/rimbu/core/ArrowValuedGraphSorted/NonEmpty/interface"},next:{title:"ArrowValuedGraphSorted<N,V>",permalink:"/api/rimbu/core/ArrowValuedGraphSorted/interface"}},y={},N=[{value:"Properties",id:"properties",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>linkConnections</code>",id:"linkconnections",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>linkConnectionsBuilder</code>",id:"linkconnectionsbuilder",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>linkConnectionsContext</code>",id:"linkconnectionscontext",level:3},{value:"Definition",id:"definition-4",level:4},{value:"<code>linkMap</code>",id:"linkmap",level:3},{value:"Definition",id:"definition-5",level:4},{value:"<code>linkMapBuilder</code>",id:"linkmapbuilder",level:3},{value:"Definition",id:"definition-6",level:4},{value:"<code>linkMapContext</code>",id:"linkmapcontext",level:3},{value:"Definition",id:"definition-7",level:4},{value:"<code>linkMapNonEmpty</code>",id:"linkmapnonempty",level:3},{value:"Definition",id:"definition-8",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-9",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-10",level:4}],v={toc:N},C="wrapper";function b(e){var n=e,{components:t}=n,r=m(n,["components"]);return(0,i.kt)(C,k(c(c({},v),r),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",c({},{id:"interface-arrowvaluedgraphsortedtypes"}),(0,i.kt)("inlineCode",{parentName:"h1"},"interface ArrowValuedGraphSorted.Types")),(0,i.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,i.kt)("h2",c({},{id:"properties"}),"Properties"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"builder"}),(0,i.kt)("inlineCode",{parentName:"h3"},"builder")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/ArrowValuedGraphSorted/Builder/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphSorted.Builder")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"context"}),(0,i.kt)("inlineCode",{parentName:"h3"},"context")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-1"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/ArrowValuedGraphSorted/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphSorted.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"linkconnections"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkConnections")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-2"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkConnections: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/SortedMap/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMap")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"linkconnectionsbuilder"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkConnectionsBuilder")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-3"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkConnectionsBuilder: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/SortedMap/Builder/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMap.Builder")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"linkconnectionscontext"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkConnectionsContext")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-4"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkConnectionsContext: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/SortedMap/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMap.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"linkmap"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkMap")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-5"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkMap: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/SortedMap/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMap")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/SortedMap/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMap")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"linkmapbuilder"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkMapBuilder")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-6"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkMapBuilder: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/SortedMap/Builder/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMap.Builder")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/SortedMap/Builder/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMap.Builder")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"linkmapcontext"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkMapContext")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-7"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkMapContext: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/SortedMap/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMap.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"linkmapnonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkMapNonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-8"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkMapNonEmpty: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/SortedMap/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMap.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/SortedMap/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMap")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"nonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-9"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/ArrowValuedGraphSorted/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphSorted.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"normal"}),(0,i.kt)("inlineCode",{parentName:"h3"},"normal")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-10"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/ArrowValuedGraphSorted/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphSorted")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>;")))))}b.isMDXComponent=!0}}]);