webpackJsonp([120],{842:function(n,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),t.d(i,"IonChip",function(){return e});var r=t(19),o=t(939),e=function(){function n(){this.outline=!1}return n.prototype.hostData=function(){var n;return{class:Object.assign({},Object(o.c)(this.color),(n={},n[""+this.mode]=!0,n["chip-outline"]=this.outline,n["ion-activatable"]=!0,n))}},n.prototype.render=function(){return[Object(r.b)("slot",null),"md"===this.mode?Object(r.b)("ion-ripple-effect",null):null]},Object.defineProperty(n,"is",{get:function(){return"ion-chip"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"},outline:{type:Boolean,attr:"outline"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".sc-ion-chip-ios-h{--background:rgba(0,0,0,0.12);--color:rgba(0,0,0,0.87);border-radius:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:4px;margin-right:4px;margin-top:4px;margin-bottom:4px;padding-left:12px;padding-right:12px;padding-top:7px;padding-bottom:7px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;height:32px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:14px;line-height:1;cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-chip-ios-h{margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:4px;margin-inline-end:4px;padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.ion-color.sc-ion-chip-ios-h{background:rgba(var(--ion-color-base-rgb),.08);color:var(--ion-color-shade)}.ion-color.sc-ion-chip-ios-h:focus{background:rgba(var(--ion-color-base-rgb),.12)}.ion-color.activated.sc-ion-chip-ios-h{background:rgba(var(--ion-color-base-rgb),.16)}.chip-outline.sc-ion-chip-ios-h{border-width:1px;border-style:solid;border-color:rgba(0,0,0,.32);background:transparent}.chip-outline.ion-color.sc-ion-chip-ios-h{border-color:rgba(var(--ion-color-base-rgb),.32)}.chip-outline.sc-ion-chip-ios-h:not(.ion-color):focus{background:rgba(0,0,0,.04)}.chip-outline.activated.sc-ion-chip-ios-h:not(.ion-color){background:rgba(0,0,0,.08)}.sc-ion-chip-ios-s > ion-icon{font-size:20px}.sc-ion-chip-ios-h:not(.ion-color) .sc-ion-chip-ios-s > ion-icon{color:rgba(0,0,0,.54)}.sc-ion-chip-ios-s > ion-icon:first-child{margin-left:-4px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-chip-ios-s > ion-icon:first-child{margin-left:unset;margin-right:unset;-webkit-margin-start:-4px;margin-inline-start:-4px;-webkit-margin-end:8px;margin-inline-end:8px}}.sc-ion-chip-ios-s > ion-icon:last-child{margin-left:8px;margin-right:-4px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-chip-ios-s > ion-icon:last-child{margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-4px;margin-inline-end:-4px}}.sc-ion-chip-ios-s > ion-avatar{width:24px;height:24px}.sc-ion-chip-ios-s > ion-avatar:first-child{margin-left:-8px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-chip-ios-s > ion-avatar:first-child{margin-left:unset;margin-right:unset;-webkit-margin-start:-8px;margin-inline-start:-8px;-webkit-margin-end:8px;margin-inline-end:8px}}.sc-ion-chip-ios-s > ion-avatar:last-child{margin-left:8px;margin-right:-8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-chip-ios-s > ion-avatar:last-child{margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-8px;margin-inline-end:-8px}}.sc-ion-chip-ios-h:focus{outline:none;--background:rgba(0,0,0,0.16)}.activated.sc-ion-chip-ios-h{--background:rgba(0,0,0,0.2)}@media (any-hover:hover){.sc-ion-chip-ios-h:hover{--background:rgba(0,0,0,0.16)}.ion-color.sc-ion-chip-ios-h:hover{background:rgba(var(--ion-color-base-rgb),.12)}.chip-outline.sc-ion-chip-ios-h:not(.ion-color):hover{background:rgba(0,0,0,.04)}}"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),n}()},938:function(n,i,t){"use strict";function r(n,i){function t(){this.constructor=n}a(n,i),n.prototype=null===i?Object.create(i):(t.prototype=i.prototype,new t)}function o(n,i,t,r){return new(t||(t=Promise))(function(o,e){function a(n){try{s(r.next(n))}catch(n){e(n)}}function c(n){try{s(r.throw(n))}catch(n){e(n)}}function s(n){n.done?o(n.value):new t(function(i){i(n.value)}).then(a,c)}s((r=r.apply(n,i||[])).next())})}function e(n,i){function t(n){return function(i){return r([n,i])}}function r(t){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,e&&(a=2&t[0]?e.return:t[0]?e.throw||((a=e.return)&&a.call(e),0):e.next)&&!(a=a.call(e,t[1])).done)return a;switch(e=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,e=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=i.call(n,s)}catch(n){t=[6,n],e=0}finally{o=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}var o,e,a,c,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c}i.b=r,i.a=o,i.c=e;/*! *****************************************************************************
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
var a=function(n,i){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var t in i)i.hasOwnProperty(t)&&(n[t]=i[t])})(n,i)}},939:function(n,i,t){"use strict";function r(n,i){return null!==i.closest(n)}function o(n){var i;return"string"==typeof n&&n.length>0?((i={"ion-color":!0})["ion-color-"+n]=!0,i):void 0}function e(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}function a(n){var i={};return e(n).forEach(function(n){return i[n]=!0}),i}function c(n,i,t,r){return s.a(this,void 0,void 0,function(){var o;return s.c(this,function(e){switch(e.label){case 0:return null==i||"#"===i[0]||l.test(i)?[3,2]:(o=n.document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return e.sent(),[2,o.push(i,r)];case 2:return[2,!1]}})})}t.d(i,"a",function(){return a}),t.d(i,"b",function(){return c}),t.d(i,"c",function(){return o}),t.d(i,"d",function(){return r});var s=t(938),l=/^[a-z][a-z0-9+\-.]*:/}});
//# sourceMappingURL=120.ee7c757970f377461ca7.js.map