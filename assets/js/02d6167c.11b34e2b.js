"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[96306],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(a),s=n,f=c["".concat(l,".").concat(s)]||c[s]||d[s]||i;return a?r.createElement(f,p(p({ref:t},u),{},{components:a})):r.createElement(f,p({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:n,p[1]=o;for(var m=2;m<i;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8408:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>g,frontMatter:()=>f,metadata:()=>y,toc:()=>N});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))m.call(t,a)&&u(e,a,t[a]);return e},d=(e,t)=>i(e,p(t)),s=(e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a};const f={title:"VariantValuedGraph.NonEmpty<N,V>",slug:"/rimbu/graph/VariantValuedGraph/NonEmpty/interface"},h="interface VariantValuedGraph.NonEmpty<N,V>",y={unversionedId:"rimbu_graph/VariantValuedGraph/NonEmpty.interface",id:"rimbu_graph/VariantValuedGraph/NonEmpty.interface",title:"VariantValuedGraph.NonEmpty<N,V>",description:"A non-empty type-variant immutable valued graph. See the Graph documentation and the VariantValuedGraph API documentation",source:"@site/api/rimbu_graph/VariantValuedGraph/NonEmpty.interface.mdx",sourceDirName:"rimbu_graph/VariantValuedGraph",slug:"/rimbu/graph/VariantValuedGraph/NonEmpty/interface",permalink:"/api/rimbu/graph/VariantValuedGraph/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"VariantValuedGraph.NonEmpty<N,V>",slug:"/rimbu/graph/VariantValuedGraph/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"VariantValuedGraph (namespace)",permalink:"/api/rimbu/graph/VariantValuedGraph/namespace"},next:{title:"VariantValuedGraph.Types",permalink:"/api/rimbu/graph/VariantValuedGraph/Types/interface"}},b={},N=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4}],k={toc:N},v="wrapper";function g(e){var t=e,{components:a}=t,n=s(t,["components"]);return(0,r.kt)(v,d(c(c({},k),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"interface-variantvaluedgraphnonemptynv"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface VariantValuedGraph.NonEmpty<N,V>")),(0,r.kt)("p",null,"A non-empty type-variant immutable valued graph. See the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/VariantValuedGraph/interface"}),"VariantValuedGraph API documentation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends:")," ",(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/Streamable/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Streamable.NonEmpty<T>")),", ",(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/graph/VariantValuedGraph/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantValuedGraph<N,V>"))),(0,r.kt)("h2",c({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"N"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"the node type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"the connection value type")))),(0,r.kt)("h2",c({},{id:"methods"}),"Methods"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"stream"}),(0,r.kt)("inlineCode",{parentName:"h3"},"stream")),(0,r.kt)("p",null,"Returns a non-empty Stream containing all entries of this collection as tuples of key and value.")),(0,r.kt)("h4",c({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stream(): "),(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/Stream/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Stream.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<ValuedGraphElement<N, V>>;"))),(0,r.kt)("admonition",c({},{title:"example",type:"note"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.of([1, 2, 'a'], [2, 3, 'b']).stream().toArray()\n// => [[1, 2, 'a'], [2, 3, 'b']]\n"))),(0,r.kt)("h4",c({},{id:"overrides"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/Streamable/NonEmpty/interface#stream"}),"NonEmpty.stream"))))}g.isMDXComponent=!0}}]);