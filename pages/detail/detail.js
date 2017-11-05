//index.js
//获取应用实例
const storage = require('../../libs/lib/storage')
const api = require('../../api/index')

const app = getApp();

Page({
  data: {
    itemId: '',
    obj_listItem: {},
    arr_commentList: []
  },
  onLoad(option) {
    this.setData({
      itemId: option.itemId
    })
    this.getData()
    this.getCommentData()
  },
  async getData() {
    const itemId = this.data.itemId
    try {
      let data = await api.getDetailDynamic({
        id: itemId
      })
      this.setData({
        obj_listItem: data.data
      })
    } catch (err) {
      console.log(err)
    }
  },
  async getCommentData() {
    const itemId = this.data.itemId
    try {
      let data = await api.getConditionComment({
        dynamicId: itemId,
        pageNum: 0,
        pageSize: 10
      })
      this.setData({
        arr_commentList: data.data.list
      })
    } catch (err) {
      console.log(err)
    }
  },
  clickPreviewImage(event) {
    wx.previewImage({
      current: event.currentTarget.dataset.imgurl,
      urls: event.currentTarget.dataset.imgurls,
      success: function (res) {
      }
    })
  },
  bindFormSubmit(e) {
    const comment =  e.detail.value.textarea
    if (!comment) {
      console.log('没有提交数据')
      return
    }
    const dynamicId = this.data.itemId
    app.getTokenInfo().then(r => {
      console.log(r)
      const {openId, nickName, avatarUrl} = r
      let data = api.sumitCommont({
        openId,
        nickName,
        avatarUrl,
        dynamicId,
        comment,
        replyTo: {}
      }).then(r => {
        console.log(r)
      }).catch(err => {
        console.log(err)
      })
    })
  },
  async postCommont() {
    try{

    } catch(err) {

    }
  }
});
