var map = require('./map')

var max = require('../number/max')

/**
 * 与 zip 相反
 *
 * @param {Array} arrays 数组集合
 */
function unzip (arrays) {
  var index, len
  var result = []
  if (arrays && arrays.length) {
    index = 0
    len = max(arrays, function (item) {
      return item.length || 0
    }).length
    for (; index < len; index++) {
      result.push(map(arrays, index))
    }
  }
  return result
}

module.exports = unzip
