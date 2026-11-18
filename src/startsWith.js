var helperStringIndexOf = require('./helperStringIndexOf')
var helperStringSubstring = require('./helperStringSubstring')

var toValueString = require('./toValueString')

/**
  * 判断字符串是否在源字符串的头部
  *
  * @param {String} str 字符串
  * @param {String/Number} val 值
  * @param {Number} startIndex 开始索引
  * @return {String}
  */
function startsWith (str, val, startIndex) {
  var rest = toValueString(str)
  return helperStringIndexOf(arguments.length === 1 ? rest : helperStringSubstring(rest, startIndex), val) === 0
}

module.exports = startsWith
