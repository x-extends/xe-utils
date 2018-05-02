'use strict'

var baseExports = require('./base')
var arrayExports = require('./array')

/**
  * 获取一个指定范围内随机数
  *
  * @param {Number} min 最小值
  * @param {Number} max 最大值
  * @return {Number}
  */
function getRandom (min, max) {
  return min >= max ? min : ((min = min >> 0) + Math.round(Math.random() * ((max || 9) - min)))
}

function sortData (arr, iteratee) {
  return (baseExports.isFunction(iteratee) ? arrayExports.arraySort(arrayExports.arrayMap(arr, iteratee, this)) : arrayExports.arraySort(arr, iteratee))
}

/**
  * 获取最小值
  *
  * @param {Array} arr 数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @return {Number}
  */
function arrayMin () {
  return sortData.apply(this, arguments)[0]
}
var min = arrayMin

/**
  * 获取最大值
  *
  * @param {Array} arr 数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @return {Number}
  */
function arrayMax () {
  return sortData.apply(this, arguments).reverse()[0]
}
var max = arrayMax

/**
  * 千分位分隔符、小数点
  *
  * @param {String/Number} num 数值
  * @param {Object} 参数 {separator: 分隔符, fixed: 小数位数}
  * @return {String}
 */
function commafy (num, options) {
  var opts = baseExports.objectAssign({spaceNumber: 3, separator: ',', fixed: 0}, options)
  var result = parseFloat(('' + num).replace(/,/g, '') || 0).toFixed(opts.fixed).split('.')
  return result[0].replace(new RegExp('(?=(?!(\\b))(\\d{' + opts.spaceNumber + '})+$)', 'g'), opts.separator) + (result[1] ? '.' + result[1] : '')
}

/**
 * 转数值
 * @param { String/Number } str 数值
 */
function stringToNumber (str) {
  if (str) {
    var num = parseFloat(str)
    return isNaN(num) ? 0 : num
  }
  return 0
}

var numberExports = {
  getRandom: getRandom,
  arrayMin: arrayMin,
  min: min,
  arrayMax: arrayMax,
  max: max,
  commafy: commafy,
  toNumber: stringToNumber,
  stringToNumber: stringToNumber
}

module.exports = numberExports
