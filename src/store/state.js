export default{
    userInfo:'', //判断是否登入状态(账号,密码)
    userStatus:'', //0 -> 普通, 1 -> vip, 2 -> 高級vip
    vipLevel: '', //vip等級
    vipList : [ //vip等级 数据
        { name:'普通会员',charge:'10.00',vipLevel:1,userStatus:0 }, //普通会员
        { name:'VIP会员',charge:'50.00',vipLevel:2,userStatus:1 }, //VIP会员
        { name:'VIP高级会员',charge:'300.00',vipLevel:3,userStatus:2 } //VIP高级会员
    ],
    msg:19520,
    todos:[ 
        { id:1,text:'这是测试数据AAA',done:true },
        { id:2,text:'this is a book',done:false },
        { id:3,text:'that is a dog',done:true },
    ]
}