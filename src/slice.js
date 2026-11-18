var helperStringSubstring = require('./helperStringSubstring')

var toNumber = require('./toNumber')
var isString = require('./isString')

/**
 * 裁剪 string/Arguments/array，从 start 位置开始到 end 结束，但不包括 end 本身的位置
 * @param {String/Array/Arguments} data 数组或Arguments
 * @param {Number} startIndex 开始索引
 * @param {Number} endIndex 结束索引
 */
function slice (data, startIndex, endIndex) {
  if (!data) {
    return isString(data) ? '' : []
  }
  var argsSize = arguments.length
  startIndex = argsSize >= 2 ? toNumber(startIndex) : 0
  endIndex = argsSize >= 3 ? toNumber(endIndex) : data.length
  // 数组 / 字符串等原生支持 slice 的类型直接走原生，最快且负索引语义与规范一致
  if (data.slice) {
    return data.slice(startIndex, endIndex)
  }
  // 类数组对象（如旧版 arguments、无 slice 的自定义集合）回退
  if (isString(data)) {
    return helperStringSubstring(data, startIndex < 0 ? Math.max(0, data.length + startIndex) : startIndex, endIndex)
  }
  if (startIndex < 0) {
    startIndex = Math.max(0, data.length + startIndex)
  }
  var result = []
  for (; startIndex < endIndex; startIndex++) {
    result.push(data[startIndex])
  }
  return result
}

module.exports = slice
