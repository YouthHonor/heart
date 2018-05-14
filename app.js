//app.js
App({
  appData:{
  


  },
  globalData:{

  },
  onLaunch () {
    // 展示本地存储能力
    try {
      const res = wx.getSystemInfoSync()
      this.globalData.windowHeight =res.windowHeight;
      this.globalData.windowWidth =res.windowWidth; 
    } catch (e) {
      // Do something when catch error
    }
    wx.login({
      success: function (res) {
        console.log(res.code);
        if (res.code) {
          //发起网络请求
          var that = this;
          wx.request({
            url: 'http://118.25.13.61/wx_servlet_war/login',
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