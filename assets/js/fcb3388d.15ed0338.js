"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[25927],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=m(a),k=r,N=u["".concat(o,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(N,i(i({ref:t},d),{},{components:a})):n.createElement(N,i({ref:t},d))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},15949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>C,frontMatter:()=>N,metadata:()=>b,toc:()=>h});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&d(e,a,t[a]);if(p)for(var a of p(t))m.call(t,a)&&d(e,a,t[a]);return e},s=(e,t)=>l(e,i(t)),k=(e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a};const N={title:"TableBase.Factory<Tp,UR,UC>",slug:"/rimbu/table/custom/TableBase/Factory/interface"},c="interface TableBase.Factory<Tp,UR,UC>",b={unversionedId:"rimbu_table/custom/TableBase/Factory.interface",id:"rimbu_table/custom/TableBase/Factory.interface",title:"TableBase.Factory<Tp,UR,UC>",description:"undocumented",source:"@site/api/rimbu_table/custom/TableBase/Factory.interface.mdx",sourceDirName:"rimbu_table/custom/TableBase",slug:"/rimbu/table/custom/TableBase/Factory/interface",permalink:"/api/rimbu/table/custom/TableBase/Factory/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"TableBase.Factory<Tp,UR,UC>",slug:"/rimbu/table/custom/TableBase/Factory/interface"},sidebar:"defaultSidebar",previous:{title:"TableBase.Context<UR,UC,Tp>",permalink:"/api/rimbu/table/custom/TableBase/Context/interface"},next:{title:"TableBase.NonEmpty<R,C,V,Tp>",permalink:"/api/rimbu/table/custom/TableBase/NonEmpty/interface"}},y={},h=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"<code>empty</code>",id:"empty",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"<code>from</code>",id:"from",level:3},{value:"Definitions",id:"definitions",level:4},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>of</code>",id:"of",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>reducer</code>",id:"reducer",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Type parameters",id:"type-parameters-5",level:4},{value:"Parameters",id:"parameters-2",level:4}],g={toc:h},f="wrapper";function C(e){var t=e,{components:a}=t,r=k(t,["components"]);return(0,n.kt)(f,s(u(u({},g),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"interface-tablebasefactorytpuruc"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface TableBase.Factory<Tp,UR,UC>")),(0,n.kt)("p",null,"undocumented"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/custom/HashTableSortedColumnCreators/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"HashTableSortedColumnCreators")),", ",(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/custom/SortedTableHashColumnCreators/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedTableHashColumnCreators")),", ",(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"TableBase.Context<UR,UC,Tp>")),", ",(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/custom/HashTableHashColumnCreators/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"HashTableHashColumnCreators")),", ",(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/custom/SortedTableSortedColumnCreators/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedTableSortedColumnCreators"))),(0,n.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Tp"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/table/custom/TableBase/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"TableBase.Types"))),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"undocumented")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"UR"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"unknown")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"undocumented")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"UC"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"unknown")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"undocumented")))),(0,n.kt)("h2",u({},{id:"methods"}),"Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"builder"}),(0,n.kt)("inlineCode",{parentName:"h3"},"builder")),(0,n.kt)("p",null,"Returns an empty builder instance for this type of collection and context.")),(0,n.kt)("h4",u({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"builder<R extends UR, C extends UC, V>(): WithRow<Tp, R, C, V>['builder'];"))),(0,n.kt)("h4",u({},{id:"type-parameters-1"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"R"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UR")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"C"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UC")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"HashTableHashColumn.builder<number, string, boolean>()    // => HashTableHashColumn.Builder<number, string, boolean>\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"empty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"empty")),(0,n.kt)("p",null,"Returns the (singleton) empty instance of this type and context with given key and value types.")),(0,n.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"empty<R extends UR, C extends UC, V>(): WithRow<Tp, R, C, V>['normal'];"))),(0,n.kt)("h4",u({},{id:"type-parameters-2"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"R"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UR")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"C"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UC")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"HashTableHashColumn.empty<number, string, boolean>()    // => HashTableHashColumn<number, string, boolean>\nHashTableHashColumn.empty<string, boolean, number>()    // => HashTableHashColumn<string, boolean, number>\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"from"}),(0,n.kt)("inlineCode",{parentName:"h3"},"from")),(0,n.kt)("p",null,"Returns an immutable table of this type and context, containing the entries in the given ",(0,n.kt)("inlineCode",{parentName:"p"},"sources")," ",(0,n.kt)("inlineCode",{parentName:"p"},"StreamSource")," instances.")),(0,n.kt)("h4",u({},{id:"definitions"}),"Definitions"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"from<R extends UR, C extends UC, V>(...sources: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<StreamSource.NonEmpty<readonly [R, C, V]>>): WithRow<Tp, R, C, V>['nonEmpty'];"))),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"from<R extends UR, C extends UC, V>(...sources: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<StreamSource<readonly [R, C, V]>>): WithRow<Tp, R, C, V>['normal'];"))),(0,n.kt)("h4",u({},{id:"type-parameters-3"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"R"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UR")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"C"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UC")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"sources")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<StreamSource.NonEmpty<readonly [R, C, V]>>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"an array of ",(0,n.kt)("inlineCode",{parentName:"td"},"StreamSource")," instances containing row-column-value entries")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"HashTableHashColumn.from([[1, 2, 3], [1, 4, 5]])    // => HashTableHashColumn.NonEmpty<number, number, number>\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"of"}),(0,n.kt)("inlineCode",{parentName:"h3"},"of")),(0,n.kt)("p",null,"Returns an immutable multimap of this collection type and context, containing the given ",(0,n.kt)("inlineCode",{parentName:"p"},"entries"),".")),(0,n.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"of<R extends UR, C extends UC, V>(...entries: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<readonly [R, C, V]>): WithRow<Tp, R, C, V>['nonEmpty'];"))),(0,n.kt)("h4",u({},{id:"type-parameters-4"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"R"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UR")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"C"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UC")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-1"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"entries")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<readonly [R, C, V]>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"a non-empty array of row-column-value entries")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"HashTableHashColumn.of([1, 2, 3], [1, 4, 5])    // => HashTableHashColumn.NonEmpty<number, number, number>\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"reducer"}),(0,n.kt)("inlineCode",{parentName:"h3"},"reducer")),(0,n.kt)("p",null,"Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Reducer")," that adds received tuples to a Table and returns the Table as a result. When a ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," is given, the reducer will first create a Table from the source, and then add tuples to it.")),(0,n.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"reducer<R extends UR, C extends UC, V>(source?: StreamSource<readonly [R, C, V]>): Reducer<[R, C, V], WithRow<Tp, R, C, V>['normal']>;"))),(0,n.kt)("h4",u({},{id:"type-parameters-5"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"R"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UR")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"C"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UC")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-2"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"source")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"StreamSource<readonly [R, C, V]>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"(optional) an initial source of tuples to add to")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const someSource = Table.of([1, 'a', true], [2, 'b', false]);\nconst result = Stream.of([1, 'c', true], [3, 'a', false]).reduce(Table.reducer(someSource))\nresult.toArray()   // => [[1, 'c'], [2, 'b'], [3, 'a']]\n"))),(0,n.kt)("admonition",u({},{title:"note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"uses a builder under the hood. If the given ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," is a Table in the same context, it will directly call ",(0,n.kt)("inlineCode",{parentName:"p"},".toBuilder()"),"."))))}C.isMDXComponent=!0}}]);