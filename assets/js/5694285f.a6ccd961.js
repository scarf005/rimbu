"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[20285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),o=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=o(n),k=r,N=u["".concat(m,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(N,i(i({ref:t},d),{},{components:n})):a.createElement(N,i({ref:t},d))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},99335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>v,frontMatter:()=>N,metadata:()=>y,toc:()=>f});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))o.call(t,n)&&d(e,n,t[n]);return e},s=(e,t)=>l(e,i(t)),k=(e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&o.call(e,a)&&(n[a]=e[a]);return n};const N={title:"ListFactory",slug:"/rimbu/list/custom/ListFactory/interface"},c="interface ListFactory",y={unversionedId:"rimbu_list/custom/ListFactory.interface",id:"rimbu_list/custom/ListFactory.interface",title:"ListFactory",description:"undocumented",source:"@site/api/rimbu_list/custom/ListFactory.interface.mdx",sourceDirName:"rimbu_list/custom",slug:"/rimbu/list/custom/ListFactory/interface",permalink:"/api/rimbu/list/custom/ListFactory/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"ListFactory",slug:"/rimbu/list/custom/ListFactory/interface"},sidebar:"defaultSidebar",previous:{title:"ListCreators",permalink:"/api/rimbu/list/custom/ListCreators/interface"},next:{title:"NonLeaf<T,C>",permalink:"/api/rimbu/list/custom/NonLeaf/interface"}},h={},f=[{value:"Methods",id:"methods",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"Type parameters",id:"type-parameters",level:4},{value:"<code>empty</code>",id:"empty",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"<code>flatten</code>",id:"flatten",level:3},{value:"Definitions",id:"definitions",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>from</code>",id:"from",level:3},{value:"Definitions",id:"definitions-1",level:4},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>fromString</code>",id:"fromstring",level:3},{value:"Definitions",id:"definitions-2",level:4},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>of</code>",id:"of",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Type parameters",id:"type-parameters-5",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>reducer</code>",id:"reducer",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Type parameters",id:"type-parameters-6",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"<code>unzip</code>",id:"unzip",level:3},{value:"Definitions",id:"definitions-3",level:4},{value:"Type parameters",id:"type-parameters-7",level:4},{value:"Parameters",id:"parameters-5",level:4}],g={toc:f},b="wrapper";function v(e){var t=e,{components:n}=t,r=k(t,["components"]);return(0,a.kt)(b,s(u(u({},g),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"interface-listfactory"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface ListFactory")),(0,a.kt)("p",null,"undocumented"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/list/custom/ListCreators/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"ListCreators"))),(0,a.kt)("h2",u({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"builder"}),(0,a.kt)("inlineCode",{parentName:"h3"},"builder")),(0,a.kt)("p",null,"Returns an empty List Builder based on this context.")),(0,a.kt)("h4",u({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"builder<T>(): List.Builder<T>;"))),(0,a.kt)("h4",u({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the List element type")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"List.builder<number>()   // => List.Builder<number>\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"empty"}),(0,a.kt)("inlineCode",{parentName:"h3"},"empty")),(0,a.kt)("p",null,"Returns the (singleton) empty List for this context with given value type.")),(0,a.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"empty<T>(): List<T>;"))),(0,a.kt)("h4",u({},{id:"type-parameters-1"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the element type")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"List.empty<number>()    // => List<number>\nList.empty<string>()    // => List<string>\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"flatten"}),(0,a.kt)("inlineCode",{parentName:"h3"},"flatten")),(0,a.kt)("p",null,"Returns, if T is a valid ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamSource"),", the result of concatenating all streamable elements of the given sources.")),(0,a.kt)("h4",u({},{id:"definitions"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"flatten<T extends StreamSource.NonEmpty<unknown>>(source: StreamSource.NonEmpty<T>): T extends StreamSource.NonEmpty<infer S> ? List.NonEmpty<S> : never;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"flatten<T extends StreamSource<unknown>>(source: StreamSource<T>): T extends StreamSource<infer S> ? List<S> : never;"))),(0,a.kt)("h4",u({},{id:"type-parameters-2"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"StreamSource.NonEmpty<unknown>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the element type")))),(0,a.kt)("h4",u({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"source")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"StreamSource.NonEmpty<T>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a ",(0,a.kt)("inlineCode",{parentName:"td"},"StreamSource")," containing ",(0,a.kt)("inlineCode",{parentName:"td"},"StreamSource")," instances of values to concatenate")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const m = List.of([1, 2], [3, 4, 5])\nList.flatten(m).toArray() // => [1, 2, 3, 4, 5]\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"from"}),(0,a.kt)("inlineCode",{parentName:"h3"},"from")),(0,a.kt)("p",null,"Returns an immutable set of this collection type and context, containing the given values in ",(0,a.kt)("inlineCode",{parentName:"p"},"source"),".")),(0,a.kt)("h4",u({},{id:"definitions-1"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"from<T>(...sources: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<StreamSource.NonEmpty<T>>): List.NonEmpty<T>;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"from<T>(...sources: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<StreamSource<T>>): List<T>;"))),(0,a.kt)("h4",u({},{id:"type-parameters-3"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the element type")))),(0,a.kt)("h4",u({},{id:"parameters-1"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"sources")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,a.kt)("inlineCode",{parentName:"td"},"<StreamSource.NonEmpty<T>>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a non-empty array of ",(0,a.kt)("inlineCode",{parentName:"td"},"StreamSource")," instances containing values")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"List.from([1, 2, 3], [4, 5]).toArray()\n// => [1, 2, 3, 4, 5]\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"fromstring"}),(0,a.kt)("inlineCode",{parentName:"h3"},"fromString")),(0,a.kt)("p",null,"Returns a List of characters from the given strings in ",(0,a.kt)("inlineCode",{parentName:"p"},"sources"),".")),(0,a.kt)("h4",u({},{id:"definitions-2"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fromString<S extends string>(...sources: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<"),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/StringNonEmpty/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StringNonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<S>>): List.NonEmpty<string>;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fromString(...sources: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<string>): List<string>;"))),(0,a.kt)("h4",u({},{id:"type-parameters-4"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"S"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the source string type")))),(0,a.kt)("h4",u({},{id:"parameters-2"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"sources")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,a.kt)("inlineCode",{parentName:"td"},"<"),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/StringNonEmpty/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StringNonEmpty")),(0,a.kt)("inlineCode",{parentName:"td"},"<S>>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a non-empty array containing strings")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"List.fromString('abc').toArray()   // => ['a', 'b', 'c']\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"of"}),(0,a.kt)("inlineCode",{parentName:"h3"},"of")),(0,a.kt)("p",null,"Returns an immutable set of this type and context, containing the given ",(0,a.kt)("inlineCode",{parentName:"p"},"values"),".")),(0,a.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"of<T>(...values: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>): List.NonEmpty<T>;"))),(0,a.kt)("h4",u({},{id:"type-parameters-5"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the element type")))),(0,a.kt)("h4",u({},{id:"parameters-3"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"values")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,a.kt)("inlineCode",{parentName:"td"},"<T>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a non-empty array of values")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"List.of(1, 2, 3).toArray()   // => [1, 2, 3]\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"reducer"}),(0,a.kt)("inlineCode",{parentName:"h3"},"reducer")),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Reducer")," that appends received items to a List and returns the List as a result. When a ",(0,a.kt)("inlineCode",{parentName:"p"},"source")," is given, the reducer will first create a List from the source, and then append elements to it.")),(0,a.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"reducer<T>(source?: StreamSource<T>): Reducer<T, List<T>>;"))),(0,a.kt)("h4",u({},{id:"type-parameters-6"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the element type")))),(0,a.kt)("h4",u({},{id:"parameters-4"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"source")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"StreamSource<T>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"(optional) an initial source of elements to append to")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const someList = List.of(1, 2, 3);\nconst result = Stream.range({ start: 20, amount: 5 }).reduce(List.reducer(someList))\nresult.toArray()   // => [1, 2, 3, 20, 21, 22, 23, 24]\n"))),(0,a.kt)("admonition",u({},{title:"note",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"uses a List builder under the hood. If the given ",(0,a.kt)("inlineCode",{parentName:"p"},"source")," is a List in the same context, it will directly call ",(0,a.kt)("inlineCode",{parentName:"p"},".toBuilder()"),"."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"unzip"}),(0,a.kt)("inlineCode",{parentName:"h3"},"unzip")),(0,a.kt)("p",null,"Returns an array of Lists, where each list contains the values of the corresponding index of tuple T.")),(0,a.kt)("h4",u({},{id:"definitions-3"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"unzip<T extends readonly unknown[] & {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"length: L;"),(0,a.kt)("br",null),"\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}, L extends number>(source: StreamSource.NonEmpty<T>, length: L): {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"[K in keyof T]: List.NonEmpty<T[K]>;"),(0,a.kt)("br",null),"\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"};"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"unzip<T extends readonly unknown[] & {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"length: L;"),(0,a.kt)("br",null),"\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}, L extends number>(source: StreamSource<T>, length: L): {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"[K in keyof T]: List<T[K]>;"),(0,a.kt)("br",null),"\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"};"))),(0,a.kt)("h4",u({},{id:"type-parameters-7"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"readonly unknown[] & {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"length: L;"),(0,a.kt)("br",null),"\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the StreamSource tuple element type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"L"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the tuple element length")))),(0,a.kt)("h4",u({},{id:"parameters-5"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"source")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"StreamSource.NonEmpty<T>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a ",(0,a.kt)("inlineCode",{parentName:"td"},"StreamSource")," containing tuples of type T to unzip")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"length")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"L")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the length of the tuples in type T")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const m = List.of([1, 'a'], [2, 'b'])\nList.unzip(m)  // => [List.NonEmpty<number>, List.NonEmpty<string>]\n")))))}v.isMDXComponent=!0}}]);