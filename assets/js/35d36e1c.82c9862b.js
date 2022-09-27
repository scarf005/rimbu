"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[25708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=i,y=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(y,l(l({ref:t},m),{},{components:n})):r.createElement(y,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>y,toc:()=>k});var r=n(3905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&m(e,n,t[n]);return e};const c={title:"NonEmptyBase<E>",slug:"/rimbu/collection-types/set-custom/NonEmptyBase/class"},d="abstract class NonEmptyBase<E>",y={unversionedId:"rimbu_collection-types/set-custom/NonEmptyBase.class",id:"rimbu_collection-types/set-custom/NonEmptyBase.class",title:"NonEmptyBase<E>",description:"undocumented",source:"@site/api/rimbu_collection-types/set-custom/NonEmptyBase.class.mdx",sourceDirName:"rimbu_collection-types/set-custom",slug:"/rimbu/collection-types/set-custom/NonEmptyBase/class",permalink:"/api/rimbu/collection-types/set-custom/NonEmptyBase/class",draft:!1,tags:[],version:"current",frontMatter:{title:"NonEmptyBase<E>",slug:"/rimbu/collection-types/set-custom/NonEmptyBase/class"},sidebar:"defaultSidebar",previous:{title:"KeyValue<K,V>",permalink:"/api/rimbu/collection-types/set-custom/KeyValue/interface"},next:{title:"RSetBase (namespace)",permalink:"/api/rimbu/collection-types/set-custom/RSetBase/namespace"}},f={},k=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>isEmpty</code>",id:"isempty",level:3},{value:"Definition",id:"definition",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>[Symbol.iterator]</code>",id:"symboliterator",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>asNormal</code>",id:"asnormal",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>assumeNonEmpty</code>",id:"assumenonempty",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-4",level:4},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition-5",level:4}],b={toc:k};function v(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},b),m),a(t,l({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"abstract-class-nonemptybasee"}),(0,r.kt)("inlineCode",{parentName:"h1"},"abstract class NonEmptyBase<E>")),(0,r.kt)("p",null,"undocumented"),(0,r.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"E"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"undocumented")))),(0,r.kt)("h2",u({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"isempty"}),(0,r.kt)("inlineCode",{parentName:"h3"},"isEmpty")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"get isEmpty(): false;")))),(0,r.kt)("h2",u({},{id:"methods"}),"Methods"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"symboliterator"}),(0,r.kt)("inlineCode",{parentName:"h3"},"[Symbol.iterator]")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[Symbol.iterator](): "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/FastIterator/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"FastIterator")),(0,r.kt)("inlineCode",{parentName:"p"},"<E>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"asnormal"}),(0,r.kt)("inlineCode",{parentName:"h3"},"asNormal")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"asNormal(): any;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"assumenonempty"}),(0,r.kt)("inlineCode",{parentName:"h3"},"assumeNonEmpty")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"assumeNonEmpty(): this;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"nonempty"}),(0,r.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nonEmpty(): true;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"stream"}),(0,r.kt)("inlineCode",{parentName:"h3"},"stream")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-5"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"abstract stream(): "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/Stream/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Stream.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<E>;")))))}v.isMDXComponent=!0}}]);