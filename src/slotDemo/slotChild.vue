<template>
  <div id="slot-demo" class="boss">
    <h2>子組件插槽</h2>
      <!-- 子組件插槽 -->
      <!-- 匿名插槽 -->
      <!-- <slot name="top">淞滬會戰</slot>
      <slot name="center"></slot>
      <slot name="footer"></slot> -->
      <slot :one="father2"></slot>
      <!-- 具名~作用域插槽 :getFather传回fahter2数据 给父层更新 -->
      <slot name="hasName" :users="father1"></slot>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'slot-demo',
  data () {
    return {
      father1:{
        name:'父组建1数据',
        age:22
			},
      father2:{
        name:'父组建2数据',
        age:44
      }
    }
  },
  methods:{
   
  },
  created(){
 
  }
}
</script>

<style scoped>
.boss{
  background:#ddd;
  padding:15px;
}
h2{
  color:#ff0000;
}
</style>
