var helperCreateIterateHandle = require('./helperCreateIterateHandle')

/**
  * 查找匹配第一条数据
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
var find = helperCreateIterateHandle('find', 1, 3, true)

module.exports = find
