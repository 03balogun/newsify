webpackJsonp([24],{796:function(t,e,n){"use strict";function r(t){return"/"+t.filter(function(t){return t.length>0}).join("/")}function o(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,a=o.path;i<a.length;i++){var u=a[i];if(":"===u[0]){var c=o.params&&o.params[u.slice(1)];if(!c)return null;e.push(c)}else""!==u&&e.push(u)}return e}function i(t,e,n,o,i,a){var u=r(c(e).concat(o));n&&(u="#"+u),i===B?t.pushState(a,"",u):t.replaceState(a,"",u)}function a(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}function u(t,e,n){var r=t.pathname;if(n){var o=t.hash;r="#"===o[0]?o.slice(1):""}return a(c(e),c(r))}function c(t){if(null==t)return[""];var e=t.split("/").map(function(t){return t.trim()}).filter(function(t){return t.length>0});return 0===e.length?[""]:e}function s(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var e=0,n=t;e<n.length;e++)!function(t){var e=[];t.forEach(function(t){return e.push.apply(e,t.path)});var n=t.map(function(t){return t.id});r(e),n.join(", ")}(n[e]);console.groupEnd()}function l(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var o=n[e];o.to&&(r(o.from),r(o.to))}console.groupEnd()}function h(t,e,n,r,o){return void 0===o&&(o=!1),j.a(this,void 0,void 0,function(){var i,a,u,c;return j.c(this,function(s){switch(s.label){case 0:return s.trys.push([0,6,,7]),i=p(t),r>=e.length||!i?[2,o]:[4,i.componentOnReady()];case 1:return s.sent(),[4,i.setRouteId((a=e[r]).id,a.params,n)];case 2:return(u=s.sent()).changed&&(n=H,o=!0),[4,h(u.element,e,n,r+1,o)];case 3:return o=s.sent(),u.markVisible?[4,u.markVisible()]:[3,5];case 4:s.sent(),s.label=5;case 5:return[2,o];case 6:return c=s.sent(),console.error(c),[2,!1];case 7:return[2]}})})}function d(t){return j.a(this,void 0,void 0,function(){var e,n,r,o;return j.c(this,function(i){switch(i.label){case 0:e=[],r=t,i.label=1;case 1:return(n=p(r))?[4,n.getRouteId()]:[3,3];case 2:return(o=i.sent())?(r=o.element,o.element=void 0,e.push(o),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:n}]}})})}function f(t){return p(t.document.body)?Promise.resolve():new Promise(function(e){t.addEventListener("ionNavWillLoad",e,{once:!0})})}function p(t){if(t)return t.matches(U)?t:t.querySelector(U)||void 0}function v(t,e){var n=e.from;if(void 0===e.to)return!1;if(n.length>t.length)return!1;for(var r=0;r<n.length;r++){var o=n[r];if("*"===o)return!0;if(o!==t[r])return!1}return n.length===t.length}function m(t,e){return e.find(function(e){return v(t,e)})}function g(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n&&t[r].toLowerCase()===e[r].id;r++);return r}function b(t,e){for(var n,r=new q(t),o=!1,i=0;i<e.length;i++){var a=e[i].path;if(""===a[0])o=!0;else{for(var u=0,c=a;u<c.length;u++){var s=c[u],l=r.next();if(":"===s[0]){if(""===l)return null;((n=n||[])[i]||(n[i]={}))[s.slice(1)]=l}else if(l!==s)return null}o=!1}}return o&&o!==(""===r.next())?null:n?e.map(function(t,e){return{id:t.id,path:t.path,params:y(t.params,n[e])}}):e}function y(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign({},t,e):void 0}function w(t,e){for(var n=null,r=0,o=t.map(function(t){return t.id}),i=0,a=e;i<a.length;i++){var u=a[i],c=g(o,u);c>r&&(n=u,r=c)}return n?n.map(function(e,n){return{id:e.id,path:e.path,params:y(e.params,t[n]&&t[n].params)}}):null}function C(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var a=b(t,i[o]);if(null!==a){var u=R(a);u>r&&(r=u,n=a)}}return n}function R(t){for(var e=1,n=1,r=0,o=t;r<o.length;r++)for(var i=0,a=o[r].path;i<a.length;i++){var u=a[i];":"===u[0]?e+=Math.pow(1,n):""!==u&&(e+=Math.pow(2,n)),n++}return e}function E(t){return Array.from(t.children).filter(function(t){return"ION-ROUTE-REDIRECT"===t.tagName}).map(function(t){var e=k(t,"to");return{from:c(k(t,"from")),to:null==e?void 0:c(e)}})}function P(t){return S(O(t))}function O(t,e){return void 0===e&&(e=t),Array.from(e.children).filter(function(t){return"ION-ROUTE"===t.tagName&&t.component}).map(function(e){var n=k(e,"component");if(null==n)throw new Error("component missing in ion-route");return{path:c(k(e,"url")),id:n.toLowerCase(),params:e.componentProps,children:O(t,e)}})}function k(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null}function S(t){for(var e=[],n=0,r=t;n<r.length;n++)D([],e,r[n]);return e}function D(t,e,n){var r=t.slice();if(r.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(var o=0,i=n.children;o<i.length;o++)D(r,e,i[o]);else e.push(r)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"IonRoute",function(){return W}),n.d(e,"IonRouteRedirect",function(){return A}),n.d(e,"IonRouter",function(){return T}),n.d(e,"IonRouterOutlet",function(){return _});var j=n(938),L=n(19),N=n(940),x=n(945),I=(n(20),n(946)),W=function(){function t(){this.url=""}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length)for(var o=0,i=n;o<i.length;o++){var a=i[o];if(t[a]!==e[a])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.componentDidLoad=function(){this.ionRouteDataChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"is",{get:function(){return"ion-route"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{component:{type:String,attr:"component",watchCallbacks:["onUpdate"]},componentProps:{type:"Any",attr:"component-props",watchCallbacks:["onComponentProps"]},url:{type:String,attr:"url",watchCallbacks:["onUpdate"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteDataChanged",method:"ionRouteDataChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}(),A=function(){function t(){}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidLoad=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"is",{get:function(){return"ion-route-redirect"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{from:{type:String,attr:"from",watchCallbacks:["propDidChange"]},to:{type:String,attr:"to",watchCallbacks:["propDidChange"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteRedirectChanged",method:"ionRouteRedirectChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}(),H="root",B="forward",U=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",q=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}(),T=function(){function t(){this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return t.prototype.componentWillLoad=function(){return j.a(this,void 0,void 0,function(){return j.c(this,function(t){switch(t.label){case 0:return[4,f(this.win)];case 1:return t.sent(),[4,this.onRoutesChanged()];case 2:return t.sent(),[2]}})})},t.prototype.componentDidLoad=function(){this.win.addEventListener("ionRouteRedirectChanged",Object(N.i)(this.onRedirectChanged.bind(this),10)),this.win.addEventListener("ionRouteDataChanged",Object(N.i)(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){var t=this.historyDirection(),e=this.getPath();return this.writeNavStateRoot(e,t)},t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,function(){return e.back()})},t.prototype.push=function(t,e){void 0===e&&(e="forward"),t.startsWith(".")&&(t=new URL(t,this.win.location.href).pathname);var n=c(t);return this.setPath(n,e),this.writeNavStateRoot(n,e)},t.prototype.back=function(){return this.win.history.back(),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){this.getPath(),s(P(this.el)),l(E(this.el))},t.prototype.navChanged=function(t){return j.a(this,void 0,void 0,function(){var e,n,r,i,a,u;return j.c(this,function(c){switch(c.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,d(this.win.document.body)];case 1:return e=c.sent(),n=e.ids,r=e.outlet,i=P(this.el),(a=w(n,i))?(u=o(a))?(this.setPath(u,t),[4,this.safeWriteNavState(r,a,H,u,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1]):(console.warn("[ion-router] no matching URL for ",n.map(function(t){return t.id})),[2,!1]);case 2:return c.sent(),[2,!0]}})})},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&m(t,E(this.el))&&this.writeNavStateRoot(t,H)},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),H)},t.prototype.historyDirection=function(){var t=this.win;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));var e=t.history.state,n=this.lastState;return this.lastState=e,e>n?B:e<n?"back":H},t.prototype.writeNavStateRoot=function(t,e){return j.a(this,void 0,void 0,function(){var n,r,o,i,a;return j.c(this,function(u){return t?(n=E(this.el),r=m(t,n),o=null,r&&(this.setPath(r.to,e),o=r.from,t=r.to),i=P(this.el),(a=C(t,i))?[2,this.safeWriteNavState(this.win.document.body,a,e,t,o)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])})})},t.prototype.safeWriteNavState=function(t,e,n,r,o,i){return void 0===i&&(i=0),j.a(this,void 0,void 0,function(){var a,u,c;return j.c(this,function(s){switch(s.label){case 0:return[4,this.lock()];case 1:a=s.sent(),u=!1,s.label=2;case 2:return s.trys.push([2,4,,5]),[4,this.writeNavState(t,e,n,r,o,i)];case 3:return u=s.sent(),[3,5];case 4:return c=s.sent(),console.error(c),[3,5];case 5:return a(),[2,u]}})})},t.prototype.lock=function(){return j.a(this,void 0,void 0,function(){var t,e;return j.c(this,function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise(function(t){return e=t}),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}})})},t.prototype.writeNavState=function(t,e,n,r,o,i){return void 0===i&&(i=0),j.a(this,void 0,void 0,function(){var a,u;return j.c(this,function(c){switch(c.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(a=this.routeChangeEvent(r,o))&&this.ionRouteWillChange.emit(a),[4,h(t,e,n,i)]);case 1:return u=c.sent(),this.busy=!1,a&&this.ionRouteDidChange.emit(a),[2,u]}})})},t.prototype.setPath=function(t,e){this.state++,i(this.win.history,this.root,this.useHash,t,e,this.state)},t.prototype.getPath=function(){return u(this.win.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,o=r(t);return this.previousPath=o,o===n?null:{from:n,redirectedFrom:e?r(e):null,to:o}},Object.defineProperty(t,"is",{get:function(){return"ion-router"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{back:{method:!0},config:{context:"config"},el:{elementRef:!0},navChanged:{method:!0},printDebug:{method:!0},push:{method:!0},queue:{context:"queue"},root:{type:String,attr:"root"},useHash:{type:Boolean,attr:"use-hash"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteWillChange",method:"ionRouteWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRouteDidChange",method:"ionRouteDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"window:popstate",method:"onPopState"},{name:"document:ionBackButton",method:"onBackButton"}]},enumerable:!0,configurable:!0}),t}(),_=function(){function t(){this.animated=!0}return t.prototype.swipeHandlerChanged=function(){this.gesture&&this.gesture.setDisabled(void 0===this.swipeHandler)},t.prototype.componentWillLoad=function(){this.ionNavWillLoad.emit()},t.prototype.componentDidLoad=function(){return j.a(this,void 0,void 0,function(){var t,e=this;return j.c(this,function(r){switch(r.label){case 0:return t=this,[4,n.e(165).then(n.bind(null,951))];case 1:return t.gesture=r.sent().createSwipeBackGesture(this.el,this.queue,function(){return!!e.swipeHandler&&e.swipeHandler.canStart()},function(){return e.swipeHandler&&e.swipeHandler.onStart()},function(t){return e.ani&&e.ani.progressStep(t)},function(t,n,r){e.ani&&e.ani.progressEnd(t,n,r),e.swipeHandler&&e.swipeHandler.onEnd(t)}),this.swipeHandlerChanged(),[2]}})})},t.prototype.componentDidUnload=function(){this.activeEl=this.activeComponent=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.commit=function(t,e,n){return j.a(this,void 0,void 0,function(){var r,o,i;return j.c(this,function(a){switch(a.label){case 0:return[4,this.lock()];case 1:r=a.sent(),o=!1,a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this.transition(t,e,n)];case 3:return o=a.sent(),[3,5];case 4:return i=a.sent(),console.error(i),[3,5];case 5:return r(),[2,o]}})})},t.prototype.setRouteId=function(t,e,n){return j.a(this,void 0,void 0,function(){return j.c(this,function(r){switch(r.label){case 0:return[4,this.setRoot(t,e,{duration:"root"===n?0:void 0,direction:"back"===n?"back":"forward"})];case 1:return[2,{changed:r.sent(),element:this.activeEl}]}})})},t.prototype.getRouteId=function(){return j.a(this,void 0,void 0,function(){var t;return j.c(this,function(e){return[2,(t=this.activeEl)?{id:t.tagName,element:t}:void 0]})})},t.prototype.setRoot=function(t,e,n){return j.a(this,void 0,void 0,function(){var r,o;return j.c(this,function(i){switch(i.label){case 0:return this.activeComponent===t?[2,!1]:(r=this.activeEl,[4,Object(x.a)(this.delegate,this.el,t,["ion-page","ion-page-invisible"],e)]);case 1:return o=i.sent(),this.activeComponent=t,this.activeEl=o,[4,this.commit(o,r,n)];case 2:return i.sent(),[4,Object(x.b)(this.delegate,r)];case 3:return i.sent(),[2,!0]}})})},t.prototype.transition=function(t,e,n){return void 0===n&&(n={}),j.a(this,void 0,void 0,function(){var r,o,i,a,u,c,s,l=this;return j.c(this,function(h){switch(h.label){case 0:return e===t?[2,!1]:(this.ionNavWillChange.emit(),o=(r=this).mode,i=r.queue,a=r.win,u=r.el,c=this.animated&&this.config.getBoolean("animated",!0),s=this.animation||n.animationBuilder||this.config.get("navAnimation"),[4,Object(I.c)(Object.assign({mode:o,queue:i,animated:c,animationBuilder:s,window:a,enteringEl:t,leavingEl:e,baseEl:u,progressCallback:n.progressAnimation?function(t){return l.ani=t}:void 0},n))]);case 1:return h.sent(),this.ionNavDidChange.emit(),[2,!0]}})})},t.prototype.lock=function(){return j.a(this,void 0,void 0,function(){var t,e;return j.c(this,function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise(function(t){return e=t}),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}})})},t.prototype.render=function(){return Object(L.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-router-outlet"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animation:{type:"Any",attr:"animation"},commit:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getRouteId:{method:!0},mode:{type:String,attr:"mode"},queue:{context:"queue"},setRouteId:{method:!0},swipeHandler:{type:"Any",attr:"swipe-handler",watchCallbacks:["swipeHandlerChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!1,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!1,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-router-outlet-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:!0,configurable:!0}),t}()},938:function(t,e,n){"use strict";function r(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})}function i(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(a=2&n[0]?i.return:n[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(a=c.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){c.label=n[1];break}if(6===n[0]&&c.label<a[1]){c.label=a[1],a=n;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(n);break}a[2]&&c.ops.pop(),c.trys.pop();continue}n=e.call(t,c)}catch(t){n=[6,t],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,u,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return u={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u}e.b=r,e.a=o,e.c=i;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)}},940:function(t,e,n){"use strict";function r(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function o(t){return!!t.shadowRoot&&!!t.attachShadow}function i(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null}function a(t,e,n,r,i){if(t||o(e)){var a=e.querySelector("input.aux-input");a||((a=e.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),e.appendChild(a)),a.disabled=i,a.name=n,a.value=r||""}}function u(t,e,n){return Math.max(t,Math.min(e,n))}function c(t){return t.timeStamp||Date.now()}function s(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function l(t,e){var n="rtl"===t.document.dir;switch(e){case"start":return n;case"end":return!n;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function h(t,e){var n=t._original||t;return{_original:t,emit:d(n.emit.bind(n),e)}}function d(t,e){var n;return void 0===e&&(e=0),function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(r))}}n.d(e,"a",function(){return r}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return a}),n.d(e,"f",function(){return h}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return u}),n.d(e,"i",function(){return d}),n.d(e,"j",function(){return s})},945:function(t,e,n){"use strict";function r(t,e,n,r,o){return i.a(this,void 0,void 0,function(){var a;return i.c(this,function(i){switch(i.label){case 0:if(t)return[2,t.attachViewToDom(e,n,o,r)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n,r&&r.forEach(function(t){return a.classList.add(t)}),o&&Object.assign(a,o),e.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,a]}})})}function o(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var i=n(938)},946:function(t,e,n){"use strict";function r(t){return new Promise(function(e,n){t.queue.write(function(){o(t),i(t).then(function(n){n.animation&&n.animation.destroy(),a(t),e(n)},function(e){a(t),n(e)})})})}function o(t){var e=t.enteringEl,n=t.leavingEl;y(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),b(e,!1),n&&b(n,!1)}function i(t){return w.a(this,void 0,void 0,function(){var e;return w.c(this,function(n){switch(n.label){case 0:return[4,u(t)];case 1:return[2,(e=n.sent())?c(e,t):s(t)]}})})}function a(t){var e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")}function u(t){return w.a(this,void 0,void 0,function(){var e;return w.c(this,function(n){switch(n.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,R()]:[2,void 0];case 1:return e=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,E()];case 3:e=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,e]}})})}function c(t,e){return w.a(this,void 0,void 0,function(){var r;return w.c(this,function(o){switch(o.label){case 0:return[4,l(e,!0)];case 1:return o.sent(),[4,n.e(164).then(n.bind(null,943)).then(function(n){return n.create(t,e.baseEl,e)})];case 2:return r=o.sent(),f(e.enteringEl,e.leavingEl),[4,d(r,e)];case 3:return o.sent(),e.progressCallback&&e.progressCallback(void 0),r.hasCompleted&&p(e.enteringEl,e.leavingEl),[2,{hasCompleted:r.hasCompleted,animation:r}]}})})}function s(t){return w.a(this,void 0,void 0,function(){var e,n;return w.c(this,function(r){switch(r.label){case 0:return e=t.enteringEl,n=t.leavingEl,[4,l(t,!1)];case 1:return r.sent(),f(e,n),p(e,n),[2,{hasCompleted:!0}]}})})}function l(t,e){return w.a(this,void 0,void 0,function(){var n;return w.c(this,function(r){switch(r.label){case 0:return n=(void 0!==t.deepWait?t.deepWait:e)?[g(t.enteringEl),g(t.leavingEl)]:[m(t.enteringEl),m(t.leavingEl)],[4,Promise.all(n)];case 1:return r.sent(),[4,h(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})}function h(t,e){return w.a(this,void 0,void 0,function(){return w.c(this,function(n){switch(n.label){case 0:return t?[4,t(e)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}function d(t,e){var n=e.progressCallback,r=new Promise(function(e){return t.onFinish(e)});return n?(t.progressStart(),n(t)):t.play(),r}function f(t,e){v(e,C.a),v(t,C.b)}function p(t,e){v(t,C.c),v(e,C.d)}function v(t,e){if(t){var n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}}function m(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}function g(t){return w.a(this,void 0,void 0,function(){var e;return w.c(this,function(n){switch(n.label){case 0:return(e=t)?null==e.componentOnReady?[3,2]:[4,e.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(e.children).map(g))];case 3:n.sent(),n.label=4;case 4:return[2]}})})}function b(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}function y(t,e,n){void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")}n.d(e,"a",function(){return g}),n.d(e,"b",function(){return v}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return b});var w=n(938),C=n(20),R=function(){return n.e(173).then(n.bind(null,948))},E=function(){return n.e(172).then(n.bind(null,949))}}});
//# sourceMappingURL=24.cbb31728606223266847.js.map