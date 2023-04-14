"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[20779],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88508:(e,t,r)=>{r.d(t,{r:()=>f});var n=r(67294),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e},u=(e,t)=>a(e,i(t));const m={previewwindow:"console",view:"split",editorsize:"60",codemirror:"1",moduleview:"1"};function f(e){const t=function(e){let t="",r="";for(const n in e)t+=`${r}${n}=${e[n]}`,r="&";return""===t?"":`?${t}`}(u(d({},m),{module:`/src/${e.path}`})),r=`https://codesandbox.io/embed/github/vitoke/rimbu-sandbox/tree/main${t}`,o=`https://codesandbox.io/s/github/vitoke/rimbu-sandbox/tree/main${t}`;return n.createElement(n.Fragment,null,n.createElement("a",{target:"_blank",className:"button button--secondary",href:o,style:{marginBottom:10}},"Open file below in new window with full type-check"),n.createElement("iframe",{src:r,className:"codesandbox-iframe",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}},87063:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>O,frontMatter:()=>b,metadata:()=>h,toc:()=>v});var n=r(3905),o=r(88508),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&d(e,r,t[r]);return e},m=(e,t)=>i(e,l(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const b={id:"deep-protected",slug:"./protected",title:"Protected"},y=void 0,h={unversionedId:"deep/deep-protected",id:"deep/deep-protected",title:"Protected",description:"TypeScript offers some helper types to prevent users from changing properties in objects. These are mainly the readonly keyword and the Readonly type. However, they require diligence to apply properly:",source:"@site/docs/deep/protected.mdx",sourceDirName:"deep",slug:"/deep/protected",permalink:"/docs/deep/protected",draft:!1,editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/deep/protected.mdx",tags:[],version:"current",frontMatter:{id:"deep-protected",slug:"./protected",title:"Protected"},sidebar:"sidebar",previous:{title:"Deep Path",permalink:"/docs/deep/path"},next:{title:"Tuple",permalink:"/docs/deep/tuple"}},k={},v=[{value:"Examples",id:"examples",level:2}],w={toc:v},g="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(g,m(u(u({},w),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"TypeScript offers some helper types to prevent users from changing properties in objects. These are mainly the ",(0,n.kt)("inlineCode",{parentName:"p"},"readonly")," keyword and the ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly<T>")," type. However, they require diligence to apply properly:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const obj: Readonly<{\n  a: number;\n  b: { c: boolean; d: number[] };\n}> = {\n  a: 1,\n  b: { c: true },\n  d: [1],\n};\n\nobj.a = 2; // => compiler error\nobj.b.c = false; // => no error!\nobj.d.push(5); // => no error!\n")),(0,n.kt)("p",null,"To create plain JS objects that can be considered deep readonly in TypeScript, Rimbu offers the ",(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/deep"}),(0,n.kt)("inlineCode",{parentName:"a"},"Deep.protect"))," function and type:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"import { Deep } from '@rimbu/core';\n\nconst obj = Deep.protect({\n  a: 1,\n  b: { c: true },\n  d: [1],\n});\nobj.a = 2; // => compiler error\nobj.b.c = false; // => compiler error\nobj.d.push(5); // => compiler error\n")),(0,n.kt)("p",null,"Like ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," does not have any effect on the object itself, but only instructs the compiler that all its properties and nested properties are read-only."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Protected<T>")," has the following properties:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"if type T is any, the result is also any (this prevents the compiler from infinite recursion)"),(0,n.kt)("li",{parentName:"ul"},"if type T is a tuple or array, it will return a readonly array of which each element ",(0,n.kt)("inlineCode",{parentName:"li"},"E")," is converted to ",(0,n.kt)("inlineCode",{parentName:"li"},"Protected<E>")),(0,n.kt)("li",{parentName:"ul"},"it casts ",(0,n.kt)("inlineCode",{parentName:"li"},"Map<K, V>")," into ",(0,n.kt)("inlineCode",{parentName:"li"},"Map<Protected<K>, Protected<V>>")," with all mutable methods hidden"),(0,n.kt)("li",{parentName:"ul"},"it casts ",(0,n.kt)("inlineCode",{parentName:"li"},"Set<E>")," into ",(0,n.kt)("inlineCode",{parentName:"li"},"Set<Protected<E>>")," with all mutable methods hidden"),(0,n.kt)("li",{parentName:"ul"},"it casts ",(0,n.kt)("inlineCode",{parentName:"li"},"Promise<E>")," into ",(0,n.kt)("inlineCode",{parentName:"li"},"Promise<Protected<E>>")),(0,n.kt)("li",{parentName:"ul"},"for plain objects (objects without functions), it maps all keys as readonly and all values ",(0,n.kt)("inlineCode",{parentName:"li"},"V")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"Protected<V>")),(0,n.kt)("li",{parentName:"ul"},"any other type will not be affected (again, to prevent infinite compiler recursion)")),(0,n.kt)("p",null,"Caveats:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It is hard to create a sane definition of a 'plain object' that works well in TypeScript. Currently, an object type is considered a plain object if:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"if is not a primitive type (number, string, etc) or null or undefined"),(0,n.kt)("li",{parentName:"ul"},"it is not a function"),(0,n.kt)("li",{parentName:"ul"},"it is not iterable nor async iterable"),(0,n.kt)("li",{parentName:"ul"},"none of it's properties is a function")))),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)(o.r,{path:"deep/protected.ts",mdxType:"SandBox"}))}O.isMDXComponent=!0}}]);