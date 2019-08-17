var isFunction = require('../base/isFunction')
var each = require('../base/each')

var toNumber = require('../number/toNumber')

/**
  * 求和函数，将数值相加
  *
  * @param {Array} array 数组
  * @param {Function/String} iterate 方法或属性
  * @param {Object} context 上下文
  * @return {Number}
  */
function sum (array, iterate, context) {
  var result = 0
  each(array, iterate ? isFunction(iterate) ? function () {
    result += toNumber(iterate.apply(context, arguments))
  } : function (val) {
    result += toNumber(val[iterate])
  } : function (val) {
    result += toNumber(val)
  })
  return result
}

module.exports = sum
