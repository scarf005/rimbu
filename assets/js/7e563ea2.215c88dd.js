"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[20220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),f=i,s=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(s,o(o({ref:t},c),{},{components:r})):n.createElement(s,o({ref:t},c))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},65499:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>E,frontMatter:()=>s,metadata:()=>h,toc:()=>b});var n=r(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>a(e,o(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const s={title:"EdgeGraph.Types",slug:"/rimbu/core/EdgeGraph/Types/interface"},y="interface EdgeGraph.Types",h={unversionedId:"rimbu_core/EdgeGraph/Types.interface",id:"rimbu_core/EdgeGraph/Types.interface",title:"EdgeGraph.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_core/EdgeGraph/Types.interface.mdx",sourceDirName:"rimbu_core/EdgeGraph",slug:"/rimbu/core/EdgeGraph/Types/interface",permalink:"/api/rimbu/core/EdgeGraph/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"EdgeGraph.Types",slug:"/rimbu/core/EdgeGraph/Types/interface"},sidebar:"defaultSidebar",previous:{title:"EdgeGraph.NonEmpty<N>",permalink:"/api/rimbu/core/EdgeGraph/NonEmpty/interface"},next:{title:"EdgeGraph<N>",permalink:"/api/rimbu/core/EdgeGraph/interface"}},k={},b=[{value:"Properties",id:"properties",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-3",level:4}],g={toc:b},v="wrapper";function E(e){var t=e,{components:r}=t,i=f(t,["components"]);return(0,n.kt)(v,m(u(u({},g),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"interface-edgegraphtypes"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface EdgeGraph.Types")),(0,n.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,n.kt)("h2",u({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"builder"}),(0,n.kt)("inlineCode",{parentName:"h3"},"builder")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/EdgeGraph/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraph.Builder")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_N']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"context"}),(0,n.kt)("inlineCode",{parentName:"h3"},"context")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/EdgeGraph/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraph.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_N']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"nonempty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/EdgeGraph/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraph.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_N']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"normal"}),(0,n.kt)("inlineCode",{parentName:"h3"},"normal")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/EdgeGraph/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraph")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_N']>;")))))}E.isMDXComponent=!0}}]);