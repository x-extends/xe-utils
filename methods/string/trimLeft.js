var toString = require('./toString')

/**
  * 去除字符串左边的空格
  *
  * @param {String} str 字符串
  * @return {String}
  */
function trimLeft (str) {
  return str && str.trimLeft ? str.trimLeft() : toString(str).replace(/^[\s\uFEFF\xA0]+/g, '')
}

module.exports = trimLeft
