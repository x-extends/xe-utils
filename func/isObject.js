var helperCreateInTypeof = require('./helperCreateInTypeof')

/**
  * 判断是否Object对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
var isObject = helperCreateInTypeof('object')

module.exports = isObject
