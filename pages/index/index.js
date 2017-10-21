//index.js
//获取应用实例
const login = require('../../utils/login')
const storage = require('../../libs/lib/storage')

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
    arr_listItems: [
      {
        nickName: '曾田生x1',
        avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKApG4aicW5835FUgOBY75jRDaYt8B84YIQL6v9J9lI4KEPA1nicGNxtdlI5iamIosXiaRqiavDAXmW2rQ/0',
        createTime: '今天 09：06',
        address: '福鼎家园',
        description: '是看到就是看到司机将是看到几十块达康书记看就看',
        imgList: [
          '../../images/matter/img9.jpeg'
        ]
      },
      {
        nickName: '曾田生x2',
        avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKApG4aicW5835FUgOBY75jRDaYt8B84YIQL6v9J9lI4KEPA1nicGNxtdlI5iamIosXiaRqiavDAXmW2rQ/0',
        createTime: '今天 09：06',
        address: '福鼎家园',
        description: '说的就案件的就是就看看模块时代是的搜东山口卡就是卡死进度款几十块几点开始',
        imgList: []
      },
      {
        nickName: '曾田生x3',
        avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKApG4aicW5835FUgOBY75jRDaYt8B84YIQL6v9J9lI4KEPA1nicGNxtdlI5iamIosXiaRqiavDAXmW2rQ/0',
        createTime: '今天 09：06',
        address: '福鼎家园',
        description: '说的就是开机定',
        imgList: [
          '../../images/matter/img7.jpeg',
          '../../images/matter/img8.jpeg'
        ]
      },
      {
        nickName: '曾田生x4',
        avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKApG4aicW5835FUgOBY75jRDaYt8B84YIQL6v9J9lI4KEPA1nicGNxtdlI5iamIosXiaRqiavDAXmW2rQ/0',
        createTime: '今天 09：06',
        address: '福鼎家园',
        description: '说的就是看到世界第四季我进件开卷考试',
        imgList: [
          '../../images/matter/img1.jpeg',
          '../../images/matter/img2.jpeg',
          '../../images/matter/img3.jpeg',
          '../../images/matter/img4.jpeg',
          '../../images/matter/img5.jpeg'
        ]
      },
      {
        nickName: '曾田生x5',
        avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKApG4aicW5835FUgOBY75jRDaYt8B84YIQL6v9J9lI4KEPA1nicGNxtdlI5iamIosXiaRqiavDAXmW2rQ/0',
        createTime: '今天 09：06',
        address: '福鼎家园',
        description: '速度快扩扩扩',
        imgList: [
          '../../images/matter/img1.jpeg',
          '../../images/matter/img2.jpeg',
          '../../images/matter/img3.jpeg',
          '../../images/matter/img4.jpeg',
          '../../images/matter/img5.jpeg',
          '../../images/matter/img6.jpeg',
          '../../images/matter/img7.jpeg',
          '../../images/matter/img8.jpeg',
          '../../images/matter/img9.jpeg'
        ]
      }
    ]
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
  clickNavigateToDetailPage() {
    wx.navigateTo({
      url: '../detail/detail?id=1'
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
