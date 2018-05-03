

Page({
  data:{
    address: "点击选择地址",
    success:  false,
    tempFilePaths: ''
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
      address:res.address
    });
    Object.assign(this.staticData,{
      latitude: res.latitude,
      longitude: res.longitude
    })
  },
  
  handleNameChanges(e){
    console.log(e.detail.value)
  },
  handleContactChanges(e){
    console.log(e.detail.value)
},
  handleServeTypeChanges(e) {
  console.log(e.detail.value)
},
  handleTypeChanges(e) {
    console.log(e.detail.value)
},
  handleMessageChanges(e) {
    console.log(e.detail.value)
},
  handleAddress(e){
    console.log(e.detail.value)
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },

handleSubmit() {
  if (this.data.address === "点击选择地址" || !this.data.address) {
    wx.showToast({
      title: '请输入地址',
      icon: 'loading',
      duration: 2000
    })
    return;
  }
},





  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
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