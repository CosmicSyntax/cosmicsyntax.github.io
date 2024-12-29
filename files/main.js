(()=>{"use strict";var e,t,n,r,o={927:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var r=n(113),o=n(583),a=n(378),i=n(114),c=e([o]);o=(c.then?(await c)():c)[0];function u(){return e=this,t=void 0,o=function(){var e,t,n,o,a;return function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}(this,(function(i){switch(i.label){case 0:return e=new Array,t=(0,r.J)("./data/projects.json"),n=(0,r.J)("./data/about.json"),o=(0,r.J)("./data/interests.json"),a=(0,r.J)("https://api.reddit.com/user/alegionnaire/comments.json?limit=3"),[4,t.then((function(t){return e.push(t)})).catch((function(){return console.error("Projects failed...")}))];case 1:return i.sent(),console.log("Loaded projects..."),[4,n.then((function(t){return e.push(t)})).catch((function(){return console.error("About failed..")}))];case 2:return i.sent(),console.log("Loaded about..."),[4,o.then((function(t){return e.push(t)})).catch((function(){return console.error("Interests failed...")}))];case 3:return i.sent(),console.log("Loaded interests..."),[4,a.then((function(t){return e.push(t)})).catch((function(){return console.error("Reddit failed...")}))];case 4:if(i.sent(),console.log("Loaded reddit..."),0==e.length)throw new Error("All GET request failed...");return[2,e]}}))},new((n=void 0)||(n=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function c(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((o=o.apply(e,t||[])).next())}));var e,t,n,o}u().then((function(e){var t=new a.T(e[3]),n=new i._(t.getdata()).construct_il().join(" "),r=document.getElementById("reddit_anchor"),o=document.createElement("ul");o.className="list-group",o.innerHTML=n,r.appendChild(o)})).catch((function(e){return console.error(e)})),t()}catch(s){t(s)}}))},583:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var r=n(95),o=n(973),a=n(383),i=e([r]);r=(i.then?(await i)():i)[0];function c(e){return t=this,n=void 0,i=function(){var t,n,o,i;return function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}(this,(function(c){switch(c.label){case 0:return[4,(u=e,new Promise((function(e){return setTimeout((function(){return e(!0)}),u)})))];case 1:return c.sent(),t=document.getElementById("liveToast"),n=document.querySelector("#liveToast .toast-body"),o=document.querySelector("#liveToast .me-auto"),i=document.querySelector("#liveToast .right-msg"),n.innerHTML='<img src="https://static.wikia.nocookie.net/mugen/images/e/e8/ClippyArtwork.png" width="25%" class="rounded me-2" alt = "..."><span>'.concat(r.O,"</span>"),o.textContent="Hello there!",i.textContent="just now",new a.Toast(t).show(),[2]}var u}))},new((o=void 0)||(o=Promise))((function(e,r){function a(e){try{u(i.next(e))}catch(e){r(e)}}function c(e){try{u(i.throw(e))}catch(e){r(e)}}function u(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,c)}u((i=i.apply(t,n||[])).next())}));var t,n,o,i}(0,o.m)().then((function(){c(5e3).then((function(){return console.log("Toast has launched!")}))})),t()}catch(u){t(u)}}))},378:(e,t,n)=>{n.d(t,{T:()=>o});var r=function(){},o=function(){function e(e){this.data=e}return Object.defineProperty(e.prototype,"property",{get:function(){return this.data.modhash},enumerable:!1,configurable:!0}),e.prototype.getdata=function(){var e=this.data.data.children,t=new Array;return e.forEach((function(e){var n=new r;n.title=e.data.link_title,n.comment=e.data.body,n.subreddit=e.data.subreddit,n.link=e.data.link_permalink,n.hash=e.data.modhash,n.likes=e.data.score,t.push(n)})),t},e}()},114:(e,t,n)=>{n.d(t,{_:()=>r});var r=function(){function e(e){this.data=e}return Object.defineProperty(e.prototype,"property",{get:function(){return this.data[0].hash},enumerable:!1,configurable:!0}),e.prototype.construct_il=function(){var e=new Array;return this.data.forEach((function(t){e.push('\n\t\t\t\t\t<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start" title="'.concat(t.title,'">\n\t\t\t\t\t\t<div class="ms-2 me-auto text-truncate">\n\t\t\t\t\t\t\t<div class="fw-bold text-truncate">').concat(t.title,'</div>\n\t\t\t\t\t\t\t<a href="').concat(t.link,'" target="_blank">').concat(t.comment,'</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class="badge bg-success rounded-pill">').concat(t.likes,"</span>\n\t\t\t\t\t</li>\n\n\t\t\t\t"))})),e},e}()},113:(e,t,n)=>{function r(e){return new Promise((function(t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.onload=function(){200==r.status?t(JSON.parse(r.response)):n(r.statusText)},r.onerror=function(){n(r.statusText)},r.send()}))}n.d(t,{J:()=>r})},95:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{O:()=>o});var o,a=n(97),i=e([a]),c=(0,(a=(i.then?(await i)():i)[0]).KV)();o="m"===c?"Good Morning!":"a"===c?"Good Afternoon!":"e"===c?"Good Evening!":"You're up late!",r()}catch(e){r(e)}}))},973:(e,t,n)=>{n.d(t,{m:()=>i});const r=$;var o=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},a=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};function i(){return o(this,void 0,void 0,(function(){var e,t,n,r;return a(this,(function(o){switch(o.label){case 0:return e=[["HsQlpaYTE0s",0],["x7SQaDTSrVg",0],["8plwv25NYRo",0]],t=Math.floor(Math.random()*e.length),n=document.querySelector("iframe"),r="https://www.youtube.com/embed/".concat(e[t][0],"?playlist=").concat(e[t][0],"&start=").concat(e[t][1],"&controls=0&showinfo=0&rel=0&mute=1&autoplay=1&loop=1"),n.src=r,[4,new Promise((function(e){return setTimeout(e,1e3)}))];case 1:return o.sent(),[2]}}))}))}document.querySelector("#stop").addEventListener("click",(function(){console.log("Stopping video play..."),r.when(r("#stop").addClass("d-none"),r("#stop").removeClass("d-flex"),r("#play").addClass("d-flex"),r("#play").addClass("disabled"),r("#play").removeClass("d-none")).done((function(){var e=document.querySelector("iframe");r.when(r("iframe").fadeOut()).done((function(){e.src="",r("#play").removeClass("disabled")}))}))})),document.querySelector("#play").addEventListener("click",(function(){console.log("Restarting video play..."),r.when(r("#play").addClass("d-none"),r("#play").removeClass("d-flex"),r("#stop").addClass("d-flex"),r("#stop").addClass("disabled"),r("#stop").removeClass("d-none")).done((function(){r.when(i()).done((function(){r("iframe").fadeIn(),r("#stop").removeClass("disabled")}))}))}))},383:e=>{e.exports=bootstrap},97:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{KV:()=>a.KV});var o=n(816),a=n(443),i=e([o]);o=(i.then?(await i)():i)[0],(0,a.lI)(o),o.__wbindgen_start(),r()}catch(e){r(e)}}))},443:(e,t,n)=>{var r;function o(e){r=e}n.d(t,{$P:()=>g,$W:()=>w,EJ:()=>m,Hv:()=>v,KV:()=>h,QR:()=>k,Qn:()=>T,WY:()=>b,bL:()=>x,lI:()=>o,ou:()=>y,x$:()=>_});var a=new("undefined"==typeof TextDecoder?(0,module.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});a.decode();var i=null;function c(){return null!==i&&0!==i.byteLength||(i=new Uint8Array(r.memory.buffer)),i}function u(e,t){return e>>>=0,a.decode(c().subarray(e,e+t))}var s=0,l=new("undefined"==typeof TextEncoder?(0,module.require)("util").TextEncoder:TextEncoder)("utf-8"),f="function"==typeof l.encodeInto?function(e,t){return l.encodeInto(e,t)}:function(e,t){var n=l.encode(e);return t.set(n),{read:e.length,written:n.length}},d=null;function p(){return(null===d||!0===d.buffer.detached||void 0===d.buffer.detached&&d.buffer!==r.memory.buffer)&&(d=new DataView(r.memory.buffer)),d}function h(){var e,t;try{var n=r.greet();return e=n[0],t=n[1],u(n[0],n[1])}finally{r.__wbindgen_free(e,t,1)}}function b(e,t){var n,o;try{n=e,o=t,console.error(u(e,t))}finally{r.__wbindgen_free(n,o,1)}}function w(e){return e.getTime()}function y(e){return e.getTimezoneOffset()}function m(){return new Date}function v(e){return new Date(e)}function g(){return new Error}function _(e,t){var n=function(e,t,n){if(void 0===n){var r=l.encode(e),o=t(r.length,1)>>>0;return c().subarray(o,o+r.length).set(r),s=r.length,o}for(var a=e.length,i=t(a,1)>>>0,u=c(),d=0;d<a;d++){var p=e.charCodeAt(d);if(p>127)break;u[i+d]=p}if(d!==a){0!==d&&(e=e.slice(d)),i=n(i,a,a=d+3*e.length,1)>>>0;var h=c().subarray(i+d,i+a);i=n(i,a,d+=f(e,h).written,1)>>>0}return s=d,i}(t.stack,r.__wbindgen_malloc,r.__wbindgen_realloc),o=s;p().setInt32(e+4,o,!0),p().setInt32(e+0,n,!0)}function x(){var e=r.__wbindgen_export_3,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)}function k(e){return e}function T(e,t){throw new Error(u(e,t))}},816:(e,t,n)=>{var r=n(443);e.exports=n.v(t,e.id,"42275a4de2d1c5238747",{"./pweb_bg.js":{__wbg_new_8a6f238a6ece86ea:r.$P,__wbg_stack_0ed75d68575b0f3c:r.x$,__wbg_error_7534b8e9a36f1ab4:r.WY,__wbindgen_number_new:r.QR,__wbg_getTime_ab8b72009983c537:r.$W,__wbg_getTimezoneOffset_ec375e661c590c7a:r.ou,__wbg_new_41257536af60ed14:r.Hv,__wbg_new0_55477545727914d9:r.EJ,__wbindgen_throw:r.Qn,__wbindgen_init_externref_table:r.bL}})}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,exports:{}};return o[e](n,n.exports,i),n.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(o,a,i)=>{var c;i&&((c=[]).d=-1);var u,s,l,f=new Set,d=o.exports,p=new Promise(((e,t)=>{l=t,s=e}));p[t]=d,p[e]=e=>(c&&e(c),f.forEach(e),p.catch((e=>{}))),o.exports=p,a((o=>{var a;u=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{i[t]=e,r(a)}),(e=>{i[n]=e,r(a)}));var i={};return i[e]=e=>e(a),i}}var c={};return c[e]=e=>{},c[t]=o,c})))(o);var i=()=>u.map((e=>{if(e[n])throw e[n];return e[t]})),s=new Promise((t=>{(a=()=>t(i)).r=0;var n=e=>e!==c&&!f.has(e)&&(f.add(e),e&&!e.d&&(a.r++,e.push(a)));u.map((t=>t[e](n)))}));return a.r?s:i()}),(e=>(e?l(p[n]=e):s(d),r(c)))),c&&c.d<0&&(c.d=0)},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.v=(e,t,n,r)=>{var o=fetch(i.p+""+n+".module.wasm"),a=()=>o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,r))).then((t=>Object.assign(e,t.instance.exports)));return o.then((t=>"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(t,r).then((t=>Object.assign(e,t.instance.exports)),(e=>{if("application/wasm"!==t.headers.get("Content-Type"))return console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e),a();throw e})):a()))},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),i(927)})();