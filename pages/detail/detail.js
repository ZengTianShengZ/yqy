//index.js
//获取应用实例
const login = require('../../utils/login')
const storage = require('../../libs/lib/storage')

const app = getApp();

Page({
  data: {
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
    }
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
  }
});
