"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[59649],{50158:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47350:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(74834),a=n(28265),i=(n(46393),n(50158)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,p={unversionedId:"api/terminal.iterminalchunk",id:"api/terminal.iterminalchunk",isDocsHomePage:!1,title:"terminal.iterminalchunk",description:"Home &gt; @rushstack/terminal &gt; ITerminalChunk",source:"@site/docs/api/terminal.iterminalchunk.md",sourceDirName:"api",slug:"/api/terminal.iterminalchunk",permalink:"/rushstack-websites/undefined/pages/api/terminal.iterminalchunk",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"ITerminalChunk interface",id:"iterminalchunk-interface",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/terminal"},"@rushstack/terminal")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/terminal.iterminalchunk"},"ITerminalChunk")),(0,i.kt)("h2",{id:"iterminalchunk-interface"},"ITerminalChunk interface"),(0,i.kt)("p",null,"Represents a chunk of output that will ultimately be written to a ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/terminal.terminalwritable"},"TerminalWritable")," ."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ITerminalChunk \n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"Today ",(0,i.kt)("inlineCode",{parentName:"p"},"ITerminalChunk")," represents the ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stderr")," text streams. In the future, we plan to expand it to include other console UI elements such as instructions for displaying an interactive progress bar. We may also add other metadata, for example tracking whether the ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," string is known to contain color codes or not."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ITerminalChunk")," object should be considered to be immutable once it is created. For example, ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/terminal.splittertransform"},"SplitterTransform")," may pass the same chunk to multiple destinations."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/terminal.iterminalchunk.kind"},"kind")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/terminal.terminalchunkkind"},"TerminalChunkKind")),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the kind of information stored in this chunk.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/terminal.iterminalchunk.text"},"text")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The next chunk of text from the ",(0,i.kt)("code",null,"stderr")," or ",(0,i.kt)("code",null,"stdout")," stream.")))))}m.isMDXComponent=!0}}]);