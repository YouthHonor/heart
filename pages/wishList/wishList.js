  Page({
    data:{
      tabTxt: ['显示全部', '心愿形式', '地区', '认领状态'],//tab文案
      tab: [true, true, true, true],
      record:[],
      
      xyTypeFlag:"false",
      xyStreetFlag:"false",
      xyFlagFlag:"false",

      Type:"",
      Street:"",
      Flag:"",
      imgUrls:[],

      wishObjectList:["心愿对象▽","个人","团体","公众"],
      wishMethodList: ["心愿形式▽","精神","物质"],
      areaList: ["地区▽"],

      statusList: ["认领状态▽","未认领","已认领","待审核","已完成"],
      wishObjectIndex:0,
      wishMethodIndex:0,
      areaIndex:0,
      statusIndex:0,
      area:[
        {
          areaname:"亭湖区",
          tapid:"filter5"
        },
        {
          areaname: "盐都区",
          tapid: "filter6"
        },
        {
          areaname: "大丰区",
          tapid: "filter7"
        },
        {
          areaname: "东台市",
          tapid: "filter8"
        },
        {
          areaname: "建湖区",
          tapid: "filter9"
        },
        {
          areaname: "射阳县",
          tapid: "filter10"
        },
        {
          areaname: "阜宁县",
          tapid: "filter11"
        },
        {
          areaname: "滨海县",
          tapid: "filter12"
        },
        {
          areaname: "响水县",
          tapid: "filter13"
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

    /*显示全部 (也可以当作刷新吧应该(后端目前只返回<=10个))*/
    filter2: function () {
        var that = this;
        wx.request({
          url: 'http://118.25.13.61/wx_servlet_war/query',
          method: "POST",
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          success: function (res) {
            that.setData({
              record: res.data
            })
          }
        })
    },

    /*个人物质*/
    filter3: function (e) {
      console.log(e)
      this.setData({
        xyTypeFlag:"true",
        Type:e.currentTarget.dataset.type
      })
      var that = this;
      wx: wx.request({
        url: 'http://118.25.13.61/wx_servlet_war/select',
        data: {
          xyTypeFlag: that.data.xyTypeFlag,
          xyStreetFlag: that.data.xyStreetFlag,
          xyFlagFlag: that.data.xyFlagFlag,
          Type: that.data.Type,
          Street:that.data.Street,
          Flag:that.data.Flag
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) { 
          that.setData({
            record:res.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter4: function (e) {
      this.setData({
        xyTypeFlag: "true",
        Type: e.currentTarget.dataset.type
      })
      var that = this;
      wx: wx.request({
        url: 'http://118.25.13.61/wx_servlet_war/select',
        data: {
          xyTypeFlag: that.data.xyTypeFlag,
          xyStreetFlag: that.data.xyStreetFlag,
          xyFlagFlag: that.data.xyFlagFlag,
          Type: that.data.Type,
          Street: that.data.Street,
          Flag: that.data.Flag
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {
          that.setData({
            record: res.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter5: function (e) {
      this.setData({
        xyStreetFlag: "true",
        Street: e.currentTarget.dataset.xyArea
      })
      var that = this;
      wx: wx.request({
        url: 'http://118.25.13.61/wx_servlet_war/select',
        data: {
          xyTypeFlag: that.data.xyTypeFlag,
          xyStreetFlag: that.data.xyStreetFlag,
          xyFlagFlag: that.data.xyFlagFlag,
          Type: that.data.Type,
          Street: that.data.Street,
          Flag: that.data.Flag
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {
          that.setData({
            record: res.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter6: function (e) {
      this.setData({
        xyStreetFlag: "true",
        Street: e.currentTarget.dataset.xyArea
      })
      var that = this;
      wx: wx.request({
        url: 'http://118.25.13.61/wx_servlet_war/select',
        data: {
          xyTypeFlag: that.data.xyTypeFlag,
          xyStreetFlag: that.data.xyStreetFlag,
          xyFlagFlag: that.data.xyFlagFlag,
          Type: that.data.Type,
          Street: that.data.Street,
          Flag: that.data.Flag
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {
          that.setData({
            record: res.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter7: function (e) {
      this.setData({
        xyStreetFlag: "true",
        Street: e.currentTarget.dataset.xyArea
      })
      var that = this;
      wx: wx.request({
        url: 'http://118.25.13.61/wx_servlet_war/select',
        data: {
          xyTypeFlag: that.data.xyTypeFlag,
          xyStreetFlag: that.data.xyStreetFlag,
          xyFlagFlag: that.data.xyFlagFlag,
          Type: that.data.Type,
          Street: that.data.Street,
          Flag: that.data.Flag
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {
          that.setData({
            record: res.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter8: function (e) {
      this.setData({
        xyStreetFlag: "true",
        Street: e.currentTarget.dataset.xyArea
      })
      var that = this;
      wx: wx.request({
        url: 'http://118.25.13.61/wx_servlet_war/select',
        data: {
          xyTypeFlag: that.data.xyTypeFlag,
          xyStreetFlag: that.data.xyStreetFlag,
          xyFlagFlag: that.data.xyFlagFlag,
          Type: that.data.Type,
          Street: that.data.Street,
          Flag: that.data.Flag
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {
          that.setData({
            record: res.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter9: function (e) {
      this.setData({
        xyStreetFlag: "true",
        Street: e.currentTarget.dataset.xyArea
      })
      var that = this;
      wx: wx.request({
        url: 'http://118.25.13.61/wx_servlet_war/select',
        data: {
          xyTypeFlag: that.data.xyTypeFlag,
          xyStreetFlag: that.data.xyStreetFlag,
          xyFlagFlag: that.data.xyFlagFlag,
          Type: that.data.Type,
          Street: that.data.Street,
          Flag: that.data.Flag
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {
          that.setData({
            record: res.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter10: function (e) {
      this.setData({
        xyStreetFlag: "true",
        Street: e.currentTarget.dataset.xyArea
      })
      var that = this;
      wx: wx.request({
        url: 'http://118.25.13.61/wx_servlet_war/select',
        data: {
          xyTypeFlag: that.data.xyTypeFlag,
          xyStreetFlag: that.data.xyStreetFlag,
          xyFlagFlag: that.data.xyFlagFlag,
          Type: that.data.Type,
          Street: that.data.Street,
          Flag: that.data.Flag
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {
          that.setData({
            record: res.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter11: function (e) {
      this.setData({
        xyStreetFlag: "true",
        Street: e.currentTarget.dataset.xyArea
      })
      var that = this;
      wx: wx.request({
        url: 'http://118.25.13.61/wx_servlet_war/select',
        data: {
          xyTypeFlag: that.data.xyTypeFlag,
          xyStreetFlag: that.data.xyStreetFlag,
          xyFlagFlag: that.data.xyFlagFlag,
          Type: that.data.Type,
          Street: that.data.Street,
          Flag: that.data.Flag
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {
          that.setData({
            record: res.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter12: function (e) {
      this.setData({
        xyStreetFlag: "true",
        Street: e.currentTarget.dataset.xyArea
      })
      var that = this;
      wx: wx.request({
        url: 'http://118.25.13.61/wx_servlet_war/select',
        data: {
          xyTypeFlag: that.data.xyTypeFlag,
          xyStreetFlag: that.data.xyStreetFlag,
          xyFlagFlag: that.data.xyFlagFlag,
          Type: that.data.Type,
          Street: that.data.Street,
          Flag: that.data.Flag
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {
          that.setData({
            record: res.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter13: function (e) {
      this.setData({
        xyStreetFlag: "true",
        Street: e.currentTarget.dataset.xyArea
      })
      var that = this;
      wx: wx.request({
        url: 'http://118.25.13.61/wx_servlet_war/select',
        data: {
          xyTypeFlag: that.data.xyTypeFlag,
          xyStreetFlag: that.data.xyStreetFlag,
          xyFlagFlag: that.data.xyFlagFlag,
          Type: that.data.Type,
          Street: that.data.Street,
          Flag: that.data.Flag
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {
          that.setData({
            record: res.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter14: function (e) {
      this.setData({
        xyFlagFlag: "true",
        Flag: e.currentTarget.dataset.flag
      })
      var that = this;
      wx: wx.request({
        url: 'http://118.25.13.61/wx_servlet_war/select',
        data: {
          xyTypeFlag: that.data.xyTypeFlag,
          xyStreetFlag: that.data.xyStreetFlag,
          xyFlagFlag: that.data.xyFlagFlag,
          Type: that.data.Type,
          Street: that.data.Street,
          Flag: that.data.Flag
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {
          that.setData({
            record: res.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter15: function (e) {
      this.setData({
        xyFlagFlag: "true",
        Flag: e.currentTarget.dataset.flag
      })
      var that = this;
      wx: wx.request({
        url: 'http://118.25.13.61/wx_servlet_war/select',
        data: {
          xyTypeFlag: that.data.xyTypeFlag,
          xyStreetFlag: that.data.xyStreetFlag,
          xyFlagFlag: that.data.xyFlagFlag,
          Type: that.data.Type,
          Street: that.data.Street,
          Flag: that.data.Flag
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {
          that.setData({
            record: res.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter16: function (e) {
      this.setData({
        xyFlagFlag: "true",
        Flag: e.currentTarget.dataset.flag
      })
      var that = this;
      wx: wx.request({
        url: 'http://118.25.13.61/wx_servlet_war/select',
        data: {
          xyTypeFlag: that.data.xyTypeFlag,
          xyStreetFlag: that.data.xyStreetFlag,
          xyFlagFlag: that.data.xyFlagFlag,
          Type: that.data.Type,
          Street: that.data.Street,
          Flag: that.data.Flag
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {
          that.setData({
            record: res.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    filter17: function (e) {
      this.setData({
        xyFlagFlag: "true",
        Flag: e.currentTarget.dataset.flag
      })
      var that = this;
      wx: wx.request({
        url: 'http://118.25.13.61/wx_servlet_war/select',
        data: {
          xyTypeFlag: that.data.xyTypeFlag,
          xyStreetFlag: that.data.xyStreetFlag,
          xyFlagFlag: that.data.xyFlagFlag,
          Type: that.data.Type,
          Street: that.data.Street,
          Flag: that.data.Flag
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {
          that.setData({
            record: res.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    showall :function(event){
      
    },

    onLoad:function(options){
      this.setData({
        xyTypeFlag:"false",
        xyStreetFlag:"false",
        xyFlagFlag:"false"
      })
      var that = this;
      wx.request({
        url: 'https://www.kousisoft.com/wx_servlet_war/query',
        method:"POST",
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success:function(res){
          that.setData({
            record:res.data
          })
          for(let i=0;i<that.data.record.length;i++){
            console.log("length:"+that.data.record.length)
            console.log("i="+i);
            var fileName = that.data.record[i].fileName;
            console.log("fileName:"+fileName)
            wx.downloadFile({
              url:"https://www.kousisoft.com/wx_servlet_war/upload/"+fileName+".jpg",
              success: function (res) {
                if (i !== that.data.record.length) {
                  console.log("下载成功:" + res.tempFilePath);
                  var img = "record[" + i + "].xyImg";
                  that.setData({
                    [img]: res.tempFilePath
                  })
                }
                /*缓存 */
                wx.setStorageSync(that.data.record[i].xyId,that.data.record[i].xyImg);
              },
              fail: function (err) {
                console.log(err)
              }
            })
          }
        }
      })
      
    },
    onShow:function(){
      this.setData({
        xyTypeFlag: "false",
        xyStreetFlag: "false",
        xyFlagFlag: "false"
      })
      var that = this;
      wx.request({
        url: 'https://www.kousisoft.com/wx_servlet_war/query',
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          that.setData({
            record: res.data
            
          })
          for(let i=0;i<that.data.record.length;i++){
            var img = "record["+i+"].xyImg";
            wx.getStorage({
              key: that.data.record[i].xyId,
              success: function(res) {
                that.setData({
                  [img]:res.data
                })
              },
            })
          }
          console.log(res)
        }
      })
    },

    jmpToDetail:function(event){
      var detailId = event.currentTarget.dataset.detailId;
      console.log(event)
      wx.navigateTo({
        url: '/pages/detail/detail?detailId='+detailId,
      })
    },
    state:function(event){
      var xyId = event.currentTarget.dataset.xyId;
      wx.navigateTo({
        url: '/pages/support/support?xyId='+xyId
      })
    }

})