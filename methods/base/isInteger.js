var isArray = require('./isArray')

/**
  * 判断是否整数
  *
  * @param {Number, String} number 数值
  * @return {Boolean}
  */
var isInteger = function (obj) {
  return obj !== null && !isNaN(obj) && !isArray(obj) && obj % 1 === 0
}

module.exports = isInteger
