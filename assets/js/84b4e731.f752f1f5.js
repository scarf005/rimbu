"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[58914],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(r),s=n,y=d["".concat(p,".").concat(s)]||d[s]||c[s]||o;return r?a.createElement(y,i(i({ref:t},m),{},{components:r})):a.createElement(y,i({ref:t},m))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},59337:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>N,frontMatter:()=>y,metadata:()=>b,toc:()=>M});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&m(e,r,t[r]);return e},c=(e,t)=>o(e,i(t)),s=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r};const y={title:"SortedMultiMapSortedValue.NonEmpty<K,V>",slug:"/rimbu/core/SortedMultiMapSortedValue/NonEmpty/interface"},f="interface SortedMultiMapSortedValue.NonEmpty<K,V>",b={unversionedId:"rimbu_core/SortedMultiMapSortedValue/NonEmpty.interface",id:"rimbu_core/SortedMultiMapSortedValue/NonEmpty.interface",title:"SortedMultiMapSortedValue.NonEmpty<K,V>",description:"A non-empty type-invariant immutable MultiMap of key type K, and value type V. In the MultiMap, each key has at least one value. See the MultiMap documentation and the SortedMultiMapSortedValue API documentation",source:"@site/api/rimbu_core/SortedMultiMapSortedValue/NonEmpty.interface.mdx",sourceDirName:"rimbu_core/SortedMultiMapSortedValue",slug:"/rimbu/core/SortedMultiMapSortedValue/NonEmpty/interface",permalink:"/api/rimbu/core/SortedMultiMapSortedValue/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"SortedMultiMapSortedValue.NonEmpty<K,V>",slug:"/rimbu/core/SortedMultiMapSortedValue/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"SortedMultiMapSortedValue.Context<UK,UV>",permalink:"/api/rimbu/core/SortedMultiMapSortedValue/Context/interface"},next:{title:"SortedMultiMapSortedValue.Types",permalink:"/api/rimbu/core/SortedMultiMapSortedValue/Types/interface"}},k={},M=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4}],S={toc:M},h="wrapper";function N(e){var t=e,{components:r}=t,n=s(t,["components"]);return(0,a.kt)(h,c(d(d({},S),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",d({},{id:"interface-sortedmultimapsortedvaluenonemptykv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface SortedMultiMapSortedValue.NonEmpty<K,V>")),(0,a.kt)("p",null,"A non-empty type-invariant immutable MultiMap of key type K, and value type V. In the MultiMap, each key has at least one value. See the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://rimbu.org/docs/collections/multimap"}),"MultiMap documentation")," and the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://rimbu.org/api/rimbu/multimap/SortedMultiMapSortedValue/interface"}),"SortedMultiMapSortedValue API documentation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends:")," ",(0,a.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/Streamable/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Streamable.NonEmpty<T>")),", ",(0,a.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/SortedMultiMapSortedValue/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedMultiMapSortedValue<K,V>"))),(0,a.kt)("h2",d({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"K"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"the key type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"the value type")))),(0,a.kt)("admonition",d({},{title:"note",type:"note"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"SortedMultiMapSortedValue")," uses the contexts' ",(0,a.kt)("inlineCode",{parentName:"li"},"SortedMap")," ",(0,a.kt)("inlineCode",{parentName:"li"},"keyContext")," to hash the keys - The ",(0,a.kt)("inlineCode",{parentName:"li"},"SortedMultiMapSortedValue")," uses the contexts' ",(0,a.kt)("inlineCode",{parentName:"li"},"SortedSet")," ",(0,a.kt)("inlineCode",{parentName:"li"},"valueContext")," to collect the values for each key."))),(0,a.kt)("admonition",d({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"const m1 = SortedMultiMapSortedValue.empty<number, string>()\nconst m2 = SortedMultiMapSortedValue.of([1, 'a'], [1, 'b'], [2, 'a'])\n"))),(0,a.kt)("h2",d({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",d({},{id:"stream"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stream")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",d({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stream(): "),(0,a.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/Stream/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream.NonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<[K, V]>;"))),(0,a.kt)("h4",d({},{id:"overrides"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/Streamable/NonEmpty/interface#stream"}),"NonEmpty.stream"))))}N.isMDXComponent=!0}}]);