"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[41174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>g,frontMatter:()=>f,metadata:()=>b,toc:()=>S});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&m(e,n,t[n]);return e},s=(e,t)=>i(e,o(t)),d=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"RSet (namespace)",slug:"/rimbu/collection-types/RSet/namespace"},y="namespace RSet",b={unversionedId:"rimbu_collection-types/RSet/index",id:"rimbu_collection-types/RSet/index",title:"RSet (namespace)",description:"A type-invariant immutable Set of value type T. In the Set, there are no duplicate values. See the Set documentation and the RSet API documentation",source:"@site/api/rimbu_collection-types/RSet/index.mdx",sourceDirName:"rimbu_collection-types/RSet",slug:"/rimbu/collection-types/RSet/namespace",permalink:"/api/rimbu/collection-types/RSet/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"RSet (namespace)",slug:"/rimbu/collection-types/RSet/namespace"},sidebar:"defaultSidebar",previous:{title:"RMap<K,V>",permalink:"/api/rimbu/collection-types/RMap/interface"},next:{title:"RSet.Builder<T>",permalink:"/api/rimbu/collection-types/RSet/Builder/interface"}},h={},S=[{value:"Interfaces",id:"interfaces",level:2}],k={toc:S},v="wrapper";function g(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(v,s(u(u({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"namespace-rset"}),(0,r.kt)("inlineCode",{parentName:"h1"},"namespace RSet")),(0,r.kt)("p",null,"A type-invariant immutable Set of value type T. In the Set, there are no duplicate values. See the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/api/rimbu/collection-types/set/RSet/interface"}),"RSet API documentation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/RSet/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RSet<T>"))),(0,r.kt)("h2",u({},{id:"interfaces"}),"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"/api/rimbu/collection-types/RSet/Builder/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RSet.Builder<T>"))),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"A mutable Set builder used to efficiently create new immutable instances. See the ",(0,r.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,r.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/api/rimbu/collection-types/set/RSet/Builder/interface"}),"RSet.Builder API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"/api/rimbu/collection-types/RSet/Context/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RSet.Context<UT>"))),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"A context instance for Map implementations that acts as a factory for every instance of this type of collection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"/api/rimbu/collection-types/RSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RSet.NonEmpty<T>"))),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"A non-empty type-invariant immutable Set of value type T. In the Set, there are no duplicate values. See the ",(0,r.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,r.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/api/rimbu/collection-types/set/RSet/interface"}),"RSet API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"/api/rimbu/collection-types/RSet/Types/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RSet.Types"))),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))))}g.isMDXComponent=!0}}]);