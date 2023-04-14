"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[70284],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},o="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),o=m(a),s=r,N=o["".concat(p,".").concat(s)]||o[s]||k[s]||l;return a?n.createElement(N,i(i({ref:t},u),{},{components:a})):n.createElement(N,i({ref:t},u))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[o]="string"==typeof e?e:r,i[1]=d;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},11717:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>g,frontMatter:()=>N,metadata:()=>v,toc:()=>h});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,o=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(d)for(var a of d(t))m.call(t,a)&&u(e,a,t[a]);return e},k=(e,t)=>l(e,i(t)),s=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a};const N={title:"LeafBuilder<T>",slug:"/rimbu/list/custom/LeafBuilder/interface"},c="interface LeafBuilder<T>",v={unversionedId:"rimbu_list/custom/LeafBuilder.interface",id:"rimbu_list/custom/LeafBuilder.interface",title:"LeafBuilder<T>",description:"undocumented",source:"@site/api/rimbu_list/custom/LeafBuilder.interface.mdx",sourceDirName:"rimbu_list/custom",slug:"/rimbu/list/custom/LeafBuilder/interface",permalink:"/api/rimbu/list/custom/LeafBuilder/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"LeafBuilder<T>",slug:"/rimbu/list/custom/LeafBuilder/interface"},sidebar:"defaultSidebar",previous:{title:"LeafBlockBuilder<T>",permalink:"/api/rimbu/list/custom/LeafBlockBuilder/class"},next:{title:"LeafTree<T>",permalink:"/api/rimbu/list/custom/LeafTree/class"}},f={},h=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>length</code>",id:"length",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>append</code>",id:"append",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>build</code>",id:"build",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>buildMap</code>",id:"buildmap",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>forEach</code>",id:"foreach",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>get</code>",id:"get",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"<code>insert</code>",id:"insert",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>normalized</code>",id:"normalized",level:3},{value:"Definition",id:"definition-7",level:4},{value:"<code>prepend</code>",id:"prepend",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>remove</code>",id:"remove",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"<code>updateAt</code>",id:"updateat",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters-7",level:4}],b={toc:h},y="wrapper";function g(e){var t=e,{components:a}=t,r=s(t,["components"]);return(0,n.kt)(y,k(o(o({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"interface-leafbuildert"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface LeafBuilder<T>")),(0,n.kt)("p",null,"undocumented"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/list/custom/BuilderBase/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BuilderBase<T,C>"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/list/custom/LeafTreeBuilder/class"}),(0,n.kt)("inlineCode",{parentName:"a"},"LeafTreeBuilder<T>")),", ",(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/list/custom/LeafBlockBuilder/class"}),(0,n.kt)("inlineCode",{parentName:"a"},"LeafBlockBuilder<T>"))),(0,n.kt)("h2",o({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"undocumented")))),(0,n.kt)("h2",o({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"length"}),(0,n.kt)("inlineCode",{parentName:"h3"},"length")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly length: number;"))),(0,n.kt)("h4",o({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/list/custom/BuilderBase/interface#length"}),"BuilderBase.length"))),(0,n.kt)("h2",o({},{id:"methods"}),"Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"append"}),(0,n.kt)("inlineCode",{parentName:"h3"},"append")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"append(value: C): void;"))),(0,n.kt)("h4",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"overrides-1"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/list/custom/BuilderBase/interface#append"}),"BuilderBase.append"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"build"}),(0,n.kt)("inlineCode",{parentName:"h3"},"build")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"build(): List<T>;"))),(0,n.kt)("h4",o({},{id:"overrides-2"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/list/custom/BuilderBase/interface#build"}),"BuilderBase.build"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"buildmap"}),(0,n.kt)("inlineCode",{parentName:"h3"},"buildMap")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"buildMap<T2>(f: (value: T) => T2): List<T2>;"))),(0,n.kt)("h4",o({},{id:"type-parameters-1"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"T2"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"parameters-1"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"f")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(value: T) => T2")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"overrides-3"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/list/custom/BuilderBase/interface#buildMap"}),"BuilderBase.buildMap"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"foreach"}),(0,n.kt)("inlineCode",{parentName:"h3"},"forEach")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"forEach(f: (value: T, index: number, halt: () => void) => void, state?: "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/common/TraverseState/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"TraverseState")),(0,n.kt)("inlineCode",{parentName:"p"},"): void;"))),(0,n.kt)("h4",o({},{id:"parameters-2"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"f")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(value: T, index: number, halt: () => void) => void")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"state")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/api/rimbu/common/TraverseState/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"TraverseState"))),(0,n.kt)("td",o({parentName:"tr"},{align:null})))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"get"}),(0,n.kt)("inlineCode",{parentName:"h3"},"get")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-5"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"get<O>(index: number, otherwise?: "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,n.kt)("inlineCode",{parentName:"p"},"<O>): T "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," O;"))),(0,n.kt)("h4",o({},{id:"type-parameters-2"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"O"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"parameters-3"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"index")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"otherwise")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/api/rimbu/common/OptLazy/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,n.kt)("inlineCode",{parentName:"td"},"<O>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"overrides-4"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/list/custom/BuilderBase/interface#get"}),"BuilderBase.get"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"insert"}),(0,n.kt)("inlineCode",{parentName:"h3"},"insert")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-6"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"insert(index: number, value: T): void;"))),(0,n.kt)("h4",o({},{id:"parameters-4"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"index")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"overrides-5"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/list/custom/BuilderBase/interface#insert"}),"BuilderBase.insert"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"normalized"}),(0,n.kt)("inlineCode",{parentName:"h3"},"normalized")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-7"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"normalized(): "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/list/custom/LeafBuilder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"LeafBuilder")),(0,n.kt)("inlineCode",{parentName:"p"},"<T> "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," undefined;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"prepend"}),(0,n.kt)("inlineCode",{parentName:"h3"},"prepend")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-8"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"prepend(value: C): void;"))),(0,n.kt)("h4",o({},{id:"parameters-5"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"overrides-6"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/list/custom/BuilderBase/interface#prepend"}),"BuilderBase.prepend"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"remove"}),(0,n.kt)("inlineCode",{parentName:"h3"},"remove")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-9"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"remove(index: number): T;"))),(0,n.kt)("h4",o({},{id:"parameters-6"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"index")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"overrides-7"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/list/custom/BuilderBase/interface#remove"}),"BuilderBase.remove"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"updateat"}),(0,n.kt)("inlineCode",{parentName:"h3"},"updateAt")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-10"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"updateAt<O>(index: number, update: "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/common/Update/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Update")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>, otherwise?: "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,n.kt)("inlineCode",{parentName:"p"},"<O>): T "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," O;"))),(0,n.kt)("h4",o({},{id:"type-parameters-3"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"O"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"parameters-7"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"index")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"update")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/api/rimbu/common/Update/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Update")),(0,n.kt)("inlineCode",{parentName:"td"},"<T>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"otherwise")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/api/rimbu/common/OptLazy/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,n.kt)("inlineCode",{parentName:"td"},"<O>")),(0,n.kt)("td",o({parentName:"tr"},{align:null})))))))}g.isMDXComponent=!0}}]);