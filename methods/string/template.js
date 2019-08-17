var toValString = require('./toValString')

var get = require('../base/get')

/**
 * 解析动态字符串模板
 * @param {String} str 字符串模板
 * @param {Object} obj 对象
 */
function template (str, obj) {
  var rest = toValString(str)
  if (rest && obj) {
    return rest.replace(/\{{2}([.\w[\]\s]+)\}{2}/g, function (match, keys) {
      return get(obj, keys)
    })
  }
  return rest
}

module.exports = template
