var each = require('./each')
var isFunction = require('./isFunction')
var property = require('./property')

/**
  * 指定方法后的返回值组成的新对象
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function objectMap (obj, iterate, context) {
  var result = {}
  if (obj) {
    if (iterate) {
      if (!isFunction(iterate)) {
        iterate = property(iterate)
      }
      each(obj, function (val, index) {
        result[index] = iterate.call(context, val, index, obj)
      })
    } else {
      return obj
    }
  }
  return result
}

module.exports = objectMap
