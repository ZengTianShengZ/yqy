//index.js
//获取应用实例
const storage = require('../../libs/lib/storage')
const api = require('../../api/index')

const app = getApp()

Page({
  data: {
   winHeight: 0,
   // tab切换
   currentTab: 0,
   viewHeightUserInfo: 0,
   viewHeightSwiperTab: 0,
   swiperItemAutoFlag: false,
   obj_userInfo: {},
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
    let _this = this
  
    app.getTokenInfo().then(userInfo => {
      this.setData({
        obj_userInfo: userInfo
      })
      this.getUserDynamicList()
      this.getUserJoinList()
    })
    /**
     * 获取系统信息
     */
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        _this.setData({
          winHeight: res.windowHeight
        });
      }
    });
    this.initFixTabHeight()
  },
  async getUserDynamicList() {
    //     let {pageNum, pageSize, openId} = obj_condition
    const openId = this.data.obj_userInfo.openId
    try{
      const res = await api.getUserDynamicList({
        openId: openId,
        pageNum: 0,
        pageSize: 10
      })
      if (res.success) {
        console.log(res)
      } else {
        console.log('数据获取失败')
      }
    } catch(err) {
      console.log(err)
    }
  },
  async getUserJoinList(){
    const openId = this.data.obj_userInfo.openId
    try {
      const res = await api.getUserJoinList({
        openId: openId,
        pageNum: 0,
        pageSize: 10
      })
      if (res.success) {
        console.log(res)
      } else {
        console.log('数据获取失败')
      }
    } catch (err) {
      console.log(err)
    }
  },
  clickNavigateToDetailPage() {
    wx.navigateTo({
      url: '../detail/detail?id=1'
    })
  },
  initFixTabHeight() {
    let _this = this
    wx.createSelectorQuery().select('#user-info').boundingClientRect(function(rect){
      _this.setData({viewHeightUserInfo: rect.height})
    }).exec()
    wx.createSelectorQuery().select('#swiper-tab').boundingClientRect(function(rect){
      _this.setData({viewHeightSwiperTab: rect.height})
    }).exec()
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
  },
  onPageScroll(obj) {
    if(obj.scrollTop >= (this.data.viewHeightUserInfo -10)) {
      console.log(obj.scrollTop);
      this.data.swiperItemAutoFlag = true
    } else {
      this.data.swiperItemAutoFlag = false
    }
  }
})
