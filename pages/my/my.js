//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    winWidth: 400,
   winHeight: 500,
   // tab切换
   currentTab: 0,
    obj_userInfo: {},
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 2000,
    duration: 400,
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
  onLoad: function () {
    /**
     * 获取系统信息
     */
    // wx.getSystemInfo({
    //   success: function( res ) {
    //     that.setData( {
    //       winWidth: res.windowWidth,
    //       winHeight: res.windowHeight
    //     });
    //   }
    // });

    wx.getUserInfo({
      success: res => {
        this.setData({
          obj_userInfo: res.userInfo
        })
      }
    })
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  /**
     * 滑动切换tab
     */
  bindChange: function( e ) {

    var that = this;
    that.setData( { currentTab: e.detail.current });

  },
  /**
   * 点击tab切换
   */
  swichNav: function( e ) {

    var that = this;

    if( this.data.currentTab === e.target.dataset.current ) {
      return false;
    } else {
      that.setData( {
        currentTab: e.target.dataset.current
      })
    }
  }
})
