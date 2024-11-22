var helperNumberAdd = require('./helperNumberAdd')

var isFunction = require('./isFunction')
var isArray = require('./isArray')
var each = require('./each')
var get = require('./get')

/**
  * 求和函数，将数值相加
  *
  * @param {Array} array 数组
  * @param {Function/String} iterate 方法或属性
  * @param {Object} context 上下文
  * @return {Number}
  */
function sum (array, iterate, context) {
  var result = 0
  each(array && array.length > 2 && isArray(array) ? array.sort() : array, iterate ? isFunction(iterate) ? function () {
    result = helperNumberAdd(result, iterate.apply(context, arguments))
  } : function (val) {
    result = helperNumberAdd(result, get(val, iterate))
  } : function (val) {
    result = helperNumberAdd(result, val)
  })
  return result
}

module.exports = sum
