

Page({
  data:{
    address: "点击选择地址",
    success:  false,
    tempFilePaths: '',

    /*提交字段*/
    xyName:"",
    xyPhone:"",
    xyType:"党员",
    wishType:"个人物质",
    xyRequest:"",
    xyDate:"",
    xyAdd:"",
    xyDeAdd:"",
    xyStory:"",
    openId:"",
    latitude:"",
    longitude:"",
    filePath:"",
    fileName:""

  },
  staticData: {


  },
  
  chooseimage: function () {
    var that = this
    // 上传图片 获取路径  
    wx.chooseImage({
      success: function (res) {
        console.log('临时路径：' + res.tempFilePaths[0])
        that.setData({
          filePath: res.tempFilePaths[0]
        })
        that.setData({
          fileName: that.data.filePath.substring(that.data.filePath.indexOf("_") + 1, that.data.filePath.indexOf("."))
        })
        console.log(that.data.fileName);
        console.log(res.tempFilePaths[0]);
        wx.uploadFile({
          url: 'https://www.kousisoft.com/wx_servlet_war/upload',
          filePath: res.tempFilePaths[0],
          header: {
            "Content-Type": "multipart/form-data"
          },
          name: 'image',
          formData:
          {
            /*看一下怎么起图片名*/
            fileName: that.data.fileName

          },
          success: function (res) {
            console.log("flag:" + res.data);
          }
        })




 
      }
    })
  },




  
  handleAddress1(){
    wx.chooseLocation({
      success:this.handleChoose.bind(this)
    })
  },

  handleChoose(res){
    this.setData({
      address:res.address,
      xyAdd:res.address, 
      longitude:res.longitude,
      latitude:res.latitude
    });
    Object.assign(this.staticData,{
      latitude: res.latitude,
      longitude: res.longitude,
    })

  },

  handleNameChanges(e){
    console.log(e.detail.value);
    var name = e.detail.value;
    this.setData({
      xyName:name
    })
  },
  handleContactChanges(e){
    console.log(e.detail.value)
    var phone = e.detail.value;
    this.setData({
      xyPhone:phone
    })
},
  handleServeTypeChanges(e) {
  console.log(e.detail.value)
  var Type = e.detail.value;
  this.setData({
    wishType:Type
  })
},
  handleTypeChanges(e) {
    console.log(e.detail.value)
    var Type = e.detail.value;
    this.setData({
      xyType:Type
    })
},
  handleMessageChanges(e) {
    console.log(e.detail.value)
    var request = e.detail.value;
    this.setData({
      xyRequest:request
    })
},
  handleAddress(e){
    console.log(e.detail.value)
    var address = e.detail.value;
    this.setData({
      xyDeAdd:address
    })
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
    var story = e.detail.value;
    this.setData({
      xyStory:story
    })
  },

handleSubmit:function() {
  if (this.data.address === "点击选择地址" || !this.data.address) {
    wx.showToast({
      title: '请输入地址',
      icon: 'loading',
      duration: 2000
    })
    return;
  } else if(this.data.xyName === "") {
    wx.showToast({
      title: '请输入名字',
      icon: 'loading',
      duration: 2000
    })
    return;
  } else if(this.data.xyPhone === ""){
    wx.showToast({
      title: '请输入联系方式',
      icon: 'loading',
      duration: 2000
    })
    return;
  } else if(this.data.xyRequest === ""){
    wx.showToast({
      title: '请输入具体需求',
      icon: 'loading',
      duration: 2000
    })
    return;
  } else if(this.data.xyDeAdd === ""){
    wx.showToast({
      title: '请输入具体需求',
      icon: 'loading',
      duration: 2000
    })
    return;
  } else{
    var that = this;
  
    wx.request({
      url:"http://118.25.13.61/wx_servlet_war/wish",
      method:"POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data:{
    
        xyName:that.data.xyName,
        xyPhone: that.data.xyPhone,
        xyType: that.data.xyType,
        wishType: that.data.wishType,
        xyRequest:that.data.xyRequest,
        xyAdd:that.data.xyAdd,
        xyDeAdd:that.data.xyDeAdd,
        xyStory:that.data.xyStory,
        xyDate:that.data.xyDate,
        openId: getApp().globalData.open_id,
        longitude:that.data.longitude,
        latitude:that.data.latitude,
        fileName:that.data.fileName
      },            
      success:function(res){
        that.setData({
          success:true
        });       
        wx.showToast({
          title: '许愿成功~',
          icon: 'loading',
          duration: 2000
        })
      },
      
    })
  }


},





  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value,
      xyDate: e.detail.value
    })
  },
  return_home:function(){
    wx.switchTab({
      url: "/pages/home/home",
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '我的心愿',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
















  
 
})