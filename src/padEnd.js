var toValueString = require('./toValueString')
var isString = require('./isString')
var isUndefined = require('./isUndefined')

var helperStringRepeat = require('./helperStringRepeat')
var helperArraySlice = require('./helperArraySlice')

var fnPadEnd = String.prototype.padEnd

/**
  * 用指定字符从后面开始补全字符串
  *
  * @param {String} str 字符串
  * @param {Number} targetLength 结果长度
  * @param {String} padString 补全字符
  * @return {String}
  */
function padEnd (str, targetLength, padString) {
  var rest = toValueString(str)
  targetLength = targetLength >> 0
  if (isUndefined(padString)) {
    padString = ' '
  } else if (!isString(padString)) {
    padString = '' + padString
  }

  if (fnPadEnd) {
    return fnPadEnd.call(rest, targetLength, padString)
  }

  var restLen = rest.length
  if (targetLength <= restLen) {
    return rest
  }
  var padStrLen = padString.length
  if (!padStrLen) {
    return rest
  }
  targetLength -= restLen
  if (targetLength > padStrLen) {
    padString += helperStringRepeat(padString, targetLength / padStrLen)
  }
  return rest + helperArraySlice(padString, 0, targetLength)
}

module.exports = padEnd
