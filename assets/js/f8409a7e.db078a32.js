(self.webpackChunkreact_native_datepicker_website=self.webpackChunkreact_native_datepicker_website||[]).push([[206],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(n),m=i,f=l["".concat(u,".").concat(m)]||l[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(2263),i=n(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,u=o.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(c)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+d:d}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},1046:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return l}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=n(4996),c=["components"],u={sidebar_position:1,title:"Intro"},s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Intro",description:"This repository was moved out of the react native community GH organization, in accordance to this proposal. The module is still published on npm under the old namespace (as documented) but will be published under a new namespace at some point, with a major version bump.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/rn-datepicker-website/docs/intro",editUrl:"https://github.com/react-native-datetimepicker/datetimepicker/docs/intro.mdx",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Intro"},sidebar:"tutorialSidebar",next:{title:"Contributing",permalink:"/rn-datepicker-website/docs/contributing"}},d=[{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]},{value:"Windows",id:"windows",children:[]}],p={toc:d};function l(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This repository was moved out of the react native community GH organization, in accordance to this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/discussions-and-proposals/issues/176"},"proposal"),". The module is still published on ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," under the old namespace (as documented) but will be published under a new namespace at some point, with a major version bump."),(0,o.kt)("h2",{id:"ios"},"iOS"),(0,o.kt)("img",{src:(0,a.Z)("/img/ios_date.png")}),(0,o.kt)("img",{src:(0,a.Z)("/img/ios_time.png")}),(0,o.kt)("h2",{id:"android"},"Android"),(0,o.kt)("img",{src:(0,a.Z)("/img/android_date.png")}),(0,o.kt)("img",{src:(0,a.Z)("/img/android_time.png")}),(0,o.kt)("h2",{id:"windows"},"Windows"),(0,o.kt)("img",{src:(0,a.Z)("/img/windows_date.png")}),(0,o.kt)("img",{src:(0,a.Z)("/img/windows_time_1.png")}),(0,o.kt)("img",{src:(0,a.Z)("/img/windows_time_2.png")}))}l.isMDXComponent=!0}}]);