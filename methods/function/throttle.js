/**
  * 节流函数；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则至少每隔 n 秒毫秒调用一次该函数
  *
  * @param {Function} callback 回调
  * @param {Number} wait 多少秒毫
  * @param {Object} options 参数{leading: 是否在之前执行, trailing: 是否在之后执行}
  * @return {Function}
  */
function throttle (callback, wait, options) {
  var args, context
  var opts = options || {}
  var runFlag = false
  var timeout = 0
  var optLeading = 'leading' in opts ? opts.leading : true
  var optTrailing = 'trailing' in opts ? opts.trailing : false
  var runFn = function () {
    runFlag = true
    callback.apply(context, args)
    timeout = setTimeout(endFn, wait)
  }
  var endFn = function () {
    timeout = 0
    if (!runFlag && optTrailing === true) {
      runFn()
    }
  }
  var cancelFn = function () {
    var rest = timeout !== 0
    clearTimeout(timeout)
    runFlag = false
    timeout = 0
    return rest
  }
  var throttled = function () {
    args = arguments
    context = this
    runFlag = false
    if (timeout === 0) {
      if (optLeading === true) {
        runFn()
      } else if (optTrailing === true) {
        timeout = setTimeout(endFn, wait)
      }
    }
  }
  throttled.cancel = cancelFn
  return throttled
}

module.exports = throttle
