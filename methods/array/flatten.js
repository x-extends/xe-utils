var isArray = require('../base/isArray')
var arrayEach = require('./arrayEach')

function flattenDeep (array, deep) {
  var result = []
  arrayEach(array, function (vals) {
    result = result.concat(isArray(vals) ? (deep ? flattenDeep(vals, deep) : vals) : [vals])
  })
  return result
}

/**
  * 平铺一层数组
  * @param {Array} array 数组
  * @param {Boolean} deep 是否平铺多级
  * @return {Array}
  */
function flatten (array, deep) {
  if (isArray(array)) {
    return flattenDeep(array, deep)
  }
  return []
}

module.exports = flatten
