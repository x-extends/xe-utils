var isArray = require('./isArray')
var keys = require('./hasOwnProp')

/**
  * 迭代器,从最后开始迭代,支持 return false 跳出循环 break
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function lastForOf (obj, iterate, context) {
  if (obj) {
    var len, list
    if (isArray(obj)) {
      for (len = obj.length - 1; len >= 0; len--) {
        if (iterate.call(context, obj[len], len, obj) === false) {
          break
        }
      }
    } else {
      list = keys(obj)
      for (len = list.length - 1; len >= 0; len--) {
        if (iterate.call(context, obj[list[len]], list[len], obj) === false) {
          break
        }
      }
    }
  }
}

module.exports = lastForOf
