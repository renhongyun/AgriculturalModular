// app.js
App({
  globalData2: {
    data1: "why?",
    token: "",
    username: "renyi",
    userInfo: {
        level: 99,
        nickname: "yy"
    }
},
  onLaunch(options) {
    console.log(options);
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

  },
  onHide() {
    console.log("onhide");
  },
  onShow(options) {
    console.log("show");
    console.log(options);
  },
  globalData: {
    userInfo: null
  }
})
