var toNumber = require('../number/toNumber')

/**
 * 裁剪 Arguments 或数组 array，从 start 位置开始到 end 结束，但不包括 end 本身的位置
 * @param {Array/Arguments} array 数组或Arguments
 * @param {Number} startIndex 开始索引
 * @param {Number} endIndex 结束索引
 */
function slice (array, startIndex, endIndex) {
  var result = []
  var argsSize = arguments.length
  if (array) {
    startIndex = argsSize >= 2 ? toNumber(startIndex) : 0
    endIndex = argsSize >= 3 ? toNumber(endIndex) : array.length
    if (array.slice) {
      return array.slice(startIndex, endIndex)
    }
    for (; startIndex < endIndex; startIndex++) {
      result.push(array[startIndex])
    }
  }
  return result
}

module.exports = slice
