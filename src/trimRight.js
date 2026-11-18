var toValueString = require('./toValueString')
var helperStringReplace = require('./helperStringReplace')

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
  return helperStringReplace(toValueString(str), /[\s\uFEFF\xA0]+$/g, '')
}

module.exports = trimRight
