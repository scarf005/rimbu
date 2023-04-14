"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[3520],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),l=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(r),s=n,y=c["".concat(d,".").concat(s)]||c[s]||u[s]||i;return r?a.createElement(y,o(o({ref:t},m),{},{components:r})):a.createElement(y,o({ref:t},m))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[c]="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},24996:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>N,frontMatter:()=>y,metadata:()=>b,toc:()=>O});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&m(e,r,t[r]);return e},u=(e,t)=>i(e,o(t)),s=(e,t)=>{var r={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r};const y={title:"OrderedMap.NonEmpty<K,V>",slug:"/rimbu/ordered/OrderedMap/NonEmpty/interface"},f="interface OrderedMap.NonEmpty<K,V>",b={unversionedId:"rimbu_ordered/OrderedMap/NonEmpty.interface",id:"rimbu_ordered/OrderedMap/NonEmpty.interface",title:"OrderedMap.NonEmpty<K,V>",description:"A non-empty type-invariant immutable Ordered Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the Map documentation and the OrderedMap API documentation",source:"@site/api/rimbu_ordered/OrderedMap/NonEmpty.interface.mdx",sourceDirName:"rimbu_ordered/OrderedMap",slug:"/rimbu/ordered/OrderedMap/NonEmpty/interface",permalink:"/api/rimbu/ordered/OrderedMap/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedMap.NonEmpty<K,V>",slug:"/rimbu/ordered/OrderedMap/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedMap.Context<UK>",permalink:"/api/rimbu/ordered/OrderedMap/Context/interface"},next:{title:"OrderedMap.Types",permalink:"/api/rimbu/ordered/OrderedMap/Types/interface"}},h={},O=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4}],k={toc:O},v="wrapper";function N(e){var t=e,{components:r}=t,n=s(t,["components"]);return(0,a.kt)(v,u(c(c({},k),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",c({},{id:"interface-orderedmapnonemptykv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface OrderedMap.NonEmpty<K,V>")),(0,a.kt)("p",null,"A non-empty type-invariant immutable Ordered Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/api/rimbu/ordered/map/OrderedMap/interface"}),"OrderedMap API documentation"),"  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends:")," ",(0,a.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/Streamable/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Streamable.NonEmpty<T>")),", ",(0,a.kt)("a",c({parentName:"p"},{href:"/api/rimbu/ordered/OrderedMap/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"OrderedMap<K,V>"))),(0,a.kt)("h2",c({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"K"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"the key type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"the value type")))),(0,a.kt)("admonition",c({},{title:"note",type:"note"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The OrderedMap keeps maintains the insertion order of elements, thus iterators and streams will also reflect this order. - The OrderedMap wraps around a Map instance, thus has mostly the same time complexity as the contained Map. - The OrderedMap keeps the key insertion order in a List, thus its space complexity is higher than a regular Map."))),(0,a.kt)("admonition",c({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"const m1 = OrderedHashMap.empty<number, string>()\nconst m2 = OrderedHashMap.of([1, 'a'], [2, 'b'])\n"))),(0,a.kt)("h2",c({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",c({},{id:"stream"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stream")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",c({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stream(): "),(0,a.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/Stream/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream.NonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>;"))),(0,a.kt)("h4",c({},{id:"overrides"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/Streamable/NonEmpty/interface#stream"}),"NonEmpty.stream"))))}N.isMDXComponent=!0}}]);