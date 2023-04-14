"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[59846],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=l(a),y=r,f=u["".concat(c,".").concat(y)]||u[y]||s[y]||p;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<p;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},61846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>f,metadata:()=>b,toc:()=>k});var n=a(3905),r=Object.defineProperty,p=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))l.call(t,a)&&m(e,a,t[a]);return e},s=(e,t)=>p(e,i(t)),y=(e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&l.call(e,n)&&(a[n]=e[n]);return a};const f={title:"VariantMap (namespace)",slug:"/rimbu/collection-types/map/VariantMap/namespace"},d="namespace VariantMap",b={unversionedId:"rimbu_collection-types/map/VariantMap/index",id:"rimbu_collection-types/map/VariantMap/index",title:"VariantMap (namespace)",description:"A type-variant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the Map documentation and the VariantMap API documentation",source:"@site/api/rimbu_collection-types/map/VariantMap/index.mdx",sourceDirName:"rimbu_collection-types/map/VariantMap",slug:"/rimbu/collection-types/map/VariantMap/namespace",permalink:"/api/rimbu/collection-types/map/VariantMap/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"VariantMap (namespace)",slug:"/rimbu/collection-types/map/VariantMap/namespace"},sidebar:"defaultSidebar",previous:{title:"RMap<K,V>",permalink:"/api/rimbu/collection-types/map/RMap/interface"},next:{title:"VariantMap.NonEmpty<K,V>",permalink:"/api/rimbu/collection-types/map/VariantMap/NonEmpty/interface"}},h={},k=[{value:"Interfaces",id:"interfaces",level:2}],v={toc:k},M="wrapper";function g(e){var t=e,{components:a}=t,r=y(t,["components"]);return(0,n.kt)(M,s(u(u({},v),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"namespace-variantmap"}),(0,n.kt)("inlineCode",{parentName:"h1"},"namespace VariantMap")),(0,n.kt)("p",null,"A type-variant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/api/rimbu/collection-types/map/VariantMap/interface"}),"VariantMap API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/map/VariantMap/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"VariantMap<K,V>"))),(0,n.kt)("h2",u({},{id:"interfaces"}),"Interfaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/collection-types/map/VariantMap/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"VariantMap.NonEmpty<K,V>"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A non-empty type-variant Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,n.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,n.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/api/rimbu/collection-types/map/VariantMap/interface"}),"VariantMap API documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/collection-types/map/VariantMap/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"VariantMap.Types"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))))}g.isMDXComponent=!0}}]);