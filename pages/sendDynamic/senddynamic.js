//index.js
//获取应用实例
const storage = require('../../libs/lib/storage')

const app = getApp();

Page({
  data: {
    sendData: {
      imgTempFilePaths: [],
      str_address: ''
    }
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
    let imgTempFilePaths = this.data.sendData.imgTempFilePaths
    //arr.splice(closeimgindex,1) 有问题不知道为什么，才用以下方法
    let imgTempFilePathsx = imgTempFilePaths.slice(0,closeimgindex).concat(imgTempFilePaths.slice(closeimgindex+1,imgTempFilePaths.length))
    this.setData({
      sendData:{
        imgTempFilePaths:  imgTempFilePathsx
      }
    })
  },
  chooseImgBtnClick(){
    let _this = this
    let imgTempFilePaths = this.data.sendData.imgTempFilePaths
    wx.chooseImage({
      count: 9 - imgTempFilePaths.length, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          sendData:{
            imgTempFilePaths:  res.tempFilePaths.concat(imgTempFilePaths)
          }
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
  }
});
