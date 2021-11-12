"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[81519],{50158:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(46393);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(k,p(p({ref:t},c),{},{components:a})):n.createElement(k,p({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},40809:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=a(74834),r=a(28265),i=(a(46393),a(50158)),p=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,s={unversionedId:"api/api-extractor-model.apinamespace",id:"api/api-extractor-model.apinamespace",isDocsHomePage:!1,title:"api-extractor-model.apinamespace",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiNamespace",source:"@site/docs/api/api-extractor-model.apinamespace.md",sourceDirName:"api",slug:"/api/api-extractor-model.apinamespace",permalink:"/rushstack-websites/undefined/pages/api/api-extractor-model.apinamespace",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"ApiNamespace class",id:"apinamespace-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Constructors",id:"constructors",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apinamespace"},"ApiNamespace")),(0,i.kt)("h2",{id:"apinamespace-class"},"ApiNamespace class"),(0,i.kt)("p",null,"Represents a TypeScript namespace declaration."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class ApiNamespace extends ApiNamespace_base \n")),(0,i.kt)("b",null,"Extends:")," ApiNamespace\\_base",(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"This is part of the ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apimodel"},"ApiModel")," hierarchy of classes, which are serializable representations of API declarations."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ApiNamespace")," represents a TypeScript declaration such ",(0,i.kt)("inlineCode",{parentName:"p"},"X")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Y")," in this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export namespace X {\n  export namespace Y {\n    export interface IWidget {\n      render(): void;\n    }\n  }\n}\n")),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apinamespace._constructor_"},"(constructor)(options)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,i.kt)("code",null,"ApiNamespace")," class")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apinamespace.containerkey"},"containerKey")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apinamespace.kind"},"kind")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apiitemkind"},"ApiItemKind")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apinamespace.buildcanonicalreference"},"buildCanonicalReference()")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apinamespace.getcontainerkey"},"getContainerKey(name)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"static")),(0,i.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);