"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[35349],{50158:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(46393);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return a?n.createElement(h,s(s({ref:t},m),{},{components:a})):n.createElement(h,s({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},95010:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var n=a(61731),r=a(70396),i=(a(46393),a(50158)),s=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"pages/api/ts-command-line.commandlineparser",id:"pages/api/ts-command-line.commandlineparser",title:"ts-command-line.commandlineparser",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParser",source:"@site/docs/pages/api/ts-command-line.commandlineparser.md",sourceDirName:"pages/api",slug:"/pages/api/ts-command-line.commandlineparser",permalink:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparser",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m=[{value:"CommandLineParser class",id:"commandlineparser-class",children:[],level:2},{value:"Constructors",id:"constructors",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],p={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/ts-command-line.commandlineparser/"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparser"},"CommandLineParser")),(0,i.kt)("h2",{id:"commandlineparser-class"},"CommandLineParser class"),(0,i.kt)("p",null,'The "argparse" library is a relatively advanced command-line parser with features such as word-wrapping and intelligible error messages (that are lacking in other similar libraries such as commander, yargs, and nomnom). Unfortunately, its ruby-inspired API is awkward to use. The abstract base classes CommandLineParser and CommandLineAction provide a wrapper for "argparse" that makes defining and consuming arguments quick and simple, and enforces that appropriate documentation is provided for each parameter.'),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare abstract class CommandLineParser extends CommandLineParameterProvider \n")),(0,i.kt)("b",null,"Extends:")," [CommandLineParameterProvider](/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparameterprovider)",(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparser._constructor_"},"(constructor)(options)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,i.kt)("code",null,"CommandLineParser")," class")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparser.actions"},"actions")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineaction"},"CommandLineAction")," ",">"),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the list of actions that were defined for this CommandLineParser object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparser.selectedaction"},"selectedAction")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineaction"},"CommandLineAction")," ","|"," undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"Reports which CommandLineAction was specified on the command line.")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparser.addaction"},"addAction(action)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Defines a new action that can be used with the CommandLineParser instance.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparser.execute"},"execute(args)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The program entry point will call this method to begin parsing command-line arguments and executing the corresponding action.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparser.executewithouterrorhandling"},"executeWithoutErrorHandling(args)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"This is similar to ",(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparser.execute"},"CommandLineParser.execute()")," , except that execution errors simply cause the promise to reject. It is the caller's responsibility to trap")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparser.getaction"},"getAction(actionName)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Retrieves the action with the specified name. If no matching action is found, an exception is thrown.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparser.onexecute"},"onExecute()")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"This hook allows the subclass to perform additional operations before or after the chosen action is executed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/ts-command-line.commandlineparser.trygetaction"},"tryGetAction(actionName)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Retrieves the action with the specified name. If no matching action is found, undefined is returned.")))))}d.isMDXComponent=!0}}]);