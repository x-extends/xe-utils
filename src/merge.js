var isArray = require('./isArray')
var isPlainObject = require('./isPlainObject')
var clone = require('./clone')

var hasOwnProp = require('./hasOwnProp')
var helperCheckCopyKey = require('./helperCheckCopyKey')

/**
 * 合并单个值
 * 基本类型 / 函数直接返回，避免无谓的类型判断与 clone 装箱
 */
function handleMergeValue (targetVal, val) {
  var t = typeof val
  // 函数直接引用赋值（不深拷贝）
  if (t === 'function') {
    return val
  }
  // 基本类型（含 null/undefined）直接赋值，等价于 clone(val, true)
  if (val === null || t !== 'object') {
    return val
  }
  return handleMerge(targetVal, val)
}

function handleMerge (target, source) {
  // 先判断 source，不可合并直接 clone 返回，省 target 的类型判断
  if (isArray(source)) {
    if (isArray(target)) {
      // 跳过稀疏空洞，与原 forEach 语义一致
      for (var i = 0, len = source.length; i < len; i++) {
        if (i in source) {
          target[i] = handleMergeValue(target[i], source[i])
        }
      }
      return target
    }
    return clone(source, true)
  }
  if (isPlainObject(source)) {
    if (isPlainObject(target)) {
      for (var key in source) {
        // hasOwn 过滤原型链；helperCheckCopyKey 防原型污染
        if (hasOwnProp(source, key) && helperCheckCopyKey(key)) {
          target[key] = handleMergeValue(target[key], source[key])
        }
      }
      return target
    }
    return clone(source, true)
  }
  return clone(source, true)
}

/**
  * 将一个或多个源对象合并到目标对象中
  *
  * @param {Object} target 目标对象
  * @param {...Object}
  * @return {Object}
  */
function merge (target) {
  if (!target) {
    target = {}
  }
  var args = arguments
  for (var i = 1, len = args.length; i < len; i++) {
    var source = args[i]
    if (source) {
      handleMerge(target, source)
    }
  }
  return target
}

module.exports = merge
