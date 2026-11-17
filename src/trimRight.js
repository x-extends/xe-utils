var toValueString = require('./toValueString')

/**
  * 去除字符串右边的空格
  *
  * @param {String} str 字符串
  * @return {String}
  */
function trimRight (str) {
  if (str && str.trimRight) {
    return str.trimRight()
  }
  return toValueString(str).replace(/[\s\uFEFF\xA0]+$/g, '')
}

module.exports = trimRight
