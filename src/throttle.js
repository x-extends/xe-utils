var helperFunctionApply = require('./helperFunctionApply')

var assign = require('./assign')
var isFunction = require('./isFunction')

/**
  * 节流函数；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则至少每隔 n 秒毫秒调用一次该函数
  *
  * @param {Function} callback 回调
  * @param {Number} wait 多少毫秒
  * @param {Object} options 参数{leading: 是否在之前执行, trailing: 是否在之后执行}
  * @return {Function}
  */
function throttle (callback, wait, options) {
  var opts = assign({ leading: true, trailing: true }, options)
  var optLeading = opts.leading
  var optTrailing = opts.trailing

  var args = null
  var context = null
  var runFlag = false
  var timeout = null
  // 跟踪所有未触发的定时器句柄；同一时刻可能并存多个（官方时序要求每次调用各挂一个），
  // 用 Set 统一管理，使 cancel() 能一次性清空全部，避免堆积定时器无法回收。
  var timers = null

  function track (id) {
    if (!timers) timers = {}
    timers[id] = 1
    return id
  }
  function untrack (id) {
    if (timers) delete timers[id]
  }
  function clearAllTimers () {
    if (timers) {
      for (var id in timers) {
        if (Object.prototype.hasOwnProperty.call(timers, id)) clearTimeout(Number(id))
      }
      timers = null
    }
    timeout = null
  }

  // 释放对参数与上下文的引用，避免闭包长期持有大对象
  function gcFn () {
    args = null
    context = null
  }

  function runFn () {
    runFlag = true
    if (isFunction(callback)) {
      helperFunctionApply(callback, context, args)
    }
    timeout = track(setTimeout(endFn, wait))
    gcFn()
  }

  function endFn () {
    untrack(timeout)
    timeout = null
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

  function cancelFn () {
    var rest = timeout !== null || (timers && Object.keys(timers).length > 0)
    clearAllTimers()
    gcFn()
    runFlag = false
    return !!rest
  }

  function throttled () {
    args = arguments
    context = this
    runFlag = false
    if (timeout === null && optLeading === true) {
      runFn()
      return
    }
    if (optTrailing === true) {
      timeout = track(setTimeout(endFn, wait))
    }
  }

  throttled.cancel = cancelFn

  return throttled
}

module.exports = throttle
