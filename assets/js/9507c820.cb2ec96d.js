"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[33168],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),l=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return a.createElement(d.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},s=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(t),s=n,f=m["".concat(d,".").concat(s)]||m[s]||u[s]||p;return t?a.createElement(f,o(o({ref:r},c),{},{components:t})):a.createElement(f,o({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,o=new Array(p);o[0]=s;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<p;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},46446:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>O,contentTitle:()=>y,default:()=>M,frontMatter:()=>f,metadata:()=>b,toc:()=>h});var a=t(3905),n=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))l.call(r,t)&&c(e,t,r[t]);return e},u=(e,r)=>p(e,o(r)),s=(e,r)=>{var t={};for(var a in e)d.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&l.call(e,a)&&(t[a]=e[a]);return t};const f={title:"OrderedMap<K,V>",slug:"/rimbu/ordered/OrderedMap/interface"},y="interface OrderedMap<K,V>",b={unversionedId:"rimbu_ordered/OrderedMap.interface",id:"rimbu_ordered/OrderedMap.interface",title:"OrderedMap<K,V>",description:"A type-invariant immutable Ordered Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the Map documentation and the OrderedMap API documentation",source:"@site/api/rimbu_ordered/OrderedMap.interface.mdx",sourceDirName:"rimbu_ordered",slug:"/rimbu/ordered/OrderedMap/interface",permalink:"/api/rimbu/ordered/OrderedMap/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedMap<K,V>",slug:"/rimbu/ordered/OrderedMap/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedMap.Types",permalink:"/api/rimbu/ordered/OrderedMap/Types/interface"},next:{title:"OrderedSet (namespace)",permalink:"/api/rimbu/ordered/OrderedSet/namespace"}},O={},h=[{value:"Type parameters",id:"type-parameters",level:2}],k={toc:h},v="wrapper";function M(e){var r=e,{components:t}=r,n=s(r,["components"]);return(0,a.kt)(v,u(m(m({},k),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"interface-orderedmapkv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface OrderedMap<K,V>")),(0,a.kt)("p",null,"A type-invariant immutable Ordered Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/api/rimbu/ordered/map/OrderedMap/interface"}),"OrderedMap API documentation"),"  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/ordered/OrderedMap/namespace"}),"OrderedMap")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/ordered/OrderedMap/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"OrderedMap.NonEmpty<K,V>"))),(0,a.kt)("h2",m({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"K"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"the key type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"the value type")))),(0,a.kt)("admonition",m({},{title:"note",type:"note"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The OrderedMap keeps maintains the insertion order of elements, thus iterators and streams will also reflect this order. - The OrderedMap wraps around a Map instance, thus has mostly the same time complexity as the contained Map. - The OrderedMap keeps the key insertion order in a List, thus its space complexity is higher than a regular Map."))),(0,a.kt)("admonition",m({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"const m1 = OrderedHashMap.empty<number, string>()\nconst m2 = OrderedHashMap.of([1, 'a'], [2, 'b'])\n"))))}M.isMDXComponent=!0}}]);