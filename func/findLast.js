var isArray = require('./isArray')
var values = require('./values')

/**
  * 从右至左遍历，匹配最近的一条数据
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function findLast (obj, iterate, context) {
  if (obj) {
    if (!isArray(obj)) {
      obj = values(obj)
    }
    for (var len = obj.length - 1; len >= 0; len--) {
      if (iterate.call(context, obj[len], len, obj)) {
        return obj[len]
      }
    }
  }
}

module.exports = findLast
