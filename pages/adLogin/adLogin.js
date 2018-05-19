var app = getApp();
Page({
  data: {
    account:"",
    password:""
  },
  form_submit: function (e) {
    var account = e.detail.value.account;
    var password = e.detail.value.password;
    var that = this;
    var warn = "";
    //先判断输入信息是否有为空
    if (account === "") {
      warn = "账号不能为空";
      wx.showToast({
        title: warn,
        icon: 'error',
      })
      return;
    } else if (password === "") {
      warn = "密码不能为空";
      wx.showToast({
        title: warn,
        icon: 'error',
      })
      return;
    } else {
      var that = this;
      wx.request({
        url: getApp().globalData.baseUrl +'adLogin',
        data: {
          zh: account,
          pas:password
        },
        method:"POST",
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        dataType: "JSON",
        success: function (res) {
          if (res.data == "true") {
            //登陆成功，跳转
            wx.showModal({
              title: '登陆状态',
              content: "登陆成功,页面即将跳转",
              success: function (res) {
                if (res.confirm) {
                  wx.navigateTo({
                    //跳转到主页
                    url: '/pages/verify/verify'
                  })
                }
              }
            })
          }else if(res.data == "false"){
            wx.showModel({
              title: '登陆状态',
              content: "登陆失败,请重新输入",
              success: function (res) {
                if (res.confirm) {
                  that.setData({
                    account:"",
                    password:""
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