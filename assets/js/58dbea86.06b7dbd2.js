"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[9026],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=i,f=c["".concat(d,".").concat(m)]||c[m]||s[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75748:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>k,toc:()=>S});var n=r(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>o(e,a(t)),m=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"SortedSet.Types",slug:"/rimbu/sorted/set/SortedSet/Types/interface"},y="interface SortedSet.Types",k={unversionedId:"rimbu_sorted/set/SortedSet/Types.interface",id:"rimbu_sorted/set/SortedSet/Types.interface",title:"SortedSet.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_sorted/set/SortedSet/Types.interface.mdx",sourceDirName:"rimbu_sorted/set/SortedSet",slug:"/rimbu/sorted/set/SortedSet/Types/interface",permalink:"/api/rimbu/sorted/set/SortedSet/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"SortedSet.Types",slug:"/rimbu/sorted/set/SortedSet/Types/interface"},sidebar:"defaultSidebar",previous:{title:"SortedSet.NonEmpty<T>",permalink:"/api/rimbu/sorted/set/SortedSet/NonEmpty/interface"},next:{title:"SortedSet<T>",permalink:"/api/rimbu/sorted/set/SortedSet/interface"}},b={},S=[{value:"Properties",id:"properties",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-3",level:4}],v={toc:S},h="wrapper";function O(e){var t=e,{components:r}=t,i=m(t,["components"]);return(0,n.kt)(h,s(c(c({},v),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"interface-sortedsettypes"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface SortedSet.Types")),(0,n.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,n.kt)("h2",c({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",c({},{id:"builder"}),(0,n.kt)("inlineCode",{parentName:"h3"},"builder")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",c({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/sorted/SortedSet/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet.Builder")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",c({},{id:"context"}),(0,n.kt)("inlineCode",{parentName:"h3"},"context")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",c({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/sorted/SortedSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",c({},{id:"nonempty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",c({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/sorted/SortedSet/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",c({},{id:"normal"}),(0,n.kt)("inlineCode",{parentName:"h3"},"normal")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",c({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/sorted/SortedSet/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))))}O.isMDXComponent=!0}}]);