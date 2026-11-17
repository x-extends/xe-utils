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
  if (!array) {
    return
  }
  var isInitialVal = arguments.length > 2
  // 数组快路径：直接委托原生 reduce，callback 以 null 上下文 apply 调用
  if (array.length && array.reduce) {
    var fn = function (previous, item, index) {
      return callback(previous, item, index, array)
    }
    return isInitialVal ? array.reduce(fn, initialValue) : array.reduce(fn)
  }
  // 对象/类数组：基于 keyList 手动累加
  var keyList = keys(array)
  var len = keyList.length
  var index = 0
  var previous = initialValue
  if (isInitialVal) {
    previous = array[keyList[0]]
    index = 1
  }
  for (; index < len; index++) {
    previous = callback(previous, array[keyList[index]], index, array)
  }
  return previous
}

module.exports = reduce
