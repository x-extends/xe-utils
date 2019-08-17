var toString = require('./toString')

/**
  * 去除字符串右边的空格
  *
  * @param {String} str 字符串
  * @return {String}
  */
function trimRight (str) {
  return str && str.trimRight ? str.trimRight() : toString(str).replace(/[\s\uFEFF\xA0]+$/g, '')
}

module.exports = trimRight
