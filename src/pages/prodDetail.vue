<template>
  <!-- 用戶中心 -->
  <div class="course">
    <h1 class="">产品详细info / products</h1>
    <!-- 产品详细内容 -->
    <div class="course-content" v-for="(item,index) in prodData" :key="index">
        <img :src="item.src"/>
        <h3>{{ id }} -- {{ item.title }}</h3>
        <p class="course-content-p">
            <!-- 购买功能 -->
            {{ item.content }}
        </p>
        <p class="course-content-p price">价格 : {{ item.charge }}</p>
    </div>
    <el-button tyle="button" class="footer-opt" @click="back">回产品列表</el-button>
  </div>
</template>

<script>
//引入vuex
// import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
// import store from '../store'
//引入封装api接口
	import { prodDataApi } from '@/api/api'
  
export default {
  name: 'show-blogs',
  data(){
  	return {
      id:1,
      prodData:[]
  	}
  },
  mounted(){ //Dom挂载完后执行
    //取得路由上的id
    this.id = Number(this.$route.params.id)
    this.getProdsDetail()
  },
  computed:{
    
  },
  methods:{
    //請求點擊當下數據
    // getProdsDetail(){
    //   this.$http.get('/static/prdDatas.json')
		// 		.then(res =>{
		// 			  this.prodData = res.data.filter( item => item.id === this.id )
    //         console.log('000',this.prodData)
		// 		})
    // },
    //請求點擊當下數據
    getProdsDetail(){
      prodDataApi()
        .then(res => {
            //console.log(typeof this.id)  取出對應id的數據
            this.prodData = res.data.filter( item => item.id === this.id )
            console.log('000',this.prodData)
        })
    },
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.course-content h3{
  color:#ff0000;
  padding:3vw 0;
}
.course-content-p{
  color:#999;
}
.price{
  color:#000;
}


@media screen and (max-width:992px) {
  .footer-opt{
      margin:2.5vw auto 20vw auto;
      padding:4vw 0;
  }
}
@media screen and (max-width:768px) {
  
}
@media screen and (max-width:640px) {

}
@media screen and (max-width:480px) {

}
@media screen and (max-width:414px) {

}
@media screen and (max-width:375px) {

}
@media screen and (max-width:320px) {

}
</style>
