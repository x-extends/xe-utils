var hasOwnProp = require('./hasOwnProp')
var isUndefined = require('./isUndefined')
var eqNull = require('./eqNull')
var isString = require('./isString')

var staticParsePathNames = require('./staticParsePathNames')
var staticParsePathIdxs = require('./staticParsePathIdxs')
var helperParsePath = require('./helperParsePath')

function getValueByPath (obj, property) {
  if (!obj) {
    return
  }
  var val = obj[property]
  if (val || hasOwnProp(obj, property)) {
    return val
  }
  // 快路径：仅「字符串 + 非空 + 不含 '.' + 不含 '['」
  if (property && isString(property) && property.indexOf('.') === -1 && property.indexOf('[') === -1) {
    return
  }

  var len = helperParsePath(property)
  if (!len) return

  var rest = obj
  for (var index = 0; index < len; index++) {
    var key = staticParsePathNames[index]
    var idx = staticParsePathIdxs[index]
    var child
    if (key === null) {
      child = rest[idx]
    } else if (idx === -1) {
      child = rest[key]
    } else {
      child = rest[key] ? rest[key][idx] : undefined
    }
    if (eqNull(child)) {
      return index === len - 1 ? child : undefined
    }
    rest = child
  }
  return rest
}

/**
 * 获取对象的属性的值，如果值为 undefined，则返回默认值
 * @param {Object/Array} obj 对象
 * @param {String/Function} property 键、路径
 * @param {Object} defaultValue 默认值
 * @return {Object}
 */
function get (obj, property, defaultValue) {
  if (eqNull(obj)) {
    return defaultValue
  }
  var result = getValueByPath(obj, property)
  return isUndefined(result) ? defaultValue : result
}

module.exports = get
