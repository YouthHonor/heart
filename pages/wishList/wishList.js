Page({
    data:{
      tabTxt: ['心愿对象', '心愿形式', '地区', '认领状态'],//tab文案
      tab: [true, true, true, true],
      record:[
        {
          name:"江展鹏",
          phonoNumber:12345678901,
          wishPeopleType:"党员",
          wishType:"个人物质",
          specificNeeds:"我要一个手办",
          date:"2011-1-1",
          address:"m78星云",
          story:"我来自m78星云 ，我想要一个凹凸曼手办"
        },
        {
          name: "江展鹏3号",
          phonoNumber: 12345678901,
          wishPeopleType: "党员",
          wishType: "个人物质",
          specificNeeds: "我要一个面包",
          date: "2012-1-1",
          address: "m78星云",
          story: "我来自m78星云 ，我想要一个凹凸曼手办"
        },
        {
          name: "江展鹏2号",
          phonoNumber: 12345678901,
          wishPeopleType: "党员",
          wishType: "个人物质",
          specificNeeds: "我要一个奶酪",
          date: "2014-1-1",
          address: "m78星云",
          story: "我来自m78星云 ，我想要一个凹凸曼手办"
        },
        {
          name: "江展鹏2号",
          phonoNumber: 12345678901,
          wishPeopleType: "党员",
          wishType: "个人物质",
          specificNeeds: "我要一个奶酪",
          date: "2014-1-1",
          address: "m78星云",
          story: "我来自m78星云 ，我想要一个凹凸曼手办"
        },
        {
          name: "江展鹏2号",
          phonoNumber: 12345678901,
          wishPeopleType: "党员",
          wishType: "个人物质",
          specificNeeds: "我要一双袜子",
          date: "2014-1-1",
          address: "m78星云",
          story: "我来自m78星云 ，我想要一个凹凸曼手办"
        },
        {
          name: "江展鹏2号",
          phonoNumber: 12345678901,
          wishPeopleType: "党员",
          wishType: "个人物质",
          specificNeeds: "我要一个奶酪",
          date: "2014-1-1",
          address: "地球",
          story: "我来自m78星云 ，我想要一个凹凸曼手办"
        }
      ],
      wishObjectList:["心愿对象▽","个人","团体","公众"],
      wishMethodList: ["心愿形式▽","精神","物质"],
      areaList: ["地区▽"],
      statusList: ["认领状态▽","未认领","已认领","待审核","已完成"],
      wishObjectIndex:0,
      wishMethodIndex:0,
      areaIndex:0,
      statusIndex:0
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
    }
})