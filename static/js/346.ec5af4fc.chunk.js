"use strict";(self.webpackChunkiflix_movies_app=self.webpackChunkiflix_movies_app||[]).push([[346],{5308:function(t,e,n){n.d(e,{Mi:function(){return C}});var r=n(2791),i=n(474),a={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-a.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*a.Bounce.In(2*t):.5*a.Bounce.Out(2*t-1)+.5}}},o="undefined"===typeof self&&"undefined"!==typeof process&&process.hrtime?function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!==typeof self&&void 0!==self.performance&&void 0!==self.performance.now?self.performance.now.bind(self.performance):void 0!==Date.now?Date.now:function(){return(new Date).getTime()},s=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map((function(e){return t._tweens[e]}))},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},t.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},t.prototype.update=function(t,e){void 0===t&&(t=o()),void 0===e&&(e=!1);var n=Object.keys(this._tweens);if(0===n.length)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var i=this._tweens[n[r]],a=!e;i&&!1===i.update(t,a)&&!e&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),u={Linear:function(t,e){var n=t.length-1,r=n*e,i=Math.floor(r),a=u.Utils.Linear;return e<0?a(t[0],t[1],r):e>1?a(t[n],t[n-1],n-r):a(t[i],t[i+1>n?n:i+1],r-i)},Bezier:function(t,e){for(var n=0,r=t.length-1,i=Math.pow,a=u.Utils.Bernstein,o=0;o<=r;o++)n+=i(1-e,r-o)*i(e,o)*t[o]*a(r,o);return n},CatmullRom:function(t,e){var n=t.length-1,r=n*e,i=Math.floor(r),a=u.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(i=Math.floor(r=n*(1+e))),a(t[(i-1+n)%n],t[i],t[(i+1)%n],t[(i+2)%n],r-i)):e<0?t[0]-(a(t[0],t[0],t[1],t[1],-r)-t[0]):e>1?t[n]-(a(t[n],t[n],t[n-1],t[n-1],r-n)-t[n]):a(t[i?i-1:0],t[i],t[n<i+1?n:i+1],t[n<i+2?n:i+2],r-i)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=u.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var r=e;r>1;r--)n*=r;return t[e]=n,n}}(),CatmullRom:function(t,e,n,r,i){var a=.5*(n-t),o=.5*(r-e),s=i*i;return(2*e-2*n+a+o)*(i*s)+(-3*e+3*n-2*a-o)*s+a*i+e}}},c=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),l=new s,h=function(){function t(t,e){void 0===e&&(e=l),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=a.Linear.None,this._interpolationFunction=u.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=c.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.to=function(t,e){return this._valuesEnd=Object.create(t),void 0!==e&&(this._duration=e),this},t.prototype.duration=function(t){return this._duration=t,this},t.prototype.start=function(t){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed)for(var e in this._reversed=!1,this._valuesStartRepeat)this._swapEndStartRepeatValues(e),this._valuesStart[e]=this._valuesStartRepeat[e];return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=void 0!==t?"string"===typeof t?o()+parseFloat(t):t:o(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},t.prototype._setupProperties=function(t,e,n,r){for(var i in n){var a=t[i],o=Array.isArray(a),s=o?"array":typeof a,u=!o&&Array.isArray(n[i]);if("undefined"!==s&&"function"!==s){if(u){var c=n[i];if(0===c.length)continue;c=c.map(this._handleRelativeValue.bind(this,a)),n[i]=[a].concat(c)}if("object"!==s&&!o||!a||u)"undefined"===typeof e[i]&&(e[i]=a),o||(e[i]*=1),r[i]=u?n[i].slice().reverse():e[i]||0;else{for(var l in e[i]=o?[]:{},a)e[i][l]=a[l];r[i]=o?[]:{},this._setupProperties(a,e[i],n[i],r[i])}}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(t){return void 0===t&&(t=o()),this._isPaused||!this._isPlaying||(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this)),this},t.prototype.resume=function(t){return void 0===t&&(t=o()),this._isPaused&&this._isPlaying?(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this):this},t.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},t.prototype.group=function(t){return this._group=t,this},t.prototype.delay=function(t){return this._delayTime=t,this},t.prototype.repeat=function(t){return this._initialRepeat=t,this._repeat=t,this},t.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},t.prototype.yoyo=function(t){return this._yoyo=t,this},t.prototype.easing=function(t){return this._easingFunction=t,this},t.prototype.interpolation=function(t){return this._interpolationFunction=t,this},t.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},t.prototype.onStart=function(t){return this._onStartCallback=t,this},t.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},t.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},t.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},t.prototype.onStop=function(t){return this._onStopCallback=t,this},t.prototype.update=function(t,e){if(void 0===t&&(t=o()),void 0===e&&(e=!0),this._isPaused)return!0;var n,r,i=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>i)return!1;e&&this.start(t)}if(this._goToEnd=!1,t<this._startTime)return!0;!1===this._onStartCallbackFired&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(t-this._startTime)/this._duration,r=0===this._duration||r>1?1:r;var a=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,a),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),1===r){if(this._repeat>0){for(n in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat)this._yoyo||"string"!==typeof this._valuesEnd[n]||(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var s=0,u=this._chainedTweens.length;s<u;s++)this._chainedTweens[s].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(t,e,n,r){for(var i in n)if(void 0!==e[i]){var a=e[i]||0,o=n[i],s=Array.isArray(t[i]),u=Array.isArray(o);!s&&u?t[i]=this._interpolationFunction(o,r):"object"===typeof o&&o?this._updateProperties(t[i],a,o,r):"number"===typeof(o=this._handleRelativeValue(a,o))&&(t[i]=a+(o-a)*r)}},t.prototype._handleRelativeValue=function(t,e){return"string"!==typeof e?e:"+"===e.charAt(0)||"-"===e.charAt(0)?t+parseFloat(e):parseFloat(e)},t.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],n=this._valuesEnd[t];this._valuesStartRepeat[t]="string"===typeof n?this._valuesStartRepeat[t]+parseFloat(n):this._valuesEnd[t],this._valuesEnd[t]=e},t}(),d=(c.nextId,l);d.getAll.bind(d),d.removeAll.bind(d),d.add.bind(d),d.remove.bind(d),d.update.bind(d);function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f.apply(this,arguments)}var p=function(t,e){return e&&e<r.Children.count(t)?e:0},v={linear:a.Linear.None,ease:a.Quadratic.InOut,"ease-in":a.Quadratic.In,"ease-out":a.Quadratic.Out,cubic:a.Cubic.InOut,"cubic-in":a.Cubic.In,"cubic-out":a.Cubic.Out},_=function(t){return t?v[t]:v.linear},y=function(t,e,n){var i=t.prevArrow,a=t.infinite,o=e<=0&&!a,s={"data-type":"prev","aria-label":"Previous Slide",disabled:o,onClick:n};if(i)return r.cloneElement(i,f({className:(i.props.className||"")+" nav "+(o?"disabled":"")},s));var u="nav default-nav "+(o?"disabled":"");return r.createElement("button",Object.assign({type:"button",className:u},s),r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},r.createElement("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"})))},m=function(t,e,n){var i=t.nextArrow,a=t.infinite,o=t.children,s=1;"slidesToScroll"in t&&(s=t.slidesToScroll||1);var u=e>=r.Children.count(o)-s&&!a,c={"data-type":"next","aria-label":"Next Slide",disabled:u,onClick:n};if(i)return r.cloneElement(i,f({className:(i.props.className||"")+" nav "+(u?"disabled":"")},c));var l="nav default-nav "+(u?"disabled":"");return r.createElement("button",Object.assign({type:"button",className:l},c),r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},r.createElement("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})))},g=function(t,e,n,i){var a=t.children,o=t.indicators,s=1;i?s=null==i?void 0:i.settings.slidesToScroll:"slidesToScroll"in t&&(s=t.slidesToScroll||1);var u=Math.ceil(r.Children.count(a)/s);return r.createElement("ul",{className:"indicators"},Array.from({length:u},(function(t,i){var a={"data-key":i,"aria-label":"Go to slide "+(i+1),onClick:n},u=Math.floor((e+s-1)/s)===i;return"function"===typeof o?function(t,e,n,i){return r.cloneElement(i,f({className:i.props.className+" "+(t?"active":""),key:e},n))}(u,i,a,o(i)):function(t,e,n){return r.createElement("li",{key:e},r.createElement("button",Object.assign({type:"button",className:"each-slideshow-indicator "+(t?"active":"")},n)))}(u,i,a)})))},b={duration:5e3,transitionDuration:1e3,defaultIndex:0,infinite:!0,autoplay:!0,indicators:!1,arrows:!0,pauseOnHover:!0,easing:"linear",canSwipe:!0,cssClass:"",responsive:[]},w=r.forwardRef((function(t,e){var n=(0,r.useState)(p(t.children,t.defaultIndex)),a=n[0],o=n[1],u=(0,r.useRef)(null),c=(0,r.useRef)(null),l=(0,r.useRef)(new s),d=(0,r.useRef)(),f=(0,r.useRef)(),v=(0,r.useMemo)((function(){return r.Children.count(t.children)}),[t.children]),b=(0,r.useCallback)((function(){if(c.current&&u.current){var t=u.current.clientWidth,e=t*v;c.current.style.width=e+"px";for(var n=0;n<c.current.children.length;n++){var r=c.current.children[n];r&&(r.style.width=t+"px",r.style.left=n*-t+"px",r.style.display="block")}}}),[u,c,v]),w=(0,r.useCallback)((function(){u.current&&(f.current=new i.default((function(t){t&&b()})),f.current.observe(u.current))}),[u,b]),C=(0,r.useCallback)((function(){var e=t.autoplay,n=t.children,i=t.duration,o=t.infinite;e&&r.Children.count(n)>1&&(o||a<r.Children.count(n)-1)&&(d.current=setTimeout(S,i))}),[t,a]);(0,r.useEffect)((function(){return w(),function(){l.current.removeAll(),clearTimeout(d.current),T()}}),[w,l]),(0,r.useEffect)((function(){clearTimeout(d.current),C()}),[a,t.autoplay,C]),(0,r.useEffect)((function(){b()}),[v,b]),(0,r.useImperativeHandle)(e,(function(){return{goNext:function(){S()},goBack:function(){k()},goTo:function(t,e){null!=e&&e.skipTransition?o(t):R(t)}}}));var T=function(){f.current&&u.current&&f.current.unobserve(u.current)},E=function(){t.pauseOnHover&&clearTimeout(d.current)},S=function(){var e=t.children;(t.infinite||a!==r.Children.count(e)-1)&&I((a+1)%r.Children.count(e))},k=function(){var e=t.children;(t.infinite||0!==a)&&I(0===a?r.Children.count(e)-1:a-1)},M=function(t){"prev"===t.currentTarget.dataset.type?k():S()},O=function t(){requestAnimationFrame(t),l.current.update()},I=function(e){if(!l.current.getAll().length){var n;null!=(n=c.current)&&n.children[e]||(e=0),clearTimeout(d.current);O();var r=new h({opacity:0,scale:1},l.current).to({opacity:1,scale:t.scale},t.transitionDuration).onUpdate((function(t){c.current&&(c.current.children[e].style.opacity=t.opacity,c.current.children[a].style.opacity=1-t.opacity,c.current.children[a].style.transform="scale("+t.scale+")")}));r.easing(_(t.easing)),r.onStart((function(){"function"===typeof t.onStartChange&&t.onStartChange(a,e)})),r.onComplete((function(){c.current&&(o(e),c.current.children[a].style.transform="scale(1)"),"function"===typeof t.onChange&&t.onChange(a,e)})),r.start()}},R=function(t){t!==a&&I(t)};return r.createElement("div",{dir:"ltr","aria-roledescription":"carousel"},r.createElement("div",{className:"react-slideshow-container "+(t.cssClass||""),onMouseEnter:E,onMouseOver:E,onMouseLeave:function(){var e=t.pauseOnHover,n=t.autoplay,r=t.duration;e&&n&&(d.current=setTimeout((function(){return S()}),r))}},t.arrows&&y(t,a,M),r.createElement("div",{className:"react-slideshow-fadezoom-wrapper "+t.cssClass,ref:u},r.createElement("div",{className:"react-slideshow-fadezoom-images-wrap",ref:c},(r.Children.map(t.children,(function(t){return t}))||[]).map((function(t,e){return r.createElement("div",{style:{opacity:e===a?"1":"0",zIndex:e===a?"1":"0"},"data-index":e,key:e,"aria-roledescription":"slide","aria-hidden":e===a?"false":"true"},t)})))),t.arrows&&m(t,a,M)),t.indicators&&g(t,a,(function(t){var e=t.currentTarget;e.dataset.key&&parseInt(e.dataset.key)!==a&&R(parseInt(e.dataset.key))})))}));w.defaultProps=b,r.forwardRef((function(t,e){return r.createElement(w,Object.assign({},t,{scale:1,ref:e}))})).defaultProps=b,r.forwardRef((function(t,e){return r.createElement(w,Object.assign({},t,{ref:e}))})).defaultProps=b;var C=r.forwardRef((function(t,e){var n,a=(0,r.useState)(p(t.children,t.defaultIndex)),o=a[0],u=a[1],c=(0,r.useState)(0),l=c[0],d=c[1],f=(0,r.useRef)(null),v=(0,r.useRef)(null),b=(0,r.useRef)(new s),w=(0,r.useMemo)((function(){return function(t,e){if("undefined"!==typeof window&&Array.isArray(e))return e.find((function(e){return e.breakpoint<=t}))}(l,t.responsive)}),[l,t.responsive]),C=(0,r.useMemo)((function(){return w?w.settings.slidesToScroll:t.slidesToScroll||1}),[w,t.slidesToScroll]),T=(0,r.useMemo)((function(){return w?w.settings.slidesToShow:t.slidesToShow||1}),[w,t.slidesToShow]),E=(0,r.useMemo)((function(){return r.Children.count(t.children)}),[t.children]),S=(0,r.useMemo)((function(){return l/T}),[l,T]),k=(0,r.useRef)(),M=(0,r.useRef)(),O=!1,I=0,R=t.vertical?"translateY":"translateX",P=t.vertical?"clientY":"clientX",x=t.vertical?"pageY":"pageX",A=(0,r.useCallback)((function(){if(v.current){var e=l*v.current.children.length,n=t.vertical?"height":"width";v.current.style[n]=e+"px",t.vertical&&f.current&&(f.current.style[n]=l+"px");for(var r=0;r<v.current.children.length;r++){var i=v.current.children[r];i&&(t.vertical||(i.style[n]=S+"px"),i.style.display="block")}}}),[l,S]),N=(0,r.useCallback)((function(){f.current&&(M.current=new i.default((function(t){t&&q()})),M.current.observe(f.current))}),[f]),j=(0,r.useCallback)((function(){var e=t.autoplay,n=t.infinite,r=t.duration;e&&(n||o<E-1)&&(k.current=setTimeout(B,r))}),[t,E,o]);(0,r.useEffect)((function(){A()}),[l,A]),(0,r.useEffect)((function(){return N(),function(){b.current.removeAll(),clearTimeout(k.current),F()}}),[f,N,b]),(0,r.useEffect)((function(){clearTimeout(k.current),j()}),[o,l,t.autoplay,j]),(0,r.useImperativeHandle)(e,(function(){return{goNext:function(){B()},goBack:function(){Z()},goTo:function(t,e){null!=e&&e.skipTransition?u(t):H(t)}}}));var F=function(){M&&f.current&&M.current.unobserve(f.current)},U=function(){t.pauseOnHover&&clearTimeout(k.current)},D=function(e){var r;if(t.canSwipe&&O&&((r=window.TouchEvent&&e.nativeEvent instanceof TouchEvent?e.nativeEvent.touches[0][x]:e.nativeEvent[P])&&n)){var i=S*(o+Y()),a=r-n;if(!t.infinite&&o===E-C&&a<0)return;if(!t.infinite&&0===o&&a>0)return;i-=I=a,v.current.style.transform=R+"(-"+i+"px)"}},B=function(){if(t.infinite||o!==E-C){var e=L(o+C);X(e)}},Z=function(){if(t.infinite||0!==o){var e=o-C;e%C&&(e=Math.ceil(e/C)*C),X(e)}},H=function(t){X(L(t))},L=function(t){return t<E&&t+C>E&&(E-C)%C?E-C:t},z=function(t){"next"===t.currentTarget.dataset.type?B():Z()},q=function(){var e=t.vertical?"clientHeight":"clientWidth";t.vertical?v.current&&d(v.current.children[0][e]):f.current&&d(f.current[e])},Q=function(e){t.canSwipe&&(n=window.TouchEvent&&e.nativeEvent instanceof TouchEvent?e.nativeEvent.touches[0][x]:e.nativeEvent[P],clearTimeout(k.current),O=!0)},V=function(){t.canSwipe&&(O=!1,Math.abs(I)/l>.2?I<0?B():Z():Math.abs(I)>0&&X(o,300))},W=function t(){requestAnimationFrame(t),b.current.update()},X=function(e,n){var r=n||t.transitionDuration,i=o,a=b.current.getAll();if(f.current){var s=t.vertical?"clientHeight":"clientWidth",c=f.current[s]/T;if(!a.length){clearTimeout(k.current);var l={margin:-c*(i+Y())+I},d=new h(l,b.current).to({margin:-c*(e+Y())},r).onUpdate((function(t){v.current&&(v.current.style.transform=R+"("+t.margin+"px)")}));d.easing(_(t.easing)),W();var p=e;p<0?p=E-C:p>=E&&(p=0),d.onStart((function(){"function"===typeof t.onStartChange&&t.onStartChange(o,p)})),d.onComplete((function(){I=0,"function"===typeof t.onChange&&t.onChange(o,p),u(p)})),d.start()}}},Y=function(){return t.infinite?T:0},G={transform:R+"(-"+(o+Y())*S+"px)"};return r.createElement("div",{dir:"ltr","aria-roledescription":"carousel"},r.createElement("div",{className:"react-slideshow-container",onMouseEnter:U,onMouseOver:U,onMouseLeave:function(){O?V():t.pauseOnHover&&t.autoplay&&(k.current=setTimeout(B,t.duration))},onMouseDown:Q,onMouseUp:V,onMouseMove:D,onTouchStart:Q,onTouchEnd:V,onTouchCancel:V,onTouchMove:D},t.arrows&&y(t,o,z),r.createElement("div",{className:"react-slideshow-wrapper slide "+(t.cssClass||""),ref:f},r.createElement("div",{className:"images-wrap "+(t.vertical?"vertical":"horizontal"),style:G,ref:v},t.infinite&&r.Children.toArray(t.children).slice(-T).map((function(t,e){return r.createElement("div",{"data-index":e-T,"aria-roledescription":"slide","aria-hidden":"true",key:e-T},t)})),(r.Children.map(t.children,(function(t){return t}))||[]).map((function(t,e){var n=function(t){return t<o+T&&t>=o}(e);return r.createElement("div",{"data-index":e,key:e,className:n?"active":"","aria-roledescription":"slide","aria-hidden":n?"false":"true"},t)})),function(){if(t.infinite||T!==C)return r.Children.toArray(t.children).slice(0,T).map((function(t,e){return r.createElement("div",{"data-index":E+e,"aria-roledescription":"slide","aria-hidden":"true",key:E+e},t)}))}())),t.arrows&&m(t,o,z)),!!t.indicators&&g(t,o,(function(t){var e=t.currentTarget;if(e.dataset.key){var n=parseInt(e.dataset.key);H(n*C)}}),w))}));C.defaultProps=b},5019:function(){},4436:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(9439),i=n(8683);function a(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=n(2791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],u=o.createContext({}),c=!0;function l(t){for(var e,n,l,h=t.count,d=void 0===h?1:h,f=t.wrapper,p=t.className,v=t.containerClassName,_=t.containerTestId,y=t.circle,m=void 0!==y&&y,g=t.style,b=a(t,s),w=o.useContext(u),C=(0,i.Z)({},b),T=0,E=Object.entries(b);T<E.length;T++){var S=(0,r.Z)(E[T],2),k=S[0];"undefined"===typeof S[1]&&delete C[k]}var M=(0,i.Z)((0,i.Z)((0,i.Z)({},w),C),{},{circle:m}),O=(0,i.Z)((0,i.Z)({},g),function(t){var e=t.baseColor,n=t.highlightColor,r=t.width,i=t.height,a=t.borderRadius,o=t.circle,s=t.direction,u=t.duration,l=t.enableAnimation,h=void 0===l?c:l,d={};return"rtl"===s&&(d["--animation-direction"]="reverse"),"number"===typeof u&&(d["--animation-duration"]="".concat(u,"s")),h||(d["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(d.width=r),"string"!==typeof i&&"number"!==typeof i||(d.height=i),"string"!==typeof a&&"number"!==typeof a||(d.borderRadius=a),o&&(d.borderRadius="50%"),"undefined"!==typeof e&&(d["--base-color"]=e),"undefined"!==typeof n&&(d["--highlight-color"]=n),d}(M)),I="react-loading-skeleton";p&&(I+=" ".concat(p));for(var R=null!==(e=M.inline)&&void 0!==e&&e,P=[],x=Math.ceil(d),A=0;A<x;A++){var N=O;if(x>d&&A===x-1){var j=null!==(n=N.width)&&void 0!==n?n:"100%",F=d%1,U="number"===typeof j?j*F:"calc(".concat(j," * ").concat(F,")");N=(0,i.Z)((0,i.Z)({},N),{},{width:U})}var D=o.createElement("span",{className:I,style:N,key:A},"\u200c");R?P.push(D):P.push(o.createElement(o.Fragment,{key:A},D,o.createElement("br",null)))}return o.createElement("span",{className:v,"data-testid":_,"aria-live":"polite","aria-busy":null!==(l=M.enableAnimation)&&void 0!==l?l:c},f?P.map((function(t,e){return o.createElement(f,{key:e},t)})):P)}}}]);
//# sourceMappingURL=346.ec5af4fc.chunk.js.map