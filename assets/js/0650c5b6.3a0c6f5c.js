"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[18137],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),s=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),h=n,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return t?a.createElement(m,i(i({ref:r},c),{},{components:t})):a.createElement(m,i({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},88508:(e,r,t)=>{t.d(r,{r:()=>m});var a=t(67294),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&c(e,t,r[t]);if(l)for(var t of l(r))s.call(r,t)&&c(e,t,r[t]);return e},u=(e,r)=>o(e,i(r));const h={previewwindow:"console",view:"split",editorsize:"60",codemirror:"1",moduleview:"1"};function m(e){const r=function(e){let r="",t="";for(const a in e)r+=`${t}${a}=${e[a]}`,t="&";return""===r?"":`?${r}`}(u(d({},h),{module:`/src/${e.path}`})),t=`https://codesandbox.io/embed/github/vitoke/rimbu-sandbox/tree/main${r}`,n=`https://codesandbox.io/s/github/vitoke/rimbu-sandbox/tree/main${r}`;return a.createElement(a.Fragment,null,a.createElement("a",{target:"_blank",className:"button button--secondary",href:n,style:{marginBottom:10}},"Open file below in new window with full type-check"),a.createElement("iframe",{src:t,className:"codesandbox-iframe",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}},87046:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>w,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var a=t(3905),n=t(88508),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&d(e,t,r[t]);if(p)for(var t of p(r))c.call(r,t)&&d(e,t,r[t]);return e},h=(e,r)=>i(e,l(r)),m=(e,r)=>{var t={};for(var a in e)s.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&p)for(var a of p(e))r.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const f={id:"arrow-graph",slug:"./arrow-graph",title:"Arrow Graph"},b="ArrowGraph<N>",g={unversionedId:"collections/graph/arrow-graph",id:"collections/graph/arrow-graph",title:"Arrow Graph",description:"An ArrowGraph is a directed Graph where the edges have no values. This structure is useful for situations in which elements of the same type can have relations to each other. The relation is either there or not there, and is is directed, so A -> B does not imply that B -> A.",source:"@site/docs/collections/graph/arrow-graph.mdx",sourceDirName:"collections/graph",slug:"/collections/graph/arrow-graph",permalink:"/docs/collections/graph/arrow-graph",draft:!1,editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/collections/graph/arrow-graph.mdx",tags:[],version:"current",frontMatter:{id:"arrow-graph",slug:"./arrow-graph",title:"Arrow Graph"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/docs/collections/graph"},next:{title:"Arrow Valued Graph",permalink:"/docs/collections/graph/arrow-valued-graph"}},w={},y=[{value:"Usage",id:"usage",level:2},{value:"Creation",id:"creation",level:3},{value:"Query",id:"query",level:3},{value:"Motivation",id:"motivation",level:3},{value:"Builder",id:"builder",level:3}],v={toc:y},k="wrapper";function O(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,a.kt)(k,h(u(u({},v),o),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"arrowgraphn"}),(0,a.kt)("inlineCode",{parentName:"h1"},"ArrowGraph<N>")),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"ArrowGraph")," is a directed ",(0,a.kt)("inlineCode",{parentName:"p"},"Graph")," where the edges have no values. This structure is useful for situations in which elements of the same type can have relations to each other. The relation is either there or not there, and is is directed, so ",(0,a.kt)("inlineCode",{parentName:"p"},"A -> B")," does not imply that ",(0,a.kt)("inlineCode",{parentName:"p"},"B -> A"),"."),(0,a.kt)("admonition",u({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Like all ",(0,a.kt)("inlineCode",{parentName:"p"},"Graph")," implementations, these graphs can contain cycles and isolated nodes are allowed.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@rimbu/core")," package exports the following immutable ArrowGraph TypeScript types:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/graph/ArrowGraph/namespace"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrowGraph<N>"))),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a generic directed graph with nodes of type N")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/graph/ArrowGraphHashed/namespace"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrowGraphHashed<N>"))),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a directed graph with hashed nodes of type N")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/graph/ArrowGraphSorted/namespace"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrowGraphSorted<N>"))),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a directed graph with sorted nodes of type N")))),(0,a.kt)("h2",u({},{id:"usage"}),"Usage"),(0,a.kt)("h3",u({},{id:"creation"}),"Creation"),(0,a.kt)(n.r,{path:"graph/arrow/non-valued/create.ts",mdxType:"SandBox"}),(0,a.kt)("h3",u({},{id:"query"}),"Query"),(0,a.kt)(n.r,{path:"graph/arrow/non-valued/query.ts",mdxType:"SandBox"}),(0,a.kt)("h3",u({},{id:"motivation"}),"Motivation"),(0,a.kt)(n.r,{path:"graph/arrow/non-valued/motivation.ts",mdxType:"SandBox"}),(0,a.kt)("h3",u({},{id:"builder"}),"Builder"),(0,a.kt)(n.r,{path:"graph/arrow/non-valued/build.ts",mdxType:"SandBox"}))}O.isMDXComponent=!0}}]);