//其他页面
import Header from './components/common/Header.vue' //header
import Foot from './components/common/foot.vue' //foot
import Navbottom from './components/Navbottom.vue' //导航

export default[
	{//登入页
		path:"/login",
		name:'login',
		component:() => import('./pages/login.vue')
	}, 
	{//登入后 首页
		path:"/",
		name:'index',
		components:{
			default:resolve => require(['./pages/index.vue'],resolve),
			header:Header, 
			foot:Foot,
			Navbottom:Navbottom //底部导航
		}
	},
	{//用户中心
		path:'/userCenter',
		name:'userCenter',
		components:{
			default:resolve => require(['./pages/userCenter.vue'],resolve),
			header:Header,
			foot:Foot,
			Navbottom:Navbottom
		}
	},
	{//产品详细页
		path:'/prodDetail/:id', //带入该则详细产品id
		name:'prodDetail',
		components:{
			default:resolve => require(['./pages/prodDetail.vue'],resolve),
			header:Header,
			foot:Foot,
			Navbottom:Navbottom
		}
	},
	{ //以上路由都没有 导回首页
		path:'*',
		redirect:'/'
	}
]