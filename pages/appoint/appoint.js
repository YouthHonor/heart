Page({
  data: {
    myXy_info:[],
    isNull:false
  },
  onLoad: function () {
    var that = this;
    wx.request({
      /*存放预约服务信息的url*/
      url: 'http://localhost:8080/myService',
      data:{
        openId: getApp().globalData.open_id
      },
      method:"POST",
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