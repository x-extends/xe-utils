'use strict'

var { isFunction } = require('./base')
var { arraySort, arrayMap } = require('./array')

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
  return (isFunction(iteratee) ? arraySort(arrayMap(arr, iteratee, this)) : arraySort(arr, iteratee))
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

var numberExports = {
  getRandom: getRandom,
  arrayMin: arrayMin,
  min: min,
  arrayMax: arrayMax,
  max: max
}

module.exports = numberExports
