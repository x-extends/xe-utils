var helperCreateInInObjectString = require('./helperCreateInInObjectString')

/**
  * 判断是否数组
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
var isArray = Array.isArray || helperCreateInInObjectString('Array')

module.exports = isArray
