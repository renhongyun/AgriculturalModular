// pages/components/section-info/section-info.js
Component({
externalClasses: ["info"],
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "默认标题"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onBtnTap() {
      this.triggerEvent("cpnClick", "event-cpn-btn")
    }
  }
})