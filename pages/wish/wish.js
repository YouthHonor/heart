

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
    longitude:""

  },
  staticData: {


  },
  
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 9, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
        var tempFilePath = res.tempFilePaths[0];
        new AV.File('file-name', {
          blob: {
            uri: tempFilePath,
          },
        }).save().then(
          file => console.log(file.url())
          ).catch(console.error);
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
        latitude:that.data.latitude
        
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
      }
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