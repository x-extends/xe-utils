var helperCreateInTypeof = require('./helperCreateInTypeof')

/**
  * 判断是否Boolean对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
var isBoolean = helperCreateInTypeof('boolean')

module.exports = isBoolean
