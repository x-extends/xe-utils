var pluck = require('./pluck')

var max = require('./max')

/**
 * 与 zip 相反
 *
 * @param {Array} arrays 数组集合
 */
function unzip (arrays) {
  var index, maxItem, len
  var result = []
  if (arrays && arrays.length) {
    index = 0
    maxItem = max(arrays, function (item) {
      return item ? item.length : 0
    })
    for (len = maxItem ? maxItem.length : 0; index < len; index++) {
      result.push(pluck(arrays, index))
    }
  }
  return result
}

module.exports = unzip
