Page({
  data:{

  },
  uname:"小明",
  /*
  onLoad:function(options){
    var that = this;
    wx.request({
      url:"",
      success:function(res){
        that.setData({
          uname:res.data.uname
        })
      }
    })
  }
  */
  bindAppointment:function(){
    wx.navigateTo({
      url: '/pages/app/app',
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