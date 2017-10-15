//app.js
const storage = require('./libs/lib/storage')
App({
  onLaunch: function () {
    this.setGlobalData()
  },
  setGlobalData(){
    wx.getUserInfo({
      success: function(res) {
        storage.set('userInfo', res)
        // var userInfo = res.userInfo
        // var nickName = userInfo.nickName
        // var avatarUrl = userInfo.avatarUrl
        // var gender = userInfo.gender //性别 0：未知、1：男、2：女
        // var province = userInfo.province
        // var city = userInfo.city
        // var country = userInfo.country
        // console.log(res);
      }
    })
    // login().then(res => {
    //
    // }).catch(err => {
    //   console.log(err);
    // })

    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        storage.set('location', res)
        // var latitude = res.latitude
        // var longitude = res.longitude
        // var speed = res.speed
        // var accuracy = res.accuracy
        // console.log(res);
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
