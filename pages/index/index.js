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
      autoplay:true,
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
      }],
      markers: ""

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
      this.getMessages();
    },
    //不同的图标跳转到详情页
    markertap:function(){
      var detailId = event.currentTarget.dataset.detailId;
      wx.navigateTo({
        url: '/pages/detail/detail?detailId=' + detailId,
        })
       
    },
    //获取经纬度，待完善
    getMessages(){
      wx.request({
        url: 'test.php', //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success: this.getMessageSucc.bind(this)
        
      })
    },
    getMessageSucc(res){
      const data =res.data.data;
      const arr = data.map((value,index)=> {
        return {
          iconPath: "/images/"+value.type+".png",
          id: value.id,
          latitude: value.latitude,
          longitude: value.longitude,
          width: 36,
          height: 36
        }
      });
      this.setData({
        markers:markers
      })
      console.log(arr);
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
