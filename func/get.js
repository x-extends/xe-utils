var staticHGKeyRE = require('./staticHGKeyRE')

var helperGetHGSKeys = require('./helperGetHGSKeys')
var hasOwnProp = require('./hasOwnProp')
var isUndefined = require('./isUndefined')
var eqNull = require('./eqNull')

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

function getDeepProps (obj, key) {
  var matchs = key ? key.match(staticHGKeyRE) : ''
  return matchs ? (matchs[1] ? (obj[matchs[1]] ? obj[matchs[1]][matchs[2]] : undefined) : obj[matchs[2]]) : obj[key]
}

function getValueByPath (obj, property) {
  if (obj) {
    var rest, props, len
    var index = 0
    if (obj[property] || hasOwnProp(obj, property)) {
      return obj[property]
    } else {
      props = helperGetHGSKeys(property)
      len = props.length
      if (len) {
        for (rest = obj; index < len; index++) {
          rest = getDeepProps(rest, props[index])
          if (eqNull(rest)) {
            if (index === len - 1) {
              return rest
            }
            return
          }
        }
      }
      return rest
    }
  }
}

module.exports = get
