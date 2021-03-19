import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'
import axios from 'axios'
import store from './store'
//引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//全局 -- 引入外部scss档案
// import './assets/style/total.scss'

Vue.use(ElementUI)
Vue.use(VueRouter)

// 全局配置
axios.defaults.baseURL = '../../static' //统一设定路径配置
// axios.defaults.headers.common['Authorization'] = 'Token' 请求头配置 token授权
// axios.defaults.headers.post['Content-type'] = 'application/urlencode'
// axios.defaults.headers.get['Accepts'] = 'application/json'
Vue.prototype.$http = axios

//引入css
import './assets/css/reset.css'  //重置设定
import './assets/css/common.css' //通用设定

import './assets/css/icon.css' //iconmoon字体图标

Vue.config.productionTip = false

// 自定义指令 (全局)
Vue.directive('rainbow',{
	bind(el,binding,vnode){
		el.style.color = '#' + Math.random().toString(16).slice(2,8); //隨機取出16進制色碼
		el.style.fontSize = '24px'
		el.style.fontWeight = 'bold'
	}
})

//binding绑定v-theme传入的参数 binding.value
// Vue.directive('theme',{
// 	bind(el,binding,vnode){
// 		if(binding.value == 'wide'){
// 			el.style.maxWidth = '1200px'
// 		}else if(binding.value == 'narrow'){
// 			el.style.maxWidth = '800px'
// 			el.style.border = '1px solid #ff0000'
// 		}

// 		//binding.arg 判断 v-theme:column="'narrow'" 是否带column参数
// 		if(binding.arg == 'column'){
// 			el.style.background = '#00ff00';
// 			el.style.padding = '25px'
// 			el.style.margin = '25px auto'
// 		}
// 	}
// })

// 自定义过滤器
// Vue.filter('to-uppercase',value => {
// 	return value.toUpperCase()
// })

//content限定字数
// Vue.filter('snippet',value =>{
// 	return value.slice(0,80) + '......'
// })

// 创建路由
const router = new VueRouter({
	linkActiveClass:'isActive', //选中路由的颜色
	routes: Routes,
	mode:"history"
})

//全局导航守卫 --- 判断登入
router.beforeEach((to, from, next) => {
	const isLogin = localStorage.getItem('token') == 'isLogin'
	//路由发生变化修改页面title to为前往的目标页
	if(to.meta.title) document.title = to.meta.title
	next()

	//登入校验
	if(store.state.userInfo || isLogin){
		next()
	}else{
		if(to.path !== '/login') //判断路径不为/login
			next('/login') //一律导回login page
		else
			next()
	}

	//判断是否登入 另一种写法
	// if(store.state.userInfo || to.path === '/login'){
	// 	next()
	// }else{
	// 	next({ //未登入统一导向登入页
	// 		path:'/login'
	// 	})
	// }
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App },
  router:router
})
