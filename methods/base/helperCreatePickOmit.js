var isFunction = require('./isFunction')
var isArray = require('./isArray')
var each = require('./each')
var findIndexOf = require('./findIndexOf')

function helperCreatePickOmit (case1, case2) {
  return function (obj, callback) {
    var item, index
    var rest = {}
    var result = []
    var context = this
    var args = arguments
    var len = args.length
    if (!isFunction(callback)) {
      for (index = 1; index < len; index++) {
        item = args[index]
        result.push.apply(result, isArray(item) ? item : [item])
      }
      callback = 0
    }
    each(obj, function (val, key) {
      if ((callback ? callback.call(context, val, key, obj) : findIndexOf(result, function (name) {
        return name === key
      }) > -1) ? case1 : case2) {
        rest[key] = val
      }
    })
    return rest
  }
}

module.exports = helperCreatePickOmit
