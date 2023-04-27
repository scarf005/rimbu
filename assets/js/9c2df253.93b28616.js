"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[79151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=u(n),s=l,c=m["".concat(o,".").concat(s)]||m[s]||k[s]||i;return n?a.createElement(c,r(r({ref:t},p),{},{components:n})):a.createElement(c,r({ref:t},p))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=s;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[m]="string"==typeof e?e:l,r[1]=d;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},55239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>y,default:()=>g,frontMatter:()=>c,metadata:()=>v,toc:()=>f});var a=n(3905),l=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&p(e,n,t[n]);if(d)for(var n of d(t))u.call(t,n)&&p(e,n,t[n]);return e},k=(e,t)=>i(e,r(t)),s=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n};const c={title:"BiMapEmpty<K,V>",slug:"/rimbu/bimap/custom/BiMapEmpty/class"},y="class BiMapEmpty<K,V>",v={unversionedId:"rimbu_bimap/custom/BiMapEmpty.class",id:"rimbu_bimap/custom/BiMapEmpty.class",title:"BiMapEmpty<K,V>",description:"undocumented",source:"@site/api/rimbu_bimap/custom/BiMapEmpty.class.mdx",sourceDirName:"rimbu_bimap/custom",slug:"/rimbu/bimap/custom/BiMapEmpty/class",permalink:"/api/rimbu/bimap/custom/BiMapEmpty/class",draft:!1,tags:[],version:"current",frontMatter:{title:"BiMapEmpty<K,V>",slug:"/rimbu/bimap/custom/BiMapEmpty/class"},sidebar:"defaultSidebar",previous:{title:"BiMapCreators",permalink:"/api/rimbu/bimap/custom/BiMapCreators/interface"},next:{title:"BiMapFactory<UK,UV>",permalink:"/api/rimbu/bimap/custom/BiMapFactory/interface"}},N={},f=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>keyValueMap</code>",id:"keyvaluemap",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>size</code>",id:"size",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>valueKeyMap</code>",id:"valuekeymap",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>addEntries</code>",id:"addentries",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>addEntry</code>",id:"addentry",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>getKey</code>",id:"getkey",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>getValue</code>",id:"getvalue",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>hasKey</code>",id:"haskey",level:3},{value:"Definition",id:"definition-8",level:4},{value:"<code>hasValue</code>",id:"hasvalue",level:3},{value:"Definition",id:"definition-9",level:4},{value:"<code>removeKey</code>",id:"removekey",level:3},{value:"Definition",id:"definition-10",level:4},{value:"<code>removeKeyAndGet</code>",id:"removekeyandget",level:3},{value:"Definition",id:"definition-11",level:4},{value:"<code>removeKeys</code>",id:"removekeys",level:3},{value:"Definition",id:"definition-12",level:4},{value:"<code>removeValue</code>",id:"removevalue",level:3},{value:"Definition",id:"definition-13",level:4},{value:"<code>removeValueAndGet</code>",id:"removevalueandget",level:3},{value:"Definition",id:"definition-14",level:4},{value:"<code>removeValues</code>",id:"removevalues",level:3},{value:"Definition",id:"definition-15",level:4},{value:"<code>set</code>",id:"set",level:3},{value:"Definition",id:"definition-16",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"<code>streamKeys</code>",id:"streamkeys",level:3},{value:"Definition",id:"definition-17",level:4},{value:"<code>streamValues</code>",id:"streamvalues",level:3},{value:"Definition",id:"definition-18",level:4},{value:"<code>toBuilder</code>",id:"tobuilder",level:3},{value:"Definition",id:"definition-19",level:4},{value:"<code>toJSON</code>",id:"tojson",level:3},{value:"Definition",id:"definition-20",level:4},{value:"<code>toString</code>",id:"tostring",level:3},{value:"Definition",id:"definition-21",level:4},{value:"<code>updateKeyAtValue</code>",id:"updatekeyatvalue",level:3},{value:"Definition",id:"definition-22",level:4},{value:"<code>updateValueAtKey</code>",id:"updatevalueatkey",level:3},{value:"Definition",id:"definition-23",level:4}],h={toc:f},b="wrapper";function g(e){var t=e,{components:n}=t,l=s(t,["components"]);return(0,a.kt)(b,k(m(m({},h),l),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"class-bimapemptykv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"class BiMapEmpty<K,V>")),(0,a.kt)("p",null,"undocumented"),(0,a.kt)("h2",m({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Default"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"K"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"any")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"undocumented")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"any")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"undocumented")))),(0,a.kt)("h2",m({},{id:"properties"}),"Properties"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"context"}),(0,a.kt)("inlineCode",{parentName:"h3"},"context")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/bimap/custom/BiMapContext/class"}),(0,a.kt)("inlineCode",{parentName:"a"},"BiMapContext")),(0,a.kt)("inlineCode",{parentName:"p"},"<K, V>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"keyvaluemap"}),(0,a.kt)("inlineCode",{parentName:"h3"},"keyValueMap")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"get keyValueMap(): RMap<K, V>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"size"}),(0,a.kt)("inlineCode",{parentName:"h3"},"size")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-2"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"get size(): 0;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"valuekeymap"}),(0,a.kt)("inlineCode",{parentName:"h3"},"valueKeyMap")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-3"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"get valueKeyMap(): RMap<V, K>;")))),(0,a.kt)("h2",m({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"addentries"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addEntries")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-4"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"addEntries(entries: StreamSource<readonly [K, V]>): BiMap.NonEmpty<K, V>;"))),(0,a.kt)("h4",m({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"entries")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"StreamSource<readonly [K, V]>")),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"addentry"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addEntry")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-5"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"addEntry(entry: readonly [K, V]): BiMap.NonEmpty<K, V>;"))),(0,a.kt)("h4",m({},{id:"parameters-1"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"entry")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"readonly [K, V]")),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"getkey"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getKey")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-6"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getKey<_, O>(value: V, otherwise?: "),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>): O;"))),(0,a.kt)("h4",m({},{id:"type-parameters-1"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"_"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"O"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",m({},{id:"parameters-2"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"value")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"V")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"otherwise")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"td"},"<O>")),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"getvalue"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getValue")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-7"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getValue<_, O>(key: K, otherwise?: "),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>): O;"))),(0,a.kt)("h4",m({},{id:"type-parameters-2"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"_"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"O"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",m({},{id:"parameters-3"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"key")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"K")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"otherwise")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"td"},"<O>")),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"haskey"}),(0,a.kt)("inlineCode",{parentName:"h3"},"hasKey")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-8"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hasKey(): false;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"hasvalue"}),(0,a.kt)("inlineCode",{parentName:"h3"},"hasValue")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-9"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hasValue(): false;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"removekey"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeKey")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-10"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"removeKey(): this;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"removekeyandget"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeKeyAndGet")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-11"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"removeKeyAndGet(): undefined;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"removekeys"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeKeys")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-12"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"removeKeys(): this;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"removevalue"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeValue")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-13"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"removeValue(): this;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"removevalueandget"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeValueAndGet")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-14"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"removeValueAndGet(): undefined;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"removevalues"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeValues")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-15"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"removeValues(): this;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"set"}),(0,a.kt)("inlineCode",{parentName:"h3"},"set")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-16"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"set(key: K, value: V): BiMap.NonEmpty<K, V>;"))),(0,a.kt)("h4",m({},{id:"parameters-4"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"key")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"K")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"value")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"V")),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"streamkeys"}),(0,a.kt)("inlineCode",{parentName:"h3"},"streamKeys")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-17"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"streamKeys(): Stream<K>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"streamvalues"}),(0,a.kt)("inlineCode",{parentName:"h3"},"streamValues")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-18"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"streamValues(): Stream<V>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"tobuilder"}),(0,a.kt)("inlineCode",{parentName:"h3"},"toBuilder")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-19"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"toBuilder(): BiMap.Builder<K, V>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"tojson"}),(0,a.kt)("inlineCode",{parentName:"h3"},"toJSON")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-20"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"toJSON(): "),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/ToJSON/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"ToJSON")),(0,a.kt)("inlineCode",{parentName:"p"},"<(readonly [K, V])[], this['context']['typeTag']>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"tostring"}),(0,a.kt)("inlineCode",{parentName:"h3"},"toString")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-21"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"toString(): string;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"updatekeyatvalue"}),(0,a.kt)("inlineCode",{parentName:"h3"},"updateKeyAtValue")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-22"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"updateKeyAtValue(): this;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"updatevalueatkey"}),(0,a.kt)("inlineCode",{parentName:"h3"},"updateValueAtKey")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition-23"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"updateValueAtKey(): this;")))))}g.isMDXComponent=!0}}]);