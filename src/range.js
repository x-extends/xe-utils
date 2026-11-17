/**
  * 序号列表生成函数
  *
  * @param {Number} start 起始值
  * @param {Number} stop 结束值
  * @param {Number} step 自增值
  * @return {Array}
  */
function range (start, stop, step) {
  var result = []
  var args = arguments
  var index, len, size
  if (args.length < 2) {
    stop = start
    start = 0
  }
  index = start >> 0
  len = stop >> 0
  // 仅当起始小于结束时才生成
  if (index < stop) {
    step = step >> 0 || 1
    if (step <= 0) {
      return result
    }
    size = (len - index + (step - 1)) / step >> 0
    if (size > 0) {
      result.length = size
      for (var i = 0; i < size; i++) {
        result[i] = index
        index += step
      }
    }
  }
  return result
}

module.exports = range
