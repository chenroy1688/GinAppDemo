export default{
    //会员登录后 存入state会员登入账号,密码
    loginVal(state,val){
        console.log('vvvv',val)
        state.userInfo = val //修改state.userInfo的值 登入后拿到的值
    },
    //更改会员等级 state
    setMemberInfo(state,val){
        console.log('更改会员等级',val)
        state.userStatus = val.userStatus; //写入state 会员等级状态
        state.vipLevel = val.vipLevel //写入state 会员等级
    }
}