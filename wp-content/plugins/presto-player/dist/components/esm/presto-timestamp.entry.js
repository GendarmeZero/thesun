import{r as registerInstance,h}from"./index-56b61ec5.js";const prestoTimestampCss=":host{display:inline}",PrestoTimestampStyle0=prestoTimestampCss,PrestoTimestamp=class{constructor(e){registerInstance(this,e),this.time=void 0}handleClick(e){e.preventDefault();const t=document.body.querySelector("presto-player");t&&t.goToAndPlay(this.timeToSeconds(this.time))}timeToSeconds(e){let t,s=e.split(":");return s.length>1&&(t=60*parseInt(s[0])),parseInt(s[1])+parseInt(t)}render(){return h("a",{key:"643d2582416f86c927486f331bbb21fa631fc59b",href:"#",class:"presto-timestamp",onClick:e=>this.handleClick(e)},h("slot",{key:"6367df80d3a83fdc2acf7d1b7af9eca0525495f5"},this.time))}};PrestoTimestamp.style=PrestoTimestampStyle0;export{PrestoTimestamp as presto_timestamp};