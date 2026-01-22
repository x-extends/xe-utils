var helperCreateIterateHandle = require('./helperCreateIterateHandle')

/**
  * 对象中的值中的每一项运行给定函数,如果函数对任一项返回true,则返回true,否则返回false
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Boolean}
  */
var some = helperCreateIterateHandle('some', 1, 0, true, false)

module.exports = some
