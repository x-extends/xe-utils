var random = require('./random')
var values = require('./values')

/**
  * 将一个数组随机打乱，返回一个新的数组
  *
  * @param {Array} array 数组
  * @return {Array}
  */
function shuffle (array) {
  var list = values(array)
  var len = list.length
  // Fisher-Yates 原地交换：一次遍历 O(n)，避免原版 splice 的 O(n²) 搬移
  for (var i = len - 1; i > 0; i--) {
    var index = random(0, i)
    var tmp = list[i]
    list[i] = list[index]
    list[index] = tmp
  }
  return list
}

module.exports = shuffle
