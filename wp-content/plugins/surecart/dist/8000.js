"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[8e3],{6715:function(t,e,i){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"polite",e=document.createElement("div");e.id="a11y-speak-".concat(t),e.className="a11y-speak-region",e.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),e.setAttribute("aria-live",t),e.setAttribute("aria-relevant","additions text"),e.setAttribute("aria-atomic","true");var i=document,n=i.body;return n&&n.appendChild(e),e}i.d(e,{s:function(){return r}});var s,a="";function r(t,e){!function(){for(var t=document.getElementsByClassName("a11y-speak-region"),e=document.getElementById("a11y-speak-intro-text"),i=0;i<t.length;i++)t[i].textContent="";e&&e.setAttribute("hidden","hidden")}(),t=function(t){return t=t.replace(/<[^<>]+>/g," "),a===t&&(t+=" "),a=t,t}(t);var i=document.getElementById("a11y-speak-intro-text"),n=document.getElementById("a11y-speak-assertive"),s=document.getElementById("a11y-speak-polite");n&&"assertive"===e?n.textContent=t:s&&(s.textContent=t),i&&i.removeAttribute("hidden")}s=function(){var t=document.getElementById("a11y-speak-intro-text"),e=document.getElementById("a11y-speak-assertive"),i=document.getElementById("a11y-speak-polite");null===t&&function(){var t=document.createElement("p");t.id="a11y-speak-intro-text",t.className="a11y-speak-intro-text",t.textContent=wp.i18n.__("Notifications"),t.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),t.setAttribute("hidden","hidden");var e=document.body;e&&e.appendChild(t)}(),null===e&&n("assertive"),null===i&&n("polite")},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",s):s())},8e3:function(t,e,i){i.r(e),i.d(e,{sc_password:function(){return c}});var n,s,a=i(5861),r=i(5671),o=i(3144),u=i(1284),l=i.n(u),d=i(8860),h=i(6715),c=function(){function t(e){(0,r.Z)(this,t),(0,d.r)(this,e),this.size="medium",this.value="",this.pill=!1,this.label=void 0,this.showLabel=!0,this.help="",this.placeholder=void 0,this.disabled=!1,this.readonly=!1,this.required=!1,this.autofocus=void 0,this.confirmation=!1,this.name="password",this.confirmationLabel=void 0,this.confirmationPlaceholder=void 0,this.confirmationHelp=void 0,this.enableValidation=!0,this.hintText=void 0,this.verifyText=void 0}var e,i;return(0,o.Z)(t,[{key:"triggerFocus",value:(i=(0,a.Z)(l().mark((function t(e){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.input.triggerFocus(e));case 1:case"end":return t.stop()}}),t,this)}))),function(_x){return i.apply(this,arguments)})},{key:"reportValidity",value:(e=(0,a.Z)(l().mark((function t(){var e,i,n,s,a,r,o,u;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return null===(i=null===(e=this.input)||void 0===e?void 0:e.setCustomValidity)||void 0===i||i.call(e,""),null===(s=null===(n=this.confirmInput)||void 0===n?void 0:n.setCustomValidity)||void 0===s||s.call(n,""),this.confirmation&&(null===(a=this.confirmInput)||void 0===a?void 0:a.value)&&(null===(r=this.input)||void 0===r?void 0:r.value)!==(null===(o=this.confirmInput)||void 0===o?void 0:o.value)&&(this.confirmInput.setCustomValidity(wp.i18n.__("Password does not match.","surecart")),(0,h.s)(wp.i18n.__("Password does not match.","surecart"),"assertive")),this.hintText&&this.input.setCustomValidity(wp.i18n.__(this.hintText,"surecart")),t.next=6,this.input.reportValidity();case 6:if(u=t.sent){t.next=9;break}return t.abrupt("return",!1);case 9:if(!this.confirmInput){t.next=11;break}return t.abrupt("return",this.confirmInput.reportValidity());case 11:return t.abrupt("return",u);case 12:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"handleVerification",value:function(){var t=this;clearTimeout(s),s=setTimeout((function(){t.verifyPassword()}),500)}},{key:"handleValidate",value:function(){var t=this;this.handleVerification(),clearTimeout(n),n=setTimeout((function(){t.validatePassword()}),500)}},{key:"validatePassword",value:function(){var t,e,i;if(this.enableValidation)if(0!==(null===(t=this.input)||void 0===t?void 0:t.value.trim().length)){if((null===(e=this.input)||void 0===e?void 0:e.value.trim().length)<6)return this.hintText=wp.i18n.__("The password must be at least 6 characters in length.","surecart");if(!/[-'`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/.test(null===(i=this.input)||void 0===i?void 0:i.value))return this.hintText=wp.i18n.__("Passwords must contain a special character.","surecart");this.hintText=""}else this.hintText=""}},{key:"verifyPassword",value:function(){var t,e,i,n,s,a,r;if((null===(t=this.confirmInput)||void 0===t?void 0:t.value)&&(null===(e=this.input)||void 0===e?void 0:e.value)!==(null===(i=this.confirmInput)||void 0===i?void 0:i.value))return this.verifyText=wp.i18n.__("Password does not match.","surecart"),void(0,h.s)(this.verifyText,"assertive");(null===(n=this.input)||void 0===n?void 0:n.value)&&(null===(s=this.confirmInput)||void 0===s?void 0:s.value)&&(null===(a=this.input)||void 0===a?void 0:a.value)===(null===(r=this.confirmInput)||void 0===r?void 0:r.value)&&(0,h.s)(wp.i18n.__("Password is matched.","surecart"),"assertive"),this.verifyText=""}},{key:"handleHintTextChange",value:function(){(0,h.s)(this.hintText,"assertive")}},{key:"render",value:function(){var t,e=this;return(0,d.h)("div",{class:"password"},(0,d.h)("div",null,(0,d.h)("sc-input",{ref:function(t){return e.input=t},label:this.label,help:this.help,autofocus:this.autofocus,placeholder:this.placeholder,showLabel:this.showLabel,size:this.size?this.size:"medium",type:"password",name:"password",value:this.value,required:this.required,disabled:this.disabled,onScInput:function(){return e.handleValidate()}}),!!this.hintText&&(0,d.h)("small",{class:"password__hint"},this.hintText)),this.confirmation&&(0,d.h)("div",null,(0,d.h)("sc-input",{ref:function(t){return e.confirmInput=t},label:null!==(t=this.confirmationLabel)&&void 0!==t?t:wp.i18n.__("Confirm Password","surecart"),help:this.confirmationHelp,placeholder:this.confirmationPlaceholder,size:this.size?this.size:"medium",type:"password",value:this.value,onScInput:function(){return e.handleVerification()},required:this.required,disabled:this.disabled}),!!this.verifyText&&(0,d.h)("small",{class:"password__hint"},this.verifyText)))}}],[{key:"watchers",get:function(){return{hintText:["handleHintTextChange"]}}}]),t}();c.style=":host{display:block}.password{display:grid;gap:var(--sc-form-row-spacing, 0.75em)}.password__hint{padding-top:0.36rem;color:red}"}}]);