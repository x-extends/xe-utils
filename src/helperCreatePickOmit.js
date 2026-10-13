var isFunction = require('./isFunction')
var isArray = require('./isArray')
var each = require('./each')
var arrayEach = require('./arrayEach')
var hasOwnProp = require('./hasOwnProp')
var findIndexOf = require('./findIndexOf')

function helperCreatePickOmit (case1, case2) {
  return function (obj, callback) {
    var item, index
    var rest = {}
    var result = []
    var context = this
    var args = arguments
    var len = args.length
    var isFilterKeys = !isFunction(callback)
    if (isFilterKeys) {
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
    // 指定 key 收集时（pick），结果属性顺序与传入的 key 顺序保持一致
    if (isFilterKeys && case1) {
      var sortRest = {}
      arrayEach(result, function (name) {
        if (hasOwnProp(rest, name)) {
          sortRest[name] = rest[name]
        }
      })
      rest = sortRest
    }
    return rest
  }
}

module.exports = helperCreatePickOmit
