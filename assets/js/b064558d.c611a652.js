"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[14370],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(t),s=a,f=u["".concat(c,".").concat(s)]||u[s]||m[s]||o;return t?n.createElement(f,p(p({ref:r},d),{},{components:t})):n.createElement(f,p({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=s;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},50780:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&d(e,t,r[t]);if(i)for(var t of i(r))l.call(r,t)&&d(e,t,r[t]);return e},m=(e,r)=>o(e,p(r)),s=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const f={title:"EdgeGraphSorted<N>",slug:"/rimbu/core/EdgeGraphSorted/interface"},g="interface EdgeGraphSorted<N>",b={unversionedId:"rimbu_core/EdgeGraphSorted.interface",id:"rimbu_core/EdgeGraphSorted.interface",title:"EdgeGraphSorted<N>",description:"An type-invariant immutable valued edge (undirected) graph. The connections are internally maintained using sorted collections See the Graph documentation and the EdgeGraphSorted API documentation",source:"@site/api/rimbu_core/EdgeGraphSorted.interface.mdx",sourceDirName:"rimbu_core",slug:"/rimbu/core/EdgeGraphSorted/interface",permalink:"/api/rimbu/core/EdgeGraphSorted/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"EdgeGraphSorted<N>",slug:"/rimbu/core/EdgeGraphSorted/interface"},sidebar:"defaultSidebar",previous:{title:"EdgeGraphSorted.Types",permalink:"/api/rimbu/core/EdgeGraphSorted/Types/interface"},next:{title:"EdgeGraphSorted",permalink:"/api/rimbu/core/EdgeGraphSorted/var"}},h={},y=[{value:"Type parameters",id:"type-parameters",level:2}],v={toc:y},E="wrapper";function O(e){var r=e,{components:t}=r,a=s(r,["components"]);return(0,n.kt)(E,m(u(u({},v),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"interface-edgegraphsortedn"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface EdgeGraphSorted<N>")),(0,n.kt)("p",null,"An type-invariant immutable valued edge (undirected) graph. The connections are internally maintained using sorted collections See the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/EdgeGraphSorted/interface"}),"EdgeGraphSorted API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/EdgeGraphSorted/namespace"}),"EdgeGraphSorted")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/EdgeGraphSorted/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraphSorted.NonEmpty<N>"))),(0,n.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the node type")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const g1 = EdgeGraphSorted.empty<number>()\nconst g2 = EdgeGraphSorted.of([1], [2, 3], [2, 4])\n"))))}O.isMDXComponent=!0}}]);