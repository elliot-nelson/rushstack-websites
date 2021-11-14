"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[93535],{50158:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var a=t(46393);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||n;return t?a.createElement(h,i(i({ref:r},u),{},{components:t})):a.createElement(h,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87668:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=t(74834),o=t(28265),n=(t(46393),t(50158)),i=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"api/node-core-library.ijsonschemavalidateoptions.customerrorheader",id:"api/node-core-library.ijsonschemavalidateoptions.customerrorheader",isDocsHomePage:!1,title:"node-core-library.ijsonschemavalidateoptions.customerrorheader",description:"Home &gt; @rushstack/node-core-library &gt; IJsonSchemaValidateOptions &gt; customErrorHeader",source:"@site/docs/api/node-core-library.ijsonschemavalidateoptions.customerrorheader.md",sourceDirName:"api",slug:"/api/node-core-library.ijsonschemavalidateoptions.customerrorheader",permalink:"/rushstack-websites/rushstack.io/pages/api/node-core-library.ijsonschemavalidateoptions.customerrorheader",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"IJsonSchemaValidateOptions.customErrorHeader property",id:"ijsonschemavalidateoptionscustomerrorheader-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],p={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/api/node-core-library.ijsonschemavalidateoptions.customerrorheader/"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.ijsonschemavalidateoptions"},"IJsonSchemaValidateOptions")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.ijsonschemavalidateoptions.customerrorheader"},"customErrorHeader")),(0,n.kt)("h2",{id:"ijsonschemavalidateoptionscustomerrorheader-property"},"IJsonSchemaValidateOptions.customErrorHeader property"),(0,n.kt)("p",null,"A custom header that will be used to report schema errors."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"customErrorHeader?: string;\n")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,'If omitted, the default header is "JSON validation failed:". The error message starts with the header, followed by the full input filename, followed by the z-schema error tree. If you wish to customize all aspects of the error message, use JsonFile.loadAndValidateWithCallback() or JsonSchema.validateObjectWithCallback().'))}d.isMDXComponent=!0}}]);