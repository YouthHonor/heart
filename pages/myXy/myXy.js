  Page({
  data: {
    myXy_info:[],
    isNull:false
  },
  onLoad: function () {
    var that = this;
    wx.request({
      /*存放预约服务信息的url*/
      url: 'http://0xffff0.cn/wx_servlet_war/myXy',
      data:{
        openId: getApp().globalData.open_id
      },
      method:"GET",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success:function(res){
        /*后端返回空字符串*/
        if(res.data!== "null"){
          that.setData({
            myXy_info: res.data
          })
        }else{
          that.setData({
            isNull:true
          })
        }
      }
    })
  }
})