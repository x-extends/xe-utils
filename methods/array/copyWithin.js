var isArray = require('../base/isArray')

/**
  * 浅复制数组的一部分到同一数组中的另一个位置,数组大小不变
  *
  * @param {Array} array 数组
  * @param {Number} target 从该位置开始替换数据
  * @param {Number} start 从该位置开始读取数据，默认为 0 。如果为负值，表示倒数
  * @param {Number} end 到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数
  * @return {Array}
  */
function copyWithin (array, target, start, end) {
  if (isArray(array) && array.copyWithin) {
    return array.copyWithin(target, start, end)
  }
  var replaceIndex, replaceArray
  var targetIndex = target >> 0
  var startIndex = start >> 0
  var len = array.length
  var endIndex = arguments.length > 3 ? end >> 0 : len
  if (targetIndex < len) {
    targetIndex = targetIndex >= 0 ? targetIndex : len + targetIndex
    if (targetIndex >= 0) {
      startIndex = startIndex >= 0 ? startIndex : len + startIndex
      endIndex = endIndex >= 0 ? endIndex : len + endIndex
      if (startIndex < endIndex) {
        for (replaceIndex = 0, replaceArray = array.slice(startIndex, endIndex); targetIndex < len; targetIndex++) {
          if (replaceArray.length <= replaceIndex) {
            break
          }
          array[targetIndex] = replaceArray[replaceIndex++]
        }
      }
    }
  }
  return array
}

module.exports = copyWithin
