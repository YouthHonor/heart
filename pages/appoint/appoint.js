Page({
  data:{
    service:""
  },
  onLoad:function(){
    var that = this;
    wx.request({
      /*存放预约服务信息的url*/
      url: '',
      success:function(res){
        that.setData({
          /*假装和后台交互好数据了*/
          service:res.data
        })
      }
    })
  }
})