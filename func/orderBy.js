var arrayEach = require('./arrayEach')
var toArray = require('./toArray')
var map = require('./map')

var isArray = require('./isArray')
var isFunction = require('./isFunction')
var isPlainObject = require('./isPlainObject')
var isUndefined = require('./isUndefined')
var isNull = require('./isNull')
var eqNull = require('./eqNull')
var get = require('./get')
var property = require('./property')

var ORDER_PROP_ASC = 'asc'
var ORDER_PROP_DESC = 'desc'

// function handleSort (v1, v2) {
//   return v1 > v2 ? 1 : -1
// }

// '' < 数字 < 字符 < null < undefined
function handleSort (v1, v2) {
  if (isUndefined(v1)) {
    return 1
  }
  if (isNull(v1)) {
    return isUndefined(v2) ? -1 : 1
  }
  return v1 && v1.localeCompare ? v1.localeCompare(v2) : (v1 > v2 ? 1 : -1)
}

function buildMultiOrders (name, confs, compares) {
  return function (item1, item2) {
    var v1 = item1[name]
    var v2 = item2[name]
    if (v1 === v2) {
      return compares ? compares(item1, item2) : 0
    }
    return confs.order === ORDER_PROP_DESC ? handleSort(v2, v1) : handleSort(v1, v2)
  }
}

function getSortConfs (arr, list, fieldConfs, context) {
  var sortConfs = []
  fieldConfs = isArray(fieldConfs) ? fieldConfs : [fieldConfs]
  arrayEach(fieldConfs, function (handle, index) {
    if (handle) {
      var field = handle
      var order
      if (isArray(handle)) {
        field = handle[0]
        order = handle[1]
      } else if (isPlainObject(handle)) {
        field = handle.field
        order = handle.order
      }
      sortConfs.push({
        field: field,
        order: order || ORDER_PROP_ASC
      })
      arrayEach(list, isFunction(field) ? function (item, key) {
        item[index] = field.call(context, item.data, key, arr)
      } : function (item) {
        item[index] = field ? get(item.data, field) : item.data
      })
    }
  })
  return sortConfs
}

/**
  * 将数组进行排序
  *
  * @param {Array} arr 数组
  * @param {Function/String/Array} fieldConfs 方法或属性
  * @param {Object} context 上下文
  * @return {Array}
  */
function orderBy (arr, fieldConfs, context) {
  if (arr) {
    if (eqNull(fieldConfs)) {
      return toArray(arr).sort(handleSort)
    }
    var compares
    var list = map(arr, function (item) {
      return { data: item }
    })
    var sortConfs = getSortConfs(arr, list, fieldConfs, context)
    var len = sortConfs.length - 1
    while (len >= 0) {
      compares = buildMultiOrders(len, sortConfs[len], compares)
      len--
    }
    if (compares) {
      list = list.sort(compares)
    }
    return map(list, property('data'))
  }
  return []
}

module.exports = orderBy
