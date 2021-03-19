<template>
	<div id="login" class="login">
		<div class="text-center">
			<img src="../../static/tag_pic.jpg" alt="Image">
			<span class="login-span">音速体育直播</span>
		</div>
		<!-- 登陆表单 -->
		<form @submit.prevent="login">
			<div class="form-group">
				<label v-rainbow>帐号</label>
				<input type="text" class="form-control" v-model="form.account" placeholder="请输入帐号" required>
			</div>
			<div class="form-group">
				<label v-rainbow>密码</label>
				<input type="password" class="form-control" v-model="form.password" placeholder="请输入密码" required>
			</div>
			<div>帐密 : aaaa / 0000</div>
			<button type="submit" class="btn_full">登录</button>
			<!-- <a href="javascript:void(0)" class="btn_full" @click.enter="login">登录</a> -->
		</form>
	</div>
</template>

<script>
//引入vuex
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import store from '../store'

export default{
	name:"single-blog",
	data(){
		return{
			titleInfo:'音速直播課程',
			//會員登入數據
			form:{
				account:'',
				password:''
			}
		}
	},
	created(){
		
	},
	computed:{
	},
	methods:{
		login(){
			//模拟登入
			if(this.form.account === 'aaaa' && this.form.password === '0000'){
					alert('您已登入成功!!')
					localStorage.setItem('token','isLogin') //存入localStorage

					store.commit('loginVal',{
						account: this.form.account, //会员账号
						password: this.form.password //会员密码
					});

					//登入后 从后台取得会员等级状态
					store.commit('setMemberInfo',{
						userStatus : 0, //会员等级状态
						vipLevel : 1 //会员等级
					})

					//导回首页
					this.$router.push('/');
			}else{
				alert('帐号或密码错误!!请重新输入!!');
				this.form = {}
			}
		}
	}
}
</script>

<style>
	input,button,select,textarea{font-family:inherit;}
	*:before,*:after{
		box-sizing:border-box;
	}
	.row{
		margin:0 -5vw;
	}
	#login{
		margin:0 auto;
		color:#333;
		text-align:center;
		background-color:#ddd;
		box-shadow:0 0 5px rgba(0,0,0,.4);
		padding:1.5vw;
	}
	.text-center{
		text-align:center;
	}
	span.login-span{
		display:block;
		font-size:4.3vw;
		letter-spacing: 1.3vw;
		padding:6vw 0;
		margin-bottom:4vw;
		border-bottom:1px solid #bbb;
	}
	form{
		display:block;
		margin:0;
	}
	.form-group{
		margin-bottom:4vw;
	}
	label{
		display:inline-block;
		max-width:100%;
		margin-bottom:2.5vw;
		/* font-weight:bold; */
		font-size:4.5vw !important;
	}
	.form-control{
		display: block;
		width:100%;
		font-size:2.5vw;
		padding:3vw;
		color:#000;
		border-radius: 5px;
		background-color:#fff;
	}
	a.btn_full,a.btn_full_outline,
	button.btn_full
	{
		border:none;
		color:#fff;
		width:100%;
		cursor:pointer;
		background-color:#000;
		padding:2.5vw 1.5vw;
		outline:none;
		font-size:2vw;
		transition:all 0.3s;
		border-radius: 1vw;
		text-transform:uppercase;
		font-weight: bold;
		display:block;
		text-align:center;
		margin-bottom:1.5vw;
	}
	
	button{
		font-size:2vw;
		color:#fff;
		background-color:#ddd;
		border-style:none;
		border-radius: 8px;
		margin-top:2.5vw;
		padding:1.8vw;
		cursor: pointer;
	}
</style>