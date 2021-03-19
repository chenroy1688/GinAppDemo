<template>
  <!-- 用戶中心 -->
  <div class="user-center">
    <h1>用户中心 / userCenter</h1>

    <div class="user-center-info">
        <section class="user-info">
            <label for class="user-info-label">账号</label>
            <span class="user-info-value">{{ userInfo.account }}</span>
        </section>
        <section class="user-info">
            <label for class="user-info-label">身份</label>
            <span class="user-info-value">{{ getMemType }}</span>
        </section>
        <section class="user-info">
            <label for class="user-info-label">vip等级</label>
            <span class="user-info-value">{{ vipLevel }}</span>
        </section>

        <!-- 会员方案 -->
        <section class="vip-list">
            <ul class="vip-container">
                <!-- 渲染 vip购买方按 -->
                <li v-for="(lists,index) in vipList" :key="index">
                    <div class="item-name">{{ lists.name }} ( vip等级 : {{ lists.vipLevel }} )</div>
                    <div class="item-content">
                        <span class="item-content_price">
                            {{ lists.charge }} 元<span class="item-content_date"> / 30天</span>
                        </span>
                        <button class="item-content_btn" @click="buy(lists)">购买</button>
                    </div>
                </li>
            </ul>
        </section>
        <el-button tyle="button" class="footer-opt" @click="backPrev">上一页</el-button>
    </div>

  </div>
</template>

<script>
//引入vuex
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import store from '../store'
  
export default {
  name: 'show-blogs',
  data(){
  	return {
      // vipList: []
      status : ''
  	}
  },
  created(){
  
  },
  mounted(){ //Dom挂载完后执行
    //会员购买方案数据
    // this.vipList = [
    //   { name:'普通会员',charge:'10.00',vipLevel:1,userStatus:0 }, //普通会员
    //   { name:'VIP会员',charge:'50.00',vipLevel:2,userStatus:1 }, //VIP会员
    //   { name:'VIP高级会员',charge:'300.00',vipLevel:3,userStatus:2 } //VIP高级会员
    // ]
  },
  computed:{
    ...mapState(["userInfo","vipLevel","vipList"]),
    ...mapGetters(["getMemType",])
  },
  methods:{
    //会员购买功能 (传入当下click -- 购买方案数据)
    buy(lists){ 
      console.log('listssss',lists)
      //传入actions then回传actions 非同步resolve数据 (第二参数lists为传入的数据)
      store.dispatch('buyVip',lists).then(res =>{
        alert( res );
      })
    },
    backPrev(){
      //回上一页
      this.$router.go(-1)
    }
  },
  filters:{ //过滤器
  
  },
  directives:{ //自定义指令
    
  }
}
</script>

<style>
input[type="text"]{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
