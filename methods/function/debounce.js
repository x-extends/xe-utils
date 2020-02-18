/**
  * 函数去抖；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则将重新计算执行时间
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
    clearTimeout(timeout)
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
      clearTimeout(timeout)
    }
    timeout = setTimeout(endFn, wait)
  }
  debounced.cancel = cancelFn
  return debounced
}

module.exports = debounce
