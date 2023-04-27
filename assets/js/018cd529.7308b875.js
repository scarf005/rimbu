"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[92915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,f=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>g,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>i(e,o(t)),h=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"HashMap.Context<UK>",slug:"/rimbu/hashed/HashMap/Context/interface"},m="interface HashMap.Context<UK>",y={unversionedId:"rimbu_hashed/HashMap/Context.interface",id:"rimbu_hashed/HashMap/Context.interface",title:"HashMap.Context<UK>",description:"A context instance for a HashMap that acts as a factory for every instance of this type of collection.",source:"@site/api/rimbu_hashed/HashMap/Context.interface.mdx",sourceDirName:"rimbu_hashed/HashMap",slug:"/rimbu/hashed/HashMap/Context/interface",permalink:"/api/rimbu/hashed/HashMap/Context/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"HashMap.Context<UK>",slug:"/rimbu/hashed/HashMap/Context/interface"},sidebar:"defaultSidebar",previous:{title:"HashMap.Builder<K,V>",permalink:"/api/rimbu/hashed/HashMap/Builder/interface"},next:{title:"HashMap.NonEmpty<K,V>",permalink:"/api/rimbu/hashed/HashMap/NonEmpty/interface"}},k={},b=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>eq</code>",id:"eq",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>hasher</code>",id:"hasher",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>typeTag</code>",id:"typetag",level:3},{value:"Definition",id:"definition-2",level:4}],v={toc:b},O="wrapper";function g(e){var t=e,{components:n}=t,a=h(t,["components"]);return(0,r.kt)(O,d(u(u({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"interface-hashmapcontextuk"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface HashMap.Context<UK>")),(0,r.kt)("p",null,"A context instance for a ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap")," that acts as a factory for every instance of this type of collection."),(0,r.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"UK"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"the upper key type bound for which the context can be used")))),(0,r.kt)("h2",u({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"eq"}),(0,r.kt)("inlineCode",{parentName:"h3"},"eq")),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"Eq")," instance used to check key equivalence.")),(0,r.kt)("h4",u({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly eq: Eq<UK>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"hasher"}),(0,r.kt)("inlineCode",{parentName:"h3"},"hasher")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Hasher")," instance used to hash the map keys.")),(0,r.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly hasher: Hasher<UK>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"typetag"}),(0,r.kt)("inlineCode",{parentName:"h3"},"typeTag")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly typeTag: 'HashMap';")))))}g.isMDXComponent=!0}}]);