// pages/treatment/treatment.js
Page({
  onTapChange(event) {
    this.setData({
      currentIndex: event.detail
    })
  },
  onSwiperChange(e) {
    // 设置当前的Tab索引到currentTab，这与swiper的当前索引相关
    this.setData({
      currentIndex: e.detail.current  // 获取swiper当前显示项的索引
    });
  },
  observers: {
    'currentIndex': function(currentIndex) {
      // 当currentIndex改变时，这里的代码会被执行
      this.onTapChange(currentIndex);
    }
  },
  onItemTap(event) {
    const index = event.currentTarget.dataset.index;
    console.log(index);
    this.setData({
      currentIndex: index
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    imgUrls: [
      "../../assets/img/bar2.png", 
      "../../assets/img/bar1.png",
      "../../assets/img/bar3.png",
      // "../../assets/img/bg3.jpg",
    ]
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