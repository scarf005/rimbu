"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[23094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(n),s=l,c=k["".concat(d,".").concat(s)]||k[s]||u[s]||i;return n?a.createElement(c,r(r({ref:t},m),{},{components:n})):a.createElement(c,r({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[k]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},88323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>N,default:()=>v,frontMatter:()=>c,metadata:()=>h,toc:()=>y});var a=n(3905),l=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&m(e,n,t[n]);return e},u=(e,t)=>i(e,r(t)),s=(e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const c={title:"SortedMap<K,V>",slug:"/rimbu/sorted/map/SortedMap/interface"},N="interface SortedMap<K,V>",h={unversionedId:"rimbu_sorted/map/SortedMap.interface",id:"rimbu_sorted/map/SortedMap.interface",title:"SortedMap<K,V>",description:"A type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the Map documentation and the SortedMap API documentation",source:"@site/api/rimbu_sorted/map/SortedMap.interface.mdx",sourceDirName:"rimbu_sorted/map",slug:"/rimbu/sorted/map/SortedMap/interface",permalink:"/api/rimbu/sorted/map/SortedMap/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"SortedMap<K,V>",slug:"/rimbu/sorted/map/SortedMap/interface"},sidebar:"defaultSidebar",previous:{title:"SortedMap.Types",permalink:"/api/rimbu/sorted/map/SortedMap/Types/interface"},next:{title:"@rimbu/sorted/map-custom",permalink:"/api/rimbu/sorted/map-custom"}},f={},y=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>drop</code>",id:"drop",level:3},{value:"Definition",id:"definition",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>getAtIndex</code>",id:"getatindex",level:3},{value:"Definitions",id:"definitions",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>getKeyAtIndex</code>",id:"getkeyatindex",level:3},{value:"Definitions",id:"definitions-1",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>getValueAtIndex</code>",id:"getvalueatindex",level:3},{value:"Definitions",id:"definitions-2",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>max</code>",id:"max",level:3},{value:"Definitions",id:"definitions-3",level:4},{value:"<code>maxKey</code>",id:"maxkey",level:3},{value:"Definitions",id:"definitions-4",level:4},{value:"<code>maxValue</code>",id:"maxvalue",level:3},{value:"Definitions",id:"definitions-5",level:4},{value:"<code>min</code>",id:"min",level:3},{value:"Definitions",id:"definitions-6",level:4},{value:"<code>minKey</code>",id:"minkey",level:3},{value:"Definitions",id:"definitions-7",level:4},{value:"<code>minValue</code>",id:"minvalue",level:3},{value:"Definitions",id:"definitions-8",level:4},{value:"<code>slice</code>",id:"slice",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"<code>sliceIndex</code>",id:"sliceindex",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"<code>streamKeys</code>",id:"streamkeys",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Parameters",id:"parameters-7",level:4},{value:"<code>streamRange</code>",id:"streamrange",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Parameters",id:"parameters-8",level:4},{value:"<code>streamSliceIndex</code>",id:"streamsliceindex",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Parameters",id:"parameters-9",level:4},{value:"<code>streamValues</code>",id:"streamvalues",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Parameters",id:"parameters-10",level:4},{value:"<code>take</code>",id:"take",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Parameters",id:"parameters-11",level:4}],g={toc:y},b="wrapper";function v(e){var t=e,{components:n}=t,l=s(t,["components"]);return(0,a.kt)(b,u(k(k({},g),l),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",k({},{id:"interface-sortedmapkv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface SortedMap<K,V>")),(0,a.kt)("p",null,"A type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,a.kt)("a",k({parentName:"p"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,a.kt)("a",k({parentName:"p"},{href:"https://rimbu.org/api/rimbu/sorted/map/SortedMap/interface"}),"SortedMap API documentation"),"  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/namespace"}),"SortedMap")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedMap.NonEmpty<K,V>"))),(0,a.kt)("h2",k({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"K"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"the key type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"the value type")))),(0,a.kt)("admonition",k({},{title:"note",type:"note"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"SortedMap")," keeps the inserted keys in sorted order according to the context's ",(0,a.kt)("inlineCode",{parentName:"li"},"comp")," ",(0,a.kt)("inlineCode",{parentName:"li"},"Comp")," instance."))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m1 = SortedMap.empty<number, string>()\nconst m2 = SortedMap.of([1, 'a'], [2, 'b'])\n"))),(0,a.kt)("h2",k({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"drop"}),(0,a.kt)("inlineCode",{parentName:"h3"},"drop")),(0,a.kt)("p",null,"Returns a SortedMap containing all but the the first ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," of elements of this SortedMap.")),(0,a.kt)("h4",k({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"drop(amount: number): "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedMap")),(0,a.kt)("inlineCode",{parentName:"p"},"<K, V>;"))),(0,a.kt)("h4",k({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"amount")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"the amount of elements to drop")))),(0,a.kt)("admonition",k({},{title:"note",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"a negative ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," drops the last elements instead of the first, e.g. -2 is the last 2 elements")),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.drop(2).toArray())\n// => [['c', ], ['d', 4]]\nconsole.log(m.drop(-2).toArray())\n// => [['a', 1], ['b', 2]]\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"getatindex"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getAtIndex")),(0,a.kt)("p",null,"Returns the entry with its key at the given index of the key sort order of the SortedMap, or a fallback value (default: undefined) if the index is out of bounds.")),(0,a.kt)("h4",k({},{id:"definitions"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getAtIndex(index: number): readonly [K, V] "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getAtIndex<O>(index: number, otherwise: "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>): readonly [K, V] "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("h4",k({},{id:"parameters-1"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"index")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"the index in the key sort order")))),(0,a.kt)("admonition",k({},{title:"note",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"negative index values will retrieve the values from the end of the sort order, e.g. -1 is the last value")),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.getAtIndex(1))\n// => ['b', 2]\nconsole.log(m.getAtIndex(-1))\n// => ['d', 4]\nconsole.log(m.getAtIndex(10))\n// => undefined\nconsole.log(m.getAtIndex(10, 'q'))\n// => 'q'\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"getkeyatindex"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getKeyAtIndex")),(0,a.kt)("p",null,"Returns the key at the given index of the key sort order of the SortedMap, or a fallback value (default: undefined) if the index is out of bounds.")),(0,a.kt)("h4",k({},{id:"definitions-1"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getKeyAtIndex(index: number): K "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getKeyAtIndex<O>(index: number, otherwise: "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>): K "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("h4",k({},{id:"parameters-2"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"index")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"the index in the key sort order")))),(0,a.kt)("admonition",k({},{title:"note",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"negative index values will retrieve the values from the end of the sort order, e.g. -1 is the last value")),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.getKeyAtIndex(1))\n// => 'b'\nconsole.log(m.getKeyAtIndex(-1))\n// => 'd'\nconsole.log(m.getKeyAtIndex(10))\n// => undefined\nconsole.log(m.getKeyAtIndex(10, 'q'))\n// => 'q'\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"getvalueatindex"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getValueAtIndex")),(0,a.kt)("p",null,"Returns the value associated with the key at the given index of the key sort order of the SortedMap, or a fallback value (default: undefined) if the index is out of bounds.")),(0,a.kt)("h4",k({},{id:"definitions-2"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getValueAtIndex(index: number): V "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getValueAtIndex<O>(index: number, otherwise: "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>): V "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("h4",k({},{id:"parameters-3"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"index")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"the index in the key sort order")))),(0,a.kt)("admonition",k({},{title:"note",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"negative index values will retrieve the values from the end of the sort order, e.g. -1 is the last value")),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.getValueAtIndex(1))\n// => 2\nconsole.log(m.getValueAtIndex(-1))\n// => 4\nconsole.log(m.getValueAtIndex(10))\n// => undefined\nconsole.log(m.getValueAtIndex(10, 'q'))\n// => 'q'\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"max"}),(0,a.kt)("inlineCode",{parentName:"h3"},"max")),(0,a.kt)("p",null,"Returns the entry with the maximum key of the SortedMap, or a fallback value (default: undefined) if the SortedMap is empty.")),(0,a.kt)("h4",k({},{id:"definitions-3"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"max(): readonly [K, V] "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"max<O>(otherwise: "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>): readonly [K, V] "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.max())\n// => ['d', 4]\nconsole.log(m.max('q'))\n// => ['d', 4]\nconsole.log(SortedMap.empty().max())\n// => undefined\nconsole.log(SortedMap.empty().max('q'))\n// => 'q'\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"maxkey"}),(0,a.kt)("inlineCode",{parentName:"h3"},"maxKey")),(0,a.kt)("p",null,"Returns the maximum key of the SortedMap, or a fallback value (default: undefined) if the SortedMap is empty.")),(0,a.kt)("h4",k({},{id:"definitions-4"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"maxKey(): K "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"maxKey<O>(otherwise: "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>): K "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.maxKey())\n// => 'a'\nconsole.log(m.maxKey('q'))\n// => 'a'\nconsole.log(SortedMap.empty().maxKey())\n// => undefined\nconsole.log(SortedMap.empty().maxKey('q'))\n// => 'q'\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"maxvalue"}),(0,a.kt)("inlineCode",{parentName:"h3"},"maxValue")),(0,a.kt)("p",null,"Returns the value associated with the maximum key of the SortedMap, or a fallback value (default: undefined) if the SortedMap is empty.")),(0,a.kt)("h4",k({},{id:"definitions-5"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"maxValue(): V "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"maxValue<O>(otherwise: "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>): V "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.maxValue())\n// => 4\nconsole.log(m.maxValue('q'))\n// => 4\nconsole.log(SortedMap.empty().maxValue())\n// => undefined\nconsole.log(SortedMap.empty().maxValue('q'))\n// => 'q'\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"min"}),(0,a.kt)("inlineCode",{parentName:"h3"},"min")),(0,a.kt)("p",null,"Returns the entry with the minimum key of the SortedMap, or a fallback value (default: undefined) if the SortedMap is empty.")),(0,a.kt)("h4",k({},{id:"definitions-6"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"min(): readonly [K, V] "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"min<O>(otherwise: "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>): readonly [K, V] "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.min())\n// => ['a', 1]\nconsole.log(m.min('q'))\n// => ['a', 1]\nconsole.log(SortedMap.empty().min())\n// => undefined\nconsole.log(SortedMap.empty().min('q'))\n// => 'q'\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"minkey"}),(0,a.kt)("inlineCode",{parentName:"h3"},"minKey")),(0,a.kt)("p",null,"Returns the minimum key of the SortedMap, or a fallback value (default: undefined) if the SortedMap is empty.")),(0,a.kt)("h4",k({},{id:"definitions-7"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"minKey(): K "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"minKey<O>(otherwise: "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>): K "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.minKey())\n// => 'a'\nconsole.log(m.minKey('q'))\n// => 'a'\nconsole.log(SortedMap.empty().minKey())\n// => undefined\nconsole.log(SortedMap.empty().minKey('q'))\n// => 'q'\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"minvalue"}),(0,a.kt)("inlineCode",{parentName:"h3"},"minValue")),(0,a.kt)("p",null,"Returns the value associated with the minimum key of the SortedMap, or a fallback value (default: undefined) if the SortedMap is empty.")),(0,a.kt)("h4",k({},{id:"definitions-8"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"minValue(): V "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"minValue<O>(otherwise: "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>): V "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.minValue())\n// => 1\nconsole.log(m.minValue('q'))\n// => 1\nconsole.log(SortedMap.empty().minValue())\n// => undefined\nconsole.log(SortedMap.empty().minValue('q'))\n// => 'q'\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"slice"}),(0,a.kt)("inlineCode",{parentName:"h3"},"slice")),(0,a.kt)("p",null,"Returns a SortedMap containing only those entries whose keys are within the given ",(0,a.kt)("inlineCode",{parentName:"p"},"keyRange"),".")),(0,a.kt)("h4",k({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"slice(keyRange: Range<K>): "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedMap")),(0,a.kt)("inlineCode",{parentName:"p"},"<K, V>;"))),(0,a.kt)("h4",k({},{id:"parameters-4"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"keyRange")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Range<K>")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"a ",(0,a.kt)("inlineCode",{parentName:"td"},"Range")," defining the keys to include")))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.slice({ start: 'b', end: 'c' }).toArray())\n// => [['b', 2], ['c', 3]]\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"sliceindex"}),(0,a.kt)("inlineCode",{parentName:"h3"},"sliceIndex")),(0,a.kt)("p",null,"Returns a SortedMap containing only those entries that are within the given ",(0,a.kt)("inlineCode",{parentName:"p"},"range")," index range of they key sort order.")),(0,a.kt)("h4",k({},{id:"definition-2"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sliceIndex(range: IndexRange): "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedMap")),(0,a.kt)("inlineCode",{parentName:"p"},"<K, V>;"))),(0,a.kt)("h4",k({},{id:"parameters-5"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"range")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"IndexRange")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"an ",(0,a.kt)("inlineCode",{parentName:"td"},"IndexRange")," defining the sort order indices to include.")))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.sliceIndex({ start: 1, amount: 2 }).toArray())\n// => [['b', 2], ['c', 3]]\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"stream"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stream")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",k({},{id:"definition-3"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stream(reversed?: boolean): "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/stream/Stream/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream")),(0,a.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>;"))),(0,a.kt)("h4",k({},{id:"parameters-6"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"reversed")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"streamkeys"}),(0,a.kt)("inlineCode",{parentName:"h3"},"streamKeys")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",k({},{id:"definition-4"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"streamKeys(reversed?: boolean): "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/stream/Stream/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream")),(0,a.kt)("inlineCode",{parentName:"p"},"<K>;"))),(0,a.kt)("h4",k({},{id:"parameters-7"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"reversed")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"streamrange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"streamRange")),(0,a.kt)("p",null,"Returns a Stream of sorted entries of this collection within the given ",(0,a.kt)("inlineCode",{parentName:"p"},"keyRange"),".")),(0,a.kt)("h4",k({},{id:"definition-5"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"streamRange(keyRange: Range<K>, reversed?: boolean): "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/stream/Stream/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream")),(0,a.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>;"))),(0,a.kt)("h4",k({},{id:"parameters-8"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"keyRange")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Range<K>")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"the range of keys to include in the stream")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"reversed")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]);\nconsole.log(m.streamRange({ start: 'b', end: 'c' }).toArray())\n// => ['b', 'c']\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"streamsliceindex"}),(0,a.kt)("inlineCode",{parentName:"h3"},"streamSliceIndex")),(0,a.kt)("p",null,"Returns a Stream of sorted entries of this collection within the given ",(0,a.kt)("inlineCode",{parentName:"p"},"range")," index range.")),(0,a.kt)("h4",k({},{id:"definition-6"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"streamSliceIndex(range: IndexRange, reversed?: boolean): "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/stream/Stream/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream")),(0,a.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>;"))),(0,a.kt)("h4",k({},{id:"parameters-9"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"range")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"IndexRange")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"the range of keys to include in the stream")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"reversed")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]);\nconsole.log(m.streamSliceIndex({ start: 1, amount: 2 }).toArray())\n// => [['b', 2], ['c', 3]]\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"streamvalues"}),(0,a.kt)("inlineCode",{parentName:"h3"},"streamValues")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",k({},{id:"definition-7"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"streamValues(reversed?: boolean): "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/stream/Stream/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream")),(0,a.kt)("inlineCode",{parentName:"p"},"<V>;"))),(0,a.kt)("h4",k({},{id:"parameters-10"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"reversed")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"take"}),(0,a.kt)("inlineCode",{parentName:"h3"},"take")),(0,a.kt)("p",null,"Returns a SortedMap containing the the first ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," of elements of this SortedMap.")),(0,a.kt)("h4",k({},{id:"definition-8"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"take(amount: number): "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedMap")),(0,a.kt)("inlineCode",{parentName:"p"},"<K, V>;"))),(0,a.kt)("h4",k({},{id:"parameters-11"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"amount")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"the amount of elements to keep")))),(0,a.kt)("admonition",k({},{title:"note",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"a negative ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," takes the last elements instead of the first, e.g. -2 is the last 2 elements")),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.take(2).toArray())\n// => [['a', 1], ['b', 2]]\nconsole.log(m.take(-2).toArray())\n// => [['c', ], ['d', 4]]\n")))))}v.isMDXComponent=!0}}]);