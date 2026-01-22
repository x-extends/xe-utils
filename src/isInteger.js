var isArray = require('./isArray')
var isNull = require('./isNull')

/**
  * 判断是否整数
  *
  * @param {Number, String} number 数值
  * @return {Boolean}
  */
var isInteger = function (obj) {
  return !isNull(obj) && !isNaN(obj) && !isArray(obj) && obj % 1 === 0
}

module.exports = isInteger
