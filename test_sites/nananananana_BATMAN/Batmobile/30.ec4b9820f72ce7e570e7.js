(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"45k0":function(t,o,i){"use strict";i("C6Cu")},C6Cu:function(t,o,i){var n=i("jkG/");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("SZ7m").default)("00a26742",n,!0,{})},KVjL:function(t,o,i){"use strict";i.r(o);i("yq1k"),i("JTJg");var n=i("p46w"),e=i.n(n),s={name:"sticky-footer",data:function(){return{showFooter:!0,footerHasAd:!1,hideFooterCookie:!1}},mounted:function(){var t=this,o=document.getElementsByClassName("footer");o[o.length-1].style.marginBottom=this.$refs.sticky.clientHeight+"px";var i=e.a.get("bar_status");i&&"hide"==i&&(this.hideFooterCookie=!0,this.showFooter=!1),this.hideFooterCookie||googletag.cmd.push((function(){googletag.pubads().addEventListener("slotOnload",(function(o){"footer_bar"==o.slot.getTargeting("pos")&&(t.footerHasAd=!0)}))}))},methods:{hideFooter:function(){this.showFooter=!1,e.a.set("bar_status","hide",{expires:10,domain:this.cookieDomain(),path:"/"})},cookieDomain:function(){return window.location.href.includes("local")?".hemmings.local":".hemmings.com"}}},a=(i("45k0"),i("KHd+")),r=Object(a.a)(s,(function(){var t=this._self._c;return this.showFooter?t("div",{ref:"sticky",class:this.footerHasAd?"sticky_footer":""},[t("button",{staticClass:"px-2 dismiss_icon cursor-pointer",on:{click:this.hideFooter,keypress:this.hideFooter}},[t("i",{staticClass:"fa fa-times",staticStyle:{color:"black !important"}})]),this._v(" "),this._t("default")],2):this._e()}),[],!1,null,null,null);o.default=r.exports},"jkG/":function(t,o,i){(t.exports=i("I1BE")(!1)).push([t.i,".sticky_footer{\n  position:fixed;\n  left:0;\n  bottom:0;\n  width:380px;\n  text-align:left;\n  padding:0;\n  z-index:999998\n}\n.dismiss_icon{\n  position:absolute;\n  top:8px;\n  right:8px;\n  border:none;\n  font-size:30px;\n  text-align:center\n}\n@media(min-width: 1060px){\n.sticky_footer{\n    border-top:1px solid #aaa;\n    background-color:#efefef;\n    text-align:center !important;\n    padding:10px 0 !important;\n    width:100% !important\n}\n.dismiss_icon{\n    font-size:16px !important\n}\n}",""])}}]);
//# sourceMappingURL=30.ec4b9820f72ce7e570e7.js.map