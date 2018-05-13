Page({
  data: {
    pick_info: []
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: "http://118.25.13.61/wx_servlet_war/queryMyPick",
      data: {
        openId: getApp().globalData.open_id
      },
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        that.setData({
          pick_info: res.data
        })
      }
    })
  },
})