"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[76792],{50158:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},65545:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var r=n(61731),a=n(70396),i=(n(46393),n(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,c={unversionedId:"pages/api/ts-command-line.commandlineintegerparameter.value",id:"pages/api/ts-command-line.commandlineintegerparameter.value",title:"ts-command-line.commandlineintegerparameter.value",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineIntegerParameter &gt; value",source:"@site/docs/pages/api/ts-command-line.commandlineintegerparameter.value.md",sourceDirName:"pages/api",slug:"/pages/api/ts-command-line.commandlineintegerparameter.value",permalink:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineintegerparameter.value",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m=[{value:"CommandLineIntegerParameter.value property",id:"commandlineintegerparametervalue-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],p={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/ts-command-line.commandlineintegerparameter.value/"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineintegerparameter"},"CommandLineIntegerParameter")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineintegerparameter.value"},"value")),(0,i.kt)("h2",{id:"commandlineintegerparametervalue-property"},"CommandLineIntegerParameter.value property"),(0,i.kt)("p",null,"Returns the argument value for an integer parameter that was parsed from the command line."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get value(): number | undefined;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"The return value will be undefined if the command-line has not been parsed yet, or if the parameter was omitted and has no default value."))}s.isMDXComponent=!0}}]);