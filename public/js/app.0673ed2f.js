(function(e){function t(t){for(var r,a,c=t[0],u=t[1],i=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},s={app:0},o=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-5dd4fa4c":"e3dea804","chunk-6ace5f1e":"ae495ed9","chunk-1de6e68c":"a8da0ebb","chunk-7dd3c8a6":"a488eae4","chunk-ef9d9290":"30f93d11","chunk-7de3a9f0":"61c54c56"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-5dd4fa4c":1,"chunk-6ace5f1e":1,"chunk-1de6e68c":1,"chunk-7de3a9f0":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-5dd4fa4c":"b286d248","chunk-6ace5f1e":"a3adb0ea","chunk-1de6e68c":"8441ee95","chunk-7dd3c8a6":"31d6cfe0","chunk-ef9d9290":"31d6cfe0","chunk-7de3a9f0":"d56f4621"}[e]+".css",s=u.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var i=o[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===s))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],l=i.getAttribute("data-href");if(l===r||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}s[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3969:function(e,t,n){},"3c53":function(e,t,n){},4657:function(e,t,n){"use strict";n("3c53")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"app"},[n("v-container",{staticClass:"main-container",class:{main:e.isLoggedIn},attrs:{fluid:""}},[n("div",{staticClass:"sidebar"},[e.isLoggedIn?n("Sidebar",{staticClass:"sidebar",attrs:{loggedUser:e.loggedUser}}):e._e()],1),e.error?n("Error",{attrs:{error:e.error}}):e._e(),n("router-view",{staticClass:"content"}),"/chat"==e.$router.currentRoute.path?n("ContactList",{staticClass:"contactList",attrs:{contacts:e.contacts}}):e._e()],1)],1)},s=[],o=n("5530"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{height:"400",width:"256"}},[n("v-navigation-drawer",{attrs:{permanent:""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[e._v(" "+e._s(e.loggedUser.name)+" ")]),n("v-list-item-subtitle",[e._v(" @"+e._s(e.loggedUser.username)+" ")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return n("v-list-item",{key:t.title,attrs:{link:"",to:t.action}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},[n("v-list-item",{on:{click:e.logout}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s("mdi-logout"))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Logout")])],1)],1)],1)],1)],1)},u=[],i=n("2f62"),l={props:["loggedUser"],data:function(){return{items:[{title:"Home",icon:"mdi-home",action:"/home"},{title:"Chat",icon:"mdi-chat",action:"/chat"},{title:"Profile",icon:"mdi-account",action:"/profile"}]}},methods:Object(o["a"])({},Object(i["b"])(["logout","getUserProfile"])),computed:{},mounted:function(){this.getUserProfile()}},d=l,f=(n("4657"),n("2877")),m=n("6544"),g=n.n(m),p=n("b0af"),h=n("ce7e"),v=n("132d"),b=n("8860"),k=n("da13"),w=n("5d23"),C=n("34c3"),_=n("f774"),S=Object(f["a"])(d,c,u,!1,null,"051a08b6",null),x=S.exports;g()(S,{VCard:p["a"],VDivider:h["a"],VIcon:v["a"],VList:b["a"],VListItem:k["a"],VListItemContent:w["a"],VListItemIcon:C["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VNavigationDrawer:_["a"]});var O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-alert",{staticClass:"ma-5 col-6 mx-auto",attrs:{type:"error",dense:"",dismissible:""}},[e._v(e._s(e.error))])},j=[],y={name:"Error",props:["error"]},R=y,I=n("0798"),L=Object(f["a"])(R,O,j,!1,null,null,null),P=L.exports;g()(L,{VAlert:I["a"]});var U=n("9800"),V={name:"App",components:{Sidebar:x,Error:P,ContactList:U["a"]},data:function(){return{}},methods:{},computed:Object(o["a"])(Object(o["a"])({},Object(i["c"])(["error","isLoggedIn","loggedUser","contacts","socket"])),Object(i["b"])(["getContacts"])),mounted:function(){this.getContacts},created:function(){var e=this;this.socket.emit("online",localStorage.getItem("userId")),window.addEventListener("beforeunload",(function(){e.socket.emit("offline",localStorage.getItem("userId"))}))}},q=V,E=(n("5c0b"),n("7496")),A=n("a523"),T=Object(f["a"])(q,a,s,!1,null,null,null),$=T.exports;g()(T,{VApp:E["a"],VContainer:A["a"]});n("d3b7"),n("3ca3"),n("ddb0");var M=n("8c4f"),N=n("1da1"),G=(n("96cf"),n("bc3a")),B=n.n(G),D="/users/",z={loggedUser:{},token:localStorage.getItem("token")||"",status:"",error:null},H={isLoggedIn:function(e){return!!e.token},loggedUser:function(e){return e.loggedUser},error:function(e){return e.error}},J={login:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function n(){var r,a,s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,r("loginRequest"),n.prev=2,n.next=5,B.a.post("".concat(D,"signin"),t);case 5:return a=n.sent,console.log("res.data"),a.data.success&&(s=a.data.token,o=a.data.user,localStorage.setItem("token",s),localStorage.setItem("userId",o._id),B.a.defaults.headers.common.Authorization=s,r("loginSuccess",{token:s,loggedUser:o})),n.abrupt("return",a);case 11:n.prev=11,n.t0=n["catch"](2),console.log(n.t0.response.data.message),r("loginError",n.t0.response.data.message);case 15:case"end":return n.stop()}}),n,null,[[2,11]])})))()},register:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,r("registerRequest"),n.prev=2,n.next=5,B.a.post("".concat(D,"signup"),t);case 5:return a=n.sent,a.data.success&&r("registerSuccess"),n.abrupt("return",a);case 10:n.prev=10,n.t0=n["catch"](2),r("registerError",n.t0.response.data.message);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})))()},logout:function(e){return Object(N["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,localStorage.removeItem("token");case 3:return t.next=5,localStorage.removeItem("userId");case 5:return n("logout"),delete B.a.defaults.headers.common.Authorization,_e.push("/"),t.abrupt("return");case 9:case"end":return t.stop()}}),t)})))()},getUserProfile:function(e){return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("getUserProfileRequest"),t.prev=2,t.next=5,B.a.get("".concat(D,"profile"));case 5:return r=t.sent,r.data.success&&n("getUserProfileSuccess",r.data.user),t.abrupt("return",r);case 10:t.prev=10,t.t0=t["catch"](2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()},editUserProfile:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,r("editUserProfileRequest"),n.prev=2,n.next=5,B.a.put("".concat(D,"profile"),t);case 5:return a=n.sent,console.log(a),a.data.success&&r("editUserProfileSuccess"),n.abrupt("return",a);case 11:n.prev=11,n.t0=n["catch"](2),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[2,11]])})))()}},F={loginRequest:function(e){e.error=null,e.status="loading"},loginSuccess:function(e,t){var n=t.token,r=t.loggedUser;e.status="success",e.token=n,e.loggedUser=r,e.error=null},loginError:function(e,t){e.error=t},registerRequest:function(e){e.error=null,e.status="loading"},registerSuccess:function(e){e.error=null,e.status="success"},registerError:function(e,t){e.error=t},logout:function(e){e.error=null,e.status="",e.loggedUser="",e.token=""},getUserProfileRequest:function(e){e.error=null,e.status="loading"},getUserProfileSuccess:function(e,t){e.status="success",e.loggedUser=t},editUserProfileRequest:function(e){e.error=null,e.status="loading"},editUserProfileSuccess:function(e){e.status="success"}},K={state:z,actions:J,getters:H,mutations:F},Q="/users",W={contacts:null},X={contacts:function(e){return e.contacts}},Y={getContacts:function(e){return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("contactsRequest"),t.prev=2,t.next=5,B.a.get("".concat(Q,"/contacts"));case 5:return r=t.sent,r.data.success&&n("contactsLoaded",r.data.value),t.abrupt("return",r);case 10:t.prev=10,t.t0=t["catch"](2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()},updateUser:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,r("updateProfileRequest"),n.prev=2,n.next=5,B.a.put("".concat(Q,"/profile"),t);case 5:return a=n.sent,a.data.success&&r("updateProfileSuccess"),n.abrupt("return",a);case 10:n.prev=10,n.t0=n["catch"](2),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})))()}},Z={contactsRequest:function(e){e.status="loading"},contactsLoaded:function(e,t){e.status="success",e.contacts=t},updateProfileRequest:function(e){e.status="loading"},updateProfileSuccess:function(e){e.status="success"}},ee={state:W,getters:X,actions:Y,mutations:Z},te=n("8e27"),ne=n.n(te),re="chats",ae={activeContact:null,messages:[],socket:ne.a.connect("")},se={messages:function(e){return e.messages},activeContact:function(e){return e.activeContact},socket:function(e){return e.socket}},oe={getMessages:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("messagesRequest"),t.prev=2,t.next=5,B.a.get(re);case 5:return r=t.sent,r.data.success&&n("messagesLoaded",r.data.value),t.abrupt("return",r);case 10:t.prev=10,t.t0=t["catch"](2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()},sendMessage:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,r("sendingMessage"),n.prev=2,n.next=5,B.a.post(re,t);case 5:return a=n.sent,a.data.status&&r("messageSent",a.data.value),n.abrupt("return",a);case 10:n.prev=10,n.t0=n["catch"](2),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})))()},setActiveContact:function(e,t){var n=e.commit;n("contactSelected",t)}},ce={messagesRequest:function(e){e.status="loading"},messagesLoaded:function(e,t){e.status="success",e.messages=t},sendingMessage:function(e){e.status="loading"},messageSent:function(e){e.status="success"},contactSelected:function(e,t){e.activeContact=t}},ue={state:ae,getters:se,actions:oe,mutations:ce};r["a"].use(i["a"]);var ie=new i["a"].Store({state:{},mutations:{},actions:{},modules:{Auth:K,User:ee,Chat:ue}}),le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"landing"},[n("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[n("div",{staticClass:"content mx-auto d-flex flex-column justify-center"},[n("h1",{staticClass:"mb-5 "},[e._v("Join Oti-chat today.")]),n("v-btn",{staticClass:"white--text mb-3",attrs:{color:"blue"},on:{click:function(t){return e.$router.push("/signup")}}},[e._v("Sign up")]),n("v-spacer"),n("v-btn",{staticClass:"blue--text",attrs:{color:"blue",outlined:""},on:{click:function(t){return e.$router.push("/signin")}}},[e._v("Sign in")])],1)])],1)},de=[],fe={name:"Landing",components:{},methods:function(){}},me=fe,ge=(n("bd7a"),n("8336")),pe=n("62ad"),he=n("0fd9"),ve=n("2fa4"),be=Object(f["a"])(me,le,de,!1,null,"51c57be2",null),ke=be.exports;g()(be,{VBtn:ge["a"],VCol:pe["a"],VRow:he["a"],VSpacer:ve["a"]}),r["a"].use(M["a"]);var we=[{path:"/",name:"Landing",component:ke,meta:{requiresGuest:!0}},{path:"/signin",name:"Signin",component:function(){return Promise.all([n.e("chunk-6ace5f1e"),n.e("chunk-ef9d9290")]).then(n.bind(null,"4a33"))},meta:{requiresGuest:!0}},{path:"/signup",name:"Signup",component:function(){return Promise.all([n.e("chunk-6ace5f1e"),n.e("chunk-7dd3c8a6")]).then(n.bind(null,"34c3b"))},meta:{requiresGuest:!0}},{path:"/home",name:"Home",component:function(){return n.e("chunk-7de3a9f0").then(n.bind(null,"bb51"))},meta:{requiresAuth:!0}},{path:"/chat",name:"Chat",component:function(){return n.e("chunk-5dd4fa4c").then(n.bind(null,"293a"))},meta:{requiresAuth:!0}},{path:"/profile",name:"Profile",component:function(){return Promise.all([n.e("chunk-6ace5f1e"),n.e("chunk-1de6e68c")]).then(n.bind(null,"c66d"))},meta:{requiresAuth:!0}}],Ce=new M["a"]({mode:"history",base:"/",routes:we});Ce.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?ie.getters.isLoggedIn?n():n("/signin"):e.matched.some((function(e){return e.meta.requiresGuest}))&&ie.getters.isLoggedIn?n("/home"):n()}));var _e=Ce,Se=n("f309");r["a"].use(Se["a"]);var xe=new Se["a"]({});r["a"].config.productionTip=!1,r["a"].prototype.$http=B.a;var Oe=localStorage.getItem("token");Oe&&(r["a"].prototype.$http.defaults.headers.common.Authorization=Oe),new r["a"]({router:_e,store:ie,vuetify:xe,render:function(e){return e($)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},8908:function(e,t,n){"use strict";n("3969")},"92be":function(e,t,n){},9800:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{tile:""}},[n("v-list",{attrs:{rounded:""}},[n("v-subheader",[e._v("CONTACTS")]),n("v-list-item-group",{attrs:{color:"primary"}},e._l(e.contacts,(function(t){return n("v-list-item",{key:t._d,on:{click:function(n){return e.selectContact(t)}}},[n("v-icon",{staticClass:"mr-2",attrs:{color:t.isOnline?"teal":"red"}},[e._v("mdi-checkbox-blank-circle")]),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.name)}})],1)],1)})),1)],1)],1)},a=[],s=n("5530"),o=n("2f62"),c={name:"Chat",props:["contacts"],methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["setActiveContact","getMessages"])),{},{selectContact:function(e){this.setActiveContact(e),this.socket.emit("enter-chat",{sender:localStorage.getItem("userId"),receiver:e._id})}}),computed:Object(s["a"])(Object(s["a"])({},Object(o["c"])(["activeContact","socket"])),Object(o["b"])(["getContacts"])),mounted:function(){console.log(this.contacts)}},u=c,i=(n("8908"),n("2877")),l=n("6544"),d=n.n(l),f=n("b0af"),m=n("132d"),g=n("8860"),p=n("da13"),h=n("5d23"),v=n("1baa"),b=n("e0c7"),k=Object(i["a"])(u,r,a,!1,null,"68f91c42",null);t["a"]=k.exports;d()(k,{VCard:f["a"],VIcon:m["a"],VList:g["a"],VListItem:p["a"],VListItemContent:h["a"],VListItemGroup:v["a"],VListItemTitle:h["c"],VSubheader:b["a"]})},"9c0c":function(e,t,n){},bd7a:function(e,t,n){"use strict";n("92be")}});
//# sourceMappingURL=app.0673ed2f.js.map