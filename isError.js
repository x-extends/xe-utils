var helperCreateInInObjectString = require('./helperCreateInInObjectString')

/**
  * 判断是否Error对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
var isError = helperCreateInInObjectString('Error')

module.exports = isError
