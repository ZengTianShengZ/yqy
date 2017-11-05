//index.js
//获取应用实例
const storage = require('../../libs/lib/storage')
const api = require('../../api/index')
const app = getApp();

Page({
  data: {
    b_directionYup: true,
    obj_listItem: {
      nickName: '曾田生x',
      avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKApG4aicW5835FUgOBY75jRDaYt8B84YIQL6v9J9lI4KEPA1nicGNxtdlI5iamIosXiaRqiavDAXmW2rQ/0',
      createTime: '今天 09：06',
      address: '福鼎家园',
      description: '说的就案件的就是就看看模块时代是的搜东山口卡就是卡死进度款几十块几点开始',
      imgList: [
        '../../images/matter/img1.jpeg',
        '../../images/matter/img6.jpeg',
        '../../images/matter/img7.jpeg',
        '../../images/matter/img8.jpeg',
        '../../images/matter/img9.jpeg'
      ]
    },
    arr_listItems: []
  },
  onLoad() {
    this.getData()
  },
  async getData() {
    try {
     const location = storage.get('location')
     let data =  await api.getDynamic({
       location: `${location.longitude},${location.latitude}`,
       pageNum: 0,   //请求页码
       pageSize: 10   //每页条数
     })
     this.setData({
       arr_listItems: data.data.list
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
  clickNavigateToDetailPage(event) {
    const itemId = event.currentTarget.dataset.itemid
    wx.navigateTo({
      url: '../detail/detail?itemId=' + itemId
    })
  },
  clickNavigateToSendDyPage() {
    wx.navigateTo({
      //url: '../detail/detail?id=1'
      url: '../sendDynamic/senddynamic?id=1'
    })
  },
  viewScrollListening(e) {
    if(e.detail.deltaY > 0) {
      this.setData({
         b_directionYup: true
      })
    } else {
      this.setData({
         b_directionYup: false
      })
    }
  }
});
