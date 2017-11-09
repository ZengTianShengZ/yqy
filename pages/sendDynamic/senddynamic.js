//index.js
//获取应用实例
const storage = require('../../libs/lib/storage')
const qiniuUploader = require("../../utils/qiniuUploader");
const config = require("../../config/index");
const api = require('../../api/index')

const app = getApp();

Page({
  data: {
    imgTempFilePaths: [],
    str_address: '',
    str_description: ''
  },
  onLoad() {
    this.initLocationAddress()
  },
  initLocationAddress() {
    let _this = this
    const location = storage.get('location')
    app.getQQMapWX().reverseGeocoder({
        location: {
            latitude: location.latitude,
            longitude: location.longitude
        },
        success: function(res) {
            _this.setData({
               str_address: `${res.result.address_component.district}•${res.result.address_component.street}`
            })
        },
        fail: function(res) {
          _this.setData({
            str_address: '请点击此处选择地址...'
          })
        }
    });
  },
  closeImgBtnClick(event) {
    let closeimgindex = event.currentTarget.dataset.closeimgindex
    let imgTempFilePaths = this.data.imgTempFilePaths
    //arr.splice(closeimgindex,1) 有问题不知道为什么，才用以下方法
    let imgTempFilePathsx = imgTempFilePaths.slice(0,closeimgindex).concat(imgTempFilePaths.slice(closeimgindex+1,imgTempFilePaths.length))
    this.setData({
      imgTempFilePaths: imgTempFilePathsx
    })
  },
  chooseImgBtnClick(){
    let _this = this
    let imgTempFilePaths = this.data.imgTempFilePaths
    wx.chooseImage({
      count: 9 - imgTempFilePaths.length, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          imgTempFilePaths: res.tempFilePaths.concat(imgTempFilePaths)
        })
      }
    })
  },
  chooseLocationBtnClick() {
    let _this = this
    wx.chooseLocation({
      success: function(res) {
        console.log(res);
        _this.setData({
           str_address: res.name
        })
      }
    })
  },
  bindFormSubmit(e) {
    this.setData({
      str_description: e.detail.value.textarea
    })
    app.getTokenInfo().then(res => {
      console.log(res)
      if (res.openId) {
        this.uploadFiles()
      } else {
        console.log('openId x 不存在')
      }
    }).catch(err => {
      console.log(err)
    })
  },
  uploadFiles(){
    const _this = this
    const imgUrlList = this.data.imgTempFilePaths
    // 生成一个Promise对象的数组
    var promises = imgUrlList.map(function (item) {
      return new Promise((reslove, reject) => {
        // 交给七牛上传
        qiniuUploader.upload(item, (res) => {
          reslove(res)
        }, (error) => {
          console.log('error: ' + error);
        }, config.qnConfig);
      })
    });
    Promise.all(promises).then(function (res) {
      let imgListStr =''
      res.forEach(item => {
        imgListStr += item.imageURL + ','
      })
      imgListStr = imgListStr.substring(0, imgListStr.length - 1)
      _this.sendDynamic(imgListStr)
    }).catch(function (reason) {
      console.log('.......文件上传出错')
      console.log(reason)
    });
  },
  // openId: String,
  // nickName: String,
  // avatarUrl: { type: String, default: 'http://oyn5he3v2.bkt.clouddn.com/defaultAvatar.png' },
  // //latitude: String,
  // //longitude: String,
  // location: { type: [Number], index: { type: '2dsphere', sparse: true } },
  // address: String,
  // description: String,
  // imgList: [],
  // joinIdList: []
  async sendDynamic(imgList) {
    const str_address = this.data.str_address
    const str_description = this.data.str_description
    try {
      const location = storage.get('location')
      const userInfo = await app.getTokenInfo()
      console.log(userInfo)
      if (!userInfo.openId) {
        console.log('openId  不存在')
        return
      }
      const sendData = {
        openId: userInfo.openId,
        nickName: userInfo.nickName,
        avatarUrl: userInfo.avatarUrl,
        location: `${location.longitude},${location.latitude}`,
        address: str_address,
        description: str_description,
        imgList: imgList
      }
      console.log(sendData)
      let res = await api.postDynamic(sendData)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
});
