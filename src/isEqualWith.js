var helperEqualCompare = require('./helperEqualCompare')
var helperDefaultCompare = require('./helperDefaultCompare')

var isFunction = require('./isFunction')
var isUndefined = require('./isUndefined')

/**
 * 深度比较两个对象之间的值是否相等，使用自定义比较函数
 *
 * @param {Object} obj1 值1
 * @param {Object} obj2 值2
 * @param {Function} func 自定义函数
 * @return {Boolean}
 */
function isEqualWith (obj1, obj2, func) {
  if (isFunction(func)) {
    return helperEqualCompare(obj1, obj2, function (v1, v2, key, obj1, obj2) {
      var result = func(v1, v2, key, obj1, obj2)
      return isUndefined(result) ? helperDefaultCompare(v1, v2) : !!result
    }, func)
  }
  return helperEqualCompare(obj1, obj2, helperDefaultCompare)
}

module.exports = isEqualWith
