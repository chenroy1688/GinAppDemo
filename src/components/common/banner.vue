<template>
	<div class="banner" id="banner">
		<!-- 上一张&下一张 -->
		<div class="banner_left" @click="prev"></div>
		<div class="banner_right" @click="autoPlay"></div>
		<!-- 轮播图 -->
		<img v-for="(pic,index) in img" :src="pic" :key="index" v-show="index == n"/>
		<!-- banner 选择 -->
		<ul class="banner-circle bos">
			<!-- 轮播图小圆点切换 -->
			<li v-for="(pics,index) in img" :key="index" :class="n == index ? 'selected' : ''" @click="n = index"></li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"banner",
		data(){
			return{
				n:0,
				//轮播图  '../../../static/bannerPic/banner1.jpg' (放在static资料夹无需用require)
				img:[ 
						require('../../assets/image/banner1.jpg'),
						require('../../assets/image/banner2.jpg'),
						require('../../assets/image/banner3.jpg'),
					]
			}
		},
		mounted(){ //载入DOM就执行
			this.play()
		},
		computed:{
		},
		methods:{
			play(){
				//美4秒执行轮播
				setInterval(this.autoPlay,5000)
			},
			autoPlay(){
				//轮播图下一张
				this.n++; 
				//banner循环控制
				if( this.n == this.img.length ) this.n = 0;
			},
			prev(){ //上一张图
				this.n--;
				if(this.n < 0) this.n = 2
			}
		}
	}
</script>
<style>
.banner{
	position:relative;
	border-bottom:1px solid #666;
}

.banner .banner_left,
.banner .banner_right
{
	position:absolute;
	top:50%;
	color:#fff;
	padding:2.8vw;
	transform:translate(0,-50%);
	border-radius: 2.4vw;
	background:rgba(215,37,49,0.7);
}
.banner .banner_left{ left:4vw; }
.banner .banner_right{ right:4vw; }
.banner .banner_left:before{
	content:'◁';
	font-size:5.4vw;
}
.banner .banner_right:before{
	content:'▷';
	font-size:5.4vw;
}
.banner img{
	background-size: contain;
}
.banner .banner-circle{
	position:absolute;
	bottom:0;
	left:50%;
	width:31vw;
	padding:1.8vw;
	transform:translate(-50%,-50%);
	background:rgba(0,0,0,0.7);
}
.banner-circle li{
	display:inline-block;
	width:2.8vw;
	height:2.8vw;
	line-height: 2.8vw;
	border:2px solid #ff0000;
	border-radius: 50%;
}
.banner-circle li.selected{
	background-color:#fff;
}

/* 手機板 RWD設定 */
@media screen and (max-width:1024px) {
}
@media screen and (max-width:992px) {

}
@media screen and (max-width:768px) {

}
@media screen and (max-width:640px) {

}
@media screen and (max-width:480px) {
}
@media screen and (max-width:414px) {
}
@media screen and (max-width:400px) {

}
@media screen and (max-width:375px) {
	.banner .banner-circle{
		width:38vw;
	}
}
@media screen and (max-width:320px) {
	.banner .banner-circle{
		width:43vw;
	}
}
</style>