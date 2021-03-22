<template>
		<!-- Header -->
		<div class="headTop header-content" id="my">
			<header>
				GinApp / 帐号 : {{ userInfo.account }}
			</header>
			<!-- 圓形icon 主选单 -->
			<div class="header-category">
					<a :href="btn.href" class="category" v-for="(btn,index) in items" :key="index">
						<!-- 图标 -->
						<i class="iconfont" :class="btn.icon" :style="{background:btn.color}"></i> 
						<span>{{ btn.title }}</span>
					</a>
			</div>
			<!-- 轮播组件 -->
			<banner/>
			<!-- 插槽slot demo -->
			<slotChild class="none">
				<!-- 如果slotchild組件裡面沒有 定義slot時 寫在child標籤裡面的內容不會顯示 -->
				<!-- 具名插槽  -->
				<!-- <template v-slot:center> 
					<p style="color:black;">我是中間具名的插槽</p>
				</template>
				<template v-slot:footer>
					<p style="color:black;">我是底部具名的插槽</p>
				</template>
				<template v-slot:top>
					<p style="color:black;">我是上頭具名的插槽</p>
				</template>
				<p style="color:black;">這是一個預設的插槽</p> -->

				<!-- 作用域插槽 -->
				<template v-slot="{one}"> <!-- one对应子组件 绑定:one="" -->
					<p class="nameProps">作用域插槽11 ....... {{ one.name }}</p>
				</template>

				<!-- 作用域 具名插槽 -->
				<!-- slotProps接受从子组件传递数据更新 以hasName去判断 -->
				<template v-slot:hasName="slotProps">
					<p class="nameProps">我是具名插槽 ..... {{ slotProps.users }}</p>
				</template>
			</slotChild>
		</div>
</template>

<script>
	//引入vuex
	import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
	//引入轮播组件
	import Banner from './banner.vue'
	import slotChild from '../../slotDemo/slotChild.vue'

	export default{
		name:"blog-header",
		components:{
			Banner,
			slotChild
		},
		data(){
			return{
				headInfo:'音速直播给您最及时赛事',
				text:'这是父组件的应用数据',
				// father1:{
				// 	name:'父组建1数据',
				// 	age:22
				// },
				// father2:{
				// 	name:'父组建2数据',
				// 	age:44
				// },
				n : 0, //判斷倫波圖展示
				items:[ //选单数据
					{
						id:1,
						title:'首页',
						href:'/',
						icon:'icon-home3',
						color:'#d91f2c' //icon 顏色
					},
					{
						id:2,
						title:'选单2',
						href:'/userCenter',
						icon:'icon-newspaper',
						color:'#92d85c'
					},
					{
						id:3,
						title:'选单3',
						href:'/course',
						icon:'icon-film',
						color:'#908cfd'
					},
					{
						id:4,
						title:'选单4',
						href:'/',
						icon:'icon-tv',
						color:'#49dacf'
					},
					{
						id:5,
						title:'选单5',
						href:'/',
						icon:'icon-tv',
						color:'#999'
					},
					{
						id:6,
						title:'选单6',
						href:'http://www.yahoo.com.tw',
						icon:'icon-tv',
						color:'#0000ff'
					},
				],
			}
		},
		mounted(){ //载入DOM就执行
		},
		computed:{
			...mapState(['userInfo'])
		},
		methods:{
		
		}
	}
</script>

<style >
.none{
	display:none;
}
.bos{
	border:1px solid #ff0000;
}
header{
	width:100%;
	height:8vw;
	text-align:center;
	padding-top:3vw;
	font-size:2.5vw;
	color:#fff;
	background-color:#999;
}
ul{
	list-style-type: none;
	text-align: center;
	margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}

.header-category a{
  color: #fff;
  text-decoration: none;
  padding: 12px;
  border:1px solid #999;
}

.nameProps{
	color:green;
	padding:2.5vw 0;
}

/* 主選單 ----------------------------------------------------- */
.header-category{ overflow:hidden; }
.category{
	display:block;
	width:33.33333%;
	float:left;
	padding:6vw;
	background-color:#099797;
}
.category i{
	display:inline-block;
	width:6vw;
	height:6vw;
	line-height: 6vw;
	font-size:3.5vw;
	text-align:center;
	margin-right:1.2vw;
	border-radius: 50%;
	background-color:#d91f2c;
}
.category span{
	font-size:3.5vw;
}


/* 手機板 RWD設定 */
@media screen and (max-width:1024px) {
	.category{
		padding:3vw;
	}
	.category span{
		font-size:2.5vw;
	}
}
@media screen and (max-width:992px) {

}
@media screen and (max-width:768px) {

}
@media screen and (max-width:640px) {

}
@media screen and (max-width:480px) {
	.category i{
		width:8vw;
		height:8vw;
		line-height: 8vw;
		font-size:3.8vw;
	}
}
@media screen and (max-width:414px) {
	.category i{
		width:9vw;
		height:9vw;
		line-height: 9vw;
		font-size:4vw;
	}
	.category span{
		font-size:3.5vw;
	}
}
@media screen and (max-width:400px) {

}
@media screen and (max-width:375px) {
}
@media screen and (max-width:320px) {
}
</style>