var random = require('./random')
var values = require('./values')

/**
  * 从一个数组中随机返回几个元素
  *
  * @param {Array} array 数组
  * @param {Number} number 个数
  * @return {Array}
  */
function sample (array, number) {
  var list = values(array)
  var len = list.length
  // 单参形态：随机返回其中一个元素，空集合返回 undefined
  if (arguments.length <= 1) {
    return len ? list[len > 1 ? random(0, len - 1) : 0] : undefined
  }
  if (len) {
    var k = number < len ? (number || 0) : len
    if (k < 0) k = 0
    for (var i = 0; i < k; i++) {
      var j = i > 0 ? random(i, len - 1) : random(0, len - 1)
      var tmp = list[i]
      list[i] = list[j]
      list[j] = tmp
    }
    list.length = k
    return list
  }
  return []
}

module.exports = sample
