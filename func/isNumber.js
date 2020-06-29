var helperCreateInTypeof = require('./helperCreateInTypeof')

/**
  * 判断是否Number对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
var isNumber = helperCreateInTypeof('number')

module.exports = isNumber
