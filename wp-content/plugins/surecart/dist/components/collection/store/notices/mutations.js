import{__}from"@wordpress/i18n";import{speak}from"@wordpress/a11y";import state from"./store";const defaultOptions={dismissible:!1};export const createNotice=(e,t,s=defaultOptions)=>{"string"==typeof t&&(t={type:e,message:t,code:""}),(null==t?void 0:t.message)||(t.message=__("Something went wrong. Please try again.","surecart")),state.type=e,t={...s,...t},speak(t.message,"assertive"),Object.keys(t).forEach((e=>{state[e]=t[e]}))};export const createErrorNotice=(e,t=defaultOptions)=>{createNotice("error",e,t)};export const createSuccessNotice=(e,t=defaultOptions)=>{createNotice("success",e,t)};export const createInfoNotice=(e,t=defaultOptions)=>{createNotice("info",e,t)};export const createWarningNotice=(e,t=defaultOptions)=>{createNotice("warning",e,t)};export const removeNotice=()=>{state.type="default",state.code="",state.message="",state.data={status:0,type:"",http_status:""},state.additional_errors=[]};