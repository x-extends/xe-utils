var helperCreateIterateHandle = require('./helperCreateIterateHandle')

/**
  * 查找匹配第一条数据的键
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
var findKey = helperCreateIterateHandle('', 0, 2, true)

module.exports = findKey
