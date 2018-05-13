// pages/home/home.js
var app = getApp();
Page({

  onLoad: function (options) {
    if(app.appData.userinfo == null){
      wx.redirectTo({
        url: '/pages/about/about',
      })
    }
  },
  f1: function(){
    wx.navigateTo({
      url: '/pages/wish/wish'
    })
  }

})