var isArray = require('./isArray')
var isInteger = require('./isInteger')
var isNull = require('./isNull')

/**
  * 判断是否小数
  *
  * @param {Number} obj 数值
  * @return {Boolean}
  */
function isFloat (obj) {
  return !isNull(obj) && !isNaN(obj) && !isArray(obj) && !isInteger(obj)
}

module.exports = isFloat
