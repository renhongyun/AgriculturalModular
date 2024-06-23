// pages/favor/favor.js
//实例化页面对象
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: "rhyhello",
    movies: ["西游记", "水浒传", "红楼梦"],
    count :0,
    listCount: 30,
    username: "",
    currentIndex: 0,
    imgUrls: [
      "../../assets/img/bg4.jpg", 
      "../../assets/img/bg2.jpg",
      "../../assets/img/bg3.jpg",
    ],
    coverData: [
      {
        title: "苹果树花期管理要点",
        imgUrl: "https://mmbiz.qpic.cn/mmbiz_jpg/61InQeonT4SN6HVKFh347FYSRshnLSPP6cehNwDKoGSfDWaDAFvvjozTmJJKtYlQWIJrLaEDIXgdoMR94vd2Eg/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1",
        pageViews: 36,
        like: 3,
        content:
          "主枝开张角度不合理，多表现为较小，为40-50°。由于主枝角度过小，树势上强下弱，内膛及下部枝条长势较弱，甚至枯死。也有主枝过于开张的，如部分干性较弱的品种‘大久保’等，由于其主枝角度自然开张较大，极易造成背上枝过大、过密、过旺，树形紊乱，通风透光性差，结果部位外移",
      },
      {
        title: "葡萄树花期这样管，高产不用愁",
        imgUrl: "https://mmbiz.qpic.cn/mmbiz_jpg/61InQeonT4SN6HVKFh347FYSRshnLSPPU1T7exUI2w9Q20tWJN6JujzDOz0MSkw7TL2NSCLTiblpXiaFW249d6kQ/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&tp=wxpic",
        pageViews: 10,
        like: 5,
        content:
          "主枝开张角度不合理，多表现为较小，为40-50°。由于主枝角度过小，树势上强下弱，内 trunk及下部枝条长势较弱，甚至枯死。也有主枝过于开张的，如部分干性较弱的品种‘大久保’等，由于其主枝角度自然开张较大，极易造成背上枝过大、过密、过旺，"
      },
      {
        title: "果园管理中存在的问题与解决办法",
        imgUrl: "https://mmbiz.qpic.cn/mmbiz_jpg/61InQeonT4SIoIMLC0zw4VicjyaqkM4hC2z2un7RP6AonMMm8pXfib1mz5hMs7m8hW6N8lsnFKjsOYNoMkspRtmg/640?wx_fmt=jpeg&wxfrom=13&tp=wxpic",
        pageViews: 99,
        like: 36,
        content:
          "主枝开张角度不合理，多表现为较小，为40-50°。由于主枝角度过小，树势上强下弱，内 trunk及下部枝条长势较弱，甚至枯死。也有主枝过于开张的，如部分干性较弱的品种‘大久保’等，由于其主枝角度自然开张较大，极易造成背上枝过大、过密、过旺，"
      },
      {
        title: "苹果年周期套餐施肥方案",
        imgUrl: "https://bpic.588ku.com/back_origin_min_pic/20/11/05/e799706267d2461c922e86a05e153ae1.jpg",
        pageViews: 90,
        like: 6,
        content:
          "主枝开张角度不合理，多表现为较小，为40-50°。由于主枝角度过小，树势上强下弱，内 trunk及下部枝条长势较弱，甚至枯死。也有主枝过于开张的，如部分干性较弱的品种‘大久保’等，由于其主枝角度自然开张较大，极易造成背上枝过大、过密、过旺，"
      },
      {
        title: "桃树谢花后如何施肥？",
        imgUrl: "https://th.bing.com/th/id/R.e428f695251834e344e78d6cda60a474?rik=HXIkefOHuCvucw&riu=http%3a%2f%2fpic3.nipic.com%2f20090604%2f2112521_002901301_2.jpg&ehk=h%2bDBCvcKMfyPeHVTg2eFlIgqYArTRGtbWBntWB%2fOhts%3d&risl=&pid=ImgRaw&r=0",
        pageViews: 8,
        like: 5,
        content:
          "主枝开张角度不合理，多表现为较小，为40-50°。由于主枝角度过小，树势上强下弱，内 trunk及下部枝条长势较弱，甚至枯死。也有主枝过于开张的，如部分干性较弱的品种‘大久保’等，由于其主枝角度自然开张较大，极易造成背上枝过大、过密、过旺，"
      },
      {
        title: "四月份猕猴桃园管理重点",
        imgUrl: "https://mmbiz.qpic.cn/mmbiz_jpg/61InQeonT4Rev1f2Uib0bNzGD5nHTuqeyU4FcPc1h1HIBXstxnSpnDfSPw1VYiaYZmM0hfr8XrfwqRgX5aTqMqPA/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&tp=wxpic",
        pageViews: 91,
        like: 33,
        content:
          "主枝开张角度不合理，多表现为较小，为40-50°。由于主枝角度过小，树势上强下弱，内 trunk及下部枝条长势较弱，甚至枯死。也有主枝过于开张的，如部分干性较弱的品种‘大久保’等，由于其主枝角度自然开张较大，极易造成背上枝过大、过密、过旺，"
      },
      {
        title: "春季果树“药浴”害虫无处藏身",
        imgUrl: "https://bpic.588ku.com/back_origin_min_pic/21/03/30/36c7a7c5d506b9865a1a1857f1bbdef9.jpg",
        pageViews: 9,
        like: 3,
        content:
          "主枝开张角度不合理，多表现为较小，为40-50°。由于主枝角度过小，树势上强下弱，内 trunk及下部枝条长势较弱，甚至枯死。也有主枝过于开张的，如部分干性较弱的品种‘大久保’等，由于其主枝角度自然开张较大，极易造成背上枝过大、过密、过旺，"
      },
      {
        title: "葡萄架形选择原则与整形修剪技术",
        imgUrl: "https://mmbiz.qpic.cn/mmbiz_jpg/61InQeonT4SIoIMLC0zw4VicjyaqkM4hC2hLzbC9ibRTRq5a04toicVzjyheQ4VZmcJO50VK71J6Iqur4QunggTpw/640?wx_fmt=jpeg&wxfrom=13&tp=wxpic",
        pageViews: 15,
        like: 4,
        content:
          "主枝开张角度不合理，多表现为较小，为40-50°。由于主枝角度过小，树势上强下弱，内 trunk及下部枝条长势较弱，甚至枯死。也有主枝过于开张的，如部分干性较弱的品种‘大久保’等，由于其主枝角度自然开张较大，极易造成背上枝过大、过密、过旺，"
      },
      {
        title: "春季樱桃果蝇防治要抓紧！",
        imgUrl: "https://mmbiz.qpic.cn/mmbiz_jpg/s2hQGU6ibWFLC4ytn4FQv4mRDq8uwZpURXSibQXuicDXicWXLgpibicag4SNn40CwZPQ448CNXYlR7bA3D0FSh1OLAdw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=13&wx_lazy=1&wx_co=1",
        pageViews: 24,
        like: 8,
        content:
          "主枝开张角度不合理，多表现为较小，为40-50°。由于主枝角度过小，树势上强下弱，内 trunk及下部枝条长势较弱，甚至枯死。也有主枝过于开张的，如部分干性较弱的品种‘大久保’等，由于其主枝角度自然开张较大，极易造成背上枝过大、过密、过旺，"
      },
      {
        title: "‘阳光玫瑰’葡萄双龙干飞鸟平棚架栽培技术",
        imgUrl: "https://mmbiz.qpic.cn/mmbiz_jpg/61InQeonT4SOIaznwthiaoxnYEzWV6RjwhRkgy1WGW1jmpEnBYaaWjAzvP6Eaia5n0g9aiaYRR7pB82SAsEk5dglA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1",
        pageViews: 24,
        like: 8,
        content:
          "主枝开张角度不合理，多表现为较小，为40-50°。由于主枝角度过小，树势上强下弱，内 trunk及下部枝条长势较弱，甚至枯死。也有主枝过于开张的，如部分干性较弱的品种‘大久保’等，由于其主枝角度自然开张较大，极易造成背上枝过大、过密、过旺，"
      },
      {
        title: "苹果4-5月份管理关键技术",
        imgUrl: "https://mmbiz.qpic.cn/mmbiz_jpg/61InQeonT4RvR6GvB7LkLTYnxTwITnaFDszw4Y2kMh3HZyJSwQzD4MaVFSlyxvnf2jDQbaXYFoflkTsMlpBXNQ/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1",
        pageViews: 24,
        like: 8,
        content:
          "主枝开张角度不合理，多表现为较小，为40-50°。由于主枝角度过小，树势上强下弱，内 trunk及下部枝条长势较弱，甚至枯死。也有主枝过于开张的，如部分干性较弱的品种‘大久保’等，由于其主枝角度自然开张较大，极易造成背上枝过大、过密、过旺，"
      },
    ],
    professor:[
      {
          imgUrl:"http://www.reea.agri.cn/ststny/202210/W020221019333021127771.jpg",
          name: "严东权",
          tag: "综合治理专家",
          status: "农业农村部农业生态总站站长",
          more: "长期从事乡村振兴战略、农业绿色发展、脱贫地区特色产业培育、农业生态环境保护等政策与技术研究工作。参与编制《“十四五”推进农业农村现代化规划》《“十四五”全国农业绿色发展规划》等多项战略和专项规划，担任重点流域农业面源污染综合治理专家指导组组长。"
      },
      {
          imgUrl:"http://www.reea.agri.cn/ststny/202210/W020221019345198526224.jpg",
          name: "骆世明",
          tag: "生态农业建设专家",
          status: "国际化感学会执行副主席",
          more: "中国农学会副会长、中国生态学会副理事长、农业生态学专业委员会主任等。主编的《农业生态学》构建了我国农业生态学体系。研究领域包括农业生态系统结构与功能、农区化感作用、稻田生态系统模拟等。"
      },
      {
          imgUrl:"http://www.reea.agri.cn/ststny/202210/W020221019333021132936.jpg",
          name: "高尚宾",
          tag: "二级研究员",
          status: "中国农业生态环境保护协会秘书长",
          more: "中国野生植物保护协会副会长，农业农村部农业生态与资源保护总站原副站长。长期从事农业资源环境保护、生态农业、农业生态补偿、有关农业可持续发展的政策研究、技术试点示范等工作，牵头起草生态农场评价行业标准、农业碳账户碳排放核算与评价指南地方标准等。"
      },
      {
          imgUrl:"http://www.reea.agri.cn/ststny/202210/W020221019333021145931.jpg",
          name: "尹昌斌",
          tag: "博士生导师",
          status: "农业资源利用与区划团队首席",
          more: "中国农业科学院农科英才·领军人才，国家绿肥产业技术体系岗位科学家，中国农业绿色发展研究会副秘书长，国家社科基金重大项目获得者，世界银行、亚洲开发、国际农发基金等国际机构的农业咨询专家。长期从事农业绿色发展战略、农业清洁生产、生态循环农业等方面研究工作。"
      },
      // {
      //     imgUrl:"http://www.reea.agri.cn/ststny/202210/W020221019333021149332.jpg",
      //     name: "叶小梅",
      //     tag: "研究员",
      //     status: "江苏省农业科学院科研处处长",
      //     more: "农业农村部种养结合重点实验室主任、江苏省现代农业产业技术体系废弃物资源利用岗位专家，江苏省“333”高层次人才，全国畜牧业标准化技术委员会标准化工作组委员、江苏省首席科技传播专家，中国沼气学会常务理事、中国农技协理事、省土壤学会常务理事。主要从事城乡有机废弃物资源化利用与循环农业模式研究。"
      // }
  ],
  exhibition: [
    {
      imgUrl:
        "https://0.rc.xiniu.com/g4/M00/98/8A/CgAG0mTUffCATsPaAAUoMb4oMoo192.png",
      title: "第23届广州国际生态农产品食品产业博览会",
      info1: "[更新时间 2024-06-14",
      info2: "已被浏览： 267",
      time: "【展会时间】：2024年6月14-16日",
      area: "【展会地点】：中国进出口商品交易会展馆（广交会展馆）",
      professon: "行业：食品",
    },
    // {
    //   imgUrl:
    //     "https://0.rc.xiniu.com/g4/M00/98/93/CgAG0mTUj_yAOXfwAAF_GCQQVro279.jpg",
    //   title: "2024第十五届亚洲园林景观产业博览会",
    //   info1: "[更新时间 2024-05-10",
    //   info2: "已被浏览： 90",
    //   time: "【展会时间】：2024年5月10-12日",
    //   area: "【展会地点】：中国进出口商品交易会展馆（广交会展馆）",
    //   professon: "行业：综合",
    // },
    {
      imgUrl:
        "https://0.rc.xiniu.com/g4/M00/98/96/CgAG0mTUnAWAHLN8AAF1Gss5yDA557.jpg",
      title: "2024上海国际农药助剂展览会",
      info1: "[更新时间 2024-04-24",
      info2: "已被浏览： 105",
      time: "【展会时间】：2024年4月24-26日",
      area: "【展会地点】：上海跨国采购会展中心",
      professon: "行业：综合",
    },
    {
      imgUrl:
        "https://0.rc.xiniu.com/g5/M00/15/74/CgAGbGX9QlOAZ4ghAAzH6LjrVUs864.png",
      title: "第十八届山西国际农业机械博览会",
      info1: "[更新时间 2024-04-13",
      info2: "已被浏览： 25",
      time: "【展会时间】：2024年4月13-15",
      area: "【展会地点】：山西潇河国际会展中心",
      professon: "行业：农机",
    },
  ]
    
    
  },
increment() {
  this.setData({
    count: this.data.count + 1
  })
},
onSwiperChange(e) {
  // 设置当前的Tab索引到currentTab，这与swiper的当前索引相关
  this.setData({
    currentIndex: e.detail.current  // 获取swiper当前显示项的索引
  });
},
onTapChange(event) {
  console.log("知识", event.detail);
  this.setData({
    currentIndex: event.detail
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //获取App实例
    const app = getApp()
    console.log("app",app);
    //获取全局data
    const username = app.globalData2.username;
    console.log("data",username);

    //展示全局data
    this.setData({
      username
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log("获取新的数据");
    setTimeout(()=>{
      this.setData({
        listCount: 30
      })
      wx.stopPullDownRefresh({
        success: (res) => {
          console.log("成功停止了下拉刷新", res);
        },
        fail: (err) => {
          console.log("失败停止了下拉刷新", err);
        }
      })
    }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数，当onReachBottomDistanc达到规定值时触发
   */
  onReachBottom() {
    console.log("滚动到底部");
    this.setData({
      listCount: this.data.listCount + 30
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})