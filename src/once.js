var slice = require('./slice')

/**
  * 创建一个只能调用一次的函数,只会返回第一次执行后的结果
  *
  * @param {Function} callback 函数
  * @param {Object} context 上下文
  * @param {*} args 额外的参数
  * @return {Object}
  */
function once (callback, context) {
  var done = false
  var rest = null
  var args = slice(arguments, 2)
  return function () {
    if (done) {
      return rest
    }
    rest = callback.apply(context, slice(arguments).concat(args))
    done = true
    return rest
  }
}

module.exports = once
