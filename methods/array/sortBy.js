var arrayEach = require('./arrayEach')
var toArray = require('./toArray')
var map = require('./map')

var isArray = require('../base/isArray')
var isFunction = require('../base/isFunction')
var isUndefined = require('../base/isUndefined')
var isNull = require('../base/isNull')
var eqNull = require('../base/eqNull')
var get = require('../base/get')
var property = require('../function/property')

// function sortByDef (v1, v2) {
//   return v1 > v2 ? 1 : -1
// }

// 支持中文、数字、字母排序 > null > undefined
function sortByDef (v1, v2) {
  if (isUndefined(v1)) {
    return 1
  }
  if (isNull(v1)) {
    return isUndefined(v2) ? -1 : 1
  }
  return v1 && v1.localeCompare ? v1.localeCompare(v2) : (v1 > v2 ? 1 : -1)
}

function sortMultis (name, compares) {
  return function (item1, item2) {
    var v1 = item1[name]
    var v2 = item2[name]
    if (v1 === v2) {
      return compares ? compares(item1, item2) : 0
    }
    return sortByDef(v1, v2)
  }
}

function getSortPros (arr, list, iterate, context) {
  iterate = isArray(iterate) ? iterate : [iterate]
  arrayEach(iterate, function (prop, index) {
    arrayEach(list, isFunction(prop) ? function (val, key) {
      val[index] = prop.call(context, val.data, key, arr)
    } : function (val) {
      val[index] = get(val.data, prop)
    })
  })
  return iterate
}

/**
  * 数组按属性值升序
  *
  * @param {Array} arr 数组
  * @param {Function/String/Array} iterate 方法或属性
  * @param {Object} context 上下文
  * @return {Array}
  */
function sortBy (arr, iterate, context) {
  if (arr) {
    if (eqNull(iterate)) {
      return toArray(arr).sort(sortByDef)
    }
    var compares
    var list = map(arr, function (item) {
      return { data: item }
    })
    var sortPros = getSortPros(arr, list, iterate, context)
    var len = sortPros.length
    if (len) {
      while (len >= 0) {
        compares = sortMultis(len, compares)
        len--
      }
      list = list.sort(compares)
    }
    return map(list, property('data'))
  }
  return []
}

module.exports = sortBy
