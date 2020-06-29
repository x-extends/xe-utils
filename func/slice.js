/**
 * 裁剪 Arguments 或数组 array，从 start 位置开始到 end 结束，但不包括 end 本身的位置
 * @param {Array/Arguments} array 数组或Arguments
 * @param {Number} startIndex 开始索引
 * @param {Number} endIndex 结束索引
 */
function slice (array, startIndex, endIndex) {
  var result = []
  if (array) {
    for (startIndex = startIndex || 0, endIndex = endIndex || array.length; startIndex < endIndex; startIndex++) {
      result.push(array[startIndex])
    }
  }
  return result
}

module.exports = slice
