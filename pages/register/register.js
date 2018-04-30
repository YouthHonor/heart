Page({
  data:{
    items:[
      {
        indentification:'qz',value:'群众',checked:true
      },
      {
        indentification: 'dy', value: '党员'
      }
    ],
    indentification:'',
    address:''
  },
  radioChange:function(e){
    this.setData({
      indentification:e.detail.value
    })
  },
  form_submit:function(e){
    var uname = e.detail.value.uname;
    var password = e.detail.value.password;
    var phoneNumber = e.detail.value.phoneNumber;
    var that = this;
    var warn = "";
    //先判断输入信息是否有为空
    if (uname==""){
      warn = "名字不能为空";
      wx.showToast({
        title: warn,
        icon: 'error',
      })
      return;
    } else if (phoneNumber==""){
      warn = "手机号不能为空";
      wx.showToast({
        title: warn,
        icon: 'error',
      })
      return;
    }else{
      var that = this;
      wx.request({
        url: 'http://loaclhost:8888/index',
        data:{
          zh:that.account
        },
        dataType:"JSON",
        success:function(res){
          if(res==true){
            //注册成功，跳转
            wx.showModel({
              title:'修改状态',
              content:"修改成功,页面即将跳转",
              success:function(res){
                if(res.confirm){
                  wx.redirectTo({
                    //跳转到主页
                    url: '...?uname='+that.account+'&phoneNumber='+that.phoneNumber
                  })
                }
              }
            })
          }
        }
      })
    }

  }

})