var slice = require('../array/slice')

/**
  * 该方法和 setTimeout 一样的效果，区别就是支持上下文和额外参数
  *
  * @param {Function} callback 函数
  * @param {Number} wait 延迟毫秒
  * @param {*} args 额外的参数
  * @return {Number}
 */
function delay (callback, wait) {
  var args = slice(arguments, 2)
  var context = this
  return setTimeout(function () {
    callback.apply(context, args)
  }, wait)
}

module.exports = delay
