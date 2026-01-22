var helperCreateiterateIndexOf = require('./helperCreateiterateIndexOf')

/**
  * 从最后开始的索引值,返回对象第一个索引值
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
var findLastIndexOf = helperCreateiterateIndexOf(function (obj, iterate, context) {
  for (var len = obj.length - 1; len >= 0; len--) {
    if (iterate.call(context, obj[len], len, obj)) {
      return len
    }
  }
  return -1
})

module.exports = findLastIndexOf
