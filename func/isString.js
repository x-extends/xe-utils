var helperCreateInTypeof = require('./helperCreateInTypeof')

/**
  * 判断是否String对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
var isString = helperCreateInTypeof('string')

module.exports = isString
