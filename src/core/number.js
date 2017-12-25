import { isFunction } from './base'
import { sort, map } from './array'

/**
  * 获取一个指定范围内随机数
  *
  * @param {Number} min 最小值
  * @param {Number} max 最大值
  * @return {Number}
  */
export function random (min, max) {
  return min >= max ? min : ((min = min >> 0) + Math.round(Math.random() * ((max || 9) - min)))
}

function sortData (arr, iteratee) {
  return (isFunction(iteratee) ? sort(map(arr, iteratee, this)) : sort(arr, iteratee))
}

/**
  * 获取最小值
  *
  * @param {Array} arr 数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @return {Number}
  */
export function min () {
  return sortData.apply(this, arguments)[0]
}

/**
  * 获取最大值
  *
  * @param {Array} arr 数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @return {Number}
  */
export function max () {
  return sortData.apply(this, arguments).reverse()[0]
}
