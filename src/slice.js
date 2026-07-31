var toNumber = require('./toNumber')
var isString = require('./isString')

/**
 * 裁剪string,Arguments,array，从 start 位置开始到 end 结束，但不包括 end 本身的位置
 * @param {String/Array/Arguments} data 数组或Arguments
 * @param {Number} startIndex 开始索引
 * @param {Number} endIndex 结束索引
 */
function slice (data, startIndex, endIndex) {
  var isStr = isString(data)
  var result = isStr ? '' : []
  var argsSize = arguments.length
  if (data) {
    startIndex = argsSize >= 2 ? toNumber(startIndex) : 0
    endIndex = argsSize >= 3 ? toNumber(endIndex) : data.length
    if (data.slice) {
      return data.slice(startIndex, endIndex)
    }
    if (startIndex < 0) {
      startIndex = Math.max(0, data.length + startIndex)
    }
    if (isStr) {
      return data.substring(startIndex, endIndex)
    } 
    for (; startIndex < endIndex; startIndex++) {
      result.push(data[startIndex])
    }
  }
  return result
}

module.exports = slice
