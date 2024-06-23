// pages/affairs/affairs.js
Page({
  onTapChange(event) {
    this.setData({
      currentIndex: event.detail
    })
  },
  onSwiperChange(e) {
    console.log(e);
    // 更新currentTab为当前的swiper索引，这将更新tab-bar的索引来匹配swiper的位置
    this.setData({
      currentIndex: e.detail.current
    });
    console.log(this.data.currentIndex);
  },
  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})