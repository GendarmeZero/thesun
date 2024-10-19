import{h}from"@stencil/core";import{isAndroidWebView}from"../../../../util";export class PrestoVimeo{constructor(){this.src=void 0,this.poster=void 0,this.player=void 0,this.getRef=void 0}getId(e){const t=/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/.exec(e||"");return(null==t?void 0:t[5])||""}parseHash(e){const t=e.match(/^.*(?:vimeo.com\/|video\/)(?:\d+)(?:\?.*\&*h=|\/)+(?<hash>[\d,a-f]+)/);return t?t.groups.hash:null}render(){if(this.src)return isAndroidWebView()?h("div",{class:"presto-iframe-fallback-container"},h("iframe",{src:`https://player.vimeo.com/video/${this.getId(this.src)}?h=${this.parseHash(this.src)}&amp;loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media`,allowFullScreen:!0,allowTransparency:!0,allow:"autoplay",style:{width:"100%"},class:"presto-fallback-iframe"})):h("div",{class:"plyr__video-embed",part:"embed",ref:this.getRef,"data-plyr-provider":"vimeo","data-plyr-embed-id":this.getId(this.src),"data-plyr-embed-hash":this.parseHash(this.src)})}static get is(){return"presto-vimeo"}static get originalStyleUrls(){return{$:["presto-vimeo.css"]}}static get styleUrls(){return{$:["presto-vimeo.css"]}}static get properties(){return{src:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"src",reflect:!1},poster:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"poster",reflect:!1},player:{type:"any",mutable:!1,complexType:{original:"any",resolved:"any",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"player",reflect:!1},getRef:{type:"unknown",mutable:!0,complexType:{original:"(elm?: HTMLIFrameElement) => void",resolved:"(elm?: HTMLIFrameElement) => void",references:{HTMLIFrameElement:{location:"global",id:"global::HTMLIFrameElement"}}},required:!1,optional:!0,docs:{tags:[],text:""}}}}}