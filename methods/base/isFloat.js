var isArray = require('./isArray')
var isInteger = require('./isInteger')

/**
  * 判断是否小数
  *
  * @param {Number} obj 数值
  * @return {Boolean}
  */
function isFloat (obj) {
  return obj !== null && !isNaN(obj) && !isArray(obj) && !isInteger(obj)
}

module.exports = isFloat
