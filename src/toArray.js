var map = require('./map')

/**
 * 将对象或者伪数组转为新数组
 *
 * @param {Array} list 数组
 * @return {Array}
 */
function toArray (list) {
  return map(list, function (item) {
    return item
  })
}

module.exports = toArray
