<template>
  <!-- 底部导航 nav -->
      <div id="nav" class="nav">
            <router-link to="/">
                <i class="iconfont icon-home3"></i>
                HOME
            </router-link>
            <router-link to="/userCenter">
                <i class="iconfont icon-home3"></i>
                ABOUT
            </router-link>
            <router-link to="/">
                <i class="iconfont icon-home3"></i>
                PROD
            </router-link>
            <router-link to="/">
                <i class="iconfont icon-home3"></i>
                FOOT
            </router-link>
      </div>
</template>

<script>

export default {
  name: 'nav',
  data () {
    return {
      mag:''
    }
  },
  computed:{
   
  },
  methods:{
    
  }
}
</script>

<style scoped>
.isActive{
  background:#999;
}
.nav{
  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  margin:0;
  background-color:#666;
  overflow:hidden;
}
.nav a {
  display:block;
  width:25%;
  height:15vw;
  line-height:15vw;
  font-size:2vw;
  color:#fff;
  text-align:center;
  float:left;
}
.nav i{
  padding-right:1.3vw;
}
</style>
