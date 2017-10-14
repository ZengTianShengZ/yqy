const req = require('./request')
exports.login = (data) => req('/login', data)
