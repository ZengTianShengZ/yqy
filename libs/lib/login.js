var utils = require('./utils');
var constants = require('./constants');
var Session = require('./session');
const api = require('../../api');

const login = function login(options) {
    options = utils.extend({}, defaultOptions, options);
    api.login().then((res) => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
};

module.exports = login
