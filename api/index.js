const ajax = require('./ajax')

exports.login = (data) => ajax('/login', data)

exports.getDynamic = (data) => ajax('/v2/getConditionDynamic', data)

exports.getDetailDynamic = (data) => ajax('/v2/getDetailDynamic', data)

exports.getConditionComment = (data) => ajax('/v2/getConditionComment', data)

exports.sumitCommont = (data) => ajax('/v1/commont', data)
