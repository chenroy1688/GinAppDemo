webpackJsonp([5],{"/5Jc":function(t,e){},"8IUU":function(t,e){},"991W":function(t,e){},Asfn:function(t,e,n){t.exports=n.p+"static/img/banner1.c573101.jpg"},BMbs:function(t,e){},BmoK:function(t,e){},Ee7K:function(t,e,n){t.exports=n.p+"static/img/banner2.26d1bda.jpg"},IcnI:function(t,e,n){"use strict";var o=n("7+uW"),i=n("NYxO"),a={loginVal:function(t,e){console.log("vvvv",e),t.userInfo=e},setMemberInfo:function(t,e){console.log("更改会员等级",e),t.userStatus=e.userStatus,t.vipLevel=e.vipLevel}},s=n("//Fk"),r=n.n(s),c={buyVip:function(t,e){var n=t.commit;return new r.a(function(t,o){setTimeout(function(){n("setMemberInfo",{userStatus:e.userStatus,vipLevel:e.vipLevel}),t("您已购买成功")},1e3)})},getFreevip:function(t){var e=t.commit,n=t.state;return new r.a(function(t,o){setTimeout(function(){0===n.userStatus?(e("setMemberInfo",{userStatus:2,vipLevel:3}),t("已分享,已赠送您一个月高级vip会员!!")):alert("已經分享")},1e3)})}};o.default.use(i.a);var u=new i.a.Store({state:{userInfo:"",userStatus:"",vipLevel:"",vipList:[{name:"普通会员",charge:"10.00",vipLevel:1,userStatus:0},{name:"VIP会员",charge:"50.00",vipLevel:2,userStatus:1},{name:"VIP高级会员",charge:"300.00",vipLevel:3,userStatus:2}],msg:19520,todos:[{id:1,text:"这是测试数据AAA",done:!0},{id:2,text:"this is a book",done:!1},{id:3,text:"that is a dog",done:!0}]},getters:{getMemType:function(t){switch(t.userStatus){case 0:return"普通会员";case 1:return"VIP会员";case 2:return"高级vip会员";default:return"普通会员"}},doneTodos:function(t){return t.todos.filter(function(t){return t.done})},doneTodosLen:function(t,e){return e.doneTodos.length}},mutations:a,actions:c});e.a=u},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i=n("/ocq"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view",{attrs:{name:"header"}})],1),this._v(" "),e("keep-alive",{attrs:{exclude:"Detail"}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1),this._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view",{attrs:{name:"Navbottom"}})],1)],1)},staticRenderFns:[]};var s=n("VU/8")({name:"app",data:function(){return{}},components:{}},a,!1,function(t){n("Oh39")},null,null).exports,r=n("Dd8w"),c=n.n(r),u=n("NYxO"),l={name:"banner",data:function(){return{n:0,img:[n("Asfn"),n("Ee7K"),n("cha4")]}},mounted:function(){this.play()},computed:{},methods:{play:function(){setInterval(this.autoPlay,5e3)},autoPlay:function(){this.n++,this.n==this.img.length&&(this.n=0)},prev:function(){this.n--,this.n<0&&(this.n=2)}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner",attrs:{id:"banner"}},[n("div",{staticClass:"banner_left",on:{click:t.prev}}),t._v(" "),n("div",{staticClass:"banner_right",on:{click:t.autoPlay}}),t._v(" "),t._l(t.img,function(e,o){return n("img",{directives:[{name:"show",rawName:"v-show",value:o==t.n,expression:"index == n"}],key:o,attrs:{src:e}})}),t._v(" "),n("ul",{staticClass:"banner-circle bos"},t._l(t.img,function(e,o){return n("li",{key:o,class:t.n==o?"selected":"",on:{click:function(e){t.n=o}}})}),0)],2)},staticRenderFns:[]};var d={name:"blog-header",components:{Banner:n("VU/8")(l,f,!1,function(t){n("BMbs")},null,null).exports,slotChild:n("YMl/").a},data:function(){return{headInfo:"音速直播给您最及时赛事",text:"这是父组件的应用数据",n:0,items:[{id:1,title:"首页99",href:"/",icon:"icon-home3",color:"#d91f2c"},{id:2,title:"选单2",href:"/userCenter",icon:"icon-newspaper",color:"#92d85c"},{id:3,title:"选单3",href:"/course",icon:"icon-film",color:"#908cfd"},{id:4,title:"选单4",href:"/",icon:"icon-tv",color:"#49dacf"},{id:5,title:"选单5",href:"/",icon:"icon-tv",color:"#999"},{id:6,title:"选单6",href:"http://www.yahoo.com.tw",icon:"icon-tv",color:"#0000ff"}]}},mounted:function(){},computed:c()({},Object(u.c)(["userInfo"])),methods:{}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headTop header-content",attrs:{id:"my"}},[n("header",[t._v("\n\t\tGinApp / 帐号 : "+t._s(t.userInfo.account)+"\n\t")]),t._v(" "),n("div",{staticClass:"header-category"},t._l(t.items,function(e,o){return n("a",{key:o,staticClass:"category",attrs:{href:e.href}},[n("i",{staticClass:"iconfont",class:e.icon,style:{background:e.color}}),t._v(" "),n("span",[t._v(t._s(e.title))])])}),0),t._v(" "),n("banner"),t._v(" "),n("slotChild",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.one;return[n("p",{staticClass:"nameProps"},[t._v("作用域插槽11 ....... "+t._s(o.name))])]}},{key:"hasName",fn:function(e){return[n("p",{staticClass:"nameProps"},[t._v("我是具名插槽 ..... "+t._s(e.users))])]}}])})],1)},staticRenderFns:[]};var h=n("VU/8")(d,v,!1,function(t){n("poFS")},null,null).exports,p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{class:["foot",{foot_bg:t.footerStyle.bg}],attrs:{"zip-code":t.zipCode},on:{"update:zipCode":function(e){t.zipCode=e},"update:zip-code":function(e){t.zipCode=e}}},[n("div",{staticClass:"foot_mainInfo"},[t._v("\n        底部资讯\n    ")]),t._v(" "),n("div",{staticClass:"footer_info"},[n("span",[t._v(t._s(t.footInfo.info))]),t._v(" "),n("span",[t._v("联系我们 ｜ 合作邮箱 ： "+t._s(t.footInfo.mail)+" ｜ QQ客服 ： "+t._s(t.footInfo.QQ))])])])},staticRenderFns:[]};var m=n("VU/8")({data:function(){return{footerStyle:{bg:!0,txt:!0},footInfo:{info:"Copyright@ 2017 ALL Right Reserved",areaCode:"+86",mail:"3217324595@qq.com",QQ:"3217324595"},zipCode:"1111"}}},p,!1,function(t){n("Nhgu")},"data-v-6ed72285",null).exports,_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav",attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"iconfont icon-home3"}),this._v("\n              HOME\n          ")]),this._v(" "),e("router-link",{attrs:{to:"/userCenter"}},[e("i",{staticClass:"iconfont icon-home3"}),this._v("\n              ABOUT\n          ")]),this._v(" "),e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"iconfont icon-home3"}),this._v("\n              PROD\n          ")]),this._v(" "),e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"iconfont icon-home3"}),this._v("\n              FOOT\n          ")])],1)},staticRenderFns:[]};var g=n("VU/8")({name:"nav",data:function(){return{mag:""}},computed:{},methods:{}},_,!1,function(t){n("BmoK")},"data-v-19296365",null).exports,b=[{path:"/login",name:"login",component:function(){return n.e(0).then(n.bind(null,"Luci"))}},{path:"/",name:"index",components:{default:function(t){return n.e(1).then(function(){var e=[n("2NXm")];t.apply(null,e)}.bind(this)).catch(n.oe)},header:h,foot:m,Navbottom:g}},{path:"/userCenter",name:"userCenter",components:{default:function(t){return n.e(2).then(function(){var e=[n("lGSh")];t.apply(null,e)}.bind(this)).catch(n.oe)},header:h,foot:m,Navbottom:g}},{path:"/prodDetail/:id",name:"prodDetail",components:{default:function(t){return n.e(3).then(function(){var e=[n("pd+y")];t.apply(null,e)}.bind(this)).catch(n.oe)},header:h,foot:m,Navbottom:g}},{path:"*",redirect:"/"}],C=n("mtWM"),y=n.n(C),I=n("IcnI"),x=n("zL8q"),S=n.n(x);n("tvR6"),n("991W"),n("erWL"),n("/5Jc");o.default.use(S.a),o.default.use(i.a),o.default.prototype.$http=y.a,o.default.config.productionTip=!1,o.default.directive("rainbow",{bind:function(t,e,n){t.style.color="#"+Math.random().toString(16).slice(2,8),t.style.fontSize="24px",t.style.fontWeight="bold"}});var w=new i.a({linkActiveClass:"isActive",routes:b});w.beforeEach(function(t,e,n){var o="isLogin"==localStorage.getItem("token");t.meta.title&&(document.title=t.meta.title),n(),I.a.state.userInfo||o?n():"/login"!==t.path?n("/login"):n()}),new o.default({store:I.a,el:"#app",template:"<App/>",components:{App:s},router:w})},Nhgu:function(t,e){},Oh39:function(t,e){},"YMl/":function(t,e,n){"use strict";var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"boss",attrs:{id:"slot-demo"}},[e("h2",[this._v("子組件插槽")]),this._v(" "),this._t("default",null,{one:this.father2}),this._v(" "),this._t("hasName",null,{users:this.father1})],2)},staticRenderFns:[]};var i=n("VU/8")({name:"slot-demo",data:function(){return{father1:{name:"父组建1数据",age:22},father2:{name:"父组建2数据",age:44}}},methods:{},created:function(){}},o,!1,function(t){n("8IUU")},"data-v-ce35006a",null);e.a=i.exports},cha4:function(t,e,n){t.exports=n.p+"static/img/banner3.bf563d4.jpg"},erWL:function(t,e){},poFS:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ca94858556bfcdcfa67c.js.map