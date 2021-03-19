<template>
  <div id="add-blog">
    <h2>编辑博客文章</h2>
    <form v-if="!submmited">
        <!-- 文章标题 -->
        <label>文章标题</label>
        <input type="text" v-model="blog.title"  required/>
        <!-- 文章内容 -->
        <label>文章内容</label>
        <textarea v-model="blog.content"></textarea>
        <!-- 技术选项 -->
        <div id="checkboxes">
            <label>Vue.js</label>
            <input type="checkbox" value="Vue.js" v-model="blog.categories">
            <label>Node.js</label>
            <input type="checkbox" value="Node.js" v-model="blog.categories">
            <label>React.js</label>
            <input type="checkbox" value="React.js" v-model="blog.categories">
            <label>Angular4</label>
            <input type="checkbox" value="Angular4" v-model="blog.categories">
        </div>
        <!-- 作者选项 -->
        <label>作者:</label>
        <select v-model="blog.author">
            <option v-for="author in authors" :key="author">
                {{ author }}
            </option>
        </select>
        <button @click.prevent="chkEdit">确定编辑文章</button>
    </form>
    <!-- 提交成功 -->
    <div v-if="submmited">
        <h3>编辑成功!</h3>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'add-blog',
  data () {
    return {
      id:this.$route.params.id, //从routes.js 取得该篇文章id
      blog:{
        title:"",
        content:"",
        categories:[],
        author:""
      },
      errors:[], //显示错误资讯
      authors:["爱米尔顿","亨利","巴克","罗伊","大王"], //option作者
      submmited:false //判断是否已提交文章表单
    }
  },
  methods:{
    fetchData(){
      this.$http.get('/posts/' + this.id +'.json')
        .then(res =>{
          this.blog = res.data
        })
    },
    //写入firebase数据
    chkEdit(){ //put方法为编辑写入数据库
        this.$http.put('/posts/' + this.id +'.json',this.blog)
              .then(res => {
                console.log(res)
                this.submmited = true //显示 添加成功
              })
              .catch(res => {
                console.log('error')
              })
    }
  },
  created(){
    //获取当下的数据对象
    this.fetchData()
  }
}
</script>

<style scoped>
#add-blog *{
  box-sizing: border-box;
}

#add-blog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}

label{
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}

textarea{
  height: 200px;
}

#checkboxes{
  margin-top:4vw;
}
#checkboxes input{
  width:2.5vw;
  height:2.5vw;
}
#checkboxes label{
  display: inline-block;
  font-size:2vw;
  color:#0000ff;
  margin-top: 0;
}

#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}

button{
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #999;
  background-color:#F0F0F0;
  margin: 30px 0;
}
#preview p{
  padding:5px 0;
}
#preview ul{
  padding:0;
}

h3{
  margin-top: 10px;
  padding:0 0 20px 0;
  font-size:18px;
  color:#ff0000;
}

</style>
