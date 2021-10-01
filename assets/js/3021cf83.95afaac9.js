(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[2538],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3664:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var r=n(7294),o={previewwindow:"console",view:"split",editorsize:"60",codemirror:"1",moduleview:"1"};function a(e){var t=function(e){var t="",n="";for(var r in e)t+=""+n+r+"="+e[r],n="&";return""===t?"":"?"+t}(Object.assign({},o,{module:"/src/"+e.path})),n="https://codesandbox.io/embed/github/vitoke/rimbu-sandbox/tree/main"+t,a="https://codesandbox.io/s/github/vitoke/rimbu-sandbox/tree/main"+t;return r.createElement(r.Fragment,null,r.createElement("a",{target:"_blank",className:"button button--secondary",href:a,style:{marginBottom:10}},"Open file below in new window with full type-check"),r.createElement("iframe",{src:n,className:"codesandbox-iframe",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}},2418:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=n(3664),l=["components"],s={id:"getting-started",sidebar_position:2,title:"Getting Started",slug:"./getting-started"},c=void 0,u={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"CodeSandbox",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"getting-started",sidebar_position:2,title:"Getting Started",slug:"./getting-started"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Basic Concepts",permalink:"/docs/basic-concepts"}},d=[{value:"CodeSandbox",id:"codesandbox",children:[]},{value:"Installation",id:"installation",children:[{value:"Yarn/NPM",id:"yarnnpm",children:[]},{value:"Deno",id:"deno",children:[]}]},{value:"Configuration",id:"configuration",children:[]},{value:"Ready to use",id:"ready-to-use",children:[]}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"codesandbox"},"CodeSandbox"),(0,a.kt)("p",null,"This documentation site makes a lot of use of CodeSandbox examples, where you can use the Rimbu library live in a browser environment. Try it out to quickly browse through many examples:"),(0,a.kt)(i.r,{path:"index.ts",mdxType:"SandBox"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"yarnnpm"},"Yarn/NPM"),(0,a.kt)("p",null,"To install the library in your own project:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"npm install @rimbu/core"))),(0,a.kt)("p",null,"or"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"yarn add @rimbu/core"))),(0,a.kt)("h3",{id:"deno"},"Deno"),(0,a.kt)("p",null,"Create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"rimbu.ts")," and add the following:"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'export * from "https://deno.land/x/rimbu/core/mod.ts";\n'))),(0,a.kt)("p",null,"Or using a pinned version (",(0,a.kt)("inlineCode",{parentName:"p"},"x.y.z"),"):"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'export * from "https://deno.land/x/rimbu/core@x.y.z/mod.ts";\n'))),(0,a.kt)("p",null,"Then import what you need from ",(0,a.kt)("inlineCode",{parentName:"p"},"rimbu.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { SortedMap } from "./rimbu.ts";\n')),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"We recommend adding the following settings to your ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "skipLibCheck": true,\n    "noStrictGenericChecks": true\n  }\n}\n')),(0,a.kt)("h2",{id:"ready-to-use"},"Ready to use"),(0,a.kt)("p",null,"Import into and use in your code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { List, Stream } from "@rimbu/core";\n\nconst list = List.from(Stream.range({ start: 2, amount: 64 }));\nconsole.log(list.toString());\n')))}m.isMDXComponent=!0}}]);