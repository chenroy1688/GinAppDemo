<template>
    <footer :zip-code.sync="zipCode" :class="['foot',{'foot_bg':footerStyle.bg}]">
        <!-- 底部 QRcode 主选项 -->
        <div class="foot_mainInfo">
            底部资讯
        </div> <!-- end foot_mainInfo -->
        <!-- 底部 联系我们 -->
        <div class="footer_info">
            <span>{{ footInfo.info }}</span>
            <span>联系我们 ｜ 合作邮箱 ： {{ footInfo.mail }} ｜ QQ客服 ： {{ footInfo.QQ }}</span>
        </div>
    </footer>
</template>

<script>
export default {
   data(){
       return{
            footerStyle:{
                bg:true,
                txt:true
            },
            footInfo:{
                info:'Copyright@ 2017 ALL Right Reserved',
                areaCode:'+86',
                mail:"3217324595@qq.com",
                QQ:'3217324595'
            },
            zipCode:'1111'
       }
   }
}
</script>

<style scoped>
/* ------------------------------
        footer 底部区块
------------------------------ */
.foot_bg{
  border-top:2px solid #00FFCC;
}
footer{
  position:relative;
  width:100%;
  height:180px;
  box-sizing:border-box;
  background-color:#333;
  overflow:hidden;
  z-index:1;
}
/*  底部 logo 主选单  */
footer .foot_mainInfo{
        width:100%;
        height:8vw;
        text-align:center;
        padding-top:6vw;
        color:#fff;
        margin:0 auto;
}


footer .footer_info{
	position:absolute;
	bottom:0;
	width:100%;
	height:62px;
	background-color:#33CCFF;
	overflow:hidden;
}
footer .footer_info span{
	color:#fff;
	font-size:14px;
	line-height:62px;
}
footer .footer_info span:first-child{
	padding-left:40px;
}
footer .footer_info span:last-child{
	padding-right:40px;
	float:right;
}

</style>