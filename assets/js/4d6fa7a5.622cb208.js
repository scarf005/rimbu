"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[83310],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,h=u["".concat(d,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},55999:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>c,default:()=>g,frontMatter:()=>h,metadata:()=>N,toc:()=>f});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&m(e,a,t[a]);return e},s=(e,t)=>l(e,i(t)),k=(e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const h={title:"HashSet.Builder<T>",slug:"/rimbu/hashed/set/HashSet/Builder/interface"},c="interface HashSet.Builder<T>",N={unversionedId:"rimbu_hashed/set/HashSet/Builder.interface",id:"rimbu_hashed/set/HashSet/Builder.interface",title:"HashSet.Builder<T>",description:"A mutable HashSet builder used to efficiently create new immutable instances. See the Set documentation and the HashSet.Builder API documentation",source:"@site/api/rimbu_hashed/set/HashSet/Builder.interface.mdx",sourceDirName:"rimbu_hashed/set/HashSet",slug:"/rimbu/hashed/set/HashSet/Builder/interface",permalink:"/api/rimbu/hashed/set/HashSet/Builder/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"HashSet.Builder<T>",slug:"/rimbu/hashed/set/HashSet/Builder/interface"},sidebar:"defaultSidebar",previous:{title:"HashSet (namespace)",permalink:"/api/rimbu/hashed/set/HashSet/namespace"},next:{title:"HashSet.Context<UT>",permalink:"/api/rimbu/hashed/set/HashSet/Context/interface"}},v={},f=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>isEmpty</code>",id:"isempty",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>size</code>",id:"size",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>add</code>",id:"add",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>addAll</code>",id:"addall",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>build</code>",id:"build",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"<code>forEach</code>",id:"foreach",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>has</code>",id:"has",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>remove</code>",id:"remove",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"<code>removeAll</code>",id:"removeall",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Overrides",id:"overrides-8",level:4}],b={toc:f},y="wrapper";function g(e){var t=e,{components:a}=t,r=k(t,["components"]);return(0,n.kt)(y,s(u(u({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"interface-hashsetbuildert"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface HashSet.Builder<T>")),(0,n.kt)("p",null,"A mutable ",(0,n.kt)("inlineCode",{parentName:"p"},"HashSet")," builder used to efficiently create new immutable instances. See the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/api/rimbu/hashed/HashSet/Builder/interface"}),"HashSet.Builder API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RSetBase.Builder<T,Tp>"))),(0,n.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the value type")))),(0,n.kt)("h2",u({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"isempty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"isEmpty")),(0,n.kt)("p",null,"Returns true if there are no values in the builder.")),(0,n.kt)("h4",u({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly isEmpty: boolean;"))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"HashSet.of(1, 2, 3).toBuilder().isEmpty\n// => false\n"))),(0,n.kt)("h4",u({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Builder/interface#isEmpty"}),"Builder.isEmpty"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"size"}),(0,n.kt)("inlineCode",{parentName:"h3"},"size")),(0,n.kt)("p",null,"Returns the amount of values in the builder.")),(0,n.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly size: number;"))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"HashSet.of(1, 2, 3).toBuilder().size\n// => 3\n"))),(0,n.kt)("h4",u({},{id:"overrides-1"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Builder/interface#size"}),"Builder.size"))),(0,n.kt)("h2",u({},{id:"methods"}),"Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"add"}),(0,n.kt)("inlineCode",{parentName:"h3"},"add")),(0,n.kt)("p",null,"Adds given ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," to the builder.")),(0,n.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"add(value: T): boolean;"))),(0,n.kt)("h4",u({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const s = HashSet.of(1, 2, 3).toBuilder()\ns.add(2)   // => false\ns.add(10)  // => true\n"))),(0,n.kt)("h4",u({},{id:"overrides-2"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Builder/interface#add"}),"Builder.add"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"addall"}),(0,n.kt)("inlineCode",{parentName:"h3"},"addAll")),(0,n.kt)("p",null,"Adds the values in given ",(0,n.kt)("inlineCode",{parentName:"p"},"values")," ",(0,n.kt)("inlineCode",{parentName:"p"},"StreamSource")," to the builder.")),(0,n.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"addAll(values: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>): boolean;"))),(0,n.kt)("h4",u({},{id:"parameters-1"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"values")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"td"},"<T>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const s = HashSet.of(1, 2, 3).toBuilder()\ns.addAll([1, 3])   // => false\ns.addAll([2, 10])  // => true\n"))),(0,n.kt)("h4",u({},{id:"overrides-3"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Builder/interface#addAll"}),"Builder.addAll"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"build"}),(0,n.kt)("inlineCode",{parentName:"h3"},"build")),(0,n.kt)("p",null,"Returns an immutable instance containing the values in this builder.")),(0,n.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"build(): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/WithElem/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithElem")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, T>['normal'];"))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const s = HashSet.of(1, 2, 3).toBuilder()\nconst s2: HashSet<number> = m.build()\n"))),(0,n.kt)("h4",u({},{id:"overrides-4"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Builder/interface#build"}),"Builder.build"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"foreach"}),(0,n.kt)("inlineCode",{parentName:"h3"},"forEach")),(0,n.kt)("p",null,"Performs given function ",(0,n.kt)("inlineCode",{parentName:"p"},"f")," for each value of the builder.")),(0,n.kt)("h4",u({},{id:"definition-5"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"forEach(f: (value: T, index: number, halt: () => void) => void, state?: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/TraverseState/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"TraverseState")),(0,n.kt)("inlineCode",{parentName:"p"},"): void;"))),(0,n.kt)("h4",u({},{id:"parameters-2"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"f")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(value: T, index: number, halt: () => void) => void")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the function to perform for each element, receiving:",(0,n.kt)("br",null)," - ",(0,n.kt)("inlineCode",{parentName:"td"},"value"),": the next element",(0,n.kt)("br",null)," - ",(0,n.kt)("inlineCode",{parentName:"td"},"index"),": the index of the element",(0,n.kt)("br",null)," - ",(0,n.kt)("inlineCode",{parentName:"td"},"halt"),": a function that, if called, ensures that no new elements are passed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"state")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/TraverseState/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"TraverseState"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",u({},{title:"throws",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"RibuError.ModifiedBuilderWhileLoopingOverItError if the builder is modified while looping over it")),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"HashSet.of(1, 2, 3).toBuilder.forEach((value, i, halt) => {\nconsole.log([value, i]);\nif (i >= 1) halt();\n})\n// => logs [1, 0]  [2, 1]\n"))),(0,n.kt)("admonition",u({},{title:"note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"O(N)")),(0,n.kt)("h4",u({},{id:"overrides-5"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Builder/interface#forEach"}),"Builder.forEach"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"has"}),(0,n.kt)("inlineCode",{parentName:"h3"},"has")),(0,n.kt)("p",null,"Returns true if the given ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," is present in the builder.")),(0,n.kt)("h4",u({},{id:"definition-6"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"has<U = T>(value: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/RelatedTo/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"RelatedTo")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, U>): boolean;"))),(0,n.kt)("h4",u({},{id:"type-parameters-1"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"U"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-3"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/RelatedTo/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"RelatedTo")),(0,n.kt)("inlineCode",{parentName:"td"},"<T, U>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the value to look for")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const s = HashSet.of(1, 2, 3).toBuilder()\ns.has(2)   // => true\ns.has(10)  // => false\n"))),(0,n.kt)("h4",u({},{id:"overrides-6"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Builder/interface#has"}),"Builder.has"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"remove"}),(0,n.kt)("inlineCode",{parentName:"h3"},"remove")),(0,n.kt)("p",null,"Remove the given ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," from the builder.")),(0,n.kt)("h4",u({},{id:"definition-7"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"remove<U = T>(value: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/RelatedTo/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"RelatedTo")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, U>): boolean;"))),(0,n.kt)("h4",u({},{id:"type-parameters-2"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"U"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-4"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/RelatedTo/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"RelatedTo")),(0,n.kt)("inlineCode",{parentName:"td"},"<T, U>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const s = HashSet.of(1, 2, 3).toBuilder()\ns.remove(10)  // => false\ns.remove(2)   // => true\n"))),(0,n.kt)("h4",u({},{id:"overrides-7"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Builder/interface#remove"}),"Builder.remove"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"removeall"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeAll")),(0,n.kt)("p",null,"Removes the values in given ",(0,n.kt)("inlineCode",{parentName:"p"},"values")," ",(0,n.kt)("inlineCode",{parentName:"p"},"StreamSource")," from this builder.")),(0,n.kt)("h4",u({},{id:"definition-8"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"removeAll<U = T>(values: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/RelatedTo/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"RelatedTo")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, U>>): boolean;"))),(0,n.kt)("h4",u({},{id:"type-parameters-3"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"U"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-5"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"values")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"td"},"<"),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/RelatedTo/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"RelatedTo")),(0,n.kt)("inlineCode",{parentName:"td"},"<T, U>>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"a ",(0,n.kt)("inlineCode",{parentName:"td"},"StreamSource")," of values")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const s = HashSet.of(1, 2, 3).toBuilder()\ns.removeAll([1, 3])   // => false\ns.removeAll([2, 10])  // => true\n"))),(0,n.kt)("h4",u({},{id:"overrides-8"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Builder/interface#removeAll"}),"Builder.removeAll"))))}g.isMDXComponent=!0}}]);