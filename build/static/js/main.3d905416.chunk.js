(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,n,t){e.exports=t.p+"static/media/logol.bd4f9a97.png"},44:function(e,n,t){e.exports=t(78)},78:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(30),i=t.n(o),c=t(12),u=t(4),l=t(9),s=t(5),f=function(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:e,payload:n}}},d=function(e,n){var t=function(e){return{request:f("".concat(e,"_REQUEST")),success:f("".concat(e,"_SUCCESS")),failure:f("".concat(e,"_FAILURE"))}}(e);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(r){return n({request:t,payload:e,dispatch:r})}}},h="@hackerNewsReader/app",m={SET_THEME:"".concat(h,"/SET_THEME"),SET_LAYOUT:"".concat(h,"/SET_LAYOUT")},p={setTheme:f(m.SET_THEME),setLayout:f(m.SET_LAYOUT)},g="grid",v="list",b="dark",y="light",E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:b,layout:v},n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(console.log("payload: ",r),t){case m.SET_THEME:case m.SET_LAYOUT:return Object(l.a)({},e,r);default:return e}},x=t(22),S=t(6),w=t(7),O=t(32),j=t.n(O),k=Object({NODE_ENV:"production",PUBLIC_URL:"/hacker-news-reader"}).URL||"http://localhost:3000/",T=2e4,_={"Content-Type":"application/json",Accept:"application/json"},I=new(function(){function e(n){var t=n.baseURL,r=void 0===t?k:t,a=n.timeout,o=void 0===a?T:a,i=n.headers,c=void 0===i?_:i,u=n.auth;Object(S.a)(this,e);var l=j.a.create({baseURL:r,timeout:o,headers:c,auth:u});l.interceptors.response.use(this.handleSuccess,this.handleError),this.client=l}return Object(w.a)(e,[{key:"handleSuccess",value:function(e){return e}},{key:"handleError",value:function(e){return Promise.reject(e)}},{key:"get",value:function(e){return this.client.get(e).then(function(e){return e.data})}},{key:"post",value:function(e,n){return this.client.post(e,n).then(function(e){return e.data})}},{key:"put",value:function(e,n){return this.client.put(e,n).then(function(e){return e.data})}},{key:"patch",value:function(e,n){return this.client.patch(e,n).then(function(e){return e.data})}},{key:"delete",value:function(e){return this.client.delete(e).then(function(e){return e.data})}}]),e}())({baseURL:"https://hacker-news.firebaseio.com/v0"}),C={};C.getTopStoryIds=function(){return I.get("/topstories".concat(".json?print=pretty"))},C.getStory=function(e){return I.get("/item/".concat(e).concat(".json?print=pretty"))},C.getStoriesByPage=function(e,n){var t=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{begin:n*e,end:(n+1)*e}}(20,n),r=function(e){var n=e.begin,t=e.end;return e.items.slice(n,t)}({begin:t.begin,end:t.end,items:e}).map(function(e){return C.getStory(e)});return Promise.all(r)};var R=C,F={FETCH_STORY_IDS:"".concat("@hackerNewsReader/story","/FETCH_STORY_IDS"),FETCH_STORIES:"".concat("@hackerNewsReader/story","/FETCH_STORIES")},N={fetchStoryIds:d(F.FETCH_STORY_IDS,function(e){var n=e.request,t=e.payload,r=e.dispatch;return r(n.request(t)),R.getTopStoryIds().then(function(e){return r(n.success({storyIds:e})),r(N.fetchStories({storyIds:e,page:0})),e}).catch(function(e){return r(n.failure(e))})}),fetchStories:d(F.FETCH_STORIES,function(e){var n=e.request,t=e.payload,r=e.dispatch,a=t.storyIds,o=t.page;return r(n.request(t)),R.getStoriesByPage(a,o).then(function(e){return r(n.success({stories:e}))}).catch(function(e){return r(n.failure(e))})})},U=N,L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{storyIds:[],stories:[],page:0,isFetching:!1,error:""},n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case"".concat(F.FETCH_STORY_IDS,"_REQUEST"):case"".concat(F.FETCH_STORIES,"_REQUEST"):return Object(l.a)({},e,{isFetching:!0});case"".concat(F.FETCH_STORY_IDS,"_SUCCESS"):return Object(l.a)({},e,r);case"".concat(F.FETCH_STORIES,"_SUCCESS"):return Object(l.a)({},e,{stories:[].concat(Object(x.a)(e.stories),Object(x.a)(r.stories)),page:e.page+1,isFetching:!1});default:return e}},A=Object(u.c)({story:L,app:E}),H=t(33);t(34);var D=function(e){var n=e.storageKey;try{var t=localStorage.getItem(n);if(null===t)return;return JSON.parse(t)}catch(r){return}};var B,z=function(e){var n=e.storageKey,t=e.state;try{var r=JSON.stringify(t);localStorage.setItem(n,r)}catch(a){}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"localStorage";if("undefined"===typeof window||!(e in window))return!1;try{var n=window[e],t="storage ".concat(e," test");n.setItem(t,"test"),n.getItem(t),n.removeItem(t)}catch(r){return!1}return!0}()?function(e){return function(n){return function(t){return function(r){var a=n.getState(),o=e[r.type],i=t(r),c=n.getState();return o&&("function"===typeof o?o({action:r,loadState:D,saveState:z,prevState:a,nextState:c,dispatch:n.dispatch}):Array.isArray(o)&&o.forEach(function(e){return e({action:r,loadState:D,saveState:z,prevState:a,nextState:c,dispatch:n.dispatch})})),i}}}}:function(e){return function(e){return function(e){return function(n){return e(n)}}}},Y="".concat("@@hackerNewsReader/storage","/theme"),P="".concat("@@hackerNewsReader/storage","/layout"),K=(B={},Object(s.a)(B,m.SET_THEME,[function(e){var n=e.action;return(0,e.saveState)({state:n.payload.theme,storageKey:Y})}]),Object(s.a)(B,m.SET_LAYOUT,[function(e){var n=e.action;return(0,e.saveState)({state:n.payload.layout,storageKey:P})}]),B),W=[];W.push(H.a),W.push(M(K));var q=Object(u.d)(u.a.apply(void 0,W),function(e){return e}),J=function(e){return Object(u.e)(A,e,q)},Q=t(35),G=Object(Q.a)(function(e){return e.story.storyIds},function(e){return e.story.stories},function(e,n){return e.length>n.length}),V=t(13),X=t(11),Z=t(14),$=t(1),ee=t(36),ne=t.n(ee),te=t(37),re=t.n(te),ae=t(2),oe="@media only screen and  (max-width: 480px)",ie="@media only screen and  (max-width: 768px)";function ce(){var e=Object(ae.a)(["\n  display: flex;\n"]);return ce=function(){return e},e}function ue(){var e=Object(ae.a)(["\n  height: ","px;\n"]);return ue=function(){return e},e}function le(){var e=Object(ae.a)(["\n  height: 20px;\n  border-radius: 2px;\n  margin-right: 8px;\n"]);return le=function(){return e},e}function se(){var e=Object(ae.a)(["\n  margin-left: 12px;\n  font-size: 18px;\n  cursor: pointer;\n"]);return se=function(){return e},e}function fe(){var e=Object(ae.a)(["\n  display: flex;\n  align-items: center;\n"]);return fe=function(){return e},e}function de(){var e=Object(ae.a)(["\n  height: 100%;\n  width: 100%;\n  max-width: 85%;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  "," {\n    max-width: 96%;\n  }\n"]);return de=function(){return e},e}function he(){var e=Object(ae.a)(["\n  background-color: ",";\n  height: ","px;\n  color: ",";\n  width: 100%;\n  box-shadow: 0 1px 0 0 black;\n  position: fixed;\n  top: 0;\n"]);return he=function(){return e},e}var me=$.c.header(he(),function(e){return e.theme.backgroundSecondary},60,function(e){return e.theme.text}),pe=$.c.div(de(),ie),ge=$.c.div(fe()),ve=$.c.div(se()),be=$.c.img(le()),ye=$.c.div(ue(),60),Ee=$.c.a(ce()),xe=function(e){var n=e.layout,t=e.theme,r=e.setLayout,o=e.setTheme;return a.a.createElement("div",null,a.a.createElement(me,null,a.a.createElement(pe,null,a.a.createElement(ge,null,a.a.createElement(Ee,{href:"https://legitdev.com",target:"_blank"},a.a.createElement(be,{src:re.a})," Legit Dev NEWS")),a.a.createElement(ge,null,n===v?a.a.createElement(ve,{onClick:function(){return r(g)}},a.a.createElement("i",{className:"fas fa-th-large"})):a.a.createElement(ve,{onClick:function(){return r(v)}},a.a.createElement("i",{className:"fas fa-th-list"})),t===y?a.a.createElement(ve,{onClick:function(){return o(b)}},a.a.createElement("i",{className:"fas fa-moon"})):a.a.createElement(ve,{onClick:function(){return o(y)}},a.a.createElement("i",{className:"fas fa-sun"}))))),a.a.createElement(ye,null))},Se=Object(c.b)(function(e){return{layout:e.app.layout,theme:e.app.theme}},function(e){return{setTheme:function(n){return e(p.setTheme({theme:n}))},setLayout:function(n){return e(p.setLayout({layout:n}))}}})(xe),we=t(40),Oe=t.n(we),je=t(41),ke=t.n(je),Te=function(e){var n="";return e&&(e.includes("//")||(e="http://".concat(e)),n=ke.a.parse(e).hostname),n.includes("www.")&&(n=n.split("www.")[1]),n},_e="https://news.ycombinator.com",Ie="".concat(_e,"/item?id="),Ce="".concat(_e,"/user?id="),Re=function(e){var n=e.url,t=e.id,r="".concat(Ie).concat(t);return n||r};function Fe(){var e=Object(ae.a)(["\n  color: ",";\n\n  &:visited {\n    color: ",";\n  }\n"]);return Fe=function(){return e},e}function Ne(){var e=Object(ae.a)(["\n  font-size: 14px;\n  color: ",";\n"]);return Ne=function(){return e},e}function Ue(){var e=Object(ae.a)(["\n  color: ",";\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: row;\n  align-items: center;\n  text-decoration: none;\n"]);return Ue=function(){return e},e}function Le(){var e=Object(ae.a)(["\n  color: ",";\n  font-size: 12px;\n"]);return Le=function(){return e},e}function Ae(){var e=Object(ae.a)(["\n  color: ",";\n  margin-top: 0;\n  margin-bottom: 6px;\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: 0.4px;\n"]);return Ae=function(){return e},e}function He(){var e=Object(ae.a)(["\n  border-bottom: 1px solid ",";\n  padding: 14px 24px;\n\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return He=function(){return e},e}var De=$.c.li(He(),function(e){return e.theme.border}),Be=$.c.h3(Ae(),function(e){return e.theme.text}),ze=$.c.span(Le(),function(e){return e.theme.textSecondary}),Me=$.c.a(Ue(),function(e){return e.theme.text}),Ye=$.c.div(Ne(),function(e){return e.theme.textSecondary}),Pe=$.c.a(Fe(),function(e){return e.theme.textSecondary},function(e){return e.theme.textSecondary}),Ke=function(e){var n=e.by,t=e.kids,r=void 0===t?[]:t,o=e.score,i=e.url,c=e.title,u=e.id,l=(e.type,e.time),s=Te(i)||"news.ycombinator.com",f=Re({url:i,id:u}),d="".concat(Ie).concat(u);return a.a.createElement(De,null,a.a.createElement(Me,{href:f,rel:"nofollow noreferrer noopener",target:"_blank"},a.a.createElement(Be,null,c," ",a.a.createElement(ze,null,"(",s,")"))),a.a.createElement(Ye,null,o," points by"," ",a.a.createElement(Pe,{href:"".concat(Ce).concat(n),rel:"nofollow noreferrer noopener",target:"_blank"},n)," ",a.a.createElement(Oe.a,{date:new Date(1e3*l).toISOString()})," | ",a.a.createElement(Pe,{href:d,rel:"nofollow noreferrer noopener",target:"_blank"},r.length," Comments")))};function We(){var e=Object(ae.a)(["\n  background-color: ",";\n  border-radius: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n"]);return We=function(){return e},e}var qe=$.c.ul(We(),function(e){return e.theme.backgroundSecondary}),Je=function(e){function n(){return Object(S.a)(this,n),Object(V.a)(this,Object(X.a)(n).apply(this,arguments))}return Object(Z.a)(n,e),Object(w.a)(n,[{key:"render",value:function(){var e=this.props.stories;return a.a.createElement(qe,null,e.map(function(e){return a.a.createElement(Ke,Object.assign({key:e.id},e))}))}}]),n}(r.Component);function Qe(){var e=Object(ae.a)(["\n  color: ",";\n  border-top: 1px solid ",";\n  padding: 16px;\n"]);return Qe=function(){return e},e}function Ge(){var e=Object(ae.a)(["\n  color: ",";\n  margin: 0;\n  padding: 16px;\n  padding-bottom: 70px;\n  font-size: 16px;\n  font-weight: 400;\n  flex-grow: 1;\n"]);return Ge=function(){return e},e}function Ve(){var e=Object(ae.a)(["\n  background-color: ",";\n  border-bottom-left-radius: ","px;\n  border-bottom-right-radius: ","px;\n  word-break: break-word;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n"]);return Ve=function(){return e},e}function Xe(){var e=Object(ae.a)(["\n  display: block;\n  height: 240px;\n  max-width: 100%;\n  border-top-left-radius: ","px;\n  border-top-right-radius: ","px;\n  object-fit: cover;\n"]);return Xe=function(){return e},e}function Ze(){var e=Object(ae.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Ze=function(){return e},e}function $e(){var e=Object(ae.a)(["\n  flex-direction: column;\n  display: flex;\n  height: 100%;\n"]);return $e=function(){return e},e}function en(){var e=Object(ae.a)(["\n  height: 100%;\n"]);return en=function(){return e},e}var nn=$.c.li(en()),tn=$.c.div($e()),rn=($.c.a(Ze()),$.c.img(Xe(),4,4)),an=$.c.div(Ve(),function(e){return e.theme.backgroundSecondary},4,4),on=$.c.h3(Ge(),function(e){return e.theme.text}),cn=$.c.div(Qe(),function(e){return e.theme.textSecondary},function(e){return e.theme.border}),un=function(e){var n=e.url,t=e.title,r=e.id,o=Te(n)||"news.ycombinator.com",i=Re({url:n,id:r});return a.a.createElement("a",{href:i,target:"_blank",rel:"nofollow noreferrer nofollow"},a.a.createElement(nn,null,a.a.createElement(tn,null,a.a.createElement(rn,{src:"https://miro.medium.com/max/1176/1*F9RzuXseG1VrTjFJd403gw.png"}),a.a.createElement(an,null,a.a.createElement(on,null,t),a.a.createElement(cn,null,a.a.createElement("div",null,"// ".concat(o)))))))};function ln(){var e=Object(ae.a)(["\n  display: flex;\n  margin-bottom: 20px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 32px;\n\n  "," {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  "," {\n    grid-template-columns: 1fr;\n  }\n"]);return ln=function(){return e},e}var sn=$.c.ul(ln(),"@media only screen and  (min-width: 1400px)",ie,oe),fn=function(e){function n(){return Object(S.a)(this,n),Object(V.a)(this,Object(X.a)(n).apply(this,arguments))}return Object(Z.a)(n,e),Object(w.a)(n,[{key:"render",value:function(){return a.a.createElement(sn,null,this.props.stories.map(function(e){return a.a.createElement(un,Object.assign({key:e.id},e))}))}}]),n}(r.Component);function dn(){var e=Object(ae.a)(["\n  text-align: center;\n\n  span {\n    color: ",";\n    display: inline-block;\n    margin-left: 4px;\n    margin-right: 4px;\n    font-size: 80px;\n    line-height: 0.1;\n\n    /**\n    * Use the blink animation, which is defined above\n    */\n    animation-name: ",";\n    /**\n    * The total time of animation\n    */\n    animation-duration: 1s;\n    /**\n    * It will repeat itself forever\n    */\n    animation-iteration-count: infinite;\n    /**\n    * This makes sure that the starting style (opacity: .2)\n    * of the animation is applied before the animation starts.\n    * Otherwise we would see a short flash or would have\n    * to set the default styling of the dots to the same\n    * as the animation. Same applies for the ending styles.\n    */\n    animation-fill-mode: both;\n  }\n\n  span:nth-child(2) {\n    animation-delay: 0.2s;\n  }\n  span:nth-child(3) {\n    animation-delay: 0.4s;\n  }\n"]);return dn=function(){return e},e}function hn(){var e=Object(ae.a)(["\n  /**\n  * At the start of the animation the dot\n  * has an opacity of .2\n  */\n  0% {\n    opacity: .2;\n  }\n  /**\n  * At 20% the dot is fully visible and\n  * then fades out slowly\n  */\n  20% {\n    opacity: 1;\n  }\n  /**\n  * Until it reaches an opacity of .2 and\n  * the animation can start again\n  */\n  100% {\n    opacity: .2;\n  }\n"]);return hn=function(){return e},e}var mn=Object($.d)(hn()),pn=$.c.div(dn(),function(e){return e.theme.textSecondary},mn),gn=function(){return a.a.createElement(pn,null,a.a.createElement("span",null,"."),a.a.createElement("span",null,"."),a.a.createElement("span",null,"."))},vn={background:"#272727",backgroundSecondary:"#393C3E",text:"#bfbebe",textSecondary:"#848886",border:"#272727"},bn={background:"#EAEAEA",backgroundSecondary:"#F8F8F8",text:"#848886",textSecondary:"#aaaaaa",border:"#EAEAEA"};function yn(){var e=Object(ae.a)(["\n  color: ",";\n  font-size: 14px;\n  text-decoration: underline;\n\n  &:visited {\n    color: ",";\n  }\n"]);return yn=function(){return e},e}function En(){var e=Object(ae.a)(["\n  margin-left: 16px;\n\n  i {\n    color: ",";\n  }\n\n  "," {\n    margin-left: 0;\n    margin-right: 16px;\n  }\n"]);return En=function(){return e},e}function xn(){var e=Object(ae.a)(["\n  display: flex;\n"]);return xn=function(){return e},e}function Sn(){var e=Object(ae.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 24px;\n  margin-bottom: 26px;\n\n  "," {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]);return Sn=function(){return e},e}function wn(){var e=Object(ae.a)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 300;\n"]);return wn=function(){return e},e}function On(){var e=Object(ae.a)(["\n  width: 85%;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  overflow: hidden;\n  padding-bottom: 200px;\n\n  "," {\n    width: 96%;\n  }\n"]);return On=function(){return e},e}var jn=$.c.div(On(),ie),kn=$.c.h1(wn(),function(e){return e.theme.textSecondary}),Tn=$.c.div(Sn(),oe),_n=($.c.div(xn()),$.c.a(En(),function(e){return e.theme.text},oe)),In=$.c.a(yn(),function(e){return e.theme.textSecondary},function(e){return e.theme.textSecondary}),Cn=function(e){function n(){var e,t;Object(S.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(V.a)(this,(e=Object(X.a)(n)).call.apply(e,[this].concat(a)))).fetchStories=function(){var e=t.props,n=e.storyIds,r=e.page,a=e.fetchStories;e.isFetching||a({storyIds:n,page:r})},t}return Object(Z.a)(n,e),Object(w.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStoriesFirstPage(),this.setBodyBackgroundColor()}},{key:"componentDidUpdate",value:function(e){e.theme!==this.props.theme&&this.setBodyBackgroundColor()}},{key:"setBodyBackgroundColor",value:function(){this.props.theme===y?document.body.style="background-color: ".concat(bn.background,";"):document.body.style="background-color: ".concat(vn.background,";")}},{key:"render",value:function(){var e=this.props,n=e.stories,t=e.layout,r=e.theme,o=e.hasMoreStores;return a.a.createElement($.a,{theme:r===y?bn:vn},a.a.createElement("div",null,a.a.createElement(Se,null),a.a.createElement(jn,null,a.a.createElement(Tn,null,a.a.createElement(kn,null,a.a.createElement("div",null,"#Never be left Behind"),a.a.createElement(In,{href:"git@github.com:itsRealoj/legit-developers-news-reader.git",target:"_blank"},a.a.createElement("h4",null,"Interesting Dev News"))),a.a.createElement("div",null,a.a.createElement(_n,{href:"https://twitter.com/oj_the_dev",target:"blank"},a.a.createElement("i",{className:"fab fa-twitter"})),a.a.createElement(_n,{href:"https://app.slack.com/client/T012E45TW0Z/D012432UT54/user_profile/U0129DGMG1K",target:"blank"},a.a.createElement("i",{className:"fab fa-slack-hash"})),a.a.createElement(_n,{href:"https://legitdev.com",target:"blank"},a.a.createElement("i",{className:"fab fa-medium-m"})),a.a.createElement(_n,{href:"#",target:"blank"},a.a.createElement("i",{className:"fab fa-facebook"})),a.a.createElement(_n,{href:"https://legitdev.com",target:"blank"},a.a.createElement("i",{className:"fas fa-link"})))),a.a.createElement(ne.a,{dataLength:n.length,next:this.fetchStories,hasMore:o,loader:a.a.createElement(gn,null),style:{height:"100%",overflow:"visible"}},t===v?a.a.createElement(Je,{stories:n}):a.a.createElement(fn,{stories:n})))))}}]),n}(r.Component);Cn.defaultProps={stories:[]};var Rn=Cn,Fn=Object(c.b)(function(e){return{layout:e.app.layout,theme:e.app.theme,stories:e.story.stories,page:e.story.page,storyIds:e.story.storyIds,isFetching:e.story.isFetching,hasMoreStores:G(e)}},function(e){return{fetchStories:function(n){var t=n.storyIds,r=n.page;return e(U.fetchStories({storyIds:t,page:r}))},fetchStoriesFirstPage:function(){return e(U.fetchStoryIds())}}})(Rn);function Nn(){var e=Object(ae.a)(["\n    * {\n      box-sizing: border-box;\n    }\n\n    html, body {\n      font-family: Lato,Helvetica-Neue,Helvetica,Arial,sans-serif;\n      width: 100vw;\n      overflow-x: hidden;\n      margin: 0;\n      padding: 0;\n    }\n\n    ul {\n      list-style: none;\n      padding: 0;\n    }\n\n    a {\n      text-decoration: none;\n\n      &:visited {\n        color: inherit;\n      }\n    }\n  "]);return Nn=function(){return e},e}var Un=Object($.b)(Nn()),Ln=function(){var e={},n=D({storageKey:P}),t=D({storageKey:Y});return(n||t)&&(e.app={},e.app.layout=n,e.app.theme=t),e},An=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Hn(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}!function(){var e=Ln(),n=J(e);i.a.render(a.a.createElement(c.a,{store:n},a.a.createElement("div",null,a.a.createElement(Un,null),a.a.createElement(Fn,null))),document.getElementById("root"))}(),function(){if("serviceWorker"in navigator){if(new URL("/hacker-news-reader",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/hacker-news-reader","/service-worker.js");An?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Hn(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Hn(e)})}}()}},[[44,2,1]]]);
//# sourceMappingURL=main.3d905416.chunk.js.map