var hasOwnProp = require('./hasOwnProp')

var staticParsePathNames = require('./staticParsePathNames')
var staticParsePathIdxs = require('./staticParsePathIdxs')
var helperParsePath = require('./helperParsePath')

/**
 * 检查键、路径是否是该对象的属性
 *
 * @param {Object/Array} data 对象
 * @param {String/Function} property 键、路径
 * @return {Boolean}
 */
function has (obj, property) {
  if (obj) {
    if (hasOwnProp(obj, property)) {
      return true
    } else {
      var len = helperParsePath(property)
      var rest = obj
      for (var index = 0; index < len; index++) {
        var key = staticParsePathNames[index]
        var idx = staticParsePathIdxs[index]
        var isHas = false
        if (key === null) {
          if (hasOwnProp(rest, idx)) {
            isHas = true
            rest = rest[idx]
          }
        } else if (idx !== -1) {
          var parent = rest[key]
          if (parent && hasOwnProp(parent, idx)) {
            isHas = true
            rest = parent[idx]
          }
        } else {
          if (hasOwnProp(rest, key)) {
            isHas = true
            rest = rest[key]
          }
        }
        if (isHas) {
          if (index === len - 1) {
            return true
          }
        } else {
          break
        }
      }
    }
  }
  return false
}

module.exports = has
