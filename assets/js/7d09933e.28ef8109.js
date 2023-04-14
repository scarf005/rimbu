"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[79010],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),d=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=d(e.components);return a.createElement(p.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(t),h=n,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||o;return t?a.createElement(m,l(l({ref:r},s),{},{components:t})):a.createElement(m,l({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=h;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},88508:(e,r,t)=>{t.d(r,{r:()=>m});var a=t(67294),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&s(e,t,r[t]);if(i)for(var t of i(r))d.call(r,t)&&s(e,t,r[t]);return e},u=(e,r)=>o(e,l(r));const h={previewwindow:"console",view:"split",editorsize:"60",codemirror:"1",moduleview:"1"};function m(e){const r=function(e){let r="",t="";for(const a in e)r+=`${t}${a}=${e[a]}`,t="&";return""===r?"":`?${r}`}(u(c({},h),{module:`/src/${e.path}`})),t=`https://codesandbox.io/embed/github/vitoke/rimbu-sandbox/tree/main${r}`,n=`https://codesandbox.io/s/github/vitoke/rimbu-sandbox/tree/main${r}`;return a.createElement(a.Fragment,null,a.createElement("a",{target:"_blank",className:"button button--secondary",href:n,style:{marginBottom:10}},"Open file below in new window with full type-check"),a.createElement("iframe",{src:t,className:"codesandbox-iframe",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}},88956:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>y});var a=t(3905),n=t(88508),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&c(e,t,r[t]);if(p)for(var t of p(r))s.call(r,t)&&c(e,t,r[t]);return e},h=(e,r)=>l(e,i(r)),m=(e,r)=>{var t={};for(var a in e)d.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&p)for(var a of p(e))r.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t};const f={id:"arrow-valued-graph",slug:"./arrow-valued-graph",title:"Arrow Valued Graph"},g="ArrowValuedGraph<N,V>",v={unversionedId:"collections/graph/arrow-valued-graph",id:"collections/graph/arrow-valued-graph",title:"Arrow Valued Graph",description:"An ArrowValuedGraph is a directed ValuedGraph where the edges have values. This structure is useful for situations in which elements of the same type can have relations to each other, and those relations have some associated value. The relations are directed, so A -> B does not imply that B -> A.",source:"@site/docs/collections/graph/arrow-valued-graph.mdx",sourceDirName:"collections/graph",slug:"/collections/graph/arrow-valued-graph",permalink:"/docs/collections/graph/arrow-valued-graph",draft:!1,editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/collections/graph/arrow-valued-graph.mdx",tags:[],version:"current",frontMatter:{id:"arrow-valued-graph",slug:"./arrow-valued-graph",title:"Arrow Valued Graph"},sidebar:"sidebar",previous:{title:"Arrow Graph",permalink:"/docs/collections/graph/arrow-graph"},next:{title:"Edge Graph",permalink:"/docs/collections/graph/edge-graph"}},b={},y=[{value:"Usage",id:"usage",level:2},{value:"Creation",id:"creation",level:3},{value:"Query",id:"query",level:3},{value:"Motivation",id:"motivation",level:3},{value:"Builder",id:"builder",level:3}],w={toc:y},k="wrapper";function O(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,a.kt)(k,h(u(u({},w),o),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"arrowvaluedgraphnv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"ArrowValuedGraph<N,V>")),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"ArrowValuedGraph")," is a directed ",(0,a.kt)("inlineCode",{parentName:"p"},"ValuedGraph")," where the edges have values. This structure is useful for situations in which elements of the same type can have relations to each other, and those relations have some associated value. The relations are directed, so ",(0,a.kt)("inlineCode",{parentName:"p"},"A -> B")," does not imply that ",(0,a.kt)("inlineCode",{parentName:"p"},"B -> A"),"."),(0,a.kt)("admonition",u({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Like all ",(0,a.kt)("inlineCode",{parentName:"p"},"Graph")," implementations, these graphs can contain cycles and isolated nodes are allowed.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@rimbu/core")," package exports the following immutable ArrowValuedGraph TypeScript types:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/graph/ArrowValuedGraph/namespace"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraph<N, V>"))),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a generic directed valued graph with nodes of type N, and edge values of type V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/graph/ArrowValuedGraphHashed/namespace"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphHashed<N, V>"))),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a valued directed graph with hashed nodes of type N, and edge values of type V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/graph/ArrowValuedGraphSorted/namespace"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphSorted<N, V>"))),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a valued directed graph with sorted nodes of type N, and edge values of type V")))),(0,a.kt)("h2",u({},{id:"usage"}),"Usage"),(0,a.kt)("h3",u({},{id:"creation"}),"Creation"),(0,a.kt)(n.r,{path:"graph/arrow/valued/create.ts",mdxType:"SandBox"}),(0,a.kt)("h3",u({},{id:"query"}),"Query"),(0,a.kt)(n.r,{path:"graph/arrow/valued/query.ts",mdxType:"SandBox"}),(0,a.kt)("h3",u({},{id:"motivation"}),"Motivation"),(0,a.kt)(n.r,{path:"graph/arrow/valued/motivation.ts",mdxType:"SandBox"}),(0,a.kt)("h3",u({},{id:"builder"}),"Builder"),(0,a.kt)(n.r,{path:"graph/arrow/valued/build.ts",mdxType:"SandBox"}))}O.isMDXComponent=!0}}]);