"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[60161],{50158:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return b}});var n=t(46393);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),b=a,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||i;return t?n.createElement(m,o(o({ref:r},l),{},{components:t})):n.createElement(m,o({ref:r},l))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50058:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=t(61731),a=t(70396),i=(t(46393),t(50158)),o=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,s={unversionedId:"pages/api/node-core-library.brand",id:"pages/api/node-core-library.brand",title:"node-core-library.brand",description:"Home &gt; @rushstack/node-core-library &gt; Brand",source:"@site/docs/pages/api/node-core-library.brand.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.brand",permalink:"/rushstack-websites/rushstack.io/pages/api/node-core-library.brand",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},l=[{value:"Brand type",id:"brand-type",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:l};function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/node-core-library.brand/"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.brand"},"Brand")),(0,i.kt)("h2",{id:"brand-type"},"Brand type"),(0,i.kt)("p",null,'A "branded type" is a primitive type with a compile-type key that makes it incompatible with other aliases for the primitive type.'),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type Brand<T, BrandTag extends string> = T & {\n    __brand: BrandTag;\n};\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// PhoneNumber is a branded type based on the \"string\" primitive.\ntype PhoneNumber = Brand<string, 'PhoneNumber'>;\n\nfunction createPhoneNumber(input: string): PhoneNumber {\n  if (!/\\d+(\\-\\d+)+/.test(input)) {\n    throw new Error('Invalid phone number: ' + JSON.stringify(input));\n  }\n  return input as PhoneNumber;\n}\n\nconst p1: PhoneNumber = createPhoneNumber('123-456-7890');\n\n// PhoneNumber is a string and can be used as one:\nconst p2: string = p1;\n\n// But an arbitrary string cannot be implicitly type cast as PhoneNumber.\n// ERROR: Type 'string' is not assignable to type 'PhoneNumber'\nconst p3: PhoneNumber = '123-456-7890';\n")),(0,i.kt)("p",null,"For more information about this pattern, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/blob/7b48a182c05ea4dea81bab73ecbbe9e013a79e99/src/compiler/types.ts#L693-L698"},"this comment")," explaining the TypeScript compiler's introduction of this pattern, and ",(0,i.kt)("a",{parentName:"p",href:"https://spin.atomicobject.com/2018/01/15/typescript-flexible-nominal-typing/"},"this article")," explaining the technique in depth."))}d.isMDXComponent=!0}}]);