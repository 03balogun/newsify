webpackJsonp([131],{801:function(e,t,n){"use strict";function r(e){return e.$ionIndex}function o(e,t){for(var n;e;){if((n=e.parentElement)===t)return e;e=n}}function i(e,t,n){var r=e[t];return e.splice(t,1),e.splice(n,0,r),e.slice()}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"IonReorder",function(){return a}),n.d(t,"IonReorderGroup",function(){return u});var s=n(938),l=n(19),c=n(947),a=function(){function e(){}return e.prototype.onClick=function(e){e.preventDefault(),e.stopImmediatePropagation()},e.prototype.hostData=function(){var e;return{class:(e={},e[""+this.mode]=!0,e)}},e.prototype.render=function(){return Object(l.b)("slot",null,Object(l.b)("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"}))},Object.defineProperty(e,"is",{get:function(){return"ion-reorder"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"click",method:"onClick",capture:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:34px;opacity:.4}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),u=function(){function e(){this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},e.prototype.componentDidLoad=function(){return s.a(this,void 0,void 0,function(){var e,t,r,o=this;return s.c(this,function(i){switch(i.label){case 0:return(e=this.el.closest("ion-content"))?[4,e.componentOnReady()]:[3,3];case 1:return i.sent(),t=this,[4,e.getScrollElement()];case 2:t.scrollEl=i.sent(),i.label=3;case 3:return r=this,[4,n.e(163).then(n.bind(null,942))];case 4:return r.gesture=i.sent().createGesture({el:this.el,queue:this.queue,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(e){return o.canStart(e)},onStart:function(e){return o.onStart(e)},onMove:function(e){return o.onMove(e)},onEnd:function(){return o.onEnd()}}),this.disabledChanged(),[2]}})})},e.prototype.componentDidUnload=function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},e.prototype.complete=function(e){return Promise.resolve(this.completeSync(e))},e.prototype.canStart=function(e){if(this.selectedItemEl||0!==this.state)return!1;var t=e.event.target.closest("ion-reorder");if(!t)return!1;var n=o(t,this.el);return!!n&&(e.data=n,!0)},e.prototype.onStart=function(e){e.event.preventDefault();var t=this.selectedItemEl=e.data,n=this.cachedHeights;n.length=0;var o=this.el,i=o.children;if(i&&0!==i.length){for(var s=0,l=0;l<i.length;l++){var a=i[l];n.push(s+=a.offsetHeight),a.$ionIndex=l}var u=o.getBoundingClientRect();if(this.containerTop=u.top,this.containerBottom=u.bottom,this.scrollEl){var h=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=h.top+d,this.scrollElBottom=h.bottom-d}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=r(t),this.selectedItemHeight=t.offsetHeight,this.state=1,t.classList.add(f),Object(c.b)()}},e.prototype.onMove=function(e){var t=this.selectedItemEl;if(t){var n=this.autoscroll(e.currentY),o=this.containerTop-n,i=Math.max(o,Math.min(e.currentY,this.containerBottom-n)),s=n+i-e.startY,l=this.itemIndexForTop(i-o);if(l!==this.lastToIndex){var a=r(t);this.lastToIndex=l,Object(c.a)(),this.reorderMove(a,l)}t.style.transform="translateY("+s+"px)"}},e.prototype.onEnd=function(){var e=this,t=this.selectedItemEl;if(this.state=2,t){var n=this.lastToIndex,o=r(t);n===o?(t.style.transition="transform 200ms ease-in-out",setTimeout(function(){return e.completeSync()},200)):this.ionItemReorder.emit({from:o,to:n,complete:this.completeSync.bind(this)}),Object(c.c)()}else this.state=0},e.prototype.completeSync=function(e){var t=this.selectedItemEl;if(t&&2===this.state){var n=this.el.children,o=n.length,s=this.lastToIndex,l=r(t);e&&!0!==e||this.el.insertBefore(t,l<s?n[s+1]:n[s]),Array.isArray(e)&&(e=i(e,l,s));for(var c=0;c<o;c++)n[c].style.transform="";t.style.transition="",t.classList.remove(f),this.selectedItemEl=void 0,this.state=0}return e},e.prototype.itemIndexForTop=function(e){var t=this.cachedHeights,n=0;for(n=0;n<t.length&&!(t[n]>e);n++);return n},e.prototype.reorderMove=function(e,t){for(var n=this.selectedItemHeight,r=this.el.children,o=0;o<r.length;o++){var i="";o>e&&o<=t?i="translateY("+-n+"px)":o<e&&o>=t&&(i="translateY("+n+"px)"),r[o].style.transform=i}},e.prototype.autoscroll=function(e){if(!this.scrollEl)return 0;var t=0;return e<this.scrollElTop?t=-h:e>this.scrollElBottom&&(t=h),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial},e.prototype.hostData=function(){var e;return{class:(e={},e[""+this.mode]=!0,e["reorder-enabled"]=!this.disabled,e["reorder-list-active"]=0!==this.state,e)}},Object.defineProperty(e,"is",{get:function(){return"ion-reorder-group"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},queue:{context:"queue"},state:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionItemReorder",method:"ionItemReorder",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"},enumerable:!0,configurable:!0}),e}(),d=60,h=10,f="reorder-selected"},938:function(e,t,n){"use strict";function r(e,t){function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function o(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,l)}c((r=r.apply(e,t||[])).next())})}function i(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(s=2&n[0]?i.return:n[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(s=c.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(e){n=[6,e],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,l,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return l={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l}t.b=r,t.a=o,t.c=i;/*! *****************************************************************************
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
var s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)}},947:function(e,t,n){"use strict";function r(){var e=window.TapticEngine;e&&e.selection()}function o(){var e=window.TapticEngine;e&&e.gestureSelectionStart()}function i(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()}function s(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return r})}});
//# sourceMappingURL=131.68535947b5708b66e9c0.js.map