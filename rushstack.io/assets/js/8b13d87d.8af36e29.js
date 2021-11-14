"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[43777],{50158:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(r),m=n,f=g["".concat(l,".").concat(m)]||g[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},14417:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var a=r(74834),n=r(28265),o=(r(46393),r(50158)),i=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"api/api-extractor.extractormessage.loglevel",id:"api/api-extractor.extractormessage.loglevel",isDocsHomePage:!1,title:"api-extractor.extractormessage.loglevel",description:"Home &gt; @microsoft/api-extractor &gt; ExtractorMessage &gt; logLevel",source:"@site/docs/api/api-extractor.extractormessage.loglevel.md",sourceDirName:"api",slug:"/api/api-extractor.extractormessage.loglevel",permalink:"/rushstack-websites/rushstack.io/pages/api/api-extractor.extractormessage.loglevel",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"ExtractorMessage.logLevel property",id:"extractormessageloglevel-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:p};function g(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/api/api-extractor.extractormessage.loglevel/"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor.extractormessage"},"ExtractorMessage")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor.extractormessage.loglevel"},"logLevel")),(0,o.kt)("h2",{id:"extractormessageloglevel-property"},"ExtractorMessage.logLevel property"),(0,o.kt)("p",null,"Specifies how the message should be reported."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"get logLevel(): ExtractorLogLevel;\n\nset logLevel(value: ExtractorLogLevel);\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If the ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor.iextractorinvokeoptions.messagecallback"},"IExtractorInvokeOptions.messageCallback")," handles the message (i.e. sets ",(0,o.kt)("inlineCode",{parentName:"p"},"handled = true")," ), it can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"logLevel")," to determine how to display the message."),(0,o.kt)("p",null,"Alternatively, if API Extractor is handling the message, the ",(0,o.kt)("inlineCode",{parentName:"p"},"messageCallback")," could assign ",(0,o.kt)("inlineCode",{parentName:"p"},"logLevel")," to change how it will be processed. However, in general the recommended practice is to configure message routing using the ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," section in api-extractor.json."),(0,o.kt)("p",null,"To discard a message entirely, assign ",(0,o.kt)("inlineCode",{parentName:"p"},"logLevel = none")," ."))}g.isMDXComponent=!0}}]);