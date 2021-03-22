<template>
  <div id="app">
      <!-- header 主選單 -->
      <transition name="fade" mode="out-in">
          <router-view name="header"></router-view>
      </transition> 
      <!-- content 內容 -->
      <!-- 所有match 到的组件 都能被缓存 -->
      <keep-alive exclude="Detail">
          <transition name="fade" mode="out-in">
              <router-view></router-view>
          </transition> 
      </keep-alive>

      <!-- 底部导航 -->
      <transition name="fade" mode="out-in">
          <router-view name="Navbottom" class="none"></router-view>
      </transition>
  </div>
</template>

<script>
//底部导航组件
// import NavBottom from './components/Navbottom.vue' 

export default {
  name: 'app',
  data(){
    return{
    
    }
  },
  components:{
    // NavBottom
  }
}
</script>

<style>
.none{
  display:none !important;
}
</style>
