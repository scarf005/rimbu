"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[28938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=m(n),k=r,c=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(c,i(i({ref:t},p),{},{components:n})):a.createElement(c,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},85878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>N,default:()=>y,frontMatter:()=>c,metadata:()=>g,toc:()=>h});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))m.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>l(e,i(t)),k=(e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n};const c={title:"SortedSet<T>",slug:"/rimbu/sorted/set/SortedSet/interface"},N="interface SortedSet<T>",g={unversionedId:"rimbu_sorted/set/SortedSet.interface",id:"rimbu_sorted/set/SortedSet.interface",title:"SortedSet<T>",description:"A type-invariant immutable Set of value type T. In the Set, there are no duplicate values. See the Set documentation and the SortedSet API documentation",source:"@site/api/rimbu_sorted/set/SortedSet.interface.mdx",sourceDirName:"rimbu_sorted/set",slug:"/rimbu/sorted/set/SortedSet/interface",permalink:"/api/rimbu/sorted/set/SortedSet/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"SortedSet<T>",slug:"/rimbu/sorted/set/SortedSet/interface"},sidebar:"defaultSidebar",previous:{title:"SortedSet.Types",permalink:"/api/rimbu/sorted/set/SortedSet/Types/interface"},next:{title:"@rimbu/sorted/set-custom",permalink:"/api/rimbu/sorted/set-custom"}},f={},h=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>drop</code>",id:"drop",level:3},{value:"Definition",id:"definition",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>getAtIndex</code>",id:"getatindex",level:3},{value:"Definitions",id:"definitions",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>max</code>",id:"max",level:3},{value:"Definitions",id:"definitions-1",level:4},{value:"<code>min</code>",id:"min",level:3},{value:"Definitions",id:"definitions-2",level:4},{value:"<code>slice</code>",id:"slice",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>sliceIndex</code>",id:"sliceindex",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"<code>streamRange</code>",id:"streamrange",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"<code>streamSliceIndex</code>",id:"streamsliceindex",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"<code>take</code>",id:"take",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Parameters",id:"parameters-7",level:4}],b={toc:h},v="wrapper";function y(e){var t=e,{components:n}=t,r=k(t,["components"]);return(0,a.kt)(v,u(s(s({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"interface-sortedsett"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface SortedSet<T>")),(0,a.kt)("p",null,"A type-invariant immutable Set of value type T. In the Set, there are no duplicate values. See the ",(0,a.kt)("a",s({parentName:"p"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,a.kt)("a",s({parentName:"p"},{href:"https://rimbu.org/api/rimbu/ordered/set/SortedSet/interface"}),"SortedSet API documentation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/namespace"}),"SortedSet")),(0,a.kt)("h2",s({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"the value type")))),(0,a.kt)("admonition",s({},{title:"note",type:"note"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"SortedSet")," keeps the inserted values in sorted order according to the context's ",(0,a.kt)("inlineCode",{parentName:"li"},"comp")," ",(0,a.kt)("inlineCode",{parentName:"li"},"Comp")," instance."))),(0,a.kt)("admonition",s({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const s1 = SortedSet.empty<string>()\nconst s2 = SortedSet.of('a', 'b', 'c')\n"))),(0,a.kt)("h2",s({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",s({},{id:"drop"}),(0,a.kt)("inlineCode",{parentName:"h3"},"drop")),(0,a.kt)("p",null,"Returns a SortedSet containing all but the the first ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," of value of this SortedSet.")),(0,a.kt)("h4",s({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"drop(amount: number): "),(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/sorted/SortedSet/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h4",s({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"amount")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"the amount of elements to keep")))),(0,a.kt)("admonition",s({},{title:"note",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"a negative ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," drops the last values instead of the first, e.g. -2 is the last 2 elements")),(0,a.kt)("admonition",s({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const m = SortedSet.of('b', 'd', 'a', 'c').asNormal();\nconsole.log(m.drop(2).toArray())\n// => ['c', 'd']\nconsole.log(m.drop(-2).toArray())\n// => ['a', 'b']\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",s({},{id:"getatindex"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getAtIndex")),(0,a.kt)("p",null,"Returns the value at the given index of the value sort order of the SortedSet, or a fallback value (default: undefined) if the index is out of bounds.")),(0,a.kt)("h4",s({},{id:"definitions"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getAtIndex(index: number): T "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getAtIndex<O>(index: number, otherwise: "),(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>): T "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("h4",s({},{id:"parameters-1"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"index")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"the index in the key sort order")))),(0,a.kt)("admonition",s({},{title:"note",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"negative index values will retrieve the values from the end of the sort order, e.g. -1 is the last value")),(0,a.kt)("admonition",s({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const m = SortedSet.of('b', 'd', 'a', 'c').asNormal();\nconsole.log(m.getAtIndex(1))\n// => 'b'\nconsole.log(m.getAtIndex(-1))\n// => 'd'\nconsole.log(m.getAtIndex(10))\n// => undefined\nconsole.log(m.getAtIndex(10, 'q'))\n// => 'q'\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",s({},{id:"max"}),(0,a.kt)("inlineCode",{parentName:"h3"},"max")),(0,a.kt)("p",null,"Returns the maximum value of the SortedSet, or a fallback value (default: undefined) if the SortedSet is empty.")),(0,a.kt)("h4",s({},{id:"definitions-1"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"max(): T "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"max<O>(otherwise: "),(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>): T "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("admonition",s({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const m = SortedSet.of('b', 'd', 'a', 'c').asNormal();\nconsole.log(m.max())\n// => 'a'\nconsole.log(m.max('q'))\n// => 'a'\nconsole.log(SortedSet.empty().max())\n// => undefined\nconsole.log(SortedSet.empty().max('q'))\n// => 'q'\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",s({},{id:"min"}),(0,a.kt)("inlineCode",{parentName:"h3"},"min")),(0,a.kt)("p",null,"Returns the minimum value of the SortedSet, or a fallback value (default: undefined) if the SortedSet is empty.")),(0,a.kt)("h4",s({},{id:"definitions-2"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"min(): T "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"min<O>(otherwise: "),(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>): T "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("admonition",s({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const m = SortedSet.of('b', 'd', 'a', 'c').asNormal();\nconsole.log(m.min())\n// => 'a'\nconsole.log(m.min('q'))\n// => 'a'\nconsole.log(SortedSet.empty().min())\n// => undefined\nconsole.log(SortedSet.empty().min('q'))\n// => 'q'\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",s({},{id:"slice"}),(0,a.kt)("inlineCode",{parentName:"h3"},"slice")),(0,a.kt)("p",null,"Returns a SortedSet containing only those values that are within the given ",(0,a.kt)("inlineCode",{parentName:"p"},"keyRange"),".")),(0,a.kt)("h4",s({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"slice(range: Range<T>): "),(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/sorted/SortedSet/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h4",s({},{id:"parameters-2"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"range")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Range<T>")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"a ",(0,a.kt)("inlineCode",{parentName:"td"},"Range")," defining the values to include")))),(0,a.kt)("admonition",s({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const m = SortedSet.of('b', 'd', 'a', 'c').asNormal();\nconsole.log(m.slice({ start: 'b', end: 'c' }).toArray())\n// => ['b', 'c']\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",s({},{id:"sliceindex"}),(0,a.kt)("inlineCode",{parentName:"h3"},"sliceIndex")),(0,a.kt)("p",null,"Returns a SortedSet containing only those values that are within the given ",(0,a.kt)("inlineCode",{parentName:"p"},"range")," index range of the value sort order.")),(0,a.kt)("h4",s({},{id:"definition-2"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sliceIndex(range: IndexRange): "),(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/sorted/SortedSet/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h4",s({},{id:"parameters-3"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"range")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"IndexRange")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"an ",(0,a.kt)("inlineCode",{parentName:"td"},"IndexRange")," defining the sort order indices to include.")))),(0,a.kt)("admonition",s({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const m = SortedSet.of('b', 'd', 'a', 'c').asNormal();\nconsole.log(m.sliceIndex({ start: 1, amount: 2 }).toArray())\n// => ['b', 'c']\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",s({},{id:"stream"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stream")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",s({},{id:"definition-3"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stream(reversed?: boolean): Stream<T>;"))),(0,a.kt)("h4",s({},{id:"parameters-4"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"reversed")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",s({},{id:"streamrange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"streamRange")),(0,a.kt)("p",null,"Returns a Stream of sorted values of this collection within the given ",(0,a.kt)("inlineCode",{parentName:"p"},"keyRange"),".")),(0,a.kt)("h4",s({},{id:"definition-4"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"streamRange(range: Range<T>, reversed?: boolean): Stream<T>;"))),(0,a.kt)("h4",s({},{id:"parameters-5"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"range")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Range<T>")),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"reversed")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",s({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",s({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const m = SortedSet.of('b', 'd', 'a', 'c');\nconsole.log(m.streamRange({ start: 'b', end: 'c' }).toArray())\n// => ['b', 'c']\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",s({},{id:"streamsliceindex"}),(0,a.kt)("inlineCode",{parentName:"h3"},"streamSliceIndex")),(0,a.kt)("p",null,"Returns a Stream of sorted values of this collection within the given ",(0,a.kt)("inlineCode",{parentName:"p"},"range")," index range.")),(0,a.kt)("h4",s({},{id:"definition-5"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"streamSliceIndex(range: IndexRange, reversed?: boolean): Stream<T>;"))),(0,a.kt)("h4",s({},{id:"parameters-6"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"range")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"IndexRange")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"the range of values to include in the stream")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"reversed")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",s({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",s({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const m = SortedSet.of('b', 'd', 'a', 'c');\nconsole.log(m.streamSliceIndex({ start: 1, amount: 2 }).toArray())\n// => ['b', 'c']\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",s({},{id:"take"}),(0,a.kt)("inlineCode",{parentName:"h3"},"take")),(0,a.kt)("p",null,"Returns a SortedSet containing the the first ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," of value of this SortedSet.")),(0,a.kt)("h4",s({},{id:"definition-6"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"take(amount: number): "),(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/sorted/SortedSet/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h4",s({},{id:"parameters-7"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"amount")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"the amount of elements to keep")))),(0,a.kt)("admonition",s({},{title:"note",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"a negative ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," takes the last values instead of the first, e.g. -2 is the last 2 elements")),(0,a.kt)("admonition",s({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const m = SortedSet.of('b', 'd', 'a', 'c').asNormal();\nconsole.log(m.take(2).toArray())\n// => ['a', 'b']\nconsole.log(m.take(-2).toArray())\n// => ['c', 'd']\n")))))}y.isMDXComponent=!0}}]);