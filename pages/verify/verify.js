Page({
  data:{
    infoArray:[]
  },
  onLoad:function(){
    var that = this;
    /*获取那边的相应的未审核的心愿或者服务信息,填到数组里*/
    wx.request({
      url: '',
      method:'GET',
      header:{
        "Content-Type":"json"
      },
      success:function(res){
        var data = res.data;
        /*假设返回的是一个JSON对象数组*/
        that.setData({
          infoArray:data
        })
      },
      fail:function(res){
        console.log('get fail')
      },
      complete:function(res){
        console.log("get success")
      }
    })
  },

})