(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{566:function(e,t,r){"use strict";r.r(t);r(82),r(78),r(199),r(79);var o=r(34),i={name:"CommentsRemarkbox",computed:{remarkboxOwnerKey:function(){return((this.$themeConfig||{}).remarkbox||{}).ownerKey||""}},mounted:function(){this.toggleRemarkbox();document.addEventListener("CookieSettingUpdated",this.toggleRemarkbox,!1)},beforeDestroy:function(){document.removeEventListener("CookieSettingUpdated",this.toggleRemarkbox,!1)},methods:{toggleRemarkbox:function(){if(this.remarkboxOwnerKey.trim().length>0&&Object(o.b)("remarkbox")){var e=window.location.hash,t="https://my.remarkbox.com/embed?rb_owner_key=".concat(this.remarkboxOwnerKey,"&thread_title=").concat(encodeURI(window.document.title),"&thread_uri=").concat(encodeURIComponent(window.location.href)).concat(e),r=document.createElement("script");r.src="https://my.remarkbox.com/static/js/iframe-resizer/iframeResizer.min.js",r.onload=function(){var r=document.createElement("iframe");r.setAttribute("id","remarkbox-iframe"),r.setAttribute("scrolling","no"),r.setAttribute("src",t),r.setAttribute("frameborder","0"),r.setAttribute("tabindex","0"),r.setAttribute("title","Remarkbox"),r.style.width="100%",document.getElementById("remarkbox-div").appendChild(r),iFrameResize({checkOrigin:["https://my.remarkbox.com"],inPageLinks:!0,initCallback:function(t){t.iFrameResizer.moveToAnchor(e)}},document.getElementById("remarkbox-iframe"))},this.$refs["remarkbox-div"].appendChild(r)}else if(!Object(o.b)("remarkbox")){var i=this;["script","iframe"].forEach((function(e){i.$refs["remarkbox-div"].querySelectorAll(e).forEach((function(e){e.parentNode.removeChild(e)}))}))}}}},n=r(4),a=Object(n.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{ref:"remarkbox-div",staticClass:"px-2"},[t("div",{attrs:{id:"remarkbox-div"}})])}),[],!1,null,null,null);t.default=a.exports}}]);