<template>
	<div id="single-blog">
		123456
	</div>
</template>

<script>
// import axios from 'axios'
	export default{
		name:"single-blog",
		data(){
			return{
				blog:{}
			}
		},
		created(){
			
		},
		methods:{
		
		},
		filters:{ //过滤器
    	
		}
	}
</script>
<style>
	#single-blog{
		max-width: 960px;
		margin: 0 auto;
		padding: 20px;
		background: #eee;
		border: 1px dotted #aaa;
	}
	#single-blog h1{
		font-size:20px;
		color:#ff0000;
		padding:20px 0;
	}
	#single-blog article{
		line-height:3.2vw;
		color:#999;
		padding:2vw;
		margin-bottom:2vw;
		background-color:#fff;
		border-top:1px solid #999;
		border-bottom:1px solid #999;
	}
	#single-blog ul li{
		display:block;
		padding:1.8vw 0;
		font-size:2.2vw;
		text-align:left;
		border-bottom:1px solid #BEBEBE;
		/* background-color:#fff; */
	}
	button,
	.editBtn{
		font-size:2vw;
		color:#fff;
		background-color:#666;
		border-style:none;
		border-radius: 8px;
		margin-top:2.5vw;
		padding:1.8vw;
		cursor: pointer;
	}
</style>