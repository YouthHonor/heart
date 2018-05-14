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
        '/images/gundong.jpg',
        '/images/gundong1.jpg',
        '/images/gundong2.jpg'
      ],
      indicatorDots: true,
      autoplay:true,
      interval: 5000,
      duration: 1000,
      longitude:"",
      latitude:"",
      markers:[],
      controls: [{
      
        iconPath: '/images/weizhi1.png',
        position: {
          left: (app.globalData.windowWidth/2)-12.5,
          top: ((app.globalData.windowWidth-140) / 2)-25,
          width: 25,
          height: 25
        }
      },{
        
        id: 1,
        iconPath: '/images/weizhi2.png',
        position: {
          left: 20,
          top: app.globalData.windowWidth-190,
          width: 30,
          height: 30
        },
        clickable: true
      }],
      

    },


  controltap: function () {
  this.mapCtx.moveToLocation();
  },
  
  onReady() {
    this.mapCtx = wx.createMapContext('map')

  },

    onShow:function(){
      this.getLocation();
      this.getMessages();
    },
    getMessages() {
      wx.request({
        url: 'http://118.25.13.61/wx_servlet_war/map',
        data: {

        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: this.getMessageSucc.bind(this)

      })
    },
    getMessageSucc(res) {
      const data = res.data;
      const arr = data.map((value, index) => {
        return {
          iconPath: "/images/yirenzheng.png",
          id: value.id,
          latitude: value.latitude,
          longitude: value.longitude,
          width: 36,
          height: 36
        }
      });
      
      console.log(arr);
    },

    handleMakerTap(e) {
      wx.navigateTo({
        url: '/pages/support/support?xyId=' + xyId
      })
    },
    //获取经纬度，待完善
    getLocation: function(){
      wx.getLocation({
        type: 'gcj02',
        success: this.handleGetLocationSucc.bind(this)
        
      })
    },

    handleGetLocationSucc(res) {
      this.setData({
        longitude: res.longitude,
        latitude: res.latitude
      })

    },

  onLoad: function () {
    

  },
  tell : function (){
    wx.makePhoneCall({
      phoneNumber: '021-22062659' //仅为示例，并非真实的电话号码
    })
  },

  
 f2 :function(event){
    wx.navigateTo({
      url: '/pages/wish/wish',
    })
  }
})
