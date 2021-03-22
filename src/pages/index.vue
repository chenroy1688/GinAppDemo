<template>
	<!-- 首页 content -->
	<div class="indexPage">
		<h1 v-rainbow>音速体育直播</h1>
		<section>
			<p class="indexPage-title">
				尊敬的 <span class="accColor">{{ userInfo.account }}</span> <!-- this.$store.getters.getMemType -->
				<span>欢迎来到音速直播999</span>
			</p>
			<div class="indexPage-classType">
				<ul><!-- 渲染数据 -->
					<li v-for="(item,index) in prodData" :key="index">
							<div class="divLeft">
								<!-- "'/prodDetail/' + item.id" 带入该则产品详细id -->
								<router-link :to="'/prodDetail/' + item.id">
									<img :src="item.src"/>
								</router-link>
							</div>
							<div class="divRight">
								<h2>{{ item.title }}</h2>
								<p>{{ item.content }}</p>
								<p class="charge_p">价格 : {{ item.charge }}</p>
							</div>
					</li>
				</ul>
			</div>
			<!-- <button tyle="button" class="footer-opt" @click="recharge">充值</button> -->

			<!-- <ul v-for="set in sets">
				<li v-for="a in even(set)" class="sets">
					{{ a }}
				</li>
			</ul> -->
		</section>
	</div>
</template>

<script>
	//引入vuex
	import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
	//引入封装api接口
	// import { prodDataApi } from '../api/api'
	import slotchild from '../slotDemo/slotChild.vue'

	export default{
		components:{
			slotchild
		},
		data(){
			return{
				prodData:[], //课程数据
				//课程数据
				classDatas:[
					{ 
						id:1,
						title:'学习Vue课程',
						src:'../../static/tag_pic.jpg',
						content:'这是说明文字',
						charge:190,
					},
					{ 
						id:2,
						title:'进阶2课程',
						src:'../../static/tag_pic2.jpg',
						content:'这是说明文字',
						charge:360,
					},
					{ 
						id:3,
						title:'php进阶3课程',
						src:'../../static/tag_pic3.jpg',
						content:'这是说明文字',
						charge:560,
					},
					{ 
						id:4,
						title:'课程004',
						src:'../../static/tag_pic4.jpg',
						content:'这是说明文字',
						charge:1000,
					}
				],
				sets: [
						[ 1, 2, 3, 4, 5 ], 
						[6, 7, 8, 9, 10]
					]
			}
		},
		mounted(){
			this.getProdsData()
		},
		computed:{
			...mapState(['userStatus','vipLevel','userInfo']),
			//从vuex取出getters 处理后数据
			...mapGetters(['getMemType','doneTodos','doneTodosLen'])
		},
		methods:{
			// getDD(){
			// 	 this.$http.get('../../static/prdDatas.json')
			// 		.then(res => {
			// 			this.prodData = res.data
			// 		})
			// 		.catch(res => {
			// 			console.log('请求错误!!')
			// 		})
			// },
			getProdsData(){
				this.$http.get('./static/prdDatas.json')
				.then(res =>{
					this.prodData = res.data
				})
				.catch(res => {
					console.log('请求错误!!')
				})
			},
			//获取产品数据
			// getProdsData(){
			// 	prodDataApi()
			// 		.then(res => {
			// 			this.prodData = res.data;
			// 		})	
			// },
			// recharge(){
			// 	this.$router.push('/userCenter')
			// },
			even(numbers){
				return numbers.filter(item => {
					return item % 2 === 0
				})
			}
		
		},
		filters:{ //过滤器
    	
		}
	}
</script>

<style>
/* .boss{border:1px solid #ff0000;} */
.accColor{
	color:#0000ff !important;
	}
.sets{
	display:block;
	padding:0.5vw;
	border:1px solid #ff0000;
}
.indexPage-classType a{
	display:inline-block;
	width:100%;
}
.indexPage{
	width:90%;
	margin:4vw auto;
}
.indexPage section{ margin-bottom:25vw }
.indexPage h1{
	font-size:6.5vw;
}

section .indexPage-title{
	font-size:2.3vw;
	color:#999;
	padding:4.5vw 0;
}
section .indexPage-title span{
	color:#d81e2b;
}

section .indexPage-classType{
	width:100%;
}
section .indexPage-classType ul li{
	display:flex;
	flex-direction:row;
	width:inherit;
	margin:0;
	box-sizing: border-box;
}
section .indexPage-classType ul li:first-child
{
	border-top:1px solid #aaa;
}
section .indexPage-classType div{
	padding:2vw 3vw;
	text-align:left;
	border-bottom:1px solid #aaa;
}
section .indexPage-classType div.divLeft{
	/* flex:1 1 auto; */
	width:35%;
	text-align:center;
	border-right:1px solid #aaa;
}
section .indexPage-classType div.divRight{
	width:65%;
}
section .indexPage-classType div.divRight h2{
	font-size:2vw;
	color:#d81e2b;
	padding:0 0 2vw 0;
}
section .indexPage-classType div.divRight p{
	font-size:1.5vw;
	line-height:2.5vw;
}

section .indexPage-classType div.divRight p.charge_p{
	font-size:3vw;
	padding:1.5vw 0;
	color:#0000ff;
}

.class-opt{
	width:20%;
	color:#fff;
	font-size:2vw;
	margin:1.5vw 0;
	padding:3vw 0;
	background-color:#000;
}


@media screen and (max-width:640px) {
	section .indexPage-classType div.divRight h2{
		font-size:2.8vw;
		padding:2vw 0;
	}
	section .indexPage-classType div.divRight p{
		font-size:2.2vw;
		line-height:3vw;
	}
	/* button{padding:0 !important} */
}
@media screen and (max-width:480px) {
	section .indexPage-classType div.divRight h2{
		font-size:2.8vw;
	}
	section .indexPage-classType div.divRight p{
		font-size:2.5vw;
		line-height:4vw;
	}
}
@media screen and (max-width:320px) {
	section .indexPage-classType div.divRight p{
		line-height:4.5vw;
	}
}
</style>