var toArray = require('./toArray')
var isArray = require('./isArray')
var isFunction = require('./isFunction')
var isPlainObject = require('./isPlainObject')
var isUndefined = require('./isUndefined')
var isNull = require('./isNull')
var isNumber = require('./isNumber')
var eqNull = require('./eqNull')
var get = require('./get')

var ORDER_PROP_ASC = 'asc'
var ORDER_PROP_DESC = 'desc'

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

/**
 * 将数组进行排序
 *
 * @param {Array} arr 数组
 * @param {Function/String/Array} fieldConfs 方法或属性
 * @param {Object} context 上下文
 * @return {Array}
 */
function orderBy (arr, fieldConfs, context) {
  if (!arr) {
    return []
  }
  // 无排序规则：按值自然排序（先转数组，字符串会拆分为字符）
  if (eqNull(fieldConfs)) {
    return toArray(arr).sort(handleSort)
  }

  // 归一化排序规则：数组直接逐元素当规则（含 [] 空规则），其余包成单条
  var confs = isArray(fieldConfs) ? fieldConfs : [fieldConfs]
  var confLen = confs.length
  if (confLen === 0) {
    var res0 = []
    for (var k = 0, klen = arr.length; k < klen; k++) {
      res0[k] = arr[k]
    }
    return res0
  }

  // 解析每条规则的 field / order
  var fields = new Array(confLen)
  var orders = new Array(confLen)
  for (var i = 0; i < confLen; i++) {
    var handle = confs[i]
    var field = handle
    var order
    if (isArray(handle)) {
      field = handle[0]
      order = handle[1]
    } else if (isPlainObject(handle)) {
      field = handle.field
      order = handle.order
    }
    fields[i] = field
    orders[i] = order || ORDER_PROP_ASC
  }

  // 单次遍历：预计算所有排序键（Schwartzian 变换），比较时零取值开销
  // arr.length 非数字（如 -1/0/123/{}）时按 0 处理，与官方 map 行为一致返回 []
  var rawLen = arr.length
  var listLen = isNumber(rawLen) ? rawLen : 0
  var list = new Array(listLen)
  for (var j = 0; j < listLen; j++) {
    var data = arr[j]
    var keys = new Array(confLen)
    for (var f = 0; f < confLen; f++) {
      var fd = fields[f]
      keys[f] = isFunction(fd) ? fd.call(context, data, j, arr) : (fd ? get(data, fd) : data)
    }
    list[j] = {
      data: data,
      keys: keys
    }
  }

  // 从最后一条规则向前链式构建多字段比较器
  // 用工厂函数锁定每层的 idx/orderDesc/next，避免循环变量共享导致闭包互相污染
  function makeCompare (idx, orderDesc, next) {
    return function (item1, item2) {
      var k1 = item1.keys[idx]
      var k2 = item2.keys[idx]
      if (k1 === k2) {
        return next ? next(item1, item2) : 0
      }
      return orderDesc ? handleSort(k2, k1) : handleSort(k1, k2)
    }
  }
  var compares = null
  for (var c = confLen - 1; c >= 0; c--) {
    compares = makeCompare(c, orders[c] === ORDER_PROP_DESC, compares)
  }

  if (compares) {
    list.sort(compares)
  }

  // 拆包还原原始数据
  var result = new Array(listLen)
  for (var n = 0; n < listLen; n++) {
    result[n] = list[n].data
  }
  return result
}

module.exports = orderBy
