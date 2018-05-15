Page({
  data: {
    detail_info: []
  },
  //拒绝申请
  refuse:function(){
    var that = this;
    wx.request({
      url: '',
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        
      },
      success: function (res) {
        that.setData({
          
        })
        wx.navigateTo({
          url: '/pages/admindetail/admindetail',
        })
      }
    })


  },
  //通过审核
  accept:function(){
    var that = this;
    wx.request({
      url: '',
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {

      },
      success: function (res) {
        that.setData({

        })
        wx.navigateTo({
          url: '/pages/admindetail/admindetail',
        })
      }
    })


  },

  onShareAppMessage: function () {

  },
  onLoad: function (options) {
    var detailId = options.detailId;
    var that = this;
    wx.request({
      url: 'http://118.25.13.61/wx_servlet_war/detail',
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
