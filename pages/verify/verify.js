Page({
  data: {
    tabTxt: ['显示全部', '心愿形式', '地区', '认领状态'],//tab文案

    record: [],

    xyTypeFlag: "false",
    xyStreetFlag: "false",
    xyFlagFlag: "false",

    Type: "",
    Street: "",
    Flag: "",
  },
  //待审核和审核记录点击事件
  button1:function(){
   
      var that = this;
      wx.request({
        url: '',
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          that.setData({
            record: res.data
          })
        }
      })
  },
  button2: function () {

    var that = this;
    wx.request({
      url: '',
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        that.setData({
          record: res.data
        })
      }
    })
  },
  //通过审核的点击事件
  filter:function(){

  },
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

  onLoad: function (options) {
    this.setData({
      xyTypeFlag: "false",
      xyStreetFlag: "false",
      xyFlagFlag: "false"
    })
    var that = this;
    wx.request({
      url: 'http://118.25.13.61/wx_servlet_war/queryVerify',
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          record: res.data
        })
      }
    })

  },
  onShow: function () {
    this.setData({
      xyTypeFlag: "false",
      xyStreetFlag: "false",
      xyFlagFlag: "false"
    })
    var that = this;
    wx.request({
      url: 'http://118.25.13.61/wx_servlet_war/queryVerify',
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        that.setData({
          record: res.data
        })
      }
    })
  },

  jmpToDetail: function (event) {
    var detailId = event.currentTarget.dataset.detailId;
    console.log(detailId);
    wx.navigateTo({
      url: '/pages/admindetail/admindetail?detailId=' + detailId,
    })
  },
  state: function (event) {
    var xyId = event.currentTarget.dataset.xyId;
    wx.navigateTo({
      url: '/pages/support/support?xyId=' + xyId
    })
  }

})