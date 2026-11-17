/**
 * 与 zip 相反
 *
 * @param {Array} arrays 数组集合
 */
function unzip (arrays) {
  var result = []
  if (!arrays || !arrays.length) {
    return result
  }
  var i, j, item
  var len = arrays.length
  // 求最大长度
  var maxLen = 0
  for (i = 0; i < len; i++) {
    item = arrays[i]
    if (item && item.length > maxLen) {
      maxLen = item.length
    }
  }
  // 按列填充
  for (j = 0; j < maxLen; j++) {
    var col = new Array(len)
    for (i = 0; i < len; i++) {
      item = arrays[i]
      col[i] = item ? item[j] : undefined
    }
    result.push(col)
  }
  return result
}

module.exports = unzip
