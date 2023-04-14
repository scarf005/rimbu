"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[70560],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,h=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return a?r.createElement(h,p(p({ref:t},c),{},{components:a})):r.createElement(h,p({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,p[1]=o;for(var m=2;m<i;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5264:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>g,frontMatter:()=>h,metadata:()=>y,toc:()=>N});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))m.call(t,a)&&c(e,a,t[a]);return e},s=(e,t)=>i(e,p(t)),d=(e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a};const h={title:"VariantGraph.NonEmpty<N>",slug:"/rimbu/graph/VariantGraph/NonEmpty/interface"},f="interface VariantGraph.NonEmpty<N>",y={unversionedId:"rimbu_graph/VariantGraph/NonEmpty.interface",id:"rimbu_graph/VariantGraph/NonEmpty.interface",title:"VariantGraph.NonEmpty<N>",description:"A non-empty type-variant immutable graph. See the Graph documentation and the VariantGraph API documentation",source:"@site/api/rimbu_graph/VariantGraph/NonEmpty.interface.mdx",sourceDirName:"rimbu_graph/VariantGraph",slug:"/rimbu/graph/VariantGraph/NonEmpty/interface",permalink:"/api/rimbu/graph/VariantGraph/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"VariantGraph.NonEmpty<N>",slug:"/rimbu/graph/VariantGraph/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"VariantGraph (namespace)",permalink:"/api/rimbu/graph/VariantGraph/namespace"},next:{title:"VariantGraph.Types",permalink:"/api/rimbu/graph/VariantGraph/Types/interface"}},k={},N=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>linkMap</code>",id:"linkmap",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4}],b={toc:N},v="wrapper";function g(e){var t=e,{components:a}=t,n=d(t,["components"]);return(0,r.kt)(v,s(u(u({},b),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"interface-variantgraphnonemptyn"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface VariantGraph.NonEmpty<N>")),(0,r.kt)("p",null,"A non-empty type-variant immutable graph. See the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/VariantGraph/interface"}),"VariantGraph API documentation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends:")," ",(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/Streamable/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Streamable.NonEmpty<T>")),", ",(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/VariantGraph/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantGraph<N>"))),(0,r.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"the node type")))),(0,r.kt)("h2",u({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"linkmap"}),(0,r.kt)("inlineCode",{parentName:"h3"},"linkMap")),(0,r.kt)("p",null,"Returns the nested Map representation of the graph connections.")),(0,r.kt)("h4",u({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly linkMap: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/VariantMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMap.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<N, "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/VariantSet/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantSet")),(0,r.kt)("inlineCode",{parentName:"p"},"<N>>;"))),(0,r.kt)("admonition",u({},{title:"example",type:"note"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.of([1, 2, 'a'], [2, 3, 'b']).linkMap.toArray()\n// => [[1, HashMap(2 -> 'a')], [2, HashMap(3 -> 'b')]]\n"))),(0,r.kt)("h4",u({},{id:"overrides"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/VariantGraph/interface#linkMap"}),"VariantGraph.linkMap"))),(0,r.kt)("h2",u({},{id:"methods"}),"Methods"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"stream"}),(0,r.kt)("inlineCode",{parentName:"h3"},"stream")),(0,r.kt)("p",null,"Returns a non-empty ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream")," containing all graph elements of this collection as single tuples for isolated nodes and 2-valued tuples of nodes for connections.")),(0,r.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stream(): "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/Stream/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Stream.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<[N] "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," Link<N>>;"))),(0,r.kt)("admonition",u({},{title:"example",type:"note"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowGraphHashed.of([1], [2, 3]).stream().toArray()  // => [[1], [2, 3]]\n"))),(0,r.kt)("h4",u({},{id:"overrides-1"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/Streamable/NonEmpty/interface#stream"}),"NonEmpty.stream"))))}g.isMDXComponent=!0}}]);