"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[82628],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),s=n,b=m["".concat(o,".").concat(s)]||m[s]||f[s]||i;return r?a.createElement(b,p(p({ref:t},c),{},{components:r})):a.createElement(b,p({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:n,p[1]=l;for(var u=2;u<i;u++)p[u]=r[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},58784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>M,contentTitle:()=>y,default:()=>O,frontMatter:()=>b,metadata:()=>d,toc:()=>v});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>i(e,p(t)),s=(e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r};const b={title:"BiMultiMap<K,V>",slug:"/rimbu/core/BiMultiMap/interface"},y="interface BiMultiMap<K,V>",d={unversionedId:"rimbu_core/BiMultiMap.interface",id:"rimbu_core/BiMultiMap.interface",title:"BiMultiMap<K,V>",description:"A type-invariant immutable bi-directional MultiMap where keys and values have a many-to-many mapping. See the BiMultiMap documentation and the BiMultiMap API documentation",source:"@site/api/rimbu_core/BiMultiMap.interface.mdx",sourceDirName:"rimbu_core",slug:"/rimbu/core/BiMultiMap/interface",permalink:"/api/rimbu/core/BiMultiMap/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"BiMultiMap<K,V>",slug:"/rimbu/core/BiMultiMap/interface"},sidebar:"defaultSidebar",previous:{title:"BiMultiMap.Types",permalink:"/api/rimbu/core/BiMultiMap/Types/interface"},next:{title:"BiMultiMap",permalink:"/api/rimbu/core/BiMultiMap/var"}},M={},v=[{value:"Type parameters",id:"type-parameters",level:2}],k={toc:v},g="wrapper";function O(e){var t=e,{components:r}=t,n=s(t,["components"]);return(0,a.kt)(g,f(m(m({},k),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"interface-bimultimapkv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface BiMultiMap<K,V>")),(0,a.kt)("p",null,"A type-invariant immutable bi-directional MultiMap where keys and values have a many-to-many mapping. See the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/docs/collections/bimultimap"}),"BiMultiMap documentation")," and the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/api/rimbu/bimultimap/BiMultiMap/interface"}),"BiMultiMap API documentation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/BiMultiMap/namespace"}),"BiMultiMap")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/BiMultiMap/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"BiMultiMap.NonEmpty<K,V>"))),(0,a.kt)("h2",m({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"K"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"the key type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"the value type")))))}O.isMDXComponent=!0}}]);