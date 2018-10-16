'use strict'

var XEUtils = require('../core/utils')
var baseExports = require('./base')

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

function sortData (arr, iterate) {
  var list = baseExports.clone(arr)
  var arraySort = XEUtils.arraySort
  return (baseExports.isFunction(iterate) ? arraySort(XEUtils.arrayMap(list, iterate, this)) : arraySort(list, iterate))
}

/**
  * 获取最小值
  *
  * @param {Array} arr 数组
  * @param {Function} iterate(item, index, obj) 回调
  * @return {Number}
  */
function arrayMin () {
  return sortData.apply(this, arguments)[0]
}

/**
  * 获取最大值
  *
  * @param {Array} arr 数组
  * @param {Function} iterate(item, index, obj) 回调
  * @return {Number}
  */
function arrayMax () {
  return sortData.apply(this, arguments).reverse()[0]
}

/**
  * 千分位分隔符、小数点
  *
  * @param {String/Number} num 数值
  * @param {Object} 参数 {spaceNumber: 分割位数(默认3), separator: 分隔符(默认,), fixed: 小数位数(默认0)}
  * @return {String}
 */
function commafy (num, options) {
  num = ('' + num).replace(/,/g, '')
  if (num) {
    var opts = baseExports.assign({}, options)
    var optFixed = opts.fixed
    var result = optFixed === null ? [num] : (parseFloat(num).toFixed(optFixed || 0)).split('.')
    return result[0].replace(new RegExp('(?=(?!(\\b))(\\d{' + (opts.spaceNumber || 3) + '})+$)', 'g'), (opts.separator || ',')) + (result[1] ? '.' + result[1] : '')
  }
  return num
}

/**
 * 转数值
 * @param { String/Number } str 数值
 * @return {Number}
 */
function stringToNumber (str) {
  if (str) {
    var num = parseFloat(str)
    return isNaN(num) ? 0 : num
  }
  return 0
}

/**
 * 转整数
 * @param { String/Number } str 数值
 * @return {Number}
 */
function stringToInteger (str) {
  return parseInt(stringToNumber(str))
}

var numberExports = {
  random: getRandom,
  getRandom: getRandom,
  arrayMin: arrayMin,
  min: arrayMin,
  arrayMax: arrayMax,
  max: arrayMax,
  commafy: commafy,
  toNumber: stringToNumber,
  stringToNumber: stringToNumber,
  toInteger: stringToInteger,
  stringToInteger: stringToInteger
}

module.exports = numberExports
