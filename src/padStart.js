var toValueString = require('./toValueString')
var isString = require('./isString')
var isUndefined = require('./isUndefined')

var helperStringRepeat = require('./helperStringRepeat')
var helperArraySlice = require('./helperArraySlice')

// 缓存原生方法引用，避免每次原型链查找
var fnPadStart = String.prototype.padStart

/**
  * 用指定字符从前面开始补全字符串
  *
  * @param {String} str 字符串
  * @param {Number} targetLength 结果长度
  * @param {String} padString 补全字符
  * @return {String}
  */
function padStart (str, targetLength, padString) {
  var rest = toValueString(str)
  targetLength = targetLength >> 0
  if (isUndefined(padString)) {
    padString = ' '
  } else if (!isString(padString)) {
    padString = '' + padString
  }

  if (fnPadStart) {
    return fnPadStart.call(rest, targetLength, padString)
  }

  // 降级路径
  var restLen = rest.length
  if (targetLength <= restLen) {
    return rest
  }
  var padStrLen = padString.length
  // 修复：空 padString 直接返回，避免 helperStringRepeat('', Infinity) 抛错
  if (!padStrLen) {
    return rest
  }
  targetLength -= restLen
  if (targetLength > padStrLen) {
    padString += helperStringRepeat(padString, targetLength / padStrLen)
  }
  return helperArraySlice(padString, 0, targetLength) + rest
}

module.exports = padStart
