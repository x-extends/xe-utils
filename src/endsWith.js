var helperStringIndexOf = require('./helperStringIndexOf')
var helperStringSubstring = require('./helperStringSubstring')

var toValueString = require('./toValueString')

/**
  * 判断字符串是否在源字符串的尾部
  *
  * @param {String} str 字符串
  * @param {String/Number} val 值
  * @param {Number} startIndex 开始索引
  * @return {String}
  */
function endsWith (str, val, startIndex) {
  var rest = toValueString(str)
  var argsLen = arguments.length
  return argsLen > 1 && (argsLen > 2 ? helperStringIndexOf(helperStringSubstring(rest, 0, startIndex), val) === startIndex - 1 : helperStringIndexOf(rest, val) === rest.length - 1)
}

module.exports = endsWith
