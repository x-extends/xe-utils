var isFunction = require('./isFunction')
var isString = require('./isString')
var isArray = require('./isArray')
var hasOwnProp = require('./hasOwnProp')

function helperCreateiterateIndexOf (callback) {
  return function (obj, iterate, context) {
    if (obj && isFunction(iterate)) {
      if (isArray(obj) || isString(obj)) {
        return callback(obj, iterate, context)
      }
      for (var key in obj) {
        if (hasOwnProp(obj, key)) {
          if (iterate.call(context, obj[key], key, obj)) {
            return key
          }
        }
      }
    }
    return -1
  }
}

module.exports = helperCreateiterateIndexOf
