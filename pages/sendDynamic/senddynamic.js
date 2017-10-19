//index.js
//获取应用实例
const login = require('../../utils/login')
const storage = require('../../libs/lib/storage')

const app = getApp();

Page({
  data: {
  
  },
  onLoad() {

  },
  clickPreviewImage(event) {
    wx.previewImage({
      current: event.currentTarget.dataset.imgurl,
      urls: event.currentTarget.dataset.imgurls,
      success: function (res) {
      }
    })
  },
  clickNavigateTo() {
    wx.navigateTo({
      url: '../detail/detail?id=1'
    })
  }
});
