!function e(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var o=n();for(var r in o)("object"==typeof exports?exports:t)[r]=o[r]}}(this,function(){return o={},r.m=n={1:function(e,t,n){"use strict";n.r(t);var o=n(7),d=n.n(o),r=function(){if("string"==typeof self.origin&&~self.origin.indexOf("://"))return self.origin;var e=document.location,t=e.protocol,n=e.host,o;return"".concat(t,"//").concat(n)},a=n(3);n.d(t,"send",function(){return f}),n.d(t,"on",function(){return p}),n.d(t,"off",function(){return y}),n.d(t,"once",function(){return m}),n.d(t,"onRequest",function(){return h}),n.d(t,"request",function(){return b});var i="sqs",c={};function s(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach(function(e){!t.hasOwnProperty(e)||null===t[e]||"object"!==d()(t[e])&&"function"!=typeof t[e]||Object.isFrozen(t[e])||s(t[e])}),t}function u(e){return e.origin===r()&&("object"===d()(e.data)&&(e.data.namespace===i&&"string"==typeof e.data.key))}function l(e,t,n){var o;c[e]&&c[e].filter(function(e){return!n||e.signature===n}).forEach(function(e){e.callback.apply(null,[t])})}function f(e,t,n){try{var o={namespace:i,key:e,payload:t,signature:n};window.postMessage(o,r())}catch(e){console.error(e)}}function p(e,t,n){void 0===c[e]&&(c[e]=[]),c[e].push({callback:t,signature:n})}function y(e,t){c[e]=c[e].filter(function(e){return e.callback!==t})}function m(o,t){return new Promise(function(n){var e;p(o,function e(t){y(o,e),n(t)},t)})}function h(t,e,n){p("".concat(t,"-request"),function(){e().then(function(e){f("".concat(t,"-response"),e,n)})},n)}function b(e,t){var n=m("".concat(e,"-response"),t).then(function(e){return e});return f("".concat(e,"-request"),t),n}function v(e,t){var r=[],n=function e(t,n){var o=1<arguments.length&&void 0!==n?n:"";r.push({object:t,path:o})};for(n(e);0<r.length;)for(var o=r.pop(),a=o.object,i=o.path,c,s=0,u=Object.keys(a);s<u.length;s++){var l=u[s],f=a[l],p=""===i?l:"".concat(i,".").concat(l);"object"===d()(f)?n(f,p):a[l]=t(f,p)}return e}function g(e){var t;return s(v(e,function(e,t){return t}))}g(a.a),"undefined"!=typeof window&&window.addEventListener("message",function(e){if(u(e)){var t=e.data,n,o,r;l(t.key,t.payload,t.signature)}})},28:function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.exports=n},3:function(e,t,n){"use strict";var o={ready:!0,currency:{active:!0,changed:!0,showOverlay:!0},language:{active:!0,changed:!0,showOverlay:!0},nationality:{isVATApplicable:!0,isInEU:!0}},r={linkClick:!0,loadImages:!0,resize:!0,componentInitialized:!0},a={fetchLogoWall:!0,getTemplate:!0,getCustomerExample:!0},i,c,s,u,l,f={heroHomeNov18:{startAutoplay:!0,stopAutoplay:!0},featuredCustomers:{startAutoplay:!0,stopAutoplay:!0},featureTextGallery:{startAutoplay:!0,stopAutoplay:!0},header:{setDarkBackground:!0,setLightBackground:!0,disableSticky:!0,enableSticky:!0},sideBySideFullBleedSlideshow:{startAutoplay:!0,stopAutoplay:!0}},p=t.a={i18n:o,page:r,taxonomy:a,components:f}},4:function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e.exports=n},6:function(e,t){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}e.exports=n},7:function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function e(t){return n(t)}:t.exports=o=function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(e)}t.exports=o},812:function(e,t,n){"use strict";n.r(t);var o=n(4),r=n.n(o),a=n(6),i=n.n(a),c=n(28),s=n.n(c),u=n(1),l=n(3),f=n(94),p=function(){function t(e){var o=this;r()(this,t),s()(this,"toggleQaBlock",function(e){var t,n;o.refs.qaBlocks[e].classList.contains("is-open")?o.closeQaBlock(e):o.openQaBlock(e)}),s()(this,"handleResize",function(){o.setAnswerBlocksHeights(),o.refs.qaBlocks.forEach(function(e,t){o.closeQaBlock(t)})}),this.refs={qaHeaders:Array.from(e.querySelectorAll(".faq-block__header")),qaBlocks:Array.from(e.querySelectorAll(".faq-block__qa")),answerBlocks:Array.from(e.querySelectorAll(".faq-block__answer-wrapper"))},this.refs.qaHeaders.forEach(function(e,t){e.addEventListener("click",function(){o.toggleQaBlock(t)})}),this.setAnswerBlocksHeights(),u.on(l.a.page.resize,this.handleResize),this.handleResize()}return i()(t,[{key:"setAnswerBlocksHeights",value:function e(){var t=this;this.answerHeights=[],this.refs.answerBlocks.forEach(function(e){e.removeAttribute("style"),t.answerHeights.push(e.clientHeight)})}},{key:"closeQaBlock",value:function e(t){this.refs.qaBlocks[t].classList.remove("is-open"),this.refs.answerBlocks[t].style.height="0px"}},{key:"openQaBlock",value:function e(t){this.refs.qaBlocks[t].classList.add("is-open"),this.refs.answerBlocks[t].style.height="".concat(this.answerHeights[t],"px")}}]),t}();Object(f.b)(p,"faq-block")},94:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return r}),n.d(t,"c",function(){return i});var c=n(1),s=n(3),y,m;function o(e,o,t){try{if(void 0===t){var n,r=Array.from(document.querySelectorAll("[data-component-id]")).filter(function(e){var t=""===e.dataset.componentId,n=e.dataset.componentName===o;return t&&n});if(r.length<=0)throw Error("No uninitialized component containers found.");t=r.pop()}var a=window.componentId();t.dataset.componentId=a;var i=new e(t,a);return c.send(s.a.page.componentInitialized,{id:a}),i}catch(e){console.error("Unable to initialize component.",e)}}function r(e){return e.dataset.componentId}function a(e){return e.dataset.componentName}function i(e){var f=e.template,p=e.content,d=e.parentElement;return new Promise(function(e,t){if(d||t("Must specify parentElement of component."),!y){var n=document.getElementById("cdn-lark");y=n?n.dataset.src.split("assets")[0]:"/"}if(!m){var o=window.__templateVersion;m=o?"?".concat(o):"?"}var r=document.createElement("div"),a,i;r.innerHTML=f(p),"/"!==y&&Array.from(r.getElementsByTagName("link")).forEach(function(e){var t,n=e.getAttribute("href").split("styles")[1],o="".concat(y,"assets/styles").concat(n);e.setAttribute("href",o)});Array.from(r.getElementsByTagName("squarespace:script")).forEach(function(e){var t=e.getAttribute("src"),n="".concat(y,"scripts/").concat(t).concat(m),o=document.createElement("script");o.setAttribute("src",n),e.parentElement.appendChild(o),e.parentElement.removeChild(e)});var c=Array.from(r.children),s=c.find(function(e){return void 0!==e.dataset.componentId}),u=c.find(function(e){return"LINK"===e.tagName}),l=c.find(function(e){return"SCRIPT"===e.tagName});u.addEventListener("load",function(){d.appendChild(s),d.appendChild(l),l.addEventListener("load",function(){e(s)})}),d.appendChild(u)})}}},r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function e(){return t.default}:function e(){return t};return r.d(e,"a",e),e},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=812);function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var n,o});