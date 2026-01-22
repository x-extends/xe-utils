var isArray = require('./isArray')
var arrayEach = require('./arrayEach')

function flattenDeep (array, deep) {
  var result = []
  arrayEach(array, function (vals) {
    result = result.concat(isArray(vals) ? (deep ? flattenDeep(vals, deep) : vals) : [vals])
  })
  return result
}

/**
  * 将一个多维数组铺平
  * @param {Array} array 数组
  * @param {Boolean} deep 是否深层
  * @return {Array}
  */
function flatten (array, deep) {
  if (isArray(array)) {
    return flattenDeep(array, deep)
  }
  return []
}

module.exports = flatten
