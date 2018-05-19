var app = getApp();
Page({
  data: {
    array: [ '政治敏感', '违法', '广告','虚假','其他'],
    objectArray: [
      {
        id: 0,
        name: '政治敏感'
      },
      {
        id: 1,
        name: '违法'
      },
      {
        id: 2,
        name: '虚假'
      },
      {
        id: 3,
        name: '其他'
      }
    ],
    success: false,

    reporttype:"匿名",
    reportcase: "",
    reportdetail:""
  
    
  },
  staticData :{
    
  },
  bindPickerChange: function (e) {
    console.log( e.detail.value)
    var recase = e.detail.value;
    this.setData({
       reportcase : recase
    })
   

},
  radioChange: function (e) {
    console.log( e.detail.value)
    var rety = e.detail.value
    this.setData({
      reporttype : rety
    }) 

  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
    var rede = e.detail.value
    this.setData({
      reportdetail : rede
    }) 
  },
  


  handleSubmit(){
    console.log(123)
  },
   











  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '举报',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }

})