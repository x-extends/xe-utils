var helperCreateiterateIndexOf = require('./helperCreateiterateIndexOf')

/**
  * 返回对象第一个索引值
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
var findIndexOf = helperCreateiterateIndexOf(function (obj, iterate, context) {
  for (var index = 0, len = obj.length; index < len; index++) {
    if (iterate.call(context, obj[index], index, obj)) {
      return index
    }
  }
  return -1
})

module.exports = findIndexOf
