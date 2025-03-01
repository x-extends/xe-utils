var isArray = require('./isArray')
var isPlainObject = require('./isPlainObject')
var isFunction = require('./isFunction')
var each = require('./each')

var helperCheckCopyKey = require('./helperCheckCopyKey')

function handleMerge (target, source) {
  if ((isPlainObject(target) && isPlainObject(source)) || (isArray(target) && isArray(source))) {
    each(source, function (val, key) {
      if (helperCheckCopyKey(key)) {
        target[key] = isFunction(source) ? val : handleMerge(target[key], val)
      }
    })
    return target
  }
  return source
}

/**
  * 将一个或多个源对象合并到目标对象中
  *
  * @param {Object} target 目标对象
  * @param {...Object}
  * @return {Boolean}
  */
var merge = function (target) {
  if (!target) {
    target = {}
  }
  var args = arguments
  var len = args.length
  for (var source, index = 1; index < len; index++) {
    source = args[index]
    if (source) {
      handleMerge(target, source)
    }
  }
  return target
}

module.exports = merge
