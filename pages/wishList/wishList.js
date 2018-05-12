Page({
    data:{
      tabTxt: ['显示全部', '心愿形式', '地区', '认领状态'],//tab文案
      tab: [true, true, true, true],
      record:[],
      wishMethodList: ["心愿形式▽","个人物质","个人服务"],
      areaList: ["地区▽","","","",""],
      statusList: ["认领状态▽","未认领","已认领","待审核","已完成"],
      wishObjectIndex:0,
      wishMethodIndex:0,
      areaIndex:0,
      statusIndex:0,
      area:[
        {
          areaname:"亭湖区",
          tabid:"filter5"
        },
        {
          areaname: "盐都区",
          tabid: "filter6"
        },
        {
          areaname: "大丰区",
          tabid: "filter7"
        },
        {
          areaname: "东台市",
          tabid: "filter8"
        },
        {
          areaname: "建湖区",
          tabid: "filter9"
        },
        {
          areaname: "射阳县",
          tabid: "filter10"
        },
        {
          areaname: "阜宁县",
          tabid: "filter11"
        },
        {
          areaname: "滨海县",
          tabid: "filter12"
        },
        {
          areaname: "响水县",
          tabid: "filter13"
        }
      ]

    },
    state:function(){

    },
    bindPickerChange1: function (e) {
        console.log(e)
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          wishObjectIndex:e.detail.value
        })
    },
    bindPickerChange2: function (e) {
      console.log(e)
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        wishMethodIndex: e.detail.value
      })
    },
    bindPickerChange3: function (e) {
      console.log(e)
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        areaIndex: e.detail.value
      })
    },
    bindPickerChange4: function (e) {
      console.log(e)
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        statusIndex: e.detail.value
      })
    },
    filterTab: function (e) {
      var data = [true, true, true, true],
        index = e.currentTarget.dataset.index;
      data[index] = !this.data.tab[index];
      this.setData({
        tab: data
      })
    },
    filter: function (e) {
      var self = this, id = e.currentTarget.dataset.id, txt = e.currentTarget.dataset.txt, tabTxt = this.data.tabTxt;
      switch (e.currentTarget.dataset.index) {
        case '0':
          tabTxt[0] = txt;
          self.setData({
            tab: [true, true, true, true],
            tabTxt: tabTxt,
          });
          break;
        case '1':
          tabTxt[1] = txt;
          self.setData({
            tab: [true, true, true, true],
            tabTxt: tabTxt,
          });
          break;
        case '2':
          tabTxt[2] = txt;
          self.setData({
            tab: [true, true, true, true],
            tabTxt: tabTxt,
          });
          break;
        case '3':
          tabTxt[3] = txt;
          self.setData({
            tab: [true, true, true, true],
            tabTxt: tabTxt,
          });
      }
    },
    
    onShareAppMessage: function (res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }
      return {
        title: '心愿墙',
        path: '/pages/index/index',
        success: function (res) {
          // 转发成功
        },
        fail: function (res) {
          // 转发失败
        }
      }
    },
    filter1 :function(){
      wx:wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    },
    filter2: function () {
      wx: wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter3: function () {
      wx: wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter4: function () {
      wx: wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter5: function () {
      wx: wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter6: function () {
      wx: wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter7: function () {
      wx: wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter8: function () {
      wx: wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter9: function () {
      wx: wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter10: function () {
      wx: wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter11: function () {
      wx: wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter12: function () {
      wx: wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter13: function () {
      wx: wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter14: function () {
      wx: wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter15: function () {
      wx: wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter16: function () {
      wx: wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter17: function () {
      wx: wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    showall :function(event){
      
    },

    onLoad:function(options){
      var that = this;
      wx.request({
        url: 'http://localhost:8080/query',
        method:"POST",
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success:function(res){
          that.setData({
            record:res.data
          })
        }
      })
      
    },
    jmpToDetail:function(event){
      var detailId = event.currentTarget.dataset.detailId;
      wx.navigateTo({
        url: '/pages/detail/detail?detailId='+detailId,
      })
    }

})