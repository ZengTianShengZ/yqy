const ajax = require('./ajax')

exports.login = (data) => ajax('/login', data)

exports.getDynamic = (data) => ajax('/v2/getConditionDynamic', data)



