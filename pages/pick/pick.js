Page({
  data: {
    pick_info: []
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: "http://localhost:8080/queryMyPick",
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