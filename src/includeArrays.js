var isArray = require('./isArray')
var includes = require('./includes')

/**
  * 判断数组是否包含另一数组
  *
  * @param {Array} array1 数组
  * @param {Array} array2 被包含数组
  * @return {Boolean}
  */
function includeArrays (array1, array2) {
  var len
  var index = 0
  if (isArray(array1) && isArray(array2)) {
    for (len = array2.length; index < len; index++) {
      if (!includes(array1, array2[index])) {
        return false
      }
    }
    return true
  }
  return includes(array1, array2)
}

module.exports = includeArrays
