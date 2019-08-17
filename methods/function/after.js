var slice = require('../array/slice')

/**
  * 创建一个函数, 调用次数超过 count 次之后执行回调并将所有结果记住后返回
  *
  * @param {Number} count 调用次数
  * @param {Function} callback 完成回调
  * @return {Object}
  */
function after (count, callback, context) {
  var runCount = 0
  var rests = []
  context = context || this
  return function () {
    runCount++
    if (runCount <= count) {
      rests.push(arguments[0])
    }
    if (runCount >= count) {
      callback.apply(context, [rests].concat(slice(arguments)))
    }
  }
}

module.exports = after
