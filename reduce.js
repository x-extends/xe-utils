var keys = require('./keys')

/**
  * 接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值。
  *
  * @param {Array} array 数组
  * @param {Function} callback 方法
  * @param {Object} initialValue 初始值
  * @return {Number}
  */
function reduce (array, callback, initialValue) {
  if (array) {
    var len, reduceMethod
    var index = 0
    var context = null
    var previous = initialValue
    var isInitialVal = arguments.length > 2
    var keyList = keys(array)
    if (array.length && array.reduce) {
      reduceMethod = function () {
        return callback.apply(context, arguments)
      }
      if (isInitialVal) {
        return array.reduce(reduceMethod, previous)
      }
      return array.reduce(reduceMethod)
    }
    if (isInitialVal) {
      index = 1
      previous = array[keyList[0]]
    }
    for (len = keyList.length; index < len; index++) {
      previous = callback.call(context, previous, array[keyList[index]], index, array)
    }
    return previous
  }
}

module.exports = reduce
