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
      duration: 1000,
      longitude:"",
      latitude:"",
      controls: [{
      
        iconPath: '/images/位置 (1).png',
        position: {
          left: (app.globalData.windowWidth/2)-12.5,
          top: ((app.globalData.windowWidth-140) / 2)-25,
          width: 25,
          height: 25
        }
      },{
        
        id: 1,
        iconPath: '/images/位置_32.png',
        position: {
          left: 20,
          top: app.globalData.windowWidth-190,
          width: 30,
          height: 30
        },
        clickable: true
      }]
    },

  handleGwtLocationSucc(res) {
    this.setData({
      longitude: res.longitude,
      latitude: res.latitude
    })
    console.log(res);
  },
  controltap(){
  this.mapCtx.moveToLocation();
  },
    onShow:function(){
      this.getLocation();
    },
    onReady(){
      this.mapCtx = wx.createMapContext('map');
    },
    getLocation(){
      wx.getLocation({
        type: 'gcj02',
        success: this.handleGwtLocationSucc.bind(this)
        
      })
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
      url: '/pages/wishList/wishList',
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
