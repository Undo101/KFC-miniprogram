let app = getApp()
Page({
  data: {
    // swipe的小点 默认true
    indicatorDots: true,
    // 滚动模式  
    vertical: false,
    // 自动播放吗
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 500, //切换速度
    items: [],
    images: ['https://img.4008823823.com.cn/kfcios/Banner/Banner_1_c40b8e7b6b654081ace5dde4e9d0b592.jpg',
     'https://img.4008823823.com.cn/kfcios/Banner/Banner_1_c39deff7b6754fce9d069f51e3270a26.jpg',
     'https://img.4008823823.com.cn/kfcios/Banner/Banner_1_617bce28b451447995b41fbbcea845db.jpg',
     'https://img.4008823823.com.cn/kfcios/Banner/Banner_1_64fe59738cef4cea90cee98c8ec2d5e0.jpg',
     'https://img.4008823823.com.cn/kfcios/Banner/Banner_1_188759b693ec49c6ae392c7977c7bdf3.jpg'],
    cardIcon: '../../image/cardbag.png',
    cartIcon: '../../image/cart.png'
  },
  // 页面加载完成之后，发送请求数据的好时机，它的大名叫！！！
  // 钩子 钩子 钩子 钩子 钩子
  onLoad: function() {
    console.log('加载完成')
  },
  toCard: function(e) {
    console.log(1)
    wx.navigateTo({
      url: '/pages/card/card'
    })
  },
  toList: function(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/order/order'
    })
  },
  toSelectKFC: function (e) {
    wx.navigateTo({
      url: '/pages/halladdress/halladdress'
    })
  }
})
