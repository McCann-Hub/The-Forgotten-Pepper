(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{360:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));n(82),n(78),n(79);var a=n(34);function o(t,e,n,o,i){var c=a.f["".concat(n)]||"";if(Object(a.b)(n)){var r=t.getElementsByTagName(e)[0];if(t.getElementById(c))return;var s=t.createElement(e);s.id=c,s.src=o,(i||function(){})(s),r.parentNode.insertBefore(s,r)}}function i(t,e,n){var a=t.querySelectorAll("".concat(e,'[src*="').concat(n,'"'));a.length>0&&a.forEach((function(t){return t.parentNode.removeChild(t)}))}},362:function(t,e,n){"use strict";n(78),n(30),n(198),n(79);var a=n(360);e.a={mounted:function(){Object(a.b)(document,"script","facebook","https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0")},beforeDestroy:function(){Object(a.a)(document,"script","facebook"),Object.keys(window).forEach((function(t){t.startsWith("FB")&&delete window[t]}))}}},568:function(t,e,n){"use strict";n.r(e);var a=n(362),o={name:"FacebookLike",props:{action:{type:String,default:"like"},colorscheme:{type:String,default:"light"},layout:{type:String,default:"standard"},share:{type:Boolean,default:!0},size:{type:String,default:"small"}},mixins:[a.a]},i=n(4),c=Object(i.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"fb-like",attrs:{"data-action":this.action,"data-colorscheme":this.colorscheme,"data-href":""+(this.$themeConfig.domain||"")+this.$page.path,"data-layout":this.layout,"data-size":this.size,"data-share":this.share}})}),[],!1,null,null,null);e.default=c.exports}}]);