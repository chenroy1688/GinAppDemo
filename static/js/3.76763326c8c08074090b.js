webpackJsonp([3],{"U/nr":function(t,n){},"pd+y":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={name:"show-blogs",data:function(){return{id:1,prodData:[]}},mounted:function(){this.id=Number(this.$route.params.id),this.getProdsDetail()},computed:{},methods:{getProdsDetail:function(){var t=this;this.$http.get("/static/prdDatas.json").then(function(n){t.prodData=n.data.filter(function(n){return n.id===t.id}),console.log("000",t.prodData)})},back:function(){this.$router.go(-1)}}},o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"course"},[e("h1",{},[t._v("产品详细info / products")]),t._v(" "),t._l(t.prodData,function(n,s){return e("div",{key:s,staticClass:"course-content"},[e("img",{attrs:{src:n.src}}),t._v(" "),e("h3",[t._v(t._s(t.id)+" -- "+t._s(n.title))]),t._v(" "),e("p",{staticClass:"course-content-p"},[t._v("\n          "+t._s(n.content)+"\n      ")]),t._v(" "),e("p",{staticClass:"course-content-p price"},[t._v("价格 : "+t._s(n.charge))])])}),t._v(" "),e("el-button",{staticClass:"footer-opt",attrs:{tyle:"button"},on:{click:t.back}},[t._v("回产品列表")])],2)},staticRenderFns:[]};var r=e("VU/8")(s,o,!1,function(t){e("U/nr")},null,null);n.default=r.exports}});
//# sourceMappingURL=3.76763326c8c08074090b.js.map