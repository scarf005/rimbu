(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[8137],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3664:function(e,t,r){"use strict";r.d(t,{r:function(){return o}});var n=r(7294),a={previewwindow:"console",view:"split",editorsize:"60",codemirror:"1",moduleview:"1"};function o(e){var t=function(e){var t="",r="";for(var n in e)t+=""+r+n+"="+e[n],r="&";return""===t?"":"?"+t}(Object.assign({},a,{module:"/src/"+e.path})),r="https://codesandbox.io/embed/github/vitoke/rimbu-sandbox/tree/main"+t,o="https://codesandbox.io/s/github/vitoke/rimbu-sandbox/tree/main"+t;return n.createElement(n.Fragment,null,n.createElement("a",{target:"_blank",className:"button button--secondary",href:o,style:{marginBottom:10}},"Open file below in new window with full type-check"),n.createElement("iframe",{src:r,className:"codesandbox-iframe",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}},5453:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=r(3664),l=["components"],p={id:"arrow-graph",slug:"./arrow-graph",title:"Arrow Graph"},s="ArrowGraph<N>",c={unversionedId:"collections/graph/arrow-graph",id:"collections/graph/arrow-graph",isDocsHomePage:!1,title:"Arrow Graph",description:"An ArrowGraph is a directed Graph where the edges have no values. This structure is useful for situations in which elements of the same type can have relations to each other. The relation is either there or not there, and is is directed, so A -> B does not imply that B -> A.",source:"@site/docs/collections/graph/arrow-graph.mdx",sourceDirName:"collections/graph",slug:"/collections/graph/arrow-graph",permalink:"/docs/collections/graph/arrow-graph",editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/collections/graph/arrow-graph.mdx",tags:[],version:"current",frontMatter:{id:"arrow-graph",slug:"./arrow-graph",title:"Arrow Graph"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/docs/collections/graph"},next:{title:"Arrow Valued Graph",permalink:"/docs/collections/graph/arrow-valued-graph"}},d=[{value:"Usage",id:"usage",children:[{value:"Creation",id:"creation",children:[]},{value:"Query",id:"query",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Builder",id:"builder",children:[]}]}],u={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"arrowgraphn"},(0,o.kt)("inlineCode",{parentName:"h1"},"ArrowGraph<N>")),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrowGraph")," is a directed ",(0,o.kt)("inlineCode",{parentName:"p"},"Graph")," where the edges have no values. This structure is useful for situations in which elements of the same type can have relations to each other. The relation is either there or not there, and is is directed, so ",(0,o.kt)("inlineCode",{parentName:"p"},"A -> B")," does not imply that ",(0,o.kt)("inlineCode",{parentName:"p"},"B -> A"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Like all ",(0,o.kt)("inlineCode",{parentName:"p"},"Graph")," implementations, these graphs can contain cycles and isolated nodes are allowed."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@rimbu/core")," package exports the following ArrowGraph types:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ArrowGraph<N>")),(0,o.kt)("td",{parentName:"tr",align:null},"a generic directed graph with nodes of type N")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ArrowGraphHashed<N>")),(0,o.kt)("td",{parentName:"tr",align:null},"a directed graph with hashed nodes of type N")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ArrowGraphSorted<N>")),(0,o.kt)("td",{parentName:"tr",align:null},"a directed graph with sorted nodes of type N")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"creation"},"Creation"),(0,o.kt)(i.r,{path:"graph/arrow/non-valued/create.ts",mdxType:"SandBox"}),(0,o.kt)("h3",{id:"query"},"Query"),(0,o.kt)(i.r,{path:"graph/arrow/non-valued/query.ts",mdxType:"SandBox"}),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)(i.r,{path:"graph/arrow/non-valued/motivation.ts",mdxType:"SandBox"}),(0,o.kt)("h3",{id:"builder"},"Builder"),(0,o.kt)(i.r,{path:"graph/arrow/non-valued/build.ts",mdxType:"SandBox"}))}h.isMDXComponent=!0}}]);