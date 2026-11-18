var assign = require('./assign')
var isFunction = require('./isFunction')
var hasOwnProp = require('./hasOwnProp')

var helperCreateEmptyObj = require('./helperCreateEmptyObj')
var helperFunctionApply = require('./helperFunctionApply')

/**
  * 函数去抖；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则将重新计算执行时间
  *
  * @param {Function} callback 回调
  * @param {Number} wait 多少毫秒
  * @param {Object} options 参数{leading: 是否在之前执行, trailing: 是否在之后执行}
  * @return {Function}
  */
function debounce (callback, wait, options) {
  var args = null
  var context = null
  var opts = typeof options === 'boolean'
    ? { leading: options, trailing: !options }
    : assign({ leading: false, trailing: true }, options)
  var runFlag = false
  var timeout = null
  var optLeading = opts.leading
  var optTrailing = opts.trailing

  // 泄漏加固：登记所有待触发定时器句柄，使 cancel 能一次性回收
  var timers = helperCreateEmptyObj()

  var gcFn = function () {
    args = null
    context = null
  }

  var runFn = function () {
    runFlag = true
    // 泄漏加固：callback 抛异常也不中断，保证 gcFn 断开 args/context 引用
    try {
      helperFunctionApply(callback, context, args)
    } finally {
      gcFn()
    }
  }

  var endFn = function () {
    if (timers[timeout]) {
      delete timers[timeout]
    }
    if (optLeading === true) {
      timeout = null
    }
    if (runFlag) {
      gcFn()
      return
    }
    if (optTrailing === true) {
      runFn()
      return
    }
    gcFn()
  }

  var cancelFn = function () {
    var rest = timeout !== null
    // 泄漏加固：清空全部待触发定时器，而不仅是最新的一个
    for (var key in timers) {
      if (hasOwnProp(timers, key)) {
        clearTimeout(Number(key))
      }
    }
    timers = {}
    gcFn()
    timeout = null
    runFlag = false
    return rest
  }

  var debounced = function () {
    runFlag = false
    args = arguments
    context = this
    if (timeout === null) {
      if (optLeading === true) {
        runFn()
      }
    } else {
      clearTimeout(timeout)
      delete timers[timeout]
    }
    timeout = setTimeout(endFn, wait)
    timers[timeout] = 1
  }

  if (isFunction(callback)) {
    debounced.cancel = cancelFn
  }

  return debounced
}

module.exports = debounce
