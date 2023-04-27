"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[12245],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=l(a),f=n,d=u["".concat(c,".").concat(f)]||u[f]||s[f]||i;return a?r.createElement(d,p(p({ref:t},m),{},{components:a})):r.createElement(d,p({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,p[1]=o;for(var l=2;l<i;l++)p[l]=a[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},45900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>g,frontMatter:()=>d,metadata:()=>b,toc:()=>k});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))l.call(t,a)&&m(e,a,t[a]);return e},s=(e,t)=>i(e,p(t)),f=(e,t)=>{var a={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&l.call(e,r)&&(a[r]=e[r]);return a};const d={title:"VariantMap (namespace)",slug:"/rimbu/core/VariantMap/namespace"},y="namespace VariantMap",b={unversionedId:"rimbu_core/VariantMap/index",id:"rimbu_core/VariantMap/index",title:"VariantMap (namespace)",description:"A type-variant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the Map documentation and the VariantMap API documentation",source:"@site/api/rimbu_core/VariantMap/index.mdx",sourceDirName:"rimbu_core/VariantMap",slug:"/rimbu/core/VariantMap/namespace",permalink:"/api/rimbu/core/VariantMap/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"VariantMap (namespace)",slug:"/rimbu/core/VariantMap/namespace"},sidebar:"defaultSidebar",previous:{title:"VariantGraph<N>",permalink:"/api/rimbu/core/VariantGraph/interface"},next:{title:"VariantMap.NonEmpty<K,V>",permalink:"/api/rimbu/core/VariantMap/NonEmpty/interface"}},h={},k=[{value:"Interfaces",id:"interfaces",level:2}],v={toc:k},M="wrapper";function g(e){var t=e,{components:a}=t,n=f(t,["components"]);return(0,r.kt)(M,s(u(u({},v),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"namespace-variantmap"}),(0,r.kt)("inlineCode",{parentName:"h1"},"namespace VariantMap")),(0,r.kt)("p",null,"A type-variant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/api/rimbu/collection-types/map/VariantMap/interface"}),"VariantMap API documentation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/VariantMap/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMap<K,V>"))),(0,r.kt)("h2",u({},{id:"interfaces"}),"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"/api/rimbu/core/VariantMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMap.NonEmpty<K,V>"))),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"A non-empty type-variant Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,r.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,r.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/api/rimbu/collection-types/map/VariantMap/interface"}),"VariantMap API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"/api/rimbu/core/VariantMap/Types/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMap.Types"))),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))))}g.isMDXComponent=!0}}]);