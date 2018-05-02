Page({
  
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
    
  }
})
