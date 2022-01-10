"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[91934],{50158:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(46393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,y=p["".concat(s,".").concat(d)]||p[d]||l[d]||o;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var m={};for(var s in n)hasOwnProperty.call(n,s)&&(m[s]=n[s]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},84127:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(61731),a=t(70396),o=(t(46393),t(50158)),i=["components"],m={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,c={unversionedId:"pages/api/ts-command-line.commandlineparameter.undocumentedsynonyms",id:"pages/api/ts-command-line.commandlineparameter.undocumentedsynonyms",title:"ts-command-line.commandlineparameter.undocumentedsynonyms",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParameter &gt; undocumentedSynonyms",source:"@site/docs/pages/api/ts-command-line.commandlineparameter.undocumentedsynonyms.md",sourceDirName:"pages/api",slug:"/pages/api/ts-command-line.commandlineparameter.undocumentedsynonyms",permalink:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparameter.undocumentedsynonyms",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"CommandLineParameter.undocumentedSynonyms property",id:"commandlineparameterundocumentedsynonyms-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],l={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/ts-command-line.commandlineparameter.undocumentedsynonyms/"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparameter"},"CommandLineParameter")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparameter.undocumentedsynonyms"},"undocumentedSynonyms")),(0,o.kt)("h2",{id:"commandlineparameterundocumentedsynonyms-property"},"CommandLineParameter.undocumentedSynonyms property"),(0,o.kt)("p",null,"Specifies additional names for this parameter that are accepted but not displayed in the command line help."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly undocumentedSynonyms: string[] | undefined;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This option can be used in cases where a command-line parameter may have been renamed, but the developer doesn't want to break backwards compatibility with systems that may still be using the old name. Only the ",(0,o.kt)("inlineCode",{parentName:"p"},"parameterLongName")," syntax is currently allowed."))}p.isMDXComponent=!0}}]);