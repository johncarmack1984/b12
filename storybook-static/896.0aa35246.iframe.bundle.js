"use strict";(self.webpackChunk_vegify_b12=self.webpackChunk_vegify_b12||[]).push([[896],{"./node_modules/.pnpm/@storybook+components@7.0.0-beta.31_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/components/dist/WithTooltip-6RTI5BE5.mjs":(e,t,o)=>{o.r(t),o.d(t,{WithToolTipState:()=>Z,WithTooltip:()=>Z,WithTooltipPure:()=>I});var r=o("./node_modules/.pnpm/@storybook+components@7.0.0-beta.31_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/components/dist/chunk-BVZGY62N.mjs"),n=o("./node_modules/.pnpm/@storybook+components@7.0.0-beta.31_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/components/dist/chunk-FD4M6EBV.mjs"),i=o("./node_modules/.pnpm/@storybook+components@7.0.0-beta.31_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/components/dist/chunk-NNAAFZ4U.mjs"),s=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=o("./node_modules/.pnpm/@storybook+theming@7.0.0-beta.31_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/theming/dist/index.mjs"),l=o("./node_modules/.pnpm/@storybook+global@5.0.0/node_modules/@storybook/global/dist/index.mjs"),u=o("./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),d=o("./node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific/memoizerific.js"),c=o.n(d),p=o("./node_modules/.pnpm/@storybook+theming@7.0.0-beta.31_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/theming/dist/chunk-IWWAIZM3.mjs"),f=(0,i.E)({"../../node_modules/react-fast-compare/index.js"(e,t){var o="u">typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;t.exports=function(e,t){try{return function e(t,s){if(t===s)return!0;if(t&&s&&"object"==typeof t&&"object"==typeof s){var a,l,u,d;if(t.constructor!==s.constructor)return!1;if(Array.isArray(t)){if((a=t.length)!=s.length)return!1;for(l=a;0!=l--;)if(!e(t[l],s[l]))return!1;return!0}if(r&&t instanceof Map&&s instanceof Map){if(t.size!==s.size)return!1;for(d=t.entries();!(l=d.next()).done;)if(!s.has(l.value[0]))return!1;for(d=t.entries();!(l=d.next()).done;)if(!e(l.value[1],s.get(l.value[0])))return!1;return!0}if(n&&t instanceof Set&&s instanceof Set){if(t.size!==s.size)return!1;for(d=t.entries();!(l=d.next()).done;)if(!s.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(s)){if((a=t.length)!=s.length)return!1;for(l=a;0!=l--;)if(t[l]!==s[l])return!1;return!0}if(t.constructor===RegExp)return t.source===s.source&&t.flags===s.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===s.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===s.toString();if((a=(u=Object.keys(t)).length)!==Object.keys(s).length)return!1;for(l=a;0!=l--;)if(!Object.prototype.hasOwnProperty.call(s,u[l]))return!1;if(o&&t instanceof Element)return!1;for(l=a;0!=l--;)if(!(("_owner"===u[l]||"__v"===u[l]||"__o"===u[l])&&t.$$typeof)&&!e(t[u[l]],s[u[l]]))return!1;return!0}return t!=t&&s!=s}(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}}}),h=(0,i.E)({"../../node_modules/warning/warning.js"(e,t){t.exports=function(){}}}),m=s.createContext(),g=s.createContext();function v(e){var t=e.children,o=s.useState(null),r=o[0],n=o[1],i=s.useRef(!1);s.useEffect(function(){return function(){i.current=!0}},[]);var a=s.useCallback(function(e){i.current||n(e)},[]);return s.createElement(m.Provider,{value:r},s.createElement(g.Provider,{value:a},t))}var y=function(e){return Array.isArray(e)?e[0]:e},b=function(e){if("function"==typeof e){for(var t=arguments.length,o=Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];return e.apply(void 0,o)}},k=function(e,t){if("function"==typeof e)return b(e,t);null!=e&&(e.current=t)},w=function(e){return e.reduce(function(e,t){var o=t[0],r=t[1];return e[o]=r,e},{})},T="u">typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect,C=(0,i.v)(f()),O=[],R=function(e,t,o){void 0===o&&(o={});var n=s.useRef(null),i={onFirstUpdate:o.onFirstUpdate,placement:o.placement||"bottom",strategy:o.strategy||"absolute",modifiers:o.modifiers||O},a=s.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),l=a[0],d=a[1],c=s.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,o=Object.keys(t.elements);u.flushSync(function(){d({styles:w(o.map(function(e){return[e,t.styles[e]||{}]})),attributes:w(o.map(function(e){return[e,t.attributes[e]]}))})})},requires:["computeStyles"]}},[]),p=s.useMemo(function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[c,{name:"applyStyles",enabled:!1}])};return(0,C.default)(n.current,e)?n.current||e:(n.current=e,e)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,c]),f=s.useRef();return T(function(){f.current&&f.current.setOptions(p)},[p]),T(function(){if(!(null==e||null==t)){var n=(o.createPopper||r.fi)(e,t,p);return f.current=n,function(){n.destroy(),f.current=null}}},[e,t,o.createPopper]),{state:f.current?f.current.state:null,styles:l.styles,attributes:l.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}},E=function(){},x=function(){return Promise.resolve(null)},S=[];function P(e){var t=e.placement,o=void 0===t?"bottom":t,r=e.strategy,n=void 0===r?"absolute":r,i=e.modifiers,a=void 0===i?S:i,l=e.referenceElement,u=e.onFirstUpdate,d=e.innerRef,c=e.children,p=s.useContext(m),f=s.useState(null),h=f[0],g=f[1],v=s.useState(null),b=v[0],w=v[1];s.useEffect(function(){k(d,h)},[d,h]);var T=R(l||p,h,s.useMemo(function(){return{placement:o,strategy:n,onFirstUpdate:u,modifiers:[].concat(a,[{name:"arrow",enabled:null!=b,options:{element:b}}])}},[o,n,u,a,b])),C=T.state,O=T.styles,P=T.forceUpdate,_=T.update,H=s.useMemo(function(){return{ref:g,style:O.popper,placement:C?C.placement:o,hasPopperEscaped:C&&C.modifiersData.hide?C.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:C&&C.modifiersData.hide?C.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:O.arrow,ref:w},forceUpdate:P||E,update:_||x}},[g,w,o,C,O,_,P]);return y(c)(H)}var _=(0,i.v)(h());function H(e){var t=e.children,o=e.innerRef,r=s.useContext(g),n=s.useCallback(function(e){k(o,e),b(r,e)},[o,r]);return s.useEffect(function(){return function(){return k(o,null)}},[]),s.useEffect(function(){(0,_.default)(Boolean(r),"`Reference` should not be used outside of a `Manager` component.")},[r]),y(t)({ref:n})}var j=s.createContext({}),B=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return function(){for(var e=arguments.length,o=Array(e),r=0;r<e;r++)o[r]=arguments[r];return t.forEach(function(e){return e&&e.apply(void 0,o)})}},M=function(){},A=function(){return!!("u">typeof window&&window.document&&window.document.createElement)},W=function(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)},L=function(e){function t(){for(var t,o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).observer=void 0,t.tooltipRef=void 0,t.handleOutsideClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var o=t.context.parentOutsideClickHandler,r=t.props,n=r.hideTooltip;(0,r.clearScheduled)(),n(),o&&o(e)}},t.handleOutsideRightClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var o=t.context.parentOutsideRightClickHandler,r=t.props,n=r.hideTooltip;(0,r.clearScheduled)(),n(),o&&o(e)}},t.addOutsideClickHandler=function(){document.body.addEventListener("touchend",t.handleOutsideClick),document.body.addEventListener("click",t.handleOutsideClick)},t.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",t.handleOutsideClick),document.body.removeEventListener("click",t.handleOutsideClick)},t.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",t.handleOutsideRightClick)},t.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",t.handleOutsideRightClick)},t.getTooltipRef=function(e){t.tooltipRef=e,W(t.props.innerRef,e)},t.getArrowProps=function(e){return void 0===e&&(e={}),(0,n.j)({},e,{style:(0,n.j)({},e.style,t.props.arrowProps.style)})},t.getTooltipProps=function(e){return void 0===e&&(e={}),(0,n.j)({},e,t.isTriggeredBy("hover")&&{onMouseEnter:B(t.props.clearScheduled,e.onMouseEnter),onMouseLeave:B(t.props.hideTooltip,e.onMouseLeave)},{style:(0,n.j)({},e.style,t.props.style)})},t.contextValue={isParentNoneTriggered:"none"===t.props.trigger,addParentOutsideClickHandler:t.addOutsideClickHandler,addParentOutsideRightClickHandler:t.addOutsideRightClickHandler,parentOutsideClickHandler:t.handleOutsideClick,parentOutsideRightClickHandler:t.handleOutsideRightClick,removeParentOutsideClickHandler:t.removeOutsideClickHandler,removeParentOutsideRightClickHandler:t.removeOutsideRightClickHandler},t}(0,r.PW)(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=this;if((this.observer=new MutationObserver(function(){e.props.update()})).observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var t=this.context,o=t.removeParentOutsideClickHandler,r=t.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),o&&o(),r&&r()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var e=this.context,t=e.isParentNoneTriggered,o=e.addParentOutsideClickHandler,r=e.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!t&&o&&o(),!t&&r&&r()}},o.render=function(){var e=this.props,t=e.arrowProps,o=e.placement,r=e.tooltip;return s.createElement(j.Provider,{value:this.contextValue},r({arrowRef:t.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:o,tooltipRef:this.getTooltipRef}))},o.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(s.Component);L.contextType=j;var U={childList:!0,subtree:!0},$=function(e){function t(){for(var t,o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={tooltipShown:t.props.defaultTooltipShown},t.hideTimeout=void 0,t.showTimeout=void 0,t.popperOffset=void 0,t.setTooltipState=function(e){var o=function(){return t.props.onVisibilityChange(e.tooltipShown)};t.isControlled()?o():t.setState(e,o)},t.clearScheduled=function(){clearTimeout(t.hideTimeout),clearTimeout(t.showTimeout)},t.showTooltip=function(e){var o=e.pageX,r=e.pageY;t.clearScheduled();var i={tooltipShown:!0};t.props.followCursor&&(i=(0,n.j)({},i,{pageX:o,pageY:r})),t.showTimeout=window.setTimeout(function(){return t.setTooltipState(i)},t.props.delayShow)},t.hideTooltip=function(){t.clearScheduled(),t.hideTimeout=window.setTimeout(function(){return t.setTooltipState({tooltipShown:!1})},t.props.delayHide)},t.toggleTooltip=function(e){var o=e.pageX,r=e.pageY,n=t.getState()?"hideTooltip":"showTooltip";t[n]({pageX:o,pageY:r})},t.clickToggle=function(e){e.preventDefault();var o=e.pageX,r=e.pageY,n=t.props.followCursor?"showTooltip":"toggleTooltip";t[n]({pageX:o,pageY:r})},t.contextMenuToggle=function(e){e.preventDefault();var o=e.pageX,r=e.pageY,n=t.props.followCursor?"showTooltip":"toggleTooltip";t[n]({pageX:o,pageY:r})},t.getTriggerProps=function(e){return void 0===e&&(e={}),(0,n.j)({},e,t.isTriggeredBy("click")&&{onClick:B(t.clickToggle,e.onClick),onTouchEnd:B(t.clickToggle,e.onTouchEnd)},t.isTriggeredBy("right-click")&&{onContextMenu:B(t.contextMenuToggle,e.onContextMenu)},t.isTriggeredBy("hover")&&(0,n.j)({onMouseEnter:B(t.showTooltip,e.onMouseEnter),onMouseLeave:B(t.hideTooltip,e.onMouseLeave)},t.props.followCursor&&{onMouseMove:B(t.showTooltip,e.onMouseMove)}),t.isTriggeredBy("focus")&&{onFocus:B(t.showTooltip,e.onFocus),onBlur:B(t.hideTooltip,e.onBlur)})},t}(0,r.PW)(t,e);var o=t.prototype;return o.componentWillUnmount=function(){this.clearScheduled()},o.render=function(){var e=this,t=this.props,o=t.children,r=t.tooltip,i=t.placement,a=t.trigger,l=t.getTriggerRef,d=t.modifiers,c=t.closeOnReferenceHidden,p=t.usePortal,f=t.portalContainer,h=t.followCursor,m=t.getTooltipRef,g=t.mutationObserverOptions,y=(0,n.B)(t,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),b=s.createElement(P,(0,n.j)({innerRef:m,placement:i,modifiers:[{name:"followCursor",enabled:h,phase:"main",fn:function(t){e.popperOffset=t.state.rects.popper}}].concat(d)},y),function(t){var o=t.ref,i=t.style,l=t.placement,u=t.arrowProps,d=t.isReferenceHidden,p=t.update;if(h&&e.popperOffset){var f=e.state,m=f.pageX,v=f.pageY,y=e.popperOffset,b=y.width,k=y.height,w=m+b>window.pageXOffset+document.body.offsetWidth?m-b:m,T=v+k>window.pageYOffset+document.body.offsetHeight?v-k:v;i.transform="translate3d("+w+"px, "+T+"px, 0"}return s.createElement(L,(0,n.j)({arrowProps:u,closeOnReferenceHidden:c,isReferenceHidden:d,placement:l,update:p,style:i,tooltip:r,trigger:a,mutationObserverOptions:g},{clearScheduled:e.clearScheduled,hideTooltip:e.hideTooltip,innerRef:o}))});return s.createElement(v,null,s.createElement(H,{innerRef:l},function(t){var r=t.ref;return o({getTriggerProps:e.getTriggerProps,triggerRef:r})}),this.getState()&&(p?(0,u.createPortal)(b,f):b))},o.isControlled=function(){return void 0!==this.props.tooltipShown},o.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},o.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(s.Component);$.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:M,placement:"right",portalContainer:A()?document.body:null,trigger:"hover",usePortal:A(),mutationObserverOptions:U,modifiers:[]};var z=$,F=c()(1e3)((e,t,o,r=0)=>t.split("-")[0]===e?o:r),V=8,D=a.styled.div({position:"absolute",borderStyle:"solid"},({placement:e})=>{let t=0,o=0;switch(!0){case e.startsWith("left")||e.startsWith("right"):o=8;break;case e.startsWith("top")||e.startsWith("bottom"):t=8}return{transform:`translate3d(${t}px, ${o}px, 0px)`}},({theme:e,color:t,placement:o})=>({bottom:`${F("top",o,-1*V,"auto")}px`,top:`${F("bottom",o,-1*V,"auto")}px`,right:`${F("left",o,-1*V,"auto")}px`,left:`${F("right",o,-1*V,"auto")}px`,borderBottomWidth:`${F("top",o,"0",V)}px`,borderTopWidth:`${F("bottom",o,"0",V)}px`,borderRightWidth:`${F("left",o,"0",V)}px`,borderLeftWidth:`${F("right",o,"0",V)}px`,borderTopColor:F("top",o,e.color[t]||t||"light"===e.base?(0,p.tG)(e.background.app):e.background.app,"transparent"),borderBottomColor:F("bottom",o,e.color[t]||t||"light"===e.base?(0,p.tG)(e.background.app):e.background.app,"transparent"),borderLeftColor:F("left",o,e.color[t]||t||"light"===e.base?(0,p.tG)(e.background.app):e.background.app,"transparent"),borderRightColor:F("right",o,e.color[t]||t||"light"===e.base?(0,p.tG)(e.background.app):e.background.app,"transparent")})),q=a.styled.div(({hidden:e})=>({display:e?"none":"inline-block",zIndex:2147483647}),({theme:e,color:t,hasChrome:o})=>o?{background:e.color[t]||t||"light"===e.base?(0,p.tG)(e.background.app):e.background.app,filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:2*e.appBorderRadius,fontSize:e.typography.size.s1}:{}),Y=({placement:e,hasChrome:t,children:o,arrowProps:r,tooltipRef:n,arrowRef:i,color:a,...l})=>s.createElement(q,{hasChrome:t,placement:e,ref:n,...l,color:a},t&&s.createElement(D,{placement:e,ref:i,...r,color:a}),o);Y.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var{document:G}=l.global,N=a.styled.div`
  display: inline-block;
  cursor: ${e=>"hover"===e.mode?"default":"pointer"};
`,X=a.styled.g`
  cursor: ${e=>"hover"===e.mode?"default":"pointer"};
`,I=({svg:e,trigger:t,closeOnClick:o,placement:r,modifiers:n,hasChrome:i,tooltip:a,children:l,tooltipShown:u,onVisibilityChange:d,...c})=>{let p=e?X:N;return s.createElement(z,{placement:r,trigger:t,modifiers:n,tooltipShown:u,onVisibilityChange:d,tooltip:({getTooltipProps:e,getArrowProps:t,tooltipRef:o,arrowRef:r,placement:n})=>s.createElement(Y,{hasChrome:i,placement:n,tooltipRef:o,arrowRef:r,arrowProps:t(),...e()},"function"==typeof a?a({onHide:()=>d(!1)}):a)},({getTriggerProps:e,triggerRef:t})=>s.createElement(p,{ref:t,...e(),...c},l))};I.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var Z=({startOpen:e=!1,onVisibilityChange:t,...o})=>{let[r,n]=(0,s.useState)(e),i=(0,s.useCallback)(e=>{t&&!1===t(e)||n(e)},[t]);return(0,s.useEffect)(()=>{let e=()=>i(!1);G.addEventListener("keydown",e,!1);let t=Array.from(G.getElementsByTagName("iframe")),o=[];return t.forEach(t=>{let r=()=>{try{t.contentWindow.document&&(t.contentWindow.document.addEventListener("click",e),o.push(()=>{try{t.contentWindow.document.removeEventListener("click",e)}catch{}}))}catch{}};r(),t.addEventListener("load",r),o.push(()=>{t.removeEventListener("load",r)})}),()=>{G.removeEventListener("keydown",e),o.forEach(e=>{e()})}}),s.createElement(I,{...o,tooltipShown:r,onVisibilityChange:i})}}}]);