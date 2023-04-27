"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[2490],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),f=n,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||i;return a?r.createElement(d,p(p({ref:t},c),{},{components:a})):r.createElement(d,p({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:n,p[1]=o;for(var u=2;u<i;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},77563:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>M,default:()=>g,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&c(e,a,t[a]);return e},s=(e,t)=>i(e,p(t)),f=(e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a};const d={title:"VariantMultiMap (namespace)",slug:"/rimbu/core/VariantMultiMap/namespace"},M="namespace VariantMultiMap",y={unversionedId:"rimbu_core/VariantMultiMap/index",id:"rimbu_core/VariantMultiMap/index",title:"VariantMultiMap (namespace)",description:"A type-variant immutable MultiMap of key type K, and value type V. In the Map, each key has at least one value. See the MultiMap documentation and the VariantMultiMap API documentation",source:"@site/api/rimbu_core/VariantMultiMap/index.mdx",sourceDirName:"rimbu_core/VariantMultiMap",slug:"/rimbu/core/VariantMultiMap/namespace",permalink:"/api/rimbu/core/VariantMultiMap/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"VariantMultiMap (namespace)",slug:"/rimbu/core/VariantMultiMap/namespace"},sidebar:"defaultSidebar",previous:{title:"VariantMap<K,V>",permalink:"/api/rimbu/core/VariantMap/interface"},next:{title:"VariantMultiMap.NonEmpty<K,V>",permalink:"/api/rimbu/core/VariantMultiMap/NonEmpty/interface"}},b={},h=[{value:"Interfaces",id:"interfaces",level:2}],k={toc:h},v="wrapper";function g(e){var t=e,{components:a}=t,n=f(t,["components"]);return(0,r.kt)(v,s(m(m({},k),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"namespace-variantmultimap"}),(0,r.kt)("inlineCode",{parentName:"h1"},"namespace VariantMultiMap")),(0,r.kt)("p",null,"A type-variant immutable MultiMap of key type K, and value type V. In the Map, each key has at least one value. See the ",(0,r.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/docs/collections/multimap"}),"MultiMap documentation")," and the ",(0,r.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/api/rimbu/multimap/VariantMultiMap/interface"}),"VariantMultiMap API documentation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/VariantMultiMap/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMultiMap<K,V>"))),(0,r.kt)("h2",m({},{id:"interfaces"}),"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("a",m({parentName:"td"},{href:"/api/rimbu/core/VariantMultiMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMultiMap.NonEmpty<K,V>"))),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"A non-empty type-variant immutable MultiMap of key type K, and value type V. In the Map, each key has at least one value. See the ",(0,r.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/docs/collections/multimap"}),"MultiMap documentation")," and the ",(0,r.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/api/rimbu/multimap/VariantMultiMap/interface"}),"VariantMultiMap API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("a",m({parentName:"td"},{href:"/api/rimbu/core/VariantMultiMap/Types/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMultiMap.Types"))),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))))}g.isMDXComponent=!0}}]);