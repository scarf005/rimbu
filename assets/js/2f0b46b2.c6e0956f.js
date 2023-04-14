"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[52634],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=m(r),c=a,k=p["".concat(s,".").concat(c)]||p[c]||d[c]||i;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},55050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>O,frontMatter:()=>k,metadata:()=>y,toc:()=>b});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))m.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>i(e,l(t)),c=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r};const k={title:"FromPromise<T>",slug:"/rimbu/stream/async-custom/FromPromise/class"},f="class FromPromise<T>",y={unversionedId:"rimbu_stream/async-custom/FromPromise.class",id:"rimbu_stream/async-custom/FromPromise.class",title:"FromPromise<T>",description:"undocumented",source:"@site/api/rimbu_stream/async-custom/FromPromise.class.mdx",sourceDirName:"rimbu_stream/async-custom",slug:"/rimbu/stream/async-custom/FromPromise/class",permalink:"/api/rimbu/stream/async-custom/FromPromise/class",draft:!1,tags:[],version:"current",frontMatter:{title:"FromPromise<T>",slug:"/rimbu/stream/async-custom/FromPromise/class"},sidebar:"defaultSidebar",previous:{title:"FromIterator<T>",permalink:"/api/rimbu/stream/async-custom/FromIterator/class"},next:{title:"FromResource<T,R>",permalink:"/api/rimbu/stream/async-custom/FromResource/class"}},v={},b=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>iterator</code>",id:"iterator",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>promise</code>",id:"promise",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>return</code>",id:"return",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>fastNext</code>",id:"fastnext",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>next</code>",id:"next",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-2",level:4}],h={toc:b},N="wrapper";function O(e){var t=e,{components:r}=t,a=c(t,["components"]);return(0,n.kt)(N,d(p(p({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"class-frompromiset"}),(0,n.kt)("inlineCode",{parentName:"h1"},"class FromPromise<T>")),(0,n.kt)("p",null,"undocumented"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",p({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncFastIteratorBase/class"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncFastIteratorBase<T>"))),(0,n.kt)("h2",p({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"undocumented")))),(0,n.kt)("h2",p({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",p({},{id:"iterator"}),(0,n.kt)("inlineCode",{parentName:"h3"},"iterator")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",p({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"iterator: AsyncFastIterator<T> "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," undefined;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",p({},{id:"promise"}),(0,n.kt)("inlineCode",{parentName:"h3"},"promise")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",p({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly promise: () => Promise<AsyncStreamSource<T>>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",p({},{id:"return"}),(0,n.kt)("inlineCode",{parentName:"h3"},"return")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",p({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"return?: undefined "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," (() => Promise<any>);"))),(0,n.kt)("h4",p({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",p({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncFastIteratorBase/class#return"}),"AsyncFastIteratorBase.return"))),(0,n.kt)("h2",p({},{id:"methods"}),"Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",p({},{id:"fastnext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"fastNext")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",p({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"fastNext<O>(otherwise?: AsyncOptLazy<O>): Promise<T "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," O>;"))),(0,n.kt)("h4",p({},{id:"type-parameters-1"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"O"),(0,n.kt)("td",p({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",p({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"otherwise")),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"AsyncOptLazy<O>")),(0,n.kt)("td",p({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",p({},{id:"overrides-1"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",p({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncFastIteratorBase/class#fastNext"}),"AsyncFastIteratorBase.fastNext"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",p({},{id:"next"}),(0,n.kt)("inlineCode",{parentName:"h3"},"next")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",p({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"next(): Promise<IteratorResult<T>>;"))),(0,n.kt)("h4",p({},{id:"overrides-2"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",p({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncFastIteratorBase/class#next"}),"AsyncFastIteratorBase.next"))))}O.isMDXComponent=!0}}]);