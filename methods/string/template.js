var toValString = require('./toString')
var trim = require('./trim')

var get = require('../base/get')

/**
 * 解析动态字符串模板
 * @param {String} str 字符串模板
 * @param {Object} obj 对象
 */
function template (str, obj) {
  return toValString(str).replace(/\{{2}([.\w[\]\s]+)\}{2}/g, function (match, key) {
    return get(obj, trim(key))
  })
}

module.exports = template
