"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[2129],{50158:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54001:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(74834),a=n(28265),i=(n(46393),n(50158)),o=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"api/node-core-library.typeuuid",id:"api/node-core-library.typeuuid",isDocsHomePage:!1,title:"node-core-library.typeuuid",description:"Home &gt; @rushstack/node-core-library &gt; TypeUuid",source:"@site/docs/api/node-core-library.typeuuid.md",sourceDirName:"api",slug:"/api/node-core-library.typeuuid",permalink:"/rushstack-websites/rushstack.io/pages/api/node-core-library.typeuuid",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"TypeUuid class",id:"typeuuid-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/api/node-core-library.typeuuid/"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.typeuuid"},"TypeUuid")),(0,i.kt)("h2",{id:"typeuuid-class"},"TypeUuid class"),(0,i.kt)("p",null,"Provides a version-independent implementation of the JavaScript ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceof")," operator."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class TypeUuid \n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"The JavaScript ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceof")," operator normally only identifies objects from a particular library instance. For example, suppose the NPM package ",(0,i.kt)("inlineCode",{parentName:"p"},"example-lib")," has two published versions 1.2.0 and 1.3.0, and it exports a class called ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," . Suppose some code consumes version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.3.0")," of the library, but it receives an object that was constructed using version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.2.0")," . In this situation ",(0,i.kt)("inlineCode",{parentName:"p"},"a instanceof A")," will return ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," , even though ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," is an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," . The reason is that there are two prototypes for ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," ; one for each version."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeUuid")," facility provides a way to make ",(0,i.kt)("inlineCode",{parentName:"p"},"a instanceof A")," return true for both prototypes of ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," , by instead using a universally unique identifier (UUID) to detect object instances."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Symbol.hasInstance")," to enable the system ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceof")," operator to recognize type UUID equivalence:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const uuidWidget: string = '9c340ef0-d29f-4e2e-a09f-42bacc59024b';\nclass Widget {\n  public static [Symbol.hasInstance](instance: object): boolean {\n    return TypeUuid.isInstanceOf(instance, uuidWidget);\n  }\n}\n")),(0,i.kt)("p",null,"// Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Widget as Widget1 } from 'v1-of-library';\nimport { Widget as Widget2 } from 'v2-of-library';\nconst widget = new Widget2();\nconsole.log(widget instanceof Widget1); // prints true\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.typeuuid.isinstanceof"},"isInstanceOf(targetObject, typeUuid)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"static")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns true if the ",(0,i.kt)("code",null,"targetObject")," is an instance of a JavaScript class that was previously registered using the specified ",(0,i.kt)("code",null,"typeUuid"),". Base classes are also considered.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.typeuuid.registerclass"},"registerClass(targetClass, typeUuid)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"static")),(0,i.kt)("td",{parentName:"tr",align:null},"Registers a JavaScript class as having a type identified by the specified UUID.")))))}d.isMDXComponent=!0}}]);