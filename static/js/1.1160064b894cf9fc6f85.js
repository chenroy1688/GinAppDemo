webpackJsonp([1],{"2NXm":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Dd8w"),n=a.n(s),c=a("NYxO"),i={components:{slotchild:a("YMl/").a},data:function(){return{prodData:[],classDatas:[{id:1,title:"学习Vue课程",src:"../../static/tag_pic.jpg",content:"这是说明文字",charge:190},{id:2,title:"进阶2课程",src:"../../static/tag_pic2.jpg",content:"这是说明文字",charge:360},{id:3,title:"php进阶3课程",src:"../../static/tag_pic3.jpg",content:"这是说明文字",charge:560},{id:4,title:"课程004",src:"../../static/tag_pic4.jpg",content:"这是说明文字",charge:1e3}],sets:[[1,2,3,4,5],[6,7,8,9,10]]}},mounted:function(){this.getProdsData()},computed:n()({},Object(c.c)(["userStatus","vipLevel","userInfo"]),Object(c.b)(["getMemType","doneTodos","doneTodosLen"])),methods:{getProdsData:function(){var t=this;this.$http.get("/static/prdDatas.json").then(function(e){t.prodData=e.data}).catch(function(t){console.log("请求错误!!")})},even:function(t){return t.filter(function(t){return t%2==0})}},filters:{}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"indexPage"},[a("h1",{directives:[{name:"rainbow",rawName:"v-rainbow"}]},[t._v("音速体育直播")]),t._v(" "),a("section",[a("p",{staticClass:"indexPage-title"},[t._v("\n\t\t\t尊敬的 "),a("span",{staticClass:"accColor"},[t._v(t._s(t.userInfo.account))]),t._v(" "),a("span",[t._v("欢迎来到音速直播")])]),t._v(" "),a("div",{staticClass:"indexPage-classType"},[a("ul",t._l(t.prodData,function(e,s){return a("li",{key:s},[a("div",{staticClass:"divLeft"},[a("router-link",{attrs:{to:"/prodDetail/"+e.id}},[a("img",{attrs:{src:e.src}})])],1),t._v(" "),a("div",{staticClass:"divRight"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.content))]),t._v(" "),a("p",{staticClass:"charge_p"},[t._v("价格 : "+t._s(e.charge))])])])}),0)])])])},staticRenderFns:[]};var o=a("VU/8")(i,r,!1,function(t){a("cvba")},null,null);e.default=o.exports},cvba:function(t,e){}});
//# sourceMappingURL=1.1160064b894cf9fc6f85.js.map