var app =getApp();
Page({
  data:{
    userName:null,
    phoneNumber:null,
    items: [
      {
        identification: '群众', value: '群众', checked: true
      },
      {
        identification: '党员', value: '党员'
      }
    ],

    ycList: [
      "亭湖区", "盐都区", "大丰区", "东台市",
      "建湖县", "射阳县", "阜宁县", "滨海县", "响水县"
    ],
    stList: [
      {
        name: "亭湖区",
        stLists: ["毓龙街道", "先锋街道", "文峰街道", "大洋街道", "五星街道",
          "黄海街道", "新城街道", "新洋街道", "伍佑街道", "南洋镇",
          "新兴镇", "步凤镇", "便仓镇", "盐东镇", "黄尖镇"]
      },
      {
        name: "盐都区",
        stLists: ["新都街道", "盐渎街道", "盐龙街道", "潘黄街道", "张庄街道",
          "楼王镇", "尚庄镇", "秦南镇", "学富镇", "龙冈镇", "郭猛镇",
          "大冈镇", "大纵湖镇"]
      },
      {
        name: "大丰区",
        stLists: ["大中街道", "丰华街道", "新丰镇", "草堰镇", "白驹镇", "刘庄镇",
          "小海镇", "西团镇", "大桥镇", "草庙镇", "万盈镇", "南阳镇", "三龙镇"
        ]
      },
      {
        name: "东台市",
        stLists: ["东台镇", "弶港镇", "五烈镇", "时堰镇", "梁垛镇", "头灶镇", "富安镇",
          "溱东镇", "安丰镇", "新街镇", "唐洋镇", "许河镇", "三仓镇", "南沈灶镇"]
      },
      {
        name: "建湖县",
        stLists: ["近湖街道", "钟庄街道", "塘河街道", "建阳镇", "恒济镇", "颜单镇",
          "沿河镇", "芦沟镇", "庆丰镇", "上冈镇", "冈西镇", "宝塔镇",
          "高作镇", "九龙口镇"]
      },
      {
        name: "射阳县",
        stLists: ["合德镇", "特庸镇", "洋马镇", "临海镇", "千秋镇", "四明镇", "海河镇",
          "海通镇", "兴桥镇", "新坍镇", "长荡镇", "盘湾镇", "黄沙港镇"]
      },
      {
        name: "阜宁县",
        stLists: ["阜城街道", "新城街道", "花园街道", "吴滩街道", "沟墩镇", "陈良镇",
          "三灶镇", "郭墅镇", "新沟镇", "陈集镇", "羊寨镇", "板湖镇", "东沟镇",
          "益林镇", "古河镇", "罗桥镇", "芦蒲镇"]
      },
      {
        name: "滨海县",
        stLists: ["东坎镇", "八滩镇", "五汛镇", "蔡桥镇", "正红镇", "通榆镇", "界牌镇",
          "八巨镇", "滨淮镇", "天场镇", "陈涛镇", " 滨海港镇"]
      },
      {
        name: "响水县",
        stLists: ["响水镇", "黄圩镇", "南河镇", "大有镇", "运河镇", "双港镇",
          "小尖镇", "陈家港镇"]
      },

    ],
    /*默认为群众,必须要写，不然值将为空*/
    identification: '群众',
    ycId: 0,
    stId: 0
  },

  onLoad: function (options) {
    this.setData({
      ycId: 0,
      stId: 0
    })
  },
  radioChange(e) {
    console.log(e.detail.value);
    var name = e.detail.value;
    this.setData({
      identification: name
    })
  },

  bindPickerYc: function (e) {
    this.setData({
      ycId: e.detail.value,
      stId: 0
    })
  },
  bindPickerSt: function (e) {
    this.setData({
      stId: e.detail.value
    })
  },
  usenameinput: function(e){
    this.setData({userName:e.detail.value})

  },
phonenameinput: function (e) {
  
    this.setData({ phoneNumber: e.detail.value })

  },
handleSubmit:function(event){
  var uname = this.data.userName;
  var phoneNumber = this.data.phoneNumber;
  var that = this;
  var warn = "";
  //先判断输入信息是否有为空
  if (uname == "") {
    warn = "名字不能为空";
    wx.showToast({
      title: warn,
      icon: 'error',
    })
    return;
  } else if (phoneNumber == "") {
    warn = "手机号不能为空";
    wx.showToast({
      title: warn,
      icon: 'error',
    })
    return;
  } else if (!(/^1(3|4|5|6|7|8)\d{9}$/.test(phoneNumber))) {
    warn = "手机号格式有误";
    wx.showToast({
      title: warn,
      icon: 'error',
    })
    return;
  } else {
    console.log(that.data.identification);
    wx.request({
      url: getApp().globalData.baseUrl +'modify',
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        zh: uname,
        sf: that.data.identification,
        hm: phoneNumber,
        ad: that.data.ycList[that.data.ycId] + " " + that.data.stList[that.data.ycId].stLists[that.data.stId],
        openId: getApp().globalData.open_id
      },
      dataType: "JSON",
      success:function(res){
        //修改成功，跳转
        wx.showModal({
          title: '登陆状态',
          content: "登陆成功,页面即将跳转",
          success: function (res) {
            if (res.confirm) {
              wx.switchTab({
                //跳转到主页
                url: '/pages/home/home'
              })
            }
          }
        })
      }

    })
  }
},
  admin:function(event){
    wx.navigateTo({
      url: '/pages/adLogin/adLogin',
    })
  }
})