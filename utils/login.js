const Session = require('../libs/lib/session');
const api = require('../api/index');

const login = function login() {
  return new Promise((resolve, reject) => {
    wx.login({
       success: function(res) {
         if (res.code) {
           //发起网络请求
           console.log('....res.code',res.code);
           api.login({code: res.code}).then((res) => {
             console.log(res)
             resolve(res)
           }).catch(err => {
             console.log(err)
             reject(err)
           })
         } else {
           console.log('获取用户登录态失败！' + res.errMsg)
           reject(res.errMsg)
         }
       }
     });
  })



};

module.exports = login
