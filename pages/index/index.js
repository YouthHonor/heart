//index.js
//获取应用实例
const app = getApp()

Page({
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '心愿墙',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

  data: {
      imgUrls: [
        '/images/首页滚动图.jpg',
        '/images/首页滚动图1.jpg',
        '/images/首页滚动图2.jpg'
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
    },
  onLoad: function () {
  },
  tell : function (){
    wx.makePhoneCall({
      phoneNumber: '021-22062659' //仅为示例，并非真实的电话号码
    })
  },
 f1 :function(event){
    wx.navigateTo({
      url: '/pages/viewmore/viewmore',
    })
  },
  f2: function(event){
    wx.navigateTo({
      url: '/pages/wish/wish',
    })
  },
  government:function(event){
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  }
})
