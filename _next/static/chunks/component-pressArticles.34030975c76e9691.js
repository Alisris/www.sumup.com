!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bae2f7b3-32a7-471d-9db9-2a9df8e6540a",e._sentryDebugIdIdentifier="sentry-dbid-bae2f7b3-32a7-471d-9db9-2a9df8e6540a")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7072,3300,740],{9676:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var n=r(30815),a=r(4670),i=r(67862),s=r(52903),d=r(2784),l=r(13980),o=r.n(l),c=r(25167),u=r(28165),p=r(18147),g=r(75289),f=r(53892),m=r(89022),h=r(61328),b=r(59781),v=r(32922),Z=r(8288),y=r.n(Z),k=r(88766),_=r(50557),w=r(43364),I=r(5509);function C(){let e=(0,i._)(["\n    margin-bottom: ",";\n  "]);return C=function(){return e},e}let x="press_articles",q=w.Z.Item.withComponent("a");q.defaultProps=w.Z.Item.defaultProps;let P=(0,c.Z)(p.u,{target:"eeb6q0p0"})(e=>{let{theme:t}=e;return(0,u.iv)("margin-right:",t.spacings.tera,";margin-bottom:",t.spacings.mega,";",t.mq.untilKilo,"{margin-right:0;}")}),N=(0,c.Z)(g.s,{target:"eeb6q0p1"})(e=>{let{theme:t}=e;return(0,u.iv)(C(),t.spacings.giga)}),T=(0,c.Z)(f.C,{target:"eeb6q0p2"})(e=>{let{theme:t}=e;return(0,u.iv)("white-space:nowrap;",t.mq.untilKilo,"{margin-bottom:",t.spacings.bit,";}")});class W extends d.Component{render(){let{headline:e="",pressArticles:t=[],moreButtonLabel:r,itemsPerPage:i=5}=this.props;if(y()(t))return null;let d=this.state.page*i,l=t.slice(0,d),o=r&&t.length>l.length;return(0,s.tZ)(h.r,{"data-selector":(0,I.Z)("section",x),"data-elbcontext":"component:press_articles",children:(0,s.tZ)(b.X,{children:(0,s.BX)(v.J,(0,a._)((0,n._)({},k.HT),{children:[e&&(0,s.tZ)(N,{as:"h2",children:e}),(0,s.tZ)(w.Z.Wrapper,{"data-selector":(0,I.Z)("article_list",x),children:l.map((e,t)=>(0,s.tZ)(_.Z,{href:e.slug,trackingContentEntry:{contentType:e.contentType,contentEntryId:e.id},children:e.headline&&(0,s.BX)(q,{children:[(0,s.tZ)(P,{as:"h3",children:e.headline}),e.formatted.date&&(0,s.tZ)(T,{"data-selector":(0,I.Z)("time_badge",x),children:e.formatted.date})]})},t))}),o&&(0,s.tZ)(m.z,{onClick:this.handleClick,"data-selector":(0,I.Z)("primary_button",x),children:r})]}))})})}constructor(...e){super(...e),this.state={page:1},this.handleClick=()=>{this.setState(e=>({page:e.page+1}))}}}W.propTypes={headline:o().string,pressArticles:o().array,moreButtonLabel:o().string,itemsPerPage:o().number};var E=W},43364:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(25167),a=r(28165),i=r(73184);let s=(0,n.Z)(i.Z,{target:"e10z3igp0"})(e=>{let{theme:t}=e;return(0,a.iv)("margin-bottom:",t.spacings.tera,";padding:0;overflow:hidden;")});s.defaultProps=i.Z.defaultProps,s.displayName="List";var d=r(13980),l=r.n(d);let o=(0,n.Z)("div",{target:"e17xz69h0"})(e=>{let{theme:t}=e;return(0,a.iv)("display:flex;width:100%;align-items:center;justify-content:space-between;position:relative;background:var(--cui-bg-normal);&:not(:last-child){border-bottom:",t.borderWidth.kilo," solid var(--cui-border-divider);}",t.mq.untilKilo,"{align-items:flex-start;flex-direction:column-reverse;}")},e=>{let{theme:t,padding:r}=e;return(0,a.iv)("padding:",t.spacings[r],";")},e=>{let{isInteractive:t}=e;return t&&(0,a.iv)("transition:all 0.1s ease-in-out;&:hover,&:focus{cursor:pointer;background:var(--cui-bg-accent-hovered);}&:active{background:var(--cui-bg-accent-pressed);}")});o.propTypes={padding:l().oneOf(["kilo","mega","giga"]),isInteractive:l().bool},o.defaultProps={isInteractive:!0,padding:"giga"},o.displayName="List.Item";var c={Wrapper:s,Item:o}},88766:function(e,t,r){r.d(t,{HT:function(){return n},HW:function(){return a},xW:function(){return i}});let n={span:{default:12,kilo:10,mega:8},skip:{default:0,kilo:1,mega:2}},a={span:{default:12},skip:{default:0}},i={span:{default:12},skip:{default:0}}},73184:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(52322),a=r(2784),i=r(66166);let s={base:"cui-card-3imn",mega:"cui-card-mega-qnaj",giga:"cui-card-giga-jphr"},d=(0,a.forwardRef)(({className:e,spacing:t="giga",as:r="div",...a},d)=>(0,n.jsx)(r,{...a,ref:d,className:(0,i.W)("cui-card-3imn",s[t],e)}));d.displayName="Card"}}]);