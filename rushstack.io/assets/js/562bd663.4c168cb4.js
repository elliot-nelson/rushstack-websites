"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[87783],{50158:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return w}});var r=t(46393);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),w=i,d=m["".concat(s,".").concat(w)]||m[w]||c[w]||a;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function w(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91738:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=t(61731),i=t(70396),a=(t(46393),t(50158)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"pages/api/terminal.normalizenewlinestextrewriter.ensurenewlineatend",id:"pages/api/terminal.normalizenewlinestextrewriter.ensurenewlineatend",title:"terminal.normalizenewlinestextrewriter.ensurenewlineatend",description:"Home &gt; @rushstack/terminal &gt; NormalizeNewlinesTextRewriter &gt; ensureNewlineAtEnd",source:"@site/docs/pages/api/terminal.normalizenewlinestextrewriter.ensurenewlineatend.md",sourceDirName:"pages/api",slug:"/pages/api/terminal.normalizenewlinestextrewriter.ensurenewlineatend",permalink:"/rushstack-websites/rushstack.io/pages/api/terminal.normalizenewlinestextrewriter.ensurenewlineatend",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"NormalizeNewlinesTextRewriter.ensureNewlineAtEnd property",id:"normalizenewlinestextrewriterensurenewlineatend-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/terminal.normalizenewlinestextrewriter.ensurenewlineatend/"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/terminal"},"@rushstack/terminal")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/terminal.normalizenewlinestextrewriter"},"NormalizeNewlinesTextRewriter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/terminal.normalizenewlinestextrewriter.ensurenewlineatend"},"ensureNewlineAtEnd")),(0,a.kt)("h2",{id:"normalizenewlinestextrewriterensurenewlineatend-property"},"NormalizeNewlinesTextRewriter.ensureNewlineAtEnd property"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," , then ",(0,a.kt)("inlineCode",{parentName:"p"},"NormalizeNewlinesTextRewriter.close()")," will append a newline to the output if it ends with an incomplete line."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly ensureNewlineAtEnd: boolean;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If the output is an empty string, then a newline will NOT be appended, because writing an empty string does not produce an incomplete line."))}m.isMDXComponent=!0}}]);