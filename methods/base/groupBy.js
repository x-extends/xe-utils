var isEmpty = require('./isEmpty')
var isObject = require('./isObject')
var isFunction = require('./isFunction')
var property = require('../function/property')
var each = require('./each')

function createiterateEmpty (iterate) {
  return function () {
    return isEmpty(iterate)
  }
}

/**
  * 集合分组,默认使用键值分组,如果有iterate则使用结果进行分组
  *
  * @param {Array} obj 对象
  * @param {Function} iterate 回调/对象属性
  * @param {Object} context 上下文
  * @return {Object}
  */
function groupBy (obj, iterate, context) {
  var groupKey
  var result = {}
  if (obj) {
    if (iterate && isObject(iterate)) {
      iterate = createiterateEmpty(iterate)
    } else if (!isFunction(iterate)) {
      iterate = property(iterate)
    }
    each(obj, function (val, key) {
      groupKey = iterate ? iterate.call(context, val, key, obj) : val
      if (result[groupKey]) {
        result[groupKey].push(val)
      } else {
        result[groupKey] = [val]
      }
    })
  }
  return result
}

module.exports = groupBy
