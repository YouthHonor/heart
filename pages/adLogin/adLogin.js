Page({
  data: {

  },
  form_submit: function (e) {
    var account = e.detail.value.account;
    var password = e.detail.value.password;
    var subPassword = e.detail.value.subPassword;
    var that = this;
    var warn = "";
    //先判断输入信息是否有为空
    if (account == "") {
      warn = "账号不能为空";
      wx.showToast({
        title: warn,
        icon: 'error',
      })
      return;
    } else if (password == "") {
      warn = "密码不能为空";
      wx.showToast({
        title: warn,
        icon: 'error',
      })
      return;
    } else if (subPassword != password) {
      warn = "两次密码不一致，请重新输入";
      wx.showToast({
        title: warn,
      })
      return;
    } else {
      var that = this;
      wx.request({
        url: 'http://loaclhost:8888/index',
        data: {
          zh: that.account
        },
        dataType: "JSON",
        success: function (res) {
          if (res == true) {
            //注册成功，跳转
            wx.showModel({
              title: '登陆状态',
              content: "登陆成功,页面即将跳转",
              success: function (res) {
                if (res.confirm) {
                  wx.redirectTo({
                    //跳转到主页
                    url: '/pages/verify/verify?account=' + that.account + '&password=' + that.password + ''
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