var helperCreateGetObjects = require('./helperCreateGetObjects')

/**
  * 获取对象所有属性
  *
  * @param {Object} obj 对象/数组
  * @return {Array}
  */
var keys = helperCreateGetObjects('keys', 1)

module.exports = keys
