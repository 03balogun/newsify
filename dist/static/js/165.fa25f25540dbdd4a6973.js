webpackJsonp([165,163],{942:function(t,e,r){"use strict";function i(t,e,r,i){var s,o,a=n(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(s="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(s="addEventListener",o="removeEventListener"),t[s](e,r,a),function(){t[o](e,r,a)}}function n(t){if(void 0===h)try{var e=Object.defineProperty({},"passive",{get:function(){h=!0}});t.addEventListener("optsTest",function(){},e)}catch(t){h=!1}return!!h}function s(t,e,r,n,s){function a(n){Y=Date.now()+S,e(n)&&(!b&&r&&(b=i(t,"touchmove",r,s)),y||(y=i(t,"touchend",u,s)),m||(m=i(t,"touchcancel",u,s)))}function c(n){Y>Date.now()||e(n)&&(!g&&r&&(g=i(o(t),"mousemove",r,s)),w||(w=i(o(t),"mouseup",l,s)))}function u(t){d(),n&&n(t)}function l(t){h(),n&&n(t)}function d(){b&&b(),y&&y(),m&&m(),b=y=m=void 0}function h(){g&&g(),w&&w(),g=w=void 0}function p(){d(),h()}function f(e){e?(v&&v(),X&&X(),v=X=void 0,p()):(v||(v=i(t,"touchstart",a,s)),X||(X=i(t,"mousedown",c,s)))}var v,b,y,m,X,g,w,Y=0;return{setDisabled:f,stop:p,destroy:function(){f(!0),n=r=e=void 0}}}function o(t){return t instanceof Document?t:t.ownerDocument}function a(t,e,r){var i=r*(Math.PI/180),n="x"===t,s=Math.cos(i),o=e*e,a=0,c=0,u=!1,l=0;return{start:function(t,e){a=t,c=e,l=0,u=!0},detect:function(t,e){if(!u)return!1;var r=t-a,i=e-c,d=r*r+i*i;if(d<o)return!1;var h=Math.sqrt(d),p=(n?r:i)/h;return l=p>s?1:p<-s?-1:0,u=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}function c(t){function e(){G&&(M=!1,S&&S(g))}function r(){return!(_&&!_.capture()||(G=!0,E=!1,g.startX=g.currentX,g.startY=g.currentY,g.startTimeStamp=g.timeStamp,p?p(g).then(i):i(),0))}function i(){f&&f(g),E=!0}function n(){G=!1,D=!1,M=!1,E=!0,_.release()}function o(t){var e=G,r=E;n(),r&&(u(g,t),e?v&&v(g):b&&b(g))}var c=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),h=c.canStart,p=c.onWillStart,f=c.onStart,v=c.onEnd,b=c.notCaptured,S=c.onMove,m=c.threshold,X=c.queue,g={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},w=s(c.el,function(t){var e=d(t);return!(D||!E)&&(l(t,g),g.startX=g.currentX,g.startY=g.currentY,g.startTimeStamp=g.timeStamp=e,g.velocityX=g.velocityY=g.deltaX=g.deltaY=0,g.event=t,(!h||!1!==h(g))&&(_.release(),!!_.start()&&(D=!0,0===m?r():(Y.start(g.startX,g.startY),!0))))},function(t){G?!M&&E&&(M=!0,u(g,t),X.write(e)):(u(g,t),Y.detect(g.currentX,g.currentY)&&(Y.isGesture()&&r()||(n(),w.stop(),b&&b(g))))},o,{capture:!1}),Y=a(c.direction,c.threshold,c.maxAngle),_=y.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),G=!1,D=!1,E=!0,M=!1;return{setDisabled:function(t){t&&G&&o(void 0),w.setDisabled(t)},destroy:function(){_.destroy(),w.destroy()}}}function u(t,e){if(e){var r=t.currentX,i=t.currentY,n=t.timeStamp;l(e,t);var s=t.currentX,o=t.currentY,a=(t.timeStamp=d(e))-n;if(a>0&&a<100){var c=(o-i)/a;t.velocityX=(s-r)/a*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=s-t.startX,t.deltaY=o-t.startY,t.event=e}}function l(t,e){var r=0,i=0;if(t){var n=t.changedTouches;if(n&&n.length>0){var s=n[0];r=s.clientX,i=s.clientY}else void 0!==t.pageX&&(r=t.pageX,i=t.pageY)}e.currentX=r,e.currentY=i}function d(t){return t.timeStamp||Date.now()}Object.defineProperty(e,"__esModule",{value:!0}),r.d(e,"createGesture",function(){return c}),r.d(e,"GESTURE_CONTROLLER",function(){return y});var h,p=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new f(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new v(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var i=this.requestedStart,n=-1e4;if(i.forEach(function(t){n=Math.max(n,t)}),n===r){this.capturedId=e,i.clear();var s=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(s),!0}return i.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},t.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(b)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(b)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return++this.gestureId},t}(),f=function(){function t(t,e,r,i,n){this.id=e,this.name=r,this.disableScroll=n,this.priority=1e6*i+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),v=function(){function t(t,e,r,i){this.id=e,this.disable=r,this.disableScroll=i,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),b="backdrop-no-scroll",y=new p(document),S=2e3},951:function(t,e,r){"use strict";function i(t,e,r,i,s,o){var a=t.ownerDocument.defaultView;return Object(n.createGesture)({el:t,queue:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&r()},onStart:i,onMove:function(t){s(t.deltaX/a.innerWidth)},onEnd:function(t){var e=a.innerWidth,r=t.deltaX/e,i=t.velocityX,n=i>=0&&(i>.2||t.deltaX>e/2),s=(n?1-r:r)*e,c=0;if(s>5){var u=s/Math.abs(i);c=Math.min(u,300)}o(n,r,c)}})}Object.defineProperty(e,"__esModule",{value:!0}),r.d(e,"createSwipeBackGesture",function(){return i});var n=r(942)}});
//# sourceMappingURL=165.fa25f25540dbdd4a6973.js.map