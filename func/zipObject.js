var values = require('./values')
var each = require('./each')

/**
 * 根据键数组、值数组对转换为对象
 *
 * @param {Array} props 键数组
 * @param {Number} arr 值数组
 * @return {Object}
 */
function zipObject (props, arr) {
  var result = {}
  arr = arr || []
  each(values(props), function (val, key) {
    result[val] = arr[key]
  })
  return result
}

module.exports = zipObject
