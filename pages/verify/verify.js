Page({
  data:{
    /*加个id属性*/
    infoArray:[],
    ifPass: [{ pass: "通过审核",value:"通过审核",checked:true},
             { pass: "拒绝申报",value:"拒绝申报"}
            ]
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
  radioChange:function(e){
    var id = e.currenTarget.dataset.xyId;
    var str = "infoArray["+id+"]"+".passFlag"
    this.setData({
      /*假设有个字段是审核状态的标志*/
      /*这里动态修改了infoArray里的passFlag,然后再把新的请求信息传过去*/
      [str] : e.currentTarget.dataset.passStatus
    })
  },
  submit:function(){
    /*后端是接收JSON数据的,算了吧，让他更新一下数据库把233*/
    var that = this;
    wx.request({
      url: '',
      method:"GET",
      data:{
        infoArray:that.data.infoArray
      },
      header: {
        "Content-Type": "json"
      },
      success:function(res){
        wx.navigateTo({
          /*跳回到入口页面*/
          url: '',
        })
      }

    })
  }

})
