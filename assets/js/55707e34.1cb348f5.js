"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[34284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,s=m["".concat(p,".").concat(c)]||m[c]||k[c]||r;return n?i.createElement(s,l(l({ref:t},u),{},{components:n})):i.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>N,frontMatter:()=>s,metadata:()=>y,toc:()=>v});var i=n(3905),a=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&u(e,n,t[n]);return e},k=(e,t)=>r(e,l(t)),c=(e,t)=>{var n={};for(var i in e)p.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&d.call(e,i)&&(n[i]=e[i]);return n};const s={title:"SortedMultiMapSortedValue.Types",slug:"/rimbu/multimap/SortedMultiMapSortedValue/Types/interface"},f="interface SortedMultiMapSortedValue.Types",y={unversionedId:"rimbu_multimap/SortedMultiMapSortedValue/Types.interface",id:"rimbu_multimap/SortedMultiMapSortedValue/Types.interface",title:"SortedMultiMapSortedValue.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_multimap/SortedMultiMapSortedValue/Types.interface.mdx",sourceDirName:"rimbu_multimap/SortedMultiMapSortedValue",slug:"/rimbu/multimap/SortedMultiMapSortedValue/Types/interface",permalink:"/api/rimbu/multimap/SortedMultiMapSortedValue/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"SortedMultiMapSortedValue.Types",slug:"/rimbu/multimap/SortedMultiMapSortedValue/Types/interface"},sidebar:"defaultSidebar",previous:{title:"SortedMultiMapSortedValue.NonEmpty<K,V>",permalink:"/api/rimbu/multimap/SortedMultiMapSortedValue/NonEmpty/interface"},next:{title:"SortedMultiMapSortedValue<K,V>",permalink:"/api/rimbu/multimap/SortedMultiMapSortedValue/interface"}},h={},v=[{value:"Properties",id:"properties",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>keyMap</code>",id:"keymap",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>keyMapContext</code>",id:"keymapcontext",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>keyMapNonEmpty</code>",id:"keymapnonempty",level:3},{value:"Definition",id:"definition-4",level:4},{value:"<code>keyMapValues</code>",id:"keymapvalues",level:3},{value:"Definition",id:"definition-5",level:4},{value:"<code>keyMapValuesContext</code>",id:"keymapvaluescontext",level:3},{value:"Definition",id:"definition-6",level:4},{value:"<code>keyMapValuesNonEmpty</code>",id:"keymapvaluesnonempty",level:3},{value:"Definition",id:"definition-7",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-8",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-9",level:4}],S={toc:v},M="wrapper";function N(e){var t=e,{components:n}=t,a=c(t,["components"]);return(0,i.kt)(M,k(m(m({},S),a),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",m({},{id:"interface-sortedmultimapsortedvaluetypes"}),(0,i.kt)("inlineCode",{parentName:"h1"},"interface SortedMultiMapSortedValue.Types")),(0,i.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,i.kt)("h2",m({},{id:"properties"}),"Properties"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"builder"}),(0,i.kt)("inlineCode",{parentName:"h3"},"builder")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/multimap/SortedMultiMapSortedValue/Builder/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMultiMapSortedValue.Builder")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"context"}),(0,i.kt)("inlineCode",{parentName:"h3"},"context")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-1"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/multimap/SortedMultiMapSortedValue/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMultiMapSortedValue.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"keymap"}),(0,i.kt)("inlineCode",{parentName:"h3"},"keyMap")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-2"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly keyMap: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMap")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_K'], "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedSet.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_V']>>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"keymapcontext"}),(0,i.kt)("inlineCode",{parentName:"h3"},"keyMapContext")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-3"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly keyMapContext: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMap.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_K']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"keymapnonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"keyMapNonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-4"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly keyMapNonEmpty: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMap.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_K'], "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedSet.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_V']>>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"keymapvalues"}),(0,i.kt)("inlineCode",{parentName:"h3"},"keyMapValues")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-5"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly keyMapValues: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_V']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"keymapvaluescontext"}),(0,i.kt)("inlineCode",{parentName:"h3"},"keyMapValuesContext")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-6"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly keyMapValuesContext: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedSet.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_V']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"keymapvaluesnonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"keyMapValuesNonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-7"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly keyMapValuesNonEmpty: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedSet.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_V']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"nonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-8"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/multimap/SortedMultiMapSortedValue/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMultiMapSortedValue.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"normal"}),(0,i.kt)("inlineCode",{parentName:"h3"},"normal")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-9"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/multimap/SortedMultiMapSortedValue/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMultiMapSortedValue")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;")))))}N.isMDXComponent=!0}}]);