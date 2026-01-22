var shuffle = require('./shuffle')

/**
  * 从一个数组中随机返回几个元素
  *
  * @param {Array} array 数组
  * @param {Number} number 个数
  * @return {Array}
  */
function sample (array, number) {
  var result = shuffle(array)
  if (arguments.length <= 1) {
    return result[0]
  }
  if (number < result.length) {
    result.length = number || 0
  }
  return result
}

module.exports = sample
