Page({
  data:{
    user_info:[]
  },

  onLoad:function(options){
    var that = this;
    wx.request({
      url:"http://118.25.13.61/wx_servlet_war/mine",
      data:{
        openId:getApp().globalData.open_id
      },
      method:"POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success:function(res){
        that.setData({
          user_info:res.data
        })
      }
    })
  },

  onShow:function(){
    var that = this;
    wx.request({
      url: "http://118.25.13.61/wx_servlet_war/mine",
      data: {
        openId: getApp().globalData.open_id
      },
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        that.setData({
          user_info: res.data
        })
      }
    })
  },

  bindAppointment:function(){
    wx.navigateTo({
      url: '/pages/appoint/appoint',
    })
  },
  bindXy:function(){
    wx.navigateTo({
      url: '/pages/pick/pick',
    })
  },
  bindMyXy:function(){
    wx.navigateTo({
      url: '/pages/myXy/myXy',
    })
  },
  bindModi:function(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  }
})