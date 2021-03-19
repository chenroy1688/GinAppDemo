export default{
  //取得会员等级状态
  getMemType(state){
    //對照傳入值 返回對應會員等級
    switch(state.userStatus){
        case 0:
            return '普通会员';
            break;
        case 1:
            return "VIP会员";
            break;
        case 2:
            // return `高级${state.vipLevel}会员`;
            return '高级vip会员';
            break;
        default:
            return "普通会员";
            break;
    }

  },
  //筛选出 done为true
  doneTodos: state => {
    return state.todos.filter(item => item.done)
  },
  //引入其他getters 再次应用
  doneTodosLen: (state,getters) => {
    return getters.doneTodos.length
  }
}