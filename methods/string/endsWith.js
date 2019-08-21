var toValString = require('./toString')

/**
  * 判断字符串是否在源字符串的尾部
  *
  * @param {String} str 字符串
  * @param {String/Number} val 值
  * @param {Number} startIndex 开始索引
  * @return {String}
  */
function endsWith (str, val, startIndex) {
  var rest = toValString(str)
  var argsLen = arguments.length
  return argsLen > 1 && (argsLen > 2 ? rest.substring(0, startIndex).indexOf(val) === startIndex - 1 : rest.indexOf(val) === rest.length - 1)
}

module.exports = endsWith
