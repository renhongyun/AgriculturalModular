// components/tab-bar.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    currentIndex: {
      type: Number,
      value: 0,
      observer: function(newVal, oldVal) {
        // 这里可以处理currentIndex变更后的逻辑
        this.onCurrentIndexChanged(newVal);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemTap(event) {
      const index = event.currentTarget.dataset.index
      console.log(index);
      this.setData({
        currentIndex: index
      })
      this.triggerEvent("indexchange", this.data.currentIndex)
    },
    onCurrentIndexChanged(newValue) {
      // 处理currentIndex变化时的逻辑，比如设置高亮等
      console.log('currentIndex changed to: ', newValue);
    }
  }
})