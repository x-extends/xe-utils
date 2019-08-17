var hasOwnProp = require('../base/hasOwnProp')
var isArray = require('../base/isArray')

function helperCreateIterateHandle (prop, useArray, restIndex, matchValue, defaultValue) {
  return function (obj, iterate, context) {
    if (obj && iterate) {
      if (prop && obj[prop]) {
        return obj[prop](iterate, context)
      } else {
        if (useArray && isArray(obj)) {
          for (var index = 0, len = obj.length; index < len; index++) {
            if (!!iterate.call(context, obj[index], index, obj) === matchValue) {
              return [true, false, index, obj[index]][restIndex]
            }
          }
        } else {
          for (var key in obj) {
            if (hasOwnProp(obj, key)) {
              if (!!iterate.call(context, obj[key], key, obj) === matchValue) {
                return [true, false, key, obj[key]][restIndex]
              }
            }
          }
        }
      }
    }
    return defaultValue
  }
}

module.exports = helperCreateIterateHandle
