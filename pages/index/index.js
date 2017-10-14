//index.js
//获取应用实例
const login = require('../../utils/login')
const app = getApp();

Page({
  data: {
    motto: 'Hello World',
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function () {
    console.log('.......');
    wx.getUserInfo('en', {
      success: function(res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        console.log(res);
      }
    })
    login().then(res => {

    }).catch(err => {
      console.log(err);
    })

    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        console.log(res);
      }
    })
    wx.chooseLocation({
      success: function(d){
        console.log('...chooseLocation..')
        console.log(d);
      }
    })

  },
  getUserInfo: function(e) {

  }
});
