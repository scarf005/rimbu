(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[5977],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1592:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});var r=n(7294);function a(e){return e.replace(/</g,"%3C").replace(/>/g,"%3E")}function i(e){var t=a("https://g.gravizo.com/svg?\n  @startuml;\n  skinparam monochrome true;\n  skinparam backgroundColor none;\n  skinparam classBackgroundColor darkslategrey;\n  skinparam classBorderColor gray;\n  skinparam classFontColor lightgray;\n  skinparam classStereotypeFontColor darkgray;\n  skinparam arrowColor lightgray;\n  skinparam linetype ortho;\n  "+e.contents+"\n  @enduml;");return r.createElement("img",{src:t,className:"diagram"})}},3664:function(e,t,n){"use strict";n.d(t,{r:function(){return i}});var r=n(7294),a={previewwindow:"console",view:"split",editorsize:"60",codemirror:"1",moduleview:"1"};function i(e){var t=function(e){var t="",n="";for(var r in e)t+=""+n+r+"="+e[r],n="&";return""===t?"":"?"+t}(Object.assign({},a,{module:"/src/"+e.path})),n="https://codesandbox.io/embed/github/vitoke/rimbu-sandbox/tree/main"+t,i="https://codesandbox.io/s/github/vitoke/rimbu-sandbox/tree/main"+t;return r.createElement(r.Fragment,null,r.createElement("a",{target:"_blank",className:"button button--secondary",href:i,style:{marginBottom:10}},"Open file below in new window with full type-check"),r.createElement("iframe",{src:n,className:"codesandbox-iframe",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}},4077:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(1592),l=n(3664),s=["components"],c={id:"set",slug:"./set",title:"Set"},d="Set",u={unversionedId:"collections/set",id:"collections/set",isDocsHomePage:!1,title:"Set",description:"A Set is a collection of values, where the collection does not contain duplicate values. That is, all values are unique. The way this uniqueness is determined can vary through the specific Set implementation that is chosen.",source:"@site/docs/collections/set.mdx",sourceDirName:"collections",slug:"/collections/set",permalink:"/docs/collections/set",editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/collections/set.mdx",tags:[],version:"current",frontMatter:{id:"set",slug:"./set",title:"Set"},sidebar:"sidebar",previous:{title:"MultiSet",permalink:"/docs/collections/multiset"},next:{title:"Stream",permalink:"/docs/collections/stream"}},p=[{value:"When to use",id:"when-to-use",children:[]},{value:"HashSet",id:"hashset",children:[]},{value:"SortedSet",id:"sortedset",children:[]},{value:"OrderedSet",id:"orderedset",children:[]},{value:"Exports",id:"exports",children:[]},{value:"Inheritance",id:"inheritance",children:[]},{value:"Usage",id:"usage",children:[{value:"Creation",id:"creation",children:[]},{value:"Query",id:"query",children:[]},{value:"Builder",id:"builder",children:[]}]}],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"set"},"Set"),(0,i.kt)("p",null,"A Set is a collection of values, where the collection does not contain duplicate values. That is, all values are unique. The way this uniqueness is determined can vary through the specific Set implementation that is chosen."),(0,i.kt)("h2",{id:"when-to-use"},"When to use"),(0,i.kt)("p",null,"Sets are useful when you only need to know if some element is present or not in a set. Adding an element for a second time to the same set has no effect. The Set can tell you, in an efficient way, whether some element is present."),(0,i.kt)("p",null,"Imagine we want to censor some words from pieces of text. We can create a Set containing all the words we want to censor. Then, we need to split up the text into words, and for each word query whether our set contains that word. If it does, we replace it with some other characters."),(0,i.kt)("h2",{id:"hashset"},"HashSet"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"HashSet")," is a Set that uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"Hasher")," instance to convert elements to numbers. These number are used to efficiently verify equality between values, because elements with different hash numbers are guaranteed to be unequal."),(0,i.kt)("h2",{id:"sortedset"},"SortedSet"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SortedSet")," is a Set that uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"Comp")," instance that can compare elements and tell whether they are equal or which one is 'larger'. In this way, the Set is kept sorted, and iterating over its elements will produce them in sorted order."),(0,i.kt)("h2",{id:"orderedset"},"OrderedSet"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderedSet")," is a Set with internally an extra ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," that maintains the insertion order. In this way, iterating over the Set returns the values in the same order as they were inserted."),(0,i.kt)("h2",{id:"exports"},"Exports"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@rimbu/core")," package exports the following ",(0,i.kt)("em",{parentName:"p"},"abstract")," Set types:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"VariantSet<T>")),(0,i.kt)("td",{parentName:"tr",align:null},"a type-variant set of value type T")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"RSet<T>")),(0,i.kt)("td",{parentName:"tr",align:null},"a generic set of value type T")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@rimbu/core")," package exports the following ",(0,i.kt)("em",{parentName:"p"},"concrete")," Set types:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"HashSet<T>")),(0,i.kt)("td",{parentName:"tr",align:null},"a set of value type T where items are hashed with a ",(0,i.kt)("inlineCode",{parentName:"td"},"Hasher"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SortedSet<T>")),(0,i.kt)("td",{parentName:"tr",align:null},"a set of value type T where items are sorted with a ",(0,i.kt)("inlineCode",{parentName:"td"},"Comp"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OrderedSet<T>")),(0,i.kt)("td",{parentName:"tr",align:null},"a set of value type T where insertion order is maintained")))),(0,i.kt)("h2",{id:"inheritance"},"Inheritance"),(0,i.kt)(o.G,{contents:"\ninterface Streamable<T>;\n\ninterface VariantSet<T>;\nabstract RSet<T>;\nclass HashSet<T>;\nclass SortedSet<T>;\n\nStreamable <|.. VariantSet;\nVariantSet <|-- RSet;\nRSet <|-- HashSet;\nRSet <|-- SortedSet;\n",mdxType:"UmlGraph"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"creation"},"Creation"),(0,i.kt)(l.r,{path:"set/create.ts",mdxType:"SandBox"}),(0,i.kt)("h3",{id:"query"},"Query"),(0,i.kt)(l.r,{path:"set/query.ts",mdxType:"SandBox"}),(0,i.kt)("h3",{id:"builder"},"Builder"),(0,i.kt)(l.r,{path:"set/build.ts",mdxType:"SandBox"}))}h.isMDXComponent=!0}}]);