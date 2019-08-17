var helperCreateGetObjects = require('./helperCreateGetObjects')

/**
  * 获取对象所有属性、值
  *
  * @param {Object} obj 对象/数组
  * @return {Array}
  */
var entries = helperCreateGetObjects('entries', 2)

module.exports = entries
