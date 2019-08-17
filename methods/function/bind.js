var slice = require('../array/slice')

/**
  * 创建一个绑定上下文的函数
  *
  * @param {Function} callback 函数
  * @param {Object} context 上下文
  * @param {*} args 额外的参数
  * @return {Object}
  */
function bind (callback, context) {
  var args = slice(arguments, 2)
  return function () {
    return callback.apply(context, slice(arguments).concat(args))
  }
}

module.exports = bind
