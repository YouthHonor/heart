Page({
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  data: {
    xyId:"",
    pickName:"",
    pickPhone:"",
    pickDate:"",
    date:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      xyId:options.xyId
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  handleNameChanges:function(e){
    this.setData({
      pickName:e.detail.value
    })
  },
  handleContactChanges:function(e){
    this.setData({
      pickPhone:e.detail.value
    })
  },
  handleSubmit:function(){
    wx.request({
      url: 'http://localhost:8080/pick',
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data:{
        xyId:that.data.xyId,
        pickName:that.data.pickName,
        pickPhone:that.data.pickPhone,
        date:that.data.date
      }
    })
  }
})