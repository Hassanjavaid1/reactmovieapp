/*! For license information please see 649.a24f00b5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkiflix_movies_app=self.webpackChunkiflix_movies_app||[]).push([[649],{1383:function(e,t,n){n.d(t,{Z:function(){return r}});n(2791);var o=n(184);function r(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"Searchloader"})})}},9649:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var o=n(4165),r=n(3433),s=n(5861),i=n(9439),l=n(2791),a=n(38),c=n(2651),h=n(7689),u=n(1087),p=n(4771),d=(n(9538),n(6229),n(8757),n(9109),n(1383)),f=(n(6439),n(184));function m(e){var t=(0,l.useState)([]),n=(0,i.Z)(t,2),m=n[0],v=n[1],g=(0,l.useState)(""),y=(0,i.Z)(g,2),T=y[0],S=y[1],w=(0,l.useState)(1),_=(0,i.Z)(w,2),b=_[0],x=_[1],E=(0,l.useState)(!0),L=(0,i.Z)(E,2),D=(L[0],L[1]),j=(0,l.useState)(!0),Y=(0,i.Z)(j,2),M=(Y[0],Y[1]),Z=(0,l.useState)(m.length),R=(0,i.Z)(Z,2),C=(R[0],R[1]),N=(0,l.useState)(""),F=(0,i.Z)(N,2),k=F[0],H=F[1],O=(0,l.useState)(""),P=(0,i.Z)(O,2);P[0],P[1];function A(){return(A=(0,s.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/search/multi?".concat(c.cf,"&query=").concat(T,"&sort_by=popularity.desc&include_adult=false&page=").concat(b),e.next=3,(0,c.rQ)(t);case 3:n=e.sent,v(n.results),M(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/search/multi?".concat(c.cf,"&query=").concat(T,"&sort_by=popularity.desc&include_adult=false&page=").concat(b),e.next=3,(0,c.rQ)(t);case 3:0===(n=e.sent).results.length?D(!1):(v((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(n.results))})),x((function(e){return e+1})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=(0,h.s0)(),U=(0,h.TH)();return(0,l.useEffect)((function(){var e;return T?e=setTimeout((function(){!function(){A.apply(this,arguments)}(),x(1),D(!0)}),1e3):v([]),H("No Result found for This Search!"),C(m.length),function(){e&&clearTimeout(e)}}),[T]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{id:"searchContainer",children:(0,f.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[(0,f.jsx)("input",{required:!0,type:"search",placeholder:"Search Movies",value:T,onChange:function(e){var t=e.target.value;S(t),q(""===t?"/":"/search?query=".concat(t))}}),(0,f.jsx)("i",{className:"fa fa-search"})]})}),""!==T&&(0,f.jsxs)("div",{className:"Searchcontainer",children:[null===m||void 0===m||0===m.length?(0,f.jsx)("h1",{id:"no_result_found_search",children:k}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("h3",{id:"search_title",children:["Show Result for: ",T,"!"]}),(0,f.jsx)("div",{id:"SearchMovies",children:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{id:"Searchcards",children:m.map((function(e){var t=e.title,n=e.poster_path,o=e.vote_average,r=e.release_date,s=e.id,i=e.index;return(0,f.jsx)("div",{className:"searchResults",children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(u.rU,{className:"Link",to:"/moviedetail/".concat(s),children:[U.pathname==="/moviedetail/".concat(s)||"/"===U.pathname?(v([]),void S("")):"",(0,f.jsx)("img",{src:null==n||""===n||void 0===n?a:c.jV+n,alt:"",id:"search_movie_image"},i)]}),(0,f.jsx)("h4",{id:"search_movie_name",children:String(t).slice(0,19)+"..."},i),(0,f.jsxs)("div",{id:"search_date_rating",children:[(0,f.jsxs)("div",{id:"movie_rating_search",children:[(0,f.jsx)("i",{className:"fa-sharp fa-solid fa-star",style:{color:"#e4ff1a"}}),Number(o).toFixed(1)]}),(0,f.jsx)("span",{id:"movie_release_date_search",children:parseInt(r)})]})]})})}))})})})]}),(0,f.jsx)(p.Z,{dataLength:m.length,next:B,style:{overflow:"hidden"},hasMore:!0,loader:(0,f.jsx)(d.Z,{})})]})]})}},4771:function(e,t,n){var o=n(2791),r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};var s=function(){return s=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)};var i="Pixel",l="Percent",a={unit:l,value:.8};function c(e){return"number"===typeof e?{unit:l,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:i,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:l,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),a):(console.warn("scrollThreshold should be string or number"),a)}var h=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,o){var r,s=!1,i=0;function l(){r&&clearTimeout(r)}function a(){var a=this,c=Date.now()-i,h=arguments;function u(){i=Date.now(),n.apply(a,h)}s||(o&&!r&&u(),l(),void 0===o&&c>e?u():!0!==t&&(r=setTimeout(o?function(){r=void 0}:u,void 0===o?e-c:e)))}return"boolean"!==typeof t&&(o=n,n=t,t=void 0),a.cancel=function(){l(),s=!0},a}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?s(s({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=c(t);return o.unit===i?e.scrollTop<=o.value+n-e.scrollHeight+1:e.scrollTop<=o.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=c(t);return o.unit===i?e.scrollTop+n>=e.scrollHeight-o.value:e.scrollTop+n>=o.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=s({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),r=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return o.createElement("div",{style:r,className:"infinite-scroll-component__outerdiv"},o.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&o.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},o.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(o.Component);t.Z=h},6439:function(){},6229:function(){},38:function(e,t,n){e.exports=n.p+"static/media/movie_placeholder.de8cb0a7786e6bf2b2de.png"}}]);
//# sourceMappingURL=649.a24f00b5.chunk.js.map