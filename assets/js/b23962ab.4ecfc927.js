"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[94167],{3905:(e,r,n)=>{n.d(r,{Zo:()=>m,kt:()=>d});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},m=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,d=u["".concat(l,".").concat(f)]||u[f]||s[f]||i;return n?t.createElement(d,a(a({ref:r},m),{},{components:n})):t.createElement(d,a({ref:r},m))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86304:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>y,contentTitle:()=>w,default:()=>T,frontMatter:()=>d,metadata:()=>b,toc:()=>v});var t=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,r,n)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,u=(e,r)=>{for(var n in r||(r={}))l.call(r,n)&&m(e,n,r[n]);if(p)for(var n of p(r))c.call(r,n)&&m(e,n,r[n]);return e},s=(e,r)=>i(e,a(r)),f=(e,r)=>{var n={};for(var t in e)l.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&p)for(var t of p(e))r.indexOf(t)<0&&c.call(e,t)&&(n[t]=e[t]);return n};const d={title:"window",slug:"/rimbu/core/Transformer_2/window/var"},w="type window",b={unversionedId:"rimbu_core/Transformer_2/window.var",id:"rimbu_core/Transformer_2/window.var",title:"window",description:"Returns a transformer that produces windows/collections of windowSize size, each window starting skipAmount of elements after the previous, and optionally collected by a custom reducer.",source:"@site/api/rimbu_core/Transformer_2/window.var.mdx",sourceDirName:"rimbu_core/Transformer_2",slug:"/rimbu/core/Transformer_2/window/var",permalink:"/api/rimbu/core/Transformer_2/window/var",draft:!1,tags:[],version:"current",frontMatter:{title:"window",slug:"/rimbu/core/Transformer_2/window/var"},sidebar:"defaultSidebar",previous:{title:"NonEmpty",permalink:"/api/rimbu/core/Transformer_2/NonEmpty/type"},next:{title:"Transformer_2",permalink:"/api/rimbu/core/Transformer_2/type"}},y={},v=[{value:"Definition",id:"definition",level:2}],k={toc:v},O="wrapper";function T(e){var r=e,{components:n}=r,o=f(r,["components"]);return(0,t.kt)(O,s(u(u({},k),o),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",u({},{id:"type-window"}),(0,t.kt)("inlineCode",{parentName:"h1"},"type window")),(0,t.kt)("p",null,"Returns a transformer that produces windows/collections of ",(0,t.kt)("inlineCode",{parentName:"p"},"windowSize")," size, each window starting ",(0,t.kt)("inlineCode",{parentName:"p"},"skipAmount")," of elements after the previous, and optionally collected by a custom reducer."),(0,t.kt)("admonition",u({},{title:"example",type:"note"}),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"Stream.of(1, 2, 3, 4, 5, 6)\n.transform(Transformer.window(3))\n.toArray()\n// => [[1, 2, 3], [4, 5, 6]]\n"))),(0,t.kt)("h2",u({},{id:"definition"}),"Definition"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"window: {"),(0,t.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,t.kt)("inlineCode",{parentName:"p"},"<T>(windowSize: number, skipAmount?: number): "),(0,t.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/Transformer_2/type"}),(0,t.kt)("inlineCode",{parentName:"a"},"Transformer")),(0,t.kt)("inlineCode",{parentName:"p"},"<T, T[]>;"),(0,t.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,t.kt)("inlineCode",{parentName:"p"},"<T, R>(windowSize: number, skipAmount?: number, collector?: Reducer<T, R>): "),(0,t.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/Transformer_2/type"}),(0,t.kt)("inlineCode",{parentName:"a"},"Transformer")),(0,t.kt)("inlineCode",{parentName:"p"},"<T, R>;"),(0,t.kt)("br",null),"\xa0","\xa0",(0,t.kt)("inlineCode",{parentName:"p"},"}")))}T.isMDXComponent=!0}}]);