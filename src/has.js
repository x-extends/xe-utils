var staticHGKeyRE = require('./staticHGKeyRE')

var helperGetHGSKeys = require('./helperGetHGSKeys')

var hasOwnProp = require('./hasOwnProp')

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
      var prop, arrIndex, objProp, matchs, rest, isHas
      var props = helperGetHGSKeys(property)
      var index = 0
      var len = props.length
      for (rest = obj; index < len; index++) {
        isHas = false
        prop = props[index]
        matchs = prop ? prop.match(staticHGKeyRE) : ''
        if (matchs) {
          arrIndex = matchs[1]
          objProp = matchs[2]
          if (arrIndex) {
            if (rest[arrIndex]) {
              if (hasOwnProp(rest[arrIndex], objProp)) {
                isHas = true
                rest = rest[arrIndex][objProp]
              }
            }
          } else {
            if (hasOwnProp(rest, objProp)) {
              isHas = true
              rest = rest[objProp]
            }
          }
        } else {
          if (hasOwnProp(rest, prop)) {
            isHas = true
            rest = rest[prop]
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
