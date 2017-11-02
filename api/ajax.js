const utils = require('../libs/lib/utils');
const FIX_URL = 'https://yqy.mynatapp.cc'
const req = async function (url, data, method = 'POST') {
  const _url = `${FIX_URL}${url}`
  const options = utils.extend({}, data);
  try {
    const result = await new Promise((resolve, reject) => {
      wx.request({
        url: _url,
        method: method,
        data: options,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          resolve(res.data)
        },
        fail: function (err) {
          reject(err)
        }
      })
    })
    return result
  } catch(err){
    console.log('.....req....err...')
    console.log(err)
    wx.showToast({
      title: '网络出错啦~~',
      icon: 'success',
      duration: 2000
    })
  }
}
module.exports = req
