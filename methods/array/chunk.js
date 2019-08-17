var isArray = require('../base/isArray')

/**
  * 将一个数组分割成大小的组。如果数组不能被平均分配，那么最后一块将是剩下的元素
  *
  * @param {Array} array 数组
  * @param {Number} size 每组大小
  * @return {Array}
  */
function chunk (array, size) {
  var index
  var result = []
  var arrLen = size >> 0 || 1
  if (isArray(array)) {
    if (arrLen >= 0 && array.length > arrLen) {
      index = 0
      while (index < array.length) {
        result.push(array.slice(index, index + arrLen))
        index += arrLen
      }
    } else {
      result = array.length ? [array] : array
    }
  }
  return result
}

module.exports = chunk
