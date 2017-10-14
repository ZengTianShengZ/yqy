const utils = require('../libs/lib/utils');

const req = (url, data, method = 'POST') => {
  const options = utils.extend({}, data);

  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: options,
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log('req...success',res.data)
        resolve(res.data)
      },
      fail: function(err) {
        console.log('req...err',err);
        reject(err)
      }
    })
  })

}
module.exports = req
