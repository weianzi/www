!function(e){function t(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=u.p+""+e+"."+O+".hot-update.js",t.appendChild(n)}function n(e){if("undefined"==typeof XMLHttpRequest)return e(new Error("No browser support"));try{var t=new XMLHttpRequest,n=u.p+""+O+".hot-update.json";t.open("GET",n,!0),t.timeout=1e4,t.send(null)}catch(t){return e(t)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)e(new Error("Manifest request to "+n+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)e(new Error("Manifest request to "+n+" failed."));else{try{var r=JSON.parse(t.responseText)}catch(t){return void e(t)}e(null,r)}}}function r(e){function t(e,t){"ready"===j&&i("prepare"),D++,u.e(e,function(){function n(){D--,"prepare"===j&&(E[e]||l(e),0===D&&0===H&&f())}try{t.call(null,r)}finally{n()}})}var n=k[e];if(!n)return u;var r=function(t){return n.hot.active?k[t]?(k[t].parents.indexOf(e)<0&&k[t].parents.push(e),n.children.indexOf(t)<0&&n.children.push(t)):x=[e]:(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),x=[]),u(t)};for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&(v?Object.defineProperty(r,a,function(e){return{configurable:!0,enumerable:!0,get:function(){return u[e]},set:function(t){u[e]=t}}}(a)):r[a]=u[a]);return v?Object.defineProperty(r,"e",{enumerable:!0,value:t}):r.e=t,r}function a(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],active:!0,accept:function(e,n){if("undefined"==typeof e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n;else t._acceptedDependencies[e]=n},decline:function(e){if("undefined"==typeof e)t._selfDeclined=!0;else if("number"==typeof e)t._declinedDependencies[e]=!0;else for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:c,apply:p,status:function(e){return e?void _.push(e):j},addStatusHandler:function(e){_.push(e)},removeStatusHandler:function(e){var t=_.indexOf(e);t>=0&&_.splice(t,1)},data:g[e]};return t}function i(e){j=e;for(var t=0;t<_.length;t++)_[t].call(null,e)}function o(e){var t=+e+""===e;return t?+e:e}function c(e,t){if("idle"!==j)throw new Error("check() is only allowed in idle status");"function"==typeof e?(b=!1,t=e):(b=e,t=t||function(e){if(e)throw e}),i("check"),n(function(e,n){if(e)return t(e);if(!n)return i("idle"),void t(null,null);P={},A={},E={};for(var r=0;r<n.c.length;r++)A[n.c[r]]=!0;m=n.h,i("prepare"),y=t,w={};for(var a in M)l(a);"prepare"===j&&0===D&&0===H&&f()})}function s(e,t){if(A[e]&&P[e]){P[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(w[n]=t[n]);0===--H&&0===D&&f()}}function l(e){A[e]?(P[e]=!0,H++,t(e)):E[e]=!0}function f(){i("ready");var e=y;if(y=null,e)if(b)p(b,e);else{var t=[];for(var n in w)Object.prototype.hasOwnProperty.call(w,n)&&t.push(o(n));e(null,t)}}function p(t,n){function r(e){for(var t=[e],n={},r=t.slice();r.length>0;){var i=r.pop(),e=k[i];if(e&&!e.hot._selfAccepted){if(e.hot._selfDeclined)return new Error("Aborted because of self decline: "+i);if(0===i)return;for(var o=0;o<e.parents.length;o++){var c=e.parents[o],s=k[c];if(s.hot._declinedDependencies[i])return new Error("Aborted because of declined dependency: "+i+" in "+c);t.indexOf(c)>=0||(s.hot._acceptedDependencies[i]?(n[c]||(n[c]=[]),a(n[c],[i])):(delete n[c],t.push(c),r.push(c)))}}}return[t,n]}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}if("ready"!==j)throw new Error("apply() is only allowed in ready status");"function"==typeof t?(n=t,t={}):t&&"object"==typeof t?n=n||function(e){if(e)throw e}:(t={},n=n||function(e){if(e)throw e});var c={},s=[],l={};for(var f in w)if(Object.prototype.hasOwnProperty.call(w,f)){var p=o(f),d=r(p);if(!d){if(t.ignoreUnaccepted)continue;return i("abort"),n(new Error("Aborted because "+p+" is not accepted"))}if(d instanceof Error)return i("abort"),n(d);l[p]=w[p],a(s,d[0]);for(var p in d[1])Object.prototype.hasOwnProperty.call(d[1],p)&&(c[p]||(c[p]=[]),a(c[p],d[1][p]))}for(var h=[],v=0;v<s.length;v++){var p=s[v];k[p]&&k[p].hot._selfAccepted&&h.push({module:p,errorHandler:k[p].hot._selfAccepted})}i("dispose");for(var y=s.slice();y.length>0;){var p=y.pop(),b=k[p];if(b){for(var _={},H=b.hot._disposeHandlers,D=0;D<H.length;D++){var E=H[D];E(_)}g[p]=_,b.hot.active=!1,delete k[p];for(var D=0;D<b.children.length;D++){var P=k[b.children[D]];if(P){var A=P.parents.indexOf(p);A>=0&&P.parents.splice(A,1)}}}}for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p))for(var b=k[p],M=c[p],D=0;D<M.length;D++){var X=M[D],A=b.children.indexOf(X);A>=0&&b.children.splice(A,1)}i("apply"),O=m;for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(e[p]=l[p]);var $=null;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){for(var b=k[p],M=c[p],q=[],v=0;v<M.length;v++){var X=M[v],E=b.hot._acceptedDependencies[X];q.indexOf(E)>=0||q.push(E)}for(var v=0;v<q.length;v++){var E=q[v];try{E(c)}catch(e){$||($=e)}}}for(var v=0;v<h.length;v++){var N=h[v],p=N.module;x=[p];try{u(p)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(e){$||($=e)}else $||($=e)}}return $?(i("fail"),n($)):(i("idle"),void n(null,s))}function u(t){if(k[t])return k[t].exports;var n=k[t]={exports:{},id:t,loaded:!1,hot:a(t),parents:x,children:[]};return e[t].call(n.exports,n,n.exports,r(t)),n.loaded=!0,n.exports}var d=window.webpackJsonp;window.webpackJsonp=function(t,n){for(var r,a,i=0,o=[];i<t.length;i++)a=t[i],M[a]&&o.push.apply(o,M[a]),M[a]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);for(d&&d(t,n);o.length;)o.shift().call(null,u);if(n[0])return k[0]=0,u(0)};var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){s(e,t),h&&h(e,t)};var v=!1;try{Object.defineProperty({},"x",{get:function(){}}),v=!0}catch(e){}var y,w,m,b=!0,O="c2b1adddfc6cbfa338b2",g={},x=[],_=[],j="idle",H=0,D=0,E={},P={},A={},k={},M={5:0};u.e=function(e,t){if(0===M[e])return t.call(null,u);if(void 0!==M[e])M[e].push(t);else{M[e]=[t];var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.async=!0,r.src=u.p+""+e+".js/"+O.substr(0,8)+"."+({0:"authentication",1:"company",2:"contactus",3:"evaluate",4:"index"}[e]||e)+".js",n.appendChild(r)}},u.m=e,u.c=k,u.p="",u.h=function(){return O}}([,,function(e,t){},,,function(e,t,n){"use strict";var r=n(6),a=n(7);e.exports=function(){$(function(){r(),a()})}()},function(e,t){"use strict";e.exports=function(){var e=$(".site-nav"),t='\n        <div>\n          <a class="phone" href="javascript:;"><i></i>电话\n            <p>400-3432434-33</p>\n          </a>\n          <a class="weixin" href="javascript:;"><i></i>微信\n            <p><img src="img/weixincode-pop.png" alt="" /></p>\n          </a>\n          <a class="ask" href="javascript:;"><i></i>咨询</a>\n        </div>\n    ';e.html(t)}},function(e,t){"use strict";e.exports=function(){var e=($("body"),$(window).width(),$(".footer")),t='\n        <p>林间小道XXXX有限公司 @ 版权所有</p>\n        <p>© 2018 ffff.COM 版权所有 ltd. All rights reserved. <a href="/admin">后台管理</a></p>\n    ';e.html(t)}},function(e,t){"use strict";e.exports=function(e){var t=$("header.site-header"),n='\n    <div>\n      <ul class="clearfix">\n        <li class="'+("home"===e?"active":"")+'"><a href="index.html">主页</a></li>\n        <li class="'+("evaluate"===e?"active":"")+'"><a href="evaluate.html">配色与估价</a></li>\n        <li class="'+("authentication"===e?"active":"")+'"><a href="authentication.html">检测认证</a></li>\n        <li class="'+("company"===e?"active":"")+'"><a href="company.html">公司简介</a></li>\n        <li class="'+("contactus"===e?"active":"")+'"><a href="contactus.html">联系</a></li>\n      </ul>\n    <div>\n    ';t.html(n)}}]);