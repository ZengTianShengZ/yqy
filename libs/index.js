var constants = require('./lib/constants');
var login = require('./lib/login');
var Session = require('./lib/session');
var request = require('./lib/request');
var storage = require('./lib/storage');

// 导出错误类型码
Object.keys(constants).forEach(function (key) {
    if (key.indexOf('ERR_') === 0) {
        exports[key] = constants[key];
    }
});

var exports = module.exports = {
    login: login.login,
    setLoginUrl: login.setLoginUrl,
    LoginError: login.LoginError,
    clearSession: Session.clear,
    getSession: Session.get,
    setSession: Session.set,
    request: request.request,
    RequestError: request.RequestError,
    storage: storage
};
