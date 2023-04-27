"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[79418],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18664:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>g,frontMatter:()=>d,metadata:()=>y,toc:()=>S});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>i(e,o(t)),f=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r};const d={title:"VariantSet (namespace)",slug:"/rimbu/core/VariantSet/namespace"},b="namespace VariantSet",y={unversionedId:"rimbu_core/VariantSet/index",id:"rimbu_core/VariantSet/index",title:"VariantSet (namespace)",description:"A type-variant immutable Set of value type T. In the Set, there are no duplicate values. See the Set documentation and the VariantSet API documentation",source:"@site/api/rimbu_core/VariantSet/index.mdx",sourceDirName:"rimbu_core/VariantSet",slug:"/rimbu/core/VariantSet/namespace",permalink:"/api/rimbu/core/VariantSet/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"VariantSet (namespace)",slug:"/rimbu/core/VariantSet/namespace"},sidebar:"defaultSidebar",previous:{title:"VariantMultiSet<T>",permalink:"/api/rimbu/core/VariantMultiSet/interface"},next:{title:"VariantSet.NonEmpty<T>",permalink:"/api/rimbu/core/VariantSet/NonEmpty/interface"}},h={},S=[{value:"Interfaces",id:"interfaces",level:2}],v={toc:S},k="wrapper";function g(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,a.kt)(k,s(m(m({},v),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"namespace-variantset"}),(0,a.kt)("inlineCode",{parentName:"h1"},"namespace VariantSet")),(0,a.kt)("p",null,"A type-variant immutable Set of value type T. In the Set, there are no duplicate values. See the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/api/rimbu/collection-types/set/VariantSet/interface"}),"VariantSet API documentation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/VariantSet/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"VariantSet<T>"))),(0,a.kt)("h2",m({},{id:"interfaces"}),"Interfaces"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"/api/rimbu/core/VariantSet/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"VariantSet.NonEmpty<T>"))),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"A non-empty type-variant immutable Set of value type T. In the Set, there are no duplicate values. See the ",(0,a.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,a.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/api/rimbu/collection-types/set/VariantSet/interface"}),"VariantSet API documentation"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"/api/rimbu/core/VariantSet/Types/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"VariantSet.Types"))),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))))}g.isMDXComponent=!0}}]);