"use strict";(self.webpackChunkiflix_movies_app=self.webpackChunkiflix_movies_app||[]).push([[475],{7475:function(e,i,a){a.r(i),a.d(i,{default:function(){return m}});var s=a(8683),n=a(4165),t=a(5861),r=a(9439),l=a(2791),o=a(2651),c=a(7689),d=(a(38),a(184));function u(e){var i,a,s,u,v,m,p,h,f,x,j,w,_,y,N,b,g=e.movieDetail,Z=(0,c.UO)().id,k=(0,l.useState)([]),S=(0,r.Z)(k,2),T=(S[0],S[1]),F=(0,l.useState)("Related Videos Not Available!"),C=(0,r.Z)(F,2),M=C[0],V=(C[1],(0,l.useState)("No Recommended Video Found!")),B=(0,r.Z)(V,2),D=(B[0],B[1],function(){var e=(0,t.Z)((0,n.Z)().mark((function e(){var i,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="https://api.themoviedb.org/3/movie/".concat(Z,"/recommendations?api_key=6758043f0537fea4f9c2c4e1534a395a"),e.next=3,(0,o.rQ)(i);case 3:a=e.sent,T(a.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),O=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="".concat(o.dU,"/movie/").concat(Z,"/videos?").concat(o.cf),e.next=3,(0,o.rQ)(i);case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){D(),O()}),[]);var Q=["video_key_1"],U=null===g||void 0===g||null===(i=g.videos)||void 0===i||null===(a=i.results[0])||void 0===a?void 0:a.key,A=null===g||void 0===g||null===(s=g.videos)||void 0===s||null===(u=s.results[0])||void 0===u?void 0:u.name.slice(0,23),R=null===g||void 0===g||null===(v=g.videos)||void 0===v||null===(m=v.results[1])||void 0===m?void 0:m.key,E=null===g||void 0===g||null===(p=g.videos)||void 0===p||null===(h=p.results[1])||void 0===h?void 0:h.name.slice(0,23),I=null===g||void 0===g||null===(f=g.videos)||void 0===f||null===(x=f.results[2])||void 0===x?void 0:x.key,W=null===g||void 0===g||null===(j=g.videos)||void 0===j||null===(w=j.results[2])||void 0===w?void 0:w.name.slice(0,23),X=null===g||void 0===g||null===(_=g.videos)||void 0===_||null===(y=_.results[3])||void 0===y?void 0:y.key,q=null===g||void 0===g||null===(N=g.videos)||void 0===N||null===(b=N.results[3])||void 0===b?void 0:b.name.slice(0,23);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{id:"officialVideos",children:[(0,d.jsx)("h1",{id:"movie_related_title",children:"Movie Related Videos!"}),(0,d.jsx)("div",{className:"video-related-container",children:""===U||null==U?(0,d.jsx)("h1",{id:"video_not_found",children:M}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"flex_direction",children:[Q.map((function(e){return(0,d.jsx)("iframe",{className:"custom-video-player",src:"https://www.youtube.com/embed/".concat(U,"?autoplay=1&controls=1&modestbranding=1&showinfo=0"),title:"Official Movie Trailer",frameBorder:"0",allow:"encrypted-media",rel:"0",allowFullScreen:!0},e)})),(0,d.jsx)("h1",{id:"video_name",children:A+"..."})]}),(0,d.jsx)("div",{className:"video-related-container",children:(0,d.jsxs)("div",{className:"flex_direction",children:[Q.map((function(e){return(0,d.jsx)("iframe",{className:"custom-video-player",src:"https://www.youtube.com/embed/".concat(R,"?autoplay=1&controls=1"),title:"Movie Trailer",frameBorder:"0",allow:"encrypted-media",allowFullScreen:!0},e)})),(0,d.jsx)("h1",{id:"video_name",children:E+"..."})]})}),(0,d.jsx)("div",{className:"video-related-container",children:(0,d.jsxs)("div",{className:"flex_direction",children:[Q.map((function(e){return(0,d.jsx)("iframe",{className:"custom-video-player",src:"https://www.youtube.com/embed/".concat(I,"?autoplay=1&controls=1"),title:"Movie Trailer",frameBorder:"0",allow:"encrypted-media",allowFullScreen:!0},e)})),(0,d.jsx)("h1",{id:"video_name",children:W+"..."})]})}),(0,d.jsx)("div",{className:"video-related-container",children:(0,d.jsxs)("div",{className:"flex_direction",children:[Q.map((function(e){return(0,d.jsx)("iframe",{className:"custom-video-player",src:"https://www.youtube.com/embed/".concat(X,"?autoplay=0&controls=1"),title:"Movie Trailer",frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,width:"560",height:"315"},e)})),(0,d.jsx)("h1",{id:"video_name",children:q+"..."})]})})]})})]})})}a(6229),a(8757);var v=a(5717);function m(){var e,i,a,m=(0,l.useState)(""),p=(0,r.Z)(m,2),h=p[0],f=p[1],x=(0,l.useState)(""),j=(0,r.Z)(x,2),w=j[0],_=j[1],y=(0,l.useState)(""),N=(0,r.Z)(y,2),b=N[0],g=N[1],Z=(0,l.useState)(!1),k=(0,r.Z)(Z,2),S=k[0],T=k[1],F=(0,l.useState)(!1),C=(0,r.Z)(F,2),M=(C[0],C[1]),V=(0,c.UO)().id,B=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(){var i,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="https://api.themoviedb.org/3/movie/".concat(V,"?api_key=6758043f0537fea4f9c2c4e1534a395a&append_to_response=casts,crew,videos,images,releases"),e.next=3,(0,o.rQ)(i);case 3:a=e.sent,f(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(){var i,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="".concat(o.dU,"/movie/").concat(V,"/videos?").concat(o.cf),e.next=3,(0,o.rQ)(i);case 3:a=e.sent,(s=a.results.find((function(e){return"Trailer"===e.type})))?_(s.key):g("Oops! Movie Tralier is not Avaliable!");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){B()}),[]);var O=Number(h.vote_average);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("artical",{className:"movie-detail",children:(0,d.jsxs)("div",{className:"background_image",style:{backgroundImage:"url(".concat("https://image.tmdb.org/t/p/w500"+h.backdrop_path,")")},children:[(0,d.jsxs)("div",{className:"brightness",children:[(0,d.jsxs)("figure",{id:"movie_poster_detail",children:[(0,d.jsx)("img",{src:o.jV+h.poster_path,className:"movie_image_detail",alt:h.title}),(0,d.jsxs)("div",{className:"movie_detail",children:[(0,d.jsx)("h1",{className:"heading",children:h.title}),(0,d.jsxs)("div",{className:"spancontent",children:[(0,d.jsxs)("span",{className:"movierating",children:[(0,d.jsx)("i",{className:"fa-sharp fa-solid fa-star",style:{color:"#e4ff1a",display:"inline"}}),O.toFixed(1)]}),(0,d.jsxs)("span",{className:"movie_length",children:[h.runtime,"m"]}),(0,d.jsx)("span",{className:"movie_releasedate_detail",children:parseInt(h.release_date)})]}),null===(e=h.genres)||void 0===e?void 0:e.map((function(e){var i=e.name;return(0,d.jsx)("span",{id:"genre_filter",children:i+" "})})),(0,d.jsx)("h1",{id:"overview_title",children:"Overview"}),(0,d.jsx)("p",{className:"overview_detail",children:String(h.overview).slice(0,400)}),(0,d.jsxs)("p",{className:"Director",children:[(0,d.jsx)("span",{id:"word",children:"Directed by:"}),null===(i=h.casts)||void 0===i?void 0:i.crew.slice(0,2).map((function(e){var i=e.id,a=e.name;return(0,d.jsx)("span",{id:"Director_span",children:"".concat(a," , ")},i)})),"..."]}),S?(0,d.jsxs)("div",{id:"movieTralier",children:[(0,d.jsxs)("div",{className:"mainVideoContent ".concat(w?"open":""),children:[(0,d.jsx)("button",{className:"exit-button",onClick:function(){T(!1)},children:"X"}),(0,d.jsx)("iframe",{className:"custom-tralier-player",src:"https://www.youtube.com/embed/".concat(w,"?autoplay=1&controls=1&modestbranding=1&showinfo=0"),title:w.title,allow:"encrypted-media",rel:"0",allowFullScreen:!0})]}),(0,d.jsx)("span",{id:"notAvaliable",children:b})]}):(0,d.jsxs)("div",{className:"videoBtn",children:[(0,d.jsx)("div",{className:"play-btn",onClick:function(){T(!0),M(!0),D()}}),(0,d.jsx)("span",{id:"watchtralir",children:"Watch Traliar!"})]})]})]}),(0,d.jsxs)("div",{id:"top_cast",children:[(0,d.jsx)("h1",{id:"cast_title",children:"Top Cast!"}),(0,d.jsx)("div",{id:"castdetail",children:(0,d.jsx)(v.Z,(0,s.Z)((0,s.Z)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:null===(a=h.casts)||void 0===a?void 0:a.cast.map((function(e){var i=e.profile_path,a=e.name,s=e.character;return(0,d.jsxs)("div",{className:"movie_direction",children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/original/"+i,alt:"",id:"cast_img"}),(0,d.jsx)("div",{id:"cast_name",children:a}),(0,d.jsx)("div",{id:"acting_name",children:s.slice(0,10)+"..."})]})}))}))})]})]}),(0,d.jsx)(u,{movieDetail:h},V)]})})})}},6229:function(){},38:function(e,i,a){e.exports=a.p+"static/media/movie_placeholder.de8cb0a7786e6bf2b2de.png"}}]);
//# sourceMappingURL=475.7d57803c.chunk.js.map