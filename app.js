//app.js
const QQMapWX = require('./libs/lib/qqmap-sdk')
const storage = require('./libs/lib/storage')
// const {login} = require('./api')

App({
  onLaunch: function () {
    this.qQMapWX = new QQMapWX({
        key: 'OY5BZ-3I5WS-BN5OF-6F4RA-NYQRJ-TKFAA' // 必填
    })
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        storage.set('location', res)
        // var latitude = res.latitude
        // var longitude = res.longitude
        // var speed = res.speed
        // var accuracy = res.accuracy
      }
    })
    // this.getToken().then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
  },
  getLocation() {
    return storage.get('location')
  },
  getTokenInfo() {
    return new Promise((resolve, reject) => {
      const userInfo = storage.get('userInfo')
      if (userInfo) {
        resolve(userInfo)
      } else {
        let info = {}
        wx.login({
          success: function (res) {
            const code = res.code
            if (code) {
              //发起网络请求
              wx.getUserInfo({
                success: function (res) {
                  var userInfo = res.userInfo
                  var nickName = userInfo.nickName
                  var avatarUrl = userInfo.avatarUrl
                  var gender = userInfo.gender //性别 0：未知、1：男、2：女
                  var province = userInfo.province
                  var city = userInfo.city
                  var country = userInfo.country
                  info = {
                    nickName, avatarUrl, gender, province, city, country
                  }
                  //发起网络请求
                  wx.request({
                    url: 'https://yqy.mynatapp.cc/v2/login',
                    method: 'POST',
                    data: {
                      code,
                      nickName,
                      avatarUrl,
                      province,
                      gender,
                      city,
                      country
                    },
                    success: function (res) {
                      info.openId = res.data.data.openId
                      storage.set('userInfo', info)
                      resolve(info)
                    },
                    fail: function (err) {
                      reject(err)
                    }
                  })
                }
              })
            } else {
              console.log('获取用户登录态失败！' + res.errMsg)
              reject(res.errMsg)
            }
          },
          fail: function(err){
            reject(err)
          }
        })
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
