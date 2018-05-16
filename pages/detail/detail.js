Page({
  data:{
    Flag: "",
    detail_info:[]
  },
  
  support: function () {
    wx.navigateTo({
      url: '/pages/support/support',
    })
  },
  report: function (event){
   wx.navigateTo({
     url: '/pages/report/report',
   })
  },
  onShareAppMessage: function () {
    
  },
  onLoad:function(options){
    var detailId = options.detailId;
    var that = this;
    wx.request({
      url: 'http://118.25.13.61/wx_servlet_war/detail',  
      method:"POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data:{
        xyId:detailId
      },
      success:function(res){
        that.setData({
          detail_info:res.data
        })
      }
    })
  }
})
