Page({
  
  support: function () {

  },
  report: function (event){
   wx.navigateTo({
     url: '/pages/report/report',
   })
  },
  onShareAppMessage: function () {
    
  }
})
