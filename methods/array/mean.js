var sum = require('./sum')

var toNumber = require('../number/toNumber')

var getSize = require('../base/getSize')

/**
  * 求平均值函数
  *
  * @param {Array} array 数组
  * @param {Function/String} iterate 方法或属性
  * @param {Object} context 上下文
  * @return {Number}
  */
function mean (array, iterate, context) {
  return toNumber(sum(array, iterate, context || this) / getSize(array))
}

module.exports = mean
