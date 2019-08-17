var trimRight = require('./trimRight')
var trimLeft = require('./trimLeft')

/**
  * 去除字符串左右两边的空格
  *
  * @param {String} str 字符串
  * @return {String}
  */
function trim (str) {
  return str && str.trim ? str.trim() : trimRight(trimLeft(str))
}

module.exports = trim
