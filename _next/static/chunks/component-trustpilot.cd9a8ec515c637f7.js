!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6d07e416-18d6-4735-916e-cce874f18d52",e._sentryDebugIdIdentifier="sentry-dbid-6d07e416-18d6-4735-916e-cce874f18d52")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3011],{89107:function(e,t,d){d.r(t),d.d(t,{DEFAULT_LOCALE:function(){return s},TEMPLATES:function(){return c},default:function(){return O}});var r=d(5321),i=d(52903),n=d(2784),a=d(25167),l=d(28165);let o={LIGHT:"light"},s="en-GB",u="5c0f854e332a53000110717c",h="1,2,3,4,5",c={CAROUSEL:"CAROUSEL",HORIZONTAL:"HORIZONTAL",MINI_CAROUSEL:"MINI CAROUSEL",DROPDOWN:"DROPDOWN"},f={SAME_AS_PAGE:"Same language as the page"},p=["bg","cs","da","de","el","en","es","et","fi","fr","hr","hu","it","lt","lv","nb","nl","pl","pt","ro","sk","sl","sv"],g={[c.CAROUSEL]:{width:"100%",height:"160px",mobileHeight:"320px",theme:o.LIGHT,id:"53aa8912dec7e10d38f59f36"},[c.HORIZONTAL]:{width:"100%",height:"28px",mobileHeight:"28px",theme:o.LIGHT,id:"5406e65db0d04a09e042d5fc"},[c.MINI_CAROUSEL]:{width:"100%",height:"350px",mobileHeight:"350px",theme:o.LIGHT,id:"539ad0ffdec7e10e686debd7",allowFilterByStars:!1},[c.DROPDOWN]:{width:"100%",height:"30px",mobileHeight:"30px",theme:o.LIGHT,id:"5418052cfbfb950d88702476"}},E=e=>{try{window.Trustpilot.loadFromElement(e.current,!0)}catch(e){console.error(e)}},m=e=>g[e];var b=d(5509),w=d(54789),L=d(32551),A=d(9534);let v=(0,a.Z)("div",{target:"eefuemh0"})(e=>{let{theme:t,height:d}=e;return(0,l.iv)("width:100%;height:",d,";padding:0;",t.mq.kilo,"{padding:0 ",t.spacings.tera,";}")});var O=(0,r.b)(e=>{let{template:t=c.CAROUSEL,stars:d=h,reviewLanguages:r=f.SAME_AS_PAGE,filterByTag:a}=e,l=(0,n.useRef)(),o=m(t),g=o[(0,L.Z)()?"mobileHeight":"height"],{locale:O=s}=(0,n.useContext)(A.Z),I=O.slice(0,2),S=r===f.SAME_AS_PAGE?[I]:p;return((0,w.Z)("//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js",!1),(0,n.useEffect)(()=>{window.Trustpilot&&E(l)},[l,g]),!o&&u)?null:(0,i.tZ)(v,{height:g,"data-selector":(0,b.Z)("section","trustpilot"),"data-elbcontext":"component:trustpilot",children:(0,i.tZ)("div",{ref:l,"data-locale":O,"data-template-id":o.id,"data-businessunit-id":u,"data-review-languages":S,"data-style-height":g,"data-style-width":o.width,"data-theme":o.theme,"data-stars":!1===o.allowFilterByStars?void 0:d||h,"data-tags":a,className:"trustpilot-widget"})})})},54789:function(e,t,d){d.d(t,{Z:function(){return o}});var r=d(2784),i=d(34803),n=d.n(i),a=d(43266);let l=[];function o(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[d,i]=(0,r.useState)({loaded:!1,error:!1});return(0,r.useEffect)(()=>{if(a.Z)return;if(n()(e,l)){i({loaded:!0,error:!1});return}l.push(e);let d=document.createElement("script");d.src=e,d.async=t;let r=()=>{i({loaded:!0,error:!1})},o=()=>{let t=l.indexOf(e);t>=0&&l.splice(t,1),d.remove(),i({loaded:!0,error:!0})};return d.addEventListener("load",r),d.addEventListener("error",o),document.head.appendChild(d),()=>{d.removeEventListener("load",r),d.removeEventListener("error",o)}},[e,t]),[d.loaded,d.error]}}}]);