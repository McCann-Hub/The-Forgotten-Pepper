(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{512:function(t,e,a){},546:function(t,e,a){"use strict";a(512)},573:function(t,e,a){"use strict";a.r(e);a(82),a(25),a(61),a(10),a(32);var s=a(43),n={name:"PageCard",props:{page:{type:Object,default:function(){}},hideTags:{type:Boolean,default:!1}},computed:{tags:function(){var t=this;return((this.$themeConfig||{}).frontmatters||(this.$themeConfig||{}).blog.frontmatters||[]).reduce((function(t,e){return t.push.apply(t,Object(s.a)(e.keys.map((function(t){return{key:t,path:e.path}})))),t}),[]).reduce((function(e,a){var n=t.page.frontmatter[a.key];return n&&(Array.isArray(n)?e.push.apply(e,Object(s.a)(n.map((function(t){return{tag:t,path:"".concat(a.path).concat(t,"/")}})))):e.push({tag:n,path:"".concat(a.path).concat(n,"/")})),e}),[])}},mounted:function(){this.$refs.hero&&this.$refs.hero.$el.style.setProperty("--background-url","url('".concat(this.page.frontmatter.image,"')"))}},r=(a(546),a(4)),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-card rounded overflow-hidden shadow flex flex-wrap justify-center"},[t.page.frontmatter.image?a("nav-link",{ref:"hero",staticClass:"hero",attrs:{link:t.page.path}},[a("div",{staticClass:"bg-no-repeat bg-center bg-cover"})]):t._e(),t._v(" "),a("div",{staticClass:"content flex flex-col justify-between"},[a("div",[a("div",{staticClass:"mb-2"},[a("div",{staticClass:"font-bold text-xl"},[a("nav-link",{attrs:{link:t.page.path}},[t._v(t._s(t.page.title))])],1),t._v(" "),a("div",{staticClass:"font-thin text-xs"},[a("span",{staticClass:"whitespace-nowrap"},[t._v(t._s("published: "+new Date(t.page.frontmatter.date||t.page.created).toLocaleDateString()))]),t._v(" "),a("br"),t._v(" "),t.page.lastUpdated?a("span",{staticClass:"whitespace-nowrap"},[t._v(t._s("updated: "+t.page.lastUpdated))]):t._e()])]),t._v(" "),a("p",{staticClass:"font-medium text-base select-none truncate-overflow"},[t._v("\n        "+t._s(t.page.frontmatter.summary||t.page.summary)+"\n      ")])]),t._v(" "),t.hideTags?t._e():a("div",{staticClass:"tags"},t._l(t.tags,(function(t){return a("tag-pill",{key:t.tag,staticClass:"inline-block mr-2 my-2",attrs:{tag:t}})})),1)])],1)}),[],!1,null,"7dd53750",null);e.default=i.exports}}]);