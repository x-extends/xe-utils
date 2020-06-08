var helperCreateInTypeof = require('./helperCreateInTypeof')

/**
  * 判断是否方法
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
var isFunction = helperCreateInTypeof('function')

module.exports = isFunction
