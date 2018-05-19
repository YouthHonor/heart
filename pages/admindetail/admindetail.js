var app =getApp();
Page({
  data: {
    xyId:"",
    detail_info: []
  },

  
  //拒绝申请
  refuse:function(){
    var that = this;
    wx.request({
      url: 'getApp().globalData.baseUrl +verifyDeny',
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        xyId:that.data.xyId
      },
      success: function (res) {
        that.setData({
          
        })
        wx.redirectTo({
          url: '/pages/verify/verify',
        })
      }
    })


  },
  //通过审核
  accept:function(){
    var that = this;
    wx.request({
      url: 'getApp().globalData.baseUrl +verifyPass',
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        xyId: that.data.xyId
      },
      success: function (res) {
        that.setData({

        })
        wx.redirectTo({
          url: '/pages/verify/verify',
        })
      }
    })


  },

  onShareAppMessage: function () {

  },
  onLoad: function (options) {
    var detailId = options.detailId;
    this.setData({
      xyId:detailId
    })
    var that = this;
    wx.request({
      url: getApp().globalData.baseUrl +'detail',
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        xyId: detailId
      },
      success: function (res) {
        that.setData({
          detail_info: res.data
        })
      }
    })
  }
})
