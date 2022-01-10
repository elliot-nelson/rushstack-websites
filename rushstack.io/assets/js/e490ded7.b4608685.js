"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[15837],{50158:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(46393);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13971:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=a(61731),r=a(70396),l=(a(46393),a(50158)),i=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,p={unversionedId:"pages/api/terminal.terminalwritable",id:"pages/api/terminal.terminalwritable",title:"terminal.terminalwritable",description:"Home &gt; @rushstack/terminal &gt; TerminalWritable",source:"@site/docs/pages/api/terminal.terminalwritable.md",sourceDirName:"pages/api",slug:"/pages/api/terminal.terminalwritable",permalink:"/rushstack-websites/rushstack.io/pages/api/terminal.terminalwritable",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"TerminalWritable class",id:"terminalwritable-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Constructors",id:"constructors",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],c={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/terminal.terminalwritable/"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/terminal"},"@rushstack/terminal")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/terminal.terminalwritable"},"TerminalWritable")),(0,l.kt)("h2",{id:"terminalwritable-class"},"TerminalWritable class"),(0,l.kt)("p",null,"The abstract base class for objects that can present, route, or process text output for a console application. This output is typically prepared using the ",(0,l.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.terminal"},"Terminal")," API."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare abstract class TerminalWritable \n")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"The design is based loosely on the ",(0,l.kt)("inlineCode",{parentName:"p"},"WritableStream")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"TransformStream")," classes from the system ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Concepts"},"Streams API")," , except that instead of asynchronous byte streams, the ",(0,l.kt)("inlineCode",{parentName:"p"},"TerminalWritable")," system synchronously transmits human readable messages intended to be rendered on a text console or log file."),(0,l.kt)("p",null,"Consider a console application whose output may need to be processed in different ways before finally being output. The conceptual block diagram might look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"         [Terminal API]\n                |\n                V\n       [normalize newlines]\n                |\n                V\n      +----[splitter]-------+\n      |                     |\n      V                     V\n  [shell console]     [remove ANSI colors]\n                            |\n                            V\n                      [write to build.log]\n")),(0,l.kt)("p",null,"The application uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"Terminal")," API to print ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"stderr")," messages, for example with standardized formatting for errors and warnings, and ANSI escapes to make nice colors. Maybe it also includes text received from external processes, whose newlines may be inconsistent. Ultimately we want to write the output to the shell console and a ",(0,l.kt)("inlineCode",{parentName:"p"},"build.log")," file, but we don't want to put ANSI colors in the build log."),(0,l.kt)("p",null,"For the above example, ",(0,l.kt)("inlineCode",{parentName:"p"},"[shell console]")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"[write to build.log]")," would be modeled as subclasses of ",(0,l.kt)("inlineCode",{parentName:"p"},"TerminalWritable")," . The ",(0,l.kt)("inlineCode",{parentName:"p"},"[normalize newlines]")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"[remove ANSI colors]")," steps are modeled as subclasses of ",(0,l.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/terminal.terminaltransform"},"TerminalTransform"),' , because they output to a "destination" object. The ',(0,l.kt)("inlineCode",{parentName:"p"},"[splitter]")," would be implemented using ",(0,l.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/terminal.splittertransform"},"SplitterTransform")," ."),(0,l.kt)("p",null,"The stream of messages are ",(0,l.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/terminal.iterminalchunk"},"ITerminalChunk")," objects, which can represent both ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"stderr")," channels. The pipeline operates synchronously on each chunk, but by processing one chunk at a time, it avoids storing the entire output in memory. This means that operations like ",(0,l.kt)("inlineCode",{parentName:"p"},"[remove ANSI colors]")," cannot be simple regular expressions -- they must be implemented as state machines (",(0,l.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/terminal.textrewriter"},"TextRewriter")," subclasses) capable of matching substrings that span multiple chunks."),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/terminal.terminalwritable._constructor_"},"(constructor)(options)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,l.kt)("code",null,"TerminalWritable")," class")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/terminal.terminalwritable.isopen"},"isOpen")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"This property is initially ",(0,l.kt)("code",null,"true")," when the object is constructed, and becomes ",(0,l.kt)("code",null,"false")," when ",(0,l.kt)("code",null,"close()")," is called.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/terminal.terminalwritable.preventautoclose"},"preventAutoclose")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/terminal.terminalwritable.close"},"close()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Calling this method flushes any remaining outputs and permanently transitions the ",(0,l.kt)("code",null,"TerminalWritable"),' to a "closed" state, where no further chunks can be written.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/terminal.terminalwritable.onclose"},"onClose()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Subclasses can override this empty method to perform additional operations such as closing a file handle.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/terminal.terminalwritable.onwritechunk"},"onWriteChunk(chunk)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Subclasses should implement this ",(0,l.kt)("code",null,"abstract")," method to process the chunk.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/terminal.terminalwritable.writechunk"},"writeChunk(chunk)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Upstream objects call this method to provide inputs to this object.")))))}m.isMDXComponent=!0}}]);