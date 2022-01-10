"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[45329],{50158:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m.mdxType="string"==typeof e?e:a,o[1]=m;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68970:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(61731),a=n(70396),i=(n(46393),n(50158)),o=["components"],m={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"pages/api/ts-command-line.commandlineparameterwithargument.completions",id:"pages/api/ts-command-line.commandlineparameterwithargument.completions",title:"ts-command-line.commandlineparameterwithargument.completions",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParameterWithArgument &gt; completions",source:"@site/docs/pages/api/ts-command-line.commandlineparameterwithargument.completions.md",sourceDirName:"pages/api",slug:"/pages/api/ts-command-line.commandlineparameterwithargument.completions",permalink:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparameterwithargument.completions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"CommandLineParameterWithArgument.completions property",id:"commandlineparameterwithargumentcompletions-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],s={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/ts-command-line.commandlineparameterwithargument.completions/"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparameterwithargument"},"CommandLineParameterWithArgument")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparameterwithargument.completions"},"completions")),(0,i.kt)("h2",{id:"commandlineparameterwithargumentcompletions-property"},"CommandLineParameterWithArgument.completions property"),(0,i.kt)("p",null,"An optional callback that provides a list of custom choices for tab completion."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly completions: (() => Promise<string[]>) | undefined;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"This option is only used when ",(0,i.kt)("inlineCode",{parentName:"p"},"ICommandLineParserOptions.enableTabCompletionAction")," is enabled."))}u.isMDXComponent=!0}}]);