var map = require('./map')

var property = require('../function/property')

/**
  * 获取数组对象中某属性值，返回一个数组
  *
  * @param {Array} array 数组
  * @param {String} key 属性值
  * @return {Array}
  */
function pluck (obj, key) {
  return map(obj, property(key))
}

module.exports = pluck
