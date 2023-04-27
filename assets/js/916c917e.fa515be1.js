"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[97068],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(r),s=i,f=u["".concat(a,".").concat(s)]||u[s]||m[s]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=s;var d={};for(var a in t)hasOwnProperty.call(t,a)&&(d[a]=t[a]);d.originalType=e,d[u]="string"==typeof e?e:i,l[1]=d;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},34845:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>S,contentTitle:()=>k,default:()=>h,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var n=r(3905),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&c(e,r,t[r]);if(d)for(var r of d(t))p.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,l(t)),s=(e,t)=>{var r={};for(var n in e)a.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"OrderedSortedSet.Types",slug:"/rimbu/core/OrderedSortedSet/Types/interface"},k="interface OrderedSortedSet.Types",y={unversionedId:"rimbu_core/OrderedSortedSet/Types.interface",id:"rimbu_core/OrderedSortedSet/Types.interface",title:"OrderedSortedSet.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_core/OrderedSortedSet/Types.interface.mdx",sourceDirName:"rimbu_core/OrderedSortedSet",slug:"/rimbu/core/OrderedSortedSet/Types/interface",permalink:"/api/rimbu/core/OrderedSortedSet/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedSortedSet.Types",slug:"/rimbu/core/OrderedSortedSet/Types/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedSortedSet.NonEmpty<T>",permalink:"/api/rimbu/core/OrderedSortedSet/NonEmpty/interface"},next:{title:"OrderedSortedSet<T>",permalink:"/api/rimbu/core/OrderedSortedSet/interface"}},S={},b=[{value:"Properties",id:"properties",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>sourceContext</code>",id:"sourcecontext",level:3},{value:"Definition",id:"definition-4",level:4},{value:"<code>sourceSet</code>",id:"sourceset",level:3},{value:"Definition",id:"definition-5",level:4},{value:"<code>sourceSetNonEmpty</code>",id:"sourcesetnonempty",level:3},{value:"Definition",id:"definition-6",level:4}],v={toc:b},O="wrapper";function h(e){var t=e,{components:r}=t,i=s(t,["components"]);return(0,n.kt)(O,m(u(u({},v),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"interface-orderedsortedsettypes"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface OrderedSortedSet.Types")),(0,n.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,n.kt)("h2",u({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"builder"}),(0,n.kt)("inlineCode",{parentName:"h3"},"builder")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/OrderedSortedSet/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"OrderedSortedSet.Builder")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"context"}),(0,n.kt)("inlineCode",{parentName:"h3"},"context")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/OrderedSortedSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"OrderedSortedSet.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"nonempty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/OrderedSortedSet/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"OrderedSortedSet.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"normal"}),(0,n.kt)("inlineCode",{parentName:"h3"},"normal")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/OrderedSortedSet/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"OrderedSortedSet")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"sourcecontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"sourceContext")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly sourceContext: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/SortedSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"sourceset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"sourceSet")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition-5"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly sourceSet: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/SortedSet/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"sourcesetnonempty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"sourceSetNonEmpty")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition-6"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly sourceSetNonEmpty: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/SortedSet/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))))}h.isMDXComponent=!0}}]);