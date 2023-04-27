"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[36022],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(o,".").concat(m)]||d[m]||s[m]||i;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[d]="string"==typeof e?e:n,l[1]=u;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>g,frontMatter:()=>f,metadata:()=>y,toc:()=>M});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&c(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&c(e,r,t[r]);return e},s=(e,t)=>i(e,l(t)),m=(e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const f={title:"HashMultiMapSortedValue.Builder<K,V>",slug:"/rimbu/core/HashMultiMapSortedValue/Builder/interface"},b="interface HashMultiMapSortedValue.Builder<K,V>",y={unversionedId:"rimbu_core/HashMultiMapSortedValue/Builder.interface",id:"rimbu_core/HashMultiMapSortedValue/Builder.interface",title:"HashMultiMapSortedValue.Builder<K,V>",description:"A mutable HashMultiMapSortedValue builder used to efficiently create new immutable instances. See the MultiMap documentation and the HashMultiMapSortedValue.Builder API documentation",source:"@site/api/rimbu_core/HashMultiMapSortedValue/Builder.interface.mdx",sourceDirName:"rimbu_core/HashMultiMapSortedValue",slug:"/rimbu/core/HashMultiMapSortedValue/Builder/interface",permalink:"/api/rimbu/core/HashMultiMapSortedValue/Builder/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"HashMultiMapSortedValue.Builder<K,V>",slug:"/rimbu/core/HashMultiMapSortedValue/Builder/interface"},sidebar:"defaultSidebar",previous:{title:"HashMultiMapSortedValue (namespace)",permalink:"/api/rimbu/core/HashMultiMapSortedValue/namespace"},next:{title:"HashMultiMapSortedValue.Context<UK,UV>",permalink:"/api/rimbu/core/HashMultiMapSortedValue/Context/interface"}},h={},M=[{value:"Type parameters",id:"type-parameters",level:2}],O={toc:M},v="wrapper";function g(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(v,s(d(d({},O),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",d({},{id:"interface-hashmultimapsortedvaluebuilderkv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface HashMultiMapSortedValue.Builder<K,V>")),(0,a.kt)("p",null,"A mutable ",(0,a.kt)("inlineCode",{parentName:"p"},"HashMultiMapSortedValue")," builder used to efficiently create new immutable instances. See the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://rimbu.org/docs/collections/multimap"}),"MultiMap documentation")," and the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://rimbu.org/api/rimbu/multimap/HashMultiMapSortedValue/Builder/interface"}),"HashMultiMapSortedValue.Builder API documentation")),(0,a.kt)("h2",d({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"K"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"the key type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"the value type")))))}g.isMDXComponent=!0}}]);