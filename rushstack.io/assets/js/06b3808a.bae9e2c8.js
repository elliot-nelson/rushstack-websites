"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[29908],{50158:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51995:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var r=n(74834),a=n(28265),i=(n(46393),n(50158)),o=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,s={unversionedId:"api/ts-command-line.commandlinechoicelistparameter.values",id:"api/ts-command-line.commandlinechoicelistparameter.values",isDocsHomePage:!1,title:"ts-command-line.commandlinechoicelistparameter.values",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineChoiceListParameter &gt; values",source:"@site/docs/api/ts-command-line.commandlinechoicelistparameter.values.md",sourceDirName:"api",slug:"/api/ts-command-line.commandlinechoicelistparameter.values",permalink:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlinechoicelistparameter.values",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m=[{value:"CommandLineChoiceListParameter.values property",id:"commandlinechoicelistparametervalues-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlinechoicelistparameter"},"CommandLineChoiceListParameter")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlinechoicelistparameter.values"},"values")),(0,i.kt)("h2",{id:"commandlinechoicelistparametervalues-property"},"CommandLineChoiceListParameter.values property"),(0,i.kt)("p",null,"Returns the string arguments for a choice list parameter that was parsed from the command line."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get values(): ReadonlyArray<string>;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"The array will be empty if the command-line has not been parsed yet, or if the parameter was omitted and has no default value."))}p.isMDXComponent=!0}}]);