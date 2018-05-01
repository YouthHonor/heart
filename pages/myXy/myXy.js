Page({
  data: {
    myXy_info: ""
  },
  onLoad: function () {
    var that = this;
    wx.request({
      /*存放预约服务信息的url*/
      url: '',
      header: {
        "Content-Type": "json"
      },
      success:function(res){
        that.setData({
          /*这个不知道写什么,假装和后台交互好了*/
          myXy_info:res.data
        })
      }
    })
  }
})