var helperCreateInInObjectString = require('./helperCreateInInObjectString')

/**
  * 判断是否RegExp对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
var isRegExp = helperCreateInInObjectString('RegExp')

module.exports = isRegExp
