var each = require('../base/each')
var includes = require('./includes')

/**
  * 数组去重
  *
  * @param {Array} array 数组
  * @return {Array}
  */
function uniq (array) {
  var result = []
  each(array, function (value) {
    if (!includes(result, value)) {
      result.push(value)
    }
  })
  return result
}

module.exports = uniq
