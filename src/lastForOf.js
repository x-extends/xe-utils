var isArray = require('./isArray')
var keys = require('./hasOwnProp')

/**
  * 已废弃
  * @deprecated
  */
function lastForOf (obj, iterate, context) {
  if (obj) {
    var len, list
    if (isArray(obj)) {
      for (len = obj.length - 1; len >= 0; len--) {
        if (iterate.call(context, obj[len], len, obj) === false) {
          break
        }
      }
    } else {
      list = keys(obj)
      for (len = list.length - 1; len >= 0; len--) {
        if (iterate.call(context, obj[list[len]], list[len], obj) === false) {
          break
        }
      }
    }
  }
}

module.exports = lastForOf
