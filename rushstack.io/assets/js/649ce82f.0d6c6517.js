"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[32371],{50158:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(46393);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(k,s(s({ref:e},p),{},{components:r})):n.createElement(k,s({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77480:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(61731),a=r(70396),o=(r(46393),r(50158)),s=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"pages/api/terminal.discardstdouttransform",id:"pages/api/terminal.discardstdouttransform",title:"terminal.discardstdouttransform",description:"Home &gt; @rushstack/terminal &gt; DiscardStdoutTransform",source:"@site/docs/pages/api/terminal.discardstdouttransform.md",sourceDirName:"pages/api",slug:"/pages/api/terminal.discardstdouttransform",permalink:"/rushstack-websites/rushstack.io/pages/api/terminal.discardstdouttransform",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"DiscardStdoutTransform class",id:"discardstdouttransform-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Constructors",id:"constructors",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],u={toc:p};function d(t){var e=t.components,r=(0,a.Z)(t,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/terminal.discardstdouttransform/"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/terminal"},"@rushstack/terminal")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/terminal.discardstdouttransform"},"DiscardStdoutTransform")),(0,o.kt)("h2",{id:"discardstdouttransform-class"},"DiscardStdoutTransform class"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DiscardStdoutTransform")," discards ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," chunks while fixing up malformed ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr")," lines."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class DiscardStdoutTransform extends TerminalTransform \n")),(0,o.kt)("b",null,"Extends:")," [TerminalTransform](/rushstack-websites/rushstack.io/pages/api/terminal.terminaltransform)",(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Suppose that a poorly behaved process produces output like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"process.stdout.write('Starting operation...\\n');\nprocess.stderr.write('An error occurred');\nprocess.stdout.write('\\nFinishing up\\n');\nprocess.stderr.write('The process completed with errors\\n');\n")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr")," are combined on the console, the mistake in the output would not be noticeable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Starting operation...\nAn error occurred\nFinishing up\nThe process completed with errors\n")),(0,o.kt)("p",null,"However, if we discard ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," , then ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr")," is missing a newline:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"An error occurredThe process completed with errors\n")),(0,o.kt)("p",null,"Tooling scripts can introduce these sorts of problems via edge cases that are difficult to find and fix. ",(0,o.kt)("inlineCode",{parentName:"p"},"DiscardStdoutTransform")," can discard the ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," stream and fix up ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"An error occurred\nThe process completed with errors\n")),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/terminal.discardstdouttransform._constructor_"},"(constructor)(options)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)"))," Constructs a new instance of the ",(0,o.kt)("code",null,"DiscardStdoutTransform")," class")))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/terminal.discardstdouttransform.onwritechunk"},"onWriteChunk(chunk)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)")))))))}d.isMDXComponent=!0}}]);