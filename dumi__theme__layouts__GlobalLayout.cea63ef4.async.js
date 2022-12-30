"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1032],{69980:function(M,l,e){e.d(l,{Z:function(){return u}});var n=e(1413),o=e(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M766.4 744.3c43.7 0 79.4-36.2 79.4-80.5 0-53.5-79.4-140.8-79.4-140.8S687 610.3 687 663.8c0 44.3 35.7 80.5 79.4 80.5zm-377.1-44.1c7.1 7.1 18.6 7.1 25.6 0l256.1-256c7.1-7.1 7.1-18.6 0-25.6l-256-256c-.6-.6-1.3-1.2-2-1.7l-78.2-78.2a9.11 9.11 0 00-12.8 0l-48 48a9.11 9.11 0 000 12.8l67.2 67.2-207.8 207.9c-7.1 7.1-7.1 18.6 0 25.6l255.9 256zm12.9-448.6l178.9 178.9H223.4l178.8-178.9zM904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8z"}}]},name:"bg-colors",theme:"outlined"},d=a,i=e(13401),r=function(O,v){return o.createElement(i.Z,(0,n.Z)((0,n.Z)({},O),{},{ref:v,icon:d}))};r.displayName="BgColorsOutlined";var u=o.forwardRef(r)},2559:function(M,l,e){e.d(l,{Z:function(){return o}});var n=e(28257);function o(a){var d=(0,n.bU)(),i=d.id,r=i==="zh-CN"?"cn":"en";return[a==null?void 0:a[r],r]}},38746:function(M,l,e){e.d(l,{Z:function(){return I}});var n=e(97857),o=e.n(n),a=e(52677),d=e.n(a),i=e(5574),r=e.n(i),u=e(28257),Z=e(67294),O=e(2559);function v(f){return f.replace("-cn","").replace(/\/$/,"")}function I(){var f=(0,u.TH)(),p=f.search,k=(0,O.Z)(),S=r()(k,2),B=S[1],T=Z.useCallback(function(x,t){var m=v(x);if(B==="cn"&&(m="".concat(m,"-cn")),p&&(m="".concat(m).concat(p)),t){var D;d()(t)==="object"?D=t[B]:D=t,m="".concat(m,"#").concat(D)}return m},[B,p]);return o()(o()({},f),{},{pathname:v(f.pathname),getLink:T})}},80259:function(M,l,e){e.r(l),e.d(l,{default:function(){return n3}});var n=e(97857),o=e.n(n),a=e(5574),d=e.n(a),i=e(67294),r=e(28257),u=e(13669),Z=e(11046),O=e(19632),v=e.n(O),I=e(68839),f=e(22366),p=e(69980),k=e(52180),S=e(73638),B=e(67333),T=e.n(B),x=e(16165),t=e(96923),m=function(s){var C=i.useCallback(function(){return(0,t.tZ)("svg",T()({width:20,height:20,viewBox:"0 0 24 24",fill:"currentColor"},s),(0,t.tZ)("g",{fillRule:"evenodd"},(0,t.tZ)("g",{fillRule:"nonzero"},(0,t.tZ)("path",{d:"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"}))))},[s]);return(0,t.tZ)(x.Z,T()({component:C},s))},D=m,X=function(s){var C=s.value,c=C===void 0?["light"]:C,_=s.onChange,b=(0,k.Z)(),g=b.token,y=(0,r.TH)(),W=y.pathname,j=y.search;return(0,t.tZ)(u.FloatButton.Group,{trigger:"click",icon:(0,t.tZ)(D,null)},(0,t.tZ)(r.rU,{to:(0,S.J1)("/theme-editor",(0,S.KE)(W),j),style:{display:"block",marginBottom:g.margin}},(0,t.tZ)(u.FloatButton,{icon:(0,t.tZ)(p.Z,null),tooltip:(0,t.tZ)(r._H,{id:"app.footer.theme"})})),(0,t.tZ)(u.FloatButton,{icon:(0,t.tZ)(I.Z,null),type:c.includes("dark")?"primary":"default",onClick:function(){c.includes("dark")?_(c.filter(function(h){return h!=="dark"})):_([].concat(v()(c),["dark"]))},tooltip:(0,t.tZ)(r._H,{id:"app.theme.switch.dark"})}),(0,t.tZ)(u.FloatButton,{icon:(0,t.tZ)(f.Z,null),type:c.includes("compact")?"primary":"default",onClick:function(){c.includes("compact")?_(c.filter(function(h){return h!=="compact"})):_([].concat(v()(c),["compact"]))},tooltip:(0,t.tZ)(r._H,{id:"app.theme.switch.compact"})}))},J=X,Q=e(38746),Y=e(38199),q=768,K=(0,Z.Df)();typeof e.g!="undefined"&&(e.g.styleCache=K);var e3=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return s.map(function(C){return C==="dark"?u.theme.darkAlgorithm:C==="compact"?u.theme.compactAlgorithm:u.theme.defaultAlgorithm})},t3=function(){var s=(0,r.pC)(),C=(0,Q.Z)(),c=C.pathname,_=(0,r.lr)(),b=d()(_,2),g=b[0],y=b[1],W=i.useState({isMobile:!1,direction:"ltr",theme:["light"]}),j=d()(W,2),P=j[0],h=P.theme,F=P.direction,H=P.isMobile,N=j[1],R=(0,i.useCallback)(function(E){N(function(U){return o()(o()({},U),E)});var A=g.toString(),L=g;Object.entries(E).forEach(function(U){var $=d()(U,2),G=$[0],V=$[1];G==="direction"&&(V==="rtl"?L.set("direction","rtl"):L.delete("direction")),G==="theme"&&(L=(0,r.fW)(o()(o()({},L),{},{theme:V.filter(function(o3){return o3!=="light"})})))}),L.toString()!==A&&y(L)},[g,y]),w=function(){R({isMobile:window.innerWidth<q})};(0,i.useEffect)(function(){var E=g.getAll("theme"),A=g.get("direction");return(0,i.startTransition)(function(){N({theme:E,direction:A==="rtl"?"rtl":"ltr"}),w()}),window.addEventListener("resize",w),function(){window.removeEventListener("resize",w)}},[]);var a3=(0,i.useMemo)(function(){return{direction:F,updateSiteConfig:R,theme:h,isMobile:H}},[H,F,R,h]);return(0,t.tZ)(Z.V9,{cache:K},(0,t.tZ)(Y.Z.Provider,{value:a3},(0,t.tZ)(u.ConfigProvider,{theme:{algorithm:e3(h)}},s,!c.startsWith("/~demos")&&(0,t.tZ)(J,{value:h,onChange:function(A){return R({theme:A})}}))))},n3=t3},22366:function(M,l,e){var n=e(67294);function o(a){return n.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 17 16",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a,{style:Object.assign({verticalAlign:"-0.125em"},a.style),className:["nanqu-token-panel-icon",a.className].filter(Boolean).join(" ")}),n.createElement("g",{id:"Compact-\u9875\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.createElement("g",{id:"Compact-\u9ED8\u8BA4",transform:"translate(-9.000000, -82.500000)",fill:"currentColor",fillRule:"nonzero"},n.createElement("g",{id:"Compact-\u9009\u9879\u4E00",transform:"translate(9.268811, 79.500000)"},n.createElement("g",{id:"Compact-smaller",transform:"translate(0.000000, 3.000000)"},n.createElement("rect",{id:"Compact-\u77E9\u5F62",opacity:0,x:0,y:0,width:16,height:16}),n.createElement("path",{d:"M10,14 L10,12 C10,10.8666667 10.8666667,10 12,10 L14,10 C14.4,10 14.6666667,10.2666667 14.6666667,10.6666667 C14.6666667,11.0666667 14.4,11.3333333 14,11.3333333 L12,11.3333333 C11.6,11.3333333 11.3333333,11.6 11.3333333,12 L11.3333333,14 C11.3333333,14.4 11.0666667,14.6666667 10.6666667,14.6666667 C10.2666667,14.6666667 10,14.4 10,14 L10,14 Z M4.66666667,14 L4.66666667,12 C4.66666667,11.6 4.4,11.3333333 4,11.3333333 L2,11.3333333 C1.6,11.3333333 1.33333333,11.0666667 1.33333333,10.6666667 C1.33333333,10.2666667 1.6,10 2,10 L4,10 C5.13333333,10 6,10.8666667 6,12 L6,14 C6,14.4 5.73333333,14.6666667 5.33333333,14.6666667 C4.93333333,14.6666667 4.66666666,14.4 4.66666667,14 L4.66666667,14 Z M12,6 C10.8666667,6 10,5.13333333 10,4 L10,2 C10,1.6 10.2666667,1.33333333 10.6666667,1.33333333 C11.0666667,1.33333333 11.3333333,1.6 11.3333333,2 L11.3333333,4 C11.3333333,4.4 11.6,4.66666667 12,4.66666667 L14,4.66666667 C14.4,4.66666667 14.6666667,4.93333334 14.6666667,5.33333333 C14.6666667,5.73333331 14.4,6 14,6 L12,6 L12,6 Z M2,6 C1.6,6 1.33333333,5.73333333 1.33333333,5.33333333 C1.33333333,4.93333333 1.6,4.66666666 2,4.66666667 L4,4.66666667 C4.4,4.66666667 4.66666667,4.4 4.66666667,4 L4.66666667,2 C4.66666667,1.6 4.93333334,1.33333333 5.33333333,1.33333333 C5.73333331,1.33333333 6,1.6 6,2 L6,4 C6,5.13333333 5.13333333,6 4,6 L2,6 Z",id:"Compact-\u5F62\u72B6"}))))))}l.Z=o},68839:function(M,l,e){var n=e(67294);function o(a){return n.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a,{style:Object.assign({verticalAlign:"-0.125em"},a.style),className:["nanqu-token-panel-icon",a.className].filter(Boolean).join(" ")}),n.createElement("g",{id:"Dark-\u9875\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.createElement("g",{id:"Dark-\u9ED8\u8BA4",transform:"translate(-9.000000, -49.500000)",fill:"currentColor",fillRule:"nonzero"},n.createElement("g",{id:"Dark-\u7F16\u7EC4-17",transform:"translate(0.000000, 42.500000)"},n.createElement("g",{id:"Dark-moon",transform:"translate(9.268811, 7.500000)"},n.createElement("rect",{id:"Dark-\u77E9\u5F62",opacity:0,x:0,y:0,width:16,height:16}),n.createElement("path",{d:"M8,1.33333333 C8.14933333,1.33333333 8.29688889,1.33844444 8.44266667,1.34866666 C8.14755556,1.98422221 8,2.64577777 8,3.33333333 C8,3.96533333 8.12333333,4.56955555 8.37,5.146 C8.61666667,5.72244445 8.94822222,6.21888889 9.36466667,6.63533333 C9.78111112,7.05177777 10.2775556,7.38333332 10.854,7.63 C11.4304444,7.87666668 12.0346667,8.00000001 12.6666667,8 C13.3542222,8 14.0157778,7.85244444 14.6513333,7.55733333 C14.6615556,7.70311111 14.6666667,7.85066667 14.6666667,8 C14.6666667,8.604 14.5868889,9.19422222 14.4273333,9.77066667 C14.2677778,10.3471111 14.0446667,10.8793333 13.758,11.3673333 C13.4713333,11.8553333 13.1233333,12.3042222 12.714,12.714 C12.3046667,13.1237778 11.8557778,13.4717778 11.3673333,13.758 C10.8788889,14.0442222 10.3466667,14.2673333 9.77066667,14.4273333 C9.19466667,14.5873333 8.60444445,14.6671111 8,14.6666685 C7.39555555,14.6662222 6.80533333,14.5864444 6.22933333,14.4273333 C5.65333333,14.2682222 5.1211111,14.0451111 4.63266666,13.758 C4.14422221,13.4708889 3.69533332,13.1228889 3.28599998,12.714 C2.87666665,12.3051111 2.52866665,11.8562222 2.24199998,11.3673333 C1.95533332,10.8784444 1.73222221,10.3462222 1.57266666,9.77066667 C1.4131111,9.19511112 1.33333333,8.6048889 1.33333333,8 C1.33333333,7.3951111 1.4131111,6.80488888 1.57266666,6.22933333 C1.73222221,5.65377778 1.95533332,5.12155555 2.24199998,4.63266666 C2.52866665,4.14377776 2.87666665,3.69488887 3.28599998,3.28599998 C3.69533332,2.8771111 4.14422221,2.5291111 4.63266666,2.24199998 C5.1211111,1.95488887 5.65333333,1.73177776 6.22933333,1.57266666 C6.80533333,1.41355555 7.39555555,1.33377778 8,1.33333333 Z M6.68733333,2.828 C6.11444444,2.97377778 5.58066667,3.20977778 5.086,3.536 C4.59133333,3.86222222 4.166,4.24933333 3.81,4.69733333 C3.454,5.14533333 3.17444444,5.65488889 2.97133333,6.226 C2.76822221,6.79711111 2.66666666,7.38822222 2.66666666,7.99933333 C2.66666666,8.72155555 2.80733332,9.41155555 3.08866666,10.0693333 C3.36999999,10.7271111 3.74933332,11.2948889 4.22666666,11.7726667 C4.70399999,12.2504444 5.27177777,12.6297778 5.92999998,12.9106667 C6.5882222,13.1915556 7.2782222,13.3322222 7.99999998,13.3326667 C8.6111111,13.3326667 9.20222221,13.2311111 9.77333331,13.028 C10.3444444,12.8248889 10.854,12.5453333 11.302,12.1893333 C11.75,11.8333333 12.1371111,11.408 12.4633333,10.9133333 C12.7895555,10.4186666 13.0255555,9.88488887 13.1713333,9.31199998 C13.022,9.32577777 12.8535555,9.33266666 12.666,9.33266666 C11.8535555,9.33266666 11.0775555,9.17377777 10.338,8.85599998 C9.59844443,8.5382222 8.96044443,8.11111109 8.42399998,7.57466666 C7.88755554,7.03822222 7.46044443,6.40022222 7.14266666,5.66066666 C6.82488889,4.92111109 6.66599999,4.14511109 6.66599998,3.33266666 C6.66599998,3.1451111 6.67288888,2.97666666 6.68666666,2.82733333 L6.68733333,2.828 Z",id:"Dark-\u5F62\u72B6"}))))))}l.Z=o}}]);
