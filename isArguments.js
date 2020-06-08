var helperCreateInInObjectString = require('./helperCreateInInObjectString')

/**
  * 判断是否Arguments对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
var isArguments = helperCreateInInObjectString('Arguments')

module.exports = isArguments
