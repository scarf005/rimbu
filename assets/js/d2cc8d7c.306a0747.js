"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[97049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28187:(e,t,n)=>{n.d(t,{G:()=>i});var r=n(67294);function a(e){return e.replace(/</g,"%3C").replace(/>/g,"%3E")}function i(e){const t=a(`https://g.gravizo.com/svg?\n  @startuml;\n  skinparam monochrome true;\n  skinparam backgroundColor none;\n  skinparam classBackgroundColor darkslategrey;\n  skinparam classBorderColor gray;\n  skinparam classFontColor lightgray;\n  skinparam classStereotypeFontColor darkgray;\n  skinparam arrowColor lightgray;\n  skinparam linetype ortho;\n  ${e.contents}\n  @enduml;`);return r.createElement("img",{src:t,className:"diagram"})}},88508:(e,t,n)=>{n.d(t,{r:()=>f});var r=n(67294),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>i(e,l(t));const d={previewwindow:"console",view:"split",editorsize:"60",codemirror:"1",moduleview:"1"};function f(e){const t=function(e){let t="",n="";for(const r in e)t+=`${n}${r}=${e[r]}`,n="&";return""===t?"":`?${t}`}(m(c({},d),{module:`/src/${e.path}`})),n=`https://codesandbox.io/embed/github/vitoke/rimbu-sandbox/tree/main${t}`,a=`https://codesandbox.io/s/github/vitoke/rimbu-sandbox/tree/main${t}`;return r.createElement(r.Fragment,null,r.createElement("a",{target:"_blank",className:"button button--secondary",href:a,style:{marginBottom:10}},"Open file below in new window with full type-check"),r.createElement("iframe",{src:n,className:"codesandbox-iframe",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}},63304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>O,frontMatter:()=>k,metadata:()=>g,toc:()=>S});var r=n(3905),a=n(28187);const i="\ninterface Streamable<T>;\n\ninterface VariantMultiSet<T>;\nabstract MultiSet<T>;\nclass HashMultiSet<T>;\nclass SortedMultiSet<T>;\n\nStreamable <|.. VariantMultiSet;\nVariantMultiSet <|-- MultiSet;\nMultiSet <|-- HashMultiSet;\nMultiSet <|-- SortedMultiSet;\n";var l=n(88508),o=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&d(e,n,t[n]);return e},b=(e,t)=>s(e,u(t)),h=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n};const k={id:"multiset",slug:"./multiset",title:"MultiSet"},y="MultiSet",g={unversionedId:"collections/multiset",id:"collections/multiset",title:"MultiSet",description:"A Rimbu MultiSet is an immutable Set-like structure where each unique element can be added multiple times. Each element in the MultiSet occurs one or more times. The MultiSet keeps track of the amount of times an element was added.",source:"@site/docs/collections/multiset.mdx",sourceDirName:"collections",slug:"/collections/multiset",permalink:"/docs/collections/multiset",draft:!1,editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/collections/multiset.mdx",tags:[],version:"current",frontMatter:{id:"multiset",slug:"./multiset",title:"MultiSet"},sidebar:"sidebar",previous:{title:"MultiMap",permalink:"/docs/collections/multimap"},next:{title:"Set",permalink:"/docs/collections/set"}},v={},S=[{value:"When to use",id:"when-to-use",level:2},{value:"Exports",id:"exports",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Usage",id:"usage",level:2},{value:"Creation",id:"creation",level:3},{value:"Query",id:"query",level:3},{value:"Manipulation",id:"manipulation",level:3},{value:"Builder",id:"builder",level:3}],w={toc:S},M="wrapper";function O(e){var t=e,{components:n}=t,o=h(t,["components"]);return(0,r.kt)(M,b(f(f({},w),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",f({},{id:"multiset"}),"MultiSet"),(0,r.kt)("p",null,"A Rimbu MultiSet is an immutable Set-like structure where each unique element can be added multiple times. Each element in the MultiSet occurs one or more times. The MultiSet keeps track of the amount of times an element was added."),(0,r.kt)("h2",f({},{id:"when-to-use"}),"When to use"),(0,r.kt)("p",null,"The MultiSet is useful for use cases that involve some kind of frequency count. For example, for a piece of text, to split it in words and count the amount of times each word occurs. Or, for a set of events, to count the frequencies of those events."),(0,r.kt)("admonition",f({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiSet<T>")," is implemented on top of an ",(0,r.kt)("inlineCode",{parentName:"p"},"RMap<T, number>")," map. The ",(0,r.kt)("inlineCode",{parentName:"p"},".countMap")," property provides direct access to this map, and sometimes may have more convenient ways to access information about the contained data.")),(0,r.kt)("h2",f({},{id:"exports"}),"Exports"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@rimbu/core")," package exports the following ",(0,r.kt)("em",{parentName:"p"},"abstract")," MultiSet TypeScript types:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("a",f({parentName:"td"},{href:"/api/rimbu/multiset/VariantMultiSet/namespace"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMultiSet<T>"))),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"a type-variant MultiSet with elements of type T")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("a",f({parentName:"td"},{href:"/api/rimbu/multiset/MultiSet/namespace"}),(0,r.kt)("inlineCode",{parentName:"a"},"MultiSet<T>"))),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"a generic MultiSet with elements of type T")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@rimbu/core")," package exports the following ",(0,r.kt)("em",{parentName:"p"},"concrete")," Multiset types:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("a",f({parentName:"td"},{href:"/api/rimbu/multiset/HashMultiSet/namespace"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashMultiSet<T>"))),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"a MultiSet with hashed elements of type T")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("a",f({parentName:"td"},{href:"/api/rimbu/multiset/SortedMultiSet/namespace"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedMultiSet<T>"))),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"a MultiSet with sorted elements of type T")))),(0,r.kt)("h2",f({},{id:"inheritance"}),"Inheritance"),(0,r.kt)(a.G,{contents:i,mdxType:"UmlGraph"}),(0,r.kt)("h2",f({},{id:"usage"}),"Usage"),(0,r.kt)("h3",f({},{id:"creation"}),"Creation"),(0,r.kt)(l.r,{path:"multiset/create.ts",mdxType:"SandBox"}),(0,r.kt)("h3",f({},{id:"query"}),"Query"),(0,r.kt)(l.r,{path:"multiset/query.ts",mdxType:"SandBox"}),(0,r.kt)("h3",f({},{id:"manipulation"}),"Manipulation"),(0,r.kt)(l.r,{path:"multiset/manipulation.ts",mdxType:"SandBox"}),(0,r.kt)("h3",f({},{id:"builder"}),"Builder"),(0,r.kt)(l.r,{path:"multiset/build.ts",mdxType:"SandBox"}))}O.isMDXComponent=!0}}]);