"use strict";(self.webpackChunkproyecto1=self.webpackChunkproyecto1||[]).push([[22],{5022:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return o}});var r=n(1811),i=n(9507),u=n(7909),o=function(t,e,n,o,a){var c=t.ownerDocument.defaultView,f=(0,i.i)(t),s=function(t){return f?-t.deltaX:t.deltaX};return(0,u.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return function(t){var e=t.startX;return f?e>=c.innerWidth-50:e<=50}(t)&&e()},onStart:n,onMove:function(t){var e=s(t)/c.innerWidth;o(e)},onEnd:function(t){var e=s(t),n=c.innerWidth,i=e/n,u=function(t){return f?-t.velocityX:t.velocityX}(t),o=u>=0&&(u>.2||e>n/2),h=(o?1-i:i)*n,d=0;if(h>5){var l=h/Math.abs(u);d=Math.min(l,540)}a(o,i<=0?.01:(0,r.j)(0,i,.9999),d)}})}}}]);
//# sourceMappingURL=22.534b656b.chunk.js.map