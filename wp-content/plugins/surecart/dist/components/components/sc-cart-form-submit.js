import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{f as formBusy}from"./getters3.js";import{d as defineCustomElement$4}from"./sc-button2.js";import{d as defineCustomElement$3}from"./sc-icon2.js";import{d as defineCustomElement$2}from"./sc-spinner2.js";const scCartFormSubmitCss="sc-order-submit{display:block;width:auto}",ScCartFormSubmit$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.type="primary",this.size="medium",this.full=!0,this.icon=void 0}render(){return h("sc-button",{submit:!0,type:this.type,size:this.size,full:this.full,loading:formBusy(),disabled:formBusy()},!!this.icon&&h("sc-icon",{name:this.icon,slot:"prefix"}),h("slot",null))}static get style(){return scCartFormSubmitCss}},[4,"sc-cart-form-submit",{type:[513],size:[513],full:[4],icon:[1]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-cart-form-submit","sc-button","sc-icon","sc-spinner"].forEach((t=>{switch(t){case"sc-cart-form-submit":customElements.get(t)||customElements.define(t,ScCartFormSubmit$1);break;case"sc-button":customElements.get(t)||defineCustomElement$4();break;case"sc-icon":customElements.get(t)||defineCustomElement$3();break;case"sc-spinner":customElements.get(t)||defineCustomElement$2()}}))}const ScCartFormSubmit=ScCartFormSubmit$1,defineCustomElement=defineCustomElement$1;export{ScCartFormSubmit,defineCustomElement};