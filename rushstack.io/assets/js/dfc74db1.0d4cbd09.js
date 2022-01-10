"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[51668],{50158:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return u}});var t=r(46393);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function m(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=d(r),u=a,f=s["".concat(l,".").concat(u)]||s[u]||c[u]||i;return r?t.createElement(f,o(o({ref:n},p),{},{components:r})):t.createElement(f,o({ref:n},p))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m.mdxType="string"==typeof e?e:a,o[1]=m;for(var d=2;d<i;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},37418:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return m},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var t=r(61731),a=r(70396),i=(r(46393),r(50158)),o=["components"],m={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,d={unversionedId:"pages/api/ts-command-line.commandlineparameterprovider.definecommandlineremainder",id:"pages/api/ts-command-line.commandlineparameterprovider.definecommandlineremainder",title:"ts-command-line.commandlineparameterprovider.definecommandlineremainder",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParameterProvider &gt; defineCommandLineRemainder",source:"@site/docs/pages/api/ts-command-line.commandlineparameterprovider.definecommandlineremainder.md",sourceDirName:"pages/api",slug:"/pages/api/ts-command-line.commandlineparameterprovider.definecommandlineremainder",permalink:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparameterprovider.definecommandlineremainder",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"CommandLineParameterProvider.defineCommandLineRemainder() method",id:"commandlineparameterproviderdefinecommandlineremainder-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:p};function s(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/ts-command-line.commandlineparameterprovider.definecommandlineremainder/"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparameterprovider.definecommandlineremainder"},"defineCommandLineRemainder")),(0,i.kt)("h2",{id:"commandlineparameterproviderdefinecommandlineremainder-method"},"CommandLineParameterProvider.defineCommandLineRemainder() method"),(0,i.kt)("p",null,"Defines a rule that captures any remaining command line arguments after the recognized portion."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"defineCommandLineRemainder(definition: ICommandLineRemainderDefinition): CommandLineRemainder;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"definition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.icommandlineremainderdefinition"},"ICommandLineRemainderDefinition")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineremainder"},"CommandLineRemainder")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"This feature is useful for commands that pass their arguments along to an external tool, relying on that tool to perform validation. (It could also be used to parse parameters without any validation or documentation, but that is not recommended.)"),(0,i.kt)("p",null,"Example of capturing the remainder after an optional flag parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"example-tool --my-flag this is the remainder\n")),(0,i.kt)("p",null,'In the "--help" documentation, the remainder rule will be represented as "...".'))}s.isMDXComponent=!0}}]);