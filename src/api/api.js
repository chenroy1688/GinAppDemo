/**   
 * api接口统一管理
 */
//引入封装get,post方法
import {get,post} from './http'

//產品頁面請求
export const prodDataApi = () => get('./prdDatas.json');
//产品详细页数据请求
