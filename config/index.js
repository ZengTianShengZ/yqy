module.exports = {
    qnConfig: {
        region: 'ECN',
        domain: 'http://oyn5he3v2.bkt.clouddn.com', // // bucket 域名，下载资源时用到。如果设置，会在 success callback 的 res 参数加上可以直接使用的 ImageURL 字段。否则需要自己拼接
        //key: `${new Date().getTime()}.png`, // [非必须]自定义文件 key。如果不设置，默认为使用微信小程序 API 的临时文件名
        // 以下方法三选一即可，优先级为：uptoken > uptokenURL > uptokenFunc
        uptokenURL: 'https://yqy.mynatapp.cc/v2/qnUptoken', // 从指定 url 通过 HTTP GET 获取 uptoken，返回的格式必须是 json 且包含 uptoken 字段，例如： {"uptoken": "[yourTokenString]"}
    }
}