(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{338:function(e,n,o){"use strict";o.r(n),o.d(n,"AddInitTask",function(){return l}),o.d(n,"InitAll",function(){return u});var t=o(358),d=o.n(t),c=(o(401),o(402),o(403),o(404),o(405),o(406),o(407),o(408),o(409),o(410),o(411),o(412),o(375),o(339)),i=o.n(c),a=o(337);window.jQuery=d.a,window.$=d.a,i.a.config.productionTip=!1,i.a.use(a.default),window.onwheel||(window.onwheel=function(){});let w=[];function l(e){w.push(e)}function u(){let e=Promise.all(w);return w=[],e}},375:function(e,n){window.DownloadData=function(){let e=document.createElement("a");return document.body.appendChild(e),e.style="display: none",e.target="_blank",function(n,o,t){let d=new Blob([n],{type:o||"octet/stream"}),c=window.URL.createObjectURL(d);t&&""!=t?(e.href=c,e.download=t,e.click()):window.open(c,"_blank"),window.URL.revokeObjectURL(c)}}(),window.SelectText=function(e){var n,o;document.body.createTextRange?((n=document.body.createTextRange()).moveToElementText(e),n.select()):window.getSelection&&(o=window.getSelection(),(n=document.createRange()).selectNodeContents(e),o.removeAllRanges(),o.addRange(n))},window.copyToClipboard=function(e){var n=$("<input>");$("body").append(n),n.val(e).select(),document.execCommand("copy"),n.remove()}}}]);
//# sourceMappingURL=8.js.map