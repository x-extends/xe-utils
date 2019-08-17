/**
  * 创建一个防反跳策略函数，在函数最后一次调用多少毫秒之后才会再次执行，如果在期间内重复调用会重新计算延迟
  *
  * @param {Function} callback 回调
  * @param {Number} wait 多少秒毫
  * @param {Object} options 参数{leading: 是否在之前执行, trailing: 是否在之后执行}
  * @return {Function}
  */
function debounce (callback, wait, options) {
  var args, context
  var opts = options || {}
  var runFlag = false
  var timeout = 0
  var isLeading = typeof options === 'boolean'
  var optLeading = 'leading' in opts ? opts.leading : isLeading
  var optTrailing = 'trailing' in opts ? opts.trailing : !isLeading
  var clearTimeoutFn = clearTimeout
  var runFn = function () {
    runFlag = true
    timeout = 0
    callback.apply(context, args)
  }
  var endFn = function () {
    if (optLeading === true) {
      timeout = 0
    }
    if (!runFlag && optTrailing === true) {
      runFn()
    }
  }
  var cancelFn = function () {
    var rest = timeout !== 0
    clearTimeoutFn(timeout)
    timeout = 0
    return rest
  }
  var debounced = function () {
    runFlag = false
    args = arguments
    context = this
    if (timeout === 0) {
      if (optLeading === true) {
        runFn()
      }
    } else {
      clearTimeoutFn(timeout)
    }
    timeout = setTimeout(endFn, wait)
  }
  debounced.cancel = cancelFn
  return debounced
}

module.exports = debounce
