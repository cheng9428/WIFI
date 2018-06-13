//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    count: 1,
    flag: 0,
    object: {
      key: 'Hello '
    },
    array: ['MINA'],
    ck: 0
  },

  turnToOwner: function() {
    console.log(event)
  },

  add: function (e) {
    this.setData({
      count: this.data.count + 1
    })
  }
})