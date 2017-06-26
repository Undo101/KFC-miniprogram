# 微信小程序学习 起手式DEMO仿肯德基（持续更新中。。。）
## 小程序
###官网介绍：
微信小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。
小程序的便捷注定它以后会有一定的伸展空间，了解之后我觉得它似乎就是一个html5的典型应用，其中的.wxml文件里放置相应page的html，用view、scoll-view代替了div标签，还有一些其他功能标签。
### 简直不敢回扒肯德基api那个夜晚时的心情好吗...


### 完成的功能：
附近位置选择-联动菜单导航-模拟数据-抽屉式购物车-获取用户微信信息-页面传值-数据生成订单


直接点餐会自动为你找到最近的餐厅，不过离最近的kfc太远的不太行
## 用到的工具和文档：
1. **开发调试工具:**   [微信小程序平台教程](https://mp.weixin.qq.com/debug/wxadoc/dev/),安装好最基本的啦！稍微过一遍简易文档。
2. **开发‘字典’文档:**  [微信小程序开发教程手册文档](https://www.w3cschool.cn/weixinapp/9wou1q8j.html)功能使用方法都在上面挺全的。通过
  阅读文档了解页面的搭建、页面路由、导航跳转、数据绑定、条件渲染、列表渲染、scroll-view、request、radio、modal、toast、map、位置、数据缓存、动画、验证信息。
3. **easy-mock:**  [easy-mock](www.easy-mock.com)模拟后端数据，后面会简单介绍配置。
4. **腾讯地图API:**   [腾讯地图小程序](http://lbs.qq.com/qqmap_wx_jssdk/index.html)有地点搜索、关键词输入提示、逆地址解析(坐标位置描述)地址解析(地址转坐标)距离计算、获取城市列表、获取城市区县的一步配置教程。
5. **WeUI**  [WeUI github](https://github.com/weui/weui-wxss)微信专用的结构样式组件库，加速开发速度，BEM规范代码，增强可读性

## 目录结构
    ├── app.js
    ├── app.json
    ├── app.wxss
    ├── pages
    │   ├── .DS_Store
    │   ├── KFC
    │   │   ├── KFC.js
    │   │   ├── KFC.wxml
    │   │   └── KFC.wxss
    │   ├── card
    │   │   ├── card.js
    │   │   ├── card.wxml
    │   │   └── card.wxss
    │   ├── halladdress
    │   │   ├── .DS_Store
    │   │   ├── halladdress.js
    │   │   ├── halladdress.wxml
    │   │   └── halladdress.wxss
    │   ├── index
    │   │   ├── index.js
    │   │   ├── index.wxml
    │   │   └── index.wxss
    │   ├── logs
    │   │   ├── logs.js
    │   │   ├── logs.json
    │   │   ├── logs.wxml
    │   │   └── logs.wxss
    │   ├── menu
    │   │   ├── index.html
    │   │   ├── menu.js
    │   │   ├── menu.wxml
    │   │   └── menu.wxss
    │   ├── order
    │   │   ├── order.js
    │   │   ├── order.wxml
    │   │   └── order.wxss
    │   └── takeout
    │       ├── message
    │       │   ├── message.js
    │       │   ├── message.wxml
    │       │   └── message.wxss
    │       ├── qqmap-wx-jssdk.min.js
    │       ├── takeout.js
    │       ├── takeout.wxml
    │       └── takeout.wxss
    ├── style
    │   ├── .DS_Store
    │   └── weui.wxss
    └── utils
        └── util.js

#### 页面注册
#### app.json
        "pages": [
        "pages/index/index",   // 首页
        "pages/KFC/KFC",       // K金商城页
        "pages/menu/menu",     // 菜单页
        "pages/card/card",     // 卡包页
        "pages/order/order",   // 订单页
        "pages/takeout/takeout",  // 外卖地图页
        "pages/takeout/message/message", // 填写外卖信息页
        "pages/halladdress/halladdress", // 附近餐厅页
        "pages/logs/logs" // 日志页
        ]
我们可以通过官网的文档或W3C教程上初始化了一个小程序目录，小程序的每个页面都放在pages目录下
每次添加一个新页面，都需要先在app.json.page下注册。
## 数据模拟
前后端分离，mock.js 用它来模拟KFC数据
我的学习资源
1. [mockjs前端开发独立于后端](https://i.jakeyu.top/2016/08/19/mockjs%E8%AE%A9%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E4%B8%8D%E4%BE%9D%E8%B5%96%E5%90%8E%E7%AB%AF/)
2. [掘金：easy-mock](https://juejin.im/post/58ff1fae61ff4b0066792f6e)
3. [mock.js那点事](https://juejin.im/post/58f9eec0a22b9d00658ee4b7)
### easy—mock创建数据 
因为菜单中每个左侧的分类对应一组数据，在右侧也需要渲染类名，因此简单模拟结构
  
    [{ "title": "这里放左边列表的组名",
     
       "foodsIndex": [{

       "name": "每个食物的名字",

       "price": "11.0",

       "url": "http://imgm.4008823823.com.cn/kfcmwos/img//S/269_116012.jpg"

      },
    
     {...},{...},{...}]
 
内容可以扒[肯德基点餐](https://m.4008823823.com.cn/kfcmwos/menu.htm?classId=116)，或者用我扒好的[肯德基API]
## 地图API的使用
**用toast优化耗时加载**

     wx.showToast({
        title: '地图加载中',
        icon: 'loading',
        duration: 0,
        mask: true
      })
      
**画图完成后用回调将Toast去除**
```javascript
    this.mapCtx = wx.createMapContext('myMap', function () {
        wx.hideToast();
    })
```
WXML:
```html
       <map id="myMap" longitude="{{longitude}}" latitude="{{latitude}}"
             style="width: 100%; height: 100%" markers="{{markers}}" covers="{{covers}}" scale="18">
       </map>
``` 
### 腾讯地图API使用
以搜附近地点渲染至页面列表为例
1. 引入核心类
 [腾讯地图小程序版](http://lbs.qq.com/qqmap_wx_jssdk/index.html)下载js并获取key
 ```javascript
     let QQMapWX = require('qqmap-wx-jssdk.min.js');
     let demo = new QQMapWX({
            key: '5Q2BZ-O3W24-V6DUN-DZ4Z7-H427K-WCB7R' // 必填
     });
 ```
     
2. 调用API[reverseGeocoder](http://lbs.qq.com/qqmap_wx_jssdk/method-reverseGeocoder.html)

```javascript
     demo.reverseGeocoder({
               location: {
                 latitude: _latitude,
                 longitude: _longitude
               },
               get_poi: 1,
               success: function (res) {
                 //         console.log(res);
               },
               fail: function (res) {
                 console.log(res);
               },
               complete: function (res) {
                 console.log(res);
                 that.setData({
                   pois: res.result.pois
                 })
               }
             });
```
             
通过setData() 我们的数据就传到data上去中了便用此渲染页面上去，that保持对原page对象的引用哟
```javascript
          <view class="address-item" wx:for="{{pois}}" wx:for-item="poi" 
             data-name="{{poi.address}}" catchtap="ToDetailPage">
             <image src="../../image/position.png" data-name="{{poi.address}}" 
                catchtap="ToDetailPage"></image>
             <text catchtap="ToDetailPage" data-name="{{poi.address}}">{{poi.address}}</text>
           </view>
```
### 地名搜索
以搜周围的KFC为例
```javascript
        demo.search({
          keyword: '肯德基',
          location: {
            latitude: _latitude,
            longitude: _longitude
          },
          success: function (res) {
            // console.log(res);
          },
          fail: function (res) {
            // console.log(res);
          },
          complete: function (res) {
            console.log(res.data[0].location.lat,res.data[0].location.lng)
            console.log(res.data[0])
            // .address._distance
            that.setData({
              poi: res.data[0].address,
              distance: res.data[0]._distance,
              latitude: res.data[0].location.lat,
              longitude: res.data[0].location.lng,
              markers: [{
                latitude: res.data[0].location.lat,
                longitude: res.data[0].location.lng,
                name: 'KFC',
                desc: 'KFC在您身边'
              }]
            })
          }
        });
```
通过setData改变data从而让页面显示当前kfc，没有用输入框搜索，用设置的自动搜索
## 购物车部分实现
### 需要实现的功能：
1. 侧nav与内容区的联动 
2. 商品的增减改变总价格并弹出购物车和抽屉详细面板
3. 抽屉的动画
4. 在抽屉面板中改变商品数量，没有则隐藏组件

### 具体实现过程
左边点击菜单的不同种类，右边转到相应的的内容  用到了[scroll-view的API](https://www.w3cschool.cn/weixinapp/weixinapp-scroll-view.html)
给每个右边的内容对象渲染时附上id
 ```html
 <view class="food-list" wx:for="{{foodArray}}" wx:for-item="item" id="foodtype{{index}}">
 ```
 再给每个nav的点击事件dataset解析一下
 ```javascript
 let goPage = e.currentTarget.id
 this.setData({
      scroll_into_view: "foodtype" + goPage
    })
 ```
 ### 抽屉式购物车
 
目前的做法是给每个商品都赋了一个dataset，以便点击不同的商品让不同的对象进入购物车数组,通过e.target.dataset拿到，有考虑到利用事件的冒泡来优化加载，下一步尝试
 ```javascript
  // 是否有同种商品判断
    if (this.data.shoppingList.length > 0) {
      // 商品名是否相同判断，不重复添加同名商品，但是商品数量改变
      let isHave = this.data.shoppingList.findIndex(item => item.name == e.target.dataset.name)
      if (isHave != -1) {
        that.data.shoppingList[isHave].num++
      } else {
        // 购物车数组加进新的一样食品
        that.data.shoppingList.push({
          price: e.target.dataset.price,
          name: e.target.dataset.name,
          num: itemNum
        })
        // 动画效果的长度添加
        move_length++
      }
    // 没有商品时直接添加
    } else {
      this.data.shoppingList.push({
        price: e.target.dataset.price,
        name: e.target.dataset.name,
        num: itemNum
      })
      move_length++
    }
  ```
  
#### 动画的使用
可参照[API](https://www.w3cschool.cn/weixinapp/tcga1qcz.html)
我在这里是做了一个增加商品时，抽屉往上滚动，删除为空时抽屉向下滚动
```javascript
data: {
    totalCount: 0,  // 购物车的总数量
    movelength: 0,  // 上移或下拉动画的单位距离
    cartIsHidden: true, // 购物车是否隐藏
    cartIndexIsHidden: true, // 购物车详情菜单是否隐藏
    animationData: {} // 动画动作对象
    }
 ```
 滚动动画初始设置
 ```javascript
let animation = wx.createAnimation({
  duration: 400,
  timingFunction: "linear",
  delay: 0
});
```
动画产生的效果就以bottom的变化而产生
 ```javascript
let mlength = move_length * 55;
    if (move_length > 1) {
      mlength = 55 + (move_length - 1) * 65;
    }
    this.animation = animation
    animation.bottom(mlength).step()
```
加入动画序列，并设置好movelength
```javascript
this.setData({
      animationData: animation.export()
    })
    this.setData({
      shoppingList: shopping_list,
      totalPrice: total_price,
      totalCount: total_count,
      // 购物车当有商品时弹出
      cartIsHidden: false,
      movelength: move_length
    })
  }
```

## 页面传值
### 目前了解的传值有三种：
1. 设置全局的数据缓存[看这API](https://www.w3cschool.cn/weixinapp/weixinapp-apidate.html)
2. url 附带字串传值

参考[掘金微信小程序多页面传参通信](https://juejin.im/post/5907f120b123db3ee48d2a4f)

3. 引入事件订阅和发布onfire.js（准备了解）

比如这个页面，它的所有数据都来之于之前的选择
我在自己项目里目前用的是本地存储的方式，比如地址的设置获取
在选择页设置本地存储
```javascript
let OrderAddress = {
      address: [],
      isHall: false 
    }
    //遍历去重
    let item = OrderAddress.address.find(item=>item==event.target.dataset.name)
    if(!item){
      OrderAddress.address.push(event.target.dataset.name)
    }
    wx.setStorage({
      key: "OrderAddress",
      data: OrderAddress,
    });
    wx.navigateTo({
      url:'/pages/takeout/message/message'
    })
```

在订单页拿到地址
```javascript
wx.getStorage({
      key: 'OrderAddress',
      success: function (res) {
        console.log(res.data);
        that.setData({
          address: res.data.address[0],
          elementToggle: res.data.isHall
        })
      }
    })
```
## 未完待续....
坑：页面内跳转不超过5级




     
