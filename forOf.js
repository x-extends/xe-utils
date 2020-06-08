var isArray = require('./isArray')
var hasOwnProp = require('./hasOwnProp')

/**
  * 迭代器,支持 return false 跳出循环 break
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function forOf (obj, iterate, context) {
  if (obj) {
    if (isArray(obj)) {
      for (var index = 0, len = obj.length; index < len; index++) {
        if (iterate.call(context, obj[index], index, obj) === false) {
          break
        }
      }
    } else {
      for (var key in obj) {
        if (hasOwnProp(obj, key)) {
          if (iterate.call(context, obj[key], key, obj) === false) {
            break
          }
        }
      }
    }
  }
}

module.exports = forOf
