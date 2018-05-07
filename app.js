//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力

    wx.login({
      success: function (res) {
        console.log(res.code);
        if (res.code) {
          //发起网络请求
          var that = this;
          wx.request({
            url: 'http://localhost:8080/login',
            data: {
              code: res.code
            },
            success: function (res) {
              getApp().globalData.open_id = res.data;
              console.log(res.data);
              console.log(getApp().globalData.open_id)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

  },


  globalData: {
    open_id: null
  }
})