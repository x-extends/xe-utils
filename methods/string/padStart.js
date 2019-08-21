var toValString = require('./toString')
var repeat = require('../string/repeat')

/**
  * 用指定字符从前面开始补全字符串
  *
  * @param {String} str 字符串
  * @param {Number} targetLength 结果长度
  * @param {Number} padString 补全字符
  * @return {String}
  */
function padStart (str, targetLength, padString, UNDEFINED) {
  var rest = toValString(str)
  targetLength = targetLength >> 0
  padString = padString === UNDEFINED ? ' ' : '' + padString
  if (rest.padStart) {
    return rest.padStart(targetLength, padString)
  }
  if (targetLength > rest.length) {
    targetLength -= rest.length
    if (targetLength > padString.length) {
      padString += repeat(padString, targetLength / padString.length)
    }
    return padString.slice(0, targetLength) + rest
  }
  return rest
}

module.exports = padStart
