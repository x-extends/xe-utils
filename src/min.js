var helperCreateMinMax = require('./helperCreateMinMax')

/**
  * 获取最小值
  *
  * @param {Array} arr 数组
  * @param {Function} iterate(item, index, obj) 回调
  * @return {Number}
  */
var min = helperCreateMinMax(function (rest, itemVal) {
  return rest > itemVal
})

module.exports = min
