

Page({
  data:{
    address: "点击选择地址",
    success:  false
  },
  staticData: {


  },
  choose: function () {
    var that = this; 
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#f7982a", 
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImageShop('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImageShop('camera')
          }
        }
      }
    })
  }, 
  chooseWxImageShop: function (type) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        for (var index in res.tempFilePaths) {
          that.upload_file(API_URL + 'shop/shopImage', res.tempFilePaths[index])
        }
      } 
    })
  },
  upload_file: function (url, filePath) {
    var that = this;
    wx.uploadFile({
      url: url,
      filePath: filePath,
      name: 'uploadFile',
      header: {
        'content-type': 'multipart/form-data'
      }, // 设置请求的 header 
      formData: { 'shopId': wx.getStorageSync('shopId') }, // HTTP 请求中其他额外的 form data 
      success: function (res) {
        wx.showToast({
          title: "图片修改成功",
          icon: 'success',
          duration: 700
        })
      },
      fail: function (res) {
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