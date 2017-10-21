//app.js
const QQMapWX = require('./libs/lib/qqmap-sdk')
const storage = require('./libs/lib/storage')
App({
  onLaunch: function () {
    this.qQMapWX = new QQMapWX({
        key: 'OY5BZ-3I5WS-BN5OF-6F4RA-NYQRJ-TKFAA' // 必填
    })
    this.setGlobalData()
  },
  setGlobalData(){
    let _this = this
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
        // 调用接口
      }
    })
  },
  getQQMapWX() {
    return this.qQMapWX
  },
  globalData: {
    userInfo: null
  }
})
