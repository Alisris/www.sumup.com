!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7e97c4a0-1b15-4335-8637-6bdae6ef4e5c",e._sentryDebugIdIdentifier="sentry-dbid-7e97c4a0-1b15-4335-8637-6bdae6ef4e5c")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97],{31392:function(e,t,a){a.r(t),a.d(t,{default:function(){return er}});var i=a(30815),r=a(52903);a(2784);var n=a(13980),l=a.n(n),o=a(25167),s=a(28165),d=a(59781),c=a(61328),g=a(32922),p=a(5577),u=a.n(p),m=a(97704),f=a(8288),y=a.n(f),h=a(18147),b=a(76854),v=a.n(b),x=a(58646),Z=a(4670),w=a(83286),k=a(51699);let _=e=>{let{theme:t,size:a}=e;return({kilo:t.spacings.byte,mega:t.spacings.mega,giga:t.spacings.tera})[a]},I=e=>(0,s.F4)("0%{width:0;}100%{width:",e,"%;}"),z=(0,o.Z)("div",{target:"e10rncgy0"})(e=>{let{theme:t}=e;return(0,s.iv)("label:progress-bar;display:flex;align-items:center;margin-bottom:",t.spacings.mega,";width:100%;")},";"),q=(0,o.Z)("span",{target:"e10rncgy1"})(e=>{let{theme:t,size:a,value:i,max:r}=e;return(0,s.iv)("label:progress-bar__progress;background-color:var(--cui-bg-highlight);position:relative;width:100%;height:",_({theme:t,size:a}),";overflow:hidden;&::after{content:'';display:block;position:absolute;top:0;bottom:0;left:0;width:0;background-color:var(--cui-bg-accent-strong);opacity:",i?1:0,";animation:",I(i/r*100)," 2s ease forwards;transition:opacity 1s ease;}")},";"),R=(0,o.Z)("span",{target:"e10rncgy2"})(e=>{let{theme:t}=e;return(0,s.iv)("label:progress-bar__label;font-size:",t.typography.body.two.fontSize,";line-height:",t.typography.body.two.lineHeight,";margin-left:",t.spacings.byte,";")},";"),O=e=>{var{children:t=null,max:a=100,value:n=0,size:l=O.KILO}=e,o=(0,w._)(e,["children","max","value","size"]);let s=(0,k.E)("progress-bar_");return(0,r.BX)(z,{children:[(0,r.tZ)(q,(0,Z._)((0,i._)({role:"progressbar","aria-valuenow":n,"aria-valuemin":"0","aria-valuemax":a,"aria-labelledby":t?s:null},o),{size:l,max:a,value:n})),t&&(0,r.tZ)(R,{id:s,children:t})]})};O.KILO="kilo",O.MEGA="mega",O.GIGA="giga",O.propTypes={max:l().number,value:l().number,size:l().oneOf([O.KILO,O.MEGA,O.GIGA]),children:x.fv};var j=a(87135);let A={width:40,height:40},E=(0,o.Z)("a",{target:"ejcm6y30"})(e=>{let{theme:t,numberOfMethods:a}=e;return(0,s.iv)("display:flex;flex-direction:column;flex-shrink:1;flex-grow:1;min-width:50%;align-items:center;flex:1 1 50%;padding:",t.spacings.kilo," ",t.spacings.kilo,";z-index:0;cursor:pointer;max-width:",1===a?"".concat(300,"px"):"50%",";",t.mq.mega,"{padding:",t.spacings.mega," ",t.spacings.tera,";}")}),F=(0,o.Z)(j.Z,{target:"ejcm6y31"})(e=>{let{theme:t}=e;return(0,s.iv)("height:",A.height,"px;margin-bottom:",t.spacings.byte,";")}),G=(0,s.iv)("display:none;"),L=(0,o.Z)(j.Z,{target:"ejcm6y32"})(G),M=(0,o.Z)(h.u,{target:"ejcm6y33"})(e=>{let{theme:t}=e;return(0,s.iv)("text-transform:uppercase;text-align:center;margin-bottom:",t.spacings.byte,";white-space:nowrap;",t.mq.kiloToMega,"{font-size:12px;}")}),T=(0,s.iv)("width:100%;max-width:65%;"),C=(0,o.Z)("div",{target:"ejcm6y34"})(T),X=e=>{let{iconImage:t={},iconImageActive:a={},label:i="",isActive:n,onClick:l}=e;if(y()(t)||y()(a))return null;let o=v()(i);return(0,r.BX)(E,{onClick:l,children:[(0,r.tZ)(F,{src:n?a.url:t.url,alt:n?a.alt:t.alt,contentful:A,lazyLoad:!1}),(0,r.tZ)(L,{src:a.url,alt:a.alt,contentful:A}),(0,r.tZ)(M,{variant:"highlight",size:"two",id:o,children:i}),(0,r.tZ)(C,{children:(0,r.tZ)(O,{max:100,value:n?100:0,"aria-labelledby":o})})]})};X.propTypes={label:l().string.isRequired,isActive:l().bool,iconImage:x.d3.isRequired,iconImageActive:x.d3.isRequired,onClick:l().func,numberOfMethods:l().number};let B={width:400},D=(0,s.iv)("height:",190,"px;width:",244,"px;z-index:3;"),V=(0,s.iv)("width:",400,"px;height:auto;z-index:3;"),K={tap:{keyframe:(0,s.F4)("0%,100%{opacity:0;transform:scale(1.4) translate(30%,-50px) rotate(-40deg);}30%,75%{opacity:1;transform:scale(1) translate(-30%,0) rotate(-20deg);}"),styles:D,duration:1.8},tapPhone:{keyframe:(0,s.F4)("0%,100%{opacity:0;transform:scale(1.4) translate(30%,-50px) rotate(-40deg);}30%,75%{opacity:1;transform:scale(1) translate(-30%,0) rotate(-20deg);}"),styles:V,duration:1.8},stripe:{keyframe:(0,s.F4)("0%{opacity:0;transform:translate(60%,-45%) rotate(180deg);}15%,75%{opacity:1;}60%,100%{transform:translate(-120%,-45%) rotate(180deg);}100%{opacity:0;}"),styles:(0,s.iv)(D,"      z-index:1;margin-top:-60px;"),duration:1.8},pluckTop:{keyframe:(0,s.F4)("0%,100%{opacity:0;transform:translate(-41%,-140%) rotate(-90deg);}30%,75%{opacity:1;transform:translate(-41%,-95%) rotate(-90deg);}"),styles:(0,s.iv)(D,"      z-index:1;"),duration:1.8},pluckRight:{keyframe:(0,s.F4)("0%,100%{opacity:0;transform:translate(100%,10%);}30%,75%{opacity:1;transform:translate(20%,10%);}"),styles:(0,s.iv)(D,"      z-index:1;"),duration:1.8}},J=(0,o.Z)(j.Z,{target:"e1kdcg2b0"})(e=>{let{styles:t,keyframe:a,duration:i,isVisible:r}=e;return(0,s.iv)(t,"  animation:",a," ",i,"s ease-in forwards;display:",r?"block":"none",";border-radius:15px;left:50%;pointer-events:none;position:absolute;will-change:transform;")}),N=e=>{var{animationImage:t={},animation:a}=e,n=(0,w._)(e,["animationImage","animation"]);if(y()(t))return null;let l=K[a];return(0,r.tZ)(J,(0,i._)({src:t.url,alt:t.alt,contentful:B,lazyLoad:!1,isVisible:n.isVisible},l))},P=Object.keys(K);N.propTypes={animationImage:x.d3.isRequired,animation:l().oneOf(Object.keys(K)).isRequired,isVisible:l().bool};var H=a(5509),S=a(98019),Q=a(97354);let U="product_payment_methods",W=(0,o.Z)(j.Z,{target:"e1pa6ssr0"})(e=>{let{theme:t}=e;return(0,s.iv)("display:block;padding:",t.spacings.giga,";width:",300,"px;margin-bottom:",t.spacings.kilo,";z-index:2;",t.mq.kilo,"{margin-bottom:0;}")}),Y=(0,s.iv)("display:flex;flex:1;align-items:center;justify-content:center;z-index:20;"),$=(0,o.Z)("div",{target:"e1pa6ssr1"})(Y),ee=(0,s.iv)("display:flex;flex-wrap:wrap;flex-basis:50%;z-index:1;align-items:center;justify-content:center;"),et=(0,o.Z)("div",{target:"e1pa6ssr2"})(ee),ea=(0,o.Z)(d.X,{target:"e1pa6ssr3"})(e=>{let{theme:t}=e;return(0,s.iv)("display:flex;justify-content:center;align-items:center;flex-direction:column-reverse;",t.mq.kilo,"{flex-direction:row;}")}),ei=e=>{let{methods:t=[],deviceImage:a={}}=e,{experiments:n}=(0,Q.Z)(),l=(0,S.dZ)(t,n);return y()(a)?null:(0,r.tZ)(u(),{cycle:!0,autoPlay:!0,duration:4e3,total:l.length,children:e=>{let{step:t,getStepControlProps:n,play:o,pause:s}=e;return(0,r.tZ)(m.df,{rootMargin:"15% 0%",onChange:e=>e?o():s(),"data-selector":(0,H.Z)("section",U),"data-elbcontext":"component:product_payment_methods",children:(0,r.tZ)(c.r,{children:(0,r.BX)(ea,{children:[(0,r.tZ)(g.J,{span:{default:12,mega:5},children:(0,r.BX)($,{"data-selector":(0,H.Z)("animation_container",U),children:[(0,r.tZ)(W,{src:a.url,alt:a.alt,contentful:{width:300},"data-selector":(0,H.Z)("device_image",U)}),l.map((e,a)=>{let{animationImage:i,animation:n}=e;return(0,r.tZ)(N,{animationImage:i,animation:n,isVisible:t===a,lazyLoad:!1},a)})]})}),(0,r.tZ)(g.J,{span:{default:12,mega:5},children:(0,r.tZ)(et,{"data-selector":(0,H.Z)("payment_methods_container",U),children:l.filter(e=>{let{label:t}=e;return t}).map((e,a)=>{let{label:o,iconImage:s,iconImageActive:d}=e;return(0,r.tZ)(X,(0,i._)({label:o,numberOfMethods:l.length,iconImage:s,iconImageActive:d,isActive:t===a},n({step:a})),a)})})})]})})})}})};ei.propTypes={deviceImage:x.d3.isRequired,methods:l().arrayOf(l().shape({label:l().string.isRequired,animation:l().oneOf(P).isRequired,animationImage:x.d3.isRequired,iconImage:x.d3.isRequired,iconImageActive:x.d3.isRequired}))};var er=ei}}]);